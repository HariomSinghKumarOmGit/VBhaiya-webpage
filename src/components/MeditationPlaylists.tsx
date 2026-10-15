"use client";

import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { ExternalLink, ListVideo, HelpCircle, ArrowUpRight, Play } from "lucide-react";

interface VideoItem {
  id: string;
  title: string;
  titleHi: string;
  duration?: string;
  channel?: string;
}

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
  videos: VideoItem[];
}

const PLAYLISTS_DATA: PlaylistCardData[] = [
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
    videos: [
      {
        id: "xKE8YeU6A6k",
        title: "First step towards the process",
        titleHi: "साधना प्रक्रिया की ओर पहला कदम",
        duration: "2:16",
        channel: "InnerLight (Vishal)",
      },
      {
        id: "SkDNAn21XJg",
        title: "अगर घरवाले धागा, ताबीज़ और यंत्र निकालने के लिए नहीं मानते, तो क्या करें?",
        titleHi: "अगर घरवाले धागा, ताबीज़ और यंत्र निकालने के लिए नहीं मानते, तो क्या करें?",
        duration: "4:32",
        channel: "InnerLight (Vishal)",
      },
      {
        id: "xdplxOEr2IU",
        title: "Pratyangira mata process",
        titleHi: "माँ प्रत्यंगिरा साधना प्रक्रिया एवं नियम",
        duration: "3:45",
        channel: "InnerLight (Vishal)",
      },
      {
        id: "TBBROJpawjY",
        title: "Dhyaan Kaise kare",
        titleHi: "ध्यान कैसे करें — सरल एवं प्रामाणिक विधि",
        duration: "5:12",
        channel: "InnerLight (Vishal)",
      },
      {
        id: "Z1VeY479rbA",
        title: "पितृ दोष का समाधान कैसे करें ? Part 1",
        titleHi: "पितृ दोष का समाधान कैसे करें ? भाग १",
        duration: "6:20",
        channel: "InnerLight (Vishal)",
      },
    ],
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
    videos: [
      {
        id: "3fzygwWBUJk",
        title: "🚩 श्री गणेश जी साधना | दिवस 8 | श्रद्धा, भक्ति और दिव्य कृपा 🚩",
        titleHi: "🚩 श्री गणेश जी साधना | दिवस ८ | श्रद्धा, भक्ति और दिव्य कृपा 🚩",
        duration: "42:15",
        channel: "InnerLight (Vishal)",
      },
      {
        id: "hMZgmsaYUfA",
        title: "🚩 श्री गणेश जी साधना | दिवस 7 | श्रद्धा, भक्ति और दिव्य कृपा 🚩",
        titleHi: "🚩 श्री गणेश जी साधना | दिवस ७ | श्रद्धा, भक्ति और दिव्य कृपा 🚩",
        duration: "38:40",
        channel: "InnerLight (Vishal)",
      },
      {
        id: "hlE8ZO-xqOg",
        title: "🚩 श्री गणेश जी साधना | दिवस 6 | श्रद्धा, भक्ति और दिव्य कृपा 🚩",
        titleHi: "🚩 श्री गणेश जी साधना | दिवस ६ | श्रद्धा, भक्ति और दिव्य कृपा 🚩",
        duration: "45:10",
        channel: "InnerLight (Vishal)",
      },
      {
        id: "g9w5OjaJs_k",
        title: "🚩 श्री गणेश जी साधना | दिवस 4 | श्रद्धा, भक्ति और दिव्य कृपा 🚩",
        titleHi: "🚩 श्री गणेश जी साधना | दिवस ४ | श्रद्धा, भक्ति और दिव्य कृपा 🚩",
        duration: "40:22",
        channel: "InnerLight (Vishal)",
      },
      {
        id: "mhvpJCD-MMc",
        title: "🚩 श्री गणेश जी साधना | दिवस 3 | श्रद्धा, भक्ति और दिव्य कृपा 🚩",
        titleHi: "🚩 श्री गणेश जी साधना | दिवस ३ | श्रद्धा, भक्ति और दिव्य कृपा 🚩",
        duration: "36:50",
        channel: "InnerLight (Vishal)",
      },
      {
        id: "aYQvgQdAQvQ",
        title: "🚩 श्री गणेश जी साधना | दिवस 1 | नई यात्रा का शुभारंभ 🚩",
        titleHi: "🚩 श्री गणेश जी साधना | दिवस १ | नई यात्रा का शुभारंभ 🚩",
        duration: "48:15",
        channel: "InnerLight (Vishal)",
      },
    ],
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
    videos: [
      {
        id: "HPQDLxcNjP8",
        title: "Devta Dosh Solve Kyu Nahi Hota? Sabse Badi Wajah! ⚡ #InnerLight",
        titleHi: "देवता दोष का समाधान क्यों नहीं होता? सबसे बड़ी वजह! ⚡",
        duration: "1:00",
        channel: "InnerLight (Vishal)",
      },
      {
        id: "erQZvA5UW9M",
        title: "symptoms - पापी पितृ 💀 लक्षण और संकेत",
        titleHi: "लक्षण - पापी पितृ 💀 लक्षण और संकेत",
        duration: "1:00",
        channel: "InnerLight (Vishal)",
      },
      {
        id: "MHV10fAYDHE",
        title: "Teenagers achieve faster in spirituality — Why young seekers progress quickly",
        titleHi: "युवा साधक अध्यात्म में शीघ्र उन्नति क्यों करते हैं",
        duration: "1:00",
        channel: "InnerLight (Vishal)",
      },
      {
        id: "-OFtuneZYpM",
        title: "Dhayan mai dusra mantra chalne lagta hai — ध्यान में दूसरा मंत्र चलना",
        titleHi: "ध्यान में दूसरा मंत्र चलने लगे तो क्या करें?",
        duration: "1:00",
        channel: "InnerLight (Vishal)",
      },
      {
        id: "0Cn38vsD1BQ",
        title: "Dhayan mai chize melt hote dikhna QnA — अनुभव और समाधान",
        titleHi: "ध्यान में वस्तुएं पिघलती हुई दिखना — साधक समाधान",
        duration: "1:00",
        channel: "InnerLight (Vishal)",
      },
      {
        id: "b4EDeds7jb4",
        title: "Spiritual Growth Ke Liye Satvik Food Kyu Zaroori Hai? 🧘‍♂️",
        titleHi: "आध्यात्मिक प्रगति के लिए सात्विक आहार क्यों आवश्यक है?",
        duration: "1:00",
        channel: "InnerLight (Vishal)",
      },
    ],
  },
];

