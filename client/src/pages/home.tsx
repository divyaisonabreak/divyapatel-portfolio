import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { ArrowRight, ChevronDown } from "lucide-react";
import heroImage from "@assets/generated_images/hero_background_workspace_image.png";
import project1 from "@assets/generated_images/web_project_mockup_1.png";
import project2 from "@assets/generated_images/mobile_project_mockup_2.png";

export default function Home() {
  const skills = [
    "React",
    "TypeScript",
    "Node.js",
    "Tailwind CSS",
    "PostgreSQL",
    "UI/UX Design",
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section
        className="relative h-[90vh] flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        data-testid="section-hero"
      >
        <div className="max-w-7xl mx-auto px-6 md:px-8 text-center z-10">
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-6" data-testid="text-hero-title">
            Creative Developer
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto font-serif leading-relaxed" data-testid="text-hero-subtitle">
            Building beautiful digital experiences that matter
          </p>
          <Link href="/projects">
            <Button
              size="lg"
              className="backdrop-blur-md bg-primary/90 hover:bg-primary text-lg px-8 py-6 rounded-full"
              data-testid="button-view-work"
            >
              View My Work
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce" data-testid="scroll-indicator">
          <ChevronDown className="h-8 w-8 text-white/80" />
        </div>
      </section>

      {/* Featured Work Preview */}
      <section className="py-20 md:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4" data-testid="text-featured-title">
              Featured Work
            </h2>
            <p className="text-xl text-muted-foreground font-serif" data-testid="text-featured-subtitle">
              A selection of recent projects
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Large Project Card */}
            <Card className="md:row-span-2 overflow-hidden hover-elevate group" data-testid="card-project-1">
              <div className="relative h-full">
                <img
                  src={project1}
                  alt="E-commerce Dashboard"
                  className="w-full h-full object-cover"
                />
                <CardContent className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h3 className="text-2xl font-semibold text-white mb-2" data-testid="text-project-title-1">
                    E-commerce Dashboard
                  </h3>
                  <p className="text-white/90 mb-4 font-serif" data-testid="text-project-desc-1">
                    A comprehensive analytics dashboard for online stores with real-time data
                    visualization.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary" className="bg-white/20 text-white">React</Badge>
                    <Badge variant="secondary" className="bg-white/20 text-white">TypeScript</Badge>
                    <Badge variant="secondary" className="bg-white/20 text-white">Charts</Badge>
                  </div>
                </CardContent>
              </div>
            </Card>

            {/* Small Project Card */}
            <Card className="overflow-hidden hover-elevate group" data-testid="card-project-2">
              <div className="relative h-64">
                <img
                  src={project2}
                  alt="Mobile Shopping App"
                  className="w-full h-full object-cover"
                />
                <CardContent className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h3 className="text-xl font-semibold text-white mb-2" data-testid="text-project-title-2">
                    Mobile Shopping App
                  </h3>
                  <p className="text-white/90 mb-3 font-serif text-sm" data-testid="text-project-desc-2">
                    Modern e-commerce mobile experience
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary" className="bg-white/20 text-white text-xs">
                      React Native
                    </Badge>
                    <Badge variant="secondary" className="bg-white/20 text-white text-xs">
                      Mobile
                    </Badge>
                  </div>
                </CardContent>
              </div>
            </Card>

            {/* Another Small Project Card */}
            <Card className="overflow-hidden hover-elevate group" data-testid="card-project-3">
              <div className="relative h-64">
                <div className="w-full h-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                  <div className="text-center p-6">
                    <h3 className="text-xl font-semibold mb-2" data-testid="text-project-title-3">
                      Portfolio Redesign
                    </h3>
                    <p className="text-muted-foreground font-serif text-sm" data-testid="text-project-desc-3">
                      Creative agency portfolio website
                    </p>
                  </div>
                </div>
                <CardContent className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h3 className="text-xl font-semibold text-white mb-2">Portfolio Redesign</h3>
                  <p className="text-white/90 mb-3 font-serif text-sm">
                    Clean and minimal portfolio showcase
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary" className="bg-white/20 text-white text-xs">
                      Design
                    </Badge>
                    <Badge variant="secondary" className="bg-white/20 text-white text-xs">
                      Web
                    </Badge>
                  </div>
                </CardContent>
              </div>
            </Card>
          </div>

          <div className="text-center">
            <Link href="/projects">
              <Button variant="outline" size="lg" data-testid="button-view-all-projects">
                View All Projects
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Brief About Section */}
      <section className="py-20 md:py-32 bg-card">
        <div className="max-w-4xl mx-auto px-6 md:px-8 text-center">
          <Avatar className="w-32 h-32 mx-auto mb-8" data-testid="avatar-profile">
            <AvatarFallback className="text-4xl font-bold bg-primary text-primary-foreground">
              JD
            </AvatarFallback>
          </Avatar>

          <h2 className="text-3xl font-semibold mb-6" data-testid="text-about-title">
            Hi, I'm John Doe
          </h2>
          <p className="text-lg text-foreground leading-relaxed font-serif mb-8" data-testid="text-about-bio">
            A passionate full-stack developer and designer with over 5 years of experience creating
            modern web applications. I specialize in building responsive, user-friendly interfaces
            that solve real problems. My approach combines technical excellence with creative design
            thinking to deliver exceptional digital experiences.
          </p>

          <div className="flex flex-wrap justify-center gap-3 mb-8" data-testid="skills-container">
            {skills.map((skill) => (
              <Badge key={skill} variant="secondary" className="px-3 py-1 text-sm" data-testid={`badge-skill-${skill.toLowerCase().replace(/\s+/g, '-')}`}>
                {skill}
              </Badge>
            ))}
          </div>

          <Link href="/about">
            <Button variant="outline" size="lg" data-testid="button-learn-more">
              Learn More About Me
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
