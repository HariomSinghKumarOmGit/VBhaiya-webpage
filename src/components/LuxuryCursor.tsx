"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useMotionValue, useSpring, AnimatePresence } from "framer-motion";

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  opacity: number;
  color: string;
}

export default function LuxuryCursor() {
  const [mounted, setMounted] = useState(false);
  const [isFinePointer, setIsFinePointer] = useState(false);
  const [inHero, setInHero] = useState(true);
  const [isPointer, setIsPointer] = useState(false);
  const [isDarkBg, setIsDarkBg] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [particles, setParticles] = useState<Particle[]>([]);
  const lastParticleTime = useRef(0);
  const particleId = useRef(0);

  // Exact mouse position
  const mouseX = useMotionValue(-200);
  const mouseY = useMotionValue(-200);

  // Smooth lagging springs for the outer aura ring
  const auraSpringX = useSpring(mouseX, { stiffness: 180, damping: 24, mass: 0.6 });
  const auraSpringY = useSpring(mouseY, { stiffness: 180, damping: 24, mass: 0.6 });

  // Faster spring for the central pin dot
  const dotSpringX = useSpring(mouseX, { stiffness: 600, damping: 36, mass: 0.1 });
  const dotSpringY = useSpring(mouseY, { stiffness: 600, damping: 36, mass: 0.1 });

  useEffect(() => {
    setMounted(true);
    const hasFinePointer = window.matchMedia("(pointer: fine)").matches;
    setIsFinePointer(hasFinePointer);
    if (!hasFinePointer) return;

    const checkHeroSection = () => {
      const heroEl = document.querySelector("section");
      if (heroEl) {
        const rect = heroEl.getBoundingClientRect();
        // Check if user is still inside hero section viewport
        if (rect.bottom > 80) {
          setInHero(true);
        } else {
          setInHero(false);
        }
      }
    };

    checkHeroSection();
    window.addEventListener("scroll", checkHeroSection, { passive: true });
    window.addEventListener("resize", checkHeroSection);

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);

      checkHeroSection();

      // Check if cursor is over interactive elements (links, buttons, inputs)
      const target = e.target as HTMLElement | null;
      if (target) {
        const interactive = target.closest("a, button, input, textarea, select, [role='button'], .cursor-pointer");
        setIsPointer(!!interactive);

        // Detect if hovering over a dark section (like #calendar or dark cards)
        const darkSection = target.closest("#calendar, .bg-charcoal, .bg-ink, [data-theme='dark']");
        setIsDarkBg(!!darkSection);
      }

      // Spawn subtle spiritual stardust particles when moving in content sections
      const now = performance.now();
      if (!inHero && now - lastParticleTime.current > 38) {
        lastParticleTime.current = now;
        particleId.current += 1;
        const newParticle: Particle = {
          id: particleId.current,
          x: e.clientX + (Math.random() - 0.5) * 12,
          y: e.clientY + (Math.random() - 0.5) * 12,
          size: Math.random() * 2.8 + 1.2,
          opacity: 0.75,
          color: Math.random() > 0.4 ? "#D9BE87" : "#B8934A",
        };
        setParticles((prev) => [...prev.slice(-14), newParticle]);
      }
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);
    const handleMouseLeave = () => {
      mouseX.set(-200);
      mouseY.set(-200);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    document.addEventListener("mouseleave", handleMouseLeave);

    // Fade out particles tick
    const particleInterval = setInterval(() => {
      setParticles((prev) =>
        prev
          .map((p) => ({ ...p, opacity: p.opacity - 0.045, size: p.size * 0.94 }))
          .filter((p) => p.opacity > 0.05)
      );
    }, 32);

    return () => {
      window.removeEventListener("scroll", checkHeroSection);
      window.removeEventListener("resize", checkHeroSection);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("mouseleave", handleMouseLeave);
      clearInterval(particleInterval);
    };
  }, [inHero, mouseX, mouseY]);

  if (!mounted || !isFinePointer) return null;

  // When inside hero section, the hero has its own custom fluid x-ray cursor
  const showCustomCursor = !inHero;

  return (
    <>
      <AnimatePresence>
        {showCustomCursor && (
          <motion.div
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="fixed inset-0 pointer-events-none z-[99999] overflow-hidden"
          >
            {/* Spiritual Stardust Trail */}
            {particles.map((p) => (
              <motion.div
                key={p.id}
                className="absolute rounded-full pointer-events-none"
                style={{
                  left: p.x,
                  top: p.y,
                  width: p.size,
                  height: p.size,
                  backgroundColor: p.color,
                  opacity: p.opacity,
                  boxShadow: `0 0 8px 1px ${p.color}80`,
                  transform: "translate(-50%, -50%)",
                }}
              />
            ))}

            {/* Outer Expanding Halo / Magnetic Aura */}
            <motion.div
              className="absolute rounded-full pointer-events-none flex items-center justify-center"
              style={{
                x: auraSpringX,
                y: auraSpringY,
                translateX: "-50%",
                translateY: "-50%",
              }}
              animate={{
                width: isPointer ? 56 : isClicking ? 32 : 38,
                height: isPointer ? 56 : isClicking ? 32 : 38,
                backgroundColor: isPointer
                  ? isDarkBg
                    ? "rgba(217, 190, 135, 0.18)"
                    : "rgba(184, 147, 74, 0.15)"
                  : isDarkBg
                  ? "rgba(246, 243, 236, 0.04)"
                  : "rgba(27, 24, 18, 0.03)",
                borderColor: isPointer
                  ? isDarkBg
                    ? "rgba(217, 190, 135, 0.9)"
                    : "rgba(184, 147, 74, 0.85)"
                  : isDarkBg
                  ? "rgba(246, 243, 236, 0.35)"
                  : "rgba(184, 147, 74, 0.45)",
                borderWidth: isPointer ? "1.5px" : "1px",
                borderStyle: "solid",
                boxShadow: isPointer
                  ? "0 0 24px 3px rgba(184, 147, 74, 0.35), inset 0 0 12px rgba(184, 147, 74, 0.2)"
                  : "0 0 14px rgba(184, 147, 74, 0.15)",
                backdropFilter: isPointer ? "blur(1.5px)" : "none",
              }}
              transition={{
                duration: 0.25,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              {/* Pulse ripple ring on hover */}
              {isPointer && (
                <motion.div
                  className="w-full h-full rounded-full border border-gold-soft/50 absolute"
                  animate={{ scale: [1, 1.45, 1.6], opacity: [0.6, 0.2, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "easeOut" }}
                />
              )}
            </motion.div>

            {/* Central Precision Gold Dot */}
            <motion.div
              className="absolute rounded-full pointer-events-none"
              style={{
                x: dotSpringX,
                y: dotSpringY,
                translateX: "-50%",
                translateY: "-50%",
              }}
              animate={{
                width: isClicking ? 9 : isPointer ? 4 : 6,
                height: isClicking ? 9 : isPointer ? 4 : 6,
                backgroundColor: isDarkBg ? "#F6F3EC" : "#B8934A",
                boxShadow: isDarkBg
                  ? "0 0 10px 2px rgba(246, 243, 236, 0.7)"
                  : "0 0 10px 2px rgba(184, 147, 74, 0.6)",
              }}
              transition={{
                duration: 0.15,
                ease: "easeOut",
              }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
