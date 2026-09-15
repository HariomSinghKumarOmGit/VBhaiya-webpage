"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

/* ─────────────────────────────────────────────
   PRACTICE CARD DATA (All 9 Core Cards)
   ───────────────────────────────────────────── */
export interface PracticeCardData {
  id: number;
  tag: string;
  title: string;
  subtitle: string;
  icon: string;
  short: string;
  detail: string;
  accent: string;
  who: string;
}

const CARDS: PracticeCardData[] = [
  {
    id: 1,
    tag: "Practice",
    title: "Jaap",
    subtitle: "Silent Recitation",
    icon: "🕉",
    short: "The quiet repetition of a sacred name — the breath of every sadhana.",
    detail:
      "Jaap is the disciplined, unhurried repetition of a mantra or divine name. It is not performance — it is the act of slowly turning the mind inward until the name and the one who repeats it become indistinct. Vishal guides each sitter through a personal mantra appropriate to where they stand on the path.",
    accent: "#B8934A",
    who: "Guided by Vishal Gautam",
  },
  {
    id: 2,
    tag: "Practice",
    title: "Dhyan",
    subtitle: "Seated Meditation",
    icon: "◯",
    short: "Sitting without agenda. Watching the mind until it settles into silence.",
    detail:
      "Dhyan is the heart of Innerlight. Not guided visualisation, not breathwork performance — pure seated witness. The spine erect, the gaze soft, and the inner conversation allowed to slow. Sessions run 40 minutes to two hours depending on the phase of the moon.",
    accent: "#D9BE87",
    who: "Vishal Gautam",
  },
  {
    id: 3,
    tag: "Disciple",
    title: "Karim Bhai",
    subtitle: "Sitar & Sacred Sound",
    icon: "♪",
    short: "A lifelong practitioner whose music dissolves the boundary between prayer and song.",
    detail:
      "Karim Bhai has walked this path for over three decades. He joins certain Purnima sittings to offer live sitar — not as entertainment, but as a living extension of the mantra. His presence creates a deep resonance that words cannot convey.",
    accent: "#8A9482",
    who: "Karim Bhai · Disciple",
  },
  {
    id: 4,
    tag: "Disciple & Founder",
    title: "Vishal Gautam",
    subtitle: "Founder · Space & Silence",
    icon: "✦",
    short: "Holds the space without filling it. Present, unhurried, and quiet.",
    detail:
      "Vishal does not claim to teach enlightenment. He offers a consistent, unhurried space built on twenty years of daily sitting. He is available for individual guidance on the practice, woven into ordinary days.",
    accent: "#B8934A",
    who: "Vishal Gautam · Founder",
  },
  {
    id: 5,
    tag: "Ritual",
    title: "Purnima Sit",
    subtitle: "Full Moon Circle",
    icon: "○",
    short: "Every full moon, we gather. No phones. No agenda. Just the night.",
    detail:
      "The Purnima Sit is the anchor of the Innerlight calendar. Held on or just before the full moon, it runs from dusk into late evening. Attendance is small — never more than twelve — and by invitation only.",
    accent: "#D9BE87",
    who: "Full Moon Gathering",
  },
  {
    id: 6,
    tag: "Ritual",
    title: "Amavasya",
    subtitle: "New Moon Release",
    icon: "●",
    short: "The darkest night is made for letting go and deep internal surrender.",
    detail:
      "Amavasya is the night of the new moon — the time of surrender. The practice on this night is heavier, slower, and more inward than any other. Sitter arrives having sat for thirty minutes in solitude.",
    accent: "#8A9482",
    who: "Closed Circle",
  },
  {
    id: 7,
    tag: "Practice",
    title: "Pranayama",
    subtitle: "Breath as Gateway",
    icon: "∞",
    short: "The breath is the bridge between body and spirit.",
    detail:
      "Before any long sit, the breath is prepared. Specific pranayama sequences are chosen by Vishal based on the season and the individual constitution. Quiet, deliberate, and taught in person.",
    accent: "#B8934A",
    who: "Vishal Gautam",
  },
  {
    id: 8,
    tag: "Teaching",
    title: "Satsang",
    subtitle: "Gathering in Truth",
    icon: "◈",
    short: "To sit with others who are also turning inward.",
    detail:
      "Once a month Vishal holds a small satsang — a gathering of practitioners where questions can be asked and something close to honest dialogue is possible. Direct reflections on daily spiritual practice.",
    accent: "#D9BE87",
    who: "Monthly · Open",
  },
  {
    id: 9,
    tag: "Teaching",
    title: "21-Day Sadhana",
    subtitle: "Intensive Practice Cycle",
    icon: "◇",
    short: "Three weeks of unbroken daily practice. Quiet transformation.",
    detail:
      "The 21-day Sadhana is Innerlight's core intensive. Participants commit to a daily morning sit, a short journaling practice, and one weekly group session. Simple practice woven into life.",
    accent: "#B8934A",
    who: "Vishal Gautam",
  },
];

