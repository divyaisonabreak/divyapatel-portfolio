var __defProp = Object.defineProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};

// server/index-prod.ts
import fs from "node:fs";
import path from "node:path";
import express2 from "express";

// server/app.ts
import express from "express";

// server/routes.ts
import { createServer } from "http";

// server/db.ts
import { drizzle } from "drizzle-orm/neon-serverless";
import { Pool } from "@neondatabase/serverless";

// shared/schema.ts
var schema_exports = {};
__export(schema_exports, {
  blogPosts: () => blogPosts,
  contactMessages: () => contactMessages,
  insertBlogPostSchema: () => insertBlogPostSchema,
  insertContactMessageSchema: () => insertContactMessageSchema,
  insertProjectSchema: () => insertProjectSchema,
  insertUserSchema: () => insertUserSchema,
  projects: () => projects,
  users: () => users
});
import { sql } from "drizzle-orm";
import { pgTable, text, varchar, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
var users = pgTable("users", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  username: text("username").notNull().unique(),
  password: text("password").notNull()
});
var insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true
});
var contactMessages = pgTable("contact_messages", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  name: text("name").notNull(),
  email: text("email").notNull(),
  subject: text("subject").notNull(),
  message: text("message").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull()
});
var insertContactMessageSchema = createInsertSchema(contactMessages).omit({
  id: true,
  createdAt: true
});
var projects = pgTable("projects", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  title: text("title").notNull(),
  description: text("description").notNull(),
  image: text("image").notNull(),
  tags: text("tags").array().notNull(),
  category: text("category").notNull(),
  liveUrl: text("live_url").notNull(),
  githubUrl: text("github_url").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull()
});
var insertProjectSchema = createInsertSchema(projects).omit({
  id: true,
  createdAt: true
});
var blogPosts = pgTable("blog_posts", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  title: text("title").notNull(),
  slug: text("slug").notNull().unique(),
  excerpt: text("excerpt").notNull(),
  content: text("content").notNull(),
  coverImage: text("cover_image"),
  tags: text("tags").array().notNull(),
  published: timestamp("published"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull()
});
var insertBlogPostSchema = createInsertSchema(blogPosts).omit({
  id: true,
  createdAt: true,
  updatedAt: true
});

// server/db.ts
if (!process.env.DATABASE_URL) {
  throw new Error("DATABASE_URL must be set. Did you forget to provision a database?");
}
var pool = new Pool({ connectionString: process.env.DATABASE_URL });
var db = drizzle({ client: pool, schema: schema_exports });

