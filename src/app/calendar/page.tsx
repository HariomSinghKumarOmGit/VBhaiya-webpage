import Link from 'next/link';
import { createClient, isSupabaseConfigured } from '@/utils/supabase/server';
import CalendarView from '@/components/CalendarView';
import Footer from '@/components/Footer';

export const revalidate = 300; // Static ISR caching for instant 0ms TTFB

export default async function CalendarPage() {
  let events = [];
  
  if (isSupabaseConfigured()) {
    try {
      const supabase = await createClient();
      const { data } = await supabase.from('calendar_events').select('*');
      if (data) events = data;
    } catch (e) {
      console.warn("Could not fetch calendar events:", e);
    }
  }

  return (
    <main data-calendar-area="true" className="min-h-screen bg-[#F6F3EC] text-ink pt-24 sm:pt-[120px] pb-20 sm:pb-[140px] relative">
      <div className="max-w-[1120px] mx-auto px-4 sm:px-7">
        <div className="mb-6 flex items-center gap-3 flex-wrap">
          <Link
            href="/"
            prefetch={true}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/80 hover:bg-white border border-ink/8 text-xs font-semibold text-ink-soft hover:text-gold transition-colors shadow-2xs cursor-pointer"
          >
            ← Back to Home
          </Link>
          <Link
            href="/programs"
            prefetch={true}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/80 hover:bg-white border border-ink/8 text-xs font-semibold text-ink-soft hover:text-gold transition-colors shadow-2xs cursor-pointer"
          >
            Explore Sadhanas →
          </Link>
          <a
            href="/hindu_calendar_2026_2027.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-amber-100 hover:bg-amber-200 border border-amber-300 text-xs font-semibold text-amber-900 transition-colors shadow-2xs cursor-pointer"
          >
            <span>📄</span>
            <span>Official 2026–2027 Calendar (PDF)</span>
          </a>
        </div>

        <div className="mb-8 sm:mb-12">
          <div className="text-[0.78rem] sm:text-[0.82rem] tracking-[0.1em] text-gold mb-2.5 sm:mb-3.5 uppercase font-medium">
            Sacred Hindu Lunar Calendar (2026 – 2027)
          </div>
          <h1 className="font-serif text-[clamp(1.9rem,4vw,2.9rem)] max-w-[620px] leading-[1.15] text-ink">
            Where the practice stands today.
          </h1>
          <p className="mt-3 sm:mt-4 text-[0.92rem] sm:text-[0.98rem] leading-[1.65] text-ink-soft max-w-[580px]">
            Synchronized with the authentic Vedic Panchang (2026 – 2027) based on standard Udayatithi calculations — daily sits, sacred tithis (Amavasya, Purnima, Kaal Ashtami, Ekadashi), and auspicious festivals.
          </p>
        </div>
        <CalendarView initialEvents={events} fullPage={true} />
      </div>

      <div className="mt-16 sm:mt-24">
        <Footer />
      </div>
    </main>
  );
}

