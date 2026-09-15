"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { SADHANAS_DATA, SadhanaItem } from "@/data/sadhanas";
import { useLanguage } from "@/context/LanguageContext";
import DayTracker from "@/components/DayTracker";
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
  LucideShieldCheck,
} from "lucide-react";

export default function SadhanaListClient() {
  const router = useRouter();
  const { language } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [activeModalSadhana, setActiveModalSadhana] = useState<SadhanaItem | null>(null);

  const isHi = language === "hi";

  const categoryOptions = [
    { id: "all", label: isHi ? "समस्त साधनाएं" : "All Sadhanas & Cycles" },
    { id: "core", label: isHi ? "मुख्य व संकल्प साधनाएं" : "Core & Sankalp Cycles" },
    { id: "devi", label: isHi ? "श्री यंत्र व देवी साधनाएं" : "Sri Yantra & Devi Sadhanas" },
    { id: "akhand_jyot", label: isHi ? "अखण्ड ज्योति (3 दीपक)" : "Akhand Jyot (3 Diyas)" },
    { id: "remedies", label: isHi ? "उपाय, हवन व दीवाली" : "Remedies & Diwali Havan" },
  ];

  const filteredSadhanas = SADHANAS_DATA.filter((sadhana) => {
    if (selectedCategory === "all") return true;
    return sadhana.category === selectedCategory || sadhana.id.includes(selectedCategory);
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
              <span>{isHi ? "सालंगपुर हनुमान महासाधना" : "Salangpur Hanuman Mahasadhana"}</span>
            </div>
            <h2 className="font-serif text-2xl sm:text-4xl text-ivory leading-tight mb-3">
              {isHi ? (
                <>
                  <span className="text-gold">4 सितंबर</span> से प्रारंभ — सालंगपुर हनुमान जी महासाधना
                </>
              ) : (
                <>
                  Starts <span className="text-gold">4th of September</span> · Salangpur Hanuman Ji Sadhana
                </>
              )}
            </h2>
            <p className="text-ivory/70 text-sm sm:text-base leading-relaxed mb-4">
              {isHi
                ? "सालंगपुर हनुमान जी के पावन भयभंजन महामंत्र 'ॐ नमो हनुमते भयभंजनाय सुखं कुरु फट् स्वाहा' को समर्पित अखंड आध्यात्मिक अनुष्ठान। प्रतिदिन रात्रि 8:00 बजे गूगल मीट पर लाइव साधना।"
                : "A sacred unbroken journey dedicated to the Salangpur Hanuman Ji Bhayabhanjana Mantra (Om Namo Hanumate Bhayabhanjanaya Sukham Kuru Phat Swaha) starting 4th of September. Transform your prana with daily 8:00 PM collective sits."}
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
        {categoryOptions.map((filter) => (
          <button
            key={filter.id}
            onClick={() => setSelectedCategory(filter.id)}
            className={`px-4 sm:px-5 py-2.5 rounded-full text-xs sm:text-sm font-medium transition-all whitespace-nowrap cursor-pointer ${
              selectedCategory === filter.id
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
            transition={{ duration: 0.5, delay: idx * 0.08 }}
            onClick={() => router.push(`/programs/${sadhana.slug}`)}
            className="group bg-white/80 hover:bg-white border border-ink/8 rounded-[28px] sm:rounded-[32px] p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 hover:shadow-xl hover:-translate-y-1 relative overflow-hidden cursor-pointer"
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
              <div className="bg-[#FAF8F4] border border-ink/6 rounded-2xl p-4 sm:p-5 mb-5">
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
            </div>
          </motion.div>
        ))}
      </div>

      {/* ── Interactive Universal Day Tracker (Replacing Holy Counter) ── */}
      <div className="mb-16">
        <DayTracker
          sadhanaId="universal-day-tracker"
          sadhanaTitle="Sadhana Day Tracker"
          sadhanaTitleHi="साधना दिवस ट्रैकर"
          defaultDays={41}
          accentColor="#B8934A"
        />
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
