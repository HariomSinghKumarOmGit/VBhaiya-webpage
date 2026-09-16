"use client";

export default function ScripturesPage() {
  const scriptureUrl = "https://lalita-sahasranama-stotram.vercel.app/";

  return (
    <main className="min-h-screen bg-charcoal text-ivory pt-[120px] pb-[100px] relative">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
        {/* Header section */}
        <div className="mb-10 text-center sm:text-left flex flex-col sm:flex-row justify-between items-start sm:items-end gap-6">
          <div>
            <div className="text-gold-soft text-[0.85rem] tracking-[0.08em] mb-3 uppercase font-medium">
              Sacred Scriptures & Chants
            </div>
            <h1 className="font-serif text-[clamp(2.2rem,4.5vw,3.5rem)] leading-[1.15] text-ivory">
              Lalita Sahasranama Stotram
            </h1>
            <p className="mt-3 text-[0.95rem] text-ivory/70 max-w-[600px] leading-[1.6]">
              Explore sacred recitation, stotrams, and divine mantras loaded directly from our dedicated scripture web app.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={scriptureUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gold/20 hover:bg-gold/30 text-gold-soft border border-gold/40 text-sm font-medium transition-all duration-300 shadow-md hover:scale-105"
            >
              <span>Open Web App</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                <polyline points="15 3 21 3 21 9"></polyline>
                <line x1="10" y1="14" x2="21" y2="3"></line>
              </svg>
            </a>
          </div>
        </div>

        {/* Embedded Web Preview Card */}
        <div className="relative w-full h-[78vh] min-h-[600px] rounded-3xl overflow-hidden border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] bg-ink/80 backdrop-blur-md">
          {/* Top Bar for Web Preview */}
          <div className="flex items-center justify-between px-5 py-3 bg-black/40 border-b border-white/10 text-xs text-ivory/60">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-red-500/70 inline-block"></span>
              <span className="w-3 h-3 rounded-full bg-yellow-500/70 inline-block"></span>
              <span className="w-3 h-3 rounded-full bg-green-500/70 inline-block"></span>
              <span className="ml-3 font-mono text-[0.75rem] text-ivory/40 hidden sm:inline">
                Web Preview Loaded: {scriptureUrl}
              </span>
            </div>
            <a
              href={scriptureUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold-soft hover:underline flex items-center gap-1 font-mono text-[0.75rem]"
            >
              {scriptureUrl}
            </a>
          </div>

          {/* Web Loaded iframe */}
          <iframe
            src={scriptureUrl}
            title="Lalita Sahasranama Stotram"
            className="w-full h-[calc(100%-45px)] border-none bg-white"
            allow="autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            loading="lazy"
          />
        </div>
      </div>
    </main>
  );
}
