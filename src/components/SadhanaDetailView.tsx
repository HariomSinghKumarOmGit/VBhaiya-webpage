"use client";

import Link from "next/link";
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
  const { language } = useLanguage();
  const isHi = language === "hi";

  return (
    <main className="min-h-screen py-[120px] sm:py-[150px] px-4 sm:px-7 max-w-[960px] mx-auto">
      {/* ── Back Navigation ── */}
      <div className="mb-8">
        <Link
          href="/programs"
          className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold uppercase tracking-wider text-ink-soft hover:text-gold transition-colors"
        >
          <LucideArrowLeft className="w-4 h-4" />
          <span>{isHi ? "समस्त साधनाएं देखें" : "All Sadhanas & Programs"}</span>
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
      </div>

      {/* ── Sacred Overview ── */}
      <div className="bg-white/80 border border-ink/6 rounded-[28px] sm:rounded-[32px] p-6 sm:p-8 mb-8">
        <h2 className="font-serif text-2xl sm:text-3xl text-ink mb-4">
          {isHi ? "साधना का रहस्य व महत्व" : "Significance & Spiritual Depth"}
        </h2>
        <p className="text-ink-soft text-base sm:text-lg leading-relaxed">
          {isHi ? sadhana.overviewHi : sadhana.overview}
        </p>
      </div>

      {/* ── Important Healer Notice ── */}
      <div className="flex items-start sm:items-center gap-3.5 p-4 sm:p-5 rounded-2xl sm:rounded-[24px] bg-amber-50 border border-amber-300/80 mb-12 shadow-2xs">
        <div className="w-9 h-9 rounded-xl bg-amber-500/15 text-[#9E7326] flex items-center justify-center shrink-0 mt-0.5 sm:mt-0">
          <LucideSparkles className="w-5 h-5 text-gold" />
        </div>
        <div className="text-xs sm:text-sm text-ink leading-relaxed">
          <span className="font-bold text-amber-900 uppercase tracking-wide mr-1.5 text-[0.72rem] sm:text-xs bg-amber-200/60 px-2 py-0.5 rounded-md">
            {isHi ? "आवश्यक निर्देश" : "Important Advisory"}
          </span>
          <span className="font-medium text-ink-soft">
            {isHi
              ? "साधना प्रारंभ करने से पूर्व अपने हीलर (मार्गदर्शक) से संपर्क व परामर्श अवश्य करें।"
              : "Please contact your healer for personalized guidance and blessing before starting this sadhana."}
          </span>
        </div>
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
          <Link
            href="/programs"
            className="px-6 py-4 rounded-full bg-white hover:bg-white/80 text-ink border border-ink/10 text-xs font-semibold uppercase tracking-wider transition-colors"
          >
            {isHi ? "अन्य साधनाएं देखें" : "View Other Sadhanas"}
          </Link>
        </div>
      </div>
    </main>
  );
}
