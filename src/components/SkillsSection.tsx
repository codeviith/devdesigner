import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  Wrench,
  Palette,
  Code,
  Layers,
  MousePointer,
  Cpu,
  Zap,
  Factory,
  Box,
  Target,
  Lightbulb,
  Users,
  Package,
  Settings,
  FlaskConical,
  TestTube
} from 'lucide-react';
import { SiReact, SiArduino, SiPython, SiAutodesk } from 'react-icons/si';
import onshapeIcon from '@/assets/icons/onshape.png';
import solidworksIcon from '@/assets/icons/solidworks.png';
import cadModelingIcon from '@/assets/icons/cad-modeling.png';
import dfmCompassIcon from '@/assets/icons/dfm-compass.png';
import cadModelingCubeIcon from '@/assets/icons/cad-modeling-cube.png';

export function SkillsSection() {
  const keyHighlights = [
    {
      icon: cadModelingCubeIcon,
      title: 'CAD Modeling',
      desc: 'Parametric 3D parts, assemblies, and detailed drawings',
      isImage: true
    },
    {
      icon: Package,
      title: 'Product Design', desc: 'From concept to refined, manufacturable forms'
    },
    {
      icon: dfmCompassIcon,
      title: 'Design for Manufacturing (DFM)',
      desc: 'Optimized for cost, quality, and throughput',
      isImage: true
    },
    {
      icon: FlaskConical,
      title: 'Research & Development (R&D)',
      desc: 'Rapid iteration, testing, and validation'
    },
    {
      icon: Factory,
      title: 'Small-Scale Manufacturing & Post-Processing',
      desc: 'CNC, 3D printing, finishing workflows'
    },
    {
      icon: TestTube,
      title: 'Prototyping',
      desc: 'Functional and appearance prototype development'
    }
  ];

  const designValues = [
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

  const skillCategories = [
    {
      title: 'CAD Software',
      icon: cadModelingIcon,
      isImage: true,
      color: 'text-primary',
      skills: [
        {
          name: 'Fusion 360',
          description: 'Cloud-based parametric modeling'
        },
        {
          name: 'SolidWorks',
          description: 'Advanced 3D modeling and assemblies'
        },
        {
          name: 'OnShape',
          description: 'Collaborative cloud CAD platform'
        },
        {
          name: 'AutoCAD',
          description: '2D technical drawings and documentation'
        },
        {
          name: 'Blender',
          description: '3D modeling and animation (WIP)'
        }
      ]
    },
    {
      title: '3D Printing & Fabrication',
      icon: Layers,
      color: 'text-secondary',
      skills: [
        {
          name: 'FDM Printing',
          description: 'PLA, ABS, PETG, TPU, PEEK, PLA-CF'
        },
        {
          name: 'SLA Printing',
          description: 'Resin-based additive manufacturing'
        },
        {
          name: 'Slicer Software',
          description: 'PrusaSlicer, Cura, Simplify3D, Pronterface'
        },
        {
          name: 'CNC Machining',
          description: 'Basic CNC programming and operation'
        },
        {
          name: 'Post-Processing',
          description: 'Sanding, painting, assembly, smoothing'
        }
      ]
    },
    {
      title: 'Engineering & Manufacturing',
      icon: Factory,
      color: 'text-accent',
      skills: [
        {
          name: 'GD&T',
          description: 'Geometric dimensioning and tolerancing'
        },
        {
          name: 'Manufacturing',
          description: 'DFM and production optimization'
        },
        {
          name: 'Prototyping',
          description: 'Rapid iteration and testing'
        },
        {
          name: 'Fabrication',
          description: 'Woodworking, metalworking, welding'
        }
      ]
    },
    {
      title: 'Programming & Development',
      icon: Code,
      color: 'text-primary',
      skills: [
        {
          name: 'JavaScript | React',
          description: 'Frontend web applications, UI logic, and interactivity'
        },
        {
          name: 'Python | Flask',
          description: 'Automation, scripting, and backend APIs'
        },
        {
          name: 'C# | Unity',
          description: 'Interactive simulations, tools, and game prototyping'
        },
        {
          name: 'HTML | CSS',
          description: 'Responsive layout, styling, and component-driven UI'
        },
        {
          name: 'G-Code | M-code',
          description: 'CNC and 3D printer programming and tuning'
        },
        {
          name: 'Arduino IDE',
          description: 'Embedded systems and hardware prototyping'
        }
      ]
    },

  ];

  const softSkills = [
    'Project Management',
    'Problem Solving',
    'Iterative Design',
    'Quality Assurance',
    'Technical Documentation',
    'Materials Knowledge',
    'Printer Maintenance',
    'Electronics & Arduino',
    'Raspberry Pi',
    'UI/UX Principles'
  ];

  return (
    <section id="skills" style={{ padding: 'var(--space-3xl) var(--space-md)' }}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center" style={{ marginBottom: 'var(--space-2xl)' }}>
          <h2 className="font-display font-bold text-gradient" style={{ fontSize: 'var(--text-5xl)', marginBottom: 'var(--space-sm)' }}>
            Skills & Expertise
          </h2>
          <div className="h-1 bg-gradient-secondary mx-auto rounded-full" style={{ width: 'clamp(4rem, 10vw, 6rem)', marginTop: 'var(--space-lg)' }} />
        </div>

        {/* Key Highlights */}
        <div className="mb-16">
          <h3 className="text-2xl font-display font-semibold mb-6 text-gradient-secondary text-center">
            Key Highlights
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            {keyHighlights.map((item) => (
              <Card
                key={item.title}
                className="p-6 bg-gradient-surface border-card-border/50"
              >
                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-lg bg-gradient-primary">
                    {item.isImage ? (
                      <img src={item.icon as string} alt={item.title} className="w-8 h-8" />
                    ) : (
                      <item.icon className="w-8 h-8 text-primary-foreground" />
                    )}
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">{item.title}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Design Values */}
        <div className="mb-16">
          <h3 className="text-2xl font-display font-semibold mb-6 text-gradient-secondary text-center">
            Design Values
          </h3>
          <div className="space-y-4">
            {designValues.map((value, index) => (
              <Card
                key={value.title}
                className="p-6 bg-gradient-surface border-card-border/50"
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

        {/* Skills */}
        <h3 className="text-2xl font-display font-semibold mb-6 text-gradient-secondary text-center">
          Skills
        </h3>

        {/* Technical Skills Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <Card
              key={category.title}
              className="p-8 bg-gradient-surface border-card-border/50"
              style={{ animationDelay: `${categoryIndex * 100}ms` }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-xl bg-gradient-primary">
                  {category.isImage ? (
                    <img
                      src={category.icon as string}
                      alt={category.title}
                      className="w-6 h-6 object-contain"
                    />
                  ) : (
                    <category.icon className="w-6 h-6 text-primary-foreground" />
                  )}
                </div>
                <h3 className="text-xl font-display font-semibold text-gradient-secondary">
                  {category.title}
                </h3>
              </div>

              <div className="grid gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skill.name}
                    className="p-4 rounded-lg border border-border/40 bg-card"
                    style={{ animationDelay: `${(categoryIndex * 4 + skillIndex) * 100}ms` }}
                  >
                    <div className="font-medium text-foreground mb-1">{skill.name}</div>
                    <div className="text-sm text-muted-foreground">{skill.description}</div>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>

        {/* Soft Skills */}
        <div className="mb-16">
          <h3 className="text-2xl font-display font-semibold text-gradient-secondary mb-8 text-center">
            Professional Competencies
          </h3>

          <div className="flex flex-wrap justify-center gap-3">
            {softSkills.map((skill, index) => (
              <Badge
                key={skill}
                variant="secondary"
                className="px-4 py-2 text-sm bg-card/80 text-foreground border-border/60 hover:bg-card/80"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {skill}
              </Badge>
            ))}
          </div>
        </div>

        {/* Tools & Software */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-display font-semibold text-gradient-secondary mb-8">
            Industry Tools & Platforms
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {[
              { name: 'Fusion 360', icon: SiAutodesk, type: 'component' },
              { name: 'SOLIDWORKS', icon: solidworksIcon, type: 'image' },
              { name: 'Onshape', icon: onshapeIcon, type: 'image' },
              { name: 'Python', icon: SiPython, type: 'component' },
              { name: 'React', icon: SiReact, type: 'component' },
              { name: 'Arduino', icon: SiArduino, type: 'component' }
            ].map((tool, index) => (
              <Card
                key={tool.name}
                className="p-6 bg-surface border-card-border/50 text-center hover:bg-surface/80 transition-colors"
                style={{ animationDelay: `${index * 75}ms` }}
              >
                {tool.type === 'image' ? (
                  <img
                    src={tool.icon as string}
                    alt={`${tool.name} logo`}
                    className={`w-8 h-8 mx-auto mb-3 object-contain ${tool.name === 'SOLIDWORKS' ? 'solidworks-cyan-filter' :
                      tool.name === 'Onshape' ? 'onshape-cyan-filter' : ''
                      }`}
                  />
                ) : (
                  <tool.icon className="w-8 h-8 text-primary mx-auto mb-3" />
                )}
                <p className="text-sm font-medium text-foreground">{tool.name}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}