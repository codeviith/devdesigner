import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Waves, 
  Mountain, 
  Zap,
  Trophy,
  Target,
  Cpu,
  Box,
  Wrench,
  PocketKnife
} from 'lucide-react';

export function HobbiesSection() {
  const sports = [
    {
      name: 'Swimming',
      icon: Waves,
      color: 'text-primary'
    },
    {
      name: 'Hiking',
      icon: Mountain,
      color: 'text-secondary'
    },
    {
      name: 'Badminton',
      icon: Target,
      color: 'text-accent'
    },
    {
      name: 'Table Tennis',
      icon: Target,
      color: 'text-primary'
    },
    {
      name: 'Racquet Ball',
      icon: Target,
      color: 'text-secondary'
    }
  ];

  const hobbies = [
    {
      name: 'DIY Projects',
      icon: Wrench,
      color: 'text-primary'
    },
    {
      name: 'Electric Skateboards',
      icon: Zap,
      color: 'text-secondary'
    },
    {
      name: '3D Printing and Designs',
      icon: Box,
      color: 'text-accent'
    },
    {
      name: 'Robotics/Circuitry',
      icon: Cpu,
      color: 'text-primary'
    },
    {
      name: 'Rubik\'s Cube',
      icon: PocketKnife,
      color: 'text-secondary'
    }
  ];


  return (
    <section id="hobbies" className="py-20 px-6 bg-surface/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-gradient-secondary mb-4">
            Sports & Hobbies
          </h2>
          <div className="w-24 h-1 bg-gradient-secondary mx-auto mt-8 rounded-full" />
        </div>
        
        {/* Sports & Fitness */}
        <div className="mb-16">
          <h3 className="text-2xl font-display font-semibold text-gradient mb-8 flex items-center gap-3">
            <Trophy className="w-7 h-7 text-primary" />
            Sports & Fitness
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sports.map((sport, index) => (
              <Card 
                key={sport.name}
                className="card-hover p-6 bg-gradient-surface border-card-border/50 group"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-xl bg-gradient-primary group-hover:bg-gradient-secondary transition-all duration-300">
                    <sport.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <h4 className="font-display font-semibold text-foreground group-hover:text-gradient transition-colors duration-300">
                    {sport.name}
                  </h4>
                </div>
              </Card>
            ))}
          </div>
        </div>
        
        {/* Hobbies */}
        <div>
          <h3 className="text-2xl font-display font-semibold text-gradient-secondary mb-8 flex items-center gap-3">
            <Wrench className="w-7 h-7 text-secondary" />
            Hobbies
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {hobbies.map((hobby, index) => (
              <Card 
                key={hobby.name}
                className="card-hover p-6 bg-surface border-card-border/50 group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-xl bg-gradient-secondary group-hover:bg-gradient-primary transition-all duration-300">
                    <hobby.icon className="w-6 h-6 text-secondary-foreground" />
                  </div>
                  <h4 className="font-display font-semibold text-foreground group-hover:text-gradient transition-colors duration-300">
                    {hobby.name}
                  </h4>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}