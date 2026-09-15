"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import {
  LucideCalendarCheck2,
  LucideSparkles,
  LucideRotateCcw,
  LucideCheck,
  LucideFlame,
  LucideSun,
  LucideTrophy,
  LucideScissors,
  LucidePlus,
  LucideCalendar,
  LucideShieldCheck,
} from "lucide-react";

interface DayTrackerProps {
  sadhanaId?: string;
  sadhanaTitle?: string;
  sadhanaTitleHi?: string;
  defaultDays?: number;
  accentColor?: string;
}

const PRESET_DAYS = [3, 7, 9, 11, 21, 33, 40, 41, 108];

export default function DayTracker({
  sadhanaId = "general-tracker",
  sadhanaTitle = "Sadhana Day Tracker",
  sadhanaTitleHi = "साधना दिवस ट्रैकर (संकल्प गणना)",
  defaultDays = 41,
  accentColor = "#B8934A",
}: DayTrackerProps) {
  const { language } = useLanguage();
  const isHi = language === "hi";

  const [totalDays, setTotalDays] = useState<number>(defaultDays);
  const [completedDays, setCompletedDays] = useState<Set<number>>(new Set());
  const [isCascading, setIsCascading] = useState<boolean>(false);
  const [showCelebration, setShowCelebration] = useState<boolean>(false);
  const [isCustomInputOpen, setIsCustomInputOpen] = useState<boolean>(false);
  const [customDaysInput, setCustomDaysInput] = useState<string>(defaultDays.toString());
  const [startDate, setStartDate] = useState<string>(() => {
    const today = new Date();
    return today.toISOString().split("T")[0];
  });

  const storageKey = `innerlight_day_tracker_${sadhanaId}`;

  // Load state from localStorage
  useEffect(() => {
    try {
      const saved = localStorage.getItem(storageKey);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (typeof parsed.totalDays === "number") setTotalDays(parsed.totalDays);
        if (Array.isArray(parsed.completed)) {
          const set = new Set<number>(parsed.completed);
          setCompletedDays(set);
        }
        if (parsed.startDate) setStartDate(parsed.startDate);
      }
    } catch (e) {
      console.warn("Failed to load tracker progress", e);
    }
  }, [storageKey]);

  // Save state to localStorage
  const saveProgress = (newSet: Set<number>, newTotal: number, newStart: string) => {
    try {
      localStorage.setItem(
        storageKey,
        JSON.stringify({
          totalDays: newTotal,
          completed: Array.from(newSet),
          startDate: newStart,
          lastUpdated: new Date().toISOString(),
        })
      );
    } catch (e) {
      console.warn("Failed to save tracker progress", e);
    }
  };

  // Toggle single day cut/check
  const toggleDay = (dayNum: number) => {
    setCompletedDays((prev) => {
      const next = new Set(prev);
      if (next.has(dayNum)) {
        next.delete(dayNum);
      } else {
        next.add(dayNum);
      }
      saveProgress(next, totalDays, startDate);

      // Check if all completed
      if (next.size === totalDays && totalDays > 0) {
        setShowCelebration(true);
      }
      return next;
    });
  };

  // Mark next pending day
  const markNextDay = () => {
    for (let i = 1; i <= totalDays; i++) {
      if (!completedDays.has(i)) {
        toggleDay(i);
        break;
      }
    }
  };

  // Cascade cut all dates with wave animation
  const cutAllDatesWithAnimation = async () => {
    if (isCascading) return;
    setIsCascading(true);

    const newSet = new Set(completedDays);
    const delayStep = Math.max(15, Math.min(60, 1500 / totalDays));

    for (let i = 1; i <= totalDays; i++) {
      if (!newSet.has(i)) {
        newSet.add(i);
        setCompletedDays(new Set(newSet));
        await new Promise((res) => setTimeout(res, delayStep));
      }
    }

    setIsCascading(false);
    saveProgress(newSet, totalDays, startDate);
    setShowCelebration(true);
  };

  // Reset tracker
  const resetTracker = () => {
    const empty = new Set<number>();
    setCompletedDays(empty);
    setShowCelebration(false);
    saveProgress(empty, totalDays, startDate);
  };

  // Change total days count
  const handleSetTotalDays = (count: number) => {
    const validCount = Math.max(1, Math.min(365, count));
    setTotalDays(validCount);
    setCustomDaysInput(validCount.toString());
    // Filter out any days beyond the new total
    const nextSet = new Set<number>();
    completedDays.forEach((d) => {
      if (d <= validCount) nextSet.add(d);
    });
    setCompletedDays(nextSet);
    saveProgress(nextSet, validCount, startDate);
    setIsCustomInputOpen(false);
  };

  const completedCount = completedDays.size;
  const progressPercent = totalDays > 0 ? Math.min(100, Math.round((completedCount / totalDays) * 100)) : 0;
  const remainingDays = Math.max(0, totalDays - completedCount);

  // Calculate projected finish date
  const calculateTargetDate = () => {
    try {
      const s = new Date(startDate);
      s.setDate(s.getDate() + totalDays - 1);
      return s.toLocaleDateString(isHi ? "hi-IN" : "en-IN", {
        day: "numeric",
        month: "short",
        year: "numeric",
      });
    } catch {
      return "";
    }
  };

  return (
    <div className="w-full bg-[#FAF8F4] border border-gold/30 rounded-[28px] sm:rounded-[36px] p-6 sm:p-10 shadow-lg relative overflow-hidden">
      {/* Background Sacred Ambient Glow */}
      <div
        className="absolute top-0 right-0 w-80 h-80 rounded-full blur-3xl opacity-15 pointer-events-none"
        style={{ background: accentColor }}
      />
      <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full blur-3xl opacity-10 pointer-events-none bg-gold" />

      {/* ── Top Header ── */}
      <div className="relative z-10">
        <div className="flex items-center justify-between gap-3 mb-4 flex-wrap">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-gold/15 text-gold text-xs font-bold uppercase tracking-wider border border-gold/25">
            <LucideCalendarCheck2 className="w-3.5 h-3.5" />
            <span>{isHi ? "दिव्य साधना दिवस ट्रैकर" : "Sacred Sadhana Day Tracker"}</span>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs text-ink-soft bg-white/80 px-3 py-1 rounded-full border border-ink/5">
              {isHi ? `संकल्प लक्ष्य: ${totalDays} दिन` : `Sankalp Goal: ${totalDays} Days`}
            </span>
          </div>
        </div>

        <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl text-ink font-semibold mb-2">
          {isHi ? sadhanaTitleHi : sadhanaTitle}
        </h3>

        <p className="text-xs sm:text-sm text-ink-soft max-w-xl mb-6">
          {isHi
            ? "प्रतिदिन साधना पूर्ण होने पर उस दिन के चक्र को स्पर्श करके काटें। यह दृश्य संकल्प आपके मन में अटूट अनुशासन स्थापित करता है।"
            : "Mark each completed day with a sacred strike-through animation. Track your unbroken commitment from Day 1 to final completion."}
        </p>

        {/* ── Days Selector & Preset Badges ── */}
        <div className="bg-white/90 rounded-2xl p-4 sm:p-5 border border-ink/6 mb-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-ink block mb-2">
                {isHi ? "साधना चक्र अवधि चुनें (दिन):" : "Choose Sadhana Duration:"}
              </span>
              <div className="flex items-center gap-1.5 sm:gap-2 flex-wrap">
                {PRESET_DAYS.map((days) => (
                  <button
                    key={days}
                    onClick={() => handleSetTotalDays(days)}
                    className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                      totalDays === days
                        ? "bg-gold text-ink shadow-md scale-105"
                        : "bg-ivory hover:bg-gold/15 text-ink-soft border border-ink/10"
                    }`}
                  >
                    {days} {isHi ? "दिन" : "D"}
                  </button>
                ))}

                <button
                  onClick={() => setIsCustomInputOpen(!isCustomInputOpen)}
                  className={`px-3 py-1.5 rounded-full text-xs font-semibold border transition-colors flex items-center gap-1 cursor-pointer ${
                    isCustomInputOpen
                      ? "bg-ink text-ivory border-ink"
                      : "bg-ivory hover:bg-ink/5 text-ink border-ink/15"
                  }`}
                >
                  <LucidePlus className="w-3 h-3" />
                  <span>{isHi ? "अन्य" : "Custom"}</span>
                </button>
              </div>
            </div>

            {/* Custom Input Dropdown */}
            {isCustomInputOpen && (
              <motion.div
                initial={{ opacity: 0, y: -5 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center gap-2 bg-ivory p-2 rounded-xl border border-gold/40"
              >
                <input
                  type="number"
                  min="1"
                  max="365"
                  value={customDaysInput}
                  onChange={(e) => setCustomDaysInput(e.target.value)}
                  placeholder="e.g. 41"
                  className="w-20 px-2.5 py-1 text-sm bg-white rounded-lg border border-ink/10 text-ink font-mono font-bold focus:outline-none focus:border-gold"
                />
                <button
                  onClick={() => {
                    const parsed = parseInt(customDaysInput, 10);
                    if (!isNaN(parsed) && parsed > 0) {
                      handleSetTotalDays(parsed);
                    }
                  }}
                  className="px-3 py-1 bg-gold text-ink text-xs font-bold rounded-lg hover:bg-[#A48039] transition-colors cursor-pointer"
                >
                  {isHi ? "लागू करें" : "Apply"}
                </button>
              </motion.div>
            )}
          </div>
        </div>

        {/* ── Progress Statistics Card ── */}
        <div className="bg-gradient-to-br from-white to-[#F9F6EE] rounded-2xl sm:rounded-3xl p-5 sm:p-6 border border-gold/25 shadow-sm mb-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
            <div className="flex items-center gap-3">
              <div
                className="w-12 h-12 rounded-2xl flex items-center justify-center font-serif text-xl font-bold shadow-inner"
                style={{
                  backgroundColor: `${accentColor}20`,
                  color: accentColor,
                  border: `1px solid ${accentColor}40`,
                }}
              >
                {progressPercent}%
              </div>
              <div>
                <div className="font-serif text-xl text-ink font-bold">
                  {completedCount} / {totalDays} {isHi ? "दिन पूर्ण" : "Days Completed"}
                </div>
                <div className="text-xs text-ink-soft">
                  {remainingDays > 0 ? (
                    isHi ? (
                      <>
                        शेष: <span className="font-bold text-gold">{remainingDays} दिन</span> · पूर्णता अनुमान:{" "}
                        {calculateTargetDate()}
                      </>
                    ) : (
                      <>
                        <span className="font-bold text-gold">{remainingDays} days remaining</span> · Target:{" "}
                        {calculateTargetDate()}
                      </>
                    )
                  ) : (
                    <span className="text-green-700 font-bold flex items-center gap-1">
                      <LucideShieldCheck className="w-3.5 h-3.5" />
                      {isHi ? "महा अनुष्ठान पूर्ण हुआ!" : "Sankalp Fully Completed!"}
                    </span>
                  )}
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center gap-2 flex-wrap">
              <button
                onClick={markNextDay}
                disabled={completedCount >= totalDays || isCascading}
                className="px-4 py-2 rounded-full bg-gold hover:bg-[#A48039] disabled:opacity-40 text-ink font-semibold text-xs transition-all shadow-sm flex items-center gap-1.5 cursor-pointer"
              >
                <LucideCheck className="w-3.5 h-3.5" />
                <span>{isHi ? "आज का दिन काटें (+1)" : "Cut Today (+1)"}</span>
              </button>

              <button
                onClick={cutAllDatesWithAnimation}
                disabled={isCascading || completedCount >= totalDays}
                className="px-4 py-2 rounded-full bg-ink text-ivory hover:bg-[#332215] disabled:opacity-40 font-semibold text-xs transition-all flex items-center gap-1.5 cursor-pointer"
              >
                <LucideScissors className="w-3.5 h-3.5 text-gold" />
                <span>
                  {isCascading
                    ? isHi
                      ? "कटिंग हो रही है..."
                      : "Slashing Dates..."
                    : isHi
                    ? "सभी दिन काटें (एनिमेशन)"
                    : "Cut All Dates (Wave)"}
                </span>
              </button>

              <button
                onClick={resetTracker}
                className="p-2 rounded-full bg-ivory hover:bg-ink/5 text-ink-soft border border-ink/10 transition-colors cursor-pointer"
                title={isHi ? "रीसेट करें" : "Reset Progress"}
              >
                <LucideRotateCcw className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="w-full bg-ink/5 rounded-full h-3.5 overflow-hidden p-0.5 border border-ink/10 relative">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${progressPercent}%` }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="h-full rounded-full relative overflow-hidden"
              style={{
                background: `linear-gradient(90deg, ${accentColor} 0%, #D4A85A 50%, ${accentColor} 100%)`,
              }}
            >
              {/* Shimmer animation */}
              <div className="absolute inset-0 bg-white/25 animate-pulse" />
            </motion.div>
          </div>
        </div>

        {/* ── Interactive Day Grid / Stamp Cards ── */}
        <div className="mb-4">
          <div className="flex items-center justify-between mb-3 text-xs text-ink-soft">
            <span className="font-semibold uppercase tracking-wider">
              {isHi ? "दैनिक तिथि चक्र (स्पर्श करके काटें):" : "Daily Milestones (Tap to Cut/Check):"}
            </span>
            <span>
              {completedCount} of {totalDays} marked
            </span>
          </div>

          <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-10 gap-2.5 sm:gap-3 max-h-[460px] overflow-y-auto p-1 pr-2 scrollbar-thin">
            {Array.from({ length: totalDays }, (_, idx) => {
              const dayNum = idx + 1;
              const isCut = completedDays.has(dayNum);

              return (
                <motion.button
                  key={dayNum}
                  onClick={() => toggleDay(dayNum)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.92 }}
                  className={`relative h-14 sm:h-16 rounded-xl sm:rounded-2xl border transition-all duration-300 flex flex-col items-center justify-center p-1 select-none overflow-hidden cursor-pointer ${
                    isCut
                      ? "bg-gradient-to-br from-[#F5EFE0] to-[#EBE0C5] border-gold/60 shadow-inner"
                      : "bg-white hover:bg-ivory border-ink/10 hover:border-gold/50 shadow-sm"
                  }`}
                >
                  {/* Subtle Day Label */}
                  <span className="text-[0.62rem] uppercase font-bold tracking-wider text-ink-soft/70">
                    {isHi ? "दिवस" : "Day"}
                  </span>

                  {/* Day Number */}
                  <span
                    className={`font-serif text-lg sm:text-xl font-bold leading-none transition-colors ${
                      isCut ? "text-ink/60" : "text-ink"
                    }`}
                  >
                    {dayNum}
                  </span>

                  {/* Animated Slashing Cut Line */}
                  {isCut && (
                    <>
                      {/* SVG Slashing Red/Gold Line */}
                      <svg
                        className="absolute inset-0 w-full h-full pointer-events-none"
                        viewBox="0 0 100 100"
                        preserveAspectRatio="none"
                      >
                        <motion.line
                          x1="10"
                          y1="15"
                          x2="90"
                          y2="85"
                          stroke="#A8331F"
                          strokeWidth="4"
                          strokeLinecap="round"
                          initial={{ pathLength: 0, opacity: 0 }}
                          animate={{ pathLength: 1, opacity: 0.9 }}
                          transition={{ duration: 0.28, ease: "easeOut" }}
                        />
                        <motion.line
                          x1="12"
                          y1="82"
                          x2="88"
                          y2="18"
                          stroke="#C8821C"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          initial={{ pathLength: 0, opacity: 0 }}
                          animate={{ pathLength: 1, opacity: 0.75 }}
                          transition={{ duration: 0.32, delay: 0.08, ease: "easeOut" }}
                        />
                      </svg>

                      {/* Sacred Om/Check Stamp */}
                      <motion.div
                        initial={{ scale: 0, rotate: -30 }}
                        animate={{ scale: 1, rotate: 0 }}
                        transition={{ type: "spring", stiffness: 400, damping: 20 }}
                        className="absolute bottom-1 right-1 w-4 h-4 rounded-full bg-gold/90 text-white flex items-center justify-center text-[0.6rem] shadow-sm font-bold"
                      >
                        ✓
                      </motion.div>
                    </>
                  )}
                </motion.button>
              );
            })}
          </div>
        </div>

        {/* ── Bottom Legend & Hint ── */}
        <div className="flex items-center justify-between text-[0.72rem] text-ink-soft/75 pt-3 border-t border-ink/6 flex-wrap gap-2">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded bg-white border border-ink/15 inline-block" />
              {isHi ? "आगामी दिवस" : "Upcoming Day"}
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded bg-[#EBE0C5] border border-gold inline-flex items-center justify-center text-[0.55rem] text-[#A8331F] font-bold">
                ✕
              </span>
              {isHi ? "काटा गया / पूर्ण दिवस" : "Cut / Completed"}
            </span>
          </div>

          <span className="italic">
            {isHi
              ? "आपकी प्रगति आपके ब्राउज़र में स्वतः सुरक्षित रहती है।"
              : "Progress automatically persists in your browser."}
          </span>
        </div>
      </div>

      {/* ── Sankalp Completion Celebratory Modal ── */}
      <AnimatePresence>
        {showCelebration && completedCount >= totalDays && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[400] bg-black/75 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
            onClick={() => setShowCelebration(false)}
          >
            <motion.div
              initial={{ scale: 0.85, y: 20, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.85, y: 20, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-ivory max-w-md w-full rounded-[32px] p-8 text-center border-2 border-gold shadow-2xl relative overflow-hidden"
            >
              {/* Gold radiance behind */}
              <div className="absolute -top-20 -left-20 w-56 h-56 bg-gold/25 rounded-full blur-3xl" />
              <div className="absolute -bottom-20 -right-20 w-56 h-56 bg-[#A8331F]/20 rounded-full blur-3xl" />

              <div className="relative z-10">
                <div className="w-20 h-20 mx-auto rounded-full bg-gold/20 border-2 border-gold flex items-center justify-center text-4xl mb-4 shadow-lg">
                  🏆
                </div>

                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gold/15 text-gold text-xs font-bold uppercase tracking-wider mb-2">
                  <LucideSparkles className="w-3.5 h-3.5" />
                  <span>{isHi ? "संकल्प सिद्धि" : "Sankalp Accomplished"}</span>
                </div>

                <h3 className="font-serif text-3xl text-ink font-bold mb-2">
                  {isHi ? "साधना संपूर्ण हुई!" : "Sadhana Completed!"}
                </h3>

                <p className="text-sm text-ink-soft leading-relaxed mb-6">
                  {isHi
                    ? `आपने पूर्ण निष्ठा के साथ ${totalDays} दिवसीय साधना चक्र को सफलतापूर्वक पूर्ण किया है। ईश्वर व गुरु परंपरा की असीम कृपा आपके जीवन को प्रकाशित करे।`
                    : `You have successfully completed the unbroken ${totalDays}-day sadhana cycle with unwavering devotion. May the divine radiance bless your inner awakening and life.`}
                </p>

                <div className="bg-white/80 rounded-2xl p-4 border border-ink/8 text-xs text-ink font-serif italic mb-6">
                  {isHi
                    ? "« यद् यद् आचरति श्रेष्ठस् तत्तद् एवेतरोजनाः। स यत्प्रमाणं कुरुते लोकस् तद् अनुवर्तते ॥ »"
                    : "« Steadiness in sadhana transforms the mind into an unshakeable lamp of divine light. »"}
                </div>

                <button
                  onClick={() => setShowCelebration(false)}
                  className="w-full py-3.5 rounded-full bg-gold hover:bg-[#A48039] text-ink font-bold text-xs uppercase tracking-wider transition-all shadow-lg cursor-pointer"
                >
                  {isHi ? "सादर नमन व आशीर्वाद स्वीकारें" : "Receive Blessings & Continue"}
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
