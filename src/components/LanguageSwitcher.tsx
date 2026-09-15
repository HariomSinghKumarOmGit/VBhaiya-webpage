"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { Sparkles, Globe } from "lucide-react";

interface LanguageSwitcherProps {
  variant?: "navbar" | "menu" | "minimal";
  className?: string;
}

export default function LanguageSwitcher({
  variant = "navbar",
  className = "",
}: LanguageSwitcherProps) {
  const { language, setLanguage, toggleLanguage } = useLanguage();
  const [toastMsg, setToastMsg] = useState<string | null>(null);

  const handleToggle = () => {
    const nextLang = language === "en" ? "hi" : "en";
    setLanguage(nextLang);

    // Toast notification
    const msg =
      nextLang === "hi"
        ? "ॐ वेबसाइट अब हिन्दी में है"
        : "Website is now in English ✦";
    setToastMsg(msg);
    setTimeout(() => {
      setToastMsg(null);
    }, 2500);
  };

  // ── Menu Modal Variant ──
  if (variant === "menu") {
    return (
      <div className={`flex flex-col items-center gap-2.5 ${className}`}>
        <div className="flex items-center gap-1.5 text-[0.72rem] uppercase tracking-[0.2em] text-gold/80 font-medium">
          <Globe className="w-3.5 h-3.5" />
          <span>{language === "hi" ? "भाषा बदलें" : "Language"}</span>
        </div>
        <button
          onClick={handleToggle}
          className={`relative px-6 py-2.5 rounded-full text-xs sm:text-sm font-semibold tracking-wide transition-all duration-300 cursor-pointer flex items-center gap-2 shadow-lg ${
            language === "en"
              ? "bg-gradient-to-r from-[#B8934A] to-[#D9BE87] text-[#1B1812] shadow-[0_0_20px_rgba(184,147,74,0.55)] border border-amber-300/80"
              : "bg-white/15 text-white border border-white/25 hover:bg-white/25 shadow-md"
          }`}
        >
          <span className="text-sm font-bold">
            {language === "en" ? "ॐ" : "✦"}
          </span>
          <span>{language === "en" ? "हिन्दी में देखें" : "Switch to English"}</span>
        </button>
      </div>
    );
  }

  // ── Single Glowing Navbar Button (Beside 3-dot / menu button) ──
  return (
    <div className={`relative flex items-center ${className}`}>
      {/* Toast popup */}
      <AnimatePresence>
        {toastMsg && (
          <motion.div
            initial={{ opacity: 0, y: -8, scale: 0.94 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.94 }}
            transition={{ duration: 0.22 }}
            className="fixed top-[78px] left-1/2 -translate-x-1/2 px-4 py-2 rounded-full bg-[#1B1812]/95 backdrop-blur-lg border border-gold/50 text-[#F6F3EC] text-xs font-medium tracking-wide shadow-[0_8px_30px_rgba(0,0,0,0.35)] flex items-center gap-2 pointer-events-none z-[300]"
          >
            <Sparkles className="w-3.5 h-3.5 text-amber-400 animate-spin" />
            <span>{toastMsg}</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Single Glowing Button */}
      {language === "en" ? (
        // When in English: Eye-catching glowing 'ॐ हिन्दी' button
        <motion.button
          whileTap={{ scale: 0.92 }}
          whileHover={{ scale: 1.04 }}
          onClick={handleToggle}
          className="relative group px-3 sm:px-3.5 py-1 sm:py-1.5 rounded-full bg-gradient-to-r from-[#D9BE87]/25 via-[#B8934A]/40 to-[#D9BE87]/25 border border-amber-400/80 text-[#1B1812] cursor-pointer shadow-[0_0_14px_rgba(184,147,74,0.55)] hover:shadow-[0_0_22px_rgba(184,147,74,0.85)] transition-all duration-300 flex items-center gap-1 sm:gap-1.5 select-none"
          title="हिन्दी में पढ़ने के लिए क्लिक करें"
          aria-label="Switch to Hindi"
        >
          {/* Pulsing subtle aura ring */}
          <span className="absolute inset-0 rounded-full bg-amber-400/25 animate-ping pointer-events-none opacity-40" />

          <span className="relative z-10 text-amber-700 font-bold text-xs sm:text-sm">
            ॐ
          </span>
          <span className="relative z-10 font-bold text-[0.78rem] sm:text-[0.84rem] tracking-tight text-ink font-devanagari">
            हिन्दी
          </span>
        </motion.button>
      ) : (
        // When in Hindi: Clean 'English' toggle button
        <motion.button
          whileTap={{ scale: 0.92 }}
          whileHover={{ scale: 1.04 }}
          onClick={handleToggle}
          className="relative px-3 sm:px-3.5 py-1 sm:py-1.5 rounded-full bg-white/70 hover:bg-white border border-black/15 hover:border-gold/60 text-ink cursor-pointer shadow-xs transition-all duration-300 flex items-center gap-1 select-none"
          title="Switch to English"
          aria-label="Switch to English"
        >
          <span className="text-gold text-[0.7rem] font-bold">✦</span>
          <span className="font-semibold text-[0.76rem] sm:text-[0.82rem] tracking-tight text-ink">
            English
          </span>
        </motion.button>
      )}
    </div>
  );
}
