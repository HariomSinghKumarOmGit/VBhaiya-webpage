import { createClient } from '@/utils/supabase/server';
import { notFound } from 'next/navigation';

export default async function JournalPost({ params }: { params: { slug: string } }) {
  const supabase = await createClient();
  
  let post = null;
  try {
    const { data } = await supabase.from('journal_posts').select('*').eq('slug', params.slug).single();
    post = data;
  } catch (e) {
    console.warn("Supabase not fully configured yet.");
  }

  if (!post) {
    notFound();
  }

  return (
    <main className="min-h-screen py-[150px] px-7 max-w-[720px] mx-auto">
      <div className="mb-12 text-center">
        <div className="text-gold text-[0.85rem] tracking-[0.06em] mb-4 uppercase">
          {post.published_at && new Date(post.published_at).toLocaleDateString('en-IN', { month: 'long', day: 'numeric', year: 'numeric' })}
        </div>
        <h1 className="font-serif text-[clamp(2.5rem,5vw,3.5rem)] leading-[1.1] mb-6">{post.title}</h1>
      </div>

      {post.cover_image && (
        <div className="rounded-[24px] overflow-hidden mb-16 h-[400px]">
          <img src={post.cover_image} alt={post.title} className="w-full h-full object-cover" />
        </div>
      )}

      <div className="prose prose-lg prose-stone max-w-none font-sans text-ink-soft leading-loose" dangerouslySetInnerHTML={{ __html: post.body }} />
    </main>
  );
}
