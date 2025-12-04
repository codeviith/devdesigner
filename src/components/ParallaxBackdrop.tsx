import { useEffect, useState } from 'react';

export function ParallaxBackdrop() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Calculate parallax transform - moves at 20% of scroll speed for smoother motion
  const parallaxOffset = scrollY * 0.2;

  return (
    <div 
      className="fixed inset-0 z-50 pointer-events-none transition-transform duration-100 ease-out"
      style={{ transform: `translateY(-${parallaxOffset}px)` }}
    >
      {/* 5 images spread evenly throughout the page - fully responsive sizing */}
      <img 
        src="/placeholder.svg" 
        alt=""
        className="absolute object-cover rounded-lg opacity-50 border border-primary/20"
        style={{ 
          top: '20%', 
          left: 'clamp(2%, 8%, 8%)',
          width: 'clamp(8rem, 15vw, 14rem)',
          height: 'clamp(8rem, 15vw, 14rem)'
        }}
      />
      <img 
        src="/placeholder.svg" 
        alt=""
        className="absolute object-cover rounded-lg opacity-60 border border-primary/20"
        style={{ 
          top: '70%', 
          right: 'clamp(2%, 10%, 10%)',
          width: 'clamp(9rem, 16vw, 15rem)',
          height: 'clamp(9rem, 16vw, 15rem)'
        }}
      />
      <img 
        src="/placeholder.svg" 
        alt=""
        className="absolute object-cover rounded-lg opacity-50 border border-primary/20"
        style={{ 
          top: '120%', 
          left: 'clamp(5%, 15%, 15%)',
          width: 'clamp(10rem, 18vw, 16rem)',
          height: 'clamp(10rem, 18vw, 16rem)'
        }}
      />
      <img 
        src="/placeholder.svg" 
        alt=""
        className="absolute object-cover rounded-lg opacity-55 border border-primary/20"
        style={{ 
          top: '170%', 
          right: 'clamp(2%, 12%, 12%)',
          width: 'clamp(8rem, 15vw, 14rem)',
          height: 'clamp(8rem, 15vw, 14rem)'
        }}
      />
      <img 
        src="/placeholder.svg" 
        alt=""
        className="absolute object-cover rounded-lg opacity-50 border border-primary/20"
        style={{ 
          top: '220%', 
          left: 'clamp(2%, 8%, 8%)',
          width: 'clamp(9rem, 16vw, 15rem)',
          height: 'clamp(9rem, 16vw, 15rem)'
        }}
      />
    </div>
  );
}
