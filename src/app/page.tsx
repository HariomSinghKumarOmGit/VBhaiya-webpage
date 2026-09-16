"use client";

import { useState, useCallback } from "react";
import SpiritualHero from "@/components/SpiritualHero";
import ThePractice from "@/components/ThePractice";
import CalendarView from "@/components/CalendarView";
import LuxuryCursor from "@/components/LuxuryCursor";
import LoadingScreen from "@/components/LoadingScreen";
import JoinCircle from "@/components/JoinCircle";
import Footer from "@/components/Footer";
import { useLanguage } from "@/context/LanguageContext";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const { language } = useLanguage();

  const handleHeroReady = useCallback(() => {
    setIsLoading(false);
  }, []);

  return (
    <main className="min-h-screen">
      <LoadingScreen isLoading={isLoading} />

      <div className="fixed inset-0 pointer-events-none z-[9999] opacity-[0.035] mix-blend-multiply bg-[url('data:image/svg+xml,%3Csvg_xmlns=%22http://www.w3.org/2000/svg%22_width=%22120%22_height=%22120%22%3E%3Cfilter_id=%22n%22%3E%3CfeTurbulence_type=%22fractalNoise%22_baseFrequency=%220.9%22_numOctaves=%222%22_stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect_width=%22100%25%22_height=%22100%25%22_filter=%22url(%23n)%22/%3E%3C/svg%3E')]"></div>

      {/* ── Hero ── */}
      <SpiritualHero onReady={handleHeroReady} />

      {/* ── The Practice: dark section with scroll-animated cards ── */}
      <ThePractice />

      {/* ── Smooth bridge from dark to light ── */}
      <div
        style={{
          height: 120,
          background: "linear-gradient(to bottom, #0d0b08 0%, #F6F3EC 100%)",
        }}
      />

      {/* ── Calendar Section ── */}
      <section
        id="calendar"
        data-calendar-area="true"
        className="relative bg-[#F6F3EC] py-16 sm:py-[110px] pb-20 sm:pb-[130px]"
      >
        <div className="max-w-[1040px] mx-auto px-4 sm:px-7">
          <div className="mb-8 sm:mb-14">
            <div className="text-[0.78rem] sm:text-[0.82rem] tracking-[0.1em] text-gold mb-2.5 sm:mb-3.5 uppercase font-medium">
              {language === "hi" ? "चंद्र पंचांग" : "The calendar"}
            </div>
            <h2 className="font-serif text-[clamp(1.9rem,4vw,2.9rem)] max-w-[480px] leading-[1.15] text-ink">
              {language === "hi" ? "आज साधना कहाँ स्थित है।" : "Where the practice stands today."}
            </h2>
            <p className="mt-3 sm:mt-4 text-[0.92rem] sm:text-[0.98rem] leading-[1.65] text-ink-soft max-w-[440px]">
              {language === "hi"
                ? "प्रत्येक सप्ताह चंद्रमा की गति का अनुसरण करता है — पूर्णिमा और अमावस्या की दिव्य ऊर्जा के अनुसार साधना।"
                : "Each week follows the pull of the moon — what's ongoing, what's ending, and what the next Purnima or Amavasya is asking of us."}
            </p>
          </div>
          <CalendarView initialEvents={[]} />
        </div>
      </section>

      {/* ── Testimonials: High-End Editorial Presentation ── */}
      <section id="testimonials" className="relative py-[140px] md:py-[170px] bg-white overflow-hidden">
        {/* Subtle ethereal ambient light */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-gold/5 blur-[100px] rounded-full pointer-events-none" />

        <div className="max-w-[880px] mx-auto px-6 sm:px-8 text-center relative z-10">
          <div className="text-gold text-3xl md:text-4xl mb-6 font-serif opacity-80 select-none">
            &ldquo;
          </div>
          <h2 className="font-serif text-[clamp(1.9rem,3.8vw,2.8rem)] leading-[1.3] mb-8 text-ink font-normal max-w-3xl mx-auto">
            {language === "hi"
              ? "एक दुर्लभ पावन स्थान जो आपसे आपके वास्तविक स्वरूप के अतिरिक्त कुछ और होने की अपेक्षा नहीं करता।"
              : "A rare space that doesn’t ask you to be anything other than what you truly are."}
          </h2>
          <div className="flex items-center justify-center gap-3 text-ink-soft text-[0.85rem] uppercase tracking-[0.18em]">
            <span className="w-8 h-[1px] bg-gold/40" />
            <span className="font-medium text-ink">S.M.</span>
            <span>·</span>
            <span className="text-gold">{language === "hi" ? "साधना प्रतिभागी" : "Retreat Participant"}</span>
            <span className="w-8 h-[1px] bg-gold/40" />
          </div>
        </div>
      </section>

      {/* ── Luxury Bento Connect & Join the Circle ── */}
      <JoinCircle />

      {/* ── Luxury Architectural Studio Footer ── */}
      <Footer />
    </main>
  );
}
