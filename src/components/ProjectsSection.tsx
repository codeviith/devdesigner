import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

export function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const projects = [
    {
      id: 1,
      title: "Display System for Model Kits",
      subtitle: "Commercial Product Line",
      company: "Display Your Passion Like a Boss, LLC",
      role: "CAD Designer | Product Developer",
      tools: "Fusion 360 | Onshape | SLA & FDM 3D Printing | Post-Processing | Parametric Modeling",
      projectType: "Commercial Product Prototyping | Small-Batch Production",
      years: "2021–Present",
      overview:
        "The Display System for Model Kits is a modular, hangar-bay–inspired presentation platform engineered for showcasing collectible mecha kits. The system was developed as a commercial product—requiring a balance of structural strength, precise fit, visual fidelity, and manufacturability for small-batch SLA production. This project involved full-cycle product development: parametric CAD modeling, structural and aesthetic component design, iterative prototype testing, and production refinement. I designed modular SLA-printable components, optimized them for stability and repeatability, and ensured the final product achieved both display-ready quality and collector-grade durability. Finalized designs were prepared for consistent, small-batch production and customer deployment.",
      contributions: [
        "Designed modular mechanical components including structural frames, mounting brackets, paneling, and aesthetic shells tailored to mecha-themed displays.",
        "Developed precision parametric CAD models optimized for SLA 3D printing, ensuring consistent tolerance fit, stability, and visually cohesive design language.",
        "Executed iterative print testing to refine part strength, dimensional reliability, and ease of assembly across varying configurations.",
        "Established display-specific mechanical considerations such as center-of-gravity stability, load distribution, and multi-angle mounting support.",
        "Implemented post-processing workflows (sanding, priming, assembly fitting) to deliver presentation-quality surfaces for end users.",
        "Collaborated on small-batch production planning, ensuring the design aligned with print efficiency, post-processing requirements, and customer expectations.",
        "Created interchangeable accessory components allowing users to customize layout, height, and display orientation.",
      ],
      outcomes: [
        "Delivered a modular display system with strong structural reliability, precise component fit, and cohesive visual presentation—supporting collector-scale mecha kits across multiple configurations while reducing print time and post-processing effort through optimized SLA-ready geometry.",
      ],
      note: "Limited visuals shown due to intellectual property (IP) considerations.",
      images: ["images/display-system-1.jpg", "images/display-system-2.jpg"],
    },
    {
      id: 2,
      title: "DIY Electric Skateboard",
      subtitle: "Custom Engineered Build",
      tools: "Fusion 360 | Onshape | FDM 3D Printing | Parametric Modeling | Mechanical Design | Electronics Integration",
      projectType: "Personal Product Development & Prototyping",
      years: "2016 – 2022",
      overview:
        "Designed and fabricated a fully operational electric skateboard from the ground up, integrating mechanical, electrical, and structural components for high-speed performance and long-term reliability. The project emphasized parametric design, vibration control, and ergonomic form, combining advanced CAD modeling with iterative real-world testing.",
      contributions: [
        "Modeled and assembled custom drivetrain mounts, motor housings, and structural brackets using Fusion 360 and Onshape, ensuring precise alignment and optimal torque transmission.",
        "Applied parametric CAD modeling and finite-element stress analysis to refine deck geometry, motor positioning, and load distribution for stability at high speed.",
        "Fabricated high-tolerance 3D-printed components to balance lightweight construction with structural durability and vibration resistance.",
        "Integrated and configured electronic systems including dual brushless motors, ESCs, and a lithium-ion battery pack for synchronized acceleration and braking.",
        "Implemented field testing and iterative tuning, improving control responsiveness, shock absorption, and rider comfort through repeated calibration cycles.",
        "Optimized material selection (PLA+, PETG, and aluminum brackets) based on durability, printability, and heat dissipation properties for outdoor performance.",
        "Styled the board with functional aesthetics, including cable routing, enclosure shaping, and surface finishing for professional appearance and user safety.",
        "Demonstrated ability to integrate mechanical, electrical, and structural systems into a high-speed, user-operated platform, reinforcing safe and reliable real-world performance.",
      ],
      outcomes: [
        "Delivered a durable, reliable personal electric vehicle by eliminating vibration and stability issues through iterative tuning—resulting in a smoother, safer, and more controlled riding experience across varied terrain.",
      ],
      images: ["images/electric-skateboard-1.jpg", "images/electric-skateboard-2.jpg"],
    },
    {
      id: 3,
      title: "Customized CoreXY 3D Printer Build",
      subtitle: "Mechanical Upgrades & System Enhancements",
      tools: "Fusion 360 | FDM 3D Printing | Parametric Design | CNC Machining | Motion Calibration | Hardware Integration",
      projectType: "Personal Product Development & Mechanical Optimization",
      years: "2020 – 2023",
      overview:
        "Developed and engineered a fully customized CoreXY 3D printer that outperformed standard retail models in print accuracy, mechanical stability, and modular adaptability. The system was designed to serve as a test platform for experimental mechanical assemblies, automation features, and high-precision motion calibration.",
      contributions: [
        "Engineered modular mechanical assemblies including tool changers, printhead mounts, and automated bed-leveling systems to improve precision and ease of maintenance.",
        "Designed and fabricated custom structural components to increase frame rigidity, reduce vibration, and stabilize linear motion at higher print speeds.",
        "Integrated mechanical calibration systems to fine-tune belt tension, Z-axis alignment, and printhead positioning, achieving sub-millimeter print accuracy.",
        "Optimized thermal and cooling performance with redesigned fan ducting, extruder paths, and electronics enclosures for consistent temperature control.",
        "Implemented parametric and feature-based CAD modeling for rapid part customization, scalability, and future system upgrades.",
        "Tested and validated mechanical performance through iterative calibration cycles, achieving improved dimensional accuracy, repeatability, and surface finish quality.",
        "Established a modular wiring and electronics layout enabling quick replacement and diagnostics of stepper drivers, limit switches, and heating elements.",
        "Benchmarked print accuracy and repeatability, achieving measurable improvements over retail machines in dimensional precision and motion stability.",
      ],
      outcomes: [
        "Achieved significantly improved print accuracy, surface quality, and mechanical stability through targeted mechanical upgrades—delivering performance that surpasses typical retail 3D printers.",
      ],
      images: ["images/corexy-upgrade-1.jpg", "images/corexy-upgrade-2.jpg"],
    },
    {
      id: 4,
      title: "Product Redesigns & Functional Add-Ons",
      subtitle: "Iterative Improvements",
      tools: "Fusion 360 | Onshape | FDM 3D Printing | Design for Manufacturability (DFM) | Human-Centered Design | Mechanical Optimization",
      projectType: "Iterative Product Redesign & Functional Enhancement",
      years: "2021 – Present",
      overview:
        "Designed and implemented targeted mechanical and aesthetic improvements to existing consumer and hobbyist products, focusing on usability, ergonomics, and structural optimization. Each redesign applied iterative prototyping and parametric modeling to deliver functional upgrades that improved real-world performance and manufacturing efficiency.",
      contributions: [
        "Analyzed product pain points and user feedback to identify mechanical weaknesses, assembly inefficiencies, and ergonomic challenges.",
        "Executed CAD-based redesigns emphasizing manufacturability, simplified assembly, and improved mechanical reliability.",
        "Developed modular attachments and replacement components that enhanced durability, fit precision, and user convenience.",
        "Applied design-for-manufacturing (DFM) principles to minimize material waste and reduce printing or machining time.",
        "Validated modifications through iterative prototyping and dimensional testing, achieving measurable gains in part stability and tolerance fit.",
        "Balanced functional improvements with visual refinement, ensuring aesthetic coherence and professional presentation for end users.",
        "Delivered upgrades that improved usability, durability, and overall product experience, highlighting practical design decision-making and iterative problem-solving.",
      ],
      outcomes: [
        "Enhanced product functionality, usability, durability, and visual quality through focused mechanical redesigns and refined aesthetic improvements.",
      ],
      images: ["images/product-redesign-1.jpg", "images/product-redesign-2.jpg"],
    },
    {
      id: 5,
      title: "Electric Utility Transport Vehicle (EUTV)",
      subtitle: "Functional Prototype",
      tools: "Fusion 360 | Metal Fabrication | Welding | FDM 3D Printing | Electrical Wiring | Mechanical Design",
      projectType: "Personal Product Development & Mechanical Prototyping",
      years: "2023–Present",
      overview:
        "The Electric Utility Transport Vehicle (EUTV) is a custom-built mobility prototype engineered to solve a real functional need: safely transporting full-size trash and recycling bins up and down a steep residential incline. Designed and fabricated from the ground up, the project covers the full product development cycle—from CAD modeling and structural design to welding, electronics integration, and functional testing. The system was built around clear performance requirements including uphill torque delivery, load stability, durable frame construction, and intuitive operator control. Using Fusion 360, I modeled all custom components, optimized motor and sprocket ratios for incline performance, and designed a reinforced welded chassis to support heavy loads. Electrical subsystems—including lighting, switching, and ESC-controlled power delivery—were integrated for reliability and safety. A dedicated quick-attach bin mechanism enables secure, ergonomic loading with minimal effort. The final prototype demonstrates applied mechanical design, problem-solving in real-world constraints, and iterative prototyping to produce a functional, stable, and upgradeable utility vehicle.",
      contributions: [
        "Designed and fabricated a reinforced steel chassis using welded tubing, achieving the stability and load-bearing strength required for uphill transport of heavy bins.",
        "Modeled and optimized drivetrain gear ratios in Fusion 360 to balance torque, speed, and motor efficiency for steep-grade performance.",
        "Developed a vibration-dampening suspension linkage, improving traction, ride comfort, and component longevity during uneven-terrain use.",
        "Configured the vehicle's electrical system, including ESC tuning, battery distribution, and safe wiring routing for reliable operation under variable loads.",
        "Integrated LED headlights, taillights, and turn signals to enhance visibility and establish functional safety features consistent with small-form mobility vehicles.",
        "Engineered a quick-attach bin hook mechanism designed for secure latching, ergonomic handling, and fast engagement/disengagement during transport.",
        "Produced precision CAD models for all custom components, including motor mounts, structural brackets, control housings, and attachment interfaces.",
        "Selected materials and fabricated components for durability and modularity, allowing for maintenance, upgrades, and future design iterations.",
        "Designed the operator interface, refining steering geometry, seating position, and control placement for comfort, stability, and intuitive operation.",
        "Validated performance through incline testing, confirming torque output, stability under load, and reliability during repeated uphill and downhill operation.",
      ],
      outcomes: [
        "Enabled safe, controlled uphill and downhill transport of heavy residential bins through optimized torque delivery, improved vehicle stability, and ergonomic operator-focused design.",
      ],
      images: ["images/eutv-1.jpg", "images/eutv-2.jpg"],
    },
  ];

  return (
    <section id="projects" className="py-20 px-6 bg-surface/30 overflow-visible">
      <div className="max-w-7xl mx-auto overflow-visible">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-gradient mb-4">Featured Projects</h2>
          <div className="w-24 h-1 bg-gradient-secondary mx-auto mt-8 rounded-full" />
        </div>

        {/* Project Carousel */}
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full py-16 overflow-visible rounded-xl"
        >
          <CarouselContent className="-ml-1 sm:-ml-1.5 md:-ml-1.5 overflow-visible">
            {projects.map((project, index) => (
              <CarouselItem key={project.id} className="pl-1 sm:pl-1.5 md:pl-1.5 basis-full sm:basis-1/2 lg:basis-1/3 p-1 sm:p-1.5 md:p-2">
                <Card
                  onClick={() => setSelectedProject(project.id)}
                  className="card-hover group overflow-hidden border-card-border/50 bg-gradient-surface cursor-pointer transition-all duration-300 hover:scale-[1.02] h-full min-h-[280px] sm:min-h-[320px] md:min-h-[340px]"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="p-4 sm:p-5 md:p-6 space-y-2 sm:space-y-3 h-full flex flex-col justify-center">
                    <div className="flex items-start justify-between gap-2">
                      <h3 className="text-2xl sm:text-2xl md:text-3xl font-display font-semibold text-foreground group-hover:text-gradient transition-colors duration-300 flex-1 leading-tight text-center">
                        {project.title}
                      </h3>
                      <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex-shrink-0 mt-0.5" />
                    </div>
                    <p className="text-base sm:text-lg text-muted-foreground link-underline-on-card-hover leading-relaxed text-center">
                      {project.subtitle}
                    </p>
                  </div>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-0 bg-background/5 border-border/50 backdrop-blur-sm -left-4 sm:left-0 h-[280px] sm:h-[320px] md:h-[340px] w-8 sm:w-10 rounded-lg hover:bg-background/5 [&>svg]:w-7 [&>svg]:h-7 [&>svg]:text-foreground [&>svg]:transition-all [&>svg]:duration-300 [&>svg]:hover:text-primary [&>svg]:hover:drop-shadow-[0_0_8px_hsl(var(--primary))]" />
          <CarouselNext className="right-0 bg-background/5 border-border/50 backdrop-blur-sm -right-4 sm:right-0 h-[280px] sm:h-[320px] md:h-[340px] w-8 sm:w-10 rounded-lg hover:bg-background/5 [&>svg]:w-7 [&>svg]:h-7 [&>svg]:text-foreground [&>svg]:transition-all [&>svg]:duration-300 [&>svg]:hover:text-primary [&>svg]:hover:drop-shadow-[0_0_8px_hsl(var(--primary))]" />
        </Carousel>
      </div>

      {/* Modals */}
      {projects.map((project) => (
        <Dialog
          key={project.id}
          open={selectedProject === project.id}
          onOpenChange={(open) => !open && setSelectedProject(null)}
        >
          <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto bg-surface border-card-border/50 [&>button]:text-destructive [&>button]:hover:text-destructive/80 [&>button>svg]:w-6 [&>button>svg]:h-6">
            <DialogHeader>
              <DialogTitle className="text-3xl font-display font-bold text-gradient">{project.title}</DialogTitle>
              <DialogDescription className="text-muted-foreground text-base">{project.subtitle}</DialogDescription>
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
                <h4 className="text-xl font-display font-semibold text-gradient-secondary mb-3">Overview</h4>
                <p className="text-muted-foreground leading-relaxed">{project.overview}</p>
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
                  <h4 className="text-xl font-display font-semibold text-gradient-secondary mb-3">Outcomes</h4>
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
                  <p className="text-sm text-muted-foreground italic">Note: {project.note}</p>
                </div>
              )}

              {/* Image Gallery Placeholder */}
              {project.images && project.images.length > 0 && (
                <div>
                  <h4 className="text-xl font-display font-semibold text-gradient-secondary mb-3">Image Preview</h4>
                  <div className="grid grid-cols-2 gap-4">
                    {project.images.map((img, idx) => (
                      <div
                        key={idx}
                        className="aspect-video bg-muted/30 rounded-md flex items-center justify-center border border-border/30"
                      >
                        <span className="text-sm text-muted-foreground font-mono">[{img}]</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Close Button */}
              <div className="pt-4 border-t border-border/50">
                <Button
                  onClick={() => setSelectedProject(null)}
                  className="w-full border-0 transition-all duration-300"
                  style={{
                    background: "linear-gradient(135deg, hsl(220 10% 40%), hsl(0 84% 60%))",
                    color: "hsl(210 40% 98%)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "linear-gradient(135deg, hsl(220 10% 50%), hsl(0 84% 70%))";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "linear-gradient(135deg, hsl(220 10% 40%), hsl(0 84% 60%))";
                  }}
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
