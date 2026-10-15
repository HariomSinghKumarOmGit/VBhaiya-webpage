"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import {
  LucideSparkles,
  LucideFlame,
  LucideHeart,
  LucideMessageCircle,
  LucideSun,
  LucideShield,
  LucideChurch,
  LucideCheck,
  LucideCopy,
  LucideExternalLink,
  LucideArrowRight,
  LucideClock,
  LucideInfo,
} from "lucide-react";

export default function ThreeMonthSadhanaPlan() {
  const { language } = useLanguage();
  const isHi = language === "hi";
  const [copiedMantra, setCopiedMantra] = useState(false);

  const ganeshaMantra = "ॐ श्रीं ह्रीं क्लीं ग्लौं गं वरसिद्धि विनायकाय नमः";

  const handleCopyMantra = () => {
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText(ganeshaMantra);
      setCopiedMantra(true);
      setTimeout(() => setCopiedMantra(false), 2500);
    }
  };

  return (
    <section className="w-full my-8 sm:my-12">
      {/* ── Main Container ── */}
      <div className="bg-[#FAF8F5] border border-amber-900/10 rounded-[28px] sm:rounded-[36px] p-5 sm:p-10 shadow-lg relative overflow-hidden">
        {/* Ethereal background gradient ambient glow */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-orange-500/8 rounded-full blur-3xl pointer-events-none" />

        {/* ── 1. Hero Header ── */}
        <div className="relative z-10 bg-gradient-to-br from-[#1C3A34] via-[#15342F] to-[#0D2420] text-white rounded-[24px] sm:rounded-[30px] p-6 sm:p-10 mb-8 border border-emerald-900/30 shadow-xl overflow-hidden">
          {/* Subtle decorative geometry */}
          <div className="absolute right-0 bottom-0 opacity-15 pointer-events-none translate-x-12 translate-y-12">
            <svg width="260" height="260" viewBox="0 0 200 200" fill="none">
              <circle cx="100" cy="100" r="90" stroke="#EBC38E" strokeWidth="1.5" strokeDasharray="4 4" />
              <circle cx="100" cy="100" r="65" stroke="#EBC38E" strokeWidth="1" />
              <circle cx="100" cy="100" r="40" stroke="#EBC38E" strokeWidth="1.5" />
            </svg>
          </div>

          <div className="relative z-10 max-w-2xl">
            {/* Active Live Pulse Badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1 rounded-full bg-emerald-500/20 text-[#FCE1B6] border border-emerald-400/30 text-xs font-semibold uppercase tracking-wider mb-4">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <span className="w-2 h-2 rounded-full bg-emerald-400 -ml-4.5" />
              <span>
                {isHi
                  ? "वर्तमान में सक्रिय: महीना 01 · वरसिद्धि विनायक साधना"
                  : "CURRENTLY ACTIVE: MONTH 01 · GANESHA SADHANA"}
              </span>
            </div>

            <div className="text-[0.72rem] sm:text-xs tracking-[0.2em] uppercase font-bold text-[#EBC38E] mb-2">
              {isHi ? "बैच 2024 · 2025 · 2026" : "Batches 2024 · 2025 · 2026"}
            </div>

            <h2 className="font-serif text-2xl sm:text-4xl lg:text-5xl text-[#FFFDF8] leading-tight mb-3 font-normal">
              {isHi ? "तीन महीने की साधना यात्रा" : "Three-Month Sadhana Journey"}
            </h2>

            <p className="text-emerald-100/80 text-sm sm:text-base leading-relaxed mb-6 max-w-xl">
              {isHi
                ? "मंत्र, अनुशासन और भक्ति की सरल व अखंड दैनिक यात्रा। वरसिद्धि विनायक साधना से प्रारंभ होकर महालक्ष्मी व दिव्य मार्ग तक।"
                : "A simple daily path of mantra, discipline and devotion. Starting with Var Siddhi Vinayak, advancing to Mahalaxmi, and culminating in personalized divine guidance."}
            </p>

            <div className="flex items-center gap-2.5 flex-wrap">
              <span className="px-3.5 py-1.5 rounded-full bg-[#EBC38E] text-[#1E3731] text-xs font-bold uppercase tracking-wider">
                {isHi ? "3 महीने" : "3 Months"}
              </span>
              <span className="px-3.5 py-1.5 rounded-full bg-white/10 text-white text-xs font-medium border border-white/15">
                {isHi ? "3 साधनाएं (21-दिन चक्र)" : "3 Sadhanas (21-Day Cycles)"}
              </span>
              <span className="px-3.5 py-1.5 rounded-full bg-white/10 text-white text-xs font-medium border border-white/15">
                {isHi ? "शनि व रवि 8:00 PM मीट" : "Sat & Sun 8:00 PM Meet"}
              </span>
            </div>
          </div>
        </div>

        {/* ── 2. How to Complete Each 21-Day Sankalpa ── */}
        <div className="bg-white border border-stone-200/80 rounded-[22px] sm:rounded-[26px] p-6 sm:p-7 mb-8 shadow-xs">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-800/80 mb-2">
            <LucideInfo className="w-3.5 h-3.5 text-amber-700" />
            <span>{isHi ? "संकल्प नियम" : "Sankalpa Discipline"}</span>
          </div>

          <h3 className="font-serif text-xl sm:text-2xl text-ink mb-5 font-medium">
            {isHi ? "हर 21 दिन का संकल्प कैसे पूरा करें" : "How to complete each 21-day sankalpa"}
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] items-center gap-4 mb-5">
            {/* Option A */}
            <div className="bg-[#F8F7F0] border border-stone-200 rounded-2xl p-4 sm:p-5 text-left">
              <div className="font-serif text-2xl sm:text-3xl text-emerald-950 font-semibold mb-1">
                {isHi ? "21 दिन" : "21 Days"}
              </div>
              <div className="text-xs sm:text-sm text-stone-600 font-medium">
                {isHi ? "एक लगातार अखंड संकल्प" : "One continuous sankalpa"}
              </div>
            </div>

            {/* Divider OR */}
            <div className="text-center font-bold text-xs uppercase tracking-widest text-amber-900/60 px-2 py-1 bg-amber-50 rounded-full border border-amber-200 w-fit mx-auto md:w-auto">
              {isHi ? "या (OR)" : "OR"}
            </div>

            {/* Option B */}
            <div className="bg-[#F8F7F0] border border-stone-200 rounded-2xl p-4 sm:p-5 text-left">
              <div className="font-serif text-2xl sm:text-3xl text-emerald-950 font-semibold mb-1">
                {isHi ? "7 दिन × 3 चक्र" : "7 Days × 3 Cycles"}
              </div>
              <div className="text-xs sm:text-sm text-stone-600 font-medium">
                {isHi
                  ? "केवल उन महिलाओं के लिए जिनकी साधना के दौरान माहवारी आने की संभावना है"
                  : "Only for women expecting periods during the sadhana"}
              </div>
            </div>
          </div>

          {/* Notice: When you may skip */}
          <div className="bg-amber-500/10 border-l-4 border-amber-500 rounded-r-xl p-4 text-xs sm:text-sm text-amber-950 leading-relaxed">
            <span className="font-bold block mb-1">
              {isHi ? "साधना कब छोड़ सकते हैं:" : "When you may skip sadhana:"}
            </span>
            {isHi
              ? "महिलाएं माहवारी के दौरान साधना छोड़ सकती हैं। यात्रा करने वाला कोई भी साधक साधना छोड़ सकता है और लौटने पर वहीं से पुनः प्रारंभ कर सकता है।"
              : "Women may skip sadhana during periods. Anyone travelling may also skip sadhana and resume upon return."}
          </div>
        </div>

        {/* ── 3. Your Three-Month Path ── */}
        <div className="mb-8">
          <div className="text-xs font-bold uppercase tracking-wider text-stone-500 mb-1">
            {isHi ? "साधना का मार्ग" : "Sacred Roadmap"}
          </div>
          <h3 className="font-serif text-2xl sm:text-3xl text-ink mb-4 font-medium">
            {isHi ? "आपकी तीन महीने की यात्रा" : "Your three-month path"}
          </h3>

          {/* Daily Target Banner */}
          <div className="bg-[#F2E5C9] border border-amber-300 rounded-2xl p-4 sm:p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mb-6">
            <div>
              <div className="text-[0.68rem] tracking-wider uppercase font-bold text-amber-900 mb-0.5">
                {isHi ? "दैनिक लक्ष्य · पहला और दूसरा महीना" : "DAILY TARGET · MONTHS 1 & 2"}
              </div>
              <div className="font-serif text-xl sm:text-2xl text-amber-950 font-semibold">
                {isHi ? "300–1,000 मंत्र" : "300–1,000 Mantras"}
              </div>
            </div>
            <div className="text-xs sm:text-sm font-semibold text-amber-900 bg-white/70 px-4 py-2 rounded-xl border border-amber-200">
              {isHi ? "या कम से कम 3 घंटे जप" : "OR minimum 3 hours of japa daily"}
            </div>
          </div>

          {/* The 3 Month Cards Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* ── Month 01: ACTIVE NOW (Ganesha) ── */}
            <div className="relative bg-gradient-to-b from-[#FFFDF8] to-[#FFF9EE] border-2 border-[#D57C3B] rounded-[24px] p-6 flex flex-col justify-between shadow-md">
              <div className="absolute -top-3.5 right-6 px-3.5 py-1 rounded-full bg-[#D57C3B] text-white text-[0.68rem] font-bold uppercase tracking-wider shadow-sm flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                <span>{isHi ? "सक्रिय साधना" : "ACTIVE NOW"}</span>
              </div>

              <div>
                <div className="inline-block px-3 py-1 rounded-lg bg-amber-500/15 text-amber-900 text-[0.7rem] font-bold tracking-wider uppercase mb-3">
                  {isHi ? "महीना 01 · 21 दिन" : "MONTH 01 · 21 DAYS"}
                </div>

                <h4 className="font-serif text-2xl text-ink font-semibold mb-1">
                  {isHi ? "वरसिद्धि विनायक" : "Var Siddhi Vinayak"}
                </h4>
                <p className="text-xs text-amber-900/80 font-medium uppercase tracking-wider mb-4">
                  {isHi ? "भगवान श्री गणेश साधना" : "Lord Ganesha Sadhana"}
                </p>

                {/* Mantra Box */}
                <div className="bg-[#FAF0E1] border border-amber-200 rounded-2xl p-4 mb-4 relative group">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[0.68rem] uppercase font-bold text-amber-800 tracking-wider">
                      {isHi ? "सिद्ध महामंत्र" : "Sacred Mantra"}
                    </span>
                    <button
                      onClick={handleCopyMantra}
                      className="inline-flex items-center gap-1 text-[0.7rem] text-amber-900 hover:text-black font-semibold bg-white/80 px-2 py-0.5 rounded-md border border-amber-200 transition-colors cursor-pointer"
                      title="Copy Mantra"
                    >
                      {copiedMantra ? (
                        <>
                          <LucideCheck className="w-3 h-3 text-emerald-600" />
                          <span className="text-emerald-700">{isHi ? "कॉपी हुआ" : "Copied"}</span>
                        </>
                      ) : (
                        <>
                          <LucideCopy className="w-3 h-3" />
                          <span>{isHi ? "कॉपी" : "Copy"}</span>
                        </>
                      )}
                    </button>
                  </div>
                  <div className="font-devanagari text-base sm:text-lg font-bold text-amber-950 leading-relaxed">
                    {ganeshaMantra}
                  </div>
                  <div className="text-xs text-amber-900/75 italic mt-1 font-serif">
                    Om Shreem Hreem Kleem Glaum Gam Varsiddhi Vinayakaya Namaha
                  </div>
                </div>

                {/* Incense Note */}
                <div className="bg-[#FFF3D3] border border-amber-300 rounded-xl p-3.5 mb-4 text-xs text-amber-950 leading-relaxed font-medium">
                  {isHi
                    ? "नियमित सदस्य अगरबत्ती का उपयोग कर सकते हैं। बखूर सदस्य बखूर ऑयल का उपयोग कर सकते हैं और अपनी सुविधा के अनुसार 1, 2 या 3 दीपक जला सकते हैं।"
                    : "Regular members may use agarbatti. Bakhoor members may use Bakhoor oil and light 1, 2 or 3 diyas as convenient."}
                </div>

                {/* Ratio Bar */}
                <div className="mb-4">
                  <div className="h-2 rounded-full overflow-hidden flex bg-amber-200">
                    <div className="bg-[#D57C3B] w-[70%]" title="70% Mental Japa" />
                    <div className="bg-emerald-600 w-[30%]" title="30% Whispering Jaap" />
                  </div>
                  <div className="flex justify-between items-center text-[0.7rem] text-stone-600 font-semibold mt-1.5">
                    <span className="text-[#D57C3B]">
                      {isHi ? "70% मानसिक जप" : "70% Mental Japa"}
                    </span>
                    <span className="text-emerald-700">
                      {isHi ? "30% फुसफुसाकर जप" : "30% Whispering Jaap"}
                    </span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-amber-200/60 flex flex-col gap-2">
                <Link
                  href="/programs/var-siddhi-vinayak-sadhana"
                  className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-[#D57C3B] hover:bg-[#B8652A] text-white text-xs font-bold transition-colors"
                >
                  <span>{isHi ? "विस्तृत गणेश साधना पृष्ठ →" : "Full Ganesha Guide →"}</span>
                </Link>
                <a
                  href="https://meet.google.com/odv-evnd-mfy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-1.5 py-2 px-4 rounded-xl bg-white hover:bg-stone-50 border border-stone-200 text-ink text-xs font-semibold transition-colors"
                >
                  <span>{isHi ? "ज़ूम/मीट (शनि-रवि 8 PM)" : "Zoom / Meet (Sat & Sun 8 PM)"}</span>
                  <LucideExternalLink className="w-3 h-3 text-stone-500" />
                </a>
                <a
                  href="https://wa.me/918818098688?text=Namaste%20Vishal%20Bhaiya,%20I%20would%20like%20to%20join%20the%20everyday%20personal%20session%20of%20Jaap%20and%20Dhyan."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-1.5 py-2 px-4 rounded-xl bg-[#25D366]/15 hover:bg-[#25D366]/25 border border-[#25D366]/35 text-[#0A3D2F] text-xs font-bold transition-colors cursor-pointer"
                >
                  <span>{isHi ? "दैनिक 1-ऑन-1 सत्र (व्हाट्सएप) →" : "Everyday Personal Session (WhatsApp) →"}</span>
                </a>
              </div>
            </div>

            {/* ── Month 02: Mahalaxmi ── */}
            <div className="bg-[#FFFDFB] border border-rose-200/80 rounded-[24px] p-6 flex flex-col justify-between">
              <div>
                <div className="inline-block px-3 py-1 rounded-lg bg-rose-50 text-rose-800 text-[0.7rem] font-bold tracking-wider uppercase mb-3 border border-rose-200">
                  {isHi ? "महीना 02 · 21 दिन" : "MONTH 02 · 21 DAYS"}
                </div>

                <h4 className="font-serif text-2xl text-ink font-semibold mb-1">
                  {isHi ? "महालक्ष्मी साधना" : "Mahalaxmi"}
                </h4>
                <p className="text-xs text-rose-800/80 font-medium uppercase tracking-wider mb-4">
                  {isHi ? "श्री महालक्ष्मी चतुर्विद मंत्र" : "Fourfold Mahalakshmi Chant"}
                </p>

                <div className="bg-rose-50/60 border border-rose-100 rounded-2xl p-4 mb-4">
                  <div className="text-[0.68rem] uppercase font-bold text-rose-800 tracking-wider mb-2">
                    {isHi ? "महालक्ष्मी महामंत्र" : "Mahalakshmi Mantras"}
                  </div>
                  <div className="font-devanagari text-sm sm:text-base font-semibold text-rose-950 space-y-1">
                    <div>ॐ महालक्ष्म्यै नमो नमः</div>
                    <div>ॐ विष्णुप्रियायै नमो नमः</div>
                    <div>ॐ धनप्रदायै नमो नमः</div>
                    <div>ॐ विश्वजनन्यै नमो नमः</div>
                  </div>
                  <div className="text-[0.72rem] text-rose-900/70 italic mt-2 font-serif">
                    Om Mahalakshmyai Namo Namah · Om Vishnu Priyayai Namo Namah · Om Dhanapradayai Namo Namah · Om Vishwajananyai Namo Namah
                  </div>
                </div>

                <p className="text-xs text-stone-500 leading-relaxed">
                  {isHi
                    ? "वरसिद्धि विनायक साधना पूरी करने के बाद प्रारंभ होगी। धन, शांति, और चेतना के विस्तार हेतु परम कल्याणकारी।"
                    : "Begins after completion of Month 01. Establishes prosperity, peace, and spiritual receptivity."}
                </p>
              </div>

              <div className="pt-4 border-t border-rose-100 mt-4">
                <span className="inline-block text-xs font-semibold text-rose-700 bg-rose-50 px-3 py-1.5 rounded-lg border border-rose-200">
                  {isHi ? "आगामी चरण · 21 दिन" : "Upcoming Phase · 21 Days"}
                </span>
              </div>
            </div>

            {/* ── Month 03: Assigned based on progress ── */}
            <div className="bg-[#F8FAF9] border border-emerald-200/80 rounded-[24px] p-6 flex flex-col justify-between">
              <div>
                <div className="inline-block px-3 py-1 rounded-lg bg-emerald-50 text-emerald-800 text-[0.7rem] font-bold tracking-wider uppercase mb-3 border border-emerald-200">
                  {isHi ? "महीना 03 · व्यक्तिगत मार्गदर्शन" : "MONTH 03 · PERSONALLY ASSIGNED"}
                </div>

                <h4 className="font-serif text-2xl text-ink font-semibold mb-1">
                  {isHi ? "हनुमान जी या दुर्गा माता" : "Hanuman Ji or Durga Maata"}
                </h4>
                <p className="text-xs text-emerald-800/80 font-medium uppercase tracking-wider mb-4">
                  {isHi ? "व्यक्तिगत साधना आवंटन" : "Individual Guidance Cycle"}
                </p>

                <div className="bg-emerald-50/70 border border-emerald-100 rounded-2xl p-4 mb-4 text-xs sm:text-sm text-emerald-950 leading-relaxed">
                  <div className="font-bold mb-1 text-emerald-900">
                    {isHi ? "व्यक्तिगत मार्गदर्शन:" : "Assigned based on progress:"}
                  </div>
                  {isHi
                    ? "दूसरी साधना पूरी होने के बाद आपकी आध्यात्मिक प्रगति और स्तर के अनुसार साधना दी जाएगी। व्यक्तिगत मार्गदर्शन मिलने पर ही शुरू करें।"
                    : "Your sadhana will be assigned after completing Month 2, based on your progress and level. Wait for your individual guidance before starting."}
                </div>
              </div>

              <div className="pt-4 border-t border-emerald-100 mt-4">
                <span className="inline-block text-xs font-semibold text-emerald-800 bg-emerald-50 px-3 py-1.5 rounded-lg border border-emerald-200">
                  {isHi ? "मार्गदर्शन उपरांत आरंभ" : "Awaits Individual Assessment"}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* ── 4. Throughout All Three Months: Three Diyas Practice ── */}
        <div className="bg-gradient-to-r from-[#173A34] to-[#1F4C43] text-white rounded-[24px] sm:rounded-[28px] p-6 sm:p-8 mb-8 border border-emerald-800/50 shadow-md">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="max-w-2xl">
              <div className="text-[0.68rem] tracking-[0.16em] uppercase font-bold text-[#EBC38E] mb-1">
                {isHi ? "पूरे तीन महीने" : "THROUGHOUT ALL THREE MONTHS"}
              </div>
              <h4 className="font-serif text-2xl sm:text-3xl font-medium mb-2 text-[#FFFDF8]">
                {isHi ? "तीन दीपक। साप्ताहिक साधना।" : "Three diyas. A weekly practice."}
              </h4>
              <div className="inline-block px-3 py-1 rounded-full bg-white/10 text-white text-xs font-semibold mb-3 border border-white/15">
                {isHi ? "गुरुवार / शुक्रवार / शनिवार" : "Thursday / Friday / Saturday"}
              </div>
              <div className="flex items-start gap-3 text-xs sm:text-sm text-emerald-100/90 leading-relaxed">
                <span className="text-xl">🪔</span>
                <p>
                  {isHi ? (
                    <>
                      निर्देशानुसार तीन दीपक प्रक्रिया करें। दीपक कम से कम <b>3 घंटे</b> जलते रहें; गंभीर साधकों से यह विशेष रूप से अपेक्षित है।
                    </>
                  ) : (
                    <>
                      Follow the three-diya process as instructed. Keep the diyas lit for a minimum of <b>3 hours</b>; this is especially expected from serious seekers.
                    </>
                  )}
                </p>
              </div>
            </div>

            <div className="shrink-0 bg-white/10 p-4 rounded-2xl border border-white/15 text-center">
              <div className="text-3xl mb-1">🪔 🪔 🪔</div>
              <div className="text-[0.7rem] uppercase font-bold tracking-wider text-[#EBC38E]">
                {isHi ? "न्यूनतम 3 घंटे" : "Min 3 Hours Lit"}
              </div>
            </div>
          </div>
        </div>

        {/* ── 5. Daily Attitude (Small Habits · Every Day) ── */}
        <div className="bg-white border border-stone-200/80 rounded-[22px] sm:rounded-[26px] p-6 sm:p-8 mb-8 shadow-xs">
          <div className="text-xs font-bold uppercase tracking-wider text-stone-500 mb-1">
            {isHi ? "छोटी आदतें · हर दिन" : "SMALL HABITS · EVERY DAY"}
          </div>
          <h4 className="font-serif text-2xl sm:text-3xl text-ink mb-6 font-medium">
            {isHi ? "दैनिक आचरण" : "Daily attitude"}
          </h4>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Habit 1 */}
            <div className="bg-[#FAF8F5] border border-amber-200/60 rounded-2xl p-5 flex flex-col items-start gap-3">
              <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center text-lg">
                <LucideHeart className="w-5 h-5" />
              </div>
              <div>
                <h5 className="font-serif text-lg font-semibold text-ink mb-1">
                  {isHi ? "कृतज्ञता से शुरुआत" : "Begin with gratitude"}
                </h5>
                <p className="text-xs sm:text-[0.82rem] text-stone-600 leading-relaxed">
                  {isHi ? "दिन की शुरुआत भगवान को धन्यवाद देकर करें।" : "Thank God as you start your day."}
                </p>
              </div>
            </div>

            {/* Habit 2 */}
            <div className="bg-[#FAF8F5] border border-rose-200/60 rounded-2xl p-5 flex flex-col items-start gap-3">
              <div className="w-10 h-10 rounded-xl bg-rose-100 text-rose-800 flex items-center justify-center text-lg">
                <LucideMessageCircle className="w-5 h-5" />
              </div>
              <div>
                <h5 className="font-serif text-lg font-semibold text-ink mb-1">
                  {isHi ? "मधुर वाणी रखें" : "Speak with kindness"}
                </h5>
                <p className="text-xs sm:text-[0.82rem] text-stone-600 leading-relaxed">
                  {isHi ? "कठोर शब्द, बहस और झगड़े से बचें।" : "Avoid harsh words, arguments and fights."}
                </p>
              </div>
            </div>

            {/* Habit 3 */}
            <div className="bg-[#FAF8F5] border border-sky-200/60 rounded-2xl p-5 flex flex-col items-start gap-3">
              <div className="w-10 h-10 rounded-xl bg-sky-100 text-sky-800 flex items-center justify-center text-lg">
                <LucideSun className="w-5 h-5" />
              </div>
              <div>
                <h5 className="font-serif text-lg font-semibold text-ink mb-1">
                  {isHi ? "सकारात्मक सोच रखें" : "Choose positivity"}
                </h5>
                <p className="text-xs sm:text-[0.82rem] text-stone-600 leading-relaxed">
                  {isHi ? "सकारात्मक, अनुशासित और ईमानदार रहें।" : "Stay positive, disciplined and sincere."}
                </p>
              </div>
            </div>

            {/* Habit 4 */}
            <div className="bg-[#FAF8F5] border border-emerald-200/60 rounded-2xl p-5 flex flex-col items-start gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center text-lg">
                <LucideShield className="w-5 h-5" />
              </div>
              <div>
                <h5 className="font-serif text-lg font-semibold text-ink mb-1">
                  {isHi ? "विश्वास दृढ़ रखें" : "Keep your faith strong"}
                </h5>
                <p className="text-xs sm:text-[0.82rem] text-stone-600 leading-relaxed">
                  {isHi
                    ? "विश्वास रखें कि आपके इष्ट देव और करीम भाई की शक्तियां सदैव आपके साथ हैं।"
                    : "Trust that your deities and Karim Bhai’s shaktis are always with you."}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ── 6. Once a Week: Your Temple Visit ── */}
        <div className="bg-white border border-stone-200/80 rounded-[22px] sm:rounded-[26px] p-6 sm:p-8 shadow-xs">
          <div className="text-xs font-bold uppercase tracking-wider text-stone-500 mb-1">
            {isHi ? "सप्ताह में एक बार" : "ONCE A WEEK"}
          </div>
          <h4 className="font-serif text-2xl sm:text-3xl text-ink mb-2 font-medium">
            {isHi ? "मंदिर में साधना" : "Your temple visit"}
          </h4>
          <p className="text-xs sm:text-sm text-stone-600 mb-6">
            {isHi
              ? "किसी भी देवता के पुराने या महत्वपूर्ण मंदिर जाने का प्रयास करें।"
              : "Try to visit an old or significant temple of any deity."}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Step 1 */}
            <div className="bg-[#F6EDDE] rounded-2xl p-5 border border-amber-200">
              <div className="text-xs font-bold uppercase tracking-wider text-[#995F29] mb-2">
                {isHi ? "चरण 01" : "STEP 01"}
              </div>
              <h5 className="font-serif text-lg font-semibold text-[#503F27] mb-1">
                {isHi ? "घर से भोग बनाकर लाएं" : "Bring a homemade offering"}
              </h5>
              <p className="text-xs text-stone-600 leading-relaxed">
                {isHi ? "देवता के लिए घर पर भोग तैयार करें।" : "Prepare something at home for the deity."}
              </p>
            </div>

            {/* Step 2 */}
            <div className="bg-[#FFEBD6] rounded-2xl p-5 border border-orange-200">
              <div className="text-xs font-bold uppercase tracking-wider text-orange-800 mb-2">
                {isHi ? "चरण 02" : "STEP 02"}
              </div>
              <h5 className="font-serif text-lg font-semibold text-ink mb-1">
                {isHi ? "संकल्प और 3 परिक्रमा" : "Sankalpa & 3 parikramas"}
              </h5>
              <p className="text-xs text-stone-600 leading-relaxed">
                {isHi ? "संकल्प लेकर घड़ी की दिशा में परिक्रमा करें।" : "Make your sankalpa; walk clockwise."}
              </p>
            </div>

            {/* Step 3 */}
            <div className="bg-[#FFE1EE] rounded-2xl p-5 border border-rose-200">
              <div className="text-xs font-bold uppercase tracking-wider text-rose-800 mb-2">
                {isHi ? "चरण 03" : "STEP 03"}
              </div>
              <h5 className="font-serif text-lg font-semibold text-ink mb-1">
                {isHi ? "शांति से बैठें" : "Sit in stillness"}
              </h5>
              <p className="text-xs text-stone-600 leading-relaxed">
                {isHi ? "मंदिर में कुछ समय अकेले शांत बैठें।" : "Spend some quiet time alone in the temple."}
              </p>
            </div>

            {/* Step 4: Whispering Jaap Focus */}
            <div className="bg-gradient-to-br from-[#EDF4FF] to-[#E4FFF6] rounded-2xl p-5 border border-blue-200">
              <div className="text-[0.68rem] font-bold uppercase tracking-wider text-blue-800 mb-2">
                {isHi ? "कम से कम 1 घंटा · प्रयास करें" : "AT LEAST 1 HOUR · AIM FOR"}
              </div>
              <h5 className="font-serif text-lg font-semibold text-blue-950 mb-1">
                {isHi ? "फुसफुसाकर मंत्र जप" : "Whispering Jaap"}
              </h5>
              <p className="text-xs text-stone-700 leading-relaxed">
                {isHi
                  ? "संकल्प सहित मंदिर के देवताओं व उनकी सिद्धि शक्तियों के लिए जप करें।"
                  : "With sankalpa, chant for the temple deities and their siddhi shaktis."}
              </p>
            </div>
          </div>
        </div>

        {/* ── 7. Footer Benediction ── */}
        <div className="text-center pt-8 text-stone-500 text-xs sm:text-sm font-medium">
          {isHi ? "सच्चाई और श्रद्धा से आगे बढ़ें। 🙏" : "Walk with sincerity and devotion. 🙏"}
        </div>
      </div>
    </section>
  );
}