function PlaylistCard({
  item,
  isHi,
}: {
  item: PlaylistCardData;
  isHi: boolean;
}) {
  const [selectedVideoId, setSelectedVideoId] = useState<string>(item.videos[0]?.id || "");
  const [hasUserSelected, setHasUserSelected] = useState<boolean>(false);

  const activeVideo = item.videos.find((v) => v.id === selectedVideoId) || item.videos[0];

  const handleSelectVideo = (videoId: string) => {
    setSelectedVideoId(videoId);
    setHasUserSelected(true);
  };

  const iframeSrc = hasUserSelected
    ? `https://www.youtube-nocookie.com/embed/${selectedVideoId}?list=${item.listId}&autoplay=1`
    : `https://www.youtube-nocookie.com/embed/${selectedVideoId || ""}?list=${item.listId}`;

  return (
    <div className="flex flex-col h-full">
      {/* ── Top Bar Above Column ── */}
      <div className="flex items-center justify-between mb-3 min-h-[38px]">
        {item.isFaq ? (
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

        {item.isFaq ? (
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
            {item.videos.length} Videos
          </span>
        )}
      </div>

      {/* ── Main Playlist Card ── */}
      <div className="bg-white rounded-2xl border border-[#E7E2D6] hover:border-gold/40 transition-all duration-300 shadow-sm hover:shadow-md overflow-hidden flex flex-col h-full">
        {/* Card Header */}
        <div className="p-5 sm:p-6 pb-3">
          <div className="flex items-start justify-between gap-3 mb-2">
            <h3 className="font-serif text-[1.2rem] sm:text-[1.28rem] text-ink leading-snug font-medium">
              {isHi ? item.titleHi : item.title}
            </h3>
            <span className="flex-shrink-0 w-7 h-7 rounded-full bg-[#FAF7F2] border border-[#E8E2D5] flex items-center justify-center text-xs font-serif text-ink-soft">
              {isHi ? item.stepNumberHi : item.stepNumber}
            </span>
          </div>
          <p className="text-[0.84rem] text-ink-soft leading-relaxed min-h-[38px] line-clamp-2">
            {isHi ? item.descriptionHi : item.description}
          </p>
        </div>

        {/* ── Optional FAQ Tab Bar for 3rd Playlist directly above embed ── */}
        <div className="px-5 sm:px-6">
          {item.isFaq && (
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

          {/* ── Active Video Player Embed ── */}
          <div className="relative aspect-video w-full rounded-xl overflow-hidden bg-black/5 shadow-inner border border-black/5">
            <iframe
              src={iframeSrc}
              title={isHi ? activeVideo?.titleHi || activeVideo?.title : activeVideo?.title}
              className="absolute inset-0 w-full h-full border-0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              loading="lazy"
            />
          </div>
        </div>

        {/* ── Expanded Playlist Video List in Light Color Theme ── */}
        <div className="px-5 sm:px-6 pt-4 pb-4 flex-1 flex flex-col">
          <div className="flex items-center justify-between text-[0.72rem] tracking-wider uppercase text-ink-soft/75 font-semibold mb-2 px-1">
            <span className="flex items-center gap-1.5 text-gold font-medium">
              <ListVideo className="w-3.5 h-3.5" />
              <span>
                {isHi ? `सत्र सूची (${item.videos.length} वीडियो)` : `Playlist Videos (${item.videos.length})`}
              </span>
            </span>
            <span className="text-[0.68rem] text-ink-soft/60 font-normal">
              {isHi ? "चुनने के लिए क्लिक करें" : "Click to view video"}
            </span>
          </div>

          {/* Light Theme Video Rows Container */}
          <div className="bg-[#FAF8F4] rounded-xl border border-[#E7E2D6] overflow-hidden shadow-xs flex flex-col divide-y divide-[#EAE5DA]/70 max-h-[330px] overflow-y-auto">
            {item.videos.map((vid, idx) => {
              const isCurrent = activeVideo?.id === vid.id;

              return (
                <button
                  key={vid.id}
                  type="button"
                  onClick={() => handleSelectVideo(vid.id)}
                  className={`w-full text-left p-2.5 sm:p-3 flex items-center gap-2.5 sm:gap-3 transition-all duration-200 group ${
                    isCurrent
                      ? "bg-[#F3ECE0] border-l-[3.5px] border-gold shadow-xs"
                      : "hover:bg-[#F5EFE4] bg-transparent"
                  }`}
                >
                  {/* Row Number or Playing Wave Indicator */}
                  <div className="w-5 shrink-0 flex items-center justify-center text-xs font-mono">
                    {isCurrent ? (
                      <span className="w-4 h-4 rounded-full bg-gold/20 flex items-center justify-center">
                        <Play className="w-2.5 h-2.5 fill-gold text-gold" />
                      </span>
                    ) : (
                      <span className="text-ink-soft/60 group-hover:text-gold transition-colors font-semibold">
                        {idx + 1}
                      </span>
                    )}
                  </div>

                  {/* Thumbnail with duration badge */}
                  <div className="relative w-16 sm:w-20 aspect-video rounded-md overflow-hidden bg-black/10 shrink-0 shadow-xs border border-black/5">
                    <img
                      src={`https://i.ytimg.com/vi/${vid.id}/mqdefault.jpg`}
                      alt={vid.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                    {isCurrent && (
                      <div className="absolute inset-0 bg-gold/20 backdrop-blur-[0.5px] flex items-center justify-center">
                        <span className="w-4 h-4 rounded-full bg-white/90 shadow flex items-center justify-center">
                          <Play className="w-2 h-2 fill-gold text-gold ml-0.5" />
                        </span>
                      </div>
                    )}
                    {vid.duration && (
                      <span className="absolute bottom-0.5 right-0.5 bg-black/75 text-white text-[0.56rem] font-mono px-1 py-0.2 rounded font-medium">
                        {vid.duration}
                      </span>
                    )}
                  </div>

                  {/* Video Title & Channel Meta in Light Ink Color */}
                  <div className="flex-1 min-w-0 pr-1">
                    <h4
                      className={`text-[0.78rem] sm:text-[0.82rem] leading-snug line-clamp-2 transition-colors ${
                        isCurrent
                          ? "text-ink font-semibold"
                          : "text-ink-soft group-hover:text-ink font-medium"
                      }`}
                    >
                      {isHi ? vid.titleHi || vid.title : vid.title}
                    </h4>
                    <div className="flex items-center gap-2 mt-0.5 text-[0.67rem] text-ink-soft/70">
                      <span>{vid.channel || "InnerLight"}</span>
                      {isCurrent && (
                        <>
                          <span>•</span>
                          <span className="text-gold font-medium">
                            {isHi ? "चल रहा है" : "Active"}
                          </span>
                        </>
                      )}
                    </div>
                  </div>
                </button>
              );
            })}
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
            <span>{isHi ? "पूरी प्लेलिस्ट खोलें" : "View Full Playlist"}</span>
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
}

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

        {/* ── 3 Playlists Side by Side with Expanded Light-Themed Video Rows ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {PLAYLISTS_DATA.map((item) => (
            <PlaylistCard key={item.id} item={item} isHi={isHi} />
          ))}
        </div>
      </div>
    </section>
  );
}
