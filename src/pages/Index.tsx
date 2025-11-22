import { useCallback } from "react";
import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { TableOfContents } from "@/components/TableOfContents";
import { AboutSection } from "@/components/AboutSection";
import { SkillsSection } from "@/components/SkillsSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { EducationSection } from "@/components/EducationSection";
import { HobbiesSection } from "@/components/HobbiesSection";
import { ContactSection } from "@/components/ContactSection";
import { ParallaxBackdrop } from "@/components/ParallaxBackdrop";
import { DesignProcessSection } from "@/components/DesignProcessSection";

const Index = () => {
  const scrollToSection = useCallback((sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 80; // Account for fixed header
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  }, []);

  return (
    <div className="min-h-screen bg-transparent overflow-x-hidden relative">
      <ParallaxBackdrop />
      <Navigation scrollToSection={scrollToSection} />

      <main>
        <HeroSection scrollToSection={scrollToSection} />
        <TableOfContents scrollToSection={scrollToSection} />
        <AboutSection />
        <ProjectsSection />
        <SkillsSection />
        <DesignProcessSection />
        <EducationSection />
        <HobbiesSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-border/50 bg-surface/30">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-foreground text-base font-normal">© 2025 Kevin Lin. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
