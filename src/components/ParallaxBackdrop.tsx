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

  // Calculate parallax transform --> moves at n% of scroll speed
  const parallaxOffset = scrollY * 0.2;

  return (
    <div
      className="fixed inset-0 z-[-10] pointer-events-none transition-transform duration-100 ease-out"
      style={{ transform: `translateY(-${parallaxOffset}px)` }}
    >
      {/* Image 1 */}
      <img
        src="ProdPics/DYPLAB-ex-v-para.png"
        alt=""
        className="
          absolute
          rounded-lg
          opacity-100
          object-contain
          h-auto"
        style={{
          top: '12%',
          left: 'clamp(3%, 10%, 10%)',
          width: 'clamp(12rem, 20vw, 20rem)',
          // height: 'clamp(15rem, 20vw, 15rem)'
        }}
      />

      {/* Image 2 */}
      <img
        src="ProdPics/Esk8-1-clr.png"
        alt=""
        className="
          absolute
          rounded-lg
          opacity-90
          object-contain
          h-auto"
        style={{
          top: '65%',
          right: 'clamp(3%, 10%, 10%)',
          width: 'clamp(12rem, 22vw, 22rem)',
          // height: 'clamp(9rem, 16vw, 15rem)'
        }}
      />

      {/* Image 3 */}
      <img
        src="ProdPics/CoreXY-1.png"
        alt=""
        className="
          absolute
          rounded-lg
          opacity-100
          object-contain
          h-auto"
        style={{
          top: '150%',
          left: 'clamp(5%, 15%, 15%)',
          width: 'clamp(12rem, 22vw, 22rem)',
          // height: 'clamp(10rem, 18vw, 16rem)'
        }}
      />

      {/* Image 4 */}
      <img
        src="ProdPics/Riser-headlight-fixture-ex-v.png"
        alt=""
        className="
          absolute
          rounded-lg
          opacity-90
          object-contain
          h-auto"
        style={{
          top: '235%',
          right: 'clamp(3%, 10%, 10%)',
          width: 'clamp(12rem, 22vw, 22rem)',
          // height: 'clamp(10rem, 18vw, 16rem)'
        }}
      />

      {/* Image 5 */}
      <img 
        src="ProdPics/EUTV-para.png" 
        alt=""
        className="
          absolute
          rounded-lg
          opacity-90
          object-contain
          h-auto"
        style={{ 
          top: '320%', 
          left: 'clamp(5%, 15%, 15%)',
          width: 'clamp(18rem, 30vw, 30rem)',
          // height: 'clamp(10rem, 18vw, 16rem)'
        }}
      />
    </div>
  );
}
