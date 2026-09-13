import { createClient } from '@/utils/supabase/server';
import Link from 'next/link';

export default async function JournalPage() {
  const supabase = await createClient();
  let posts = [];
  
  try {
    const { data } = await supabase.from('journal_posts').select('*').eq('published', true).order('published_at', { ascending: false });
    if (data) posts = data;
  } catch (e) {
    console.warn("Supabase not fully configured yet.");
  }

  return (
    <main className="min-h-screen py-[150px] px-7 max-w-[1040px] mx-auto">
      <div className="mb-16">
        <div className="text-gold text-[0.85rem] tracking-[0.06em] mb-[18px] uppercase">Journal</div>
        <h1 className="font-serif text-[clamp(2rem,4vw,3rem)] leading-[1.18] max-w-[500px]">
          Notes on practice, philosophy, and daily life.
        </h1>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
        {posts.length > 0 ? posts.map((post: any) => (
          <Link href={`/journal/${post.slug}`} key={post.id} className="block group">
            {post.cover_image && (
              <div className="rounded-[20px] overflow-hidden mb-6 h-64">
                <img src={post.cover_image} alt={post.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
            )}
            <div className="text-[0.8rem] tracking-[0.05em] uppercase text-ink/60 mb-3">
              {post.published_at && new Date(post.published_at).toLocaleDateString('en-IN', { month: 'long', day: 'numeric', year: 'numeric' })}
            </div>
            <h3 className="font-serif text-2xl mb-3 text-ink group-hover:text-gold transition-colors">{post.title}</h3>
            <p className="text-ink-soft">{post.excerpt}</p>
          </Link>
        )) : (
          <div className="col-span-full py-20 text-center text-ink-soft">
            <p>No journal entries published yet.</p>
          </div>
        )}
      </div>
    </main>
  );
}
