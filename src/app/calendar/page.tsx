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
        <div className="mb-6 flex items-center gap-3">
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
        </div>

        <div className="mb-8 sm:mb-12">
          <div className="text-[0.78rem] sm:text-[0.82rem] tracking-[0.1em] text-gold mb-2.5 sm:mb-3.5 uppercase font-medium">
            Sacred Hindu Lunar Calendar
          </div>
          <h1 className="font-serif text-[clamp(1.9rem,4vw,2.9rem)] max-w-[620px] leading-[1.15] text-ink">
            Where the practice stands today.
          </h1>
          <p className="mt-3 sm:mt-4 text-[0.92rem] sm:text-[0.98rem] leading-[1.65] text-ink-soft max-w-[540px]">
            Follow the sacred rhythm of the moon and weekly sadhanas — daily sits, sacred tithis, and auspicious celebrations.
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

