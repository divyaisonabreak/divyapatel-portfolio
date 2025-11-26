import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import project1 from "@assets/generated_images/web_project_mockup_1.png";
import project2 from "@assets/generated_images/mobile_project_mockup_2.png";
import project3 from "@assets/generated_images/design_project_mockup_3.png";

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filters = ["All", "Web", "Mobile", "Design"];

  const projects = [
    {
      id: 1,
      title: "E-commerce Dashboard",
      description:
        "A comprehensive analytics dashboard for online stores featuring real-time data visualization, sales tracking, and inventory management. Built with modern technologies for optimal performance.",
      image: project1,
      tags: ["React", "TypeScript", "Charts.js", "Tailwind CSS"],
      category: "Web",
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
    },
    {
      id: 2,
      title: "Mobile Shopping App",
      description:
        "Modern e-commerce mobile application with smooth animations, intuitive navigation, and seamless checkout process. Designed for iOS and Android platforms.",
      image: project2,
      tags: ["React Native", "Redux", "Firebase", "Stripe"],
      category: "Mobile",
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
    },
    {
      id: 3,
      title: "Creative Portfolio Website",
      description:
        "Clean and minimal portfolio showcase for a creative agency. Features smooth scrolling, interactive animations, and a bold typographic approach.",
      image: project3,
      tags: ["Next.js", "Framer Motion", "Tailwind CSS"],
      category: "Design",
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
    },
    {
      id: 4,
      title: "Task Management Platform",
      description:
        "Collaborative task management tool with real-time updates, team workflows, and project tracking. Built for teams of all sizes.",
      image: project1,
      tags: ["React", "Node.js", "PostgreSQL", "Socket.io"],
      category: "Web",
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
    },
    {
      id: 5,
      title: "Fitness Tracking App",
      description:
        "Mobile application for tracking workouts, nutrition, and health metrics. Includes personalized recommendations and progress visualization.",
      image: project2,
      tags: ["React Native", "GraphQL", "MongoDB"],
      category: "Mobile",
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
    },
    {
      id: 6,
      title: "Brand Identity System",
      description:
        "Comprehensive design system including logo, color palette, typography, and UI components for a modern tech startup.",
      image: project3,
      tags: ["Figma", "Design Tokens", "Documentation"],
      category: "Design",
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
    },
  ];

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <div className="min-h-screen pt-20 md:pt-24 pb-20">
      {/* Header */}
      <section className="py-12 md:py-20 bg-gradient-to-b from-card to-background">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <h1 className="text-5xl md:text-6xl font-bold text-center mb-6" data-testid="text-page-title">
            My Projects
          </h1>
          <p className="text-xl text-center text-muted-foreground font-serif max-w-3xl mx-auto leading-relaxed" data-testid="text-page-subtitle">
            A showcase of my recent work across web, mobile, and design projects
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="flex flex-wrap justify-center gap-3" data-testid="filter-buttons">
            {filters.map((filter) => (
              <Button
                key={filter}
                variant={activeFilter === filter ? "default" : "outline"}
                onClick={() => setActiveFilter(filter)}
                className="hover-elevate active-elevate-2"
                data-testid={`button-filter-${filter.toLowerCase()}`}
              >
                {filter}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" data-testid="projects-grid">
            {filteredProjects.map((project) => (
              <Card
                key={project.id}
                className="overflow-hidden hover-elevate group"
                data-testid={`card-project-${project.id}`}
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    data-testid={`img-project-${project.id}`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <div className="flex gap-3">
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        data-testid={`link-live-${project.id}`}
                      >
                        <Button
                          size="sm"
                          variant="outline"
                          className="bg-white/10 hover:bg-white/20 text-white border-white/20 backdrop-blur-md"
                        >
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Live
                        </Button>
                      </a>
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        data-testid={`link-github-${project.id}`}
                      >
                        <Button
                          size="sm"
                          variant="outline"
                          className="bg-white/10 hover:bg-white/20 text-white border-white/20 backdrop-blur-md"
                        >
                          <Github className="h-4 w-4 mr-2" />
                          Code
                        </Button>
                      </a>
                    </div>
                  </div>
                </div>

                <CardContent className="p-6">
                  <h3 className="text-2xl font-semibold mb-3" data-testid={`text-title-${project.id}`}>
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground font-serif leading-relaxed mb-4" data-testid={`text-desc-${project.id}`}>
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2" data-testid={`tags-${project.id}`}>
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs" data-testid={`badge-${tag.toLowerCase().replace(/\s+/g, '-')}`}>
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Empty State */}
          {filteredProjects.length === 0 && (
            <div className="text-center py-20" data-testid="empty-state">
              <p className="text-xl text-muted-foreground">
                No projects found in this category
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
