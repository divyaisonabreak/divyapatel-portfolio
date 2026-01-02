import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { ArrowRight, ChevronDown } from "lucide-react";
import heroImage from "@assets/generated_images/hero_background_workspace_image.png";
import project1 from "@assets/generated_images/web_project_mockup_1.png";
import project2 from "@assets/generated_images/mobile_project_mockup_2.png";
import AnimatedDots from "@/components/ui/AnimatedDots";

export default function Home() {
  const skills = [
    "React",
    "SQL",
    "Node.js",
    "Tailwind CSS",
    "PostgreSQL",
    "UI/UX Design",
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section
        className="relative h-[90vh] flex items-center justify-center overflow-hidden bg-transparent"
        data-testid="section-hero"
      >
        {/* Animated background dots */}
        <AnimatedDots />

        <div className="max-w-7xl mx-auto px-6 md:px-8 text-center z-10">
          <h1 className="text-6xl md:text-8xl font-bold text-black dark:text-white mb-6">
            Creative Developer
          </h1>
          <p className="text-xl md:text-2xl text-black/90 dark:text-white/90 mb-8 max-w-2xl mx-auto font-serif leading-relaxed">
            I build the logic that powers data and the interfaces that explain it.
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
      </section>


      {/* Featured Work Preview */}
      <section className="py-20 md:py-32 bg-background animate-in fade-in slide-in-from-bottom-4 duration-700">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="text-center mb-16 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-100">
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
                    DVD rental store - Sakila Database
                  </h3>
                  <p className="text-white/90 mb-4 font-serif" data-testid="text-project-desc-1">
                    A comprehensive analytics dashboard for DVD rental store with data visualization.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary" className="bg-white/20 text-white">PowerBI</Badge>
                    <Badge variant="secondary" className="bg-white/20 text-white">ERD</Badge>
                    <Badge variant="secondary" className="bg-white/20 text-white">DAX</Badge>
                  </div>
                </CardContent>
              </div>
            </Card>

            {/* Small Project Card */}
            {/* <Card className="overflow-hidden hover-elevate group" data-testid="card-project-2">
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
            </Card> */}

            {/* Another Small Project Card */}
            {/* <Card className="overflow-hidden hover-elevate group" data-testid="card-project-3">
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
            </Card> */}
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
      <section className="py-20 md:py-32 bg-card animate-in fade-in slide-in-from-bottom-4 duration-700">
        <div className="max-w-4xl mx-auto px-6 md:px-8 text-center animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200">
          <Avatar className="w-32 h-32 mx-auto mb-8" data-testid="avatar-profile">
            <AvatarFallback className="text-4xl font-bold bg-primary text-primary-foreground">
              DP
            </AvatarFallback>
          </Avatar>

          <h2 className="text-3xl font-semibold mb-6" data-testid="text-about-title">
            Hi, I'm Divya
          </h2>
          <p className="text-lg text-foreground leading-relaxed font-serif mb-8" data-testid="text-about-bio">
            I don't just use tools; I master them. My journey began with the logic of Java and Data Structures, but evolved into a passion for Data Analytics. Whether it's writing an advanced SQL query to uncover a hidden trend or building a React dashboard to visualize it, I am motivated by the 'magic' of a perfect solution.
            <br />
            I treat every unknown technology not as a hurdle, but as an opportunity to expand my utility belt. If a process can be made faster, smarter, or easier through code, I'm the person to build it.
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
