"use client";

import Link from "next/link";
import { ArrowUp, Sparkles } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer id="footer" className="relative bg-[#161310] text-[#F6F3EC] pt-[100px] pb-[60px] overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-gradient-to-b from-gold/10 to-transparent blur-[120px] pointer-events-none" />

      <div className="max-w-[1080px] mx-auto px-6 sm:px-8 relative z-10">
        {/* Top Architectural Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-16 border-b border-white/10">
          {/* Brand Column */}
          <div className="md:col-span-5 space-y-4">
            <Link href="/" className="inline-block font-serif text-[1.9rem] tracking-tight text-[#F6F3EC]">
              inner<span className="text-gold">light</span>
            </Link>
            <p className="font-serif italic text-gold-soft/80 text-[1.05rem] leading-relaxed max-w-sm">
              &ldquo;ॐ असतो मा सद्गमय ।<br />तमसो मा ज्योतिर्गमय ।&rdquo;
            </p>
            <p className="text-xs text-white/50 leading-relaxed max-w-sm">
              A luxury spiritual sanctuary held by Vishal Gautam. Quiet, unhurried, and dedicated to the direct experience of inner silence.
            </p>
          </div>

          {/* Quick Links Column */}
          <div className="md:col-span-3 space-y-3">
            <div className="text-[0.68rem] uppercase tracking-[0.16em] font-semibold text-gold">
              Navigation
            </div>
            <ul className="space-y-2 text-sm text-white/70">
              <li>
                <Link href="/" className="hover:text-gold transition-colors">Home &amp; Sanctuary</Link>
              </li>
              <li>
                <Link href="/scriptures" className="hover:text-gold transition-colors">Sacred Scriptures</Link>
              </li>
              <li>
                <Link href="/calendar" className="hover:text-gold transition-colors">Lunar Calendar</Link>
              </li>
              <li>
                <Link href="/programs" className="hover:text-gold transition-colors">Sadhana &amp; Programs</Link>
              </li>
              <li>
                <Link href="/journal" className="hover:text-gold transition-colors">Journal &amp; Reflections</Link>
              </li>
              <li>
                <Link href="/shop" className="hover:text-gold transition-colors">Sacred Artifacts</Link>
              </li>
            </ul>
          </div>

          {/* Sanctuary Guidance Column */}
          <div className="md:col-span-4 space-y-3">
            <div className="text-[0.68rem] uppercase tracking-[0.16em] font-semibold text-gold">
              Sanctuary Inquiries
            </div>
            <p className="text-xs text-white/60 leading-relaxed">
              For private spiritual guidance, Purnima invitations, or sadhana inquiries:
            </p>
            <div className="pt-2 space-y-2">
              <a
                href="mailto:seeurinnerlight@gmail.com"
                className="block text-sm text-white/90 hover:text-gold transition-colors truncate"
              >
                seeurinnerlight@gmail.com
              </a>
              <a
                href="https://wa.me/918818098688"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-sm text-gold-soft hover:text-white transition-colors"
              >
                +91 88180 98688 (WhatsApp Only)
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/45">
          <div className="flex items-center gap-2">
            <Sparkles size={13} className="text-gold/60" />
            <span>&copy; {new Date().getFullYear()} Innerlight. Held in sacred silence.</span>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 hover:bg-white/10 text-white/80 hover:text-white border border-white/10 transition-all cursor-pointer text-xs group"
          >
            <span>Back to top</span>
            <ArrowUp size={13} className="group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
}
