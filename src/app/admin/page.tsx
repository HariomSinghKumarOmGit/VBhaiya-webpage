export default function AdminDashboard() {
  return (
    <div>
      <h1 className="font-serif text-3xl mb-8">Dashboard</h1>
      <p className="text-ink-soft">Welcome to the Innerlight admin panel. Use the sidebar to manage content.</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
        <div className="bg-white p-6 rounded-2xl border border-ink/10 shadow-sm">
          <h2 className="font-serif text-xl mb-2">Programs</h2>
          <p className="text-sm text-ink-soft mb-4">Manage retreats and sadhanas.</p>
          <a href="/admin/programs" className="text-gold text-sm font-medium hover:underline">View Programs →</a>
        </div>
        <div className="bg-white p-6 rounded-2xl border border-ink/10 shadow-sm">
          <h2 className="font-serif text-xl mb-2">Calendar</h2>
          <p className="text-sm text-ink-soft mb-4">Manage daily sits and sessions.</p>
          <a href="/admin/calendar" className="text-gold text-sm font-medium hover:underline">View Calendar →</a>
        </div>
        <div className="bg-white p-6 rounded-2xl border border-ink/10 shadow-sm">
          <h2 className="font-serif text-xl mb-2">Journal</h2>
          <p className="text-sm text-ink-soft mb-4">Manage blog posts and articles.</p>
          <a href="/admin/journal" className="text-gold text-sm font-medium hover:underline">View Journal →</a>
        </div>
      </div>
    </div>
  );
}
