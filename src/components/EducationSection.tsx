import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
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
// import certificateFS from "/Certificates/FS - SE Certificate of Completion.jpg";

export function EducationSection() {
  const [selectedCertificate, setSelectedCertificate] = useState<string | null>(null);
  const education = [
    {
      degree: 'Full Stack Software Engineer',
      specialization: '',
      institution: 'Flatiron School',
      location: 'New York, NY',
      duration: '2023',
      gpa: '',
      highlights: [],
      coursework: []
    },
    {
      degree: 'Bachelor of Science',
      specialization: '',
      institution: 'University of California, San Diego',
      location: 'San Diego, CA',
      duration: '2012',
      gpa: '',
      highlights: [],
      coursework: []
    }
  ];

  const certifications = [
    {
      name: 'Full Stack Software Engineering Certificate',
      issuer: 'Flatiron School',
      date: '2023',
      credentialId: 'Completed comprehensive full-stack development program covering modern web technologies.',
      skills: ['Full Stack Development', 'JavaScript', 'React', 'Python', 'Flask'],
      level: 'Certificate'
    },
    {
      name: 'Additive Manufacturing & 3D Printing – FDM/SLA Printing & Material Selection',
      issuer: '',
      date: '2016—Present',
      credentialId: 'Hands-on experience in end-to-end prototyping and small-batch manufacturing workflows.',
      skills: ['3D Printing', 'FDM', 'SLA', 'Material Selection', 'Manufacturing'],
      level: 'Training'
    },
    {
      name: 'Advanced CAD Design & 3D Modeling – Fusion 360, SolidWorks, Onshape',
      issuer: '',
      date: '2021—Present',
      credentialId: 'Self-directed training and applied experience through professional product design and prototyping at Display Your Passion Like a Boss, LLC.',
      skills: ['Fusion 360', 'SolidWorks', 'Onshape', 'CAD Design', '3D Modeling'],
      level: 'Training'
    },
    {
      name: 'Adult and Pediatric First Aid/CPR/AED',
      issuer: 'American Red Cross Training Services',
      date: '2025—2027',
      credentialId: 'Certified for emergency preparedness and safety compliance at The Coding Space.',
      skills: ['First Aid', 'CPR', 'AED', 'Safety Compliance'],
      level: 'Certificate'
    }
  ];

  const achievements: any[] = [];

  return (
    <section id="education" className="py-20 px-6 bg-surface/65">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-gradient mb-4">
            Education & Certifications
          </h2>
          <div className="w-24 h-1 bg-gradient-secondary mx-auto mt-8 rounded-full" />
        </div>

        {/* Education */}
        <div className="mb-16">
          <h3 className="text-2xl font-display font-semibold text-gradient-secondary mb-8 flex items-center gap-3">
            <GraduationCap className="w-7 h-7 text-secondary" />
            Academic Background
          </h3>

          <div className="space-y-8">
            {education.map((edu, index) => (
              <div
                key={edu.degree}
                className="border-l-4 border-primary/30 pl-6 py-4"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="space-y-4">
                  {/* Main Info */}
                  <div className="space-y-2">
                    <h4 className="text-xl font-display font-semibold text-white">
                      {edu.degree}
                    </h4>
                    {edu.specialization && <p className="text-lg text-foreground">{edu.specialization}</p>}
                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <BookOpen className="w-4 h-4 text-cyan-400" />
                        {edu.institution}
                      </div>
                      {edu.location && (
                        <div className="flex items-center gap-1">
                          <MapPin className="w-4 h-4 text-cyan-400" />
                          {edu.location}
                        </div>
                      )}
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4 text-cyan-400" />
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
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div className="mb-16">
          <h3 className="text-2xl font-display font-semibold text-gradient-secondary mb-8 flex items-center gap-3">
            <Award className="w-7 h-7 text-secondary" />
            Professional Certifications & Training
          </h3>

          <div className="space-y-8">
            {certifications.map((cert, index) => (
              <div
                key={cert.name}
                className="border-l-4 border-primary/30 pl-6 py-4"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="space-y-4">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <h4 className="font-display font-semibold text-foreground text-lg">
                        {cert.name}
                      </h4>
                      {cert.issuer && <p className="text-sm text-muted-foreground mt-1">{cert.issuer}</p>}
                    </div>
                    <Badge
                      variant="outline"
                      className={`text-sm font-bold flex-shrink-0 border-2 px-3 py-1 ${cert.level === 'Certificate'
                          ? 'border-green-400 text-green-400'
                          : cert.level === 'Training'
                            ? 'border-amber-400 text-amber-400'
                            : 'border-accent text-accent'
                        }`}
                    >
                      {cert.level}
                    </Badge>
                  </div>

                  <div className="space-y-2 text-xs text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      <span className="font-bold text-white">Issued:</span> {cert.date}
                    </div>
                    <div className="flex items-center gap-1">
                      <ExternalLink className="w-3 h-3" />
                      <span className="font-bold text-white">Description:</span> {cert.credentialId}
                    </div>
                  </div>

                  {cert.name === 'Full Stack Software Engineering Certificate' && (
                    <div className="mt-4">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => setSelectedCertificate(cert.name)}
                        className="text-primary border-primary hover:shadow-[0_0_20px_hsl(var(--primary)/0.8)] transition-shadow duration-300"
                      >
                        Show Certificate
                      </Button>
                    </div>
                  )}

                  <div>
                    <h6 className="font-semibold text-xs text-foreground mb-2">Skills Validated:</h6>
                    <div className="flex flex-wrap gap-1">
                      {cert.skills.map((skill) => (
                        <Badge
                          key={skill}
                          variant="secondary"
                          className="text-xs bg-muted/20 text-muted-foreground border border-muted-foreground hover:bg-muted/20"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Certificate Modal */}
      <Dialog open={selectedCertificate !== null} onOpenChange={() => setSelectedCertificate(null)}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto bg-background/95 backdrop-blur-sm border-border/50 [&>button]:text-destructive [&>button]:hover:text-destructive/80 [&>button>svg]:w-6 [&>button>svg]:h-6">
          <DialogHeader>
            <DialogTitle className="text-2xl font-display font-bold text-gradient">
              {selectedCertificate}
            </DialogTitle>
            <DialogDescription className="text-muted-foreground">
              Certificate of Completion
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-6 mt-6">
            {/* Certificate Image */}
            <div className="w-full max-h-[60vh] flex items-center justify-center bg-muted/10 rounded-md border border-border/30 overflow-hidden">
              <img
                src="Certificates/FS - SE Certificate of Completion.jpg"
                alt="Flatiron School Full Stack Software Engineering Certificate of Completion"
                className="max-w-full max-h-[60vh] object-contain rounded-md"
              />
            </div>

            {/* Close Button */}
            <div className="pt-4 border-t border-border/50">
              <Button
                onClick={() => setSelectedCertificate(null)}
                className="w-full border-0 transition-all duration-300 hover:opacity-90"
                style={{
                  background: 'var(--gradient-destructive)',
                  color: 'hsl(var(--foreground))'
                }}
              >
                Close
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
}