import SadhanaListClient from "@/components/SadhanaListClient";
import Link from "next/link";
import { LucideFlame, LucideCompass } from "lucide-react";

export const metadata = {
  title: "Sacred Sadhanas & Cycles | Innerlight",
  description: "Explore sacred sadhanas: 41-Day Master Cycle starting 4th of September, 21-Day Shree Vishnu Bhagwan Sadhana, and 33-Day Durga Maa Shakti Sadhana.",
};

export default function ProgramsPage() {
  return (
    <main className="min-h-screen py-[120px] sm:py-[150px] px-4 sm:px-7 max-w-[1140px] mx-auto">
      {/* ── Header ── */}
      <div className="mb-10 sm:mb-14 text-center sm:text-left">
        <div className="inline-flex items-center gap-2 text-gold text-xs sm:text-[0.85rem] tracking-[0.08em] mb-3 uppercase font-semibold">
          <LucideFlame className="w-4 h-4" />
          <span>Sadhanas & Sacred Cycles</span>
        </div>
        <h1 className="font-serif text-[clamp(2.2rem,5vw,3.6rem)] leading-[1.12] max-w-[720px] text-ink mb-4">
          Immersive sadhanas for inner stillness & divine alignment.
        </h1>
        <p className="text-ink-soft text-base sm:text-lg max-w-[620px] leading-relaxed">
          Sacred unbroken cycles tuned with Vedic wisdom, daily mantra japa, and collective evening sits.
        </p>
      </div>

      {/* ── Main Interactive Sadhana Component ── */}
      <SadhanaListClient />

      {/* ── Footer Banner ── */}
      <div className="mt-16 text-center bg-ivory-2/70 border border-ink/6 rounded-[28px] p-8 sm:p-12">
        <h3 className="font-serif text-2xl sm:text-3xl text-ink mb-3">
          Need Guidance on Choosing Your Sadhana?
        </h3>
        <p className="text-sm sm:text-base text-ink-soft max-w-xl mx-auto mb-6">
          Whether you are committing to the 41-Day Mahasadhana, Vishnu Bhagwan 21-Day peace cycle, or Durga Maa 33-Day Shakti immersion, our sangha is here to support your practice.
        </p>
        <div className="flex items-center justify-center gap-4 flex-wrap">
          <a
            href="https://meet.google.com/odv-evnd-mfy"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-full bg-ink text-ivory hover:bg-gold text-xs font-semibold tracking-wider uppercase transition-colors"
          >
            Join Daily 8 PM Google Meet
          </a>
          <Link
            href="/calendar"
            className="px-6 py-3 rounded-full bg-white hover:bg-white/80 text-ink border border-ink/10 text-xs font-semibold tracking-wider uppercase transition-colors"
          >
            View Lunar Calendar
          </Link>
        </div>
      </div>
    </main>
  );
}
