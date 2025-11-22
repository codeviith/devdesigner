import { Card } from "@/components/ui/card";
import { User, Brain, FolderOpen, Settings, GraduationCap, Trophy, Mail } from "lucide-react";

interface Section {
  id: string;
  title: string;
  icon: React.ComponentType<{ className?: string }>;
  description: string;
}

interface TableOfContentsProps {
  scrollToSection: (id: string) => void;
}

export function TableOfContents({ scrollToSection }: TableOfContentsProps) {
  const sections: Section[] = [
    {
      id: "about",
      title: "About Me",
      icon: User,
      description: "Background, approach, and design philosophy",
    },
    {
      id: "projects",
      title: "Featured Projects",
      icon: FolderOpen,
      description: "End-to-end product design, CAD work, and prototyping case studies",
    },
    {
      id: "skills",
      title: "Skills & Expertise",
      icon: Brain,
      description: "Technical strengths, design methods, and CAD toolset",
    },
    {
      id: "design-process",
      title: "Design Process & Methodologies",
      icon: Settings,
      description: "Step-by-step workflow for product development and prototyping",
    },
    {
      id: "education",
      title: "Education & Certifications",
      icon: GraduationCap,
      description: "Training, qualifications, and professional development",
    },
    {
      id: "hobbies",
      title: "Sports & Hobbies",
      icon: Trophy,
      description: "Personal passions and hands-on creative interests",
    },
    {
      id: "contact",
      title: "Contact",
      icon: Mail,
      description: "Let’s connect — I’m open to new opportunities and collaborations",
    },
  ];

  return (
    <section id="toc" style={{ padding: "var(--space-3xl) var(--space-md)" }}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center" style={{ marginBottom: "var(--space-2xl)" }}>
          <h2
            className="font-display font-bold"
            style={{
              fontSize: "var(--text-5xl)",
              marginBottom: "var(--space-sm)",
              background: "var(--gradient-secondary)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Portfolio Navigation
          </h2>
        </div>

        <div className="flex flex-wrap justify-center gap-6" style={{ gap: "var(--space-md)" }}>
          {sections.map((section, index) => (
            <div key={section.id} className="w-full sm:w-[min(100%,280px)] md:w-1/2 lg:w-1/3 flex justify-center">
              <Card
                className="card-hover cursor-pointer group bg-surface border-card-border hover:border-primary/50 w-full"
                onClick={() => scrollToSection(section.id)}
                style={{
                  animationDelay: `${index * 100}ms`,
                  padding: "var(--space-sm)",
                  minHeight: "36px",
                }}
              >
                <div className="flex items-start" style={{ gap: "var(--space-sm)" }}>
                  <div
                    className="p-2 rounded-lg bg-gradient-primary transition-all duration-300"
                    style={{
                      minWidth: "36px",
                      minHeight: "36px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <div
                      style={{
                        width: "clamp(16px, 2vw, 18px)",
                        height: "clamp(16px, 2vw, 18px)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <section.icon className="text-primary-foreground w-full h-full" />
                    </div>
                  </div>

                  <div className="flex-1" style={{ display: "flex", flexDirection: "column", gap: "var(--space-xs)" }}>
                    <h3
                      className="font-display font-semibold text-foreground group-hover:text-gradient"
                      style={{ fontSize: "var(--text-sm)" }}
                    >
                      {section.title}
                    </h3>

                    <p className="text-muted-foreground leading-relaxed" style={{ fontSize: "var(--text-xs)" }}>
                      {section.description}
                    </p>
                  </div>
                </div>

                {/* Hover effect indicator */}
                <div style={{ marginTop: "var(--space-sm)", position: "relative" }}>
                  <div className="h-1 w-0 bg-gradient-secondary absolute left-1/2 -translate-x-1/2 group-hover:w-[70%] transition-all duration-500 rounded-full" />
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
