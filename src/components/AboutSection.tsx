import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function AboutSection() {
  return (
    <section id="about" className="py-20 px-6 bg-surface/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center" style={{ marginBottom: "var(--space-2xl)" }}>
          <h2
            className="font-display font-bold text-gradient"
            style={{ fontSize: "var(--text-5xl)", marginBottom: "var(--space-sm)" }}
          >
            About Me
          </h2>
          <div
            className="h-1 bg-gradient-secondary mx-auto rounded-full"
            style={{ width: "clamp(4rem, 10vw, 6rem)", marginBottom: "var(--space-lg)" }}
          />
        </div>

        <div className="space-y-8">
          <div className="space-y-6">
            <p className="text-muted-foreground leading-relaxed text-justify" style={{ fontSize: "var(--text-base)" }}>
              I'm a versatile CAD Designer with a strong foundation in 3D modeling, mechanical design, and product
              development. I specialize in creating precise, production-ready models using Fusion 360, OnShape, and
              SolidWorks—tools I use daily to design mechanical parts, assemblies, and functional prototypes. My CAD
              work emphasizes manufacturability, with experience preparing models for 3D printing (FDM/SLA), CNC
              machining, and laser cutting. I prioritize key design elements such as tolerances, fit, and material
              efficiency to ensure that every part I create not only looks right in CAD but performs reliably in
              real-world applications.
            </p>

            <div className="border-l-4 border-primary py-4" style={{ paddingLeft: "var(--space-md)" }}>
              <blockquote
                className="font-display font-bold text-gradient italic"
                style={{ fontSize: "var(--text-2xl)" }}
              >
                "My work turns ideas into products that perform, endure, and evolve."
              </blockquote>
            </div>

            <p className="text-muted-foreground leading-relaxed text-justify" style={{ fontSize: "var(--text-base)" }}>
              Much of my recent CAD work has been with Display Your Passion Like a Boss, LLC, where I contributed to the
              design and modeling of mechanical components for physical products, while also supporting the development
              of an accompanying web platform. In this role, I was involved in everything from early concept modeling to
              technical drawing production, giving me hands-on experience with the full design-to-manufacture pipeline.
              Outside of professional work, I've led several self-directed projects—building a fully functional electric
              skateboard, customizing a CoreXY 3D printer, and designing high-performance R/C vehicles and aircraft.
              These projects allowed me to take complete ownership of the development process and strengthened my
              ability to turn detailed digital models into reliable, tested prototypes.
            </p>

            <p className="text-muted-foreground leading-relaxed text-justify" style={{ fontSize: "var(--text-base)" }}>
              I also have a working knowledge of Python and JavaScript, which I'm exploring as tools for CAD automation
              and parametric design scripting. I'm particularly interested in projects that blend mechanical design with
              meaningful impact—whether in consumer products, hardware development, or biomedical devices. Whether
              working independently or alongside a team, I'm committed to delivering thoughtful, functional designs that
              are built to perform and built to last.
            </p>

            <div className="flex flex-wrap gap-2">
              <Badge
                variant="secondary"
                className="bg-orange-400/10 text-orange-400 border-orange-400/20 hover:bg-orange-400/10 text-sm px-3 py-1"
              >
                CAD Modeling
              </Badge>
              <Badge
                variant="secondary"
                className="bg-orange-400/10 text-orange-400 border-orange-400/20 hover:bg-orange-400/10 text-sm px-3 py-1"
              >
                Product Design
              </Badge>
              <Badge
                variant="secondary"
                className="bg-yellow-400/10 text-yellow-400 border-yellow-400/20 hover:bg-yellow-400/10 text-sm px-3 py-1"
              >
                Prototyping
              </Badge>
              <Badge
                variant="secondary"
                className="bg-yellow-400/10 text-yellow-400 border-yellow-400/20 hover:bg-yellow-400/10 text-sm px-3 py-1"
              >
                Research & Development (R&D)
              </Badge>
              <Badge
                variant="secondary"
                className="bg-green-400/10 text-green-400 border-green-400/20 hover:bg-green-400/10 text-sm px-3 py-1"
              >
                Design for Manufacturing (DFM)
              </Badge>
              <Badge
                variant="secondary"
                className="bg-green-400/10 text-green-400 border-green-400/20 hover:bg-green-400/10 text-sm px-3 py-1"
              >
                Small-Scale Manufacturing
              </Badge>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
