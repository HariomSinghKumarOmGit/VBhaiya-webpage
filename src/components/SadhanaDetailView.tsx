"use client";

import { useState } from "react";
import Link from "next/link";
import { SadhanaItem } from "@/data/sadhanas";
import { useLanguage } from "@/context/LanguageContext";
import {
  LucideArrowLeft,
  LucideCalendar,
  LucideClock,
  LucideCheckCircle2,
  LucideSparkles,
  LucideExternalLink,
  LucideSun,
  LucideVolume2,
  LucideFlame,
  LucideShieldCheck,
} from "lucide-react";

export default function SadhanaDetailView({ sadhana }: { sadhana: SadhanaItem }) {
  const { language } = useLanguage();
  const [japaCount, setJapaCount] = useState<number>(0);
  const [japaTarget, setJapaTarget] = useState<number>(108);

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
            {isHi ? "108 बार दैनिक जप" : "108 Daily Repetitions"}
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
      <div className="bg-white/80 border border-ink/6 rounded-[28px] sm:rounded-[32px] p-6 sm:p-8 mb-12">
        <h2 className="font-serif text-2xl sm:text-3xl text-ink mb-4">
          {isHi ? "साधना का रहस्य व महत्व" : "Significance & Spiritual Depth"}
        </h2>
        <p className="text-ink-soft text-base sm:text-lg leading-relaxed mb-8">
          {isHi ? sadhana.overviewHi : sadhana.overview}
        </p>

        {/* Pillars Grid */}
        <h3 className="font-serif text-xl text-ink mb-4 font-semibold">
          {isHi ? "साधना के चार मुख्य स्तम्भ" : "Four Core Pillars of Practice"}
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {sadhana.pillars.map((pillar, idx) => (
            <div key={idx} className="bg-ivory/60 rounded-2xl p-5 border border-ink/6">
              <div className="font-serif text-lg text-ink font-semibold mb-1">
                {isHi ? pillar.titleHi : pillar.title}
              </div>
              <p className="text-xs sm:text-sm text-ink-soft leading-relaxed">
                {isHi ? pillar.descHi : pillar.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* ── Daily Practice Schedule ── */}
      <div className="bg-white/80 border border-ink/6 rounded-[28px] sm:rounded-[32px] p-6 sm:p-8 mb-12">
        <h2 className="font-serif text-2xl sm:text-3xl text-ink mb-2">
          {isHi ? "दैनिक साधना समय-सारणी" : "Daily Practice Routine"}
        </h2>
        <p className="text-xs sm:text-sm text-ink-soft mb-6">
          {isHi
            ? `इस ${sadhana.durationDays} दिवसीय अनुष्ठान के दौरान इस दैनिक क्रम का पालन करें:`
            : `Follow this serene daily schedule throughout your ${sadhana.durationDays}-day commitment:`}
        </p>

        <div className="space-y-3">
          {sadhana.dailySchedule.map((item, idx) => (
            <div
              key={idx}
              className="bg-ivory/40 hover:bg-ivory/80 transition-colors rounded-2xl p-4 sm:p-5 border border-ink/6 flex flex-col sm:flex-row sm:items-center justify-between gap-3"
            >
              <div className="flex items-start gap-4">
                <span className="font-mono text-xs sm:text-sm font-bold text-gold px-3 py-1 rounded-lg bg-gold/10 shrink-0">
                  {item.time}
                </span>
                <div>
                  <div className="font-serif text-base text-ink font-semibold">
                    {isHi ? item.activityHi : item.activity}
                  </div>
                  <div className="text-xs sm:text-sm text-ink-soft mt-0.5">
                    {isHi ? item.detailsHi : item.details}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Interactive Japa Counter ── */}
      <div className="bg-[#FAF8F4] border border-gold/30 rounded-[28px] sm:rounded-[36px] p-6 sm:p-10 mb-12 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold/15 text-gold text-xs font-semibold uppercase tracking-wider mb-3">
          <LucideSun className="w-3.5 h-3.5" />
          <span>{isHi ? "दैनिक मंत्र जप संगी" : "Daily Japa Practice"}</span>
        </div>
        <h3 className="font-serif text-2xl sm:text-3xl text-ink mb-2">
          {isHi ? "108 मनके दिव्य जप माला" : "108 Bead Japa Tracker"}
        </h3>
        <p className="text-xs sm:text-sm text-ink-soft max-w-md mx-auto mb-6">
          {isHi
            ? "जप के समय मनकों की गिनती के लिए इस चक्र को स्पर्श करें।"
            : "Tap the sacred counter below for each repetition of the sadhana mantra."}
        </p>

        <div className="flex flex-col items-center justify-center my-4">
          <button
            onClick={() => setJapaCount((prev) => (prev + 1) % (japaTarget + 1))}
            className="w-32 h-32 sm:w-40 sm:h-40 rounded-full border-4 border-gold/40 hover:border-gold bg-white flex flex-col items-center justify-center transition-transform active:scale-95 shadow-lg cursor-pointer"
          >
            <span className="font-serif text-3xl sm:text-4xl text-ink font-bold">{japaCount}</span>
            <span className="text-[0.68rem] tracking-widest text-gold uppercase font-bold mt-1">
              / {japaTarget}
            </span>
          </button>
          <div className="text-xs text-ink-soft mt-3 font-medium">
            {isHi ? "जप के लिए टैप करें" : "Tap circle with each chant"}
          </div>
        </div>

        <div className="flex items-center justify-center gap-3 mt-4">
          <button
            onClick={() => setJapaCount(0)}
            className="px-4 py-1.5 rounded-full text-xs font-medium text-ink-soft hover:bg-ink/5 border border-ink/10 transition-colors cursor-pointer"
          >
            {isHi ? "रीसेट" : "Reset"}
          </button>
          <button
            onClick={() => setJapaTarget(japaTarget === 108 ? 1008 : 108)}
            className="px-4 py-1.5 rounded-full text-xs font-medium bg-gold/15 text-gold hover:bg-gold/25 transition-colors cursor-pointer"
          >
            {isHi ? `लक्ष्य: ${japaTarget}` : `Target: ${japaTarget}`}
          </button>
        </div>
      </div>

      {/* ── Guidelines & Benefits Grid ── */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        {/* Guidelines */}
        <div className="bg-white/80 border border-ink/6 rounded-[28px] p-6 sm:p-8">
          <div className="inline-flex items-center gap-2 text-xs font-bold text-ink uppercase tracking-wider mb-3">
            <LucideShieldCheck className="w-4 h-4 text-gold" />
            <span>{isHi ? "साधना नियम व मर्यादा" : "Sadhana Guidelines"}</span>
          </div>
          <h3 className="font-serif text-xl text-ink mb-4">
            {isHi ? "अनुष्ठान मर्यादा" : "Sacred Disciplines"}
          </h3>
          <ul className="space-y-2.5 text-xs sm:text-sm text-ink-soft">
            {(isHi ? sadhana.guidelines.hi : sadhana.guidelines.en).map((rule, idx) => (
              <li key={idx} className="flex items-start gap-2.5">
                <LucideCheckCircle2 className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                <span>{rule}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Benefits */}
        <div className="bg-white/80 border border-ink/6 rounded-[28px] p-6 sm:p-8">
          <div className="inline-flex items-center gap-2 text-xs font-bold text-gold uppercase tracking-wider mb-3">
            <LucideSparkles className="w-4 h-4" />
            <span>{isHi ? "साधना के दिव्य फल" : "Spiritual Fruits"}</span>
          </div>
          <h3 className="font-serif text-xl text-ink mb-4">
            {isHi ? "प्राप्त होने वाले अनुभव" : "Awakening & Blessings"}
          </h3>
          <ul className="space-y-2.5 text-xs sm:text-sm text-ink-soft">
            {(isHi ? sadhana.benefits.hi : sadhana.benefits.en).map((benefit, idx) => (
              <li key={idx} className="flex items-start gap-2.5">
                <LucideCheckCircle2 className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                <span>{benefit}</span>
              </li>
            ))}
          </ul>
        </div>
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
