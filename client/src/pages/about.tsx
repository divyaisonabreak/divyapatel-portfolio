import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Code2, Palette, Rocket, Briefcase, GraduationCap, CodeIcon, Handshake } from "lucide-react";

export default function About() {
  const skillCategories = [
    {
      icon: Code2,
      title: "Frontend Development",
      skills: [
        "React & Next.js",
        "TypeScript",
        "Tailwind CSS",
        "Responsive Design",
        "HTML",
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
      ],
    },
    {
      icon: Rocket,
      title: "Backend & Tools",
      skills: [
        "Node.js & Express",
        "REST & GraphQL",
        "Git",
      ],
    },
    {
      icon: CodeIcon,
      title: "Data Analysis",
      skills: [
        "SQL",
        "PostgreSQL & MongoDB",
        "PowerBI",
        "Excel",
        "Python",
      ],
    },
  ];

  const timeline = [
    {
      type: "work",
      icon: Briefcase,
      title: "Suject Matter Expert",
      organization: "IntouchCX",
      date: "2025 - Present",
      description:
        "Partner with leadership to coach team members and resolve 30-50 daily customer's inquiries using Salesforce to maintain a 95% satisfaction rate.",
    },
    {
      type: "work",
      icon: Briefcase,
      title: "Junior Systems Analyst",
      organization: "Government of Manitoba",
      date: "2023 - 2024",
      description:
        "Built Power BI dashboards and optimized SQL scripts that automated monthly reporting, reducing manual effort by 40%.",
    },
    {
      type: "work",
      icon: Briefcase,
      title: "Teaching Assistant",
      organization: "The University of Winnipeg",
      date: "2023 - Present",
      description:
        "Facilitated labs and evaluated SQL, Java, and Statistics assignments for over 60 students per term to strengthen their database design skills.",
    },
    {
      type: "work",
      icon: Briefcase,
      title: "Junior Student Central Assistant",
      organization: "University of Winnipeg",
      date: "2023 - 2024",
      description:
        "Managed front-line student support and processed over 200 academic document requests per term while ensuring FIPPA privacy compliance.",
    },
    {
      type: "work",
      icon: Briefcase,
      title: "Student Mentor",
      organization: "University of Winnipeg",
      date: "2023 - 2024",
      description:
        "Mentored over 10 international students on academic transitions and organized campus events for up to 500 attendees.",
    },
    {
      type: "education",
      icon: GraduationCap,
      title: "B.Sc. Applied Computer Science",
      organization: "The University of Winnipeg",
      date: "2021 - 2024",
      description:
        "Graduated from the University of Winnipeg on the Dean's Honour List with a minor in Statistics.",
    },
    {
      type: "volunteer",
      icon: Handshake,
      title: "Volunteer - Website Manager",
      organization: "HSDE",
      date: "2025 - Present",
      description:
        "Contributed as an IT volunteer for HSDE and managed website content for local events.",
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
            I use data to find answers and web tools to build solutions.
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
                  DP
                </AvatarFallback>
              </Avatar>
            </div>

            {/* Bio */}
            <div className="space-y-6" data-testid="container-bio">
              <p className="text-lg leading-relaxed font-serif">
                I am a Data Analyst with a background in Computer Science and a passion for Web Development.
                My approach to tech is simple: I see a problem, I identify the right tools to fix it, and
                I learn them until I have a full grasp of the solution. I don't avoid new challenges - I take them as opportunities to expand what I can do.
              </p>
              <p className="text-lg leading-relaxed font-serif">
                While my core focus is on Data Analysis, I enjoy using React and JavaScript to make processes easier and more visual.
                I've spent a lot of time mastering SQL and relational databases to handle complex data,
                and I use PowerBI to turn that data into something anyone can understand.
              </p>
              <p className="text-lg leading-relaxed font-serif">
                I’m currently looking for Data Analyst roles where I can also apply my technical development skills.
                I love collaborating with other tech-minded people on projects that require deep dives into SQL, Python, or interactive dashboards.
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
                  className={`relative flex flex-col md:flex-row gap-6 ${index % 2 === 0 ? "md:flex-row-reverse" : ""
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