// server/routes.ts
import { desc, eq } from "drizzle-orm";
async function registerRoutes(app2) {
  app2.post("/api/contact", async (req, res) => {
    try {
      const validatedData = insertContactMessageSchema.parse(req.body);
      const [message] = await db.insert(contactMessages).values(validatedData).returning();
      res.json({ success: true, message });
    } catch (error) {
      res.status(400).json({
        success: false,
        error: error.message || "Invalid form data"
      });
    }
  });
  app2.get("/api/contact/messages", async (req, res) => {
    try {
      const messages = await db.select().from(contactMessages).orderBy(desc(contactMessages.createdAt));
      res.json(messages);
    } catch (error) {
      res.status(500).json({
        success: false,
        error: "Failed to fetch messages"
      });
    }
  });
  app2.get("/api/projects", async (req, res) => {
    try {
      const category = req.query.category;
      let allProjects;
      if (category && category !== "All") {
        allProjects = await db.select().from(projects).where(eq(projects.category, category)).orderBy(desc(projects.createdAt));
      } else {
        allProjects = await db.select().from(projects).orderBy(desc(projects.createdAt));
      }
      res.json(allProjects);
    } catch (error) {
      res.status(500).json({
        success: false,
        error: "Failed to fetch projects"
      });
    }
  });
  app2.get("/api/blog", async (req, res) => {
    try {
      const posts = await db.select().from(blogPosts).orderBy(desc(blogPosts.published));
      res.json(posts);
    } catch (error) {
      res.status(500).json({
        success: false,
        error: "Failed to fetch blog posts"
      });
    }
  });
  app2.get("/api/blog/:slug", async (req, res) => {
    try {
      const [post] = await db.select().from(blogPosts).where(eq(blogPosts.slug, req.params.slug));
      if (!post) {
        return res.status(404).json({ error: "Blog post not found" });
      }
      res.json(post);
    } catch (error) {
      res.status(500).json({
        success: false,
        error: "Failed to fetch blog post"
      });
    }
  });
  app2.post("/api/seed", async (req, res) => {
    try {
      const existingProjects = await db.select().from(projects);
      if (existingProjects.length > 0) {
        return res.json({ message: "Database already seeded" });
      }
      await db.insert(projects).values([
        {
          title: "E-commerce Dashboard",
          description: "A comprehensive analytics dashboard for online stores featuring real-time data visualization, sales tracking, and inventory management. Built with modern technologies for optimal performance.",
          image: "/assets/generated_images/web_project_mockup_1.png",
          tags: ["React", "TypeScript", "Charts.js", "Tailwind CSS"],
          category: "Web",
          liveUrl: "https://example.com",
          githubUrl: "https://github.com"
        },
        {
          title: "Mobile Shopping App",
          description: "Modern e-commerce mobile application with smooth animations, intuitive navigation, and seamless checkout process. Designed for iOS and Android platforms.",
          image: "/assets/generated_images/mobile_project_mockup_2.png",
          tags: ["React Native", "Redux", "Firebase", "Stripe"],
          category: "Mobile",
          liveUrl: "https://example.com",
          githubUrl: "https://github.com"
        },
        {
          title: "Creative Portfolio Website",
          description: "Clean and minimal portfolio showcase for a creative agency. Features smooth scrolling, interactive animations, and a bold typographic approach.",
          image: "/assets/generated_images/design_project_mockup_3.png",
          tags: ["Next.js", "Framer Motion", "Tailwind CSS"],
          category: "Design",
          liveUrl: "https://example.com",
          githubUrl: "https://github.com"
        },
        {
          title: "Task Management Platform",
          description: "Collaborative task management tool with real-time updates, team workflows, and project tracking. Built for teams of all sizes.",
          image: "/assets/generated_images/web_project_mockup_1.png",
          tags: ["React", "Node.js", "PostgreSQL", "Socket.io"],
          category: "Web",
          liveUrl: "https://example.com",
          githubUrl: "https://github.com"
        },
        {
          title: "Fitness Tracking App",
          description: "Mobile application for tracking workouts, nutrition, and health metrics. Includes personalized recommendations and progress visualization.",
          image: "/assets/generated_images/mobile_project_mockup_2.png",
          tags: ["React Native", "GraphQL", "MongoDB"],
          category: "Mobile",
          liveUrl: "https://example.com",
          githubUrl: "https://github.com"
        },
        {
          title: "Brand Identity System",
          description: "Comprehensive design system including logo, color palette, typography, and UI components for a modern tech startup.",
          image: "/assets/generated_images/design_project_mockup_3.png",
          tags: ["Figma", "Design Tokens", "Documentation"],
          category: "Design",
          liveUrl: "https://example.com",
          githubUrl: "https://github.com"
        }
      ]);
      await db.insert(blogPosts).values([
        {
          title: "Building Modern Web Applications with React and TypeScript",
          slug: "building-modern-web-apps",
          excerpt: "Learn how to build scalable and maintainable web applications using React and TypeScript. Explore best practices and common patterns.",
          content: "# Building Modern Web Applications\\n\\nFull content here...",
          coverImage: "/assets/generated_images/web_project_mockup_1.png",
          tags: ["React", "TypeScript", "Web Development"],
          published: /* @__PURE__ */ new Date("2024-01-15")
        },
        {
          title: "Design Systems: Creating Consistency at Scale",
          slug: "design-systems-consistency",
          excerpt: "Discover how to build and maintain a design system that ensures consistency across all your digital products.",
          content: "# Design Systems\\n\\nFull content here...",
          coverImage: "/assets/generated_images/design_project_mockup_3.png",
          tags: ["Design", "UI/UX", "Design Systems"],
          published: /* @__PURE__ */ new Date("2024-02-20")
        },
        {
          title: "Mastering Responsive Design in 2024",
          slug: "mastering-responsive-design",
          excerpt: "A comprehensive guide to creating beautiful, responsive layouts that work seamlessly across all devices.",
          content: "# Mastering Responsive Design\\n\\nFull content here...",
          coverImage: "/assets/generated_images/web_project_mockup_1.png",
          tags: ["CSS", "Responsive Design", "Web Development"],
          published: /* @__PURE__ */ new Date("2024-03-10")
        }
      ]);
      res.json({ message: "Database seeded successfully" });
    } catch (error) {
      res.status(500).json({
        success: false,
        error: "Failed to seed database"
      });
    }
  });
  const httpServer = createServer(app2);
  return httpServer;
}

// server/app.ts
function log(message, source = "express") {
  const formattedTime = (/* @__PURE__ */ new Date()).toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit",
    hour12: true
  });
  console.log(`${formattedTime} [${source}] ${message}`);
}
var app = express();
app.use(express.json({
  verify: (req, _res, buf) => {
    req.rawBody = buf;
  }
}));
app.use(express.urlencoded({ extended: false }));
app.use((req, res, next) => {
  const start = Date.now();
  const path2 = req.path;
  let capturedJsonResponse = void 0;
  const originalResJson = res.json;
  res.json = function(bodyJson, ...args) {
    capturedJsonResponse = bodyJson;
    return originalResJson.apply(res, [bodyJson, ...args]);
  };
  res.on("finish", () => {
    const duration = Date.now() - start;
    if (path2.startsWith("/api")) {
      let logLine = `${req.method} ${path2} ${res.statusCode} in ${duration}ms`;
      if (capturedJsonResponse) {
        logLine += ` :: ${JSON.stringify(capturedJsonResponse)}`;
      }
      if (logLine.length > 80) {
        logLine = logLine.slice(0, 79) + "\u2026";
      }
      log(logLine);
    }
  });
  next();
});
async function runApp(setup) {
  const server = await registerRoutes(app);
  app.use((err, _req, res, _next) => {
    const status = err.status || err.statusCode || 500;
    const message = err.message || "Internal Server Error";
    res.status(status).json({ message });
    throw err;
  });
  await setup(app, server);
  const port = parseInt(process.env.PORT || "5000", 10);
  server.listen({
    port,
    host: "0.0.0.0",
    reusePort: true
  }, () => {
    log(`serving on port ${port}`);
  });
}

// server/index-prod.ts
async function serveStatic(app2, _server) {
  const distPath = path.resolve(import.meta.dirname, "public");
  if (!fs.existsSync(distPath)) {
    throw new Error(
      `Could not find the build directory: ${distPath}, make sure to build the client first`
    );
  }
  app2.use(express2.static(distPath));
  app2.use("*", (_req, res) => {
    res.sendFile(path.resolve(distPath, "index.html"));
  });
}
(async () => {
  await runApp(serveStatic);
})();
export {
  serveStatic
};
