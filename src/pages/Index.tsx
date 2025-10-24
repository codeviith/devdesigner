import { useCallback } from 'react';
import { Navigation } from '@/components/Navigation';
import { HeroSection } from '@/components/HeroSection';
import { TableOfContents } from '@/components/TableOfContents';
import { AboutSection } from '@/components/AboutSection';
import { SkillsSection } from '@/components/SkillsSection';
import { ProjectsSection } from '@/components/ProjectsSection';
import { EducationSection } from '@/components/EducationSection';
import { HobbiesSection } from '@/components/HobbiesSection';
import { ContactSection } from '@/components/ContactSection';

const Index = () => {
  const scrollToSection = useCallback((sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 80; // Account for fixed header
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  }, []);

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Navigation scrollToSection={scrollToSection} />
      
      <main>
        <HeroSection scrollToSection={scrollToSection} />
        <TableOfContents scrollToSection={scrollToSection} />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <EducationSection />
        <HobbiesSection />
        <ContactSection />
      </main>
      
      {/* Footer */}
      <footer className="py-8 px-6 border-t border-border/50 bg-surface/30">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-muted-foreground text-sm">
            © 2024 John Designer. Crafted with passion for exceptional design.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
