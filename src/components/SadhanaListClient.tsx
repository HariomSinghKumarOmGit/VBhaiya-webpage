"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { SADHANAS_DATA, SadhanaItem } from "@/data/sadhanas";
import { useLanguage } from "@/context/LanguageContext";
import DayTracker from "@/components/DayTracker";
import ThreeMonthSadhanaPlan from "@/components/ThreeMonthSadhanaPlan";
import {
  LucideSparkles,
  LucideCalendar,
  LucideClock,
  LucideFlame,
  LucideCheckCircle2,
  LucideExternalLink,
  LucideArrowRight,
  LucideArrowLeft,
  LucideX,
  LucideVolume2,
  LucideShieldCheck,
  LucideChevronDown,
} from "lucide-react";

export default function SadhanaListClient() {
  const router = useRouter();
  const { language } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [activeModalSadhana, setActiveModalSadhana] = useState<SadhanaItem | null>(null);
  const [showFullPlan, setShowFullPlan] = useState<boolean>(false);

  const isHi = language === "hi";

  const closeModal = () => {
    setActiveModalSadhana(null);
  };

  const openModal = (sadhana: SadhanaItem) => {
    setActiveModalSadhana(sadhana);
    if (typeof window !== "undefined") {
      window.history.pushState({ modal: "sadhanaPreview" }, "");
    }
  };

  // Keyboard navigation for preview modal (Esc / Backspace)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const isInput = ["INPUT", "TEXTAREA", "SELECT"].includes((e.target as HTMLElement)?.tagName);
      if (activeModalSadhana) {
        if (e.key === "Escape" || (e.key === "Backspace" && !isInput)) {
          e.preventDefault();
          closeModal();
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeModalSadhana]);

  // Browser back handling to close modal
  useEffect(() => {
    const handlePopState = () => {
      if (activeModalSadhana) {
        closeModal();
      }
    };
    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, [activeModalSadhana]);

  const categoryOptions = [
    { id: "all", label: isHi ? "समस्त साधनाएं" : "All Sadhanas & Cycles" },
    { id: "core", label: isHi ? "3-माह व मुख्य संकल्प" : "3-Month & Core Cycles" },
    { id: "devi", label: isHi ? "श्री यंत्र व देवी साधनाएं" : "Sri Yantra & Devi Sadhanas" },
    { id: "remedies", label: isHi ? "उपाय, हवन व दीवाली" : "Remedies & Diwali Havan" },
  ];

  const filteredSadhanas = SADHANAS_DATA.filter((sadhana) => {
    if (selectedCategory === "all") return true;
    return sadhana.category === selectedCategory || sadhana.id.includes(selectedCategory);
  });

  return (
    <div className="w-full">
      {/* ── Active Banner: Month 01 Var Siddhi Vinayak Ganesha Sadhana Announcement ── */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative overflow-hidden rounded-[24px] sm:rounded-[32px] p-6 sm:p-10 mb-10 border border-[#D57C3B]/40 shadow-xl"
        style={{
          background: "linear-gradient(135deg, #1C0F05 0%, #291508 50%, #150903 100%)",
        }}
      >
        <div className="absolute top-0 right-0 w-80 h-80 bg-[#D57C3B]/15 rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#D57C3B]/20 text-[#FCD8A5] text-xs font-semibold tracking-wider uppercase mb-3 border border-[#D57C3B]/30">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>{isHi ? "वर्तमान में सक्रिय · प्रथम माह" : "Currently Active · Month 01"}</span>
            </div>
            <h2 className="font-serif text-2xl sm:text-4xl text-ivory leading-tight mb-3">
              {isHi ? (
                <>
                  <span className="text-[#F5AC00]">वरसिद्धि विनायक साधना</span> प्रारंभ — बैच 2024 · 2025 · 2026
                </>
              ) : (
                <>
                  <span className="text-[#F5AC00]">Var Siddhi Vinayak Sadhana</span> is Active · Batches 2024 · 2025 · 2026
                </>
              )}
            </h2>
            <p className="text-ivory/75 text-sm sm:text-base leading-relaxed mb-4">
              {isHi
                ? "तीन महीने की साधना योजना के अंतर्गत भगवान श्री गणेश को समर्पित 21 दिवसीय पावन अनुष्ठान प्रारंभ हो चुका है। सिद्ध मंत्र 'ॐ श्रीं ह्रीं क्लीं ग्लौं गं वरसिद्धि विनायकाय नमः' का 70% मानसिक व 30% फुसफुसाकर जप करें। शनिवार व रविवार को सामूहिक लाइव ध्यान।"
                : "Month 01 of the Three-Month Sadhana Plan dedicated to Lord Ganesha (Var Siddhi Vinayak) has officially begun. Practice 300–1,000 daily mantras (70% Mental + 30% Whispering Jaap) with Thursday–Saturday 3-diya process and Saturday–Sunday collective sits."}
            </p>
            <div className="flex items-center gap-3 text-xs sm:text-sm text-gold-soft flex-wrap">
              <span className="flex items-center gap-1.5 bg-white/5 px-3 py-1.5 rounded-lg border border-white/10 text-[#FCD8A5]">
                <LucideCalendar className="w-4 h-4 text-[#D57C3B]" />
                {isHi ? "अवधि: 21 दिन अखंड संकल्प" : "Duration: 21-Day Sankalp"}
              </span>
              <span className="flex items-center gap-1.5 bg-white/5 px-3 py-1.5 rounded-lg border border-white/10 text-[#FCD8A5]">
                <LucideClock className="w-4 h-4 text-[#D57C3B]" />
                {isHi ? "लाइव मीट: केवल शनि व रवि (8:00 - 9:00 PM)" : "Live Zoom/Meet: Sat & Sun (8:00–9:00 PM)"}
              </span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row md:flex-col gap-2.5 shrink-0">
            <button
              type="button"
              onClick={() => setShowFullPlan((prev) => !prev)}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#D57C3B] hover:bg-[#B8652A] text-white font-semibold text-sm transition-all shadow-lg hover:shadow-[#D57C3B]/20 cursor-pointer"
            >
              <span>
                {showFullPlan
                  ? (isHi ? "विवरण बंद करें ▲" : "Hide Full Details ▲")
                  : (isHi ? "संपूर्ण विवरण देखें ▼" : "Show Full Details ▼")}
              </span>
              <LucideChevronDown
                className={`w-4 h-4 transition-transform duration-300 ${
                  showFullPlan ? "rotate-180" : ""
                }`}
              />
            </button>
            <a
              href="https://meet.google.com/odv-evnd-mfy"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full bg-white/10 hover:bg-white/15 text-ivory text-xs sm:text-sm font-medium transition-colors border border-white/15"
            >
              <span>{isHi ? "ज़ूम/मीट (शनि-रवि 8 PM)" : "Zoom / Meet (Sat & Sun 8 PM)"}</span>
              <LucideExternalLink className="w-3.5 h-3.5" />
            </a>
            <a
              href="https://wa.me/918818098688?text=Namaste%20Vishal%20Bhaiya,%20I%20would%20like%20to%20join%20the%20everyday%20personal%20session%20of%20Jaap%20and%20Dhyan."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full bg-[#25D366]/20 hover:bg-[#25D366]/30 text-[#A7F3D0] text-xs font-semibold transition-colors border border-[#25D366]/40 cursor-pointer"
            >
              <span>{isHi ? "दैनिक 1-ऑन-1 सत्र (व्हाट्सएप)" : "Everyday 1-on-1 (WhatsApp)"}</span>
              <LucideExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* ── Expandable Interactive Tab Bar at bottom of banner ── */}
        <button
          type="button"
          onClick={() => setShowFullPlan((prev) => !prev)}
          className="w-full mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-[#FCD8A5] hover:text-white transition-colors cursor-pointer group text-left"
        >
          <span className="flex items-center gap-2 font-medium tracking-wide">
            <LucideSparkles className="w-3.5 h-3.5 text-[#F5AC00]" />
            {isHi
              ? (showFullPlan ? "3-महीने की साधना का विस्तृत विवरण छुपाएं" : "3-महीने की साधना का संपूर्ण विवरण (नियम, मंत्र, मंदिर विधि) देखें")
              : (showFullPlan ? "Hide complete 3-Month Sadhana Plan & guidelines" : "Click here to expand complete 3-Month Sadhana Plan & guidelines")}
          </span>
          <span className="flex items-center gap-1 font-semibold uppercase text-[0.7rem] bg-white/10 group-hover:bg-white/20 px-3 py-1 rounded-full transition-colors shrink-0 ml-2">
            {showFullPlan ? (isHi ? "बंद करें ▲" : "Collapse ▲") : (isHi ? "खोलें ▼" : "Expand ▼")}
          </span>
        </button>
      </motion.div>

      {/* ── Complete Three-Month Sadhana Plan Section (Collapsible) ── */}
      <AnimatePresence>
        {showFullPlan && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="overflow-hidden mb-10"
          >
            <ThreeMonthSadhanaPlan />
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Section Title: All Sadhanas Archive & Exploration ── */}
      <div className="mb-6 pt-6 border-t border-ink/8">
        <h3 className="font-serif text-2xl sm:text-3xl text-ink font-medium">
          {isHi ? "समस्त साधनाएं व अनुष्ठान संग्रह" : "All Sadhanas & Spiritual Cycles"}
        </h3>
        <p className="text-xs sm:text-sm text-ink-soft mt-1">
          {isHi
            ? "विभिन्न देवी-देवताओं के लिए निर्धारित संपूर्ण साधना चक्र एवं विस्तृत मार्गदर्शिकाएं।"
            : "Explore full guidelines, daily schedules, and mantra disciplines for each sacred cycle."}
        </p>
      </div>

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
              <div className="bg-[#FAF8F4] border border-ink/6 rounded-2xl p-4 sm:p-5 mb-4">
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

              {/* Healer Advisory Notice / Disclaimer */}
              <div className="flex items-center gap-2.5 text-xs sm:text-[0.78rem] text-amber-950 font-medium bg-amber-500/10 border border-amber-500/25 px-3.5 py-2.5 rounded-xl shadow-2xs">
                <LucideShieldCheck className="w-4 h-4 text-[#B8934A] shrink-0" />
                <span>
                  {isHi
                    ? "विशेष सूचना: साधना प्रारंभ करने से पूर्व अपने हीलर / मार्गदर्शक से परामर्श अवश्य लें।"
                    : "Contact healer / mentor before starting this sadhana."}
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* ── Interactive Universal Day Tracker (Active 21-Day Cycle) ── */}
      <div className="mb-16">
        <DayTracker
          sadhanaId="var-siddhi-vinayak-tracker"
          sadhanaTitle="Var Siddhi Vinayak 21-Day Tracker"
          sadhanaTitleHi="वरसिद्धि विनायक 21-दिवसीय ट्रैकर"
          defaultDays={21}
          accentColor="#D57C3B"
        />
      </div>

      {/* ── Quick Preview Modal ── */}
      <AnimatePresence>
        {activeModalSadhana && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
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
                onClick={closeModal}
                className="absolute top-5 right-5 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-ink/5 hover:bg-ink/10 text-ink text-xs font-semibold transition-colors cursor-pointer"
                title="Close / Back (Esc)"
              >
                <span>{isHi ? "बंद करें" : "Close"}</span>
                <LucideX className="w-4 h-4" />
              </button>

              <div className="flex items-center gap-2 mb-2 pr-20">
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
              <div className="flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-ink/8">
                <button
                  type="button"
                  onClick={closeModal}
                  className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full bg-white hover:bg-stone-100 border border-ink/10 text-ink text-xs font-semibold transition-colors cursor-pointer"
                >
                  <LucideArrowLeft className="w-3.5 h-3.5" />
                  <span>{isHi ? "← वापस (Esc)" : "← Back (Esc)"}</span>
                </button>

                <div className="flex items-center gap-2">
                  <a
                    href={activeModalSadhana.meetLink || "https://meet.google.com/odv-evnd-mfy"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2.5 rounded-full bg-gold hover:bg-[#9E7C35] text-ink font-semibold text-xs transition-colors flex items-center gap-1.5"
                  >
                    <span>{isHi ? "मीट लिंक" : "Join Meet"}</span>
                    <LucideExternalLink className="w-3.5 h-3.5" />
                  </a>

                  <Link
                    href={`/programs/${activeModalSadhana.slug}`}
                    className="px-4 py-2.5 rounded-full bg-ink text-ivory hover:bg-gold text-xs font-semibold tracking-wide transition-colors"
                  >
                    {isHi ? "पूर्ण पृष्ठ →" : "Full Guide →"}
                  </Link>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
