"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";

/* ─────────────────────────────────────────────
   CARD DATA (9 Cards arranged in 3 Staggered Rows)
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
  row: 1 | 2 | 3;
}

const CARDS: PracticeCardData[] = [
  // ROW 1
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
    row: 1,
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
    row: 1,
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
    row: 1,
  },

  // ROW 2 (Offset Left like Brick Pattern)
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
    row: 2,
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
    row: 2,
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
    row: 2,
  },

  // ROW 3
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
    row: 3,
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
    row: 3,
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
    row: 3,
  },
];

/* ─────────────────────────────────────────────
   STAGGERED BRICK CARD WITH 2-SECOND HOVER
   ───────────────────────────────────────────── */
function StaggeredCard({
  card,
  onOpenModal,
}: {
  card: PracticeCardData;
  onOpenModal: (card: PracticeCardData) => void;
}) {
  const [isHovering, setIsHovering] = useState(false);
  const [isUnlocked, setIsUnlocked] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = () => {
    setIsHovering(true);
    // 2-second hover timer requirement
    timerRef.current = setTimeout(() => {
      setIsUnlocked(true);
      onOpenModal(card);
    }, 2000);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
    setIsUnlocked(false);
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
  };

  useEffect(() => {
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  return (
    <motion.div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      whileHover={{ y: -4, scale: 1.02 }}
      transition={{ duration: 0.3 }}
      className="relative rounded-[20px] overflow-hidden flex-shrink-0 cursor-pointer select-none group"
      style={{
        width: 320,
        height: 175,
        background: "rgba(22, 19, 15, 0.85)",
        backdropFilter: "blur(12px)",
        border: isHovering
          ? `1px solid ${card.accent}`
          : "1px solid rgba(255, 255, 255, 0.18)",
        boxShadow: isHovering
          ? `0 0 25px ${card.accent}33, 0 12px 36px rgba(0,0,0,0.6)`
          : "0 4px 20px rgba(0,0,0,0.4)",
        transition: "border-color 0.4s ease, box-shadow 0.4s ease",
      }}
    >
      {/* 2-Second Hover Progress Indicator Bar */}
      {isHovering && !isUnlocked && (
        <div className="absolute top-0 left-0 right-0 h-[2.5px] bg-white/10 overflow-hidden z-20 pointer-events-none">
          <motion.div
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 2, ease: "linear" }}
            style={{ height: "100%", background: card.accent }}
          />
        </div>
      )}

      {/* Ambient background glow on hover */}
      <div
        className="absolute -top-12 -right-12 w-32 h-32 rounded-full blur-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-700 pointer-events-none"
        style={{ background: card.accent }}
      />

      <div className="p-[20px_22px] h-full flex flex-col justify-between relative z-10">
        <div>
          <div className="flex items-center justify-between mb-1.5">
            <span
              className="text-[0.68rem] tracking-[0.14em] uppercase font-medium"
              style={{ color: card.accent }}
            >
              {card.tag}
            </span>
            <span
              className="text-[1.2rem] opacity-35"
              style={{ color: card.accent }}
            >
              {card.icon}
            </span>
          </div>

          <h4
            className="font-serif text-[1.4rem] leading-[1.1] mb-1"
            style={{ color: "#F6F3EC" }}
          >
            {card.title}
          </h4>

          <p
            className="text-[0.78rem] line-clamp-2 leading-[1.55]"
            style={{ color: "rgba(246,243,236,0.6)" }}
          >
            {card.short}
          </p>
        </div>

        {/* Hover guidance hint */}
        <div className="flex items-center justify-between pt-2 border-t border-white/5">
          <span
            className="text-[0.66rem] tracking-[0.08em] uppercase"
            style={{ color: "rgba(246,243,236,0.4)" }}
          >
            {card.who}
          </span>
          <span
            className="text-[0.62rem] tracking-[0.06em]"
            style={{
              color: isHovering ? card.accent : "rgba(246,243,236,0.3)",
              transition: "color 0.3s",
            }}
          >
            {isHovering ? "Hold 2s to open →" : "Hover to preview"}
          </span>
        </div>
      </div>
    </motion.div>
  );
}

