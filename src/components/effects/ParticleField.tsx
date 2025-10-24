import { useEffect, useRef } from "react";

interface ParticleFieldProps {
  className?: string;
}

interface Particle {
  x: number;
  y: number;
  bx: number; // base/origin x
  by: number; // base/origin y
  vx: number;
  vy: number;
  r: number; // radius
}

export function ParticleField({ className }: ParticleFieldProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const rootStyles = getComputedStyle(document.documentElement);
    const primary = rootStyles.getPropertyValue("--primary").trim(); // e.g. "220 90% 50%"
    const bg = rootStyles.getPropertyValue("--background").trim();

    const DPR = Math.min(window.devicePixelRatio || 1, 2);

    let width = 0;
    let height = 0;
    let particles: Particle[] = [];

    const mouse = { x: NaN, y: NaN, active: false };

    const setSize = () => {
      const rect = canvas.getBoundingClientRect();
      width = Math.floor(rect.width);
      height = Math.floor(rect.height);
      canvas.width = Math.floor(width * DPR);
      canvas.height = Math.floor(height * DPR);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
    };

    const rand = (min: number, max: number) => Math.random() * (max - min) + min;

    const initParticles = () => {
      particles = [];
      const area = width * height;
      const baseCount = area > 0 ? Math.min(260, Math.max(60, Math.floor(area / 16000))) : 100;
      const count = prefersReducedMotion ? Math.floor(baseCount * 0.4) : baseCount;

      for (let i = 0; i < count; i++) {
        const px = rand(0, width);
        const py = rand(0, height);
        particles.push({
          x: px,
          y: py,
          bx: px,
          by: py,
          vx: 0,
          vy: 0,
          r: rand(1.4, 3.0),
        });
      }
    };

    const onMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
      mouse.active = true;
    };

    const onLeave = () => {
      mouse.active = false;
      mouse.x = NaN;
      mouse.y = NaN;
    };

    const onResize = () => {
      setSize();
      initParticles();
    };

    setSize();
    initParticles();

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseleave", onLeave);
    window.addEventListener("resize", onResize);

    const MOUSE_RADIUS = 130; // influence radius
    const FORCE = 2.2; // repulsion strength
    const SPRING = 0.05; // pull back to base
    const FRICTION = 0.88; // damping

    const draw = () => {
      // transparent clear to allow subtle trails when needed
      ctx.clearRect(0, 0, width, height);

      ctx.fillStyle = `hsl(${primary} / 0.65)`;

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // spring back to origin
        const ax = (p.bx - p.x) * SPRING;
        const ay = (p.by - p.y) * SPRING;
        p.vx += ax;
        p.vy += ay;

        // mouse repulsion
        if (mouse.active && Number.isFinite(mouse.x) && Number.isFinite(mouse.y)) {
          const dx = p.x - mouse.x;
          const dy = p.y - mouse.y;
          const dist = Math.hypot(dx, dy) || 1;
          if (dist < MOUSE_RADIUS) {
            const f = ((MOUSE_RADIUS - dist) / MOUSE_RADIUS) * FORCE;
            p.vx += (dx / dist) * f;
            p.vy += (dy / dist) * f;
          }
        }

        // integrate
        p.vx *= FRICTION;
        p.vy *= FRICTION;
        p.x += p.vx;
        p.y += p.vy;

        // wrap softly at edges
        if (p.x < -50) p.x = width + 50;
        if (p.x > width + 50) p.x = -50;
        if (p.y < -50) p.y = height + 50;
        if (p.y > height + 50) p.y = -50;

        // draw
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();
      }
    };

    let last = 0;
    const loop = (t: number) => {
      const dt = t - last;
      last = t;
      // If reduced motion, drop to ~20fps for energy savings
      if (prefersReducedMotion) {
        if (dt > 50) draw();
      } else {
        draw();
      }
      rafRef.current = requestAnimationFrame(loop);
    };

    rafRef.current = requestAnimationFrame(loop);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseleave", onLeave);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <div className={`absolute inset-0 z-10 pointer-events-none ${className ?? ""}`} aria-hidden="true">
      <canvas ref={canvasRef} className="w-full h-full" />
    </div>
  );
}
