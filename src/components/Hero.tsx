"use client";

import { useRef, useEffect } from "react";
import { motion, useSpring, useTransform } from "framer-motion";

function SmokeCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = canvas.width;
    let height = canvas.height;
    
    // Resize handler
    const handleResize = () => {
      const rect = canvas.parentElement?.getBoundingClientRect();
      if (rect) {
        width = rect.width;
        height = rect.height;
        canvas.width = width;
        canvas.height = height;
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);

    let animationFrameId: number;
    let mouse = { x: -1000, y: -1000 };
    
    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };
    
    const handleMouseLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
    };

    window.addEventListener("mousemove", handleMouseMove);
    canvas.addEventListener("mouseleave", handleMouseLeave);

    class Particle {
      x: number;
      y: number;
      size: number;
      speedY: number;
      speedX: number;
      life: number;
      maxLife: number;
      
      constructor() {
        this.x = width / 2 + (Math.random() - 0.5) * 10;
        this.y = height;
        this.size = Math.random() * 15 + 10;
        this.speedY = Math.random() * -1 - 0.5;
        this.speedX = (Math.random() - 0.5) * 0.5;
        this.maxLife = Math.random() * 200 + 100;
        this.life = this.maxLife;
      }

      update() {
        // Bend away from mouse
        const dx = mouse.x - this.x;
        const dy = mouse.y - this.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < 100) {
          const force = (100 - distance) / 100;
          this.speedX -= (dx / distance) * force * 0.2;
        }

        // Return to natural path
        this.speedX += (0 - this.speedX) * 0.02;

        // Wiggle
        this.speedX += Math.sin(this.life * 0.05) * 0.05;

        this.x += this.speedX;
        this.y += this.speedY;
        this.life--;
        this.size += 0.1;
      }

      draw() {
        if (!ctx) return;
        ctx.save();
        ctx.globalAlpha = (this.life / this.maxLife) * 0.2;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = "#1B1812";
        ctx.fill();
        ctx.restore();
      }
    }

    const particles: Particle[] = [];

    const animate = () => {
      if (!ctx) return;
      ctx.clearRect(0, 0, width, height);

      if (Math.random() < 0.3) {
        particles.push(new Particle());
      }

      for (let i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].draw();
        
        if (particles[i].life <= 0) {
          particles.splice(i, 1);
          i--;
        }
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      canvas.removeEventListener("mouseleave", handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none" />;
}

export default function Hero() {
  const mouseX = useSpring(0, { stiffness: 100, damping: 30 });
  const mouseY = useSpring(0, { stiffness: 100, damping: 30 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 2;
      const y = (e.clientY / window.innerHeight - 0.5) * 2;
      mouseX.set(x);
      mouseY.set(y);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  const rotateX = useTransform(mouseY, [-1, 1], [15, -15]);
  const rotateY = useTransform(mouseX, [-1, 1], [-15, 15]);

  return (
    <section className="relative h-[100svh] min-h-[640px] flex flex-col items-center justify-center text-center overflow-hidden bg-[radial-gradient(circle_at_50%_32%,#FDFCF9_0%,var(--color-ivory)_55%,var(--color-ivory-2)_100%)]">
      {/* Background Glows */}
      <div className="absolute rounded-full blur-[70px] bg-[radial-gradient(circle,rgba(217,190,135,0.55),rgba(217,190,135,0))] w-[60vw] h-[60vw] top-[8%] left-[20%] animate-[drift_14s_ease-in-out_infinite_alternate]" />
      <div className="absolute rounded-full blur-[70px] bg-[radial-gradient(circle,rgba(138,148,130,0.35),rgba(138,148,130,0))] w-[44vw] h-[44vw] top-[38%] left-[52%] animate-[drift2_18s_ease-in-out_infinite_alternate]" />

      <div className="relative z-10 flex items-end justify-center w-[min(400px,80vw)] h-[300px]">
        {/* 3D Tilted Figure */}
        <motion.div
          style={{ rotateX, rotateY, perspective: 1000 }}
          className="relative w-[min(220px,32vw)] z-20"
        >
          <svg viewBox="0 0 200 220" fill="none" className="w-full drop-shadow-2xl">
            <path d="M100 46c14 0 24 11 24 25s-10 25-24 25-24-11-24-25 10-25 24-25z" fill="#1B1812" opacity="0.85"/>
            <path d="M52 200c0-30 10-58 22-70 8-8 16-11 26-11s18 3 26 11c12 12 22 40 22 70" stroke="#1B1812" strokeWidth="1.4" opacity="0.85"/>
            <path d="M40 196c6-20 18-34 30-40M160 196c-6-20-18-34-30-40" stroke="#1B1812" strokeWidth="1.4" opacity="0.7"/>
            <path d="M52 200h96" stroke="#1B1812" strokeWidth="1.4" opacity="0.85"/>
          </svg>
        </motion.div>
        
        {/* Interactive Smoke */}
        <div className="absolute top-[-50px] left-1/2 -translate-x-1/2 w-[200px] h-[300px] z-30">
          <SmokeCanvas />
        </div>
      </div>

      <div className="relative z-10 mt-[34px]">
        <div className="text-[0.8rem] tracking-[0.14em] text-ink-soft mb-[10px] uppercase">
          A quiet practice, held by Vishal Gautam
        </div>
        <h1 className="font-serif text-[clamp(3rem,9vw,6.4rem)] leading-[0.98] text-ink">
          Find your<br />
          <em className="italic text-gold">innerlight</em>
        </h1>
        <p className="max-w-[420px] mx-auto mt-5 text-ink-soft text-[1rem] leading-[1.65]">
          A space for stillness, breath and remembrance — built around the rhythm of the moon and the discipline of sitting still.
        </p>
      </div>

      <div className="absolute bottom-[34px] left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-ink-soft text-[0.75rem] tracking-[0.08em] z-10 uppercase">
        <span>SCROLL</span>
        <div className="w-[1px] h-[34px] bg-ink-soft/40 relative overflow-hidden">
          <div className="absolute top-[-100%] left-0 w-full h-full bg-gold animate-[sc_2.4s_ease-in-out_infinite]" />
        </div>
      </div>
    </section>
  );
}
