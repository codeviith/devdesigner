import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { Menu, X, ArrowUp } from 'lucide-react';

interface NavigationProps {
  scrollToSection: (id: string) => void;
}

export function Navigation({ scrollToSection }: NavigationProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hasPassedToc, setHasPassedToc] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  const navItems = [
    { id: 'hero', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Skills' },
    { id: 'design-process', label: 'Process' },
    { id: 'contact', label: 'Contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Calculate scroll progress
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const currentProgress = (window.scrollY / scrollHeight) * 100;
      setScrollProgress(currentProgress);
      
      // Check if user has scrolled past the portfolio navigation section
      const tocSection = document.getElementById('toc');
      if (tocSection) {
        const rect = tocSection.getBoundingClientRect();
        setHasPassedToc(rect.bottom < 0);
      }
      
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

  const scrollToPortfolioNav = () => {
    scrollToSection('toc');
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
                  className={`link-underline px-4 py-2 text-sm font-bold ${
                    item.id === 'contact' ? 'text-white hover:text-white' : 'text-primary hover:text-primary'
                  } hover:bg-transparent transition-all duration-300 ${
                    activeSection === item.id
                      ? 'bg-primary/10'
                      : ''
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
              className="md:hidden text-muted-foreground hover:text-foreground"
              style={{ minWidth: '48px', minHeight: '48px', padding: 'var(--space-sm)' }}
            >
              {isMobileMenuOpen ? <X style={{ width: '24px', height: '24px' }} /> : <Menu style={{ width: '24px', height: '24px' }} />}
            </Button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-border/50 bg-background/95 backdrop-blur-lg">
            <div style={{ padding: 'var(--space-md) var(--space-lg)', display: 'flex', flexDirection: 'column', gap: 'var(--space-xs)' }}>
              {navItems.slice(1).map((item) => (
                <Button
                  key={item.id}
                  variant="ghost"
                  onClick={() => handleNavClick(item.id)}
                  className={`w-full justify-start text-left font-bold transition-colors duration-300 ${
                    item.id === 'contact' ? 'hover:bg-secondary/10' : 'hover:bg-primary/10'
                  } ${
                    activeSection === item.id 
                      ? item.id === 'contact' 
                        ? 'bg-secondary/10 text-secondary' 
                        : 'bg-primary/10 text-primary'
                      : item.id === 'contact' 
                        ? 'text-secondary' 
                        : 'text-foreground'
                  }`}
                  style={{ minHeight: '48px', fontSize: 'var(--text-base)', padding: 'var(--space-sm) var(--space-md)' }}
                >
                  {item.label}
                </Button>
              ))}
            </div>
          </div>
        )}
      </nav>
      
      {/* Floating Buttons with Tooltips */}
      <TooltipProvider delayDuration={500}>
        {/* Portfolio Navigation Button */}
        {hasPassedToc && (
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                onClick={scrollToPortfolioNav}
                className="fixed z-50 btn-magnetic rounded-full bg-gradient-to-r from-amber-500 to-gray-400 text-white border-0 shadow-glow p-0"
                style={{ 
                  bottom: isScrolled ? 'clamp(4.5rem, 10vw, 6rem)' : 'clamp(1rem, 3vw, 1.5rem)',
                  right: 'clamp(1rem, 3vw, 1.5rem)',
                  width: 'clamp(48px, 6vw, 56px)',
                  height: 'clamp(48px, 6vw, 56px)'
                }}
              >
                <div style={{ width: 'clamp(20px, 3vw, 24px)', height: 'clamp(20px, 3vw, 24px)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Menu className="w-full h-full" />
                </div>
              </Button>
            </TooltipTrigger>
            <TooltipContent side="left">
              <p>Return to Menu</p>
            </TooltipContent>
          </Tooltip>
        )}

        {/* Scroll to Top Button */}
        {isScrolled && (
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                onClick={scrollToTop}
                className="fixed z-50 btn-magnetic rounded-full bg-gradient-primary text-primary-foreground border-0 shadow-glow p-0"
                style={{ 
                  bottom: 'clamp(1rem, 3vw, 1.5rem)',
                  right: 'clamp(1rem, 3vw, 1.5rem)',
                  width: 'clamp(48px, 6vw, 56px)',
                  height: 'clamp(48px, 6vw, 56px)'
                }}
              >
                <div style={{ width: 'clamp(20px, 3vw, 24px)', height: 'clamp(20px, 3vw, 24px)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <ArrowUp className="w-full h-full" />
                </div>
              </Button>
            </TooltipTrigger>
            <TooltipContent side="left">
              <p>Return to Top</p>
            </TooltipContent>
          </Tooltip>
        )}
      </TooltipProvider>
      
      {/* Progress Indicator */}
      <div className="fixed top-0 left-0 right-0 z-40 h-1 bg-surface">
        <div 
          className="h-full bg-gradient-primary transition-all duration-300 ease-out"
          style={{
            width: `${scrollProgress}%`
          }}
        />
      </div>
    </>
  );
}