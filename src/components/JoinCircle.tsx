"use client";

import { useState, useRef } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import {
  ArrowUpRight,
  Copy,
  Check,
  Sparkles,
  Video,
} from "lucide-react";

// Crisp bespoke luxury SVG icons for social/contact channels
function WhatsAppIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2zm.01 1.67c2.2 0 4.26.86 5.82 2.42a8.225 8.225 0 0 1 2.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.196 8.196 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24zm4.52 11.53c-.25-.13-1.47-.72-1.7-.81-.23-.08-.39-.13-.56.13-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.13-1.06-.39-2.03-1.24-.75-.67-1.26-1.5-1.41-1.75-.15-.25-.02-.39.11-.51.11-.11.25-.29.37-.43.13-.15.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.13-.56-1.34-.76-1.84-.2-.48-.4-.42-.56-.43h-.47c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1 0 1.24.9 2.44 1.03 2.61.13.17 1.77 2.71 4.3 3.79.6.26 1.07.41 1.44.53.61.19 1.16.16 1.6-.09.49-.28 1.47-.6 1.68-1.19.21-.58.21-1.07.15-1.19-.06-.13-.22-.2-.47-.33z"/>
    </svg>
  );
}

function EmailIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

function TelegramIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 0 0-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .37z"/>
    </svg>
  );
}

function InstagramIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function YoutubeIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
    </svg>
  );
}

interface StaggeredCardProps {
  icon: React.ReactNode;
  tag: string;
  title: string;
  handle: string;
  desc: string;
  href: string;
  copyText?: string;
  badge?: string;
  side: "left" | "right";
  index: number;
}

