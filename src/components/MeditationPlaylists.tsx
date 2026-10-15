"use client";

import { useLanguage } from "@/context/LanguageContext";
import { ExternalLink, ListVideo, HelpCircle, ArrowUpRight, Play, Sparkles } from "lucide-react";

interface PlaylistCardData {
  id: string;
  listId: string;
  stepNumber: string;
  stepNumberHi: string;
  badge: string;
  badgeHi: string;
  title: string;
  titleHi: string;
  description: string;
  descriptionHi: string;
  url: string;
  isFaq?: boolean;
}

const PLAYLISTS: PlaylistCardData[] = [
  {
    id: "process",
    listId: "PLdGuqc2AGn-Q",
    stepNumber: "01",
    stepNumberHi: "०१",
    badge: "Process & Steps",
    badgeHi: "प्रक्रिया एवं चरण",
    title: "How to Join Bhaiya Process",
    titleHi: "भैया साधना प्रक्रिया से कैसे जुड़ें",
    description: "Step-by-step guidance on beginning your spiritual practice and connecting with the collective discipline.",
    descriptionHi: "साधना प्रक्रिया से जुड़ने और अपनी आध्यात्मिक यात्रा आरंभ करने के लिए संपूर्ण चरण-दर-चरण मार्गदर्शन।",
    url: "https://www.youtube.com/playlist?list=PLdGuqc2AGn-Q",
  },
  {
    id: "meditation",
    listId: "PLTfGWWmVqKZA",
    stepNumber: "02",
    stepNumberHi: "०२",
    badge: "Guided Dhyan",
    badgeHi: "मार्गदर्शित ध्यान",
    title: "Meditation Sessions",
    titleHi: "ध्यान सत्र (Meditation Sessions)",
    description: "Immersive group meditation recordings, silence sits, and guided deep inner inquiry.",
    descriptionHi: "सामूहिक ध्यान सत्र, शांत अंतर्मुखी बैठकों और गहन अंतर्दृष्टि के पावन रिकॉर्डिंग्स।",
    url: "https://www.youtube.com/playlist?list=PLTfGWWmVqKZA",
  },
  {
    id: "qna",
    listId: "PLSxt5D20et0M",
    stepNumber: "03",
    stepNumberHi: "०३",
    badge: "Seeker Questions",
    badgeHi: "साधक जिज्ञासा",
    title: "Basic QnA for Beginners",
    titleHi: "बुनियादी प्रश्नोत्तर (Basic QnA)",
    description: "Answers to essential questions, doubts, and foundational wisdom for seekers starting out.",
    descriptionHi: "शुरुआती साधकों के मन में उठने वाले महत्वपूर्ण प्रश्नों, संशयों और साधना के गूढ़ रहस्यों का निवारण।",
    url: "https://www.youtube.com/playlist?list=PLSxt5D20et0M",
    isFaq: true,
  },
];

