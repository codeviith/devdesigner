import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

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
      el.style.setProperty("--mx", `${x}px`);
      el.style.setProperty("--my", `${y}px`);
    };

    const magnets = Array.from(el.querySelectorAll<HTMLElement>(".btn-magnetic"));
    const MAX_DIST = 160; // px radius of influence
    const STRENGTH = 0.18; // subtle pull strength

    const resetMagnets = () => {
      for (const m of magnets) {
        m.style.setProperty("--tx", "0px");
        m.style.setProperty("--ty", "0px");
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
          m.style.setProperty("--tx", `${tx.toFixed(2)}px`);
          m.style.setProperty("--ty", `${ty.toFixed(2)}px`);
        } else {
          m.style.setProperty("--tx", "0px");
          m.style.setProperty("--ty", "0px");
        }
      }
    };

    const onLeave = () => center();

    el.addEventListener("mousemove", onMove);
    el.addEventListener("mouseleave", onLeave);

    return () => {
      el.removeEventListener("mousemove", onMove);
      el.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return (
    <section
      id="hero"
      ref={heroRef}
      className="relative z-10 min-h-screen flex items-center justify-center pt-16 pb-16 md:pt-20 md:pb-20"
    >
      {/* Overlay for better content readability */}
      <div className="absolute inset-0 bg-gradient-to-br from-background/30 via-background/20 to-background/25" />

      {/* Main content */}
      <div className="relative z-20 text-center max-w-6xl mx-auto px-6 -mt-10">
        <div className="space-y-6">
          {/* Name and Title */}
          <div className="space-y-6">
            {/* Profile picture */}
            <div className="flex justify-center">
              <Avatar className="w-[clamp(110px,20vw,160px)] h-[clamp(110px,20vw,160px)] shadow-xl ring-1 ring-border bg-muted/30">
                <AvatarImage
                  src="ProfilePic/Lin-Kevin-red-wht.png"
                  alt="Kevin Lin profile picture"
                  loading="eager"
                  decoding="async"
                  fetchPriority="high"
                />
                <AvatarFallback>KL</AvatarFallback>
              </Avatar>
            </div>
            <h1 className="font-display font-bold text-gradient title-underglow text-[clamp(2.25rem,6.5vw,4rem)] leading-tight">
              Kevin Lin
            </h1>
            <div className="flex items-center justify-center gap-2 md:gap-4 flex-wrap">
              <div className="h-px bg-gradient-primary flex-1 max-w-16 md:max-w-32 min-w-8" />
              <p className="font-bold text-foreground tracking-wider text-[clamp(0.875rem,2.5vw,1.5rem)] text-center px-2">
                CAD & Product Designer | Product Development & R&D
              </p>
              <div className="h-px bg-gradient-primary flex-1 max-w-16 md:max-w-32 min-w-8" />
            </div>
          </div>

          {/* Subtitle */}
          <p className="text-[clamp(0.875rem,1.8vw,1.25rem)] text-muted-foreground/80 max-w-3xl mx-auto leading-relaxed px-4">
            Bringing concepts to life through precise, manufacturable design.
          </p>

          {/* Personal Quote */}
          <div className="relative max-w-3xl mx-auto mt-8 px-4">
            <div className="flex flex-col items-start justify-center">
              <span className="text-[clamp(3rem,6vw,4.5rem)] font-['Times_New_Roman'] text-primary leading-none -mt-3">
                "
              </span>
              <p className="text-[clamp(1.25rem,2.5vw,1.875rem)] font-['Times_New_Roman'] font-black italic text-white/95 text-left leading-relaxed pl-4 md:pl-8 -mt-2">
                A product is only as strong as the design behind it.
              </p>
            </div>
          </div>

          {/* Spacer */}
          <div className="text-sm">&nbsp;</div>

          {/* Interactive elements */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-5 sm:gap-7 md:gap-15 mt-6 md:mt-10">
            <Button
              onClick={() => scrollToSection("projects")}
              className="btn-magnetic bg-gradient-secondary text-primary-foreground border-0 px-6 md:px-8 py-4 md:py-6 text-base md:text-lg font-medium rounded-xl hover:shadow-[0_0_20px_hsl(var(--secondary)/0.8)] transition-shadow duration-300"
            >
              View My Work
            </Button>

            <Button
              variant="outline"
              onClick={() => scrollToSection("contact")}
              className="btn-magnetic border-border/50 text-foreground hover:text-primary-foreground hover:bg-gradient-to-r hover:from-muted-foreground hover:to-foreground px-6 md:px-8 py-4 md:py-6 text-base md:text-lg rounded-xl hover:shadow-[0_0_20px_rgba(255,255,255,0.8)] transition-shadow duration-300"
            >
              Get In Touch
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator - pinned to bottom of cover page */}
      <div className="pointer-events-none absolute inset-x-0 bottom-2 md:bottom-4 z-20 flex justify-center">
        <button
          onClick={() => scrollToSection("toc")}
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
