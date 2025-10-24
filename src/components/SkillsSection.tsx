import { Card } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { 
  Wrench, 
  Palette, 
  Code, 
  Layers,
  MousePointer,
  Cpu,
  Zap,
  Settings
} from 'lucide-react';

export function SkillsSection() {
  const skillCategories = [
    {
      title: 'CAD Software',
      icon: Wrench,
      color: 'text-primary',
      skills: [
        { name: 'Fusion 360', level: 95, description: 'Cloud-based parametric modeling' },
        { name: 'SolidWorks', level: 90, description: 'Advanced 3D modeling and assemblies' },
        { name: 'OnShape', level: 90, description: 'Collaborative cloud CAD platform' },
        { name: 'AutoCAD', level: 85, description: '2D technical drawings and documentation' },
        { name: 'Blender', level: 70, description: '3D modeling and animation (WIP)' }
      ]
    },
    {
      title: '3D Printing & Fabrication',
      icon: Layers,
      color: 'text-secondary',
      skills: [
        { name: 'FDM Printing', level: 95, description: 'PLA, ABS, PETG, TPU, PEEK, PLA-CF' },
        { name: 'SLA Printing', level: 90, description: 'Resin-based additive manufacturing' },
        { name: 'Slicer Software', level: 92, description: 'PrusaSlicer, Cura, Simplify3D, Pronterface' },
        { name: 'CNC Machining', level: 70, description: 'Basic CNC programming and operation' },
        { name: 'Post-Processing', level: 88, description: 'Sanding, painting, assembly, smoothing' }
      ]
    },
    {
      title: 'Engineering & Manufacturing',
      icon: Settings,
      color: 'text-accent',
      skills: [
        { name: 'GD&T', level: 85, description: 'Geometric dimensioning and tolerancing' },
        { name: 'Manufacturing', level: 88, description: 'DFM and production optimization' },
        { name: 'Prototyping', level: 92, description: 'Rapid iteration and testing' },
        { name: 'Fabrication', level: 85, description: 'Woodworking, metalworking, welding' }
      ]
    },
    {
      title: 'Programming & Development',
      icon: Code,
      color: 'text-primary',
      skills: [
        { name: 'Python', level: 75, description: 'Automation and scripting' },
        { name: 'JavaScript', level: 75, description: 'Web development and automation' },
        { name: 'React', level: 70, description: 'Frontend web applications' },
        { name: 'HTML/CSS', level: 80, description: 'Web design and styling' },
        { name: 'Flask', level: 65, description: 'Python web framework' },
        { name: 'Unity', level: 65, description: 'Game development and simulation' },
        { name: 'G-Code', level: 85, description: 'CNC and 3D printer programming' },
        { name: 'ArduinoIDE', level: 80, description: 'Embedded systems and prototyping' }
      ]
    }
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
    <section id="skills" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-gradient-secondary mb-4">
            Skills & Expertise
          </h2>
          <div className="w-24 h-1 bg-gradient-secondary mx-auto mt-8 rounded-full" />
        </div>
        
        {/* Technical Skills Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <Card 
              key={category.title}
              className="card-hover p-8 bg-gradient-surface border-card-border/50"
              style={{ animationDelay: `${categoryIndex * 100}ms` }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-xl bg-gradient-primary">
                  <category.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-display font-semibold text-gradient">
                  {category.title}
                </h3>
              </div>
              
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div 
                    key={skill.name}
                    className="space-y-2"
                    style={{ animationDelay: `${(categoryIndex * 4 + skillIndex) * 100}ms` }}
                  >
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-foreground">{skill.name}</span>
                      <span className="text-sm text-muted-foreground">{skill.level}%</span>
                    </div>
                    <Progress 
                      value={skill.level} 
                      className="h-2 bg-muted"
                      indicatorClassName="bg-gradient-skill"
                    />
                    <p className="text-xs text-muted-foreground">{skill.description}</p>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>
        
        {/* Soft Skills */}
        <Card className="glass p-8 border-card-border/50">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-display font-semibold text-gradient mb-4">
              Professional Competencies
            </h3>
          </div>
          
          <div className="flex flex-wrap justify-center gap-3">
            {softSkills.map((skill, index) => (
              <Badge 
                key={skill}
                variant="secondary" 
                className="btn-magnetic px-4 py-2 text-sm bg-card/80 text-foreground border-border/60 hover:border-primary/50 hover:bg-gradient-primary hover:text-primary-foreground transition-all duration-300"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {skill}
              </Badge>
            ))}
          </div>
        </Card>
        
        {/* Tools & Software */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-display font-semibold text-gradient mb-8">
            Industry Tools & Platforms
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {[
              { name: 'Fusion 360', icon: Wrench },
              { name: 'SolidWorks', icon: Layers },
              { name: 'OnShape', icon: MousePointer },
              { name: 'Python', icon: Code },
              { name: 'React', icon: Zap },
              { name: 'Arduino', icon: Cpu }
            ].map((tool, index) => (
              <Card 
                key={tool.name}
                className="card-hover p-6 bg-surface border-card-border/50 text-center group"
                style={{ animationDelay: `${index * 75}ms` }}
              >
                <tool.icon className="w-8 h-8 text-primary mx-auto mb-3 group-hover:text-secondary transition-colors duration-300" />
                <p className="text-sm font-medium text-foreground">{tool.name}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
