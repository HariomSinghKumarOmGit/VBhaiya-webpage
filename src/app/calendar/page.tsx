import { createClient } from '@/utils/supabase/server';
import CalendarView from '@/components/CalendarView';

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
    <main className="min-h-screen bg-charcoal text-ivory pt-[120px] pb-[140px]">
      <div className="max-w-[1040px] mx-auto px-7">
        <div className="mb-14">
          <div className="text-gold-soft text-[0.85rem] tracking-[0.06em] mb-4 uppercase">The calendar</div>
          <h1 className="font-serif text-[clamp(2rem,4vw,2.9rem)] max-w-[520px] leading-[1.15]">
            Where the practice stands today.
          </h1>
        </div>
        <CalendarView initialEvents={events} />
      </div>
    </main>
  );
}
