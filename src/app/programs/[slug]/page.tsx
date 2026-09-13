import { createClient } from '@/utils/supabase/server';
import { notFound } from 'next/navigation';

export default async function ProgramDetail({ params }: { params: { slug: string } }) {
  const supabase = await createClient();
  
  let program = null;
  try {
    const { data } = await supabase.from('programs').select('*').eq('slug', params.slug).single();
    program = data;
  } catch (e) {
    console.warn("Supabase not fully configured yet.");
  }

  if (!program) {
    notFound();
  }

  return (
    <main className="min-h-screen py-[150px] px-7 max-w-[800px] mx-auto">
      <div className="mb-12">
        <div className="text-gold text-[0.85rem] tracking-[0.06em] mb-4 uppercase">
          {program.start_date && new Date(program.start_date).toLocaleDateString('en-IN', { month: 'long', day: 'numeric', year: 'numeric' })}
        </div>
        <h1 className="font-serif text-[clamp(2.5rem,5vw,4rem)] leading-[1.1] mb-6">{program.title}</h1>
        <p className="text-xl text-ink-soft leading-relaxed">{program.summary}</p>
      </div>

      {program.cover_image && (
        <div className="rounded-[28px] overflow-hidden mb-12 h-[400px]">
          <img src={program.cover_image} alt={program.title} className="w-full h-full object-cover" />
        </div>
      )}

      <div className="prose prose-lg prose-stone max-w-none mb-16" dangerouslySetInnerHTML={{ __html: program.description || '' }} />

      {program.booking_link && (
        <div className="bg-ivory-2 rounded-[28px] p-10 text-center">
          <h3 className="font-serif text-2xl mb-4">Join this program</h3>
          <p className="text-ink-soft mb-8">Secure your spot for {program.title}</p>
          <a 
            href={program.booking_link} 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block bg-ink text-ivory px-8 py-4 rounded-full tracking-[0.05em] uppercase text-sm hover:bg-gold transition-colors"
          >
            Book Now
          </a>
        </div>
      )}
    </main>
  );
}
