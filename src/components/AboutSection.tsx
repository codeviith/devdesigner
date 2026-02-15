import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function AboutSection() {
  return (
    <section id="about" className="py-20 px-6 bg-surface/65">
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
              I’m a product-focused CAD designer and product developer with a strong foundation in mechanical design, prototyping, and 
              product development. I specialize in creating precise, production-ready models using Fusion 360, Onshape, and SolidWorks, 
              translating ideas into functional parts and assemblies that move efficiently from concept to fabrication. My work emphasizes 
              manufacturability and real-world performance, with hands-on experience preparing designs for 3D printing, CNC machining, 
              and small-batch production. I prioritize tolerances, fit, structural reliability, and material efficiency to ensure every 
              product I design is not only accurate in CAD but dependable in physical use.
            </p>

            <div
              className="border-l-4 py-4"
              style={{
                paddingLeft: "var(--space-md)",
                borderColor: "hsl(var(--destructive))",
              }}
            >
              {/* dark gray to red */}
              <blockquote
                className="
                  font-display 
                  font-bold 
                  italic
                  bg-gradient-to-r 
                  from-neutral-400 
                  via-red-500 
                  to-red-500
                  bg-clip-text 
                  text-transparent
                "
                style={{ fontSize: "var(--text-2xl)" }}
              >
                "My work turns ideas into products that perform, endure, and evolve."
              </blockquote>
              {/* red to dark gray */}
              {/* <blockquote
                className="
                  font-display 
                  font-bold 
                  italic
                  bg-gradient-to-r
                  from-red-500 from-10%
                  via-red-500 via-35%
                  to-neutral-400 to-90%
                  bg-clip-text 
                  text-transparent
                "
                style={{ fontSize: "var(--text-2xl)" }}
              >
                "My work turns ideas into products that perform, endure, and evolve."
              </blockquote> */}

            </div>

            <p className="text-muted-foreground leading-relaxed text-justify" style={{ fontSize: "var(--text-base)" }}>
              Professionally, I contributed to product development at Display Your Passion Like a Boss, LLC, where I modeled mechanical 
              components for commercial products while supporting the broader design-to-manufacture (DFM) pipeline. My work ranged from 
              early concept modeling and parametric design to prototype validation and production refinement. Beyond professional work, 
              I lead self-directed product builds—including a functional electric skateboard, an electric utility transport vehicle (EUTV), 
              a customized CoreXY 3D printer, and multiple product redesign and improvement projects. These projects strengthened my 
              ability to prototype quickly, refine designs through real-world feedback, and carry products from idea to working 
              implementation.
            </p>

            <p className="text-muted-foreground leading-relaxed text-justify" style={{ fontSize: "var(--text-base)" }}>
              I’m especially drawn to product environments that value experimentation, iteration, and continuous improvement. My approach 
              is design-first, grounded in thoughtful planning, careful modeling, and hands-on prototyping, then validated through 
              real-world builds. I also bring working knowledge of Python and JavaScript to support automation and parametric design 
              scripting, enabling more efficient and repeatable workflows. In that context, I’m particularly interested in projects 
              that blend mechanical design with meaningful impact—ranging from consumer products and hardware development to robotics, 
              electromechanical systems, tools and equipment, and biomedical applications. Whether working independently or alongside a 
              team, I’m committed to delivering thoughtful, functional designs built to perform and built to last. I thrive in spaces 
              where products evolve through testing, refinement, and practical problem-solving.
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
