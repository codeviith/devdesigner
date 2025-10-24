import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, ArrowUp } from 'lucide-react';

interface NavigationProps {
  scrollToSection: (id: string) => void;
}

export function Navigation({ scrollToSection }: NavigationProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'hero', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Skills' },
    { id: 'contact', label: 'Contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = navItems.map(item => document.getElementById(item.id));
      const currentSection = sections.find(section => {
        if (!section) return false;
        const rect = section.getBoundingClientRect();
        return rect.top <= 100 && rect.bottom >= 100;
      });
      
      if (currentSection) {
        setActiveSection(currentSection.id);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (sectionId: string) => {
    scrollToSection(sectionId);
    setIsMobileMenuOpen(false);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Main Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-background/80 backdrop-blur-md border-b border-border/50 shadow-soft' 
          : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <button 
              onClick={() => scrollToSection('hero')}
              className="font-display font-bold text-xl text-gradient hover:scale-105 transition-transform duration-300"
            >
              KL
            </button>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1">
              {navItems.slice(1).map((item) => (
                <Button
                  key={item.id}
                  variant="ghost"
                  onClick={() => handleNavClick(item.id)}
                  className={`link-underline px-4 py-2 text-sm font-medium transition-all duration-300 ${
                    activeSection === item.id
                      ? 'text-primary bg-primary/10'
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  {item.label}
                </Button>
              ))}
            </div>
            
            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-muted-foreground hover:text-foreground"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-background/95 backdrop-blur-md border-b border-border/50 shadow-strong">
            <div className="px-6 py-4 space-y-2">
              {navItems.slice(1).map((item) => (
                <Button
                  key={item.id}
                  variant="ghost"
                  onClick={() => handleNavClick(item.id)}
                  className={`w-full justify-start px-4 py-3 text-sm font-medium transition-all duration-300 ${
                    activeSection === item.id
                      ? 'text-primary bg-primary/10'
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  {item.label}
                </Button>
              ))}
            </div>
          </div>
        )}
      </nav>
      
      {/* Scroll to Top Button */}
      {isScrolled && (
        <Button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-50 btn-magnetic w-12 h-12 rounded-full bg-gradient-primary text-primary-foreground border-0 shadow-glow p-0"
        >
          <ArrowUp className="w-5 h-5" />
        </Button>
      )}
      
      {/* Progress Indicator */}
      <div className="fixed top-0 left-0 right-0 z-40 h-1 bg-surface">
        <div 
          className="h-full bg-gradient-primary transition-all duration-300 ease-out"
          style={{
            width: `${(window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100}%`
          }}
        />
      </div>
    </>
  );
}
