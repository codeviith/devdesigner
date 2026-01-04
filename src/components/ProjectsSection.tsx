import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

export function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [lightbox, setLightbox] = useState<{ projectId: number; index: number } | null>(null);
  const closeLightbox = () => setLightbox(null);
  const goToPrevImage = () => {
    if (!lightbox) return;
    const project = projects.find((p) => p.id === lightbox.projectId);
    if (!project || !project.images || project.images.length === 0) return;

    setLightbox((prev) =>
      prev
        ? {
          projectId: prev.projectId,
          index: (prev.index - 1 + project.images.length) % project.images.length,
        }
        : null,
    );
  };
  const goToNextImage = () => {
    if (!lightbox) return;
    const project = projects.find((p) => p.id === lightbox.projectId);
    if (!project || !project.images || project.images.length === 0) return;

    setLightbox((prev) =>
      prev
        ? {
          projectId: prev.projectId,
          index: (prev.index + 1) % project.images.length,
        }
        : null,
    );
  };

  const projects = [
    {
      id: 1,
      title: "Display System for Model Kits",
      subtitle: "Commercial Product Line",
      company: "Display Your Passion Like a Boss, LLC",
      role: "CAD Designer | Product Developer",
      tools: "Fusion 360 | Onshape | SLA & FDM 3D Printing | Post-Processing | Parametric Modeling",
      projectType: "Commercial Product Prototyping | Small-Batch Production",
      years: "2021 – 2025",
      overview:
        `The Display System for Model Kits is a modular, hangar-bay–inspired presentation platform engineered to showcase collectible mecha kits. Developed as a commercial product, it required balancing structural strength, precise fit, visual fidelity, and manufacturability for small-batch SLA production. Although the system was designed primarily around 1/144-scale mecha kits, its modular architecture allows it to accommodate a range of kit sizes and dynamic poses.

        This project covered full-cycle product development, including parametric CAD modeling, component design, iterative prototype testing, and production refinement. I designed modular SLA-printable parts optimized for stability and repeatability, ensuring both display-ready quality and collector-grade durability. Finalized designs were prepared for consistent, small-batch production and customer deployment.`,
      goals: [
        "Create a modular display system that accommodates a variety of mecha kit scales and poses while maintaining structural stability.",
        "Support common model-kit scales—with primary optimization for 1/144 scale—while maintaining structural stability and compatibility with multiple display configurations.",
        "Balance visual fidelity and mechanical strength to ensure the display feels premium while safely supporting collector-grade kits.",
        "Optimize geometry, tolerances, and part orientation for efficient small-batch SLA production and repeatable fit.",
        "Enable user customization through interchangeable components without compromising assembly simplicity or durability.",
        "Preserve a cohesive, hangar-bay–inspired design language across all visible surfaces and accessory parts.",
      ],
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
      images: [
        { src: "ProdPics/DYPLAB-ex-v.jpg", caption: "Exploded view — modular frame + paneling layout." },
        { src: "ProdPics/DYPLAB-1.png", caption: "Final assembled display system — hangar-bay aesthetic." },
        { src: "ProdPics/Manufacture-1.png", caption: "SLA production layout — orientation/support strategy." },
        { src: "ProdPics/Manufacture-2.png", caption: "Post-processing stage — sanding/fit check before assembly." },
        { src: "ProdPics/Manufacture-3.png", caption: "Small-batch output — ready for packing and deployment." },
      ],
      notes: "Limited visuals shown due to intellectual property (IP) restrictions.",
    },
    {
      id: 2,
      title: "DIY Electric Skateboard",
      subtitle: "Custom Engineered Build",
      tools: "Fusion 360 | Onshape | FDM 3D Printing | Parametric Modeling | Mechanical Design | Electronics Integration",
      projectType: "Personal Product Development & Prototyping",
      years: "2016 – Present",
      overview:
        `The DIY Electric Skateboard is a custom-engineered personal electric vehicle built from the ground up for stable, reliable, high-performance riding. Using a parametric CAD workflow, I developed drivetrain mounts, structural brackets, enclosures, and vibration-resistant components that integrate precisely with dual brushless motors, a lithium-ion battery system, and ESC-based power delivery. Through iterative prototyping and real-world testing, I refined deck geometry, motor positioning, shock absorption, and electronic layout to resolve vibration issues, improve ride comfort, and enhance control responsiveness. The final build demonstrates end-to-end product development—combining CAD modeling, mechanical design, materials optimization, and electronics integration—to deliver a durable, user-safe electric skateboard capable of consistent performance across varied outdoor terrain.`,
      goals: [
        "Develop a high-speed electric skateboard that feels stable, predictable, and safe for real-world outdoor riding.",
        "Integrate mechanical, electrical, and structural systems into a compact platform with clean packaging and serviceable components.",
        "Control vibration and flex through deck geometry, mounting strategies, and enclosure design to reduce rider fatigue and component wear.",
        "Use parametric CAD to enable rapid iteration on drivetrain mounts, brackets, and enclosures as performance requirements evolved.",
        "Balance performance and durability with manufacturability, using materials and geometries that can be maintained or reprinted as needed.",
      ],
      contributions: [
        "Modeled and assembled custom drivetrain mounts, motor housings, and structural brackets using Fusion 360 and Onshape, ensuring precise alignment and optimal torque transmission.",
        "Applied parametric CAD modeling and finite-element stress analysis to refine deck geometry, motor positioning, and load distribution for stability at high speed.",
        "Fabricated high-tolerance 3D-printed components to balance lightweight construction with structural durability and vibration resistance.",
        "Integrated and configured electronic systems including dual brushless motors, ESCs, and a lithium-ion battery pack for synchronized acceleration and braking.",
        "Implemented field testing and iterative tuning, improving control responsiveness, shock absorption, and rider comfort through repeated calibration cycles.",
        "Optimized material selection (PLA+, PETG, Carbon Fiber, TPU, and aluminum) based on durability, printability, and heat dissipation properties for outdoor performance.",
        "Styled the board with functional aesthetics, including cable routing, enclosure shaping, and surface finishing for professional appearance and user safety.",
        "Demonstrated ability to integrate mechanical, electrical, and structural systems into a high-speed, user-operated platform, reinforcing safe and reliable real-world performance.",
      ],
      outcomes: [
        "Delivered a durable, reliable personal electric vehicle by eliminating vibration and stability issues through iterative tuning—resulting in a smoother, safer, and more controlled riding experience across varied terrain.",
      ],
      images: [
        { src: "ProdPics/Esk8-1.png", caption: "All-weather proof of concept — winter riding capability, water-resistant enclosure, and traction performance" },
        { src: "ProdPics/Esk8-2.png", caption: "Urban terrain usability — mixed road surfaces, surface elevation changes, and metro-city riding conditions" },
        { src: "ProdPics/Esk8-3.png", caption: "Top-down view — deck geometry, stance surface area, wheel clearance, and integrated battery-status indicator" },
        { src: "ProdPics/Esk8-4.png", caption: "Side view — deck curvature, ride height, and ground clearance" },
        { src: "ProdPics/Esk8-5.png", caption: "Rear signaling system — triangular tail-light geometry with electronically actuated brake light" },
        { src: "ProdPics/Esk8-6.png", caption: "Front mud-cover — splash mitigation and rider foot protection in wet conditions" },
        { src: "ProdPics/Esk8-7.png", caption: "Rear mud-cover — splash mitigation and rider protection from rear-wheel spray" },
        { src: "ProdPics/Esk8-8.png", caption: "Underside mechanical layout — dual drive motors and mechanical braking system" },
        { src: "ProdPics/Esk8-9.png", caption: "Self-standing design — hands-free stability for brief stops and public-space use" },
        { src: "ProdPics/Esk8-10.png", caption: "Internal electronics integration — structured architecture of ESCs, battery pack, BMS, wiring paths, and enclosure sealing" },
        { src: "ProdPics/Esk8-CAD-1-Riser+Headlight-Fixture-Exploded View.jpg", caption: "Placeholder caption." },
        { src: "ProdPics/Esk8-CAD-2-Riser+Headlight-Fixture.jpeg", caption: "Placeholder caption." },
        { src: "ProdPics/Esk8-CAD-3-CREE Dual-LED headlight-holder.jpeg", caption: "Placeholder caption." },
        { src: "ProdPics/Esk8-CAD-4-Riser+Taillight-Fixture.jpeg", caption: "Placeholder caption." },
        { src: "ProdPics/Esk8-CAD-5-Rear-Drop-Through-Riser-Brake-Lever-Mount.jpeg", caption: "Placeholder caption." },
        { src: "ProdPics/Esk8-CAD-6-Front-Mud-Cover.jpeg", caption: "Placeholder caption." },
        { src: "ProdPics/Esk8-CAD-7-Rear-Mud-Cover.jpeg", caption: "Placeholder caption." },
        { src: "ProdPics/Esk8-CAD-8-GT2B-Modded-Remote.jpeg", caption: "Placeholder caption." },
        { src: "ProdPics/Esk8-CAD-9-Trigger-Guard.jpeg", caption: "Placeholder caption." },
      ],
    },
    {
      id: 3,
      title: "Electric Utility Transport Vehicle (EUTV)",
      subtitle: "Functional Prototype",
      tools: "Onshape | Metal Fabrication | Welding | FDM 3D Printing | Electrical Wiring | Mechanical Design",
      projectType: "Personal Product Development & Mechanical Prototyping",
      years: "2023 – 2024",
      overview:
        `The Electric Utility Transport Vehicle (EUTV) is a custom-built mobility prototype created to safely transport full-size trash and recycling bins up and down a steep residential incline. Designed and fabricated from the ground up, it spans the full product development cycle—from CAD modeling and structural design to welding, electronics integration, and functional testing. The system was engineered around key performance needs, including uphill torque, load stability, durable frame construction, and intuitive operator control.

        Using Onshape, I designed and printed custom components, optimized drivetrain gearing for incline performance, and designed a reinforced welded chassis to support heavy loads. Electrical subsystems—including lighting, switching, and ESC-controlled power delivery—were integrated for reliability and safety. A quick-attach bin mechanism provides secure, ergonomic loading. The final prototype demonstrates applied mechanical design, iterative development, and practical problem-solving within real-world constraints.`,
      designGoals: [
        "Enable safe, controllable transport of full trash and recycling bins on a steep incline with minimal operator effort.",
        "Design a robust chassis and suspension system capable of handling outdoor use, uneven terrain, and repeated loaded trips.",
        "Optimize drivetrain gearing for sufficient uphill torque while maintaining manageable speed and energy efficiency.",
        "Integrate intuitive, ergonomic controls so non-technical users can operate the vehicle confidently and safely.",
        "Build the platform to be modular and upgradeable, allowing future enhancements in powertrain, attachments, and safety features.",
      ],
      contributions: [
        "Designed and fabricated a reinforced steel chassis using welded tubing, achieving the stability and load-bearing strength required for uphill transport of heavy bins.",
        "Modeled and optimized drivetrain gear ratios in Onshape to balance torque, speed, and motor efficiency for steep-grade performance.",
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
      images: [
        { src: "ProdPics/EUTV-1.png", caption: "Placeholder caption." },
        { src: "ProdPics/EUTV-2.jpg", caption: "Placeholder caption." },
        { src: "ProdPics/EUTV-3.png", caption: "Placeholder caption." },
        { src: "ProdPics/EUTV-4.png", caption: "Placeholder caption." },
        { src: "ProdPics/EUTV-5.png", caption: "Placeholder caption." },
        { src: "ProdPics/EUTV-6.png", caption: "Placeholder caption." },
        { src: "ProdPics/EUTV-7.png", caption: "Placeholder caption." },
        { src: "ProdPics/EUTV-8.png", caption: "Placeholder caption." },
      ],
    },
    {
      id: 4,
      title: "Customized CoreXY 3D Printer Build",
      subtitle: "Mechanical Upgrades & System Enhancements",
      tools: "Fusion 360 | FDM 3D Printing | Parametric Design | CNC Machining | Motion Calibration | Hardware Integration",
      projectType: "Personal Product Development & Mechanical Optimization",
      years: "2020 – 2023",
      overview:
        `The Customized CoreXY 3D Printer project transformed a standard open-frame machine into a high-performance, precision-optimized platform for advanced prototyping. Developed as a long-term testbed, the system was iteratively enhanced through parametric CAD modeling, structural reinforcement, motion calibration, and modular electronics integration. I engineered custom mechanical assemblies, strengthened the frame, and optimized thermal and airflow systems to improve extrusion consistency and reduce vibration. These upgrades enabled tighter belt control, improved Z-axis alignment, and significantly higher print repeatability. The final system functions as both a reliable production tool and an experimental platform, demonstrating applied mechanical optimization, calibration methodology, and hands-on motion-system engineering.`,
      goals: [
        "Upgrade a standard CoreXY printer into a high-precision platform suitable for functional prototype and production-quality parts.",
        "Increase frame rigidity and motion stability to support higher print speeds without sacrificing dimensional accuracy.",
        "Design modular mechanical and electronics assemblies that can be swapped, upgraded, or serviced without major teardown.",
        "Improve thermal management and airflow for consistent extrusion and reliable long-duration print jobs.",
        "Use the printer as a testbed for experimental mechanisms and calibration methods while keeping it dependable for day-to-day use.",
      ],
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
      images: [
        { src: "images/corexy-upgrade-1.jpg", caption: "Placeholder caption." },
        { src: "images/corexy-upgrade-2.jpg", caption: "Placeholder caption." },
      ],
    },
    {
      id: 5,
      title: "Product Redesigns & Functional Add-Ons",
      subtitle: "Iterative Improvements",
      tools: "Fusion 360 | Onshape | FDM 3D Printing | Design for Manufacturability (DFM) | Human-Centered Design | Mechanical Optimization",
      projectType: "Iterative Product Redesign & Functional Enhancement",
      years: "2021 – Present",
      overview:
        `The Product Redesigns & Add-Ons initiative focuses on improving existing consumer and hobbyist products by addressing real usability issues, structural weaknesses, and ergonomic limitations. Through user feedback analysis and problem evaluation, I identified shortcomings in original designs and produced parametric redesigns in Fusion 360 and Onshape to enhance durability, fit precision, and interaction—while preserving intended functionality. Across multiple prototyping cycles, I fabricated and tested modular components using FDM printing, validating tolerances, assembly flow, and long-term durability. Visual refinement and post-processing ensured upgrades remained cohesive with the original product line. The project demonstrates practical mechanical redesign, iterative development, and value-focused enhancements that transform off-the-shelf products into more functional, reliable, and refined versions for everyday use.`,
      goals: [
        "Target real-world pain points in existing products and translate them into clear, actionable mechanical redesign objectives.",
        "Improve durability, fit, and ergonomics without breaking compatibility with the original product or user workflows.",
        "Apply DFM principles so improved parts can be produced efficiently on desktop FDM printers or simple machining setups.",
        "Use iterative prototyping and user feedback to finalize on designs that enhance usability and perceived quality.",
      ],
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
      images: [
        { src: "images/product-redesign-1.jpg", caption: "Placeholder caption." },
        { src: "images/product-redesign-2.jpg", caption: "Placeholder caption." },
      ],
    },
  ];


  return (
    <section id="projects" className="py-20 px-6 bg-transparent">
      <div className="max-w-7xl mx-auto overflow-visible">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-gradient mb-4">
            Featured Projects
          </h2>
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
              <CarouselItem
                key={project.id}
                className="pl-1 sm:pl-1.5 md:pl-1.5 basis-full sm:basis-1/2 lg:basis-1/3 p-1 sm:p-1.5 md:p-2"
              >
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

      {/* Project Detail Modals */}
      {projects.map((project) => (
        <Dialog
          key={project.id}
          open={selectedProject === project.id}
          onOpenChange={(open) => !open && setSelectedProject(null)}
        >
          <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto bg-surface border-card-border/50 [&>button]:text-destructive [&>button]:hover:text-destructive/80 [&>button>svg]:w-6 [&>button>svg]:h-6">
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
                {String(project.overview)
                  .split(/\n\s*\n/)
                  .map((para, idx) => (
                    <p key={idx} className="text-muted-foreground leading-relaxed mb-4">
                      {para.trim()}
                    </p>
                  ))}
              </div>

              {/* Design Goals */}
              {project.goals && project.goals.length > 0 && (
                <div>
                  <h4 className="text-xl font-display font-semibold text-gradient-secondary mb-3">
                    Design Goals
                  </h4>
                  <ul className="space-y-2">
                    {project.goals.map((goal, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        <span className="text-muted-foreground">{goal}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Key Contributions/Highlights */}
              <div>
                <h4 className="text-xl font-display font-semibold text-gradient-secondary mb-3">
                  Key Highlights
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

              {/* Outcomes */}
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

              {/* Gallery with click-to-enlarge */}
              {project.images && project.images.length > 0 && (
                <div>
                  <h4 className="text-xl font-display font-semibold text-gradient-secondary mb-3">
                    Gallery
                  </h4>
                  <div className="grid grid-cols-2 gap-4">
                    {project.images.map((imgObj, idx) => (
                      <button
                        key={idx}
                        type="button"
                        onClick={() => setLightbox({ projectId: project.id, index: idx })}
                        className="bg-muted/30 rounded-md border border-border/30 flex items-center justify-center overflow-hidden cursor-zoom-in group"
                      >
                        <img
                          src={imgObj.src}
                          alt={`${project.title} – image ${idx + 1}`}
                          className="w-full h-full max-h-[260px] object-contain p-2 group-hover:scale-[1.02] transition-transform duration-200"
                        />
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Note */}
              {project.notes && (
                <div className="pt-4 border-t border-border/50">
                  <p className="text-sm text-muted-foreground italic">Note: {project.notes}</p>
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
                    e.currentTarget.style.background =
                      "linear-gradient(135deg, hsl(220 10% 50%), hsl(0 84% 70%))";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background =
                      "linear-gradient(135deg, hsl(220 10% 40%), hsl(0 84% 60%))";
                  }}
                >
                  Close
                </Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      ))}

      {/* Full-screen Lightbox */}
      <Dialog open={!!lightbox} onOpenChange={(open) => !open && closeLightbox()}>
        <DialogContent
          className="
            max-w-5xl w-full max-h-[95vh]
            bg-background/95 backdrop-blur-md border-border/70
            p-4 flex flex-col gap-4
            [&>button]:text-destructive
            [&>button]:hover:text-destructive/80
            [&>button>svg]:w-6 [&>button>svg]:h-6
          "
        >
          {lightbox && (() => {
            const project = projects.find((p) => p.id === lightbox.projectId);
            if (!project || !project.images || project.images.length === 0) return null;

            const current = project.images[lightbox.index];
            const imgSrc = current.src;

            const caption = current.caption;
            const meta = `${project.title} — View ${lightbox.index + 1} of ${project.images.length}`;

            return (
              <>
                <DialogHeader className="pb-2">
                  <DialogTitle className="text-xl font-display text-gradient">
                    {project.title}
                  </DialogTitle>
                  <DialogDescription className="text-muted-foreground text-sm">
                    Full-screen view
                  </DialogDescription>
                </DialogHeader>

                {/* Image wrapper – no cropping, image always fits */}
                <div className="relative flex-1 flex items-center justify-center bg-black/80 rounded-lg">
                  {/* Prev arrow */}
                  {project.images.length > 1 && (
                    <button
                      type="button"
                      onClick={goToPrevImage}
                      className="
                        absolute left-3 md:left-6 top-1/2 -translate-y-1/2
                        p-2 md:p-3 rounded-full
                        bg-background/70 border border-border/60
                        hover:bg-background/90 transition-colors z-10
                      "
                    >
                      <ChevronLeft className="w-5 h-5 text-foreground" />
                    </button>
                  )}

                  {/* Image – fully contained in the available area */}
                  <img
                    src={imgSrc}
                    alt={caption}
                    className="max-w-full max-h-[70vh] object-contain"
                  />

                  {/* Next arrow */}
                  {project.images.length > 1 && (
                    <button
                      type="button"
                      onClick={goToNextImage}
                      className="
                        absolute right-3 md:right-6 top-1/2 -translate-y-1/2
                        p-2 md:p-3 rounded-full
                        bg-background/70 border border-border/60
                        hover:bg-background/90 transition-colors z-10
                      "
                    >
                      <ChevronRight className="w-5 h-5 text-foreground" />
                    </button>
                  )}
                </div>

                {/* Caption */}
                <p className="text-center text-xs md:text-sm text-muted-foreground">
                  {caption}
                </p>

                {/* Bottom Close Button – red gradient like project modal */}
                <div className="pt-2 border-t border-border/50">
                  <Button
                    onClick={closeLightbox}
                    className="w-full border-0 transition-all duration-300"
                    style={{
                      background: "linear-gradient(135deg, hsl(220 10% 40%), hsl(0 84% 60%))",
                      color: "hsl(210 40% 98%)",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background =
                        "linear-gradient(135deg, hsl(220 10% 50%), hsl(0 84% 70%))";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background =
                        "linear-gradient(135deg, hsl(220 10% 40%), hsl(0 84% 60%))";
                    }}
                  >
                    Close
                  </Button>
                </div>
              </>
            );
          })()}
        </DialogContent>
      </Dialog>
    </section>
  );
}