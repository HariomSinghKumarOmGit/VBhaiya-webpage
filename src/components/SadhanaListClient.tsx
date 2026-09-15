"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { SADHANAS_DATA, SadhanaItem } from "@/data/sadhanas";
import { useLanguage } from "@/context/LanguageContext";
import {
  LucideSparkles,
  LucideCalendar,
  LucideClock,
  LucideFlame,
  LucideCheckCircle2,
  LucideExternalLink,
  LucideArrowRight,
  LucideX,
  LucideVolume2,
  LucideBookOpen,
  LucideShieldCheck,
  LucideSun,
} from "lucide-react";

export default function SadhanaListClient() {
  const { language } = useLanguage();
  const [selectedFilter, setSelectedFilter] = useState<string>("all");
  const [activeModalSadhana, setActiveModalSadhana] = useState<SadhanaItem | null>(null);
  const [japaCount, setJapaCount] = useState<number>(0);
  const [japaTarget, setJapaTarget] = useState<number>(108);

  const isHi = language === "hi";

  const filterOptions = [
    { id: "all", label: isHi ? "समस्त साधनाएं" : "All Sadhanas" },
    { id: "41-day-sadhana", label: isHi ? "41-दिवसीय साधना (4 सितंबर)" : "41-Day Sadhana (4th Sept)" },
    { id: "vishnu-bhagwan-sadhana", label: isHi ? "विष्णु भगवान साधना (21 दिन)" : "Vishnu Bhagwan (21 Days)" },
    { id: "durga-maa-sadhana", label: isHi ? "माँ दुर्गा साधना (33 दिन)" : "Durga Maa (33 Days)" },
  ];

  const filteredSadhanas = SADHANAS_DATA.filter((sadhana) => {
    if (selectedFilter === "all") return true;
    return sadhana.id === selectedFilter || sadhana.slug.includes(selectedFilter);
  });

  return (
    <div className="w-full">
      {/* ── Banner: 4th September 41-Day Sadhana Announcement ── */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative overflow-hidden rounded-[24px] sm:rounded-[32px] p-6 sm:p-10 mb-12 sm:mb-16 border border-gold/30 shadow-xl"
        style={{
          background: "linear-gradient(135deg, #20180F 0%, #15110B 50%, #2A1F13 100%)",
        }}
      >
        <div className="absolute top-0 right-0 w-80 h-80 bg-gold/10 rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold/15 text-gold text-xs font-semibold tracking-wider uppercase mb-3 border border-gold/25">
              <LucideSparkles className="w-3.5 h-3.5" />
              <span>{isHi ? "महासाधना अनुष्ठान" : "Core Sadhana Cycle"}</span>
            </div>
            <h2 className="font-serif text-2xl sm:text-4xl text-ivory leading-tight mb-3">
              {isHi ? (
                <>
                  <span className="text-gold">4 सितंबर</span> से प्रारंभ — 41 दिवसीय अखंड महासाधना
                </>
              ) : (
                <>
                  Starts <span className="text-gold">4th of September</span> · 41-Day Innerlight Sadhana
                </>
              )}
            </h2>
            <p className="text-ivory/70 text-sm sm:text-base leading-relaxed mb-4">
              {isHi
                ? "41 दिनों का यह पवित्र चक्र चेतना के रूपांतरण और आंतरिक शांति के लिए समर्पित है। प्रतिदिन रात्रि 8:00 बजे गूगल मीट पर लाइव साधना।"
                : "A sacred 41-day journey of unbroken meditation, pranayama, and mantra japa starting 4th of September. Transform your inner energy with daily 8:00 PM collective sits."}
            </p>
            <div className="flex items-center gap-3 text-xs sm:text-sm text-gold-soft flex-wrap">
              <span className="flex items-center gap-1.5 bg-white/5 px-3 py-1.5 rounded-lg border border-white/10">
                <LucideCalendar className="w-4 h-4 text-gold" />
                {isHi ? "प्रारंभ: 4 सितंबर · अवधि: 41 दिन" : "Starts: 4th Sept · Duration: 41 Days"}
              </span>
              <span className="flex items-center gap-1.5 bg-white/5 px-3 py-1.5 rounded-lg border border-white/10">
                <LucideClock className="w-4 h-4 text-gold" />
                {isHi ? "दैनिक लाइव: 8:00 PM - 9:00 PM" : "Daily Sit: 8:00 PM – 9:00 PM"}
              </span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row md:flex-col gap-3 shrink-0">
            <a
              href="https://meet.google.com/odv-evnd-mfy"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-gold hover:bg-[#A48039] text-ink font-semibold text-sm transition-all shadow-lg hover:shadow-gold/20"
            >
              <span>{isHi ? "गूगल मीट से जुड़ें" : "Join Daily Sit (Google Meet)"}</span>
              <LucideExternalLink className="w-4 h-4" />
            </a>
            <Link
              href="/programs/41-day-sadhana"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-white/10 hover:bg-white/15 text-ivory text-sm font-medium transition-colors border border-white/15"
            >
              <span>{isHi ? "विस्तृत विवरण देखें" : "Explore 41-Day Sadhana"}</span>
              <LucideArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </motion.div>

      {/* ── Category / Filter Tabs ── */}
      <div className="flex items-center gap-2 sm:gap-3 overflow-x-auto pb-4 mb-8 sm:mb-12 scrollbar-none">
        {filterOptions.map((filter) => (
          <button
            key={filter.id}
            onClick={() => setSelectedFilter(filter.id)}
            className={`px-4 sm:px-5 py-2.5 rounded-full text-xs sm:text-sm font-medium transition-all whitespace-nowrap cursor-pointer ${
              selectedFilter === filter.id
                ? "bg-ink text-ivory shadow-md"
                : "bg-white/70 hover:bg-white text-ink-soft border border-ink/5"
            }`}
          >
            {filter.label}
          </button>
        ))}
      </div>

      {/* ── Sadhana Cards Grid ── */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
        {filteredSadhanas.map((sadhana, idx) => (
          <motion.div
            key={sadhana.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="group bg-white/80 hover:bg-white border border-ink/8 rounded-[28px] sm:rounded-[32px] p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 hover:shadow-xl hover:-translate-y-1 relative overflow-hidden"
          >
            {/* Top Badge & Duration */}
            <div>
              <div className="flex items-center justify-between gap-3 mb-4 flex-wrap">
                <span
                  className="px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider"
                  style={{
                    backgroundColor: sadhana.badgeBg,
                    color: sadhana.accentColor,
                  }}
                >
                  {isHi ? sadhana.badgeHi : sadhana.badge}
                </span>

                <span className="inline-flex items-center gap-1.5 text-xs text-ink/70 font-medium bg-ivory-2 px-3 py-1 rounded-full">
                  <LucideCalendar className="w-3.5 h-3.5 text-gold" />
                  {isHi ? sadhana.startDateHi : sadhana.startDate}
                </span>
              </div>

              {/* Title & Deity */}
              <h3 className="font-serif text-2xl sm:text-3xl text-ink mb-1.5 group-hover:text-gold transition-colors">
                {isHi ? sadhana.titleHi : sadhana.title}
              </h3>
              <p className="text-xs uppercase tracking-widest text-gold font-semibold mb-4">
                {isHi ? sadhana.deityHi : sadhana.deity}
              </p>

              {/* Summary */}
              <p className="text-sm sm:text-base text-ink-soft leading-relaxed mb-6">
                {isHi ? sadhana.summaryHi : sadhana.summary}
              </p>

              {/* Sacred Mantra Box */}
              <div className="bg-[#FAF8F4] border border-ink/6 rounded-2xl p-4 sm:p-5 mb-6">
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="text-[0.68rem] tracking-wider uppercase text-gold font-bold">
                    {isHi ? "पवित्र महामंत्र" : "Sacred Mantra"}
                  </span>
                  <LucideVolume2 className="w-3.5 h-3.5 text-gold/80" />
                </div>
                <div className="font-devanagari text-base sm:text-lg text-ink font-medium leading-relaxed mb-1.5 whitespace-pre-line">
                  {sadhana.mantraDevanagari}
                </div>
                <div className="text-xs text-ink-soft/75 italic">
                  {isHi ? sadhana.mantraMeaningHi : sadhana.mantraMeaning}
                </div>
              </div>

              {/* Pillars preview */}
              <div className="grid grid-cols-2 gap-2.5 mb-6">
                {sadhana.pillars.slice(0, 2).map((pillar, pIdx) => (
                  <div key={pIdx} className="bg-ivory/50 rounded-xl p-3 border border-ink/4">
                    <div className="text-xs font-semibold text-ink mb-0.5">
                      {isHi ? pillar.titleHi : pillar.title}
                    </div>
                    <div className="text-[0.72rem] text-ink-soft leading-tight line-clamp-2">
                      {isHi ? pillar.descHi : pillar.desc}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="pt-4 border-t border-ink/6 flex items-center justify-between gap-3 flex-wrap">
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setActiveModalSadhana(sadhana)}
                  className="px-4 py-2 rounded-full bg-ink/5 hover:bg-ink/10 text-ink text-xs font-semibold tracking-wide transition-colors cursor-pointer"
                >
                  {isHi ? "त्वरित दर्शन" : "Quick Preview"}
                </button>
                <Link
                  href={`/programs/${sadhana.slug}`}
                  className="px-4 py-2 rounded-full bg-ink text-ivory hover:bg-gold text-xs font-semibold tracking-wide transition-colors flex items-center gap-1.5"
                >
                  <span>{isHi ? "संपूर्ण विधि" : "Full Guide"}</span>
                  <LucideArrowRight className="w-3 h-3" />
                </Link>
              </div>

              {sadhana.meetLink && (
                <a
                  href={sadhana.meetLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-gold hover:text-ink font-semibold flex items-center gap-1 transition-colors"
                >
                  <span>{isHi ? "मीट लिंक" : "Live Sit"}</span>
                  <LucideExternalLink className="w-3 h-3" />
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>

      {/* ── Interactive Japa Counter & Daily Practice Tool ── */}
      <div className="bg-white/90 border border-ink/8 rounded-[28px] sm:rounded-[36px] p-6 sm:p-10 mb-16 shadow-lg">
        <div className="max-w-2xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold/15 text-gold text-xs font-semibold uppercase tracking-wider mb-3">
            <LucideSun className="w-3.5 h-3.5" />
            <span>{isHi ? "दैनिक साधना जप काउंटर" : "Daily Sadhana Japa Companion"}</span>
          </div>
          <h3 className="font-serif text-2xl sm:text-3xl text-ink mb-2">
            {isHi ? "108 मनके दिव्य जप माला" : "Sacred 108 Bead Japa Tracker"}
          </h3>
          <p className="text-xs sm:text-sm text-ink-soft mb-6">
            {isHi
              ? "विष्णु साधना (21 दिन), दुर्गा साधना (33 दिन) या 41-दिवसीय महासाधना के दौरान अपने मंत्र जप की गणना करें।"
              : "Use this serene japa counter for your daily mantra sit during the 21-Day Vishnu, 33-Day Durga, or 41-Day Sadhana."}
          </p>

          <div className="flex flex-col items-center justify-center my-6">
            <button
              onClick={() => setJapaCount((prev) => (prev + 1) % (japaTarget + 1))}
              className="w-32 h-32 sm:w-40 sm:h-40 rounded-full border-4 border-gold/40 hover:border-gold bg-[#FAF8F4] flex flex-col items-center justify-center transition-transform active:scale-95 shadow-inner cursor-pointer"
            >
              <span className="font-serif text-3xl sm:text-4xl text-ink font-bold">{japaCount}</span>
              <span className="text-[0.68rem] tracking-widest text-gold uppercase font-bold mt-1">
                / {japaTarget} {isHi ? "मनके" : "Beads"}
              </span>
            </button>
            <div className="text-xs text-ink-soft mt-3 font-medium">
              {isHi ? "जप के लिए टैप करें" : "Tap circle with each mantra recitation"}
            </div>
          </div>

          <div className="flex items-center justify-center gap-3">
            <button
              onClick={() => setJapaCount(0)}
              className="px-4 py-1.5 rounded-full text-xs font-medium text-ink-soft hover:bg-ink/5 border border-ink/10 transition-colors cursor-pointer"
            >
              {isHi ? "रीसेट करें" : "Reset Count"}
            </button>
            <button
              onClick={() => setJapaTarget(japaTarget === 108 ? 1008 : 108)}
              className="px-4 py-1.5 rounded-full text-xs font-medium bg-gold/15 text-gold hover:bg-gold/25 transition-colors cursor-pointer"
            >
              {isHi ? `लक्ष्य: ${japaTarget}` : `Target: ${japaTarget}`}
            </button>
          </div>
        </div>
      </div>

      {/* ── Quick Preview Modal ── */}
      <AnimatePresence>
        {activeModalSadhana && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveModalSadhana(null)}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[300] flex items-center justify-center p-4 sm:p-6"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-ivory w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-[28px] sm:rounded-[36px] p-6 sm:p-8 shadow-2xl border border-white/60 relative scrollbar-none"
            >
              <button
                onClick={() => setActiveModalSadhana(null)}
                className="absolute top-5 right-5 p-2 rounded-full bg-ink/5 hover:bg-ink/10 text-ink transition-colors cursor-pointer"
              >
                <LucideX className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-2 mb-2">
                <span
                  className="px-3 py-0.5 rounded-full text-[0.7rem] font-bold uppercase tracking-wider"
                  style={{
                    backgroundColor: activeModalSadhana.badgeBg,
                    color: activeModalSadhana.accentColor,
                  }}
                >
                  {isHi ? activeModalSadhana.badgeHi : activeModalSadhana.badge}
                </span>
                <span className="text-xs text-ink-soft">
                  {isHi ? activeModalSadhana.startDateHi : activeModalSadhana.startDate}
                </span>
              </div>

              <h2 className="font-serif text-2xl sm:text-3xl text-ink mb-1">
                {isHi ? activeModalSadhana.titleHi : activeModalSadhana.title}
              </h2>
              <p className="text-xs uppercase tracking-widest text-gold font-semibold mb-4">
                {isHi ? activeModalSadhana.deityHi : activeModalSadhana.deity}
              </p>

              {/* Mantra block */}
              <div className="bg-white rounded-2xl p-4 sm:p-5 border border-ink/6 mb-5">
                <div className="text-[0.68rem] uppercase tracking-wider text-gold font-bold mb-1">
                  {isHi ? "मंत्र साधना" : "Mantra Practice"}
                </div>
                <div className="font-devanagari text-base sm:text-lg text-ink font-semibold whitespace-pre-line mb-1">
                  {activeModalSadhana.mantraDevanagari}
                </div>
                <div className="text-xs text-ink-soft/80 italic">
                  {isHi ? activeModalSadhana.mantraMeaningHi : activeModalSadhana.mantraMeaning}
                </div>
              </div>

              {/* Daily Schedule */}
              <div className="mb-5">
                <h4 className="font-serif text-base text-ink mb-3 font-semibold">
                  {isHi ? "दैनिक साधना समय-सारणी" : "Daily Practice Routine"}
                </h4>
                <div className="space-y-2">
                  {activeModalSadhana.dailySchedule.map((item, idx) => (
                    <div key={idx} className="bg-white/70 rounded-xl p-3 border border-ink/4 flex gap-3 text-xs">
                      <span className="font-bold text-gold shrink-0">{item.time}</span>
                      <div>
                        <div className="font-semibold text-ink">{isHi ? item.activityHi : item.activity}</div>
                        <div className="text-ink-soft/80 mt-0.5">{isHi ? item.detailsHi : item.details}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Guidelines */}
              <div className="mb-6">
                <h4 className="font-serif text-base text-ink mb-2 font-semibold">
                  {isHi ? "साधना नियम व मर्यादा" : "Sadhana Guidelines"}
                </h4>
                <ul className="space-y-1.5 text-xs text-ink-soft">
                  {(isHi ? activeModalSadhana.guidelines.hi : activeModalSadhana.guidelines.en).map((rule, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <LucideCheckCircle2 className="w-3.5 h-3.5 text-gold shrink-0 mt-0.5" />
                      <span>{rule}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Modal Actions */}
              <div className="flex items-center justify-between gap-3 pt-4 border-t border-ink/8">
                <a
                  href={activeModalSadhana.meetLink || "https://meet.google.com/odv-evnd-mfy"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 rounded-full bg-gold hover:bg-[#9E7C35] text-ink font-semibold text-xs transition-colors flex items-center gap-1.5"
                >
                  <span>{isHi ? "गूगल मीट से जुड़ें" : "Join Google Meet"}</span>
                  <LucideExternalLink className="w-3.5 h-3.5" />
                </a>

                <Link
                  href={`/programs/${activeModalSadhana.slug}`}
                  className="px-5 py-2.5 rounded-full bg-ink text-ivory hover:bg-gold text-xs font-semibold tracking-wide transition-colors"
                >
                  {isHi ? "पूर्ण विवरण पृष्ठ →" : "View Full Guide Page →"}
                </Link>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
