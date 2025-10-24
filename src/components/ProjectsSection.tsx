import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

export function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const projects = [
    {
      id: 1,
      title: "Display System for Model Kits",
      subtitle: "Display Your Passion Like a Boss, LLC",
      company: "Display Your Passion Like a Boss, LLC",
      role: "CAD Designer | Product Developer",
      tools: "Fusion 360 | OnShape | FDM & SLA 3D Printing | Post-Processing",
      projectType: "Commercial Product Prototyping | Small-Batch Production",
      years: "2021–Present",
      overview: "Designed and developed a modular display system styled after a mecha hangar bay, intended for showcasing mecha model kits and collectibles. The product consists of modular SLA 3D-printed components optimized for strength, fit, and aesthetics. This project involved end-to-end CAD design, prototyping, and mechanical testing to ensure durability, ease of assembly, and visual appeal for collectors. Final designs supported small-batch production and client-ready deployment.",
      contributions: [
        "Designed modular mechanical components, including mounting brackets, structural frames, and aesthetic enclosures tailored for model kit display.",
        "Developed parametric CAD models optimized for SLA 3D printing, ensuring precision fit, structural integrity, and visual cohesion.",
        "Conducted iterative print testing and mechanical evaluation to refine strength, wall-mounting durability, and ease of assembly.",
        "Collaborated on small-batch production processes and ensured designs aligned with client expectations for performance and aesthetics."
      ],
      outcomes: [
        "Achieved reliable structural performance for collector-scale mecha models in multiple mounting configurations.",
        "Reduced printing time and post-processing effort by optimizing geometry and support structure design.",
        "Contributed to the development and release of a modular display product line designed for a range of collector presentation setups."
      ],
      note: "Limited visuals shown due to intellectual property (IP) considerations.",
      images: []
    },
    {
      id: 2,
      title: "DIY Electric Skateboard",
      subtitle: "Personal Project",
      tools: "Fusion 360 | OnShape | FDM 3D Printing | Parametric Modeling | Mechanical Design",
      projectType: "Personal Product Development & Prototyping",
      years: "2016–2022",
      overview: "Designed and built a fully operational electric skateboard from scratch. Integrated mechanical and structural components to ensure high-speed stability, durability, and performance.",
      contributions: [
        "Designed motor enclosures, drivetrain mounts, and structural brackets to withstand high vibrations and load stress.",
        "Used parametric CAD modeling to iteratively refine the mechanical layout for optimal strength and balance.",
        "Selected materials based on durability, printability, and thermal properties for long-term outdoor use.",
        "Conducted field testing and adjustments to improve rider comfort and board responsiveness."
      ],
      images: ["images/electric-skateboard-1.jpg", "images/electric-skateboard-2.jpg"]
    },
    {
      id: 3,
      title: "Customized CoreXY 3D Printer and Add-Ons",
      subtitle: "Hardware Modification",
      tools: "Fusion 360 | OnShape | Custom Firmware | FDM 3D Printing | Mechanical Tuning & Design",
      projectType: "Personal Hardware Modification",
      years: "2020–2023",
      overview: "Designed and implemented structural and mechanical upgrades for a custom-built CoreXY 3D printer. Enhancements aimed to improve stability, print quality, and modularity beyond standard commercial models.",
      contributions: [
        "Engineered modular add-ons such as tool changers, cooling systems, and automated bed leveling mechanisms.",
        "Redesigned motion system mounts and brackets to reduce mechanical vibration and improve print accuracy.",
        "Created custom enclosures and internal cable management systems to maintain clean, safe machine operation.",
        "Validated improvements through test prints and performance comparisons with stock printer configurations."
      ],
      images: ["images/corexy-upgrade-1.jpg", "images/corexy-upgrade-2.jpg"]
    },
    {
      id: 4,
      title: "Product Modifications and Add-Ons",
      subtitle: "Personal Project Enhancements",
      tools: "Fusion 360 | SolidWorks | OnShape | FDM 3D Printing | Mechanical Design | Product Design",
      projectType: "Functional Design & Product Enhancement",
      years: "2015–Present",
      overview: "A curated collection of personal CAD modifications that enhance existing designs for improved usability, aesthetics, or mechanical performance. These range from ergonomic tweaks to enclosure redesigns for electronics, optimized mounts, tool holders, and cosmetic upgrades—all aimed at practical real-world use.",
      contributions: [
        "Redesigned 3D printer fan shrouds for better airflow and quieter operation",
        "Custom ergonomic mouse grips for improved long-term use",
        "Snap-fit cable organizers and compact tool racks for workspace optimization",
        "Visual redesigns for cases and mounts to improve aesthetics while preserving function"
      ],
      images: ["images/corexy-upgrade-1.jpg", "images/corexy-upgrade-2.jpg"]
    }
  ];

  return (
    <section id="projects" className="py-20 px-6 bg-surface/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-gradient mb-4">
            Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto mt-8 rounded-full" />
        </div>

        {/* Project Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((project, index) => (
            <Card
              key={project.id}
              onClick={() => setSelectedProject(project.id)}
              className="card-hover group overflow-hidden border-card-border/50 bg-gradient-surface cursor-pointer transition-all duration-300 hover:scale-105"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="p-6 space-y-3">
                <h3 className="text-xl font-display font-semibold text-foreground group-hover:text-gradient transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {project.subtitle}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Modals */}
      {projects.map((project) => (
        <Dialog
          key={project.id}
          open={selectedProject === project.id}
          onOpenChange={(open) => !open && setSelectedProject(null)}
        >
          <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto bg-surface border-card-border/50">
            <DialogHeader>
              <DialogTitle className="text-3xl font-display font-bold text-gradient">
                {project.title}
              </DialogTitle>
              <DialogDescription className="text-muted-foreground text-base">
                {project.subtitle}
              </DialogDescription>
            </DialogHeader>

            <div className="space-y-6 mt-6">
              {/* Project Metadata */}
              <div className="space-y-3 pb-6 border-b border-border/50">
                {project.company && (
                  <div>
                    <span className="font-semibold text-foreground">Company: </span>
                    <span className="text-muted-foreground">{project.company}</span>
                  </div>
                )}
                {project.role && (
                  <div>
                    <span className="font-semibold text-foreground">Role: </span>
                    <span className="text-muted-foreground">{project.role}</span>
                  </div>
                )}
                <div>
                  <span className="font-semibold text-foreground">Tools Used: </span>
                  <span className="text-muted-foreground">{project.tools}</span>
                </div>
                <div>
                  <span className="font-semibold text-foreground">Project Type: </span>
                  <span className="text-muted-foreground">{project.projectType}</span>
                </div>
                <div>
                  <span className="font-semibold text-foreground">Years Active: </span>
                  <span className="text-muted-foreground">{project.years}</span>
                </div>
              </div>

              {/* Overview */}
              <div>
                <h4 className="text-xl font-display font-semibold text-gradient-secondary mb-3">
                  Overview
                </h4>
                <p className="text-muted-foreground leading-relaxed">
                  {project.overview}
                </p>
              </div>

              {/* Key Contributions/Highlights */}
              <div>
                <h4 className="text-xl font-display font-semibold text-gradient-secondary mb-3">
                  {project.outcomes ? "Key Contributions" : "Key Highlights"}
                </h4>
                <ul className="space-y-2">
                  {project.contributions.map((item, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Outcomes (if applicable) */}
              {project.outcomes && (
                <div>
                  <h4 className="text-xl font-display font-semibold text-gradient-secondary mb-3">
                    Outcomes
                  </h4>
                  <ul className="space-y-2">
                    {project.outcomes.map((item, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        <span className="text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Note (if applicable) */}
              {project.note && (
                <div className="pt-4 border-t border-border/50">
                  <p className="text-sm text-muted-foreground italic">
                    Note: {project.note}
                  </p>
                </div>
              )}

              {/* Image Gallery Placeholder */}
              {project.images && project.images.length > 0 && (
                <div>
                  <h4 className="text-xl font-display font-semibold text-gradient-secondary mb-3">
                    Image Preview
                  </h4>
                  <div className="grid grid-cols-2 gap-4">
                    {project.images.map((img, idx) => (
                      <div
                        key={idx}
                        className="aspect-video bg-muted/30 rounded-md flex items-center justify-center border border-border/30"
                      >
                        <span className="text-sm text-muted-foreground font-mono">
                          [{img}]
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Close Button */}
              <div className="pt-4 border-t border-border/50">
                <Button
                  onClick={() => setSelectedProject(null)}
                  className="w-full bg-gradient-primary text-primary-foreground border-0 hover:bg-gradient-secondary transition-all duration-300"
                >
                  Close
                </Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      ))}
    </section>
  );
}
