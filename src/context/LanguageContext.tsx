"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

export type Language = "en" | "hi";

export interface Translations {
  [key: string]: {
    en: string;
    hi: string;
  };
}

export const translations: Translations = {
  // Navigation
  "nav.brand": {
    en: "innerlight",
    hi: "अंतर्प्रकाश",
  },
  "nav.home": {
    en: "Home",
    hi: "मुख्य पृष्ठ",
  },
  "nav.scriptures": {
    en: "Scriptures",
    hi: "पवित्र शास्त्र",
  },
  "nav.calendar": {
    en: "Calendar",
    hi: "चंद्र पंचांग",
  },
  "nav.programs": {
    en: "Programs",
    hi: "साधना व सत्र",
  },
  "nav.journal": {
    en: "Journal",
    hi: "आत्म-चिंतन",
  },
  "nav.shop": {
    en: "Shop",
    hi: "पावन संग्रह",
  },
  "nav.tagline": {
    en: "A luxury spiritual sanctuary for inner stillness",
    hi: "आंतरिक मौन और आत्म-साक्षात्कार का दिव्य स्थान",
  },
  "nav.langNoticeEn": {
    en: "Switched to English",
    hi: "अंग्रेज़ी चुनी गई",
  },
  "nav.langNoticeHi": {
    en: "हिन्दी भाषा चुनी गई",
    hi: "हिन्दी भाषा चुनी गई",
  },

  // Hero Section
  "hero.subtitle": {
    en: "A luxury sanctuary of silence & timeless wisdom",
    hi: "शांति और सनातन ज्ञान का एक दिव्य आश्रम",
  },
  "hero.title": {
    en: "Awaken the Divine Light Within.",
    hi: "अपने भीतर की दिव्य ज्योति को जाग्रत करें।",
  },
  "hero.desc": {
    en: "Step beyond the noise of everyday life. Reconnect with ancient Vedic wisdom, conscious meditation, and guided inner transformation.",
    hi: "दैनिक जीवन के कोलाहल से परे जाएं। प्राचीन वैदिक ज्ञान, ध्यान और आत्मिक रूपांतरण से पुनः जुड़ें।",
  },
  "hero.cta_explore": {
    en: "Explore Sacred Calendar",
    hi: "पंचांग व साधना दर्शन",
  },
  "hero.cta_practice": {
    en: "The Practice",
    hi: "साधना विधि",
  },

  // Practice Section
  "practice.tag": {
    en: "The Core Practice",
    hi: "मूल साधना पद्धति",
  },
  "practice.title": {
    en: "Pillars of Inner Awakening",
    hi: "आत्म-जागृति के मुख्य स्तंभ",
  },
  "practice.subtitle": {
    en: "Ancient methods tuned for modern consciousness.",
    hi: "आधुनिक चेतना के अनुरूप प्राचीन साधना विधियां।",
  },

  // Calendar Section
  "cal.tag": {
    en: "The Lunar Calendar",
    hi: "चंद्र पंचांग",
  },
  "cal.title": {
    en: "Where the practice stands today.",
    hi: "प्रकृति और चंद्रमा की चाल अनुसार साधना।",
  },
  "cal.desc": {
    en: "Each week follows the pull of the moon — what's ongoing, what's ending, and what the next Purnima or Amavasya is asking of us.",
    hi: "प्रत्येक सप्ताह चंद्रमा की गति का अनुसरण करता है — पूर्णिमा और अमावस्या की दिव्य ऊर्जा का संरेखण।",
  },

  // Footer Section
  "footer.quote": {
    en: "“ॐ असतो मा सद्गमय । तमसो मा ज्योतिर्गमय ।”",
    hi: "“ॐ असतो मा सद्गमय । तमसो मा ज्योतिर्गमय । मृत्योर्माऽमृतं गमय ॥”",
  },
  "footer.desc": {
    en: "A luxury spiritual sanctuary held by Vishal Gautam. Quiet, unhurried, and dedicated to the direct experience of inner silence.",
    hi: "विशाल गौतम द्वारा संचालित एक पवित्र आध्यात्मिक केंद्र। मौन, सहजता और आत्म-शांति को समर्पित।",
  },
  "footer.quickLinks": {
    en: "Navigation",
    hi: "मार्गदर्शन",
  },
  "footer.rights": {
    en: "All rights reserved. Innerlight Spiritual Sanctuary.",
    hi: "सर्वाधिकार सुरक्षित। अंतर्प्रकाश आध्यात्मिक साधना केंद्र।",
  },
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
  t: (key: string, fallback?: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>("en");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    try {
      const savedLang = localStorage.getItem("innerlight_lang") as Language;
      if (savedLang === "en" || savedLang === "hi") {
        setLanguageState(savedLang);
      }
    } catch {
      // Ignore storage errors in restricted environments
    }
    setMounted(true);
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    try {
      localStorage.setItem("innerlight_lang", lang);
    } catch {
      // Ignore
    }
  };

  const toggleLanguage = () => {
    const nextLang = language === "en" ? "hi" : "en";
    setLanguage(nextLang);
  };

  const t = (key: string, fallback?: string): string => {
    if (translations[key] && translations[key][language]) {
      return translations[key][language];
    }
    return fallback || key;
  };

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
        toggleLanguage,
        t,
      }}
    >
      <div data-lang={language} className={mounted && language === "hi" ? "font-devanagari" : ""}>
        {children}
      </div>
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
