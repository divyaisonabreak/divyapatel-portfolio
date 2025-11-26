import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Code2, Palette, Rocket, Briefcase, GraduationCap } from "lucide-react";

export default function About() {
  const skillCategories = [
    {
      icon: Code2,
      title: "Frontend Development",
      skills: [
        "React & Next.js",
        "TypeScript",
        "Tailwind CSS",
        "Redux & Zustand",
        "Responsive Design",
        "Performance Optimization",
      ],
    },
    {
      icon: Palette,
      title: "Design & UX",
      skills: [
        "UI/UX Design",
        "Figma & Sketch",
        "Design Systems",
        "User Research",
        "Prototyping",
        "Accessibility",
      ],
    },
    {
      icon: Rocket,
      title: "Backend & Tools",
      skills: [
        "Node.js & Express",
        "PostgreSQL & MongoDB",
        "REST & GraphQL",
        "Docker",
        "Git & CI/CD",
        "AWS & Vercel",
      ],
    },
  ];

  const timeline = [
    {
      type: "work",
      icon: Briefcase,
      title: "Senior Frontend Developer",
      organization: "Tech Startup Inc.",
      date: "2022 - Present",
      description:
        "Leading frontend development for a SaaS platform serving 10,000+ users. Architected scalable component libraries and improved performance by 40%.",
    },
    {
      type: "work",
      icon: Briefcase,
      title: "Full Stack Developer",
      organization: "Digital Agency Co.",
      date: "2020 - 2022",
      description:
        "Built custom web applications for clients across various industries. Specialized in React, Node.js, and cloud deployments.",
    },
    {
      type: "education",
      icon: GraduationCap,
      title: "B.S. Computer Science",
      organization: "State University",
      date: "2016 - 2020",
      description:
        "Graduated with honors. Focused on software engineering, algorithms, and human-computer interaction.",
    },
  ];

  return (
    <div className="min-h-screen pt-20 md:pt-24 pb-20">
      {/* Header */}
      <section className="py-12 md:py-20 bg-gradient-to-b from-card to-background">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <h1 className="text-5xl md:text-6xl font-bold text-center mb-6" data-testid="text-page-title">
            About Me
          </h1>
          <p className="text-xl text-center text-muted-foreground font-serif max-w-3xl mx-auto leading-relaxed" data-testid="text-page-subtitle">
            Developer, designer, and problem solver passionate about creating meaningful digital
            experiences
          </p>
        </div>
      </section>

      {/* Narrative Introduction */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Profile Image */}
            <div className="flex justify-center md:justify-start" data-testid="container-profile-image">
              <Avatar className="w-64 h-64 md:w-80 md:h-80">
                <AvatarFallback className="text-8xl font-bold bg-primary text-primary-foreground">
                  JD
                </AvatarFallback>
              </Avatar>
            </div>

            {/* Bio */}
            <div className="space-y-6" data-testid="container-bio">
              <p className="text-lg leading-relaxed font-serif">
                I'm a full-stack developer and designer based in San Francisco, with a passion for
                creating elegant solutions to complex problems. My journey in tech started over 5
                years ago, and since then, I've had the privilege of working on diverse projects
                ranging from e-commerce platforms to data visualization tools.
              </p>
              <p className="text-lg leading-relaxed font-serif">
                What drives me is the intersection of design and functionality. I believe great
                software should not only work flawlessly but also provide a delightful user
                experience. This philosophy guides every project I undertake.
              </p>
              <p className="text-lg leading-relaxed font-serif">
                When I'm not coding, you'll find me exploring new design trends, contributing to
                open-source projects, or mentoring aspiring developers. I'm always excited to
                collaborate on innovative projects that make a positive impact.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills & Experience Grid */}
      <section className="py-16 md:py-24 bg-card">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <h2 className="text-3xl md:text-4xl font-semibold text-center mb-12" data-testid="text-skills-title">
            Skills & Expertise
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {skillCategories.map((category) => (
              <Card key={category.title} className="hover-elevate" data-testid={`card-skill-${category.title.toLowerCase().replace(/\s+/g, '-')}`}>
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <category.icon className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  <CardTitle className="text-xl">{category.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <Badge key={skill} variant="secondary" className="text-sm" data-testid={`badge-${skill.toLowerCase().replace(/\s+/g, '-')}`}>
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-6 md:px-8">
          <h2 className="text-3xl md:text-4xl font-semibold text-center mb-16" data-testid="text-timeline-title">
            Experience & Education
          </h2>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-border" data-testid="timeline-line" />

            <div className="space-y-12">
              {timeline.map((item, index) => (
                <div
                  key={index}
                  className={`relative flex flex-col md:flex-row gap-6 ${
                    index % 2 === 0 ? "md:flex-row-reverse" : ""
                  }`}
                  data-testid={`timeline-item-${index}`}
                >
                  {/* Content */}
                  <div className={`flex-1 ${index % 2 === 0 ? "md:text-right" : ""}`}>
                    <Card className="hover-elevate">
                      <CardHeader>
                        <div className={`flex items-center gap-3 mb-2 ${index % 2 === 0 ? "md:justify-end" : ""}`}>
                          <div className="p-2 bg-primary/10 rounded-lg">
                            <item.icon className="h-5 w-5 text-primary" />
                          </div>
                        </div>
                        <CardTitle className="text-xl" data-testid={`text-timeline-title-${index}`}>
                          {item.title}
                        </CardTitle>
                        <p className="text-sm text-muted-foreground font-medium" data-testid={`text-timeline-org-${index}`}>
                          {item.organization}
                        </p>
                        <p className="text-sm text-muted-foreground" data-testid={`text-timeline-date-${index}`}>
                          {item.date}
                        </p>
                      </CardHeader>
                      <CardContent>
                        <p className="font-serif leading-relaxed" data-testid={`text-timeline-desc-${index}`}>
                          {item.description}
                        </p>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Timeline Dot */}
                  <div className="absolute left-0 md:left-1/2 -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background" data-testid={`timeline-dot-${index}`} />

                  {/* Spacer */}
                  <div className="hidden md:block flex-1" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