/* ─────────────────────────────────────────────
   SINGLE PRACTICE CARD COMPONENT
   ───────────────────────────────────────────── */
function PracticeCard({
  card,
  onOpenModal,
}: {
  card: PracticeCardData;
  onOpenModal: (card: PracticeCardData) => void;
}) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onClick={() => onOpenModal(card)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative rounded-[22px] overflow-hidden flex-shrink-0 cursor-pointer select-none transition-all duration-300 transform hover:-translate-y-1.5 group"
      style={{
        width: 340,
        height: 195,
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
            className="font-serif text-[1.45rem] leading-[1.15] mb-1.5"
            style={{ color: "#F6F3EC" }}
          >
            {card.title}
          </h4>

          <p
            className="text-[0.8rem] line-clamp-2 leading-[1.55]"
            style={{ color: "rgba(246,243,236,0.62)" }}
          >
            {card.short}
          </p>
        </div>

        {/* Card Footer */}
        <div className="flex items-center justify-between pt-2.5 border-t border-white/5">
          <span
            className="text-[0.66rem] tracking-[0.08em] uppercase"
            style={{ color: "rgba(246,243,236,0.45)" }}
          >
            {card.who}
          </span>
          <span
            className="text-[0.64rem] tracking-[0.06em]"
            style={{
              color: isHovered ? card.accent : "rgba(246,243,236,0.35)",
              transition: "color 0.3s",
            }}
          >
            Tap to view →
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
  const [activeModalCard, setActiveModalCard] = useState<PracticeCardData | null>(null);

  // Close modal on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setActiveModalCard(null);
      }
    };
    if (activeModalCard) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeModalCard]);

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
        <p
          className="mt-4 max-w-[480px] mx-auto text-[0.95rem] md:text-[1rem] leading-[1.65]"
          style={{ color: "rgba(246,243,236,0.58)" }}
        >
          {language === "hi"
            ? "सत्र शांत, सहज और किसी दिखावे के बिना मौन और आंतरिक उपस्थिति पर आधारित हैं।"
            : "Sessions are quiet, unhurried, and built around presence rather than performance."}
        </p>
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
            <PracticeCard
              key={`${card.id}-${index}`}
              card={card}
              onOpenModal={setActiveModalCard}
            />
          ))}
        </div>
      </div>

      {/* Subtitle guidance hint */}
      <div className="relative z-10 text-center mt-8">
        <span className="text-[0.7rem] uppercase tracking-[0.15em] text-white/30">
          {language === "hi"
            ? "रोकने के लिए स्पर्श करें · विस्तार से जानने के लिए किसी भी कार्ड पर टैप करें"
            : "Hover to pause · Tap any card to explore practice"}
        </span>
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

      {/* ── EXPANDED DETAIL MODAL ── */}
      <AnimatePresence>
        {activeModalCard && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveModalCard(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-black/80 backdrop-blur-md cursor-pointer"
          >
            <motion.div
              initial={{ scale: 0.9, y: 20, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.9, y: 20, opacity: 0 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-lg w-full rounded-[26px] p-8 md:p-10 cursor-default"
              style={{
                background: "#161310",
                border: `1px solid ${activeModalCard.accent}55`,
                boxShadow: `0 20px 80px rgba(0,0,0,0.9), 0 0 50px ${activeModalCard.accent}22`,
              }}
            >
              {/* Close Button */}
              <button
                onClick={() => setActiveModalCard(null)}
                className="absolute top-6 right-6 w-9 h-9 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center text-ivory/60 hover:text-ivory transition-colors text-lg"
              >
                ✕
              </button>

              <div className="flex items-center gap-3 mb-3">
                <span className="text-2xl">{activeModalCard.icon}</span>
                <span
                  className="text-[0.72rem] tracking-[0.16em] uppercase font-medium"
                  style={{ color: activeModalCard.accent }}
                >
                  {activeModalCard.tag}
                </span>
              </div>

              <h3 className="font-serif text-3xl md:text-4xl text-ivory mb-1">
                {activeModalCard.title}
              </h3>
              <div className="text-sm text-ivory/45 mb-6">
                {activeModalCard.subtitle}
              </div>

              <div className="p-4 rounded-xl bg-white/5 border border-white/5 mb-6 text-[0.95rem] leading-[1.7] text-ivory/85">
                &ldquo;{activeModalCard.short}&rdquo;
              </div>

              <div className="text-[0.92rem] leading-[1.8] text-ivory/70 space-y-4">
                <p>{activeModalCard.detail}</p>
              </div>

              <div className="mt-8 pt-5 border-t border-white/10 flex items-center justify-between">
                <span
                  className="text-xs uppercase tracking-widest font-medium"
                  style={{ color: activeModalCard.accent }}
                >
                  {activeModalCard.who}
                </span>
                <span className="text-xs text-ivory/40">
                  Innerlight Practice
                </span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
