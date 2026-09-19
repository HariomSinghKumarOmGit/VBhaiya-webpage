"use client";

import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";

/* ─────────────────────────────────────────────
   PRACTICE CARD DATA (All 9 Core Cards)
   ───────────────────────────────────────────── */
export interface PracticeCardData {
  id: number;
  tag: string;
  title: string;
  icon: string;
  accent: string;
}

const CARDS: PracticeCardData[] = [
  {
    id: 1,
    tag: "Practice",
    title: "Jaap",
    icon: "🕉",
    accent: "#B8934A",
  },
  {
    id: 2,
    tag: "Practice",
    title: "Dhyan",
    icon: "◯",
    accent: "#D9BE87",
  },
  {
    id: 3,
    tag: "Disciple",
    title: "Karim Bhai",
    icon: "♪",
    accent: "#8A9482",
  },
  {
    id: 4,
    tag: "Disciple & Founder",
    title: "Vishal Gautam",
    icon: "✦",
    accent: "#B8934A",
  },
  {
    id: 5,
    tag: "Ritual",
    title: "Purnima Sit",
    icon: "○",
    accent: "#D9BE87",
  },
  {
    id: 6,
    tag: "Ritual",
    title: "Amavasya",
    icon: "●",
    accent: "#8A9482",
  },
  {
    id: 7,
    tag: "Practice",
    title: "Pranayama",
    icon: "∞",
    accent: "#B8934A",
  },
  {
    id: 8,
    tag: "Teaching",
    title: "Satsang",
    icon: "◈",
    accent: "#D9BE87",
  },
  {
    id: 9,
    tag: "Teaching",
    title: "21-Day Sadhana",
    icon: "◇",
    accent: "#B8934A",
  },
];

/* ─────────────────────────────────────────────
   SINGLE PRACTICE CARD COMPONENT
   ───────────────────────────────────────────── */
function PracticeCard({ card }: { card: PracticeCardData }) {
  const [isHovered, setIsHovered] = useState(false);
  const { language } = useLanguage();

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative rounded-[22px] overflow-hidden flex-shrink-0 select-none transition-all duration-300 transform hover:-translate-y-1.5 group"
      style={{
        width: 320,
        height: 160,
        background: "rgba(22, 19, 15, 0.85)",
        backdropFilter: "blur(12px)",
        border: isHovered
          ? `1px solid ${card.accent}`
          : "1px solid rgba(255, 255, 255, 0.14)",
        boxShadow: isHovered
          ? `0 0 30px ${card.accent}33, 0 14px 40px rgba(0,0,0,0.6)`
          : "0 4px 24px rgba(0,0,0,0.4)",
      }}
    >
      {/* Ambient background glow on hover */}
      <div
        className="absolute -top-12 -right-12 w-32 h-32 rounded-full blur-2xl opacity-0 group-hover:opacity-25 transition-opacity duration-700 pointer-events-none"
        style={{ background: card.accent }}
      />

      <div className="p-[22px_24px] h-full flex flex-col justify-between relative z-10">
        <div>
          <div className="flex items-center justify-between mb-2">
            <span
              className="text-[0.68rem] tracking-[0.16em] uppercase font-medium"
              style={{ color: card.accent }}
            >
              {card.tag}
            </span>
            <span
              className="text-[1.3rem] opacity-40 group-hover:opacity-80 transition-opacity"
              style={{ color: card.accent }}
            >
              {card.icon}
            </span>
          </div>

          <h4
            className="font-serif text-[1.55rem] md:text-[1.65rem] leading-[1.15]"
            style={{ color: "#F6F3EC" }}
          >
            {card.title}
          </h4>
        </div>

        {/* Card Footer / Status */}
        <div className="flex items-center gap-2 pt-2.5 border-t border-white/5">
          <span
            className="w-1.5 h-1.5 rounded-full animate-pulse"
            style={{ backgroundColor: card.accent }}
          />
          <span
            className="text-[0.68rem] tracking-[0.1em] uppercase font-medium"
            style={{ color: "rgba(246,243,236,0.5)" }}
          >
            {language === "hi" ? "विवरण जल्द अपडेट होगा" : "Updating soon"}
          </span>
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   MAIN COMPONENT: HORIZONTAL LOOPING CAROUSEL
   ───────────────────────────────────────────── */
export default function ThePractice() {
  const { language } = useLanguage();

  // Duplicate cards list for infinite seamless looping
  const duplicatedCards = [...CARDS, ...CARDS];

  return (
    <section
      id="practice"
      className="relative bg-[#0d0b08] py-24 md:py-32 overflow-hidden"
    >
      {/* Ambient background glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 50% 50%, rgba(26,22,16,0.85) 0%, #0d0b08 100%)",
        }}
      />

      {/* ── SECTION HEADER ── */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center mb-14 md:mb-18">
        <div
          className="text-[0.78rem] tracking-[0.18em] uppercase mb-3 font-medium"
          style={{ color: "#B8934A" }}
        >
          {language === "hi" ? "दैनिक साधना पद्धति" : "The practice"}
        </div>
        <h2
          className="font-serif leading-[1.12]"
          style={{
            fontSize: "clamp(2.2rem, 5.2vw, 3.8rem)",
            color: "#F6F3EC",
            textShadow: "0 4px 28px rgba(0,0,0,0.9)",
          }}
        >
          {language === "hi" ? (
            <>
              दैनिक जीवन में
              <br />
              <em style={{ color: "#D9BE87", fontStyle: "italic" }}>
                अध्यात्म और आत्म-जागृति।
              </em>
            </>
          ) : (
            <>
              Spirituality, kept close
              <br />
              <em style={{ color: "#D9BE87", fontStyle: "italic" }}>
                to daily life.
              </em>
            </>
          )}
        </h2>
      </div>

      {/* ── HORIZONTAL INFINITE LOOPING MARQUEE (SINGLE LINE RIGHT TO LEFT) ── */}
      <div className="relative w-full overflow-hidden group py-2">
        {/* Left Edge Gradient Fade */}
        <div className="absolute top-0 bottom-0 left-0 w-20 md:w-44 bg-gradient-to-r from-[#0d0b08] via-[#0d0b08]/80 to-transparent z-20 pointer-events-none" />

        {/* Right Edge Gradient Fade */}
        <div className="absolute top-0 bottom-0 right-0 w-20 md:w-44 bg-gradient-to-l from-[#0d0b08] via-[#0d0b08]/80 to-transparent z-20 pointer-events-none" />

        {/* Marquee Row */}
        <div className="practice-marquee-track flex gap-6 items-center w-max py-4">
          {duplicatedCards.map((card, index) => (
            <PracticeCard key={`${card.id}-${index}`} card={card} />
          ))}
        </div>
      </div>

      <style>{`
        @keyframes innerlightMarquee {
          0% {
            transform: translate3d(0, 0, 0);
          }
          100% {
            transform: translate3d(-50%, 0, 0);
          }
        }
        .practice-marquee-track {
          display: flex;
          width: max-content;
          will-change: transform;
          animation: innerlightMarquee 35s linear infinite !important;
        }
        .practice-marquee-track:hover {
          animation-play-state: paused !important;
        }
      `}</style>
    </section>
  );
}

