import { createClient } from '@/utils/supabase/server';

export const revalidate = 300;

export default async function ShopPage() {
  const supabase = await createClient();
  let items = [];
  
  try {
    const { data } = await supabase.from('shop_items').select('*');
    if (data) items = data;
  } catch (e) {
    console.warn("Supabase not fully configured yet.");
  }

  const categories = [
    { id: 'own', title: 'Studio Editions' },
    { id: 'amazon', title: 'Recommended Reading & Tools' },
    { id: 'saas', title: 'Digital Practice' }
  ];

  return (
    <main className="min-h-screen py-[150px] px-7 max-w-[1040px] mx-auto">
      <div className="mb-20 text-center">
        <div className="text-gold text-[0.85rem] tracking-[0.06em] mb-[18px] uppercase">Curated Goods</div>
        <h1 className="font-serif text-[clamp(2rem,4vw,3.5rem)] leading-[1.18]">
          Tools for the practice.
        </h1>
      </div>
      
      {categories.map(category => {
        const catItems = items.filter((item: any) => item.category === category.id);
        
        if (catItems.length === 0) return null;
        
        return (
          <div key={category.id} className="mb-24">
            <h2 className="font-serif text-2xl border-b border-ink/10 pb-4 mb-8 text-ink">{category.title}</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {catItems.map((item: any) => (
                <a 
                  href={item.external_link} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  key={item.id} 
                  className="block group"
                >
                  <div className="bg-ivory-2 rounded-[24px] p-6 h-full transition-transform duration-500 hover:-translate-y-2 flex flex-col">
                    {item.image ? (
                      <div className="h-48 mb-6 rounded-[16px] overflow-hidden bg-white/50 mix-blend-multiply flex items-center justify-center p-4">
                        <img src={item.image} alt={item.name} className="max-h-full object-contain transition-transform duration-500 group-hover:scale-105" />
                      </div>
                    ) : (
                      <div className="h-48 mb-6 rounded-[16px] bg-white/50 mix-blend-multiply flex items-center justify-center">
                        <span className="text-ink/20 font-serif italic">Innerlight</span>
                      </div>
                    )}
                    <h3 className="font-serif text-xl mb-2 text-ink group-hover:text-gold transition-colors">{item.name}</h3>
                    <p className="text-sm text-ink-soft mb-4 flex-grow">{item.description}</p>
                    <div className="flex justify-between items-center mt-auto pt-4 border-t border-ink/5">
                      <span className="font-serif text-lg">{item.price}</span>
                      <span className="text-[0.7rem] uppercase tracking-wider text-ink/40 group-hover:text-gold transition-colors">
                        {category.id === 'own' ? 'Purchase' : category.id === 'amazon' ? 'View on Amazon' : 'Learn More'} →
                      </span>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        );
      })}

      {items.length === 0 && (
        <div className="text-center text-ink-soft py-20">
          <p>The shop is currently being curated. Check back soon.</p>
        </div>
      )}
    </main>
  );
}
