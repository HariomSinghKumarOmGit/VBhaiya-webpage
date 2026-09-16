"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import LanguageSwitcher from "./LanguageSwitcher";
import { useLanguage } from "@/context/LanguageContext";

export default function Navigation() {
  const pathname = usePathname();
  const [showNav, setShowNav] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { language } = useLanguage();

  const isHome = pathname === "/";

  // Scroll listener for Home page
  useEffect(() => {
    const handleScroll = () => {
      if (!isHome || window.scrollY > window.innerHeight * 0.55) {
        setShowNav(true);
      } else {
        setShowNav(false);
      }
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname, isHome]);

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

  // Close menu when route changes
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  const navLinks = [
    { label: isHome && language === "hi" ? "मुख्य पृष्ठ" : "Home", sub: "Sanctuary", href: "/" },
    { label: isHome && language === "hi" ? "साधना व अनुष्ठान" : "Sadhanas", sub: "Guided Cycles & Practice", href: "/sadhana" },
    { label: isHome && language === "hi" ? "चंद्र पंचांग" : "Calendar", sub: "Lunar Alignments", href: "/calendar" },
    { label: isHome && language === "hi" ? "पवित्र शास्त्र" : "Scriptures", sub: "Ancient Wisdom & Chants", href: "/scriptures" },
    { label: isHome && language === "hi" ? "आत्म-चिंतन" : "Journal", sub: "Spiritual Essays", href: "/journal" },
    { label: isHome && language === "hi" ? "पावन संग्रह" : "Shop", sub: "Sacred Artifacts", href: "/shop" },
  ];

  return (
    <>
      {isHome ? (
        /* ═══════════════════════════════════════════════════════════════
           1. HOME PAGE NAVBAR (Original luxury ivory floating glass bar)
           ═══════════════════════════════════════════════════════════════ */
        <motion.nav
          initial={{ opacity: 0, y: -20 }}
          animate={{
            opacity: showNav || menuOpen ? 1 : 0,
            y: showNav || menuOpen ? 0 : -20,
            pointerEvents: showNav || menuOpen ? "auto" : "none",
          }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="fixed top-[22px] left-1/2 -translate-x-1/2 flex items-center justify-between gap-4 sm:gap-7 px-4 py-2.5 sm:py-3 w-[min(580px,92vw)] rounded-full bg-ivory/65 backdrop-blur-[20px] backdrop-saturate-150 border border-white/60 shadow-[0_8px_32px_rgba(27,24,18,0.08)] z-[200]"
        >
          {/* Brand Logo with Hindi tag if active */}
          <Link href="/" className="font-serif text-[1.05rem] tracking-[0.01em] group flex items-center gap-1.5 no-underline">
            <span>inner<span className="text-gold">light</span></span>
            {language === "hi" && (
              <span className="text-[0.68rem] tracking-widest text-gold/80 font-normal px-1.5 py-0.5 rounded bg-gold/10 ml-1">
                अंतर्प्रकाश
              </span>
            )}
          </Link>

          {/* Right Actions: Language Switcher + Circular Menu Button */}
          <div className="flex items-center gap-2 sm:gap-3">
            <LanguageSwitcher variant="navbar" />

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="w-9 h-9 sm:w-10 sm:h-10 rounded-full flex flex-col items-center justify-center gap-[4.5px] sm:gap-[5px] bg-ink cursor-pointer border-none transition-transform duration-300 hover:scale-105 active:scale-95 shadow-sm z-[210]"
              aria-label="Toggle Menu"
            >
              <span
                className={`w-4 h-[1.5px] bg-ivory transition-all duration-350 ${
                  menuOpen ? "translate-y-[6px] sm:translate-y-[6.5px] rotate-45" : ""
                }`}
              ></span>
              <span
                className={`w-4 h-[1.5px] bg-ivory transition-all duration-350 ${
                  menuOpen ? "opacity-0" : ""
                }`}
              ></span>
              <span
                className={`w-4 h-[1.5px] bg-ivory transition-all duration-350 ${
                  menuOpen ? "-translate-y-[6px] sm:-translate-y-[6.5px] -rotate-45" : ""
                }`}
              ></span>
            </button>
          </div>
        </motion.nav>
      ) : (
        /* ═══════════════════════════════════════════════════════════════
           2. ALL OTHER PAGES (Elegant Dynamic Island: Just Name & 3 Lines)
           ═══════════════════════════════════════════════════════════════ */
        <motion.nav
          initial={{ opacity: 0, y: -20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="fixed top-4 sm:top-6 left-1/2 -translate-x-1/2 flex items-center justify-between gap-5 sm:gap-7 px-5 py-2.5 sm:px-6 sm:py-2.5 w-auto min-w-[210px] sm:min-w-[240px] rounded-full bg-[#13100C]/90 backdrop-blur-2xl backdrop-saturate-150 border border-white/15 shadow-[0_12px_40px_rgba(0,0,0,0.35),0_0_0_1px_rgba(255,255,255,0.06)] hover:border-gold/40 hover:shadow-[0_12px_40px_rgba(184,147,74,0.18)] transition-all duration-300 z-[200]"
        >
          {/* Brand Logo - Just Name */}
          <Link
            href="/"
            className="font-serif text-[1.1rem] sm:text-[1.18rem] tracking-tight text-[#FAF7F2] select-none hover:opacity-90 transition-opacity no-underline flex items-center"
          >
            <span>
              inner<span className="text-[#D9BE87] font-normal">light</span>
            </span>
          </Link>

          {/* Three Horizontal Lines Hamburger Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="w-8 h-8 rounded-full flex flex-col items-center justify-center gap-[4.5px] cursor-pointer border-none bg-transparent hover:bg-white/10 active:scale-95 transition-all text-[#FAF7F2]"
            aria-label={menuOpen ? "Close Menu" : "Open Menu"}
          >
            <span
              className={`w-4 h-[1.5px] bg-[#FAF7F2] rounded-full transition-all duration-300 ${
                menuOpen ? "translate-y-[6px] rotate-45 bg-[#D9BE87]" : ""
              }`}
            />
            <span
              className={`w-4 h-[1.5px] bg-[#FAF7F2] rounded-full transition-all duration-300 ${
                menuOpen ? "opacity-0 scale-0" : "opacity-100"
              }`}
            />
            <span
              className={`w-4 h-[1.5px] bg-[#FAF7F2] rounded-full transition-all duration-300 ${
                menuOpen ? "-translate-y-[6px] -rotate-45 bg-[#D9BE87]" : ""
              }`}
            />
          </button>
        </motion.nav>
      )}

      {/* ── Fullscreen Overlay Menu ── */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.45, ease: "easeInOut" }}
            onClick={() => setMenuOpen(false)}
            className="fixed inset-0 z-[190] bg-[#14110E]/97 backdrop-blur-2xl flex flex-col items-center justify-center cursor-pointer select-none px-6 py-12"
          >
            {/* Spiritual Ambient Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[520px] h-[520px] bg-gold/5 blur-[130px] rounded-full pointer-events-none" />

            {/* Sacred Mantra Header */}
            <motion.div
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="text-center mb-8 z-10"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="text-gold text-xs sm:text-sm tracking-[0.25em] uppercase font-light">
                {isHome && language === "hi" ? "ॐ असतो मा सद्गमय" : "Inner Sanctuary"}
              </div>
            </motion.div>

            {/* Menu Links */}
            <ul
              className="list-none text-center m-0 p-0 z-10 space-y-2 sm:space-y-4"
              onClick={(e) => e.stopPropagation()}
            >
              {navLinks.map((item, i) => (
                <li key={item.href + item.label} className="overflow-hidden">
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
                      prefetch={true}
                      onClick={() => setMenuOpen(false)}
                      className="group font-serif text-[clamp(1.8rem,5vw,2.8rem)] text-[#FAF7F2] no-underline inline-flex items-baseline gap-3.5 transition-colors duration-300 hover:text-gold-soft cursor-pointer"
                    >
                      <span>{item.label}</span>
                      <span className="text-[0.68rem] tracking-[0.16em] uppercase text-white/30 group-hover:text-gold/70 transition-colors font-sans hidden sm:inline-block">
                        {item.sub}
                      </span>
                    </Link>
                  </motion.div>
                </li>
              ))}
            </ul>

            {/* Language Switcher inside menu footer for Home page */}
            {isHome && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35, duration: 0.5 }}
                className="mt-10 z-10"
                onClick={(e) => e.stopPropagation()}
              >
                <LanguageSwitcher variant="menu" />
              </motion.div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
