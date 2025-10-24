import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Quote, Target, Lightbulb, Users } from 'lucide-react';

export function AboutSection() {
  const values = [
    {
      icon: Target,
      title: 'Precision-Focused',
      description: 'Every design element serves a purpose with meticulous attention to detail'
    },
    {
      icon: Lightbulb,
      title: 'Innovation-Driven',
      description: 'Pushing boundaries to create breakthrough product solutions'
    },
    {
      icon: Users,
      title: 'User-Centric',
      description: 'Designing with empathy and real-world usability in mind'
    }
  ];

  return (
    <section id="about" className="py-20 px-6 bg-surface/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-gradient mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto mb-8 rounded-full" />
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Profile content */}
          <div className="space-y-8">
            <Card className="glass p-8 border-card-border/50">
              <Quote className="w-8 h-8 text-primary mb-4" />
              <blockquote className="text-lg text-foreground leading-relaxed mb-6 italic">
                "I'm committed to delivering thoughtful, functional designs that are built to perform and built to last."
              </blockquote>
              <footer className="text-muted-foreground">— Design Philosophy</footer>
            </Card>
            
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm a versatile CAD Designer with a strong foundation in 3D modeling, mechanical design, and product development. 
                I specialize in creating precise, production-ready models using Fusion 360, OnShape, and SolidWorks—tools I use daily 
                to design mechanical parts, assemblies, and functional prototypes. My CAD work emphasizes manufacturability, with experience 
                preparing models for 3D printing (FDM/SLA), CNC machining, and laser cutting. I prioritize key design elements such as 
                tolerances, fit, and material efficiency to ensure that every part I create not only looks right in CAD but performs 
                reliably in real-world applications.
              </p>
              
              <p className="text-muted-foreground leading-relaxed">
                Much of my recent CAD work has been with Display Your Passion Like a Boss, LLC, where I contributed to the design and 
                modeling of mechanical components for physical products, while also supporting the development of an accompanying web platform. 
                In this role, I was involved in everything from early concept modeling to technical drawing production, giving me hands-on 
                experience with the full design-to-manufacture pipeline. Outside of professional work, I've led several self-directed projects—building 
                a fully functional electric skateboard, customizing a CoreXY 3D printer, and designing high-performance R/C vehicles and aircraft. 
                These projects allowed me to take complete ownership of the development process and strengthened my ability to turn detailed digital 
                models into reliable, tested prototypes.
              </p>
              
              <p className="text-muted-foreground leading-relaxed">
                I also have a working knowledge of Python and JavaScript, which I'm exploring as tools for CAD automation and parametric design 
                scripting. I'm particularly interested in projects that blend mechanical design with meaningful impact—whether in consumer products, 
                hardware development, or biomedical devices. Whether working independently or alongside a team, I'm committed to delivering thoughtful, 
                functional designs that are built to perform and built to last.
              </p>
              
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                  Product Design
                </Badge>
                <Badge variant="secondary" className="bg-secondary/10 text-secondary border-secondary/20">
                  CAD Modeling
                </Badge>
                <Badge variant="secondary" className="bg-accent/10 text-accent border-accent/20">
                  Design for Manufacturing
                </Badge>
                <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                  Prototyping
                </Badge>
              </div>
            </div>
          </div>
          
          {/* Values and approach */}
          <div className="space-y-6">
            <div className="mb-8">
              <h3 className="text-2xl font-display font-semibold mb-6 text-gradient-secondary">
                Design Values
              </h3>
              <div className="space-y-4">
                {values.map((value, index) => (
                  <Card 
                    key={value.title}
                    className="card-hover p-6 bg-gradient-surface border-card-border/50"
                    style={{ animationDelay: `${index * 150}ms` }}
                  >
                    <div className="flex items-start gap-4">
                      <div className="p-2 rounded-lg bg-gradient-primary">
                        <value.icon className="w-5 h-5 text-primary-foreground" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-2">
                          {value.title}
                        </h4>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {value.description}
                        </p>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
            
            {/* Statistics or highlights */}
            <Card className="glass p-6 border-card-border/50">
              <h4 className="font-display font-semibold text-lg mb-4 text-gradient">
                Key Highlights
              </h4>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  { title: 'CAD Modeling', desc: 'Parametric 3D parts, assemblies, and detailed drawings' },
                  { title: 'Product Design', desc: 'From concept to refined, manufacturable forms' },
                  { title: 'Design for Manufacturing (DFM)', desc: 'Optimized for cost, quality, and throughput' },
                  { title: 'Research & Development (R&D)', desc: 'Rapid iteration, testing, and validation' },
                  { title: 'Small-Scale Manufacturing & Post-Processing', desc: 'CNC, 3D printing, finishing workflows' },
                  { title: 'Prototyping', desc: 'Functional and appearance prototype development' }
                ].map((item) => (
                  <div key={item.title} className="p-4 rounded-lg border border-border/40 bg-card">
                    <div className="font-medium text-foreground">{item.title}</div>
                    <div className="text-xs text-muted-foreground mt-1">{item.desc}</div>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}