function StaggeredCard({
  icon,
  tag,
  title,
  handle,
  desc,
  href,
  copyText,
  badge,
  side,
  index,
}: StaggeredCardProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (copyText) {
      navigator.clipboard.writeText(copyText);
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    }
  };

  return (
    <motion.div
      initial={{
        opacity: 0,
        x: side === "left" ? -85 : 85,
        y: 20,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
        y: 0,
      }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{
        duration: 0.85,
        delay: index * 0.12,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{
        scale: 1.035,
        y: -5,
        transition: { duration: 0.28, ease: "easeOut" },
      }}
      className="w-full relative group cursor-pointer"
    >
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="block w-full h-full p-6 sm:p-7 rounded-[26px] bg-white/80 hover:bg-white backdrop-blur-xl border border-ink/[0.08] group-hover:border-gold/60 shadow-[0_4px_24px_rgba(27,24,18,0.03)] group-hover:shadow-[0_0_35px_rgba(184,147,74,0.3),0_20px_48px_rgba(27,24,18,0.12)] transition-all duration-300 relative overflow-hidden"
      >
        {/* Ambient background glow on hover */}
        <div className="absolute -top-14 -right-14 w-36 h-36 rounded-full bg-gold/20 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

        {/* Top Row: Icon + Tag & Arrow */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-2xl bg-[#F6F3EC] group-hover:bg-[#1B1812] text-ink group-hover:text-[#F6F3EC] border border-ink/5 group-hover:border-gold/40 flex items-center justify-center transition-colors duration-300 shadow-2xs">
                {icon}
              </div>
              <div>
                <span className="block text-[0.66rem] uppercase tracking-[0.14em] font-semibold text-gold">
                  {tag}
                </span>
                <span className="font-serif text-[0.98rem] font-semibold text-ink">
                  {title}
                </span>
              </div>
            </div>

            <div className="flex items-center gap-1.5">
              {badge && (
                <span className="hidden sm:inline-flex text-[0.62rem] uppercase tracking-wider font-semibold px-2.5 py-0.5 rounded-full bg-gold/15 text-gold border border-gold/30">
                  {badge}
                </span>
              )}
              <div className="w-8 h-8 rounded-full bg-ink/[0.03] group-hover:bg-gold/20 flex items-center justify-center text-ink-soft group-hover:text-gold transition-colors duration-300">
                <ArrowUpRight
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </div>
            </div>
          </div>

          {/* Content Handle */}
          <div className="mt-1">
            <div className="font-serif text-[1.18rem] sm:text-[1.28rem] font-normal text-ink group-hover:text-gold transition-colors duration-300 flex items-center gap-2">
              <span className="truncate">{handle}</span>
            </div>
            <p className="mt-1 text-[0.82rem] leading-[1.6] text-ink-soft">
              {desc}
            </p>
          </div>
        </div>

        {/* Bottom Action / Quick Copy */}
        <div className="mt-5 pt-3.5 border-t border-ink/[0.06] flex items-center justify-between text-[0.72rem]">
          <span className="text-ink-soft/75 group-hover:text-ink transition-colors font-medium flex items-center gap-1">
            <span>Connect &amp; Enter</span>
            <span className="opacity-40">→</span>
          </span>

          {copyText && (
            <button
              onClick={handleCopy}
              className="flex items-center gap-1 text-[0.7rem] font-medium text-ink-soft hover:text-gold px-2.5 py-1 rounded-full hover:bg-ink/[0.04] transition-all cursor-pointer"
              title="Copy to clipboard"
            >
              {copied ? (
                <>
                  <Check size={12} className="text-emerald-600" />
                  <span className="text-emerald-700 font-semibold">Copied!</span>
                </>
              ) : (
                <>
                  <Copy size={12} />
                  <span>Copy</span>
                </>
              )}
            </button>
          )}
        </div>
      </a>
    </motion.div>
  );
}

export default function JoinCircle() {
  const { language } = useLanguage();
  const containerRef = useRef<HTMLDivElement>(null);
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
  };

  return (
    <section
      id="newsletter"
      ref={containerRef}
      className="relative py-[130px] md:py-[170px] bg-gradient-to-b from-[#F6F3EC] via-[#F3EEE4] to-[#EAE3D6] overflow-hidden"
    >
      {/* Ambient background blurred orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-r from-gold/10 via-amber-200/15 to-gold/10 blur-[100px] rounded-full pointer-events-none -z-1" />

      <div className="max-w-[1060px] mx-auto px-6 sm:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-[680px] mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-serif text-[clamp(2.6rem,5.5vw,4.2rem)] leading-[1.08] tracking-[-0.015em] text-ink mb-5 font-normal"
          >
            {language === "hi" ? (
              <>
                सत्संग मंडल{" "}
                <em className="text-gold italic font-normal">से जुड़ें</em>
              </>
            ) : (
              <>
                Join the{" "}
                <em className="text-gold italic font-normal">circle</em>
              </>
            )}
          </motion.h2>

          {/* Hindi Devanagari Sacred Motto */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="inline-block p-[14px_28px] rounded-2xl bg-white/75 border border-ink/[0.07] backdrop-blur-md shadow-xs my-2"
          >
            <p className="font-serif text-[1.1rem] md:text-[1.25rem] text-ink leading-relaxed italic tracking-wide">
              &ldquo;अपने भीतर की यात्रा आज ही शुरू करें।&rdquo;
            </p>
            <div className="mt-1.5 flex items-center justify-center gap-2.5 text-[0.75rem] text-ink-soft tracking-wider font-medium">
              <span>Guided by Vishal Gautam</span>
              <span className="opacity-40">·</span>
              <span className="text-gold font-semibold">Sitar by Karim Bhai</span>
            </div>
          </motion.div>
        </div>

        {/* 
          ── EXPERIMENTAL STAGGERED BRICK LAYOUT (Matching Drawing) ──
          Row 1: [WhatsApp (Left)]  [Instagram (Right)]
          Row 2: [Email (Left - Offset)]  [YouTube (Right - Offset)]
          Row 3: [Telegram (Left)]  [Google Meet / Live (Right)]
        */}
        <div className="flex flex-col gap-6 sm:gap-7 max-w-[940px] mx-auto mb-16">
          {/* ROW 1 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-7 items-center">
            {/* Left: WhatsApp */}
            <StaggeredCard
              icon={<WhatsAppIcon className="w-5 h-5" />}
              tag="Direct Line"
              title="WhatsApp Sanctuary"
              handle="+91 88180 98688"
              desc="Direct messages only (No calls). For personal guidance, sittings, and queries."
              href="https://wa.me/918818098688"
              copyText="+91 88180 98688"
              badge="Direct"
              side="left"
              index={0}
            />

            {/* Right: Instagram */}
            <StaggeredCard
              icon={<InstagramIcon className="w-5 h-5" />}
              tag="Visual Journal"
              title="Instagram Chronicle"
              handle="@innerlight_vishal"
              desc="Visual contemplative reflections, quotes, and sacred moments from the practice."
              href="https://www.instagram.com/innerlight_vishal"
              badge="Official"
              side="right"
              index={1}
            />
          </div>

          {/* ROW 2 (STAGGERED BRICK OFFSET — Shifted slightly horizontally as in drawing) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-7 items-center sm:translate-x-8">
            {/* Left: Email */}
            <StaggeredCard
              icon={<EmailIcon className="w-5 h-5" />}
              tag="Private Queries"
              title="Email Sanctuary"
              handle="seeurinnerlight@gmail.com"
              desc="Send your deep spiritual queries, reflections, or private retreat inquiries."
              href="mailto:seeurinnerlight@gmail.com"
              copyText="seeurinnerlight@gmail.com"
              badge="Direct"
              side="left"
              index={2}
            />

            {/* Right: YouTube */}
            <StaggeredCard
              icon={<YoutubeIcon className="w-5 h-5" />}
              tag="Sacred Discourses"
              title="YouTube Channel"
              handle="@see-ur-InnerLight"
              desc="Watch full guided meditation sessions, discourses, and sacred sitar recitals by Karim Bhai."
              href="https://www.youtube.com/@see-ur-InnerLight"
              badge="Discourses"
              side="right"
              index={3}
            />
          </div>

          {/* ROW 3 (STAGGERED BRICK OFFSET — Shifted back or left as in drawing) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-7 items-center sm:-translate-x-6">
            {/* Left: Telegram */}
            <StaggeredCard
              icon={<TelegramIcon className="w-5 h-5" />}
              tag="Daily Sangha"
              title="Telegram Community"
              handle="InnerLight Channel"
              desc="Join for daily spiritual prompts, lunar alerts, and live sittings announcements."
              href="https://t.me/nMxARoPlst43YzQ9"
              badge="Active Sangha"
              side="left"
              index={4}
            />

            {/* Right: Google Meet Live */}
            <StaggeredCard
              icon={<Video className="w-5 h-5" />}
              tag="Live Virtual Sangha"
              title="Google Meet Sittings"
              handle="Daily 8:00 – 9:00 PM"
              desc="Join our daily sadhana sits and full moon live meditations via Google Meet."
              href="https://meet.google.com/odv-evnd-mfy"
              badge="Live Practice"
              side="right"
              index={5}
            />
          </div>
        </div>

        {/* ── LUXURY NEWSLETTER PILL CAPSULE ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.35 }}
          className="max-w-[560px] mx-auto"
        >
          <div className="bg-white/85 backdrop-blur-xl border border-ink/[0.08] rounded-[32px] p-6 sm:p-8 shadow-[0_12px_40px_rgba(27,24,18,0.06)]">
            <div className="text-center mb-5">
              <span className="text-[0.7rem] uppercase tracking-[0.16em] text-gold font-bold block mb-1">
                Lunar Letters &amp; Sittings
              </span>
              <h3 className="font-serif text-xl sm:text-2xl text-ink">
                Receive the Lunar Letter
              </h3>
              <p className="text-[0.82rem] text-ink-soft mt-1">
                Quiet dispatches sent on Purnima and Amavasya. No noise, no spam.
              </p>
            </div>

            <AnimatePresence mode="wait">
              {subscribed ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="p-5 rounded-2xl bg-emerald-50 border border-emerald-200/80 text-center"
                >
                  <div className="w-10 h-10 rounded-full bg-emerald-600 text-white flex items-center justify-center mx-auto mb-2 shadow-xs">
                    <Check size={20} />
                  </div>
                  <h4 className="font-serif text-lg text-emerald-950 font-semibold">
                    Welcome to the Circle
                  </h4>
                  <p className="text-xs text-emerald-800 mt-0.5">
                    We will write to you on the next full moon.
                  </p>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                  className="flex flex-col sm:flex-row items-center gap-2 p-1.5 rounded-full bg-[#F6F3EC]/90 border border-ink/10 focus-within:border-gold/60 focus-within:ring-2 focus-within:ring-gold/20 transition-all shadow-inner"
                >
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    className="w-full px-5 py-3 sm:py-2.5 bg-transparent text-sm text-ink placeholder:text-ink-soft/50 focus:outline-none"
                  />
                  <button
                    type="submit"
                    className="w-full sm:w-auto px-7 py-3 sm:py-2.5 rounded-full bg-[#1B1812] hover:bg-gold text-[#F6F3EC] hover:text-ink text-xs uppercase tracking-wider font-semibold transition-all duration-300 shadow-sm hover:shadow-md cursor-pointer whitespace-nowrap"
                  >
                    Subscribe
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
