"use client";

import { useState, useMemo, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import {
  nextFullMoon,
  nextNewMoon,
  addDays,
  fmt,
  getMonthSacredDates,
  getSacredTithiForDate,
  getMajorFestivalsForMonth,
  getHinduMonthForGregorian,
  HINDU_LUNAR_MONTHS,
  WEEKLY_DEITIES,
  ADDITIONAL_PRACTICE,
  DayDeityInfo,
  SacredTithiInfo,
  FestivalInfo,
  HinduMonthTheme,
} from '@/utils/moon';
import {
  LucideChevronLeft,
  LucideChevronRight,
  LucideSparkles,
  LucideCalendar,
  LucideMoon,
  LucideFlame,
  LucideX,
  LucideMaximize2,
  LucideGrid,
  LucideInfo,
  LucideSun,
  LucideArrowLeft,
} from 'lucide-react';

export default function CalendarView({
  initialEvents = [],
  fullPage = false,
}: {
  initialEvents?: any[];
  fullPage?: boolean;
}) {
  const router = useRouter();
  const [currentDate, setCurrentDate] = useState(new Date());
  const [weekOffset, setWeekOffset] = useState<number>(0);
  const [openDay, setOpenDay] = useState<number | null>(null);
  const [isMonthModalOpen, setIsMonthModalOpen] = useState(false);
  const [selectedDateDetail, setSelectedDateDetail] = useState<Date | null>(null);

  const today = new Date();

  // Lunar Calculations
  const purnima = useMemo(() => nextFullMoon(today), []);
  const amavasya = useMemo(() => nextNewMoon(today), []);

  // Ongoing 41-Day Sadhana (Starts 4th of September)
  const ongoingStart = useMemo(() => {
    return new Date(today.getFullYear(), 8, 4); // September 4th
  }, []);
  const ongoingEnd = useMemo(() => addDays(ongoingStart, 40), [ongoingStart]);

  // Current view month sacred dates
  const monthSacredDates = useMemo(() => {
    return getMonthSacredDates(currentDate.getFullYear(), currentDate.getMonth());
  }, [currentDate]);

  // Major festivals for current month
  const monthFestivals = useMemo(() => {
    return getMajorFestivalsForMonth(currentDate.getFullYear(), currentDate.getMonth());
  }, [currentDate]);

  // Hindu month theme for current month
  const hinduMonthTheme = useMemo(() => {
    return getHinduMonthForGregorian(currentDate.getMonth());
  }, [currentDate]);

  // Week calculation (Monday as start of week)
  const startOfWeek = useMemo(() => {
    const day = currentDate.getDay();
    const diffToMonday = day === 0 ? -6 : 1 - day;
    return addDays(currentDate, diffToMonday);
  }, [currentDate]);

  const weekDays = useMemo(() => {
    return Array.from({ length: 7 }).map((_, i) => addDays(startOfWeek, i));
  }, [startOfWeek]);

  // Year & Month navigation helpers
  const prevMonth = () => setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
  const nextMonth = () => setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
  const setMonthIndex = (monthIdx: number) => setCurrentDate(new Date(currentDate.getFullYear(), monthIdx, 1));

  const prevYear = () => setCurrentDate(new Date(currentDate.getFullYear() - 1, currentDate.getMonth(), 1));
  const nextYear = () => setCurrentDate(new Date(currentDate.getFullYear() + 1, currentDate.getMonth(), 1));
  const setYear = (year: number) => setCurrentDate(new Date(year, currentDate.getMonth(), 1));

  // Week navigation helpers (prev week, today, next week with directional disabling)
  const prevWeek = () => {
    if (weekOffset > -1) {
      const nextOffset = weekOffset - 1;
      setWeekOffset(nextOffset);
      setCurrentDate(addDays(today, nextOffset * 7));
      setOpenDay(null);
    }
  };

  const nextWeek = () => {
    if (weekOffset < 1) {
      const nextOffset = weekOffset + 1;
      setWeekOffset(nextOffset);
      setCurrentDate(addDays(today, nextOffset * 7));
      setOpenDay(null);
    }
  };

  const goToToday = () => {
    setWeekOffset(0);
    setCurrentDate(new Date());
    setOpenDay(null);
  };

  const dayShort = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const monthName = currentDate.toLocaleDateString('en-IN', { month: 'long', year: 'numeric' });
  const currentYear = currentDate.getFullYear();
  const currentMonthIdx = currentDate.getMonth();

  const openBigMonthlyCalendar = () => {
    if (fullPage) return;
    router.push('/calendar');
  };

  const closeBigMonthlyCalendar = () => {
    setIsMonthModalOpen(false);
    setSelectedDateDetail(null);
    setCurrentDate(new Date());
    setWeekOffset(0);
    setOpenDay(null);
  };

  // Keyboard navigation listener (Esc to close, Backspace when not typing)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const isInput = ['INPUT', 'TEXTAREA', 'SELECT'].includes((e.target as HTMLElement)?.tagName);
      if (e.key === 'Escape') {
        if (selectedDateDetail) {
          setSelectedDateDetail(null);
        } else if (isMonthModalOpen) {
          closeBigMonthlyCalendar();
        } else if (openDay !== null) {
          setOpenDay(null);
        }
      } else if (e.key === 'Backspace' && !isInput) {
        if (selectedDateDetail) {
          e.preventDefault();
          setSelectedDateDetail(null);
        } else if (isMonthModalOpen) {
          e.preventDefault();
          closeBigMonthlyCalendar();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedDateDetail, isMonthModalOpen, openDay]);

  // Browser back button (popstate) handling to close modal gracefully
  useEffect(() => {
    const handlePopState = () => {
      if (selectedDateDetail) {
        setSelectedDateDetail(null);
      } else if (isMonthModalOpen) {
        closeBigMonthlyCalendar();
      }
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, [selectedDateDetail, isMonthModalOpen]);

  /* ═══════════════════════════════════════════════════════════════
     A. FULL-PAGE LUNAR CALENDAR VIEW (Used directly on /calendar)
     ═══════════════════════════════════════════════════════════════ */
  if (fullPage) {
    return (
      <div data-calendar-area="true" className="w-full">
        <div className="bg-[#FCFBF8] text-ink rounded-[28px] sm:rounded-[36px] border border-amber-300 shadow-2xl w-full flex flex-col overflow-hidden relative mb-12">
          {/* Top Banner: Hindu Lunar Calendar Title + Controls + Main Deity */}
          <div
            className="p-5 sm:p-7 md:p-8 relative overflow-hidden border-b border-amber-300/40"
            style={{
              background: hinduMonthTheme.bgGradient,
            }}
          >
            {/* Exit / Back to Home at top right */}
            <Link
              href="/"
              className="absolute top-4 right-4 sm:top-6 sm:right-6 z-20 px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full bg-white/95 hover:bg-white text-ink border border-amber-300 shadow-sm flex items-center gap-1.5 text-xs font-bold transition-all cursor-pointer hover:scale-105 no-underline"
              title="Return to Sanctuary Home"
            >
              <LucideX size={15} />
              <span>Exit</span>
            </Link>

            <div className="flex flex-col gap-3 pr-20 sm:pr-0">
              {/* Top Left Row: Year Selector (< 2026 >), Jump to Today, Main Deity */}
              <div className="flex items-center gap-2 sm:gap-3 flex-wrap">
                {/* Year Navigation Pill (< 2026 >) */}
                <div className="flex items-center bg-white border border-amber-400/80 rounded-full px-1.5 py-0.5 sm:px-2 sm:py-1 shadow-xs">
                  <button
                    onClick={prevYear}
                    className="p-1 sm:p-1.5 hover:bg-amber-50 rounded-full transition-colors text-amber-900 cursor-pointer"
                    title="Previous Year"
                    aria-label="Previous Year"
                  >
                    <LucideChevronLeft size={16} />
                  </button>
                  <input
                    type="number"
                    value={currentYear}
                    onChange={(e) => {
                      const val = parseInt(e.target.value, 10);
                      if (!isNaN(val) && val >= 1900 && val <= 2100) {
                        setYear(val);
                      }
                    }}
                    className="w-14 sm:w-16 text-center font-serif text-base sm:text-lg font-bold text-[#B8934A] bg-transparent focus:outline-none focus:ring-1 focus:ring-amber-400 rounded cursor-pointer"
                    title="Click or type to edit year"
                  />
                  <button
                    onClick={nextYear}
                    className="p-1 sm:p-1.5 hover:bg-amber-50 rounded-full transition-colors text-amber-900 cursor-pointer"
                    title="Next Year"
                    aria-label="Next Year"
                  >
                    <LucideChevronRight size={16} />
                  </button>
                </div>

                {/* Jump to Today Button Pill */}
                <button
                  onClick={goToToday}
                  className="px-3.5 sm:px-4 py-1.5 sm:py-2 bg-[#FEF3D6] hover:bg-[#FDE7AD] border border-amber-400/70 text-[#734410] rounded-full text-[0.68rem] sm:text-xs font-bold uppercase tracking-wider transition-colors shadow-xs cursor-pointer"
                >
                  JUMP TO TODAY
                </button>

                {/* Main Deity Badge */}
                <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/90 border border-amber-400/50 text-amber-900 font-serif text-xs font-semibold shadow-xs">
                  <span className="text-[0.68rem] uppercase tracking-wider text-[#B8934A] font-sans font-bold">
                    MAIN DEITY:
                  </span>
                  <span>{hinduMonthTheme.primaryDeity}</span>
                </div>
              </div>

              {/* Month Title & Devanagari */}
              <div className="flex items-baseline gap-2 sm:gap-3 flex-wrap mt-1">
                <h2 className="font-serif text-[1.9rem] sm:text-[2.4rem] md:text-[2.8rem] font-bold text-ink tracking-tight leading-none">
                  {hinduMonthTheme.hinduName}
                </h2>
                <span className="font-serif text-xl sm:text-[1.4rem] md:text-[1.7rem] text-amber-800/80 font-normal">
                  ({hinduMonthTheme.devanagari})
                </span>
                <span className="text-[0.72rem] sm:text-xs md:text-sm font-sans px-3 py-1 rounded-full bg-white/80 border border-amber-300/60 text-ink font-medium shadow-xs">
                  {currentDate.toLocaleDateString('en-IN', { month: 'long' })} {currentYear} · {hinduMonthTheme.gregorianSpan}
                </span>
              </div>
            </div>
          </div>

          {/* ── 12 Month Horizontal Scrollable Tabs ── */}
          <div className="bg-[#FAF7F2] px-3 sm:px-5 py-2.5 sm:py-3 border-b border-ink/8 overflow-x-auto scrollbar-none flex items-center gap-1.5 sm:gap-2">
            {HINDU_LUNAR_MONTHS.map((hm) => {
              const isSelected = currentMonthIdx === hm.gregorianMonthIndex;
              return (
                <button
                  key={hm.id}
                  onClick={() => setMonthIndex(hm.gregorianMonthIndex)}
                  className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs font-medium whitespace-nowrap transition-all flex items-center gap-1.5 cursor-pointer ${
                    isSelected
                      ? 'bg-[#B8934A] text-white font-bold shadow-sm ring-1 ring-amber-400'
                      : 'bg-white text-ink-soft hover:bg-amber-50 hover:text-ink border border-ink/8'
                  }`}
                >
                  <span className="font-serif">{hm.hinduName}</span>
                  <span className="opacity-70 text-[0.65rem] sm:text-[0.68rem]">({hm.gregorianSpan.split('–')[0].trim()})</span>
                </button>
              );
            })}
          </div>

          {/* ── MAIN CALENDAR GRID ── */}
          <div className="p-4 sm:p-6 md:p-8 space-y-6 sm:space-y-8 bg-[#FCFBF8]">
            <div className="bg-white border border-ink/8 rounded-2xl sm:rounded-[24px] p-3 sm:p-5 md:p-6 shadow-sm">
              {/* Day of week headers */}
              <div className="grid grid-cols-7 gap-1 sm:gap-2 md:gap-3 text-xs mb-2 sm:mb-4">
                {['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'].map((d, dIdx) => (
                  <div
                    key={d}
                    className={`font-semibold uppercase tracking-wider text-[0.6rem] sm:text-[0.7rem] md:text-[0.76rem] text-center py-1.5 sm:py-2 rounded-lg ${
                      dIdx === 0 ? 'text-emerald-700 bg-emerald-50 font-bold' : 'text-ink-soft bg-[#F5F1E9]'
                    }`}
                  >
                    {d}
                  </div>
                ))}
              </div>

              {/* Month Days Grid */}
              <div className="grid grid-cols-7 gap-1 sm:gap-2 md:gap-3">
                {/* Blank leading cells */}
                {Array.from({
                  length: new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).getDay(),
                }).map((_, i) => (
                  <div
                    key={`blank-${i}`}
                    className="min-h-[50px] sm:min-h-[80px] md:min-h-[110px] rounded-xl sm:rounded-[18px] opacity-25 bg-[#F5F1E9] border border-transparent"
                  />
                ))}

                {/* Day Cells */}
                {Array.from({
                  length: new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate(),
                }).map((_, i) => {
                  const dayNum = i + 1;
                  const date = new Date(currentDate.getFullYear(), currentDate.getMonth(), dayNum);
                  const sacredTithi = getSacredTithiForDate(date);
                  const isToday = date.toDateString() === today.toDateString();
                  const dayFestivals = monthFestivals[dayNum] || [];

                  // Styling per tithi & festival
                  let cellBg = "bg-white hover:bg-amber-50/50";
                  let cellBorder = "border-ink/10 hover:border-amber-400/50";
                  let textNumColor = "text-ink";

                  if (sacredTithi?.type === 'amavasya') {
                    cellBg = "bg-gradient-to-br from-[#1C1814] to-[#2E271D] text-white shadow-md";
                    cellBorder = "border-amber-400 ring-1 ring-amber-400/50";
                    textNumColor = "text-amber-300 font-bold";
                  } else if (sacredTithi?.type === 'purnima') {
                    cellBg = "bg-gradient-to-br from-[#FEF3C7] to-[#FDE68A] text-[#1B1812] shadow-sm";
                    cellBorder = "border-amber-400 ring-1 ring-amber-400/70";
                    textNumColor = "text-[#1B1812] font-black";
                  } else if (sacredTithi?.type === 'kaal_ashtami') {
                    cellBg = "bg-gradient-to-br from-[#F5EDFD] to-[#E9D5FF] text-[#3B195C] shadow-xs";
                    cellBorder = "border-purple-300 ring-1 ring-purple-300/40";
                    textNumColor = "text-purple-900 font-bold";
                  } else if (sacredTithi?.type === 'ekadashi') {
                    cellBg = "bg-gradient-to-br from-[#ECFDF5] to-[#D1FAE5] text-[#064E3B] shadow-xs";
                    cellBorder = "border-emerald-300 ring-1 ring-emerald-300/40";
                    textNumColor = "text-emerald-900 font-bold";
                  }

                  if (isToday) {
                    cellBorder += " ring-2 ring-[#B8934A]";
                  }

                  return (
                    <div
                      key={dayNum}
                      onClick={() => setSelectedDateDetail(date)}
                      data-calendar-cell="true"
                      data-calendar-tithi={sacredTithi?.type || (dayFestivals.length > 0 ? "festival" : "")}
                      data-calendar-label={sacredTithi ? (sacredTithi.shortTitle || sacredTithi.title) : dayFestivals.length > 0 ? dayFestivals[0].name : isToday ? 'Today' : `Day ${dayNum}`}
                      className={`p-1.5 sm:p-2 md:p-3 border rounded-xl sm:rounded-[18px] transition-all duration-200 cursor-pointer min-h-[50px] sm:min-h-[80px] md:min-h-[105px] flex flex-col justify-between relative group shadow-2xs ${cellBg} ${cellBorder}`}
                    >
                      {/* Top Row: Date Number & Badges */}
                      <div className="flex items-center justify-between">
                        <span className={`font-serif text-[0.88rem] sm:text-[1.15rem] md:text-[1.38rem] leading-none ${textNumColor}`}>
                          {dayNum}
                        </span>

                        <div className="flex items-center gap-0.5 sm:gap-1">
                          {isToday && (
                            <span className="text-[0.48rem] sm:text-[0.55rem] uppercase font-bold tracking-wider px-1.5 py-0.5 bg-[#B8934A] text-white rounded font-sans hidden sm:inline">
                              Today
                            </span>
                          )}
                          {sacredTithi && (
                            <span className="text-[0.72rem] sm:text-xs" title={sacredTithi.title}>
                              {sacredTithi.icon}
                            </span>
                          )}
                          {dayFestivals.length > 0 && !sacredTithi && (
                            <span className="text-[0.72rem] sm:text-xs" title={dayFestivals[0].name}>
                              ✨
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Middle: Festivals / Badges */}
                      <div className="my-auto space-y-1">
                        {dayFestivals.map((fest, fIdx) => (
                          <div
                            key={fIdx}
                            className="text-[0.58rem] md:text-[0.66rem] font-bold px-1.5 py-0.5 rounded bg-amber-100 text-amber-900 border border-amber-300/60 truncate shadow-2xs hidden md:flex items-center gap-0.5"
                            title={`${fest.name}: ${fest.description}`}
                          >
                            <span>✨</span>
                            <span className="truncate">{fest.name}</span>
                          </div>
                        ))}

                        {sacredTithi && (
                          <div
                            className="text-[0.55rem] md:text-[0.65rem] font-bold px-1 sm:px-1.5 py-0.5 rounded uppercase tracking-wider truncate text-center"
                            style={{
                              background: sacredTithi.type === 'amavasya' ? '#B8934A' : sacredTithi.bgColor,
                              color: sacredTithi.type === 'amavasya' ? '#1C1814' : sacredTithi.color,
                              border: `1px solid ${sacredTithi.borderColor}`,
                            }}
                          >
                            {sacredTithi.shortTitle}
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* ── Color Legend ── */}
              <div className="mt-5 sm:mt-7 pt-4 sm:pt-5 border-t border-ink/8 flex flex-wrap items-center justify-center gap-3 sm:gap-5 md:gap-7 text-[0.7rem] sm:text-[0.76rem] text-ink-soft">
                <div className="flex items-center gap-1.5">
                  <span className="w-3.5 h-3.5 rounded bg-gradient-to-br from-[#1C1814] to-[#2E271D] border border-amber-400 inline-block" />
                  <span className="font-semibold text-ink">● Amavasya</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-3.5 h-3.5 rounded bg-gradient-to-br from-[#FEF3C7] to-[#FDE68A] border border-amber-400 inline-block" />
                  <span className="font-semibold text-ink">○ Purnima</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-3.5 h-3.5 rounded bg-gradient-to-br from-[#F5EDFD] to-[#E9D5FF] border border-purple-300 inline-block" />
                  <span className="font-semibold text-purple-900">⚡ Kaal Ashtami</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-3.5 h-3.5 rounded bg-gradient-to-br from-[#ECFDF5] to-[#D1FAE5] border border-emerald-300 inline-block" />
                  <span className="font-semibold text-emerald-900">🪔 Ekadashi</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-3.5 h-3.5 rounded bg-amber-100 border border-amber-300 inline-block" />
                  <span className="font-semibold text-amber-900">✨ Festivals</span>
                </div>
              </div>
            </div>

            {/* Major Festivals List for this Month */}
            {Object.keys(monthFestivals).length > 0 && (
              <div className="bg-white border border-ink/8 rounded-2xl sm:rounded-[24px] p-5 sm:p-7 shadow-sm">
                <div className="flex items-center gap-2 mb-4 sm:mb-5">
                  <LucideSparkles className="text-[#B8934A]" size={20} />
                  <h4 className="font-serif text-xl sm:text-2xl font-bold text-ink">
                    Major Festivals & Celebrations in {currentDate.toLocaleDateString('en-IN', { month: 'long' })} {currentYear}
                  </h4>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 sm:gap-4">
                  {Object.entries(monthFestivals).flatMap(([day, fList]) =>
                    fList.map((fest, fIdx) => (
                      <div
                        key={`${day}-${fIdx}`}
                        onClick={() => setSelectedDateDetail(new Date(currentYear, currentMonthIdx, Number(day)))}
                        data-calendar-cell="true"
                        data-calendar-tithi="festival"
                        data-calendar-label={fest.name}
                        className="p-4 sm:p-5 rounded-xl sm:rounded-[18px] bg-[#FAF8F3] border border-ink/8 hover:border-[#B8934A]/50 transition-all flex items-start gap-4 cursor-pointer group shadow-2xs hover:shadow-xs"
                      >
                        <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-br from-[#B8934A] to-[#99732B] text-white font-serif flex flex-col items-center justify-center font-bold flex-shrink-0 shadow-xs">
                          <span className="text-lg sm:text-xl leading-none">{day}</span>
                          <span className="text-[0.62rem] uppercase opacity-90">{currentDate.toLocaleDateString('en-IN', { month: 'short' })}</span>
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between gap-2">
                            <h5 className="font-serif text-lg font-bold text-ink group-hover:text-[#B8934A] transition-colors truncate">
                              {fest.name}
                            </h5>
                            {fest.hindiName && (
                              <span className="text-xs text-[#B8934A] font-serif font-medium flex-shrink-0">
                                {fest.hindiName}
                              </span>
                            )}
                          </div>
                          <div className="text-xs text-ink-soft font-medium mt-0.5">
                            Deity: {fest.deity}
                          </div>
                          <p className="text-xs text-ink-soft/80 mt-1.5 leading-relaxed">
                            {fest.description}
                          </p>
                        </div>
                      </div>
                    ))
                  )}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* ── Day Detail Modal ── */}
        <AnimatePresence>
          {selectedDateDetail && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedDateDetail(null)}
              className="fixed inset-0 z-[600] flex items-center justify-center p-3 sm:p-4 bg-black/60 backdrop-blur-md cursor-pointer overflow-y-auto"
            >
              <motion.div
                initial={{ scale: 0.94, y: 15 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.94, y: 15 }}
                onClick={(e) => e.stopPropagation()}
                className="bg-[#FCFBF8] text-ink rounded-2xl sm:rounded-[24px] p-5 sm:p-6 md:p-8 max-w-lg w-full border border-amber-300 shadow-2xl relative cursor-default max-h-[90vh] overflow-y-auto"
              >
                {/* Header Navigation: Back button + Close button */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <button
                    onClick={() => setSelectedDateDetail(null)}
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-ink/5 hover:bg-ink/10 text-ink text-xs font-semibold tracking-wide transition-colors cursor-pointer"
                  >
                    <LucideArrowLeft size={13} />
                    <span>Back to Month</span>
                  </button>
                  <button
                    onClick={() => setSelectedDateDetail(null)}
                    className="w-8 h-8 rounded-full bg-ink/5 hover:bg-ink/10 flex items-center justify-center text-ink-soft hover:text-ink text-sm transition-colors cursor-pointer"
                    title="Close (Esc)"
                  >
                    ✕
                  </button>
                </div>

                <div className="text-[0.68rem] sm:text-[0.72rem] uppercase tracking-[0.14em] text-[#B8934A] font-bold mb-1">
                  {selectedDateDetail.toLocaleDateString('en-IN', { weekday: 'long' })}
                </div>
                <h3 className="font-serif text-[1.5rem] sm:text-[1.85rem] text-ink mb-3 sm:mb-4">
                  {fmt(selectedDateDetail, { day: 'numeric', month: 'long', year: 'numeric' })}
                </h3>

                {/* Major Festivals on this day */}
                {(() => {
                  const dayFests = getMajorFestivalsForMonth(selectedDateDetail.getFullYear(), selectedDateDetail.getMonth())[selectedDateDetail.getDate()] || [];
                  if (dayFests.length === 0) return null;
                  return (
                    <div className="space-y-2 mb-4">
                      {dayFests.map((fest, fIdx) => (
                        <div
                          key={fIdx}
                          className="p-3.5 sm:p-4 rounded-xl sm:rounded-[16px] bg-amber-50 border border-amber-300/70 text-ink shadow-xs"
                        >
                          <div className="flex items-center justify-between">
                            <span className="text-[0.68rem] sm:text-xs uppercase tracking-wider font-bold text-amber-800">
                              ✨ Major Festival
                            </span>
                            {fest.hindiName && (
                              <span className="text-xs font-serif text-[#B8934A] font-medium">
                                {fest.hindiName}
                              </span>
                            )}
                          </div>
                          <div className="font-serif text-lg sm:text-xl font-bold text-ink mt-0.5">
                            {fest.name}
                          </div>
                          <div className="text-xs text-amber-900 font-medium mt-1">
                            Deity: {fest.deity}
                          </div>
                          <p className="text-xs text-ink-soft mt-1.5 leading-relaxed">
                            {fest.description}
                          </p>
                          <div className="text-[0.7rem] text-amber-800/80 mt-1 italic">
                            Significance: {fest.significance}
                          </div>
                        </div>
                      ))}
                    </div>
                  );
                })()}

                {/* Sacred Tithi Details */}
                {getSacredTithiForDate(selectedDateDetail) && (
                  <div
                    className="p-3.5 sm:p-4 rounded-xl sm:rounded-[16px] mb-4 text-white shadow-sm"
                    style={{ background: getSacredTithiForDate(selectedDateDetail)?.bgColor }}
                  >
                    <div className="text-xs uppercase tracking-wider font-bold mb-1 opacity-80 flex items-center justify-between">
                      <span>Sacred Lunar Tithi</span>
                      <span>{getSacredTithiForDate(selectedDateDetail)?.icon}</span>
                    </div>
                    <div className="font-serif text-lg sm:text-xl font-bold">
                      {getSacredTithiForDate(selectedDateDetail)?.badge}
                    </div>
                    <p className="text-xs opacity-85 mt-1">
                      {getSacredTithiForDate(selectedDateDetail)?.description}
                    </p>
                  </div>
                )}

                {/* Daily Sadhana Details */}
                {WEEKLY_DEITIES[selectedDateDetail.getDay()] && (
                  <div className="p-3.5 sm:p-4 rounded-xl sm:rounded-[16px] bg-white border border-ink/8 shadow-xs">
                    <div className="text-[0.68rem] sm:text-xs uppercase tracking-wider text-[#B8934A] font-semibold mb-1">
                      Scheduled Daily Sadhana (8:00 PM – 9:00 PM)
                    </div>
                    <div className="font-serif text-base sm:text-lg font-semibold text-ink">
                      {WEEKLY_DEITIES[selectedDateDetail.getDay()].title}
                    </div>
                    <div className="text-xs text-amber-800 font-serif mt-1 font-medium">
                      {WEEKLY_DEITIES[selectedDateDetail.getDay()].mantra}
                    </div>
                    <p className="text-xs text-ink-soft mt-1.5">
                      {WEEKLY_DEITIES[selectedDateDetail.getDay()].focus}
                    </p>
                    
                    {/* Google Meet Link Button */}
                    <div className="mt-3 pt-3 border-t border-ink/8 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                      <a
                        href="https://meet.google.com/odv-evnd-mfy"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#B8934A] hover:bg-[#99732B] text-white text-xs font-semibold tracking-wide transition-all shadow-xs"
                      >
                        <span>Join Meeting (8 PM - 9 PM)</span>
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                      
                      <div className="text-xs text-ink-soft flex items-center gap-2">
                        <span>{WEEKLY_DEITIES[selectedDateDetail.getDay()].team}</span>
                      </div>
                    </div>
                  </div>
                )}

                <div className="mt-5 sm:mt-6 pt-3 border-t border-ink/8 flex justify-end">
                  <button
                    onClick={() => setSelectedDateDetail(null)}
                    className="w-full sm:w-auto px-6 py-2.5 rounded-full bg-ink hover:bg-[#B8934A] text-white font-semibold text-xs tracking-wider uppercase transition-colors cursor-pointer text-center flex items-center justify-center gap-2"
                  >
                    <LucideArrowLeft size={14} />
                    <span>Back to Calendar</span>
                  </button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  }

  /* ═══════════════════════════════════════════════════════════════
     B. SUMMARY CALENDAR VIEW (Used on Home page)
     ═══════════════════════════════════════════════════════════════ */
  return (
    <div data-calendar-area="true">
      {/* ── Top info grid (3 Clean Tabs) ── */}
      <div
        className="grid grid-cols-1 md:grid-cols-3 gap-[1px] rounded-2xl sm:rounded-[24px] overflow-hidden mb-8 sm:mb-10 border border-ink/8 shadow-sm"
        style={{ background: "rgba(27,24,18,0.08)" }}
      >
        {/* Tab 1: Ongoing — Clickable to view 41-Day Sadhana */}
        <Link
          href="/programs/41-day-sadhana"
          prefetch={true}
          className="bg-white p-5 sm:p-[26px_24px] flex flex-col justify-between cursor-pointer group transition-all duration-200 hover:bg-amber-50/40 active:bg-amber-50/70 active:scale-[0.99] relative no-underline touch-manipulation select-none"
          title="Click to view 41-Day Sadhana guide & details"
        >
          <div>
            <div className="flex items-center justify-between gap-2 mb-1.5 sm:mb-2">
              <span className="text-[0.7rem] sm:text-[0.72rem] tracking-[0.1em] text-gold uppercase font-bold group-hover:text-amber-800 transition-colors">
                Ongoing · 41-Day Sadhana
              </span>
            </div>
            <div className="font-serif text-[1.15rem] sm:text-[1.28rem] leading-[1.35] text-ink group-hover:text-amber-950 transition-colors">
              {fmt(ongoingStart, { day: 'numeric', month: 'short' })} –{' '}
              {fmt(addDays(ongoingStart, 40), { day: 'numeric', month: 'short' })}
            </div>
          </div>
          <div className="mt-3 flex flex-col gap-2">
            <small className="block font-sans text-[0.78rem] sm:text-[0.8rem] text-ink-soft font-normal">
              Starts 4th Sept · Daily sits, 8:00–9:00 PM (41 Days)
            </small>
            <div className="flex items-center gap-2 flex-wrap">
              <span
                onClick={(e) => {
                  e.stopPropagation();
                  window.open("https://meet.google.com/odv-evnd-mfy", "_blank");
                }}
                className="inline-flex items-center justify-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#B8934A] hover:bg-[#99732B] text-white text-xs font-semibold tracking-wide transition-all shadow-xs w-fit cursor-pointer"
              >
                <span>Join Google Meet</span>
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </span>
              <span
                className="inline-flex items-center justify-center px-3 py-1.5 rounded-full bg-ink/5 hover:bg-ink/10 text-ink text-xs font-medium tracking-wide transition-all"
              >
                Details
              </span>
            </div>
          </div>
        </Link>

        {/* Tab 2: Today — gold accent */}
        <div className="p-5 sm:p-[26px_24px] flex flex-col justify-between" style={{ background: "#B8934A" }}>
          <div>
            <div
              className="text-[0.7rem] sm:text-[0.72rem] tracking-[0.1em] mb-1.5 sm:mb-2 uppercase font-medium"
              style={{ color: "rgba(27,24,18,0.7)" }}
            >
              Today
            </div>
            <div className="font-serif text-[1.15rem] sm:text-[1.28rem] leading-[1.35]" style={{ color: "#1B1812" }}>
              {fmt(today, { day: 'numeric', month: 'long', year: 'numeric' })}
            </div>
          </div>
          <div className="flex items-center justify-between mt-2.5">
            <small className="block font-sans text-[0.78rem] sm:text-[0.8rem] font-medium" style={{ color: "rgba(27,24,18,0.8)" }}>
              {today.toLocaleDateString('en-IN', { weekday: 'long' })}
            </small>
            {getSacredTithiForDate(today) && (
              <span className="px-2.5 py-0.5 rounded-full text-[0.65rem] sm:text-[0.68rem] bg-black/20 text-black font-bold">
                {getSacredTithiForDate(today)?.title}
              </span>
            )}
          </div>
        </div>

        {/* Tab 3: Monthly Lunar & Sacred Dates -> Clicking navigates directly to Full /calendar */}
        <Link
          href="/calendar"
          prefetch={true}
          className="bg-white p-5 sm:p-[26px_24px] flex flex-col justify-between cursor-pointer group transition-all duration-200 hover:bg-amber-50/40 relative no-underline"
          title="Click to view full Lunar Calendar"
        >
          <div className="flex items-center justify-between mb-2">
            <div className="text-[0.7rem] sm:text-[0.72rem] tracking-[0.1em] text-ink-soft uppercase font-medium flex items-center gap-1.5">
              <span>Sacred Tithis · {currentDate.toLocaleDateString('en-IN', { month: 'short' })}</span>
              <span className="inline-block w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
            </div>
            <span
              className="text-[0.68rem] sm:text-[0.72rem] font-medium text-amber-900 bg-amber-100 group-hover:bg-amber-200 px-2 sm:px-2.5 py-0.5 rounded-full border border-amber-300/60 flex items-center gap-1 transition-colors"
            >
              <LucideMaximize2 size={11} /> Open Card
            </span>
          </div>

          <div className="grid grid-cols-3 gap-1 sm:gap-1.5 mt-1 text-center">
            {/* Amavasya */}
            <div
              data-calendar-tithi="amavasya"
              data-calendar-label="Amavasya"
              className="p-1.5 sm:p-2 rounded-xl bg-[#1C1814] text-white flex flex-col justify-between shadow-2xs"
            >
              <span className="text-[0.55rem] sm:text-[0.62rem] uppercase opacity-70">● Amavasya</span>
              <span className="font-serif text-[0.82rem] sm:text-[0.92rem] text-amber-300 font-bold mt-0.5">
                {monthSacredDates.amavasya.length > 0 ? `${monthSacredDates.amavasya[0]} ${currentDate.toLocaleDateString('en-IN', { month: 'short' })}` : 'Tithi'}
              </span>
            </div>

            {/* Purnima */}
            <div
              data-calendar-tithi="purnima"
              data-calendar-label="Purnima"
              className="p-1.5 sm:p-2 rounded-xl bg-[#FDF3D6] text-ink border border-amber-300 flex flex-col justify-between shadow-2xs"
            >
              <span className="text-[0.55rem] sm:text-[0.62rem] uppercase font-bold text-amber-900">○ Purnima</span>
              <span className="font-serif text-[0.82rem] sm:text-[0.92rem] text-ink font-bold mt-0.5">
                {monthSacredDates.purnima.length > 0 ? `${monthSacredDates.purnima[0]} ${currentDate.toLocaleDateString('en-IN', { month: 'short' })}` : 'Tithi'}
              </span>
            </div>

            {/* Kaal Ashtami */}
            <div
              data-calendar-tithi="kaal_ashtami"
              data-calendar-label="Kaal Ashtami"
              className="p-1.5 sm:p-2 rounded-xl bg-[#F5EDFD] text-[#3B195C] border border-purple-200 flex flex-col justify-between shadow-2xs"
            >
              <span className="text-[0.55rem] sm:text-[0.62rem] uppercase font-bold text-purple-800">⚡ Ashtami</span>
              <span className="font-serif text-[0.82rem] sm:text-[0.92rem] text-purple-950 font-bold mt-0.5">
                {monthSacredDates.kaalAshtami.length > 0 ? `${monthSacredDates.kaalAshtami[0]} ${currentDate.toLocaleDateString('en-IN', { month: 'short' })}` : '8th'}
              </span>
            </div>
          </div>
        </Link>

      </div>

      {/* ── Week / Month Controls ── */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 sm:gap-4 mb-5 sm:mb-6">
        <div className="flex items-center justify-between sm:justify-start gap-2 sm:gap-3 flex-wrap">
          <div className="text-[0.8rem] sm:text-[0.9rem] tracking-[0.06em] text-ink-soft uppercase font-semibold">
            {`${fmt(weekDays[0], { day: 'numeric', month: 'short' })} – ${fmt(weekDays[6], { day: 'numeric', month: 'short', year: 'numeric' })}`}
          </div>
          <div className="flex items-center gap-1 bg-white border border-ink/10 rounded-full p-0.5 shadow-xs">
            <button
              onClick={prevWeek}
              disabled={weekOffset <= -1}
              className={`p-1.5 rounded-full transition-all ${
                weekOffset <= -1
                  ? "opacity-25 text-ink/30 cursor-not-allowed pointer-events-none"
                  : "hover:bg-ink/5 text-ink-soft hover:text-ink cursor-pointer"
              }`}
              title={weekOffset <= -1 ? "Reached previous week limit" : "Previous Week"}
              aria-label="Previous Week"
            >
              <LucideChevronLeft size={15} />
            </button>
            <button
              onClick={goToToday}
              className={`px-2.5 py-0.5 text-[0.68rem] sm:text-[0.7rem] font-semibold transition-colors uppercase tracking-wider cursor-pointer ${
                weekOffset === 0
                  ? "text-[#B8934A] font-bold"
                  : "text-ink-soft hover:text-ink font-semibold"
              }`}
              title="Click to Jump to Today"
            >
              {weekOffset === -1 ? "Prev Week" : weekOffset === 1 ? "Next Week" : "Today"}
            </button>
            <button
              onClick={nextWeek}
              disabled={weekOffset >= 1}
              className={`p-1.5 rounded-full transition-all ${
                weekOffset >= 1
                  ? "opacity-25 text-ink/30 cursor-not-allowed pointer-events-none"
                  : "hover:bg-ink/5 text-ink-soft hover:text-ink cursor-pointer"
              }`}
              title={weekOffset >= 1 ? "Reached next week limit" : "Next Week"}
              aria-label="Next Week"
            >
              <LucideChevronRight size={15} />
            </button>
          </div>
        </div>

        {/* Button to directly open the Full /calendar Page */}
        <Link
          href="/calendar"
          prefetch={true}
          className="w-full sm:w-auto px-4 sm:px-5 py-2.5 sm:py-2 rounded-full text-xs font-semibold bg-[#B8934A] hover:bg-[#99732B] text-white shadow-xs transition-all flex items-center justify-center gap-2 cursor-pointer no-underline"
        >
          <LucideCalendar size={14} /> Open Monthly Calendar Card
        </Link>
      </div>

      {/* ── WEEK VIEW (7 Days Unified Responsive Grid) ── */}
      <div className="grid grid-cols-7 gap-1 sm:gap-2 md:gap-2.5">
        {weekDays.map((d, i) => {
          const isToday = d.toDateString() === today.toDateString();
          const sacredTithi = getSacredTithiForDate(d);
          const deity = WEEKLY_DEITIES[d.getDay()];
          const isActive = openDay === i;

          // Small Theme Text for the Day
          const themeTag = sacredTithi
            ? sacredTithi.shortTitle || sacredTithi.title
            : deity
            ? (deity.dayOfWeek === 'MONDAY' ? 'Shiv Shakti' :
               deity.dayOfWeek === 'TUESDAY' ? 'Hanuman Ji' :
               deity.dayOfWeek === 'WEDNESDAY' ? 'Ganesh Ji' :
               deity.dayOfWeek === 'THURSDAY' ? 'Guru Tattva' :
               deity.dayOfWeek === 'FRIDAY' ? 'Vishnu Lakshmi' :
               deity.dayOfWeek === 'SATURDAY' ? 'Shani Dev' : 'Live Session')
            : '';

          return (
            <div key={i} className="contents md:block">
              <div
                data-calendar-cell="true"
                data-calendar-tithi={sacredTithi?.type || ''}
                data-calendar-label={sacredTithi ? (sacredTithi.shortTitle || sacredTithi.title) : isToday ? 'Today' : themeTag || 'View Day'}
                className={`flex flex-col justify-between rounded-xl sm:rounded-[18px] p-1.5 sm:p-2.5 md:p-[16px_12px] text-center cursor-pointer transition-all duration-200 border shadow-2xs min-h-[70px] sm:min-h-[85px] md:min-h-0 ${
                  isToday
                    ? 'text-white border-[#B8934A] bg-[#B8934A]'
                    : 'bg-white border-ink/8 hover:border-ink/25 hover:-translate-y-0.5 hover:shadow-xs'
                } ${isActive && !isToday ? 'border-amber-400 bg-amber-50/60 ring-1 ring-[#B8934A]/40' : ''}`}
                onClick={() => setOpenDay(isActive ? null : i)}
              >
                {/* Day of Week */}
                <div
                  className={`text-[0.58rem] sm:text-[0.68rem] tracking-[0.06em] sm:tracking-[0.08em] uppercase font-semibold ${
                    isToday ? 'opacity-90' : 'text-ink-soft'
                  }`}
                >
                  {dayShort[d.getDay()]}
                </div>

                {/* Date Number */}
                <div className={`font-serif text-[1.1rem] sm:text-[1.3rem] md:text-[1.48rem] font-normal leading-none my-0.5 sm:my-1 ${isToday ? 'text-white' : 'text-ink'}`}>
                  {d.getDate()}
                </div>

                {/* Theme of the day */}
                <div
                  className={`text-[0.55rem] sm:text-[0.66rem] font-medium truncate leading-tight mt-0.5 ${
                    isToday
                      ? 'text-white/95'
                      : sacredTithi
                      ? 'text-amber-800 font-bold'
                      : 'text-ink-soft/90'
                  }`}
                >
                  {sacredTithi ? (
                    <span className="flex items-center justify-center gap-0.5">
                      <span>{sacredTithi.icon}</span>
                      <span className="hidden sm:inline truncate">{themeTag}</span>
                    </span>
                  ) : (
                    <span className="truncate block">{themeTag}</span>
                  )}
                </div>
              </div>
            </div>
          );
        })}

        {/* Expandable Day Details Drawer for Week */}
        <AnimatePresence>
          {openDay !== null && (
            <motion.div
              initial={{ opacity: 0, height: 0, marginTop: 0 }}
              animate={{ opacity: 1, height: 'auto', marginTop: 12 }}
              exit={{ opacity: 0, height: 0, marginTop: 0 }}
              className="col-span-full bg-white border border-ink/8 rounded-2xl sm:rounded-[20px] overflow-hidden shadow-sm"
            >
              <div className="p-4 sm:p-6 md:p-[24px_28px]">
                <div className="flex items-center justify-between mb-3 flex-wrap gap-2">
                  <h4 className="font-serif font-semibold text-lg sm:text-[1.25rem] text-ink">
                    {weekDays[openDay].toLocaleDateString('en-IN', {
                      weekday: 'long',
                      day: 'numeric',
                      month: 'long',
                      year: 'numeric',
                    })}
                  </h4>
                  {getSacredTithiForDate(weekDays[openDay]) && (
                    <span className="px-3 py-1 rounded-full text-xs font-bold bg-amber-100 text-amber-900 border border-amber-300">
                      {getSacredTithiForDate(weekDays[openDay])?.badge}
                    </span>
                  )}
                </div>

                {/* Deity Sadhana Info for the Day */}
                {WEEKLY_DEITIES[weekDays[openDay].getDay()] && (
                  <div className="p-3.5 sm:p-4 rounded-xl bg-[#FAF8F4] border border-ink/6 flex flex-col md:flex-row md:items-center justify-between gap-3">
                    <div>
                      <div className="text-[0.68rem] sm:text-[0.7rem] uppercase tracking-wider text-[#B8934A] font-bold mb-0.5">
                        Scheduled Daily Sadhana
                      </div>
                      <div className="font-serif text-base sm:text-[1.2rem] font-semibold text-ink">
                        {WEEKLY_DEITIES[weekDays[openDay].getDay()].title}
                      </div>
                      <p className="text-xs text-ink-soft/80 mt-0.5 font-serif italic">
                        {WEEKLY_DEITIES[weekDays[openDay].getDay()].mantra}
                      </p>
                    </div>
                    <div className="text-xs sm:text-sm font-semibold text-ink flex items-center gap-2 flex-wrap">
                      <span>{WEEKLY_DEITIES[weekDays[openDay].getDay()].team}</span>
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
