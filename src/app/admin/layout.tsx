import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import Link from "next/link";

export default async function AdminLayout({ children }: { children: React.ReactNode }) {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) {
    redirect("/login");
  }

  return (
    <div className="min-h-screen bg-ivory flex">
      <aside className="w-64 bg-charcoal text-ivory p-6 flex flex-col h-screen sticky top-0">
        <div className="font-serif text-xl mb-12 text-center">inner<span className="text-gold">light</span></div>
        <nav className="flex flex-col gap-4">
          <Link href="/admin" className="hover:text-gold transition-colors">Dashboard</Link>
          <Link href="/admin/programs" className="hover:text-gold transition-colors">Programs</Link>
          <Link href="/admin/calendar" className="hover:text-gold transition-colors">Calendar Events</Link>
          <Link href="/admin/journal" className="hover:text-gold transition-colors">Journal Posts</Link>
          <Link href="/admin/shop" className="hover:text-gold transition-colors">Shop Items</Link>
          <Link href="/admin/testimonials" className="hover:text-gold transition-colors">Testimonials</Link>
        </nav>
        <div className="mt-auto pt-6 border-t border-white/10 text-sm text-ivory/50 text-center">
          Logged in as {user.email}
        </div>
      </aside>
      <main className="flex-1 p-10 overflow-y-auto">
        {children}
      </main>
    </div>
  );
}
