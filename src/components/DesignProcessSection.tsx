import { Card } from "@/components/ui/card";
import {
  Target,
  Lightbulb,
  Box,
  Package,
  Settings,
  TestTube,
  FileText,
  ArrowDown,
  RefreshCw,
  Ruler,
  FlaskConical,
  Cpu,
} from "lucide-react";
import parametricModelingIcon from "@/assets/icons/parametric-modeling.png";
import dfmCompassIcon from "@/assets/icons/dfm-compass.png";
import cadModelingCubeIcon from "@/assets/icons/cad-modeling-cube.png";

export const DesignProcessSection = () => {
  const processes = [
    {
      icon: cadModelingCubeIcon,
      isImage: true,
      title: "Parametric Modeling & Design for Manufacturability (DFM)",
      description:
        "I build adaptive, feature-driven CAD models optimized for CNC machining, FDM/SLA 3D printing, and sheet-metal fabrication. This ensures fast iteration, scalable design changes, and smooth handoff to manufacturing workflows.",
    },
    {
      icon: RefreshCw,
      title: "Iterative Design & Prototyping",
      description:
        "My development cycle focuses on rapid modeling, prototyping, testing, and refinement. Each iteration improves mechanical performance, usability, and durability through structured feedback and real-world testing.",
    },
    {
      icon: Ruler,
      title: "Tolerance & Fit Optimization",
      description:
        "I apply GD&T principles to ensure precise part integration, reliable assemblies, and predictable mechanical behavior. This includes fine-tuning clearances, fit types, surface interactions, and functional constraints.",
    },
    {
      icon: FlaskConical,
      title: "Material Testing & Post-Processing",
      description:
        "I evaluate printed and machined parts for dimensional accuracy, structural integrity, and surface quality. My workflow includes sanding, smoothing, painting, and assembly to achieve functional and presentation-ready prototypes.",
    },
    {
      icon: Cpu,
      title: "CAD Automation & Electronics Integration",
      description:
        "Where applicable, I use Python/JavaScript for CAD automation and integrate Arduino-based sensors, motors, and electronics into mechanical assemblies—linking motion, structure, and behavior into cohesive prototypes.",
    },
  ];

  const workflowSteps = [
    {
      icon: Target,
      number: "1",
      title: "Problem Definition & Requirements",
      description: "Before modeling, I clarify:",
      points: [
        "Functional goals",
        "Material, geometric, and tolerance constraints",
        "User needs and intended use cases",
        "Manufacturing limitations",
        "Performance criteria",
      ],
    },
    {
      icon: Lightbulb,
      number: "2",
      title: "Concept Exploration",
      description: "I generate early concepts to explore:",
      points: [
        "Geometric and mechanical options",
        "Alternative mechanisms",
        "Assembly approaches",
        "Aesthetic considerations (when relevant)",
      ],
    },
    {
      icon: "image",
      imageSrc: parametricModelingIcon,
      number: "3",
      title: "Parametric Modeling & Digital Iteration",
      description: "Using a constraint-driven workflow, I:",
      points: [
        "Build adaptable, feature-based parametric models",
        "Refine versions through iterative updates",
        "Validate geometry, tolerances, and fit",
        "Prepare assemblies for motion, interference, and behavior checks",
      ],
    },
    {
      icon: "image",
      imageSrc: dfmCompassIcon,
      number: "4",
      title: "Design for Manufacturability & Optimization",
      description: "To ensure production-ready results, I focus on:",
      points: [
        "Simplifying assembly paths",
        "Selecting efficient, cost-appropriate materials",
        "Printer- and machine-friendly geometry",
        "Reducing support material and machining complexity",
        "Optimizing strength-to-weight ratios",
        "Ensuring tolerance repeatability",
      ],
    },
    {
      icon: TestTube,
      number: "5",
      title: "Prototyping & Physical Validation",
      description: "Moving from CAD to physical testing, I evaluate:",
      points: [
        "Structural integrity and rigidity",
        "Assembly logic and ease of assembly",
        "Ergonomics and usability",
        "Mechanical behavior",
        "Real-world tolerances",
        "Material performance",
      ],
    },
    {
      icon: FlaskConical,
      number: "6",
      title: "Testing, Feedback & Refinement",
      description: "Based on testing and real-world performance, I:",
      points: [
        "Apply targeted refinements",
        "Improve durability and function",
        "Validate reliability",
        "Integrate user or stakeholder feedback",
      ],
    },
    {
      icon: FileText,
      number: "7",
      title: "Final Documentation & Handoff",
      description: "I prepare the necessary deliverables for manufacturing:",
      points: [
        "Technical drawings",
        "Exploded views",
        "Assembly instructions",
        "Manufacturing-ready files",
        "Bill of materials (BOM)",
      ],
    },
  ];

  return (
    <section id="design-process" className="py-20 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-display font-bold text-gradient mb-4 text-center">
          Design Process & Methodologies
        </h2>
        <div className="w-24 h-1 bg-gradient-secondary mx-auto mt-8 mb-12 rounded-full" />

        <Card className="glass p-8 md:p-12 border-card-border/50 mb-8">
          <p className="text-foreground/90 text-lg leading-relaxed text-justify">
            I approach product design with a structured, iterative workflow that combines thoughtful design practices
            with hands-on prototyping. My process emphasizes manufacturability, precision, and practical
            problem-solving—moving from early concept modeling to material selection, tolerance refinement, and
            real-world testing. My focus is to create functional, production-ready designs that perform reliably beyond
            the CAD environment.
          </p>
        </Card>

        <h3 className="text-2xl md:text-3xl font-display font-bold bg-gradient-to-r from-amber-500 to-gray-400 bg-clip-text text-transparent mb-6 text-center">
          My Workflow
        </h3>

        <p className="text-foreground/80 text-center mb-12 max-w-4xl mx-auto">
          I apply the steps below as appropriate to the scope, complexity, and requirements of each project.
        </p>

        <div className="max-w-4xl mx-auto space-y-6 mb-16">
          {workflowSteps.map((step, index) => (
            <div key={step.number} className="animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
              <Card className="p-6 md:p-8 bg-gradient-surface border-card-border/50 transition-all duration-300">
                <div className="flex items-start gap-4">
                  {/* Step Icon */}
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center">
                      {step.icon === "image" ? (
                        <img src={step.imageSrc} alt={step.title} className="w-6 h-6" />
                      ) : (
                        <step.icon className="w-6 h-6 text-primary-foreground" />
                      )}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-foreground mb-3">{step.title}</h4>
                    <p className="text-foreground/80 mb-3">{step.description}</p>
                    <ul className="space-y-2">
                      {step.points.map((point, i) => (
                        <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                          <span className="text-primary">•</span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Card>

              {/* Arrow Connector */}
              {index < workflowSteps.length - 1 && (
                <div className="flex justify-center py-4">
                  <ArrowDown
                    className="w-6 h-6 text-primary"
                    style={{
                      animation: `arrowGlow 2s linear infinite`,
                      animationDelay: `${index * 0.35}s`,
                      filter: "drop-shadow(0 0 2px hsl(var(--primary)))",
                    }}
                  />
                </div>
              )}
            </div>
          ))}
        </div>

        <h3 className="text-2xl md:text-3xl font-display font-bold bg-gradient-to-r from-amber-500 to-gray-400 bg-clip-text text-transparent mb-12 text-center">
          Technical Practices
        </h3>

        <div className="flex flex-wrap justify-center gap-6">
          {processes.map((process, index) => (
            <Card
              key={process.title}
              className="
      p-6
      bg-gradient-surface 
      border-card-border/50
      flex items-start gap-4
      w-full
      sm:w-[420px]
      md:w-[480px]
      lg:w-[520px]
      min-h-[150px]
    "
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="flex items-start gap-4">
                <div className="p-2 rounded-lg bg-gradient-primary flex-shrink-0">
                  {process.isImage ? (
                    <img src={process.icon as string} alt={process.title} className="w-5 h-5" />
                  ) : (
                    <process.icon className="w-5 h-5 text-primary-foreground" />
                  )}
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">{process.title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">{process.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
