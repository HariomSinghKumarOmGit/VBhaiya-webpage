export default function CalendarLoading() {
  return (
    <main className="min-h-screen bg-[#F6F3EC] text-ink pt-24 sm:pt-[120px] pb-20 sm:pb-[140px] relative">
      <div className="max-w-[1120px] mx-auto px-4 sm:px-7 animate-pulse">
        {/* Breadcrumb skeleton */}
        <div className="mb-6 flex items-center gap-3">
          <div className="h-7 w-28 bg-ink/5 rounded-full" />
          <div className="h-7 w-36 bg-ink/5 rounded-full" />
        </div>

        {/* Heading skeleton */}
        <div className="mb-8 sm:mb-12">
          <div className="h-4 w-44 bg-gold/20 rounded mb-3" />
          <div className="h-10 w-96 max-w-full bg-ink/10 rounded mb-3" />
          <div className="h-4 w-80 max-w-full bg-ink/5 rounded" />
        </div>

        {/* Calendar Card Skeleton */}
        <div className="rounded-[28px] sm:rounded-[36px] bg-[#14110E] p-6 sm:p-10 border border-white/10 min-h-[500px]">
          <div className="flex justify-between items-center mb-8">
            <div className="h-8 w-48 bg-white/10 rounded-xl" />
            <div className="h-8 w-32 bg-white/10 rounded-full" />
          </div>
          <div className="h-12 w-full bg-white/5 rounded-2xl mb-8" />
          <div className="grid grid-cols-7 gap-2">
            {Array.from({ length: 35 }).map((_, i) => (
              <div key={i} className="aspect-square bg-white/5 rounded-xl" />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
