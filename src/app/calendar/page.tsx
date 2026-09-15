import { createClient } from '@/utils/supabase/server';
import CalendarView from '@/components/CalendarView';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import LuxuryCursor from '@/components/LuxuryCursor';

export default async function CalendarPage() {
  const supabase = await createClient();
  
  // Fetch events. Handle case where Supabase is not configured yet.
  let events = [];
  try {
    const { data } = await supabase.from('calendar_events').select('*');
    if (data) events = data;
  } catch (e) {
    console.warn("Supabase not fully configured yet.");
  }

  return (
    <main data-calendar-area="true" className="min-h-screen bg-[#F6F3EC] text-ink pt-24 sm:pt-[120px] pb-20 sm:pb-[140px] relative">
      <LuxuryCursor />
      <Navigation />

      <div className="max-w-[1040px] mx-auto px-4 sm:px-7">
        <div className="mb-8 sm:mb-14">
          <div className="text-[0.78rem] sm:text-[0.82rem] tracking-[0.1em] text-gold mb-2.5 sm:mb-3.5 uppercase font-medium">
            The calendar
          </div>
          <h1 className="font-serif text-[clamp(1.9rem,4vw,2.9rem)] max-w-[520px] leading-[1.15] text-ink">
            Where the practice stands today.
          </h1>
          <p className="mt-3 sm:mt-4 text-[0.92rem] sm:text-[0.98rem] leading-[1.65] text-ink-soft max-w-[480px]">
            Follow the sacred rhythm of the moon and weekly sadhanas — daily sits, tithis, and auspicious festivals.
          </p>
        </div>
        <CalendarView initialEvents={events} />
      </div>

      <div className="mt-16 sm:mt-24">
        <Footer />
      </div>
    </main>
  );
}
