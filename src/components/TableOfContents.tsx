import { Card } from '@/components/ui/card';
import { 
  User, 
  Brain, 
  FolderOpen, 
  GraduationCap, 
  Trophy, 
  Mail,
  ChevronRight 
} from 'lucide-react';

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
      id: 'about', 
      title: 'About Me', 
      icon: User, 
      description: 'My design philosophy and journey' 
    },
    { 
      id: 'skills', 
      title: 'Skills & Expertise', 
      icon: Brain, 
      description: 'Technical capabilities and tools' 
    },
    { 
      id: 'projects', 
      title: 'Featured Projects', 
      icon: FolderOpen, 
      description: 'Design portfolio and case studies' 
    },
    { 
      id: 'education', 
      title: 'Education & Certifications', 
      icon: GraduationCap, 
      description: 'Academic background and credentials' 
    },
    { 
      id: 'hobbies', 
      title: 'Sports & Hobbies', 
      icon: Trophy, 
      description: 'Personal interests and activities' 
    },
    { 
      id: 'contact', 
      title: 'Contact', 
      icon: Mail, 
      description: 'Let\'s connect and collaborate' 
    },
  ];

  return (
    <section id="toc" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-gradient-secondary mb-4">
            Portfolio Navigation
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sections.map((section, index) => (
            <Card 
              key={section.id}
              className="card-hover cursor-pointer group p-6 bg-surface border-card-border hover:border-primary/50"
              onClick={() => scrollToSection(section.id)}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-gradient-primary group-hover:bg-gradient-secondary transition-all duration-300">
                  <section.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                
                <div className="flex-1 space-y-2">
                  <div className="flex items-center justify-between">
                    <h3 className="font-display font-semibold text-lg text-foreground group-hover:text-gradient">
                      {section.title}
                    </h3>
                    <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors duration-300 group-hover:translate-x-1" />
                  </div>
                  
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {section.description}
                  </p>
                </div>
              </div>
              
              {/* Hover effect indicator */}
              <div className="mt-4 h-1 w-0 bg-gradient-primary group-hover:w-full transition-all duration-500 rounded-full" />
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
