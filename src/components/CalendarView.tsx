"use client";

import { useState, useMemo } from 'react';
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
} from 'lucide-react';

export default function CalendarView({ initialEvents = [] }: { initialEvents?: any[] }) {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [openDay, setOpenDay] = useState<number | null>(null);
  const [isMonthModalOpen, setIsMonthModalOpen] = useState(false);
  const [selectedDateDetail, setSelectedDateDetail] = useState<Date | null>(null);
  const [activeMonthTab, setActiveMonthTab] = useState<'calendar' | 'journey12'>('calendar');

  const today = new Date();

  // Lunar Calculations
  const purnima = useMemo(() => nextFullMoon(today), []);
  const amavasya = useMemo(() => nextNewMoon(today), []);

  // Ongoing program
  const ongoingStart = useMemo(() => addDays(today, -6), []);
  const ongoingEnd = useMemo(() => addDays(today, 15), []);

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

  // Week navigation helpers
  const prevWeek = () => setCurrentDate(addDays(currentDate, -7));
  const nextWeek = () => setCurrentDate(addDays(currentDate, 7));
  const goToToday = () => setCurrentDate(new Date());

  const dayShort = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const monthName = currentDate.toLocaleDateString('en-IN', { month: 'long', year: 'numeric' });
  const currentYear = currentDate.getFullYear();
  const currentMonthIdx = currentDate.getMonth();

  const availableYears = [2024, 2025, 2026, 2027, 2028, 2029, 2030];

  const openBigMonthlyCalendar = () => {
    setIsMonthModalOpen(true);
  };

  return (
    <div>
      {/* ── Top info grid (3 Clean Tabs) ── */}
      <div
        className="grid grid-cols-1 md:grid-cols-3 gap-[1px] rounded-2xl sm:rounded-[24px] overflow-hidden mb-8 sm:mb-10 border border-ink/8 shadow-sm"
        style={{ background: "rgba(27,24,18,0.08)" }}
      >
        {/* Tab 1: Ongoing */}
        <div className="bg-white p-5 sm:p-[26px_24px] flex flex-col justify-between">
          <div>
            <div className="text-[0.7rem] sm:text-[0.72rem] tracking-[0.1em] text-ink-soft mb-1.5 sm:mb-2 uppercase font-medium">
              Ongoing · 41-Day Sadhana
            </div>
            <div className="font-serif text-[1.15rem] sm:text-[1.28rem] leading-[1.35] text-ink">
              {fmt(ongoingStart, { day: 'numeric', month: 'short' })} –{' '}
              {fmt(addDays(ongoingStart, 40), { day: 'numeric', month: 'short' })}
            </div>
          </div>
          <div className="mt-3 flex flex-col gap-2">
            <small className="block font-sans text-[0.78rem] sm:text-[0.8rem] text-ink-soft font-normal">
              Daily sits, 8:00–9:00 PM
            </small>
            <a
              href="https://meet.google.com/odv-evnd-mfy"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#B8934A] hover:bg-[#99732B] text-white text-xs font-semibold tracking-wide transition-all shadow-xs w-fit cursor-pointer"
            >
              <span>Join Google Meet</span>
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        </div>

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

        {/* Tab 3: Monthly Lunar & Sacred Dates -> Clicking opens the Big Light Theme Calendar Card */}
        <div
          onClick={openBigMonthlyCalendar}
          className="bg-white p-5 sm:p-[26px_24px] flex flex-col justify-between cursor-pointer group transition-all duration-200 hover:bg-amber-50/40 relative"
          title="Click to open full Big Monthly Calendar Card"
        >
          <div className="flex items-center justify-between mb-2">
            <div className="text-[0.7rem] sm:text-[0.72rem] tracking-[0.1em] text-ink-soft uppercase font-medium flex items-center gap-1.5">
              <span>Sacred Tithis · {currentDate.toLocaleDateString('en-IN', { month: 'short' })}</span>
              <span className="inline-block w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
            </div>
            <span className="text-[0.68rem] sm:text-[0.72rem] font-medium text-amber-900 bg-amber-100 px-2 sm:px-2.5 py-0.5 rounded-full border border-amber-300/60 flex items-center gap-1">
              <LucideMaximize2 size={11} /> Open Card
            </span>
          </div>

          <div className="grid grid-cols-3 gap-1 sm:gap-1.5 mt-1 text-center">
            {/* Amavasya */}
            <div className="p-1.5 sm:p-2 rounded-xl bg-[#1C1814] text-white flex flex-col justify-between shadow-2xs">
              <span className="text-[0.55rem] sm:text-[0.62rem] uppercase opacity-70">● Amavasya</span>
              <span className="font-serif text-[0.82rem] sm:text-[0.92rem] text-amber-300 font-bold mt-0.5">
                {monthSacredDates.amavasya.length > 0 ? `${monthSacredDates.amavasya[0]} ${currentDate.toLocaleDateString('en-IN', { month: 'short' })}` : 'Tithi'}
              </span>
            </div>

            {/* Purnima */}
            <div className="p-1.5 sm:p-2 rounded-xl bg-[#FDF3D6] text-ink border border-amber-300 flex flex-col justify-between shadow-2xs">
              <span className="text-[0.55rem] sm:text-[0.62rem] uppercase font-bold text-amber-900">○ Purnima</span>
              <span className="font-serif text-[0.82rem] sm:text-[0.92rem] text-ink font-bold mt-0.5">
                {monthSacredDates.purnima.length > 0 ? `${monthSacredDates.purnima[0]} ${currentDate.toLocaleDateString('en-IN', { month: 'short' })}` : 'Tithi'}
              </span>
            </div>

            {/* Kaal Ashtami */}
            <div className="p-1.5 sm:p-2 rounded-xl bg-[#F5EDFD] text-[#3B195C] border border-purple-200 flex flex-col justify-between shadow-2xs">
              <span className="text-[0.55rem] sm:text-[0.62rem] uppercase font-bold text-purple-800">⚡ Ashtami</span>
              <span className="font-serif text-[0.82rem] sm:text-[0.92rem] text-purple-950 font-bold mt-0.5">
                {monthSacredDates.kaalAshtami.length > 0 ? `${monthSacredDates.kaalAshtami[0]} ${currentDate.toLocaleDateString('en-IN', { month: 'short' })}` : '8th'}
              </span>
            </div>
          </div>
        </div>
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
              className="p-1.5 hover:bg-ink/5 rounded-full transition-colors text-ink-soft hover:text-ink cursor-pointer"
              title="Previous Week"
            >
              <LucideChevronLeft size={15} />
            </button>
            <button
              onClick={goToToday}
              className="px-2.5 py-0.5 text-[0.68rem] sm:text-[0.7rem] font-semibold text-ink-soft hover:text-ink transition-colors uppercase tracking-wider cursor-pointer"
              title="Jump to Today"
            >
              Today
            </button>
            <button
              onClick={nextWeek}
              className="p-1.5 hover:bg-ink/5 rounded-full transition-colors text-ink-soft hover:text-ink cursor-pointer"
              title="Next Week"
            >
              <LucideChevronRight size={15} />
            </button>
          </div>
        </div>

        {/* Button to directly open the Big Monthly Calendar Card */}
        <button
          onClick={openBigMonthlyCalendar}
          className="w-full sm:w-auto px-4 sm:px-5 py-2.5 sm:py-2 rounded-full text-xs font-semibold bg-[#B8934A] hover:bg-[#99732B] text-white shadow-xs transition-all flex items-center justify-center gap-2 cursor-pointer"
        >
          <LucideCalendar size={14} /> Open Monthly Calendar Card
        </button>
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

                {/* Theme of the day (Clean text / dot for mobile) */}
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
                      {WEEKLY_DEITIES[weekDays[openDay].getDay()].leader && (
                        <span className="text-[#B8934A]">
                          | {WEEKLY_DEITIES[weekDays[openDay].getDay()].leader}
                        </span>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* ── BIG MONTHLY LUNAR CALENDAR CARD MODAL (LIGHT THEME) ── */}
      <AnimatePresence>
        {isMonthModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsMonthModalOpen(false)}
            className="fixed inset-0 z-[500] flex items-center justify-center p-2 sm:p-4 md:p-6 bg-black/60 backdrop-blur-md overflow-y-auto"
          >
            <motion.div
              initial={{ scale: 0.96, y: 15 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.96, y: 15 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-[#FCFBF8] text-ink rounded-[28px] border border-amber-300 shadow-2xl max-w-6xl w-full max-h-[92vh] flex flex-col overflow-hidden relative"
            >
              {/* Top Banner: Hindu Lunar Calendar Title + Blessing (Light Theme) */}
              <div
                className="p-4 sm:p-5 md:p-7 relative overflow-hidden border-b border-amber-300/40"
                style={{
                  background: hinduMonthTheme.bgGradient,
                }}
              >
                {/* Close Button at top right */}
                <button
                  onClick={() => setIsMonthModalOpen(false)}
                  className="absolute top-3 right-3 sm:top-4 sm:right-4 z-20 w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white/80 hover:bg-white border border-amber-300/50 shadow-sm flex items-center justify-center text-ink-soft hover:text-ink transition-all cursor-pointer"
                  title="Close Calendar"
                >
                  <LucideX size={16} />
                </button>

                {/* Poster Inspired Header Subtitle */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 sm:gap-4 pr-7 md:pr-0">
                  <div>
                    <div className="flex items-center gap-1.5 sm:gap-2 text-[0.62rem] sm:text-[0.72rem] md:text-[0.78rem] uppercase tracking-[0.12em] sm:tracking-[0.16em] font-bold text-amber-800">
                      <span>ॐ सर्वं भवन्तु सुखिनः</span>
                      <span>·</span>
                      <span className="hidden sm:inline">TWELVE MONTHS ETERNAL WISDOM</span>
                      <span className="sm:hidden">12 MONTHS</span>
                      <span>·</span>
                      <span>ॐ सर्वे सन्तु निरामयाः</span>
                    </div>

                    {/* Month Title & Devanagari */}
                    <div className="flex items-baseline gap-2 sm:gap-3 mt-1 sm:mt-1.5 flex-wrap">
                      <h2 className="font-serif text-[1.8rem] sm:text-[2.2rem] md:text-[2.8rem] font-bold text-ink tracking-tight leading-none">
                        {hinduMonthTheme.hinduName}
                      </h2>
                      <span className="font-serif text-lg sm:text-[1.4rem] md:text-[1.7rem] text-amber-800/80 font-normal">
                        ({hinduMonthTheme.devanagari})
                      </span>
                      <span className="text-[0.7rem] sm:text-xs md:text-sm font-sans px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full bg-white/80 border border-amber-300/60 text-ink font-medium shadow-xs">
                        {currentDate.toLocaleDateString('en-IN', { month: 'long' })} {currentYear} · {hinduMonthTheme.gregorianSpan}
                      </span>
                    </div>

                    {/* Presiding Deity & Month Theme */}
                    <div className="flex items-center gap-2 sm:gap-3 mt-2 sm:mt-2.5 flex-wrap">
                      <span className="px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-lg bg-white/90 text-amber-900 border border-amber-400/50 font-serif text-xs sm:text-sm md:text-base font-semibold shadow-xs">
                        Deity: {hinduMonthTheme.primaryDeity}
                      </span>
                      <span className="px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-lg bg-black/5 text-ink-soft font-medium text-[0.7rem] sm:text-xs md:text-sm border border-black/5">
                        Theme: {hinduMonthTheme.themeTitle}
                      </span>
                    </div>
                  </div>

                  {/* Mantra Box */}
                  <div className="max-w-md bg-white/85 border border-amber-300/60 rounded-xl sm:rounded-[18px] p-2.5 sm:p-3.5 shadow-sm backdrop-blur-sm">
                    <div className="text-[0.62rem] sm:text-[0.68rem] tracking-wider uppercase text-amber-800 font-bold mb-0.5">
                      Divine Mantra & Blessing
                    </div>
                    <p className="font-serif text-[0.85rem] sm:text-[0.95rem] text-[#2B1D0E] italic leading-snug font-medium">
                      "{hinduMonthTheme.mantra}"
                    </p>
                    <p className="text-[0.68rem] sm:text-[0.74rem] text-ink-soft mt-0.5 sm:mt-1">
                      {hinduMonthTheme.themeDescription}
                    </p>
                  </div>
                </div>
              </div>

              {/* ── Control Bar: Year Navigation, Month Tabs & View Mode ── */}
              <div className="bg-[#F6F2EA] px-3 sm:px-4 md:px-6 py-2.5 sm:py-3 border-b border-ink/8 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-2.5 sm:gap-3">
                {/* Year Changer (< 2026 > and quick dropdown) */}
                <div className="flex items-center justify-between sm:justify-start gap-2 flex-wrap">
                  <div className="flex items-center bg-white border border-amber-300/70 rounded-full p-0.5 sm:p-1 shadow-xs">
                    <button
                      onClick={prevYear}
                      className="p-1 sm:p-1.5 hover:bg-amber-50 rounded-full transition-colors text-ink-soft hover:text-ink cursor-pointer"
                      title="Previous Year"
                    >
                      <LucideChevronLeft size={15} />
                    </button>
                    <span className="font-serif text-base sm:text-lg font-bold px-2 sm:px-3 text-[#B8934A]">
                      {currentYear}
                    </span>
                    <button
                      onClick={nextYear}
                      className="p-1 sm:p-1.5 hover:bg-amber-50 rounded-full transition-colors text-ink-soft hover:text-ink cursor-pointer"
                      title="Next Year"
                    >
                      <LucideChevronRight size={15} />
                    </button>
                  </div>

                  {/* Year Quick Selector */}
                  <select
                    value={currentYear}
                    onChange={(e) => setYear(Number(e.target.value))}
                    className="bg-white text-ink border border-amber-300/70 rounded-full px-2.5 sm:px-3 py-1 sm:py-1.5 text-xs font-medium focus:outline-none focus:border-amber-500 cursor-pointer shadow-xs"
                  >
                    {availableYears.map((yr) => (
                      <option key={yr} value={yr}>
                        Year {yr}
                      </option>
                    ))}
                  </select>

                  <button
                    onClick={goToToday}
                    className="px-2.5 sm:px-3 py-1 sm:py-1.5 bg-amber-100 hover:bg-amber-200/80 border border-amber-300/70 text-amber-900 rounded-full text-[0.68rem] sm:text-xs font-semibold uppercase tracking-wider transition-colors shadow-xs cursor-pointer"
                  >
                    Jump to Today
                  </button>
                </div>

                {/* Filter / View Mode Toggle */}
                <div className="flex items-center gap-2 justify-center sm:justify-end">
                  <div className="flex bg-white p-0.5 sm:p-1 rounded-full border border-ink/10 text-xs shadow-xs w-full sm:w-auto justify-center">
                    <button
                      onClick={() => setActiveMonthTab('calendar')}
                      className={`flex-1 sm:flex-initial px-3 sm:px-3.5 py-1 rounded-full font-medium transition-all text-center cursor-pointer ${
                        activeMonthTab === 'calendar'
                          ? 'bg-[#B8934A] text-white shadow-xs font-semibold'
                          : 'text-ink-soft hover:text-ink'
                      }`}
                    >
                      Monthly Grid
                    </button>
                    <button
                      onClick={() => setActiveMonthTab('journey12')}
                      className={`flex-1 sm:flex-initial px-3 sm:px-3.5 py-1 rounded-full font-medium transition-all flex items-center justify-center gap-1 cursor-pointer ${
                        activeMonthTab === 'journey12'
                          ? 'bg-[#B8934A] text-white shadow-xs font-semibold'
                          : 'text-ink-soft hover:text-ink'
                      }`}
                    >
                      <LucideGrid size={13} /> 12 Months Journey
                    </button>
                  </div>
                </div>
              </div>

              {/* ── 12 Month Horizontal Scrollable Tabs ── */}
              {activeMonthTab === 'calendar' && (
                <div className="bg-[#FAF7F2] px-3 sm:px-4 py-2 sm:py-2.5 border-b border-ink/8 overflow-x-auto scrollbar-none flex items-center gap-1.5">
                  {HINDU_LUNAR_MONTHS.map((hm) => {
                    const isSelected = currentMonthIdx === hm.gregorianMonthIndex;
                    return (
                      <button
                        key={hm.id}
                        onClick={() => setMonthIndex(hm.gregorianMonthIndex)}
                        className={`px-3 sm:px-3.5 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-all flex items-center gap-1.5 cursor-pointer ${
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
              )}

              {/* ── MAIN CONTENT AREA ── */}
              <div className="flex-1 overflow-y-auto p-3 sm:p-4 md:p-6 space-y-4 sm:space-y-6 bg-[#FCFBF8]">
                {activeMonthTab === 'calendar' ? (
                  <>
                    {/* Month Grid Card */}
                    <div className="bg-white border border-ink/8 rounded-xl sm:rounded-[22px] p-2.5 sm:p-4 md:p-6 shadow-sm">
                      {/* Day of week headers */}
                      <div className="grid grid-cols-7 gap-1 sm:gap-1.5 md:gap-2.5 text-xs mb-2 sm:mb-3">
                        {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((d, dIdx) => (
                          <div
                            key={d}
                            className={`font-semibold uppercase tracking-wider text-[0.58rem] sm:text-[0.68rem] md:text-[0.74rem] text-center py-1 sm:py-1.5 rounded-md sm:rounded-lg ${
                              dIdx === 0 ? 'text-emerald-700 bg-emerald-50 font-bold' : 'text-ink-soft bg-[#F5F1E9]'
                            }`}
                          >
                            {d}
                          </div>
                        ))}
                      </div>

                      {/* Month Days Grid */}
                      <div className="grid grid-cols-7 gap-1 sm:gap-1.5 md:gap-2.5">
                        {/* Blank leading cells */}
                        {Array.from({
                          length: new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).getDay(),
                        }).map((_, i) => (
                          <div
                            key={`blank-${i}`}
                            className="min-h-[46px] sm:min-h-[70px] md:min-h-[114px] rounded-lg sm:rounded-[16px] opacity-25 bg-[#F5F1E9] border border-transparent"
                          />
                        ))}

                        {/* Day Cells */}
                        {Array.from({
                          length: new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate(),
                        }).map((_, i) => {
                          const dayNum = i + 1;
                          const date = new Date(currentDate.getFullYear(), currentDate.getMonth(), dayNum);
                          const dayOfWeek = date.getDay();
                          const deity = WEEKLY_DEITIES[dayOfWeek];
                          const sacredTithi = getSacredTithiForDate(date);
                          const isToday = date.toDateString() === today.toDateString();
                          const dayFestivals = monthFestivals[dayNum] || [];

                          // Color Styling per tithi and festival
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
                          } else if (sacredTithi?.type === 'kaal_ratri') {
                            cellBg = "bg-gradient-to-br from-[#FFF0EB] to-[#FFDDD1] text-[#6B2211] shadow-xs";
                            cellBorder = "border-orange-300 ring-1 ring-orange-300/40";
                            textNumColor = "text-orange-950 font-bold";
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
                              className={`p-1 sm:p-1.5 md:p-2.5 border rounded-lg sm:rounded-[16px] transition-all duration-200 cursor-pointer min-h-[46px] sm:min-h-[70px] md:min-h-[114px] flex flex-col justify-between relative group shadow-2xs ${cellBg} ${cellBorder}`}
                            >
                              {/* Top Row: Date Number & Badges */}
                              <div className="flex items-center justify-between">
                                <span className={`font-serif text-[0.82rem] sm:text-[1.1rem] md:text-[1.35rem] leading-none ${textNumColor}`}>
                                  {dayNum}
                                </span>

                                <div className="flex items-center gap-0.5 sm:gap-1">
                                  {isToday && (
                                    <span className="text-[0.48rem] sm:text-[0.55rem] uppercase font-bold tracking-wider px-1 sm:px-1.5 py-0.2 bg-[#B8934A] text-white rounded font-sans hidden sm:inline">
                                      Today
                                    </span>
                                  )}
                                  {sacredTithi && (
                                    <span className="text-[0.7rem] sm:text-xs" title={sacredTithi.title}>
                                      {sacredTithi.icon}
                                    </span>
                                  )}
                                  {dayFestivals.length > 0 && !sacredTithi && (
                                    <span className="text-[0.7rem] sm:text-xs" title={dayFestivals[0].name}>
                                      ✨
                                    </span>
                                  )}
                                </div>
                              </div>

                              {/* Middle: Festivals / Badges (Detailed on desktop, dot/icon on phone) */}
                              <div className="hidden md:block my-1 space-y-0.5">
                                {dayFestivals.map((fest, fIdx) => (
                                  <div
                                    key={fIdx}
                                    className="text-[0.58rem] md:text-[0.66rem] font-bold px-1.5 py-0.5 rounded bg-amber-100 text-amber-900 border border-amber-300/60 truncate shadow-2xs flex items-center gap-0.5"
                                    title={`${fest.name}: ${fest.description}`}
                                  >
                                    <span>✨</span>
                                    <span className="truncate">{fest.name}</span>
                                  </div>
                                ))}

                                {sacredTithi && (
                                  <div
                                    className="text-[0.58rem] md:text-[0.65rem] font-bold px-1.5 py-0.5 rounded uppercase tracking-wider truncate text-center"
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

                              {/* Bottom: Daily Sadhana Tag */}
                              <div className="mt-auto pt-0.5 md:pt-1 border-t border-black/5">
                                <span className={`block text-[0.52rem] sm:text-[0.58rem] md:text-[0.65rem] font-medium truncate ${
                                  sacredTithi?.type === 'amavasya' ? 'text-ivory/70' : 'text-ink-soft group-hover:text-ink'
                                }`}>
                                  <span className="md:hidden">
                                    {sacredTithi?.shortTitle || deity?.title.split('/')[0].slice(0, 4)}
                                  </span>
                                  <span className="hidden md:inline">
                                    {deity?.title.split('/')[0].trim()}
                                  </span>
                                </span>
                              </div>
                            </div>
                          );
                        })}
                      </div>

                      {/* ── Comprehensive Color Legend ── */}
                      <div className="mt-4 sm:mt-6 pt-3 sm:pt-5 border-t border-ink/8 flex flex-wrap items-center justify-center gap-2 sm:gap-4 md:gap-6 text-[0.68rem] sm:text-[0.74rem] text-ink-soft">
                        <div className="flex items-center gap-1.5">
                          <span className="w-3 h-3 sm:w-3.5 sm:h-3.5 rounded bg-gradient-to-br from-[#1C1814] to-[#2E271D] border border-amber-400 inline-block" />
                          <span className="font-semibold text-ink">● Amavasya</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <span className="w-3 h-3 sm:w-3.5 sm:h-3.5 rounded bg-gradient-to-br from-[#FEF3C7] to-[#FDE68A] border border-amber-400 inline-block" />
                          <span className="font-semibold text-ink">○ Purnima</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <span className="w-3 h-3 sm:w-3.5 sm:h-3.5 rounded bg-gradient-to-br from-[#F5EDFD] to-[#E9D5FF] border border-purple-300 inline-block" />
                          <span className="font-semibold text-purple-900">⚡ Kaal Ashtami</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <span className="w-3 h-3 sm:w-3.5 sm:h-3.5 rounded bg-gradient-to-br from-[#FFF0EB] to-[#FFDDD1] border border-orange-300 inline-block" />
                          <span className="font-semibold text-orange-950">🌙 Kaal Ratri</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <span className="w-3 h-3 sm:w-3.5 sm:h-3.5 rounded bg-gradient-to-br from-[#ECFDF5] to-[#D1FAE5] border border-emerald-300 inline-block" />
                          <span className="font-semibold text-emerald-900">🪔 Ekadashi</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <span className="w-3 h-3 sm:w-3.5 sm:h-3.5 rounded bg-amber-100 border border-amber-300 inline-block" />
                          <span className="font-semibold text-amber-900">✨ Festivals</span>
                        </div>
                      </div>
                    </div>

                    {/* Major Festivals List for this Month */}
                    {Object.keys(monthFestivals).length > 0 && (
                      <div className="bg-white border border-ink/8 rounded-xl sm:rounded-[22px] p-4 sm:p-5 md:p-6 shadow-sm">
                        <div className="flex items-center gap-2 mb-3 sm:mb-4">
                          <LucideSparkles className="text-[#B8934A]" size={18} />
                          <h4 className="font-serif text-lg sm:text-xl font-bold text-ink">
                            Major Festivals & Celebrations in {currentDate.toLocaleDateString('en-IN', { month: 'long' })} {currentYear}
                          </h4>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5 sm:gap-3.5">
                          {Object.entries(monthFestivals).flatMap(([day, fList]) =>
                            fList.map((fest, fIdx) => (
                              <div
                                key={`${day}-${fIdx}`}
                                onClick={() => setSelectedDateDetail(new Date(currentYear, currentMonthIdx, Number(day)))}
                                className="p-3 sm:p-4 rounded-xl sm:rounded-[16px] bg-[#FAF8F3] border border-ink/8 hover:border-[#B8934A]/50 transition-all flex items-start gap-3 sm:gap-3.5 cursor-pointer group shadow-2xs"
                              >
                                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-[#B8934A] to-[#99732B] text-white font-serif flex flex-col items-center justify-center font-bold flex-shrink-0 shadow-xs">
                                  <span className="text-base sm:text-lg leading-none">{day}</span>
                                  <span className="text-[0.58rem] sm:text-[0.62rem] uppercase opacity-90">{currentDate.toLocaleDateString('en-IN', { month: 'short' })}</span>
                                </div>
                                <div className="flex-1 min-w-0">
                                  <div className="flex items-center justify-between gap-2">
                                    <h5 className="font-serif text-base sm:text-lg font-bold text-ink group-hover:text-[#B8934A] transition-colors truncate">
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
                                  <p className="text-xs text-ink-soft/80 mt-1 line-clamp-2">
                                    {fest.description}
                                  </p>
                                </div>
                              </div>
                            ))
                          )}
                        </div>
                      </div>
                    )}
                  </>
                ) : (
                  /* ── 12 MONTHS DIVINE JOURNEY GALLERY (From Uploaded Poster) ── */
                  <div className="space-y-4 sm:space-y-6">
                    <div className="text-center max-w-2xl mx-auto py-2">
                      <div className="text-xs tracking-[0.2em] uppercase font-bold text-[#B8934A] mb-1">
                        HINDU LUNAR CALENDAR
                      </div>
                      <h3 className="font-serif text-xl sm:text-2xl md:text-3xl font-bold text-ink">
                        Twelve Months · Eternal Wisdom · A Divine Journey
                      </h3>
                      <p className="text-xs text-ink-soft mt-1">
                        May the Divine Grace Guide You Through All Seasons of Life
                      </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
                      {HINDU_LUNAR_MONTHS.map((hm) => {
                        const isCurrentActive = currentMonthIdx === hm.gregorianMonthIndex;
                        return (
                          <div
                            key={hm.id}
                            onClick={() => {
                              setMonthIndex(hm.gregorianMonthIndex);
                              setActiveMonthTab('calendar');
                            }}
                            className={`rounded-xl sm:rounded-[20px] p-4 sm:p-5 border overflow-hidden relative cursor-pointer transition-all duration-200 hover:-translate-y-1 shadow-sm flex flex-col justify-between min-h-[190px] sm:min-h-[220px] group ${
                              isCurrentActive
                                ? 'border-[#B8934A] ring-2 ring-[#B8934A]/40 bg-white'
                                : 'border-ink/8 hover:border-[#B8934A]/40 bg-white'
                            }`}
                            style={{
                              background: hm.bgGradient,
                              color: hm.textColor,
                            }}
                          >
                            <div>
                              <div className="flex items-center justify-between mb-2">
                                <span className="text-[0.68rem] sm:text-[0.7rem] uppercase tracking-widest font-bold opacity-80">
                                  Month {hm.id}
                                </span>
                                <span className="text-[0.68rem] sm:text-[0.72rem] px-2 py-0.5 rounded-full bg-white/80 text-ink border border-black/5 font-sans font-medium">
                                  {hm.gregorianSpan}
                                </span>
                              </div>

                              <h4 className="font-serif text-[1.4rem] sm:text-[1.6rem] font-bold tracking-tight group-hover:text-[#B8934A] transition-colors">
                                {hm.hinduName}
                              </h4>
                              <div className="font-serif text-xs opacity-80 mb-2">
                                ({hm.devanagari})
                              </div>

                              <div className="p-2 sm:p-2.5 rounded-xl bg-white/70 border border-black/5 my-2">
                                <div className="text-[0.65rem] sm:text-[0.68rem] uppercase font-bold tracking-wider opacity-90">
                                  {hm.primaryDeity}
                                </div>
                                <div className="font-serif text-xs sm:text-sm font-semibold mt-0.5">
                                  {hm.themeTitle}
                                </div>
                              </div>
                            </div>

                            <div className="pt-2 border-t border-black/5 flex items-center justify-between text-xs opacity-80">
                              <span className="italic truncate max-w-[150px] sm:max-w-[170px]">"{hm.blessing}"</span>
                              <span className="font-bold group-hover:translate-x-0.5 transition-transform">→</span>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Day Detail Modal (Light Theme) ── */}
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
              <button
                onClick={() => setSelectedDateDetail(null)}
                className="absolute top-4 right-4 sm:top-5 sm:right-5 w-8 h-8 rounded-full bg-ink/5 hover:bg-ink/10 flex items-center justify-center text-ink-soft hover:text-ink text-sm transition-colors cursor-pointer"
              >
                ✕
              </button>

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
                      {WEEKLY_DEITIES[selectedDateDetail.getDay()].leader && (
                        <span className="font-medium text-ink">| {WEEKLY_DEITIES[selectedDateDetail.getDay()].leader}</span>
                      )}
                    </div>
                  </div>
                </div>
              )}

              <div className="mt-5 sm:mt-6 flex justify-end">
                <button
                  onClick={() => setSelectedDateDetail(null)}
                  className="w-full sm:w-auto px-6 py-2 rounded-full bg-ink hover:bg-[#B8934A] text-white font-semibold text-xs tracking-wider uppercase transition-colors cursor-pointer text-center"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}



