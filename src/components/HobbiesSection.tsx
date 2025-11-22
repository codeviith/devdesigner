import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Waves, 
  Mountain, 
  Zap,
  Trophy,
  CircleDot,
  Cpu,
  Box,
  Wrench,
  Boxes,
  LucideIcon
} from 'lucide-react';
import shuttlecockIcon from '@/assets/icons/shuttlecock.png';
import tableTennisIcon from '@/assets/icons/table-tennis.png';
import snowboardingIcon from '@/assets/icons/snowboarding.png';
import boulderingIcon from '@/assets/icons/bouldering.png';
import rubiksCubeIcon from '@/assets/icons/rubiks-cube.png';
import electricSkateboardIcon from '@/assets/icons/electric-skateboard.png';
import diyProjectsIcon from '@/assets/icons/diy-projects.png';
import roboticsIcon from '@/assets/icons/robotics.png';
import printing3dIcon from '@/assets/icons/3d-printing.png';
import swimmingIcon from '@/assets/icons/swimming.png';
import hikingIcon from '@/assets/icons/hiking.png';

type SportItem = {
  name: string;
  icon: LucideIcon | string;
  isImage: boolean;
};

export function HobbiesSection() {
  const sports: SportItem[] = [
    {
      name: 'Swimming',
      icon: swimmingIcon,
      isImage: true
    },
    {
      name: 'Hiking',
      icon: hikingIcon,
      isImage: true
    },
    {
      name: 'Snowboarding',
      icon: snowboardingIcon,
      isImage: true
    },
    {
      name: 'Bouldering',
      icon: boulderingIcon,
      isImage: true
    },
    {
      name: 'Badminton',
      icon: shuttlecockIcon,
      isImage: true
    },
    {
      name: 'Table Tennis',
      icon: tableTennisIcon,
      isImage: true
    }
  ];

  const hobbies: SportItem[] = [
    {
      name: 'DIY Projects',
      icon: diyProjectsIcon,
      isImage: true
    },
    {
      name: 'Electric Skateboards',
      icon: electricSkateboardIcon,
      isImage: true
    },
    {
      name: '3D Printing and Designs',
      icon: printing3dIcon,
      isImage: true
    },
    {
      name: 'Robotics/Circuitry',
      icon: roboticsIcon,
      isImage: true
    },
    {
      name: 'Rubik\'s Cube',
      icon: rubiksCubeIcon,
      isImage: true
    }
  ];


  return (
    <section id="hobbies" className="py-20 px-6 bg-surface/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-gradient mb-4">
            Sports & Hobbies
          </h2>
          <div className="w-24 h-1 bg-gradient-secondary mx-auto mt-8 rounded-full" />
        </div>
        
        {/* Sports & Fitness */}
        <div className="mb-16">
          <h3 className="text-2xl font-display font-semibold text-gradient-secondary mb-8 flex items-center gap-3">
            <Trophy className="w-7 h-7 text-secondary" />
            Sports & Fitness
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sports.map((sport, index) => {
              const IconComponent = sport.icon as LucideIcon;
              return (
                <Card 
                  key={sport.name}
                  className="p-6 bg-gradient-surface border-card-border/50"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <div className="flex items-center gap-3">
                    {sport.isImage ? (
                      <img 
                        src={sport.icon as string} 
                        alt={sport.name}
                        className="w-8 h-8 object-contain brightness-0 invert opacity-80"
                        style={{ filter: 'brightness(0) saturate(100%) invert(70%) sepia(98%) saturate(2498%) hue-rotate(160deg) brightness(101%) contrast(101%)' }}
                      />
                    ) : (
                      <IconComponent className="w-8 h-8 text-primary" />
                    )}
                    <h4 className="font-display font-semibold text-foreground">
                      {sport.name}
                    </h4>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
        
        {/* Hobbies */}
        <div>
          <h3 className="text-2xl font-display font-semibold text-gradient-secondary mb-8 flex items-center gap-3">
            <Wrench className="w-7 h-7 text-secondary" />
            Hobbies
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {hobbies.map((hobby, index) => {
              const IconComponent = hobby.icon as LucideIcon;
              return (
                <Card 
                  key={hobby.name}
                  className="p-6 bg-surface border-card-border/50"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-center gap-3">
                    {hobby.isImage ? (
                      <img 
                        src={hobby.icon as string} 
                        alt={hobby.name}
                        className="w-8 h-8 object-contain brightness-0 invert opacity-80"
                        style={{ filter: 'brightness(0) saturate(100%) invert(70%) sepia(98%) saturate(2498%) hue-rotate(160deg) brightness(101%) contrast(101%)' }}
                      />
                    ) : (
                      <IconComponent className="w-8 h-8 text-primary" />
                    )}
                    <h4 className="font-display font-semibold text-foreground">
                      {hobby.name}
                    </h4>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
