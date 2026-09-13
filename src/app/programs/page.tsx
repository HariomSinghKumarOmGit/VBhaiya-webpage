import { createClient } from '@/utils/supabase/server';
import Link from 'next/link';

export default async function ProgramsPage() {
  const supabase = await createClient();
  let programs = [];
  
  try {
    const { data } = await supabase.from('programs').select('*').order('start_date', { ascending: true });
    if (data) programs = data;
  } catch (e) {
    console.warn("Supabase not fully configured yet.");
  }

  return (
    <main className="min-h-screen py-[150px] px-7 max-w-[1040px] mx-auto">
      <div className="mb-16">
        <div className="text-gold text-[0.85rem] tracking-[0.06em] mb-[18px] uppercase">Retreats & Sadhanas</div>
        <h1 className="font-serif text-[clamp(2rem,4vw,3rem)] leading-[1.18] max-w-[500px]">
          Immersive programs for deeper practice.
        </h1>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {programs.length > 0 ? programs.map((program: any) => (
          <Link href={`/programs/${program.slug}`} key={program.id} className="block group">
            <div className="bg-white/50 border border-ink/5 rounded-[28px] overflow-hidden transition-transform duration-500 hover:-translate-y-2">
              {program.cover_image && (
                <div className="h-64 bg-ink/10 relative overflow-hidden">
                  <img src={program.cover_image} alt={program.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                </div>
              )}
              <div className="p-8">
                <h3 className="font-serif text-2xl mb-3 text-ink group-hover:text-gold transition-colors">{program.title}</h3>
                <p className="text-ink-soft mb-6">{program.summary}</p>
                <div className="text-[0.8rem] tracking-[0.05em] uppercase text-ink/60">
                  {program.start_date && new Date(program.start_date).toLocaleDateString('en-IN', { month: 'short', day: 'numeric', year: 'numeric' })}
                </div>
              </div>
            </div>
          </Link>
        )) : (
          <div className="col-span-full py-20 text-center text-ink-soft">
            <p>No programs scheduled at the moment.</p>
          </div>
        )}
      </div>
    </main>
  );
}
