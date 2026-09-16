"use client";

import { useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { SadhanaItem } from "@/data/sadhanas";
import { useLanguage } from "@/context/LanguageContext";
import DayTracker from "@/components/DayTracker";
import {
  LucideArrowLeft,
  LucideCalendar,
  LucideClock,
  LucideCheckCircle2,
  LucideSparkles,
  LucideExternalLink,
  LucideFlame,
  LucideShieldCheck,
} from "lucide-react";

export default function SadhanaDetailView({ sadhana }: { sadhana: SadhanaItem }) {
  const router = useRouter();
  const { language } = useLanguage();
  const isHi = language === "hi";

  const handleBack = () => {
    if (typeof window !== "undefined" && window.history.length > 1) {
      router.back();
    } else {
      router.push("/programs");
    }
  };

  // Listen for Escape or Backspace keys (when not in an input) to go back
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const isInput = ["INPUT", "TEXTAREA", "SELECT"].includes((e.target as HTMLElement)?.tagName);
      if (e.key === "Escape" || (e.key === "Backspace" && !isInput)) {
        e.preventDefault();
        handleBack();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <main className="min-h-screen py-[120px] sm:py-[150px] px-4 sm:px-7 max-w-[960px] mx-auto relative">
      {/* ── Top Back Navigation Button ── */}
      <div className="mb-8 flex items-center justify-between gap-4">
        <button
          onClick={handleBack}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 hover:bg-white border border-ink/8 text-xs sm:text-sm font-semibold uppercase tracking-wider text-ink-soft hover:text-gold transition-all shadow-2xs hover:shadow-xs cursor-pointer group"
          title="Go Back (Esc / Backspace)"
        >
          <LucideArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-0.5" />
          <span>{isHi ? "वापस जाएं (Back)" : "Back (Esc)"}</span>
        </button>

        <Link
          href="/programs"
          className="text-xs sm:text-sm font-medium text-ink-soft/70 hover:text-gold transition-colors hidden sm:inline"
        >
          {isHi ? "समस्त साधनाएं देखें →" : "All Sadhanas →"}
        </Link>
      </div>

      {/* ── Header / Hero Card ── */}
      <div
        className="relative overflow-hidden rounded-[28px] sm:rounded-[36px] p-6 sm:p-12 mb-12 text-ivory border border-white/10 shadow-2xl"
        style={{
          background: sadhana.bgGradient,
        }}
      >
        <div className="absolute top-0 right-0 w-96 h-96 bg-gold/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10">
          <div className="flex items-center gap-3 mb-4 flex-wrap">
            <span
              className="px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-white/15 text-ivory backdrop-blur-sm border border-white/20"
            >
              {isHi ? sadhana.durationLabelHi : sadhana.durationLabel}
            </span>
            <span className="inline-flex items-center gap-1.5 text-xs text-gold-soft bg-black/30 px-3.5 py-1 rounded-full border border-gold/30">
              <LucideCalendar className="w-3.5 h-3.5 text-gold" />
              {isHi ? sadhana.startDateHi : sadhana.startDate}
            </span>
          </div>

          <h1 className="font-serif text-[clamp(2.2rem,5vw,3.8rem)] leading-[1.12] mb-3 text-ivory">
            {isHi ? sadhana.titleHi : sadhana.title}
          </h1>

          <p className="text-gold-soft text-sm sm:text-base uppercase tracking-widest font-medium mb-6">
            {isHi ? sadhana.deityHi : sadhana.deity}
          </p>

          <p className="text-base sm:text-lg text-ivory/80 max-w-2xl leading-relaxed mb-8">
            {isHi ? sadhana.summaryHi : sadhana.summary}
          </p>

          <div className="flex items-center gap-4 flex-wrap">
            <a
              href={sadhana.meetLink || "https://meet.google.com/odv-evnd-mfy"}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-gold hover:bg-[#A68137] text-ink font-semibold text-sm transition-all shadow-lg"
            >
              <span>{isHi ? "दैनिक गूगल मीट से जुड़ें" : "Join Daily Google Meet (8 PM)"}</span>
              <LucideExternalLink className="w-4 h-4" />
            </a>
            <div className="text-xs text-ivory/70 flex items-center gap-2">
              <LucideClock className="w-4 h-4 text-gold" />
              <span>{isHi ? sadhana.meetingTimeHi : sadhana.meetingTime}</span>
            </div>
          </div>
        </div>
      </div>

      {/* ── Sacred Mantra Card ── */}
      <div className="bg-white/90 border border-ink/8 rounded-[28px] sm:rounded-[32px] p-6 sm:p-8 mb-12 shadow-sm">
        <div className="flex items-center justify-between gap-3 mb-4">
          <div className="inline-flex items-center gap-2 text-gold text-xs font-bold tracking-wider uppercase">
            <LucideFlame className="w-4 h-4" />
            <span>{isHi ? "मूल साधना मंत्र" : "Core Sadhana Mantra"}</span>
          </div>
          <span className="text-xs text-ink-soft bg-ivory-2 px-3 py-1 rounded-full">
            {isHi ? "दैनिक मंत्र जप" : "Daily Sacred Repetition"}
          </span>
        </div>

        <div className="bg-[#FAF8F4] border border-ink/6 rounded-2xl p-6 sm:p-8 text-center my-4">
          <div className="font-devanagari text-xl sm:text-2xl md:text-3xl text-ink font-semibold leading-relaxed whitespace-pre-line mb-3">
            {sadhana.mantraDevanagari}
          </div>
          <div className="text-sm sm:text-base text-ink font-sans italic opacity-85 mb-3">
            {sadhana.mantra}
          </div>
          <div className="text-xs sm:text-sm text-ink-soft/80 max-w-xl mx-auto border-t border-ink/6 pt-3 mt-3">
            <span className="font-medium text-ink">{isHi ? "भावार्थ: " : "Meaning: "}</span>
            {isHi ? sadhana.mantraMeaningHi : sadhana.mantraMeaning}
          </div>
        </div>

        {/* Healer Advisory Notice / Disclaimer */}
        <div className="flex items-center gap-2.5 text-xs sm:text-sm text-amber-950 font-medium bg-amber-500/10 border border-amber-500/25 px-4 py-3 rounded-xl shadow-2xs mt-4">
          <LucideShieldCheck className="w-4 h-4 text-[#B8934A] shrink-0" />
          <span>
            {isHi
              ? "विशेष सूचना: साधना प्रारंभ करने से पूर्व अपने हीलर / मार्गदर्शक से परामर्श अवश्य लें।"
              : "Important Disclaimer: Contact healer / mentor before starting this sadhana."}
          </span>
        </div>
      </div>

      {/* ── Sacred Overview ── */}
      <div className="bg-white/80 border border-ink/6 rounded-[28px] sm:rounded-[32px] p-6 sm:p-8 mb-12">
        <h2 className="font-serif text-2xl sm:text-3xl text-ink mb-4">
          {isHi ? "साधना का रहस्य व महत्व" : "Significance & Spiritual Depth"}
        </h2>
        <p className="text-ink-soft text-base sm:text-lg leading-relaxed">
          {isHi ? sadhana.overviewHi : sadhana.overview}
        </p>
      </div>

      {/* ── Interactive Day Tracker (Replacing Holy Counter) ── */}
      <div className="mb-12">
        <DayTracker
          sadhanaId={sadhana.id}
          sadhanaTitle={`${sadhana.title} · Day Tracker`}
          sadhanaTitleHi={`${sadhana.titleHi} · दिवस ट्रैकर`}
          defaultDays={sadhana.durationDays}
          accentColor={sadhana.accentColor}
        />
      </div>



      {/* ── Bottom Call To Action ── */}
      <div className="text-center bg-ivory-2/70 border border-ink/6 rounded-[28px] p-8 sm:p-12">
        <h3 className="font-serif text-2xl sm:text-3xl text-ink mb-3">
          {isHi ? "इस साधना में सम्मिलित हों" : `Begin Your ${sadhana.durationDays}-Day Sadhana`}
        </h3>
        <p className="text-sm sm:text-base text-ink-soft max-w-xl mx-auto mb-6">
          {isHi
            ? "दैनिक 8:00 बजे गूगल मीट पर संगति के साथ ध्यान करें और आत्म-जागृति का अनुभव प्राप्त करें।"
            : "Join our global sangha every evening at 8:00 PM IST on Google Meet for guided stillness and shared energy."}
        </p>
        <div className="flex items-center justify-center gap-4 flex-wrap">
          <a
            href={sadhana.meetLink || "https://meet.google.com/odv-evnd-mfy"}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 rounded-full bg-gold hover:bg-[#A48039] text-ink font-semibold text-xs uppercase tracking-wider transition-all shadow-lg"
          >
            {isHi ? "गूगल मीट से जुड़ें (8 PM)" : "Join Google Meet Live Sit"}
          </a>
          <button
            onClick={handleBack}
            className="px-6 py-4 rounded-full bg-white hover:bg-white/80 text-ink border border-ink/10 text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer flex items-center gap-2"
          >
            <LucideArrowLeft className="w-4 h-4" />
            <span>{isHi ? "वापस जाएं (Back)" : "Back to All Sadhanas"}</span>
          </button>
        </div>
      </div>
    </main>
  );
}
