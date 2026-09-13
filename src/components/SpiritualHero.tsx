"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useMotionTemplate } from "framer-motion";

// ==================================================
// WATERFALL MIST & ROLLING SMOKE CANVAS
// Multi-layered simulation of rolling waterfall mist, 
// churning fog billows, and rising vapor spray
// ==================================================
function WaterfallMist() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let raf: number;
    let width = 0;
    let height = 0;
    let dpr = 1;

    // Mouse wind interaction
    const mouse = { x: -1000, y: -1000, vx: 0, vy: 0, lastX: 0, lastY: 0 };

    const resize = () => {
      if (!canvas.parentElement) return;
      const rect = canvas.parentElement.getBoundingClientRect();
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = rect.width;
      height = rect.height;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    window.addEventListener("resize", resize);

    const onMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const currentX = e.clientX - rect.left;
      const currentY = e.clientY - rect.top;
      mouse.vx = (currentX - mouse.lastX) * 0.25;
      mouse.vy = (currentY - mouse.lastY) * 0.25;
      mouse.x = currentX;
      mouse.y = currentY;
      mouse.lastX = currentX;
      mouse.lastY = currentY;
    };

    const onMouseLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
      mouse.vx = 0;
      mouse.vy = 0;
    };

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseleave", onMouseLeave);

    // 1. BILLOW CLOUDS (Rolling, expanding vapor clouds)
    type Billow = {
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      growth: number;
      rotation: number;
      vRot: number;
      life: number;
      maxLife: number;
      baseOpacity: number;
      warmth: number; // 0 = cool mist, 1 = warm gold/ivory mist
    };

    // 2. FLOOR FOG (Low heavy creeping mist layer)
    type FloorFog = {
      x: number;
      y: number;
      vx: number;
      radiusX: number;
      radiusY: number;
      life: number;
      maxLife: number;
      baseOpacity: number;
      phase: number;
    };

    // 3. SPRAY PARTICLES (Rising waterfall droplet motes)
    type Spray = {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      life: number;
      maxLife: number;
      opacity: number;
      drift: number;
    };

    const billows: Billow[] = [];
    const floorFogs: FloorFog[] = [];
    const sprays: Spray[] = [];

    const createBillow = (startX?: number, startY?: number): Billow => {
      const flowDirection = Math.random() < 0.65 ? 1 : -1;
      const maxLife = 240 + Math.random() * 200;
      return {
        x: startX !== undefined ? startX : Math.random() * (width + 200) - 100,
        y: startY !== undefined ? startY : height - Math.random() * (height * 0.45),
        vx: (0.3 + Math.random() * 0.5) * flowDirection + (Math.random() - 0.5) * 0.2,
        vy: -(0.15 + Math.random() * 0.35),
        radius: 50 + Math.random() * 70,
        growth: 0.18 + Math.random() * 0.24,
        rotation: Math.random() * Math.PI * 2,
        vRot: (Math.random() - 0.5) * 0.006,
        life: 0,
        maxLife,
        baseOpacity: 0.16 + Math.random() * 0.14,
        warmth: Math.random(),
      };
    };

    const createFloorFog = (startX?: number): FloorFog => {
      const maxLife = 320 + Math.random() * 280;
      return {
        x: startX !== undefined ? startX : Math.random() * (width + 300) - 150,
        y: height - Math.random() * (height * 0.25),
        vx: 0.35 + Math.random() * 0.55,
        radiusX: 140 + Math.random() * 150,
        radiusY: 40 + Math.random() * 50,
        life: 0,
        maxLife,
        baseOpacity: 0.2 + Math.random() * 0.12,
        phase: Math.random() * Math.PI * 2,
      };
    };

    const createSpray = (startX?: number, startY?: number): Spray => {
      return {
        x: startX !== undefined ? startX : Math.random() * width,
        y: startY !== undefined ? startY : height - Math.random() * 45,
        vx: (Math.random() - 0.5) * 0.8 + 0.35,
        vy: -(0.6 + Math.random() * 1.5),
        size: 1.2 + Math.random() * 2.5,
        life: 0,
        maxLife: 90 + Math.random() * 75,
        opacity: 0.25 + Math.random() * 0.35,
        drift: Math.random() * 0.04,
      };
    };

    // Pre-populate particles so mist is actively rolling immediately
    for (let i = 0; i < 55; i++) {
      const b = createBillow();
      b.life = Math.floor(Math.random() * (b.maxLife * 0.85));
      b.x += b.vx * b.life;
      b.y += b.vy * b.life;
      b.radius += b.growth * b.life;
      billows.push(b);
    }

    for (let i = 0; i < 28; i++) {
      const f = createFloorFog();
      f.life = Math.floor(Math.random() * (f.maxLife * 0.85));
      f.x += f.vx * f.life;
      floorFogs.push(f);
    }

    for (let i = 0; i < 45; i++) {
      const s = createSpray();
      s.life = Math.floor(Math.random() * (s.maxLife * 0.85));
      s.x += s.vx * s.life;
      s.y += s.vy * s.life;
      sprays.push(s);
    }

    let time = 0;

    const render = () => {
      time += 0.016;
      ctx.clearRect(0, 0, width, height);

      // Dampen mouse velocity
      mouse.vx *= 0.92;
      mouse.vy *= 0.92;

      // ==========================================
      // 1. UPDATE & DRAW FLOOR FOG (Lowest Dense Layer)
      // ==========================================
      if (floorFogs.length < 32 && Math.random() < 0.45) {
        floorFogs.push(createFloorFog(-150));
      }

      for (let i = floorFogs.length - 1; i >= 0; i--) {
        const f = floorFogs[i];
        f.life++;

        const progress = f.life / f.maxLife;
        let alpha = f.baseOpacity;
        if (progress < 0.2) {
          alpha = (progress / 0.2) * f.baseOpacity;
        } else if (progress > 0.75) {
          alpha = ((1 - progress) / 0.25) * f.baseOpacity;
        }

        // Horizontal flow with undulating vertical breath
        f.x += f.vx;
        const undulatingY = f.y + Math.sin(time * 0.8 + f.phase) * 6;

        if (f.life >= f.maxLife || f.x > width + f.radiusX + 100) {
          floorFogs.splice(i, 1);
          continue;
        }

        ctx.save();
        ctx.translate(f.x, undulatingY);
        const grad = ctx.createRadialGradient(0, 0, 0, 0, 0, f.radiusX);
        grad.addColorStop(0, `rgba(242, 236, 224, ${alpha})`);
        grad.addColorStop(0.4, `rgba(225, 215, 195, ${alpha * 0.65})`);
        grad.addColorStop(0.75, `rgba(200, 190, 175, ${alpha * 0.25})`);
        grad.addColorStop(1, "rgba(180, 170, 160, 0)");

        ctx.beginPath();
        ctx.ellipse(0, 0, f.radiusX, f.radiusY, 0, 0, Math.PI * 2);
        ctx.fillStyle = grad;
        ctx.fill();
        ctx.restore();
      }

      // ==========================================
      // 2. UPDATE & DRAW BILLOW CLOUDS (Rolling Mist)
      // ==========================================
      if (billows.length < 65 && Math.random() < 0.5) {
        billows.push(createBillow());
      }

      for (let i = billows.length - 1; i >= 0; i--) {
        const b = billows[i];
        b.life++;

        const progress = b.life / b.maxLife;
        let alpha = b.baseOpacity;
        if (progress < 0.22) {
          alpha = (progress / 0.22) * b.baseOpacity;
        } else if (progress > 0.68) {
          alpha = ((1 - progress) / 0.32) * b.baseOpacity;
        }

        // Micro turbulence & wave drift
        const wave = Math.sin(b.life * 0.02 + b.rotation) * 0.28;
        b.x += b.vx + wave;
        b.y += b.vy;
        b.radius += b.growth;
        b.rotation += b.vRot;

        // Mouse gentle wind interaction
        const dx = b.x - mouse.x;
        const dy = b.y - mouse.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 180 && dist > 0) {
          const force = (180 - dist) / 180;
          b.x += (dx / dist) * force * 1.5 + mouse.vx * 0.2;
          b.y += (dy / dist) * force * 0.8 + mouse.vy * 0.2;
        }

        if (b.life >= b.maxLife || b.y < -b.radius || b.x < -b.radius * 2 || b.x > width + b.radius * 2) {
          billows.splice(i, 1);
          continue;
        }

        ctx.save();
        ctx.translate(b.x, b.y);
        ctx.rotate(b.rotation);

        const grad = ctx.createRadialGradient(0, 0, 0, 0, 0, b.radius);
        if (b.warmth > 0.6) {
          // Subtle warm golden ambient mist tone
          grad.addColorStop(0, `rgba(246, 238, 220, ${alpha * 1.1})`);
          grad.addColorStop(0.35, `rgba(235, 218, 190, ${alpha * 0.7})`);
          grad.addColorStop(0.7, `rgba(215, 195, 165, ${alpha * 0.25})`);
        } else {
          // Crisp ethereal white waterfall vapor tone
          grad.addColorStop(0, `rgba(250, 248, 242, ${alpha * 1.05})`);
          grad.addColorStop(0.35, `rgba(230, 226, 218, ${alpha * 0.65})`);
          grad.addColorStop(0.7, `rgba(205, 200, 190, ${alpha * 0.2})`);
        }
        grad.addColorStop(1, "rgba(180, 175, 165, 0)");

        ctx.beginPath();
        ctx.arc(0, 0, b.radius, 0, Math.PI * 2);
        ctx.fillStyle = grad;
        ctx.fill();
        ctx.restore();
      }

      // ==========================================
      // 3. UPDATE & DRAW SPRAY PARTICLES (Fine Droplets)
      // ==========================================
      if (sprays.length < 55 && Math.random() * 0.7) {
        sprays.push(createSpray());
      }

      for (let i = sprays.length - 1; i >= 0; i--) {
        const s = sprays[i];
        s.life++;

        const progress = s.life / s.maxLife;
        let alpha = s.opacity;
        if (progress < 0.15) {
          alpha = (progress / 0.15) * s.opacity;
        } else if (progress > 0.6) {
          alpha = ((1 - progress) / 0.4) * s.opacity;
        }

        s.x += s.vx + Math.sin(s.life * s.drift) * 0.35;
        s.y += s.vy;

        if (s.life >= s.maxLife || s.y < 0) {
          sprays.splice(i, 1);
          continue;
        }

        ctx.save();
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 250, 240, ${alpha})`;
        ctx.shadowColor = "rgba(255, 245, 220, 0.6)";
        ctx.shadowBlur = 6;
        ctx.fill();
        ctx.restore();
      }

      raf = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseleave", onMouseLeave);
    };
  }, []);

  return (
    <div className="absolute bottom-0 left-0 right-0 w-full h-[58%] pointer-events-none z-[12] overflow-hidden">
      {/* Waterfall Mist Canvas */}
      <canvas
        ref={canvasRef}
        className="w-full h-full"
        style={{ mixBlendMode: "screen" }}
      />
      {/* Subtle soft blur backdrop to give mist extra ethereal depth */}
      <div 
        className="absolute inset-x-0 bottom-0 h-3/5 pointer-events-none"
        style={{
          background: "linear-gradient(to top, rgba(13,11,8,0.7) 0%, rgba(13,11,8,0.2) 60%, transparent 100%)",
        }}
      />
    </div>
  );
}

export default function SpiritualHero() {
  const imgRef = useRef<HTMLImageElement>(null);
  const [isHoveringImage, setIsHoveringImage] = useState(false);
  
  // Image-local tracking for the X-Ray mask
  const mouseX = useMotionValue(-1000);
  const mouseY = useMotionValue(-1000);
  const springX = useSpring(mouseX, { stiffness: 35, damping: 16, mass: 0.8 });
  const springY = useSpring(mouseY, { stiffness: 35, damping: 16, mass: 0.8 });
  
  // Global tracking for the Fluid Custom Cursor Blob
  const cursorX = useMotionValue(-1000);
  const cursorY = useMotionValue(-1000);
  const cursorSpringX = useSpring(cursorX, { stiffness: 35, damping: 16, mass: 0.8 });
  const cursorSpringY = useSpring(cursorY, { stiffness: 35, damping: 16, mass: 0.8 });
  
  // Round circular lens mask
  const holeMask = useMotionTemplate`radial-gradient(circle at ${springX}px ${springY}px, transparent 0%, rgba(0,0,0,0.3) 35px, black 70px)`;

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // 1. Update global cursor
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);

      // 2. Update image-local X-Ray hole
      if (!imgRef.current) return;
      const rect = imgRef.current.getBoundingClientRect();
      mouseX.set(e.clientX - rect.left);
      mouseY.set(e.clientY - rect.top);
    };
    
    const handleMouseLeave = () => {
      // Move both hole and cursor far away when mouse leaves the window
      mouseX.set(-1000);
      mouseY.set(-1000);
      cursorX.set(-1000);
      cursorY.set(-1000);
      setIsHoveringImage(false);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [mouseX, mouseY]);

  return (
    <section className="relative h-[100svh] min-h-[620px] w-full overflow-hidden flex items-center justify-center bg-black cursor-none">
      {/* 
         SHARED MEDIA WRAPPER
      */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 min-w-full min-h-full pointer-events-none z-[1]"
        style={{ aspectRatio: "16/9" }}
      >
        {/* Background Video */}
        <video
          src="/bg video.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* 
            WRAPPER: Smooth circular/linear bottom fade 
            Fades the bottom edge of the image smoothly into the background.
        */}
        <div 
          className="absolute inset-0 z-[5]"
          style={{
            WebkitMaskImage: "linear-gradient(to bottom, black 0%, black 80%, transparent 100%)",
            maskImage: "linear-gradient(to bottom, black 0%, black 80%, transparent 100%)"
          }}
        >
          {/* 
              IMAGE: Interactive X-Ray Hover Mask
              Follows the mouse to create an opacity 0 hole.
          */}
          <motion.img
            ref={imgRef}
            src="/top layer.png"
            alt="Top Layer Foreground"
            className="absolute left-1/2 -translate-x-1/2 max-w-none pointer-events-auto"
            onMouseEnter={() => setIsHoveringImage(true)}
            onMouseLeave={() => setIsHoveringImage(false)}
            style={{
              bottom: "50.9%",   
              width: "36.7%",    
              marginLeft: "-0.2%",
              // Applies the interactive hole mask from framer-motion
              WebkitMaskImage: holeMask,
              maskImage: holeMask,
            }}
          />
        </div>
      </div>

      {/* Moving Waterfall Mist & Smoke at bottom */}
      <WaterfallMist />

      {/* Hero Text Overlay — Positioned at Bottom Middle */}
      <div className="absolute bottom-[90px] left-1/2 -translate-x-1/2 z-[25] text-center w-full max-w-2xl px-4 pointer-events-none flex flex-col items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="text-[0.78rem] md:text-[0.85rem] tracking-[0.18em] mb-2 uppercase font-medium"
          style={{
            color: "rgba(240, 225, 195, 0.95)",
            textShadow: "0 2px 10px rgba(0,0,0,0.85), 0 1px 4px rgba(0,0,0,0.9)",
          }}
        >
          A quiet practice, held by Vishal Gautam
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.6, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="font-serif leading-[1.0]"
          style={{
            fontSize: "clamp(2.2rem, 5.5vw, 4.4rem)",
            color: "#F6F3EC",
            textShadow: "0 4px 28px rgba(0,0,0,0.95), 0 2px 8px rgba(0,0,0,0.9)",
          }}
        >
          Find your{" "}
          <em style={{ fontStyle: "italic", color: "#D4AF37" }}>innerlight</em>
        </motion.h1>
      </div>

      {/* Bottom fade into next section — matches ThePractice bg exactly */}
      <div
        className="absolute bottom-0 left-0 right-0 z-[18] pointer-events-none"
        style={{
          height: "28%",
          background: "linear-gradient(to bottom, transparent 0%, rgba(13,11,8,0.65) 50%, #0d0b08 100%)",
        }}
      />

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 1 }}
        className="absolute bottom-[24px] left-1/2 -translate-x-1/2 z-[30] flex flex-col items-center gap-1.5 pointer-events-none"
        style={{ color: "rgba(217,190,135,0.85)", fontSize: "0.68rem", letterSpacing: "0.1em" }}
      >
        <span>SCROLL</span>
        <div style={{ width: 1, height: 26, background: "rgba(184,147,74,0.4)", position: "relative", overflow: "hidden" }}>
          <motion.div
            animate={{ y: ["-100%", "100%"] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            style={{ position: "absolute", inset: 0, background: "#B8934A" }}
          />
        </div>
      </motion.div>
      {/* Fluid Borderless Custom Cursor (Glows golden on hover over image) */}
      <motion.div
        className="fixed top-0 left-0 z-[100] pointer-events-none"
        style={{
          width: 140,
          height: 140,
          borderRadius: "50%",
          background: isHoveringImage 
            ? "radial-gradient(circle at center, rgba(184,147,74,0.45) 0%, rgba(184,147,74,0.18) 50%, transparent 100%)" // Golden glow
            : "radial-gradient(circle at center, rgba(255,255,255,0.22) 0%, rgba(255,255,255,0.08) 50%, transparent 100%)", // Silver/white comet
          boxShadow: isHoveringImage 
            ? "0 0 35px 12px rgba(184,147,74,0.2)"
            : "0 0 30px 10px rgba(255,255,255,0.05)",
          transition: "background 0.35s ease, box-shadow 0.35s ease",
          x: cursorSpringX,
          y: cursorSpringY,
          translateX: "-50%",
          translateY: "-50%",
        }}
      />
    </section>
  );
}
