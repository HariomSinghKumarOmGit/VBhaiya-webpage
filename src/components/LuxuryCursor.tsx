"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useMotionValue, useSpring, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  opacity: number;
  color: string;
}

export default function LuxuryCursor() {
  const pathname = usePathname();
  const isHome = pathname === "/";

  const [mounted, setMounted] = useState(false);
  const [isFinePointer, setIsFinePointer] = useState(false);
  const [inHero, setInHero] = useState(isHome);
  const [isPointer, setIsPointer] = useState(false);
  const [isDarkBg, setIsDarkBg] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [inCalendar, setInCalendar] = useState(false);
  const [particles, setParticles] = useState<Particle[]>([]);
  const lastParticleTime = useRef(0);
  const particleId = useRef(0);
  const inHeroRef = useRef(isHome);

  // Exact mouse position
  const mouseX = useMotionValue(-200);
  const mouseY = useMotionValue(-200);

  // Smooth lagging springs for the outer aura ring
  const auraSpringX = useSpring(mouseX, { stiffness: 220, damping: 24, mass: 0.5 });
  const auraSpringY = useSpring(mouseY, { stiffness: 220, damping: 24, mass: 0.5 });

  // Fast spring for the central pin dot
  const dotSpringX = useSpring(mouseX, { stiffness: 700, damping: 35, mass: 0.08 });
  const dotSpringY = useSpring(mouseY, { stiffness: 700, damping: 35, mass: 0.08 });

  useEffect(() => {
    inHeroRef.current = isHome;
    setInHero(isHome);
    setInCalendar(pathname.startsWith("/calendar"));
  }, [pathname, isHome]);

  useEffect(() => {
    setMounted(true);
    const hasFinePointer = window.matchMedia("(pointer: fine)").matches;
    setIsFinePointer(hasFinePointer);
    if (!hasFinePointer) return;

    // Fast Intersection Observer or passive scroll for hero section on Home
    const checkHero = () => {
      if (!isHome) {
        inHeroRef.current = false;
        setInHero(false);
        return;
      }
      const heroEl = document.querySelector("section");
      if (heroEl) {
        const rect = heroEl.getBoundingClientRect();
        const isInHero = rect.bottom > 80;
        inHeroRef.current = isInHero;
        setInHero(isInHero);
      }
    };

    checkHero();
    window.addEventListener("scroll", checkHero, { passive: true });
    window.addEventListener("resize", checkHero, { passive: true });

    let rafId: number;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);

      const target = e.target as HTMLElement | null;
      if (target) {
        // Fast interactive check
        const interactive = target.closest(
          "a, button, input, textarea, select, [role='button'], .cursor-pointer, [data-calendar-cell='true']"
        );
        setIsPointer(!!interactive);

        // Fast dark section check
        const darkSection = target.closest(
          ".bg-charcoal, .bg-ink, [data-theme='dark'], [data-dark-bg='true']"
        );
        setIsDarkBg(!!darkSection);

        // Calendar check
        if (!pathname.startsWith("/calendar")) {
          const calendarSection = target.closest(
            "#calendar, [data-calendar-area='true'], .calendar-area"
          );
          setInCalendar(!!calendarSection);
        }
      }

      // Subtle stardust particles trail (throttled)
      const now = performance.now();
      if (!inHeroRef.current && now - lastParticleTime.current > 50) {
        lastParticleTime.current = now;
        particleId.current += 1;

        const isCal = pathname.startsWith("/calendar");
        const newParticle: Particle = {
          id: particleId.current,
          x: e.clientX + (Math.random() - 0.5) * 10,
          y: e.clientY + (Math.random() - 0.5) * 10,
          size: Math.random() * 2 + 1,
          opacity: 0.6,
          color: isCal ? "#C9A75E" : "#B8934A",
        };
        setParticles((prev) => [...prev.slice(-8), newParticle]);
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

    const particleInterval = setInterval(() => {
      setParticles((prev) => {
        if (prev.length === 0) return prev;
        return prev
          .map((p) => ({
            ...p,
            opacity: p.opacity - 0.08,
            size: p.size * 0.92,
          }))
          .filter((p) => p.opacity > 0.05);
      });
    }, 45);

    return () => {
      window.removeEventListener("scroll", checkHero);
      window.removeEventListener("resize", checkHero);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("mouseleave", handleMouseLeave);
      clearInterval(particleInterval);
    };
  }, [isHome, mouseX, mouseY, pathname]);



  if (!mounted || !isFinePointer) return null;

  // Custom cursor is shown outside hero section
  const showCustomCursor = !inHero;

  // Size calculations: cleanly reduced in calendar section
  let auraSize = 34;
  if (inCalendar) {
    auraSize = isClicking ? 20 : isPointer ? 38 : 24;
  } else {
    auraSize = isClicking ? 26 : isPointer ? 50 : 34;
  }

  // Border and Glow styling
  let auraBorder = "1px solid rgba(184, 147, 74, 0.4)";
  let auraBg = "rgba(27, 24, 18, 0.02)";
  let auraShadow = "0 0 10px rgba(184, 147, 74, 0.12)";
  let dotBg = "#B8934A";
  let dotShadow = "0 0 8px 1px rgba(184, 147, 74, 0.6)";

  if (inCalendar) {
    if (isPointer) {
      // Distinct, elegant golden amber glow on hover/selection in calendar
      auraBorder = "1.5px solid rgba(184, 147, 74, 0.85)";
      auraBg = "rgba(184, 147, 74, 0.12)";
      auraShadow = "0 0 18px 3px rgba(184, 147, 74, 0.45), inset 0 0 8px rgba(184, 147, 74, 0.2)";
      dotBg = "#9E7B35";
      dotShadow = "0 0 10px 2px rgba(184, 147, 74, 0.8)";
    } else {
      // Subtle smaller ring when moving around in calendar
      auraBorder = "1px solid rgba(184, 147, 74, 0.35)";
      auraBg = "rgba(184, 147, 74, 0.03)";
      auraShadow = "0 0 8px rgba(184, 147, 74, 0.15)";
      dotBg = "#B8934A";
      dotShadow = "0 0 6px 1px rgba(184, 147, 74, 0.5)";
    }
  } else if (isPointer) {
    auraBorder = isDarkBg
      ? "1.5px solid rgba(217, 190, 135, 0.85)"
      : "1.5px solid rgba(184, 147, 74, 0.8)";
    auraBg = isDarkBg
      ? "rgba(217, 190, 135, 0.15)"
      : "rgba(184, 147, 74, 0.12)";
    auraShadow = "0 0 20px 2px rgba(184, 147, 74, 0.3)";
    dotBg = isDarkBg ? "#F6F3EC" : "#B8934A";
    dotShadow = isDarkBg
      ? "0 0 10px 2px rgba(246, 243, 236, 0.7)"
      : "0 0 8px 1px rgba(184, 147, 74, 0.6)";
  } else if (isDarkBg) {
    auraBorder = "1px solid rgba(246, 243, 236, 0.3)";
    auraBg = "rgba(246, 243, 236, 0.03)";
    auraShadow = "0 0 10px rgba(246, 243, 236, 0.15)";
    dotBg = "#F6F3EC";
    dotShadow = "0 0 8px 1px rgba(246, 243, 236, 0.7)";
  }

  return (
    <>
      <AnimatePresence>
        {showCustomCursor && (
          <motion.div
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="fixed inset-0 pointer-events-none z-[99999] overflow-hidden"
          >
            {/* Subtle Stardust Trail */}
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
                  boxShadow: `0 0 6px 1px ${p.color}70`,
                  transform: "translate(-50%, -50%)",
                }}
              />
            ))}

            {/* Outer Ring */}
            <motion.div
              className="absolute rounded-full pointer-events-none flex items-center justify-center"
              style={{
                x: auraSpringX,
                y: auraSpringY,
                translateX: "-50%",
                translateY: "-50%",
              }}
              animate={{
                width: auraSize,
                height: auraSize,
                backgroundColor: auraBg,
                border: auraBorder,
                boxShadow: auraShadow,
              }}
              transition={{
                duration: 0.18,
                ease: "easeOut",
              }}
            />

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
                width: isClicking ? 7 : inCalendar ? (isPointer ? 4 : 3.5) : (isPointer ? 4 : 5),
                height: isClicking ? 7 : inCalendar ? (isPointer ? 4 : 3.5) : (isPointer ? 4 : 5),
                backgroundColor: dotBg,
                boxShadow: dotShadow,
              }}
              transition={{
                duration: 0.1,
                ease: "easeOut",
              }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}


