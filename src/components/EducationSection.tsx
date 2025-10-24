import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  GraduationCap, 
  Award, 
  Calendar, 
  MapPin,
  ExternalLink,
  BookOpen,
  Trophy,
  Star
} from 'lucide-react';

export function EducationSection() {
  const education = [
    {
      degree: 'Hands-On Product Design & Fabrication',
      specialization: 'DYPLab',
      institution: 'Display Your Passion Like a Boss, LLC',
      location: 'Professional Experience',
      duration: '2021 - Present',
      gpa: '',
      highlights: [
        'Transitioned from hobbyist to professional-level CAD work',
        'Designed and prototyped mechanical parts for collectible display products',
        'Broadened expertise in real-world product development, manufacturability, and fabrication',
        'Delivered client-oriented work and supported small-batch production'
      ],
      coursework: []
    },
    {
      degree: 'Advanced CAD & Product Development',
      specialization: 'Self-Taught',
      institution: 'Independent Learning & Personal Projects',
      location: 'Self-Directed',
      duration: '2015 - Present',
      gpa: '',
      highlights: [
        'Over a decade of experience learning CAD through self-directed projects',
        'Built foundational skills using Fusion 360, SolidWorks, and OnShape',
        'Developed expertise in 3D modeling, prototyping, tolerance fit, and mechanical design',
        'Strengthened skills through personal R&D and hobby projects'
      ],
      coursework: []
    },
    {
      degree: 'Bachelor of Science in Human Biology',
      specialization: '',
      institution: 'University of California, San Diego',
      location: 'San Diego, CA',
      duration: 'June 2012',
      gpa: '',
      highlights: [],
      coursework: []
    }
  ];

  const certifications = [
    {
      name: 'Full Stack Software Engineering Certificate',
      issuer: 'Flatiron School',
      date: 'December 2023',
      credentialId: 'Show Certificate',
      skills: ['Full Stack Development', 'JavaScript', 'React', 'Python', 'Flask'],
      level: 'Certificate'
    }
  ];

  const achievements: any[] = [];

  return (
    <section id="education" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-gradient mb-4">
            Education & Certifications
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto mt-8 rounded-full" />
        </div>
        
        {/* Education */}
        <div className="mb-16">
          <h3 className="text-2xl font-display font-semibold text-gradient-secondary mb-8 flex items-center gap-3">
            <GraduationCap className="w-7 h-7 text-primary" />
            Academic Background
          </h3>
          
          <div className="space-y-6">
            {education.map((edu, index) => (
              <Card 
                key={edu.degree}
                className="card-hover p-8 bg-gradient-surface border-card-border/50"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="space-y-6">
                  {/* Main Info */}
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <h4 className="text-xl font-display font-semibold text-gradient">
                        {edu.degree}
                      </h4>
                      {edu.specialization && <p className="text-lg text-foreground">{edu.specialization}</p>}
                      <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <BookOpen className="w-4 h-4" />
                          {edu.institution}
                        </div>
                        {edu.location && (
                          <div className="flex items-center gap-1">
                            <MapPin className="w-4 h-4" />
                            {edu.location}
                          </div>
                        )}
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {edu.duration}
                        </div>
                      </div>
                    </div>
                    
                    {edu.highlights.length > 0 && (
                      <div className="space-y-3">
                        <h5 className="font-semibold text-foreground">Key Achievements:</h5>
                        <ul className="space-y-1 text-sm text-muted-foreground">
                          {edu.highlights.map((highlight, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <Star className="w-3 h-3 text-primary mt-1 flex-shrink-0" />
                              {highlight}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                  
                </div>
              </Card>
            ))}
          </div>
        </div>
        
        {/* Certifications */}
        <div className="mb-16">
          <h3 className="text-2xl font-display font-semibold text-gradient-secondary mb-8 flex items-center gap-3">
            <Award className="w-7 h-7 text-secondary" />
            Professional Certifications
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <Card 
                key={cert.name}
                className="card-hover p-6 bg-surface border-card-border/50 group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="space-y-4">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h4 className="font-display font-semibold text-foreground group-hover:text-gradient transition-colors duration-300 line-clamp-2">
                        {cert.name}
                      </h4>
                      <p className="text-sm text-muted-foreground mt-1">{cert.issuer}</p>
                    </div>
                    <Badge 
                      variant="outline" 
                      className={`text-xs flex-shrink-0 ${
                        cert.level.includes('Professional') || cert.level.includes('Black Belt') 
                          ? 'border-primary/50 text-primary' 
                          : cert.level.includes('Green Belt')
                          ? 'border-secondary/50 text-secondary'
                          : 'border-accent/50 text-accent'
                      }`}
                    >
                      {cert.level}
                    </Badge>
                  </div>
                  
                  <div className="space-y-2 text-xs text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      Issued: {cert.date}
                    </div>
                    <div className="flex items-center gap-1">
                      <ExternalLink className="w-3 h-3" />
                      ID: {cert.credentialId}
                    </div>
                  </div>
                  
                  <div>
                    <h6 className="font-semibold text-xs text-foreground mb-2">Skills Validated:</h6>
                    <div className="flex flex-wrap gap-1">
                      {cert.skills.map((skill) => (
                        <Badge 
                          key={skill}
                          variant="secondary" 
                          className="text-xs bg-muted/20 text-muted-foreground border-border/20"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
        
      </div>
    </section>
  );
}