/* ─────────────────────────────────────────────
   MAIN COMPONENT WITH STAGGERED BRICK LAYOUT
   ───────────────────────────────────────────── */
export default function ThePractice() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeModalCard, setActiveModalCard] = useState<PracticeCardData | null>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  /*
    TIMELINE (Total Height 450vh):
    0.00 - 0.18: Single Initial Card (Jaap) prominent & centered, Hero title visible
    0.18 - 0.32: Single card smoothly scales down and joins the 3-row brick formation
    0.28 - 0.85: Brick layout cards glide smoothly right-to-left across the screen
    0.85 - 1.00: Cards scroll off / fade out into the next white section
  */

  // Hero Heading
  const headerOpacity = useTransform(scrollYProgress, [0, 0.12, 0.22], [1, 1, 0]);
  const headerY = useTransform(scrollYProgress, [0, 0.22], [0, -35]);

  // Initial Single Card (Jaap)
  const singleCardScale = useTransform(scrollYProgress, [0, 0.15, 0.28], [1, 0.95, 0.6]);
  const singleCardOpacity = useTransform(scrollYProgress, [0, 0.16, 0.26], [1, 1, 0]);
  const singleCardY = useTransform(scrollYProgress, [0, 0.26], [0, -40]);

  // Staggered Brick Grid Fade-In & Scroll-Off
  const brickGridOpacity = useTransform(scrollYProgress, [0.18, 0.28, 0.86, 0.96], [0, 1, 1, 0]);
  const brickGridScale = useTransform(scrollYProgress, [0.18, 0.32], [0.94, 1]);

  // Right-to-Left Horizontal Translation for the 3 staggered rows
  // Row 1 (top)
  const row1X = useTransform(scrollYProgress, [0.22, 0.88], ["15%", "-75%"]);
  // Row 2 (middle - offset brick pattern)
  const row2X = useTransform(scrollYProgress, [0.22, 0.88], ["0%", "-90%"]);
  // Row 3 (bottom - offset brick pattern)
  const row3X = useTransform(scrollYProgress, [0.22, 0.88], ["25%", "-65%"]);

  const row1Cards = CARDS.filter((c) => c.row === 1);
  const row2Cards = CARDS.filter((c) => c.row === 2);
  const row3Cards = CARDS.filter((c) => c.row === 3);

  return (
    <div
      ref={sectionRef}
      style={{
        height: "460vh",
        background: "#0d0b08",
        position: "relative",
      }}
    >
      {/* ── STICKY VIEWPORT CONTAINER ── */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col items-center justify-center">

        {/* Ambient Dark Mesh Background */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 70% 60% at 50% 50%, rgba(26,22,16,0.85) 0%, #0d0b08 100%)",
          }}
        />

        {/* ── 1. INITIAL PHASE: HEADER & SINGLE CARD ── */}
        <motion.div
          style={{ opacity: headerOpacity, y: headerY }}
          className="absolute top-[12vh] z-20 text-center pointer-events-none px-6"
        >
          <div
            className="text-[0.78rem] tracking-[0.18em] uppercase mb-3 font-medium"
            style={{ color: "#B8934A" }}
          >
            The practice
          </div>
          <h2
            className="font-serif leading-[1.12]"
            style={{
              fontSize: "clamp(2.2rem, 5.2vw, 3.8rem)",
              color: "#F6F3EC",
              textShadow: "0 4px 28px rgba(0,0,0,0.9)",
            }}
          >
            Spirituality, kept close
            <br />
            <em style={{ color: "#D9BE87", fontStyle: "italic" }}>
              to daily life.
            </em>
          </h2>
          <p
            className="mt-4 max-w-[460px] mx-auto text-[0.95rem] leading-[1.65]"
            style={{ color: "rgba(246,243,236,0.55)" }}
          >
            Sessions are quiet, unhurried, and built around presence rather than
            performance.
          </p>
        </motion.div>

        {/* Initial Single Card (Jaap - Start of Practice) */}
        <motion.div
          style={{
            opacity: singleCardOpacity,
            scale: singleCardScale,
            y: singleCardY,
          }}
          className="absolute z-20 pointer-events-none mt-[16vh]"
        >
          <div
            className="rounded-[24px] p-[32px_36px] flex flex-col justify-between"
            style={{
              width: "min(460px, 88vw)",
              height: 240,
              background: "rgba(22, 19, 15, 0.95)",
              border: "1px solid rgba(184,147,74,0.45)",
              boxShadow: "0 16px 64px rgba(0,0,0,0.8), 0 0 35px rgba(184,147,74,0.15)",
            }}
          >
            <div>
              <div className="flex items-center justify-between mb-2">
                <span
                  className="text-[0.72rem] tracking-[0.16em] uppercase font-medium"
                  style={{ color: "#B8934A" }}
                >
                  Core Practice
                </span>
                <span className="text-[1.6rem] text-[#B8934A]/50">🕉</span>
              </div>
              <h3
                className="font-serif text-[2rem] leading-[1.1] mb-1"
                style={{ color: "#F6F3EC" }}
              >
                Jaap &amp; Dhyan
              </h3>
              <p
                className="text-[0.88rem] leading-[1.6] mt-2"
                style={{ color: "rgba(246,243,236,0.65)" }}
              >
                The foundation of Innerlight. Repetition of sacred mantra turning
                the mind inward toward stillness.
              </p>
            </div>
            <div className="flex items-center justify-between pt-3 border-t border-white/10 text-[0.72rem] text-gold/80 tracking-[0.08em] uppercase">
              <span>Vishal Gautam · Founder</span>
              <span>Scroll to unveil practices ↓</span>
            </div>
          </div>
        </motion.div>

        {/* ── 2. SCROLL PHASE: STAGGERED 3-ROW BRICK MATRIX (AS IN DRAWING) ── */}
        <motion.div
          style={{
            opacity: brickGridOpacity,
            scale: brickGridScale,
          }}
          className="absolute inset-0 flex flex-col justify-center gap-6 overflow-hidden pointer-events-auto"
        >
          {/* Background Header during matrix scroll */}
          <div className="absolute top-[8vh] left-1/2 -translate-x-1/2 text-center pointer-events-none select-none z-0">
            <span className="text-[0.72rem] tracking-[0.2em] uppercase text-gold/60">
              The Path &amp; Disciples
            </span>
          </div>

          {/* ROW 1: 3 CARDS */}
          <motion.div
            style={{ x: row1X }}
            className="flex gap-6 items-center w-max pl-[40vw]"
          >
            {row1Cards.map((card) => (
              <StaggeredCard
                key={card.id}
                card={card}
                onOpenModal={setActiveModalCard}
              />
            ))}
          </motion.div>

          {/* ROW 2: 3 CARDS (OFFSET LEFT / BRICK PATTERN) */}
          <motion.div
            style={{ x: row2X }}
            className="flex gap-6 items-center w-max pl-[20vw]"
          >
            {row2Cards.map((card) => (
              <StaggeredCard
                key={card.id}
                card={card}
                onOpenModal={setActiveModalCard}
              />
            ))}
          </motion.div>

          {/* ROW 3: 3 CARDS (OFFSET RIGHT) */}
          <motion.div
            style={{ x: row3X }}
            className="flex gap-6 items-center w-max pl-[35vw]"
          >
            {row3Cards.map((card) => (
              <StaggeredCard
                key={card.id}
                card={card}
                onOpenModal={setActiveModalCard}
              />
            ))}
          </motion.div>
        </motion.div>

        {/* ── 3. EXPANDED DETAIL MODAL / CARD OVERLAY (TRIGGERED ON >2 SEC HOVER) ── */}
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

        {/* ── SCROLL INDICATOR ── */}
        <motion.div
          style={{
            opacity: useTransform(scrollYProgress, [0, 0.08, 0.18], [1, 1, 0]),
          }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none"
        >
          <span style={{ color: "rgba(184,147,74,0.6)", fontSize: "0.68rem", letterSpacing: "0.1em" }}>
            SCROLL
          </span>
          <div
            style={{
              width: 1,
              height: 28,
              background: "rgba(184,147,74,0.25)",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <motion.div
              animate={{ y: ["-100%", "100%"] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
              style={{ position: "absolute", inset: 0, background: "#B8934A" }}
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
}
