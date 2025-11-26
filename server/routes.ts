import type { Express } from "express";
import { createServer, type Server } from "http";
import { db } from "./db";
import { insertContactMessageSchema, contactMessages, projects, blogPosts, insertProjectSchema, insertBlogPostSchema } from "@shared/schema";
import { desc, eq } from "drizzle-orm";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = insertContactMessageSchema.parse(req.body);
      const [message] = await db.insert(contactMessages).values(validatedData).returning();
      res.json({ success: true, message });
    } catch (error: any) {
      res.status(400).json({
        success: false,
        error: error.message || "Invalid form data",
      });
    }
  });

  // Get all contact messages (optional admin route)
  app.get("/api/contact/messages", async (req, res) => {
    try {
      const messages = await db.select().from(contactMessages).orderBy(desc(contactMessages.createdAt));
      res.json(messages);
    } catch (error: any) {
      res.status(500).json({
        success: false,
        error: "Failed to fetch messages",
      });
    }
  });

  // Get all projects
  app.get("/api/projects", async (req, res) => {
    try {
      const category = req.query.category as string | undefined;
      let allProjects;
      
      if (category && category !== "All") {
        allProjects = await db.select().from(projects).where(eq(projects.category, category)).orderBy(desc(projects.createdAt));
      } else {
        allProjects = await db.select().from(projects).orderBy(desc(projects.createdAt));
      }
      
      res.json(allProjects);
    } catch (error: any) {
      res.status(500).json({
        success: false,
        error: "Failed to fetch projects",
      });
    }
  });

  // Get all blog posts
  app.get("/api/blog", async (req, res) => {
    try {
      const posts = await db.select().from(blogPosts).orderBy(desc(blogPosts.published));
      res.json(posts);
    } catch (error: any) {
      res.status(500).json({
        success: false,
        error: "Failed to fetch blog posts",
      });
    }
  });

  // Get single blog post by slug
  app.get("/api/blog/:slug", async (req, res) => {
    try {
      const [post] = await db.select().from(blogPosts).where(eq(blogPosts.slug, req.params.slug));
      if (!post) {
        return res.status(404).json({ error: "Blog post not found" });
      }
      res.json(post);
    } catch (error: any) {
      res.status(500).json({
        success: false,
        error: "Failed to fetch blog post",
      });
    }
  });

  // Seed database (development only)
  app.post("/api/seed", async (req, res) => {
    try {
      // Check if data already exists
      const existingProjects = await db.select().from(projects);
      if (existingProjects.length > 0) {
        return res.json({ message: "Database already seeded" });
      }

      // Seed projects
      await db.insert(projects).values([
        {
          title: "E-commerce Dashboard",
          description: "A comprehensive analytics dashboard for online stores featuring real-time data visualization, sales tracking, and inventory management. Built with modern technologies for optimal performance.",
          image: "/assets/generated_images/web_project_mockup_1.png",
          tags: ["React", "TypeScript", "Charts.js", "Tailwind CSS"],
          category: "Web",
          liveUrl: "https://example.com",
          githubUrl: "https://github.com",
        },
        {
          title: "Mobile Shopping App",
          description: "Modern e-commerce mobile application with smooth animations, intuitive navigation, and seamless checkout process. Designed for iOS and Android platforms.",
          image: "/assets/generated_images/mobile_project_mockup_2.png",
          tags: ["React Native", "Redux", "Firebase", "Stripe"],
          category: "Mobile",
          liveUrl: "https://example.com",
          githubUrl: "https://github.com",
        },
        {
          title: "Creative Portfolio Website",
          description: "Clean and minimal portfolio showcase for a creative agency. Features smooth scrolling, interactive animations, and a bold typographic approach.",
          image: "/assets/generated_images/design_project_mockup_3.png",
          tags: ["Next.js", "Framer Motion", "Tailwind CSS"],
          category: "Design",
          liveUrl: "https://example.com",
          githubUrl: "https://github.com",
        },
        {
          title: "Task Management Platform",
          description: "Collaborative task management tool with real-time updates, team workflows, and project tracking. Built for teams of all sizes.",
          image: "/assets/generated_images/web_project_mockup_1.png",
          tags: ["React", "Node.js", "PostgreSQL", "Socket.io"],
          category: "Web",
          liveUrl: "https://example.com",
          githubUrl: "https://github.com",
        },
        {
          title: "Fitness Tracking App",
          description: "Mobile application for tracking workouts, nutrition, and health metrics. Includes personalized recommendations and progress visualization.",
          image: "/assets/generated_images/mobile_project_mockup_2.png",
          tags: ["React Native", "GraphQL", "MongoDB"],
          category: "Mobile",
          liveUrl: "https://example.com",
          githubUrl: "https://github.com",
        },
        {
          title: "Brand Identity System",
          description: "Comprehensive design system including logo, color palette, typography, and UI components for a modern tech startup.",
          image: "/assets/generated_images/design_project_mockup_3.png",
          tags: ["Figma", "Design Tokens", "Documentation"],
          category: "Design",
          liveUrl: "https://example.com",
          githubUrl: "https://github.com",
        },
      ]);

      // Seed blog posts
      await db.insert(blogPosts).values([
        {
          title: "Building Modern Web Applications with React and TypeScript",
          slug: "building-modern-web-apps",
          excerpt: "Learn how to build scalable and maintainable web applications using React and TypeScript. Explore best practices and common patterns.",
          content: "# Building Modern Web Applications\\n\\nFull content here...",
          coverImage: "/assets/generated_images/web_project_mockup_1.png",
          tags: ["React", "TypeScript", "Web Development"],
          published: new Date("2024-01-15"),
        },
        {
          title: "Design Systems: Creating Consistency at Scale",
          slug: "design-systems-consistency",
          excerpt: "Discover how to build and maintain a design system that ensures consistency across all your digital products.",
          content: "# Design Systems\\n\\nFull content here...",
          coverImage: "/assets/generated_images/design_project_mockup_3.png",
          tags: ["Design", "UI/UX", "Design Systems"],
          published: new Date("2024-02-20"),
        },
        {
          title: "Mastering Responsive Design in 2024",
          slug: "mastering-responsive-design",
          excerpt: "A comprehensive guide to creating beautiful, responsive layouts that work seamlessly across all devices.",
          content: "# Mastering Responsive Design\\n\\nFull content here...",
          coverImage: "/assets/generated_images/web_project_mockup_1.png",
          tags: ["CSS", "Responsive Design", "Web Development"],
          published: new Date("2024-03-10"),
        },
      ]);

      res.json({ message: "Database seeded successfully" });
    } catch (error: any) {
      res.status(500).json({
        success: false,
        error: "Failed to seed database",
      });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
