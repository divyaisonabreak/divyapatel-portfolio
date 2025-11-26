import { db } from "./db";
import { projects, blogPosts } from "@shared/schema";

async function seed() {
  console.log("Seeding database...");

  // Seed projects
  await db.insert(projects).values([
    {
      title: "E-commerce Dashboard",
      description:
        "A comprehensive analytics dashboard for online stores featuring real-time data visualization, sales tracking, and inventory management. Built with modern technologies for optimal performance.",
      image: "/generated_images/web_project_mockup_1.png",
      tags: ["React", "TypeScript", "Charts.js", "Tailwind CSS"],
      category: "Web",
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
    },
    {
      title: "Mobile Shopping App",
      description:
        "Modern e-commerce mobile application with smooth animations, intuitive navigation, and seamless checkout process. Designed for iOS and Android platforms.",
      image: "/generated_images/mobile_project_mockup_2.png",
      tags: ["React Native", "Redux", "Firebase", "Stripe"],
      category: "Mobile",
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
    },
    {
      title: "Creative Portfolio Website",
      description:
        "Clean and minimal portfolio showcase for a creative agency. Features smooth scrolling, interactive animations, and a bold typographic approach.",
      image: "/generated_images/design_project_mockup_3.png",
      tags: ["Next.js", "Framer Motion", "Tailwind CSS"],
      category: "Design",
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
    },
    {
      title: "Task Management Platform",
      description:
        "Collaborative task management tool with real-time updates, team workflows, and project tracking. Built for teams of all sizes.",
      image: "/generated_images/web_project_mockup_1.png",
      tags: ["React", "Node.js", "PostgreSQL", "Socket.io"],
      category: "Web",
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
    },
    {
      title: "Fitness Tracking App",
      description:
        "Mobile application for tracking workouts, nutrition, and health metrics. Includes personalized recommendations and progress visualization.",
      image: "/generated_images/mobile_project_mockup_2.png",
      tags: ["React Native", "GraphQL", "MongoDB"],
      category: "Mobile",
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
    },
    {
      title: "Brand Identity System",
      description:
        "Comprehensive design system including logo, color palette, typography, and UI components for a modern tech startup.",
      image: "/generated_images/design_project_mockup_3.png",
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
      excerpt:
        "Learn how to build scalable and maintainable web applications using React and TypeScript. Explore best practices and common patterns.",
      content: `# Building Modern Web Applications with React and TypeScript

TypeScript has become an essential tool for modern web development, providing type safety and improved developer experience. In this article, we'll explore how to build robust React applications with TypeScript.

## Why TypeScript?

TypeScript offers several advantages:
- **Type Safety**: Catch errors at compile time
- **Better IDE Support**: Enhanced autocomplete and refactoring
- **Self-Documenting Code**: Types serve as inline documentation
- **Improved Maintainability**: Easier to understand and modify code

## Getting Started

To create a new React + TypeScript project, use Vite for the best development experience:

\`\`\`bash
npm create vite@latest my-app -- --template react-ts
\`\`\`

This sets up a modern development environment with hot module replacement and optimized builds.

## Best Practices

1. **Define clear interfaces** for component props
2. **Use type inference** when possible
3. **Leverage utility types** like Partial, Pick, and Omit
4. **Keep types close to usage** for better organization

## Conclusion

TypeScript and React make a powerful combination for building reliable web applications. Start small, learn incrementally, and enjoy the benefits of type-safe development.`,
      coverImage: "/generated_images/web_project_mockup_1.png",
      tags: ["React", "TypeScript", "Web Development"],
      published: new Date("2024-01-15"),
    },
    {
      title: "Design Systems: Creating Consistency at Scale",
      slug: "design-systems-consistency",
      excerpt:
        "Discover how to build and maintain a design system that ensures consistency across all your digital products.",
      content: `# Design Systems: Creating Consistency at Scale

A well-crafted design system is the foundation of consistent user experiences. It provides reusable components, clear guidelines, and a shared language for designers and developers.

## What is a Design System?

A design system is more than just a component library. It includes:
- Visual design principles
- Component patterns
- Interaction guidelines
- Code standards
- Documentation

## Building Blocks

### Design Tokens
Define your core values:
- Colors
- Typography scales
- Spacing units
- Border radii

### Components
Build reusable UI elements:
- Buttons and inputs
- Cards and modals
- Navigation patterns
- Form elements

## Implementation

Start with the most commonly used components and gradually expand. Document everything and make it easy for your team to contribute.

## Maintaining Your System

- Regular audits
- Version control
- Clear contribution guidelines
- Continuous improvement

A design system is never truly finished—it evolves with your product and organization.`,
      coverImage: "/generated_images/design_project_mockup_3.png",
      tags: ["Design", "UI/UX", "Design Systems"],
      published: new Date("2024-02-20"),
    },
    {
      title: "Mastering Responsive Design in 2024",
      slug: "mastering-responsive-design",
      excerpt:
        "A comprehensive guide to creating beautiful, responsive layouts that work seamlessly across all devices.",
      content: `# Mastering Responsive Design in 2024

Responsive design is no longer optional—it's essential. With users accessing websites from countless devices, your layouts must adapt gracefully.

## Mobile-First Approach

Start designing for mobile and progressively enhance for larger screens:

\`\`\`css
/* Mobile styles first */
.container {
  padding: 1rem;
}

/* Tablet and up */
@media (min-width: 768px) {
  .container {
    padding: 2rem;
  }
}

/* Desktop */
@media (min-width: 1024px) {
  .container {
    padding: 3rem;
  }
}
\`\`\`

## Modern Layout Techniques

### CSS Grid
Perfect for two-dimensional layouts:
- Page structures
- Card grids
- Complex dashboards

### Flexbox
Ideal for one-dimensional layouts:
- Navigation bars
- Form controls
- Content alignment

## Testing

Test on real devices when possible, and use browser developer tools to simulate different screen sizes.

## Performance Considerations

- Use responsive images with srcset
- Implement lazy loading
- Optimize for touch interactions
- Consider connection speed

Responsive design is about creating experiences that work everywhere, for everyone.`,
      coverImage: "/generated_images/web_project_mockup_1.png",
      tags: ["CSS", "Responsive Design", "Web Development"],
      published: new Date("2024-03-10"),
    },
  ]);

  console.log("Database seeded successfully!");
}

seed()
  .catch((error) => {
    console.error("Error seeding database:", error);
    process.exit(1);
  })
  .finally(() => {
    process.exit(0);
  });
