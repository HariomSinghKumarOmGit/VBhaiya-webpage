"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navigation() {
  const pathname = usePathname();
  const [showNav, setShowNav] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (pathname !== "/" || window.scrollY > window.innerHeight * 0.55) {
        setShowNav(true);
      } else {
        setShowNav(false);
      }
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  // Close menu on ESC key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMenuOpen(false);
      }
    };
    if (menuOpen) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [menuOpen]);

  return (
    <>
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{
          opacity: showNav || menuOpen ? 1 : 0,
          y: showNav || menuOpen ? 0 : -20,
          pointerEvents: showNav || menuOpen ? "auto" : "none",
        }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="fixed top-[22px] left-1/2 -translate-x-1/2 flex items-center justify-between gap-7 px-4 py-3 w-[min(560px,88vw)] rounded-full bg-ivory/55 backdrop-blur-[18px] backdrop-saturate-140 border border-white/50 shadow-[0_8px_32px_rgba(27,24,18,0.08)] z-[200]"
      >
        <Link href="/" className="font-serif text-[1.05rem] tracking-[0.01em]">
          inner<span className="text-gold">light</span>
        </Link>
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="w-10 h-10 rounded-full flex flex-col items-center justify-center gap-[5px] bg-ink cursor-pointer border-none transition-transform duration-300 hover:scale-105 z-[210]"
          aria-label="Menu"
        >
          <span
            className={`w-4 h-[1.5px] bg-ivory transition-all duration-350 ${
              menuOpen ? "translate-y-[6.5px] rotate-45" : ""
            }`}
          ></span>
          <span
            className={`w-4 h-[1.5px] bg-ivory transition-all duration-350 ${
              menuOpen ? "opacity-0" : ""
            }`}
          ></span>
          <span
            className={`w-4 h-[1.5px] bg-ivory transition-all duration-350 ${
              menuOpen ? "-translate-y-[6.5px] -rotate-45" : ""
            }`}
          ></span>
        </button>
      </motion.nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            onClick={() => setMenuOpen(false)}
            className="fixed inset-0 z-[190] bg-charcoal/95 backdrop-blur-md flex items-center justify-center cursor-pointer select-none"
          >
            <ul
              className="list-none text-center m-0 p-0"
              onClick={(e) => e.stopPropagation()}
            >
              {[
                { label: "Home", href: "/" },
                { label: "Scriptures", href: "/scriptures" },
                { label: "Calendar", href: "/calendar" },
                { label: "Programs", href: "/programs" },
                { label: "Journal", href: "/journal" },
                { label: "Shop", href: "/shop" },
              ].map((item, i) => (
                <li key={item.label} className="my-[18px] overflow-hidden">
                  <motion.div
                    initial={{ y: "110%" }}
                    animate={{ y: 0 }}
                    exit={{ y: "110%" }}
                    transition={{
                      duration: 0.5,
                      ease: [0.22, 1, 0.36, 1],
                      delay: i * 0.05,
                    }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setMenuOpen(false)}
                      className="font-serif text-[clamp(2rem,6vw,3.2rem)] text-ivory-2 no-underline inline-block transition-colors duration-300 hover:text-gold-soft cursor-pointer"
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