export default function MeditationPlaylists() {
  const { language } = useLanguage();
  const isHi = language === "hi";

  return (
    <section
      id="meditation-sessions"
      className="relative bg-[#F6F3EC] py-16 sm:py-24 border-t border-[#E8E2D5] overflow-hidden"
    >
      {/* Subtle ambient luxury lighting */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[300px] bg-gold/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-1/3 w-[450px] h-[250px] bg-amber-500/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* ── Section Header ── */}
        <div className="mb-10 sm:mb-14">
          <div className="text-[0.78rem] sm:text-[0.82rem] tracking-[0.14em] text-gold mb-2.5 sm:mb-3 uppercase font-medium flex items-center gap-2">
            <span className="w-6 h-[1px] bg-gold" />
            <span>{isHi ? "ध्यान सत्र एवं साधना संग्रह" : "Meditation Sessions & Archives"}</span>
          </div>

          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <div>
              <h2 className="font-serif text-[clamp(1.9rem,3.8vw,2.8rem)] leading-[1.18] text-ink">
                {isHi ? "साधना एवं ध्यान सत्र प्लेलिस्ट" : "Meditation Sessions & Practice Playlists"}
              </h2>
              <p className="mt-3 text-[0.92rem] sm:text-[0.98rem] leading-[1.65] text-ink-soft max-w-[620px]">
                {isHi
                  ? "भैया जी की साधना प्रक्रिया से जुड़ने के चरण, सामूहिक ध्यान सत्र और साधकों के लिए आवश्यक प्रश्नोत्तर।"
                  : "Explore step-by-step guidance to join the process, immersive meditation sits, and answers to common seeker questions."}
              </p>
            </div>

            <a
              href="https://www.youtube.com/@see-ur-InnerLight"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-ink-soft hover:text-gold transition-colors py-2.5 px-4 rounded-full border border-ink/10 hover:border-gold/40 self-start md:self-auto bg-white/70 shadow-xs group"
            >
              <span>{isHi ? "यूट्यूब चैनल देखें" : "Explore YouTube Channel"}</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-gold group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>
        </div>

        {/* ── 3 Playlists Side by Side ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 items-start">
          {PLAYLISTS.map((item, index) => {
            const isThird = index === 2;

            return (
              <div key={item.id} className="flex flex-col">
                {/* ── Top Bar Above Column ── */}
                <div className="flex items-center justify-between mb-3 min-h-[38px]">
                  {isThird ? (
                    /* The FAQ Tab above the 3rd Playlist column */
                    <a
                      href="https://waytolight.vercel.app/faq"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase bg-[#1B1812] text-[#F6F3EC] hover:bg-gold hover:text-white transition-all duration-200 shadow-sm group border border-transparent hover:border-gold/50"
                      title={isHi ? "FAQ प्रश्नोत्तरी खोलें" : "Open FAQ Page"}
                    >
                      <HelpCircle className="w-3.5 h-3.5 text-gold group-hover:text-white transition-colors" />
                      <span>{isHi ? "FAQ प्रश्नोत्तरी" : "FAQ"}</span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-gold group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </a>
                  ) : (
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[0.72rem] font-semibold tracking-wider uppercase bg-gold/10 text-gold border border-gold/20">
                      <span>{isHi ? item.stepNumberHi : item.stepNumber}</span>
                      <span>•</span>
                      <span>{isHi ? item.badgeHi : item.badge}</span>
                    </span>
                  )}

                  {isThird ? (
                    <a
                      href="https://waytolight.vercel.app/faq"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[0.7rem] uppercase tracking-wider text-gold hover:text-ink font-semibold flex items-center gap-1"
                    >
                      <span>waytolight.vercel.app</span>
                      <ArrowUpRight className="w-3 h-3" />
                    </a>
                  ) : (
                    <span className="text-[0.7rem] uppercase tracking-wider text-ink-soft/60 font-mono">
                      Playlist
                    </span>
                  )}
                </div>

                {/* ── Playlist Card Container ── */}
                <div className="bg-white rounded-2xl border border-[#E7E2D6] hover:border-gold/40 transition-all duration-300 shadow-sm hover:shadow-md overflow-hidden flex flex-col h-full">
                  {/* Card Header */}
                  <div className="p-5 sm:p-6 pb-4">
                    <div className="flex items-start justify-between gap-3 mb-2">
                      <h3 className="font-serif text-[1.22rem] sm:text-[1.3rem] text-ink leading-snug font-medium">
                        {isHi ? item.titleHi : item.title}
                      </h3>
                      <span className="flex-shrink-0 w-7 h-7 rounded-full bg-[#FAF7F2] border border-[#E8E2D5] flex items-center justify-center text-xs font-serif text-ink-soft">
                        {isHi ? item.stepNumberHi : item.stepNumber}
                      </span>
                    </div>
                    <p className="text-[0.84rem] text-ink-soft leading-relaxed min-h-[40px] line-clamp-2">
                      {isHi ? item.descriptionHi : item.description}
                    </p>
                  </div>

                  {/* ── YouTube Responsive Embed & Specific FAQ Tab for 3rd Playlist ── */}
                  <div className="px-5 sm:px-6 pb-4 flex flex-col">
                    {isThird && (
                      /* Small Tab directly above the 3rd Playlist Video Embed */
                      <div className="mb-2.5">
                        <a
                          href="https://waytolight.vercel.app/faq"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full flex items-center justify-between px-3.5 py-2 rounded-lg bg-[#FAF4E6] hover:bg-[#F3E8CE] border border-gold/35 text-ink text-xs font-medium transition-all group shadow-xs"
                        >
                          <span className="flex items-center gap-1.5 font-bold text-gold group-hover:text-amber-900">
                            <HelpCircle className="w-3.5 h-3.5" />
                            <span>FAQ</span>
                          </span>
                          <span className="flex items-center gap-1 text-[0.74rem] text-ink-soft group-hover:text-ink font-medium">
                            <span>{isHi ? "प्रश्नोत्तरी एवं मार्गदर्शन (FAQ)" : "Visit FAQ & Seeker Guide"}</span>
                            <ArrowUpRight className="w-3 h-3 text-gold transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                          </span>
                        </a>
                      </div>
                    )}

                    <div className="relative aspect-video w-full rounded-xl overflow-hidden bg-black/5 shadow-inner border border-black/5">
                      <iframe
                        src={`https://www.youtube-nocookie.com/embed/videoseries?list=${item.listId}`}
                        title={isHi ? item.titleHi : item.title}
                        className="absolute inset-0 w-full h-full border-0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                        loading="lazy"
                      />
                    </div>
                  </div>

                  {/* ── Card Footer Action ── */}
                  <div className="mt-auto px-5 sm:px-6 py-3.5 bg-[#FAF7F2] border-t border-[#EAE5DA] flex items-center justify-between text-xs">
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 font-medium text-ink-soft hover:text-gold transition-colors group"
                    >
                      <ListVideo className="w-3.5 h-3.5 text-gold" />
                      <span>{isHi ? "पूरी प्लेलिस्ट देखें" : "View Full Playlist"}</span>
                      <ExternalLink className="w-3 h-3 text-ink-soft/60 group-hover:text-gold transition-colors" />
                    </a>

                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-[0.72rem] uppercase tracking-wider text-gold hover:text-ink font-semibold"
                    >
                      <span>YouTube</span>
                      <Play className="w-2.5 h-2.5 fill-current" />
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
