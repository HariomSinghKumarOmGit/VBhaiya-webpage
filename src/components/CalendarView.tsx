"use client";

import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { nextFullMoon, nextNewMoon, addDays, fmt } from '@/utils/moon';
import { LucideChevronLeft, LucideChevronRight } from 'lucide-react';

export default function CalendarView({ initialEvents }: { initialEvents: any[] }) {
  const [view, setView] = useState<'week' | 'month'>('week');
  const [currentDate, setCurrentDate] = useState(new Date());
  const [openDay, setOpenDay] = useState<number | null>(null);

  const today = new Date();

  // Moon phases
  const purnima = useMemo(() => nextFullMoon(today), []);
  const amavasya = useMemo(() => nextNewMoon(today), []);

  // Example ongoing program
  const ongoingStart = addDays(today, -6);
  const ongoingEnd = addDays(today, 15);

  const startOfWeek = addDays(currentDate, -currentDate.getDay());

  const weekDays = useMemo(() => {
    return Array.from({ length: 7 }).map((_, i) => addDays(startOfWeek, i));
  }, [startOfWeek]);

  const getEventsForDate = (date: Date) => {
    const events = initialEvents.filter(e => {
      const eDate = new Date(e.event_date);
      return eDate.toDateString() === date.toDateString();
    });
    if (date.toDateString() === purnima.toDateString()) {
      events.push({ title: 'Purnima ○', type: 'purnima' });
    }
    if (date.toDateString() === amavasya.toDateString()) {
      events.push({ title: 'Amavasya ●', type: 'amavasya' });
    }
    return events;
  };

  const dayShort = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  return (
    <div>
      {/* ── Top info grid ── */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-[1px] rounded-[24px] overflow-hidden mb-14 border border-ink/8"
        style={{ background: "rgba(27,24,18,0.06)" }}
      >
        {/* Ongoing */}
        <div className="bg-white p-[28px_26px]">
          <div className="text-[0.72rem] tracking-[0.1em] text-ink-soft mb-2.5 uppercase font-medium">
            Ongoing · 21-Day Sadhana
          </div>
          <div className="font-serif text-[1.28rem] leading-[1.35] text-ink">
            {fmt(ongoingStart, { day: 'numeric', month: 'short' })} –{' '}
            {fmt(ongoingEnd, { day: 'numeric', month: 'short' })}
            <small className="block font-sans text-[0.8rem] text-ink-soft mt-1.5 font-normal">
              Daily sits, 6:00–7:00 AM
            </small>
          </div>
        </div>

        {/* Today — gold accent */}
        <div className="p-[28px_26px]" style={{ background: "#B8934A" }}>
          <div className="text-[0.72rem] tracking-[0.1em] mb-2.5 uppercase font-medium"
            style={{ color: "rgba(27,24,18,0.6)" }}>
            Today
          </div>
          <div className="font-serif text-[1.28rem] leading-[1.35]" style={{ color: "#1B1812" }}>
            {fmt(today, { day: 'numeric', month: 'long' })}
            <small className="block font-sans text-[0.8rem] mt-1.5 font-normal"
              style={{ color: "rgba(27,24,18,0.6)" }}>
              {today.toLocaleDateString('en-IN', { weekday: 'long' })}
            </small>
          </div>
        </div>

        {/* Moon phases */}
        <div className="bg-white p-[28px_26px]">
          <div className="text-[0.72rem] tracking-[0.1em] text-ink-soft mb-2.5 uppercase font-medium">
            Purnima · Amavasya
          </div>
          <div className="font-serif text-[1.28rem] leading-[1.35] text-ink">
            {fmt(purnima)}
            <small className="block font-sans text-[0.8rem] text-ink-soft mt-1.5 font-normal">
              Amavasya — {fmt(amavasya)}
            </small>
          </div>
        </div>
      </div>

      {/* ── Week / Month Toggle ── */}
      <div className="flex items-center justify-between mb-5">
        <div className="text-[0.82rem] tracking-[0.06em] text-ink-soft uppercase">
          {view === 'week' ? 'This week' : 'This month'}
        </div>
        <div className="flex gap-1.5 text-sm bg-ink/5 rounded-full p-1 border border-ink/10">
          <button
            className={`px-4 py-1.5 rounded-full text-[0.8rem] transition-all duration-200 ${
              view === 'week'
                ? 'bg-ink text-ivory shadow-sm'
                : 'text-ink-soft hover:bg-ink/8'
            }`}
            onClick={() => setView('week')}
          >
            Week
          </button>
          <button
            className={`px-4 py-1.5 rounded-full text-[0.8rem] transition-all duration-200 ${
              view === 'month'
                ? 'bg-ink text-ivory shadow-sm'
                : 'text-ink-soft hover:bg-ink/8'
            }`}
            onClick={() => setView('month')}
          >
            Month
          </button>
        </div>
      </div>

      {/* ── Week View ── */}
      {view === 'week' && (
        <div className="grid grid-cols-4 md:grid-cols-7 gap-2">
          {weekDays.map((d, i) => {
            const isToday = d.toDateString() === today.toDateString();
            const events = getEventsForDate(d);
            const tag = events.map(e => e.title).join(', ');
            const isActive = openDay === i;

            return (
              <div key={i} className="contents md:block">
                <div
                  className={`hidden md:flex flex-col rounded-[16px] p-[16px_10px] text-center cursor-pointer transition-all duration-300 border ${
                    isToday
                      ? 'text-ivory border-gold shadow-sm'
                      : 'bg-white border-ink/8 hover:border-ink/20 hover:-translate-y-1 hover:shadow-md'
                  } ${isActive && !isToday ? 'border-ink/20 bg-ivory-2' : ''}`}
                  style={isToday ? { background: '#B8934A', borderColor: '#B8934A' } : {}}
                  onClick={() => setOpenDay(isActive ? null : i)}
                >
                  <div className={`text-[0.68rem] tracking-[0.08em] mb-2 uppercase font-medium ${
                    isToday ? 'opacity-80' : 'text-ink-soft'
                  }`}>
                    {dayShort[d.getDay()]}
                  </div>
                  <div className={`font-serif text-[1.42rem] ${isToday ? 'text-ivory' : 'text-ink'}`}>
                    {d.getDate()}
                  </div>
                  <div className={`text-[0.58rem] mt-1.5 min-h-[12px] leading-tight ${
                    isToday ? 'text-ivory/70' : 'text-ink-soft/70'
                  }`}>
                    {tag}
                  </div>
                </div>
                {/* Mobile (first 4) */}
                <div
                  className={`md:hidden rounded-[16px] p-[16px_10px] text-center cursor-pointer transition-all duration-300 border ${
                    i >= 4 ? 'hidden' : 'flex flex-col'
                  } ${
                    isToday
                      ? 'text-ivory border-gold'
                      : 'bg-white border-ink/8 hover:border-ink/20'
                  }`}
                  style={isToday ? { background: '#B8934A', borderColor: '#B8934A' } : {}}
                  onClick={() => setOpenDay(isActive ? null : i)}
                >
                  <div className={`text-[0.68rem] tracking-[0.08em] mb-2 uppercase font-medium ${
                    isToday ? 'opacity-80' : 'text-ink-soft'
                  }`}>
                    {dayShort[d.getDay()]}
                  </div>
                  <div className={`font-serif text-[1.42rem] ${isToday ? 'text-ivory' : 'text-ink'}`}>
                    {d.getDate()}
                  </div>
                  <div className={`text-[0.58rem] mt-1.5 min-h-[12px] overflow-hidden text-ellipsis whitespace-nowrap ${
                    isToday ? 'text-ivory/70' : 'text-ink-soft/70'
                  }`}>
                    {tag}
                  </div>
                </div>
              </div>
            );
          })}

          <AnimatePresence>
            {openDay !== null && (
              <motion.div
                initial={{ opacity: 0, height: 0, marginTop: 0 }}
                animate={{ opacity: 1, height: 'auto', marginTop: 10 }}
                exit={{ opacity: 0, height: 0, marginTop: 0 }}
                className="col-span-full bg-white border border-ink/8 rounded-[16px] overflow-hidden shadow-sm"
              >
                <div className="p-[22px_26px]">
                  <h4 className="font-serif font-normal text-[1.1rem] mb-3 text-ink">
                    {weekDays[openDay].toLocaleDateString('en-IN', {
                      weekday: 'long',
                      day: 'numeric',
                      month: 'long',
                    })}
                  </h4>
                  <ul className="list-none">
                    <li className="flex justify-between text-[0.88rem] text-ink-soft py-2 border-t border-ink/6 first:border-0">
                      <span>Meditation</span><span>6:00 AM</span>
                    </li>
                    <li className="flex justify-between text-[0.88rem] text-ink-soft py-2 border-t border-ink/6">
                      <span>Breathwork</span><span>7:30 AM</span>
                    </li>
                    {getEventsForDate(weekDays[openDay]).map((e, idx) => (
                      <li
                        key={idx}
                        className="flex justify-between text-[0.88rem] py-2 border-t border-ink/6"
                      >
                        <span className="text-gold font-medium">{e.title}</span>
                        <span className="text-ink-soft">All day</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      )}

      {/* ── Month View ── */}
      {view === 'month' && (
        <div className="bg-white border border-ink/8 rounded-[24px] p-8 shadow-sm">
          <div className="flex justify-between items-center mb-7">
            <button
              onClick={() => setCurrentDate(addDays(currentDate, -30))}
              className="p-2 hover:bg-ink/5 rounded-full transition-colors text-ink-soft hover:text-ink"
            >
              <LucideChevronLeft size={18} />
            </button>
            <h3 className="font-serif text-[1.35rem] text-ink">
              {currentDate.toLocaleDateString('en-IN', { month: 'long', year: 'numeric' })}
            </h3>
            <button
              onClick={() => setCurrentDate(addDays(currentDate, 30))}
              className="p-2 hover:bg-ink/5 rounded-full transition-colors text-ink-soft hover:text-ink"
            >
              <LucideChevronRight size={18} />
            </button>
          </div>

          <div className="grid grid-cols-7 gap-1.5 text-sm">
            {dayShort.map(d => (
              <div key={d} className="font-medium mb-3 uppercase tracking-widest text-[0.64rem] text-ink-soft text-center">
                {d}
              </div>
            ))}
            {/* Blank leading cells */}
            {Array.from({
              length: new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).getDay(),
            }).map((_, i) => (
              <div key={`blank-${i}`} className="p-3" />
            ))}
            {/* Days */}
            {Array.from({
              length: new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate(),
            }).map((_, i) => {
              const d = new Date(currentDate.getFullYear(), currentDate.getMonth(), i + 1);
              const events = getEventsForDate(d);
              const isToday = d.toDateString() === today.toDateString();
              return (
                <div
                  key={i}
                  className={`p-3 border rounded-[12px] hover:bg-ink/4 transition-colors cursor-pointer min-h-[64px] flex flex-col relative ${
                    isToday
                      ? 'border-gold bg-gold/8'
                      : 'border-ink/6 hover:border-ink/14'
                  }`}
                >
                  <span
                    className={`font-serif text-[1.05rem] ${isToday ? 'text-gold font-medium' : 'text-ink'}`}
                  >
                    {i + 1}
                  </span>
                  <div className="mt-auto flex flex-col gap-1">
                    {events.map((e, idx) => (
                      <span
                        key={idx}
                        className="w-1.5 h-1.5 rounded-full mx-auto"
                        style={{ background: '#B8934A' }}
                      />
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
