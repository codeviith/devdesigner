import { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import portfolioBackground from '@/assets/portfolio-background.jpg';

interface HeroSectionProps {
  scrollToSection: (id: string) => void;
}

export function HeroSection({ scrollToSection }: HeroSectionProps) {
  // Spotlight reveal mask following the cursor
  const heroRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = heroRef.current;
    if (!el) return;

    const setPos = (x: number, y: number) => {
      el.style.setProperty('--mx', `${x}px`);
      el.style.setProperty('--my', `${y}px`);
    };

    const magnets = Array.from(el.querySelectorAll<HTMLElement>('.btn-magnetic'));
    const MAX_DIST = 160; // px radius of influence
    const STRENGTH = 0.18; // subtle pull strength

    const resetMagnets = () => {
      for (const m of magnets) {
        m.style.setProperty('--tx', '0px');
        m.style.setProperty('--ty', '0px');
      }
    };

    // initialize spotlight to center and reset magnets
    const center = () => {
      const rect = el.getBoundingClientRect();
      setPos(rect.width / 2, rect.height / 2);
      resetMagnets();
    };
    center();

    const onMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const mx = e.clientX - rect.left;
      const my = e.clientY - rect.top;
      setPos(mx, my);

      // magnetic pull towards cursor
      for (const m of magnets) {
        const r = m.getBoundingClientRect();
        const cx = r.left + r.width / 2;
        const cy = r.top + r.height / 2;
        const dx = e.clientX - cx;
        const dy = e.clientY - cy;
        const dist = Math.hypot(dx, dy);
        if (dist < MAX_DIST) {
          const pull = 1 - dist / MAX_DIST;
          const tx = dx * STRENGTH * pull;
          const ty = dy * STRENGTH * pull;
          m.style.setProperty('--tx', `${tx.toFixed(2)}px`);
          m.style.setProperty('--ty', `${ty.toFixed(2)}px`);
        } else {
          m.style.setProperty('--tx', '0px');
          m.style.setProperty('--ty', '0px');
        }
      }
    };

    const onLeave = () => center();

    el.addEventListener('mousemove', onMove);
    el.addEventListener('mouseleave', onLeave);

    return () => {
      el.removeEventListener('mousemove', onMove);
      el.removeEventListener('mouseleave', onLeave);
    };
  }, []);

  return (
    <section id="hero" ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Portfolio Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${portfolioBackground})`,
        }}
      />
      
      {/* Overlay for better content readability */}
      <div className="absolute inset-0 bg-gradient-to-br from-background/80 via-background/60 to-background/40" />
      
      {/* Main content */}
      <div className="relative z-20 text-center max-w-6xl mx-auto px-6">
        <div className="space-y-8">
          {/* Name and Title */}
          <div className="space-y-6">
            {/* Profile picture placeholder */}
            <div className="flex justify-center">
              <Avatar className="h-[200px] w-[200px] shadow-xl ring-1 ring-border bg-muted/30">
                <AvatarImage
                  src="/placeholder.svg"
                  alt="John Designer profile picture placeholder"
                  loading="eager"
                  decoding="async"
                  fetchPriority="high"
                />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
            </div>
            <h1 className="text-5xl md:text-7xl font-display font-bold text-gradient title-underglow">
              John Designer
            </h1>
            <div className="flex items-center justify-center gap-4">
              <div className="h-px bg-gradient-primary flex-1 max-w-32" />
              <p className="text-xl md:text-2xl font-light text-muted-foreground tracking-wider">
                CAD/Product Designer
              </p>
              <div className="h-px bg-gradient-primary flex-1 max-w-32" />
            </div>
          </div>
          
          {/* Subtitle */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Crafting innovative product solutions through precision engineering and creative design. 
            Where technical expertise meets aesthetic excellence.
          </p>
          
          {/* Interactive elements */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-12">
            <Button 
              onClick={() => scrollToSection('projects')}
              className="btn-magnetic bg-gradient-primary text-primary-foreground border-0 px-8 py-6 text-lg font-medium rounded-xl"
            >
              View My Work
            </Button>
            
            <Button 
              variant="outline"
              onClick={() => scrollToSection('contact')}
              className="btn-magnetic border-border/50 text-foreground hover:text-primary-foreground hover:bg-gradient-secondary px-8 py-6 text-lg rounded-xl"
            >
              Get In Touch
            </Button>
          </div>
        </div>
        
      </div>

      {/* Scroll indicator - pinned to bottom of cover page */}
      <div className="pointer-events-none absolute inset-x-0 bottom-4 md:bottom-8 z-20 flex justify-center">
        <button
          onClick={() => scrollToSection('toc')}
          className="pointer-events-auto group flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors duration-300"
          aria-label="Scroll to explore"
        >
          <span className="text-sm font-mono tracking-wider">Scroll to explore</span>
          <ArrowDown className="w-6 h-6 animate-bounce group-hover:text-primary-glow" />
        </button>
      </div>
    </section>
  );
}