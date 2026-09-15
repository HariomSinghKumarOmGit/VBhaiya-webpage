export interface SadhanaItem {
  id: string;
  slug: string;
  title: string;
  titleHi: string;
  deity: string;
  deityHi: string;
  durationDays: number;
  durationLabel: string;
  durationLabelHi: string;
  startDate: string;
  startDateHi: string;
  tag: string;
  tagHi: string;
  badge: string;
  badgeHi: string;
  accentColor: string;
  badgeBg: string;
  bgGradient: string;
  summary: string;
  summaryHi: string;
  mantra: string;
  mantraDevanagari: string;
  mantraMeaning: string;
  mantraMeaningHi: string;
  featured: boolean;
  category: "core" | "devi" | "vishnu_shiva" | "akhand_jyot" | "remedies";
  categoryHi: string;
  meetingTime: string;
  meetingTimeHi: string;
  meetLink?: string;
  dailyCommitment: string;
  dailyCommitmentHi: string;
  overview: string;
  overviewHi: string;
  pillars: {
    title: string;
    titleHi: string;
    desc: string;
    descHi: string;
  }[];
  dailySchedule: {
    time: string;
    activity: string;
    activityHi: string;
    details: string;
    detailsHi: string;
  }[];
  guidelines: {
    en: string[];
    hi: string[];
  };
  benefits: {
    en: string[];
    hi: string[];
  };
  specialInstructions?: {
    en: string[];
    hi: string[];
  };
}

export const SADHANAS_DATA: SadhanaItem[] = [
  {
    id: "41-day-sadhana",
    slug: "41-day-sadhana",
    title: "Salangpur Hanuman Ji Mahasadhana",
    titleHi: "सालंगपुर हनुमान जी महासाधना",
    deity: "Pavanputra Hanuman Ji (Salangpur Dham)",
    deityHi: "पवनपुत्र श्री हनुमान जी (सालंगपुर धाम)",
    durationDays: 41,
    durationLabel: "11, 21, or 41 Days Sankalp",
    durationLabelHi: "11, 21 या 41 दिवसीय संकल्प",
    startDate: "Starts 4th September",
    startDateHi: "प्रारंभ: 4 सितंबर",
    tag: "Core Intensive",
    tagHi: "महासाधना",
    badge: "Master Cycle · 11/21/41 Days",
    badgeHi: "महाचक्र · 11/21/41 दिन",
    accentColor: "#C8821C",
    badgeBg: "rgba(200, 130, 28, 0.15)",
    bgGradient: "linear-gradient(135deg, #2B160B 0%, #170903 100%)",
    summary: "The foundational spiritual immersion starting every 4th of September. Dedicated to the powerful Salangpur Hanuman Ji Bhayabhanjana Mantra — dissolving all fears, negative energies, and establishing unshakeable mental strength and divine peace.",
    summaryHi: "4 सितंबर से प्रारंभ होने वाला पावन आध्यात्मिक अनुष्ठान। सालंगपुर हनुमान जी के 'ॐ नमो हनुमते भयभंजनाय सुखं कुरु फट् स्वाहा' महामंत्र को समर्पित यह साधना समस्त भय, रोग, शोक व नकारात्मकता का समूल नाश कर अभय पद प्रदान करती है।",
    mantra: "Om Namo Hanumate Bhayabhanjanāya Sukhaṁ Kuru Phaṭ Svāhā",
    mantraDevanagari: "ॐ नमो हनुमते भय भंजनाय सुखम् कुरु फट् स्वाहा ॥",
    mantraMeaning: "O Hanumanji, destroyer of fear, we bow to you. Please remove all our fears and bless us with happiness.",
    mantraMeaningHi: "हे समस्त भयों और संकटों का नाश करने वाले, सर्वसुख प्रदाता, अदम्य बलशाली पवनपुत्र श्री हनुमान जी, हमारे समस्त कष्टों का निवारण कर सुख, शांति और अभय प्रदान करें।",
    featured: true,
    category: "core",
    categoryHi: "महासाधना",
    meetingTime: "8:00 PM – 9:00 PM IST (Daily Collective Sit)",
    meetingTimeHi: "शाम 8:00 – 9:00 बजे (दैनिक सामूहिक ध्यान)",
    meetLink: "https://meet.google.com/odv-evnd-mfy",
    dailyCommitment: "Minimum 11 malas daily (1, 2, or 4 rounds depending on duration)",
    dailyCommitmentHi: "प्रतिदिन कम से कम 11 माला",
    overview: "In the Vedic tradition, a sadhana cycle is required to rewrite subconscious impressions, burn through chronic fears, and establish divine alignment. Starting every 4th of September, this intensive sadhana connects directly with the divine field of Salangpur Hanuman Ji through the potent Bhayabhanjana Mantra, daily contemplation, pranayama, and 8:00 PM live collective sits on Google Meet. You can choose a duration of 11 Days (4 rounds), 21 Days (2 rounds), or 41 Days (1 round).",
    overviewHi: "वैदिक परंपरा में यह वह समय है जिसमें मन के पुराने भय और नकारात्मक संस्कार समाप्त होते हैं और उच्च चेतना स्थापित होती है। 4 सितंबर से आरंभ होने वाली यह साधना सालंगपुर हनुमान जी के पावन क्षेत्र से जुड़कर भय-निवारण, आत्म-बल और जीवन में सुख-शांति का संचार करती है। आप 11 दिन (4 चक्र), 21 दिन (2 चक्र), या 41 दिन (1 चक्र) का संकल्प ले सकते हैं।",
    pillars: [
      {
        title: "Bhayabhanjana Mantra Japa",
        titleHi: "भयभंजन महामंत्र जप",
        desc: "Mantra recitation of 'Om Namo Hanumate Bhayabhanjanaya Sukham Kuru Phat Swaha'. A minimum of 11 malas daily is suggested. Sincere devotion (bhav) matters more than casual count.",
        descHi: "'ॐ नमो हनुमते भय भंजनाय सुखम् कुरु फट् स्वाहा' का श्रद्धापूर्वक जप। प्रतिदिन कम से कम 11 माला। गिनती से अधिक भाव का महत्व है।"
      },
      {
        title: "Additional Practice Guidance",
        titleHi: "अतिरिक्त अभ्यास मार्गदर्शन",
        desc: "Bakhoor Group: Add Bakhoor oil to diya on Thu, Fri, Sat. Heavy Negativity: Use only agarbatti, no diya. Sankalp: Regular diya practice on Thu, Fri, Sat.",
        descHi: "बखूर समूह: गुरु, शुक्र, शनि को दीपक में बखूर का तेल डालें। भारी नकारात्मकता: केवल अगरबत्ती का उपयोग करें। संकल्प: गुरु, शुक्र, शनि को नियमित दीपक प्रज्वलित करें।"
      },
      {
        title: "Brahmacharya & Prana Purification",
        titleHi: "ब्रह्मचर्य व प्राण शुद्धि",
        desc: "Sattvic lifestyle, disciplined thoughts, and balancing nadis with rhythmic pranayama.",
        descHi: "सात्विक आहार, शुद्ध विचार व प्राणायाम द्वारा प्राण ऊर्जा का संवर्धन।"
      },
      {
        title: "Evening Google Meet Sit (8 PM)",
        titleHi: "सामूहिक संध्या साधना (8 PM)",
        desc: "Gathering at 8:00 PM IST with the global sangha for guided meditation and shared resonance.",
        descHi: "प्रतिदिन रात्रि 8 बजे गूगल मीट पर सामूहिक मौन, ध्यान व आध्यात्मिक मार्गदर्शन।"
      }
    ],
    dailySchedule: [
      {
        time: "05:30 AM – 06:15 AM",
        activity: "Morning Sadhana & Bhayabhanjana Japa",
        activityHi: "प्रातःकालीन ध्यान व भयभंजन जप",
        details: "Nadi Shodhana, Bhayabhanjana Mantra Japa, and Sri Hanuman Chalisa.",
        detailsHi: "नाड़ी शोधन, भयभंजन मंत्र जप एवं श्री हनुमान चालीसा पाठ।"
      },
      {
        time: "12:30 PM",
        activity: "Midday Sattvic Mindfulness",
        activityHi: "मध्याह्न सात्विक चेतना",
        details: "3 minutes of silent gratitude, satvik vegetarian meal, and calm awareness.",
        detailsHi: "3 मिनट का शांत मौन व सात्विक आहार।"
      },
      {
        time: "08:00 PM – 09:00 PM",
        activity: "Live Community Sadhana (Google Meet)",
        activityHi: "लाइव सामूहिक साधना (गूगल मीट)",
        details: "Guided meditation, daily contemplation discourse, and group silence.",
        detailsHi: "निर्देशित ध्यान, आध्यात्मिक प्रश्नोत्तर व सामूहिक मौन।"
      },
      {
        time: "09:45 PM",
        activity: "Night Reflection & Surrender",
        activityHi: "रात्रि आत्म-चिंतन व समर्पण",
        details: "Noting inner shifts, observing mind patterns, and offering prayers to Hanuman Ji.",
        detailsHi: "दिनभर के अनुभवों का अवलोकन और चित्त शुद्धि।"
      }
    ],
    guidelines: {
      en: [
        "IMPORTANT: Contact your healer before starting this sadhana.",
        "Choose a practical count and duration (11, 21, or 41 days) and stick to it.",
        "Maintain strict Brahmacharya and pure, sattvic vegetarian diet devoid of tamasic foods.",
        "Spend at least 15 minutes in total silence before sleep.",
        "Join the 8:00 PM daily live sit on Google Meet whenever possible."
      ],
      hi: [
        "महत्वपूर्ण: इस साधना को प्रारंभ करने से पूर्व अपने हीलर से संपर्क अवश्य करें।",
        "अपनी क्षमता अनुसार जप संख्या और अवधि (11, 21, या 41 दिन) का संकल्प लें और उसका पालन करें।",
        "पूर्ण ब्रह्मचर्य तथा शुद्ध, सात्विक एवं तामसिकता रहित आहार ग्रहण करें।",
        "रात्रि विश्राम से पूर्व 15 मिनट मौन का अभ्यास करें।",
        "प्रतिदिन रात्रि 8 बजे गूगल मीट पर सामूहिक ध्यान में जुड़ें।"
      ]
    },
    benefits: {
      en: [
        "Absolute fearlessness and permanent eradication of chronic anxiety and panic",
        "Total protection against negative energies, evil eye, and malefic planetary influences",
        "Awakening of boundless physical vitality, mental clarity, and prana shakti",
        "Deep spiritual peace, prosperity, and blessings of Salangpur Hanuman Ji"
      ],
      hi: [
        "समस्त प्रकार के भय, घबराहट और मानसिक तनाव से स्थायी मुक्ति",
        "नकारात्मक शक्तियों, नजर दोष व ग्रह बाधाओं से अभेद्य सुरक्षा",
        "शारीरिक बल, ओज, तेज और प्राण शक्ति का तीव्र विकास",
        "सालंगपुर हनुमान जी की असीम कृपा, सुख-शांति और आत्म-संतोष"
      ]
    }
  },
  {
    id: "navratri-chamunda-sadhana-21-days",
    slug: "navratri-chamunda-sadhana-21-days",
    title: "Navratri Sadhana — Chamunda Mata",
    titleHi: "नवरात्रि साधना — माँ चामुण्डा (नवार्ण महामंत्र)",
    deity: "Chamunda Mata & Navadurga Shaktis",
    deityHi: "माँ चामुण्डा व नवदुर्गा शक्तियां",
    durationDays: 21,
    durationLabel: "9, 11, or 21 Days Sankalp",
    durationLabelHi: "9, 11 या 21 दिवसीय संकल्प",
    startDate: "Sharad / Chaitra Navratri",
    startDateHi: "प्रारंभ: शारदीय / चैत्र नवरात्रि",
    tag: "Navarna Shakti",
    tagHi: "नवार्ण शक्ति",
    badge: "33 Malas Daily · Navarna Mantra",
    badgeHi: "33 माला दैनिक · नवार्ण मंत्र",
    accentColor: "#A8331F",
    badgeBg: "rgba(168, 51, 31, 0.15)",
    bgGradient: "linear-gradient(135deg, #3D120B 0%, #1C0502 100%)",
    summary: "Direct connection with Chamunda Mata Mandir Shaktis through the sacred 9-syllable Navarna Mantra. Daily 33 malas in one sitting with an unbroken oil lamp for 9, 11, or 21 days with Sankalp.",
    summaryHi: "माँ चामुण्डा मंदिर की दिव्य शक्तियों से सीधा संपर्क। 9, 11 या 21 दिनों का संकल्प लेकर प्रतिदिन एक ही बैठक में तेल के जलते दीपक के समक्ष नवार्ण मंत्र की 33 माला का जप।",
    mantra: "Aiṁ Hrīṁ Klīṁ Chāmuṇḍāyai Vichche",
    mantraDevanagari: "ऐं ह्रीं क्लीं चामुण्डायै विच्चे ॥",
    mantraMeaning: "I bow to the Divine Mother Chamunda, the unified embodiment of Saraswati (Aim), Lakshmi (Hrim), and Kali (Klim), granting spiritual knowledge, victory over desires, and total liberation.",
    mantraMeaningHi: "महासरस्वती, महालक्ष्मी और महाकाली स्वरूपा माँ चामुण्डा को नमस्कार। यह नव-अक्षरी मंत्र ज्ञान, ऐश्वर्य, शक्ति और मुक्ति प्रदान करता है।",
    featured: true,
    category: "devi",
    categoryHi: "देवी साधना",
    meetingTime: "Daily Twilight / Night Sitting (33 Malas)",
    meetingTimeHi: "दैनिक सायं / रात्रि काल (33 माला जप)",
    meetLink: "https://meet.google.com/odv-evnd-mfy",
    dailyCommitment: "60–90 mins (in one single sitting)",
    dailyCommitmentHi: "प्रतिदिन 60–90 मिनट (एक ही बैठक में)",
    overview: "Observed during auspicious Navratri windows. Sadhaks take a formal Sankalp for 9, 11, or 21 days to complete 33 malas of Navarna Mantra daily before a lit mustard/til oil diya. After completing the Sankalp cycle, continue with 3 malas daily, or at least on every Amavasya and Poornima to maintain the sacred energetic link.",
    overviewHi: "नवरात्रि काल में माँ चामुण्डा की यह साधना की जाती है। साधक 9, 11 या 21 दिन का संकल्प लेकर प्रतिदिन अखण्ड दीप के समक्ष 33 माला नवार्ण मंत्र का जप करते हैं। संकल्प पूर्ण होने के उपरांत भी प्रतिदिन 3 माला अथवा प्रत्येक अमावस्या व पूर्णिमा को जप जारी रखें।",
    pillars: [
      {
        title: "33 Malas Single Sitting",
        titleHi: "33 माला अखंड जप",
        desc: "Chanting 33 rounds of Navarna Mantra without getting up from the asan.",
        descHi: "एक ही आसन पर बैठकर बिना उठे नवार्ण मंत्र की 33 माला का पूर्ण जप।"
      },
      {
        title: "Sacred Oil Diya",
        titleHi: "पवित्र तेल दीपक",
        desc: "Mustard or Til oil lamp lit continuously throughout the jaap duration.",
        descHi: "जप काल के दौरान तिल या सरसों के तेल का दीपक प्रज्वलित रखना अनिवार्य है।"
      },
      {
        title: "Sankalp & Post-Maintenance",
        titleHi: "संकल्प व नित्य नियम",
        desc: "9, 11, or 21 days Sankalp followed by 3 daily malas to preserve Shakti resonance.",
        descHi: "संकल्प समाप्ति के बाद भी 3 माला नित्य जप से ऊर्जा चक्र सदैव जाग्रत रहता है।"
      },
      {
        title: "Aura & Dosha Purification",
        titleHi: "कवच व दोष शुद्धि",
        desc: "Dissolving obstacles and creating an impenetrable spiritual armor.",
        descHi: "भय, हीनभावना और ऊपरी बाधाओं का समूल नाश।"
      }
    ],
    dailySchedule: [
      {
        time: "07:30 PM – 09:00 PM",
        activity: "Navarna Mantra 33 Malas Japa",
        activityHi: "33 माला नवार्ण मंत्र जप",
        details: "Light the oil lamp, take a pure seat on wool/kusha asan, and complete 33 malas with focused devotion.",
        detailsHi: "दीपक प्रज्वलित कर ऊनी आसन पर बैठें और 33 माला का शांत भाव से जप करें।"
      }
    ],
    guidelines: {
      en: [
        "Chant all 33 malas in one single sitting — do not break the session midway.",
        "Keep an oil diya lit during the entire jaap sitting.",
        "Ideal for dedicated sadhaks; beginners should first complete 11-day pre-cleansing.",
        "Maintain strict brahmacharya and vegetarian sattvic diet throughout the Sankalp days."
      ],
      hi: [
        "सभी 33 माला एक ही बैठक में पूर्ण करें, बीच में आसन न छोड़ें।",
        "जप के समय दीपक निरंतर जलता रहना चाहिए।",
        "साधना काल में पूर्ण ब्रह्मचर्य व सात्विक आहार का पालन करें।",
        "नए साधक पहले 11-दिवसीय महामृत्युंजय शुद्धि अवश्य करें।"
      ]
    },
    benefits: {
      en: [
        "Direct connection to Chamunda Mata temple energetic reservoir",
        "Instant elimination of fears, dark energies, and psychic vulnerabilities",
        "Empowerment of speech (Vak Siddhi) and willpower",
        "Continuous divine motherly grace in all endeavors"
      ],
      hi: [
        "माँ चामुण्डा की साक्षात कृपा व शक्ति का संरक्षण",
        "समस्त प्रकार के भय, नजर दोष और नकारात्मकता का तत्काल निवारण",
        "वाणी में ओज, संकल्प शक्ति व तेज की वृद्धि",
        "जीवन के हर क्षेत्र में विजय और सुरक्षा का अनुभव"
      ]
    }
  },
  {
    id: "kalashtami-mahakali-sadhana",
    slug: "kalashtami-mahakali-sadhana",
    title: "Kālashtamī Mahākālī Sādhana",
    titleHi: "कालाष्टमी महाकाली साधना (काल रात्रि अनुष्ठान)",
    deity: "Maa Mahākālī & Kālarātrī",
    deityHi: "माँ महाकाली व कालरात्रि",
    durationDays: 1,
    durationLabel: "Kartika Krishna Ashtami (Night Intensive)",
    durationLabelHi: "कार्तिक कृष्ण अष्टमी (रात्रि साधना)",
    startDate: "Kartika Krishna Ashtami (Annual / Monthly)",
    startDateHi: "कार्तिक कृष्ण अष्टमी / मासिक कालाष्टमी",
    tag: "Karma Dissolution",
    tagHi: "कर्म मुक्ति",
    badge: "Kartika Krishna Ashtami · South Facing",
    badgeHi: "कार्तिक कृष्णाष्टमी · दक्षिण मुखी",
    accentColor: "#4A1310",
    badgeBg: "rgba(74, 19, 16, 0.2)",
    bgGradient: "linear-gradient(135deg, #240705 0%, #0D0201 100%)",
    summary: "A powerful night of transformation observed on Kartika Krishna Ashtami between 8:00 PM – 11:00 PM facing South. Dissolve unresolved karmic weights, pitra doshas, and timeline blockages under Mahākālī and Kālarātrī's grace.",
    summaryHi: "कार्तिक कृष्ण अष्टमी की रात्रि 8:00 से 11:00 बजे के मध्य दक्षिण मुख होकर की जाने वाली रूपांतरणकारी साधना। पूर्व जन्मों के कर्म भार, पितृ दोष व काल बंधनों की मुक्ति।",
    mantra: "Om Krīṁ Kālikāyai Namaḥ · Om Aiṁ Hrīṁ Klīṁ Kālarātryai Namaḥ",
    mantraDevanagari: "ॐ क्रीं कालिकायै नमः ॥\nॐ ऐं ह्रीं क्लीं कालरात्र्यै नमः ॥",
    mantraMeaning: "Primary Mantra: Om Krīṁ Kālikāyai Namaḥ (1/3/7/11/21/33/108 malas). Balancing Mantra: Om Aiṁ Hrīṁ Klīṁ Kālarātryai Namaḥ (3 malas for every 1 primary mala) to neutralize karmic traces and stabilize energy.",
    mantraMeaningHi: "मुख्य मंत्र: 'ॐ क्रीं कालिकायै नमः'। संतुलनकारी मंत्र: 'ॐ ऐं ह्रीं क्लीं कालरात्र्यै नमः' (प्रत्येक मुख्य माला पर 3 माला) जो कर्म अवशेषों को शांत कर चक्रों को संतुलित करता है।",
    featured: true,
    category: "devi",
    categoryHi: "देवी साधना",
    meetingTime: "8:00 PM – 11:00 PM (Night Window)",
    meetingTimeHi: "रात्रि 8:00 – 11:00 बजे",
    meetLink: "https://meet.google.com/odv-evnd-mfy",
    dailyCommitment: "45 mins – 2 hours (Night Sit)",
    dailyCommitmentHi: "45 मिनट से 2 घंटे",
    overview: "On Kālashtamī, the veils between past, present, and future thin. Mahākālī frees the sadhak from time-bound karma while Kālarātrī resets what destiny locked. Sit facing South with a sesame/mustard oil lamp lit with burning camphor (not matches). Remove all dhagas, taweez, pitra photos, or tantra items before sitting.",
    overviewHi: "कालाष्टमी वह पावन रात्रि है जब काल के पर्दे अत्यंत सूक्ष्म हो जाते हैं। महाकाली साधक को समय के बंधनों से मुक्त करती हैं और कालरात्रि भाग्य के बंद द्वारों को खोलती हैं। दक्षिण दिशा की ओर मुख कर, कपूर से प्रज्वलित तिल/सरसों के तेल के दीपक के समक्ष यह साधना की जाती है।",
    pillars: [
      {
        title: "South Facing & Camphor Light",
        titleHi: "दक्षिण दिशा व कपूर ज्योति",
        desc: "Facing South (the direction of Kala & Time). Lighting the diya with burning camphor only.",
        descHi: "दक्षिण दिशा की ओर मुख। माचिस के स्थान पर जलते कपूर से दीपक को प्रज्वलित करना।"
      },
      {
        title: "Primary & Triple Balancing Jaap",
        titleHi: "मुख्य व त्रिगुण संतुलन जप",
        desc: "Chanting Kali mantra followed by 3x count of Kalaratri balancing mantra.",
        descHi: "काली मंत्र के बाद 3 गुना कालरात्रि मंत्र का जप कर ऊर्जा क्षेत्र को संतुलित करना।"
      },
      {
        title: "Kāl Dhyān (11–21 mins Silence)",
        titleHi: "काल ध्यान (मौन अवशोषण)",
        desc: "Sitting in absolute motionless silence after mantras with no visualization, only pure awareness.",
        descHi: "जप उपरांत 11 से 21 मिनट का पूर्ण शांत व विचारशून्य साक्षी ध्यान।"
      },
      {
        title: "Next Morning Tree Arpan",
        titleHi: "पीपल/नीम वृक्ष अर्पण",
        desc: "Offering remaining lamp oil at the base of a Peepal or Neem tree the following morning.",
        descHi: "अगली सुबह शीतल हुए दीप तेल को पीपल या नीम के वृक्ष की जड़ में अर्पित करना।"
      }
    ],
    dailySchedule: [
      {
        time: "08:00 PM – 09:30 PM",
        activity: "Kālashtamī Jaap & Kāl Dhyān",
        activityHi: "कालाष्टमी जप व काल ध्यान",
        details: "Light sesame lamp with camphor, face South in dark silent room, complete malas, and sit in 21-min silent Kal Dhyan.",
        detailsHi: "कपूर से दीपक जलाकर दक्षिण मुख बैठें, मंत्र पूर्ण कर 21 मिनट काल ध्यान में लीन रहें।"
      }
    ],
    guidelines: {
      en: [
        "Sit strictly facing South — the direction of Kala (Time & Death).",
        "Light the diya using burning camphor — never a matchstick or lighter.",
        "Keep the room dark except for the single diya flame; no phone or interruptions.",
        "Wash your mala with Ganga jal / rose water after completion; avoid salt & non-veg until next sunrise."
      ],
      hi: [
        "साधना के समय मुख अनिवार्य रूप से दक्षिण दिशा में होना चाहिए।",
        "दीपक को माचिस या लाइटर से नहीं, केवल जलते कपूर से ही जलाएं।",
        "कमरे में केवल दीपक का प्रकाश रहे, मोबाइल पूर्णतः बंद रखें।",
        "अगली सुबह तक नमक और तामसिक भोजन का पूर्ण त्याग रखें।"
      ]
    },
    benefits: {
      en: [
        "Dissolution of deep-seated ancestral (pitra) doshas and karmic baggage",
        "Destruction of hidden planetary blocks and unexplainable obstacles",
        "Supreme fearlessness and mastery over negative thoughts and time anxiety",
        "Direct purification of all nadis under Mahakali's protective grace"
      ],
      hi: [
        "पुराने पितृ दोषों और अज्ञात कर्म बंधनों से मुक्ति",
        "ग्रह बाधाओं और जीवन में बार-बार आने वाली रुकावटों का नाश",
        "भय, मृत्यु भय और मानसिक चिंताओं पर पूर्ण विजय",
        "माँ महाकाली के दिव्य रक्षा कवच की प्राप्ति"
      ]
    }
  },
  {
    id: "akhand-jyot-3-diya-sadhana",
    slug: "akhand-jyot-3-diya-sadhana",
    title: "Akhand Jyot — The Three Diya Process",
    titleHi: "अखण्ड ज्योति — तीन दीपक साधना अनुष्ठान",
    deity: "Kuldevi-Devta, Pitrs & Ishtdevta",
    deityHi: "कुलदेवी-कुलदेवता, पितृगण व इष्टदेव",
    durationDays: 3,
    durationLabel: "3-Day Akhanda Jyot (with 11-Day Cleansing)",
    durationLabelHi: "3 दिवसीय अखण्ड ज्योति (11 दिवसीय पूर्व शुद्धि)",
    startDate: "Pitru Paksha / Post-Diwali / Makar Sankranti",
    startDateHi: "पितृ पक्ष / दीवाली उपरांत / मकर संक्रांति",
    tag: "Trilok Connection",
    tagHi: "त्रिलोक नगरी द्वार",
    badge: "3 Diyas (Ghee, Mustard, Til) · 6:00 AM Start",
    badgeHi: "3 दीपक (घी, सरसों, तिल) · प्रातः 6 बजे",
    accentColor: "#E8A634",
    badgeBg: "rgba(232, 166, 52, 0.15)",
    bgGradient: "linear-gradient(135deg, #382408 0%, #170E02 100%)",
    summary: "A sacred 3-day continuous Akhanda Jyot using three distinct lamps: Cow Ghee (Diya 1), Mustard/Sarso Oil (Diya 2), and Til/Chameli Oil (Diya 3). Starts at 6:00 AM sharp to open access to Trilok Nagri and stabilize ancestral energies.",
    summaryHi: "तीन पवित्र दीपकों (1. गाय का घी, 2. सरसों का तेल, 3. तिल अथवा चमेली का तेल) का 3 दिवसीय अखण्ड दीप अनुष्ठान। प्रातः 6:00 बजे से प्रारंभ होकर यह साधना त्रिलोक नगरी का द्वार खोलती है और पितरों को तृप्त करती है।",
    mantra: "Om Tryambakaṁ Yajāmahe Sugandhiṁ Puṣṭivardhanam Urvārukamiva Bandhanān Mṛtyor Mukṣīya Māmṛtāt",
    mantraDevanagari: "ॐ त्र्यम्बकं यजामहे सुगन्धिं पुष्टिवर्धनम् ।\nउर्वारुकमिव बन्धनान् मृत्योर्मुक्षीय मामृतात् ॥",
    mantraMeaning: "The Mahamrityunjaya Mantra is chanted during the 11-day pre-sadhana cleansing with an oil diya lit, purifying the body and subconscious for the 3-day Akhand Jyot.",
    mantraMeaningHi: "साधना से पूर्व 11 दिनों तक महामृत्युंजय मंत्र का अधिकतम जप तेल के दीपक के समक्ष किया जाता है जिससे समस्त शारीरिक व आत्मिक अशुद्धियां भस्म हो जाती हैं।",
    featured: true,
    category: "akhand_jyot",
    categoryHi: "अखण्ड ज्योति",
    meetingTime: "6:00 AM Sharp Start · Continuous 3 Days",
    meetingTimeHi: "प्रातः 6:00 बजे प्रारंभ · 3 दिन अखंड",
    meetLink: "https://meet.google.com/odv-evnd-mfy",
    dailyCommitment: "Continuous lamp maintenance & morning/evening jaap",
    dailyCommitmentHi: "अखंड दीप दर्शन व प्रातः/सायं जप",
    overview: "Observed in 3 main annual windows: 1) Pitru Paksha (12 hrs daily, 6 AM–6 PM), 2) Post-Diwali Ancestral Cleansing (3-day 24h continuous), and 3) Makar Sankranti Cycle (3-day continuous). Preceded by 11 days of Mahamrityunjaya mantra cleansing. If a diya goes off, immediately relight it without moving its position.",
    overviewHi: "यह प्रक्रिया वर्ष में तीन मुख्य अवसरों पर की जाती है: 1) पितृ पक्ष (प्रातः 6 से सायं 6 बजे), 2) दीपावली पश्चात पितृ शुद्धि (3 दिन 24 घंटे अखंड), तथा 3) मकर संक्रांति चक्र। इसके पूर्व 11 दिन महामृत्युंजय मंत्र से आत्म-शुद्धि की जाती है।",
    pillars: [
      {
        title: "Three Sacred Fuels",
        titleHi: "तीन पावन दीप तेल",
        desc: "Diya 1: Pure Cow Ghee · Diya 2: Mustard (Sarso) Oil · Diya 3: Til or Chameli (Jasmine) Oil.",
        descHi: "दीपक 1: शुद्ध देशी गाय का घी · दीपक 2: सरसों का तेल · दीपक 3: तिल या चमेली का तेल।"
      },
      {
        title: "11-Day Pre-Cleansing",
        titleHi: "11-दिवसीय पूर्व शुद्धि",
        desc: "Chanting Mahamrityunjaya Mantra with an oil lamp before starting the Akhand Jyot.",
        descHi: "अखंड दीप से पूर्व 11 दिनों तक तेल के दीपक के सामने महामृत्युंजय मंत्र का सस्वर/मानस जप।"
      },
      {
        title: "Trilok Nagri Access",
        titleHi: "त्रिलोक नगरी संरेखण",
        desc: "Opening energetic portals for ancestral resolution and Ishtdevta direct connection.",
        descHi: "पितरों की शांति, कुलदेवता की जागृति व इष्टदेव के मार्गदर्शन का प्रत्यक्ष प्रवाह।"
      },
      {
        title: "Unbroken Flame Protocol",
        titleHi: "अखंड दीप मर्यादा",
        desc: "Promptly relight if wind blows out; do not shift the position once initiated.",
        descHi: "दीपक का स्थान न बदलें, यदि ज्योति बुझ जाए तो तुरंत पुनः प्रज्वलित करें।"
      }
    ],
    dailySchedule: [
      {
        time: "06:00 AM (Day 1)",
        activity: "Lighting 3 Akhanda Diyas",
        activityHi: "प्रातः 6:00 बजे तीन दीप प्रज्वलन",
        details: "Clean altar space, ignite Ghee, Mustard, and Til diyas with prayer of surrender to Trilok Nagri.",
        detailsHi: "वेदी की शुद्धि, तीनों दीपों का एक साथ प्रज्वलन व कुलदेवी-देवता का स्मरण।"
      },
      {
        time: "All 3 Days (24 Hours)",
        activity: "Akhanda Flame Vigil & Japa",
        activityHi: "अखंड दीप दर्शन व शांति जप",
        details: "Regularly replenish oil/ghee. Maintain quiet sattvic atmosphere in the home.",
        detailsHi: "तेल व घी की नियमित आपूर्ति। घर में शांति, पवित्रता व सत्संग का वातावरण।"
      }
    ],
    guidelines: {
      en: [
        "Start all 3 diyas sharp at 6:00 AM on the first day.",
        "Do not move the position of the diyas once established.",
        "If a diya goes off, immediately relight it with reverence.",
        "Exemptions: Sisters during monthly cycles or those undergoing unavoidable long travel."
      ],
      hi: [
        "प्रथम दिन प्रातः ठीक 6:00 बजे तीनों दीप प्रज्वलित करें।",
        "एक बार स्थापित होने के बाद दीपकों का स्थान कदापि न बदलें।",
        "यदि दीपक बुझ जाए तो बिना घबराए तुरंत दोबारा जला दें।",
        "मासिक धर्म के समय बहनें इस साधना को स्थगित रखें।"
      ]
    },
    benefits: {
      en: [
        "Immediate stabilization of Pitrs (ancestors) and eradication of Pitra dosha",
        "Strengthened communion with your family Kuldevi and Kuldevta",
        "Activation of past-life satvik sadhanas and karmic merit",
        "Opening of direct communication channel with Trilok Nagri"
      ],
      hi: [
        "पितृ दोष का निवारण और पूर्वजों की दिव्य तृप्ति व आशीर्वाद",
        "कुलदेवी व कुलदेवता के साथ प्रत्यक्ष ऊर्जा संबंध की स्थापना",
        "पूर्व जन्मों में की गई तपस्या व साधना के फलों की जागृति",
        "त्रिलोक नगरी के सूक्ष्म आध्यात्मिक मंडल से सीधा संपर्क"
      ]
    }
  },
  {
    id: "diwali-sadhana-week",
    slug: "diwali-sadhana-week",
    title: "Diwali Sadhana Week & Mahalakshmi Havan",
    titleHi: "दीपावली साधना सप्ताह व महालक्ष्मी हवन",
    deity: "Goddess Mahalakshmi & Lord Ganesha",
    deityHi: "माता महालक्ष्मी व श्री गणेश जी",
    durationDays: 7,
    durationLabel: "5–7 Days (Diwali Week)",
    durationLabelHi: "5–7 दिवसीय दीपोत्सव अनुष्ठान",
    startDate: "Dhanteras to Bhai Dooj (Diwali Week)",
    startDateHi: "धनतेरस से भाई दूज (दीपावली सप्ताह)",
    tag: "Abundance & Havan",
    tagHi: "लक्ष्मी ऐश्वर्य",
    badge: "Kamal Gatta Havan · Labh Muhurat",
    badgeHi: "कमल गट्टा हवन · लाभ मुहूर्त",
    accentColor: "#B08438",
    badgeBg: "rgba(176, 132, 56, 0.15)",
    bgGradient: "linear-gradient(135deg, #33200A 0%, #1A0F03 100%)",
    summary: "Four sacred pathways for Diwali week: 1) Mahalakshmi Havan with Kamal Gatte (equal quantity to Havan Samagri) during Labh Muhurat, 2) Navarna Mantra (11,000 / 21,000 Jaap) for Siddhi sadhaks, 3) Ganesha Havan for obstacle removal, and 4) Surah Fatiha/Ikhlas for Islamic seekers.",
    summaryHi: "दीपावली सप्ताह के 4 पावन मार्ग: 1) लाभ मुहूर्त में कमल गट्टे (हवन सामग्री के बराबर मात्रा) से महालक्ष्मी हवन, 2) सिद्धि साधकों के लिए 11,000 / 21,000 नवार्ण मंत्र जप, 3) विघ्न विनाशक श्री गणेश हवन, तथा 4) सूरा फातिहा व इखलास पाठ।",
    mantra: "Om Mahālakṣmyai Namo Namaḥ · Om Viṣṇupriyāyai Namo Namaḥ · Om Dhanapradāyai Namo Namaḥ · Om Viśvajananyai Namo Namaḥ",
    mantraDevanagari: "ॐ महालक्ष्म्यै नमो नमः ।\nॐ विष्णुप्रियायै नमो नमः ।\nॐ धनप्रदायै नमो नमः ।\nॐ विश्वजनन्यै नमो नमः ॥",
    mantraMeaning: "Four salutations to Mahalakshmi: the Supreme Goddess of Fortune, the Beloved of Lord Vishnu, the Bestower of Abundance, and the Mother of the Universe.",
    mantraMeaningHi: "महालक्ष्मी, विष्णुप्रिया, धनप्रदा और विश्वजननी माँ भगवती लक्ष्मी को कोटिशः प्रणाम, जो सात्विक धन, ऐश्वर्य और मुक्ति प्रदान करती हैं।",
    featured: false,
    category: "remedies",
    categoryHi: "उपाय व अनुष्ठान",
    meetingTime: "Labh Muhurat (Morning / Pradosh Kaal)",
    meetingTimeHi: "लाभ मुहूर्त (प्रातः / प्रदोष काल)",
    meetLink: "https://meet.google.com/odv-evnd-mfy",
    dailyCommitment: "45–60 mins daily during Diwali week",
    dailyCommitmentHi: "45–60 मिनट प्रतिदिन",
    overview: "Diwali is the supreme window for wealth and spiritual prosperity. Rule for Mahalakshmi Havan: Use equal weight of Kamal Gatte (lotus seeds) as your Havan Samagri (e.g. 1 kg Samagri = 1 kg Kamal Gatta). For idol placement: only install permanent idols if you can maintain daily lighting and offerings after Diwali; otherwise worship with sacred yantra or picture.",
    overviewHi: "दीपावली सप्ताह सात्विक समृद्धि और शक्ति जागरण का सर्वश्रेष्ठ समय है। महालक्ष्मी हवन का मुख्य नियम: हवन सामग्री के बराबर वजन में कमल गट्टे मिलाएं (जैसे 1 किग्रा सामग्री तो 1 किग्रा कमल गट्टा)। यदि दीवाली के बाद नित्य पूजा संभव न हो तो मूर्ति के स्थान पर चित्र या यंत्र का पूजन करें।",
    pillars: [
      {
        title: "Kamal Gatte Mahalakshmi Havan",
        titleHi: "कमल गट्टा महालक्ष्मी हवन",
        desc: "Equal quantity of Kamal Gatte mixed with Havan Samagri offered during Labh Muhurat.",
        descHi: "लाभ मुहूर्त में हवन सामग्री के समतुल्य कमल गट्टे मिलाकर महालक्ष्मी मंत्रों से आहुतियां।"
      },
      {
        title: "Navarna Siddhi Sankalp",
        titleHi: "11,000 / 21,000 नवार्ण जप",
        desc: "Intensive 11k or 21k Navarna mantra jaap across Diwali week with formal Sankalp.",
        descHi: "दीपावली सप्ताह में 11,000 या 21,000 नवार्ण मंत्र जप का संकल्प।"
      },
      {
        title: "Ganesha Blockage Clearing",
        titleHi: "विघ्नहर्ता गणेश हवन",
        desc: "Ganesha mantra havan using 'Om Gam Gaam Gaum Ganapataye Namaha' for removing financial barriers.",
        descHi: "'ॐ गं गां गौं गणपतये नमः' से गणेश हवन द्वारा आर्थिक व कार्यक्षेत्र की रुकावटों का अंत।"
      }
    ],
    dailySchedule: [
      {
        time: "Labh Muhurat (Diwali Night)",
        activity: "Mahalakshmi Kamal Gatte Havan",
        activityHi: "महालक्ष्मी कमल गट्टा हवन",
        details: "Ignite mango wood havan fire, offer 108 offerings of Kamal Gatta mixture with Mahalakshmi mantra.",
        detailsHi: "आम की लकड़ी से हवन कुंड प्रज्वलित कर 108 बार कमल गट्टा सामग्री की आहुतियां समर्पित करें।"
      }
    ],
    guidelines: {
      en: [
        "Ensure equal quantity of Kamal Gatta as your Havan Samagri (1:1 ratio).",
        "Perform havan strictly during Labh Muhurat or auspicious Choghadiya.",
        "If you cannot maintain daily rituals year-round, avoid installing new metal/stone idols; use sacred pictures/yantras."
      ],
      hi: [
        "हवन सामग्री और कमल गट्टे का अनुपात अनिवार्य रूप से 1:1 रखें।",
        "हवन शुभ लाभ मुहूर्त या प्रदोष काल में ही संपन्न करें।",
        "नित्य सेवा संभव न हो तो नई मूर्तियों की प्राण-प्रतिष्ठा के स्थान पर चित्र का पूजन करें।"
      ]
    },
    benefits: {
      en: [
        "Unlocking blocked financial channels and business cashflow",
        "Inviting permanent Mahalakshmi and Narayana grace into the household",
        "Destruction of poverty mindset and debts",
        "Harmonious celebration filled with spiritual light"
      ],
      hi: [
        "अवरुद्ध धन, व्यापार व आजीविका के नए द्वारों का खुलना",
        "घर में महालक्ष्मी और नारायण की स्थायी सात्विक कृपा",
        "ऋण, दरिद्रता और मानसिक अभाव से मुक्ति",
        "परिवार में ऐश्वर्य, सुख और आध्यात्मिक प्रकाश का विस्तार"
      ]
    }
  },
  {
    id: "durga-maa-sadhana-33-days",
    slug: "durga-maa-sadhana-33-days",
    title: "33-Day Durga Mata Sadhana",
    titleHi: "33-दिवसीय माँ दुर्गा साधना",
    deity: "Maa Durga",
    deityHi: "माँ दुर्गा",
    durationDays: 33,
    durationLabel: "33 Days Sadhana (Starts 18 June)",
    durationLabelHi: "33 दिवसीय साधना (प्रारंभ: 18 जून)",
    startDate: "Starts 18 June",
    startDateHi: "प्रारंभ: 18 जून",
    tag: "Durga Shakti",
    tagHi: "दुर्गा शक्ति",
    badge: "33 Days · 1000 Jaap / 3 Hrs Daily",
    badgeHi: "33 दिन · 1000 जप / 3 घंटे नित्य",
    accentColor: "#A24628",
    badgeBg: "rgba(162, 70, 40, 0.15)",
    bgGradient: "linear-gradient(135deg, #38150D 0%, #200905 100%)",
    summary: "For seekers who have completed Vishnu Bhagwan Mantra Sadhana (or any sincere practitioner). 33 days starting 18 June with minimum 1000 Jaap daily or 3 hours sadhana, featuring the 3-Day Diya (Ghee, Sarso, Til) & Bakhoor process (18–20 June) and the 70% Whispering + 30% Mansik Jaap rule.",
    summaryHi: "भगवान विष्णु मंत्र साधना पूर्ण कर चुके साधकों हेतु (अथवा नियमबद्ध अभ्यास करने वाले किसी भी साधक हेतु)। 18 जून से 33 दिवसीय साधना। प्रतिदिन न्यूनतम 1000 जप अथवा 3 घंटे साधना, 18-20 जून तक 3 दीपक (घी, सरसों, तिल) व बखूर विधान तथा 70% फुसफुसाहट + 30% मानसिक जप का नियम।",
    mantra: "Om Dum Durgāyai Namaḥ · (For Muslims: Allāhu Akbar)",
    mantraDevanagari: "ॐ दुं दुर्गायै नमः ॥\n(For Muslims: Allah Hu Akbar / الله أكبر)",
    mantraMeaning: "Salutations to Supreme Mother Durga, the destroyer of all obstacles, hardships, and negative forces. (For Muslims: Allah is the Greatest).",
    mantraMeaningHi: "समस्त दुर्गति, कष्ट और भय का नाश करने वाली माँ दुर्गा को नमस्कार। (मुस्लिम साधकों हेतु: अल्लाह सबसे महान है)।",
    featured: true,
    category: "devi",
    categoryHi: "देवी साधना",
    meetingTime: "Daily Flexible / Sandhya Kaal (Min 1000 Jaap or 3 Hours)",
    meetingTimeHi: "दैनिक (न्यूनतम 1000 जप अथवा 3 घंटे)",
    meetLink: "https://meet.google.com/odv-evnd-mfy",
    dailyCommitment: "Minimum 1000 Jaap OR Minimum 3 Hours Sadhana Daily",
    dailyCommitmentHi: "प्रतिदिन न्यूनतम 1000 जप अथवा 3 घंटे साधना",
    overview: "Starting 18 June for 33 unbroken days. For seekers who have completed Vishnu Bhagwan Mantra Sadhana (and open to anyone practicing with precision). Includes a sacred 3-Day Diya & Bakhoor process (18, 19, 20 June) using Cow Ghee, Mustard Oil (Sarso), and Sesame Oil (Til) diyas. Use Bakhoor (Rooh Al Oudh, Sufi Arwah, or Rooh Gulab; or Agarbatti). Follow the 70% Whispering Jaap + 30% Mansik Jaap rule (e.g. 700 whispering and 300 mental per 1000 jaap; or ~42 mins whispering + ~18 mins mental per hour). Focus on genuine connection with Maa Durga rather than mechanical counting.",
    overviewHi: "18 जून से प्रारंभ होने वाली 33 दिवसीय माँ दुर्गा साधना। 18, 19 और 20 जून को 3-दीपक (देशी गाय का घी, सरसों का तेल, तिल का तेल) एवं बखूर (रूह अल ऊद, सूफी अरवाह, रूह गुलाब अथवा अगरबत्ती) का विधान। 70% फुसफुसाकर जप + 30% मानसिक जप का नियम। नियमों का शुद्धता से पालन कर कोई भी साधक यह साधना कर सकता है।",
    pillars: [
      {
        title: "3-Day Diya Process (18–20 June)",
        titleHi: "3-दिवसीय दीपक विधान (18-20 जून)",
        desc: "Diya 1 (Cow Ghee), Diya 2 (Mustard Oil), Diya 3 (Sesame/Til Oil) maintained during the first 3 days.",
        descHi: "दीपक 1 (गाय का घी), दीपक 2 (सरसों का तेल), दीपक 3 (तिल का तेल) प्रथम तीन दिनों तक प्रज्वलित रखें।"
      },
      {
        title: "70% Whispering + 30% Mansik Jaap",
        titleHi: "70% उपांशु + 30% मानस जप",
        desc: "70% soft whispering with lip movement + 30% silent mental chanting without sound (e.g. 700 whispering + 300 mental).",
        descHi: "70% मंद स्वर में होठ हिलाकर फुसफुसाहट जप तथा 30% बिना आवाज व बिना होठ हिलाए शांत मानस जप।"
      },
      {
        title: "Bakhoor & Sacred Fragrance",
        titleHi: "बखूर व पवित्र सुगंध",
        desc: "Use Rooh Al Oudh, Sufi Arwah, or Rooh Gulab during 3-day window; use Agarbatti if unavailable.",
        descHi: "शुभ समय में रूह अल ऊद, सूफी अरवाह अथवा रूह गुलाब बखूर का प्रयोग करें (अनुपलब्ध होने पर अगरबत्ती)।"
      },
      {
        title: "Connection Over Counting",
        titleHi: "भाव व आंतरिक संबंध",
        desc: "Focus on heartfelt surrender and connection to Maa Durga. The more time spent in mantra, the deeper the experience.",
        descHi: "गिनती से अधिक माँ दुर्गा के साथ हृदय के जुड़ाव पर ध्यान केंद्रित करें। जितना अधिक समय जप में बीतेगा, उतनी गहरी अनुभूति होगी।"
      }
    ],
    dailySchedule: [
      {
        time: "Morning / Evening (Min 1000 Jaap / 3 Hours)",
        activity: "Durga Mantra Japa (70/30 Method)",
        activityHi: "दुर्गा मंत्र जप (70/30 विधान)",
        details: "Complete minimum 1000 reps (700 whispering + 300 mental) or minimum 3 hours sadhana daily.",
        detailsHi: "प्रतिदिन न्यूनतम 1000 जप (700 उपांशु + 300 मानस) अथवा न्यूनतम 3 घंटे साधना पूर्ण करें।"
      }
    ],
    guidelines: {
      en: [
        "Minimum: 1000 Jaap Daily OR Minimum: 3 Hours Sadhana Daily.",
        "Follow 70% Whispering Jaap + 30% Mansik Jaap (e.g., in 1000 Jaap: 700 Whispering, 300 Mansik).",
        "3-Day Diya & Bakhoor Process on 18–19–20 June: Diya 1 (Cow Ghee), Diya 2 (Mustard), Diya 3 (Sesame).",
        "Preferred Bakhoor: Rooh Al Oudh, Sufi Arwah, Rooh Gulab (or Agarbatti if unavailable).",
        "Who can skip 3-Day Diya/Bakhoor: Travelling seekers, health issues, sisters during monthly cycle (continue mantra jaap).",
        "Avoid unnecessary arguments, negativity, and spiritual experimentation during these 33 days."
      ],
      hi: [
        "प्रतिदिन न्यूनतम: 1000 जप अथवा न्यूनतम: 3 घंटे साधना।",
        "70% उपांशु (फुसफुसाहट) जप + 30% मानसिक जप का कड़ाई से पालन करें (जैसे 1000 में से 700 उपांशु, 300 मानस)।",
        "18, 19, 20 जून को 3 दीपक (गाय का घी, सरसों का तेल, तिल का तेल) व बखूर का विधान करें।",
        "बखूर सुगंध: रूह अल ऊद, सूफी अरवाह, रूह गुलाब (उपलब्ध न होने पर अगरबत्ती)।",
        "यात्रा, अस्वस्थता अथवा मासिक धर्म के समय बहनें 3-दिवसीय दीप/बखूर प्रक्रिया छोड़ सकती हैं और मंत्र जप जारी रख सकती हैं।",
        "33 दिनों के दौरान अनावश्यक विवाद, नकारात्मकता व नए प्रयोगों से बचें।"
      ]
    },
    benefits: {
      en: [
        "Direct connection and fierce protective grace of Maa Durga",
        "Permanent destruction of fear, chronic obstacles, and psychic heaviness",
        "Deep mental grounding and awakening of dormant Shakti",
        "Lion-hearted confidence, spiritual elevation, and boundless peace"
      ],
      hi: [
        "माँ दुर्गा की साक्षात रक्षा व अमोघ कृपा की प्राप्ति",
        "समस्त भय, पुरानी रुकावटों और नकारात्मक ऊर्जा का समूल नाश",
        "मानसिक स्थिरता और आंतरिक शक्ति का तीव्र जागरण",
        "अदम्य साहस, आत्म-विश्वास और परम शांति की अनुभूति"
      ]
    }
  },
  {
    id: "21-day-sankalp-sadhana",
    slug: "21-day-sankalp-sadhana",
    title: "21-Day Vishnu Bhagwan Sankalp Sadhana",
    titleHi: "21-दिवसीय श्री विष्णु संकल्प साधना (मंगलवार प्रारंभ)",
    deity: "Lord Vishnu (Bhagwan Vishnu / Sri Narayana)",
    deityHi: "भगवान श्री विष्णु (श्री नारायण / वासुदेव)",
    durationDays: 21,
    durationLabel: "21 Days Sankalp (Starts on Tuesday)",
    durationLabelHi: "21 दिवसीय संकल्प (मंगलवार प्रारंभ)",
    startDate: "Starts Any Auspicious Tuesday",
    startDateHi: "प्रत्येक शुभ मंगलवार प्रारंभ",
    tag: "Vishnu Sadhana",
    tagHi: "विष्णु साधना",
    badge: "21 Days · 1000 Jaap / 3 Hrs · Vishnu Mantras",
    badgeHi: "21 दिन · 1000 जप / 3 घंटे · विष्णु मंत्र",
    accentColor: "#C8821C",
    badgeBg: "rgba(200, 130, 28, 0.15)",
    bgGradient: "linear-gradient(135deg, #2E1508 0%, #140803 100%)",
    summary: "21-day intensive Sankalp sadhana dedicated to Lord Vishnu, starting on Tuesday. Practice the sacred Mahamantras 'Om Namo Bhagavate Vasudevaya' and 'Om Namo Narayanaya' with minimum 1000 jaap or 3 hours daily (70% Whispering + 30% Mansik Jaap), continuous Agarbatti, special oil diya, and Thu–Fri–Sat Bakhoor for divine siddhi and cosmic peace.",
    summaryHi: "भगवान विष्णु को समर्पित 21 दिवसीय गहन संकल्प साधना (मंगलवार प्रारंभ)। 'ॐ नमो भगवते वासुदेवाय' व 'ॐ नमो नारायणाय' महामंत्र का प्रतिदिन न्यूनतम 1000 जप या 3 घंटे साधना (70% उपांशु + 30% मानस जप), निरंतर अगरबत्ती, विशेष तेल दीपक व गुरु-शुक्र-शनि बखूर विधान द्वारा परम सिद्धि व शांति की प्राप्ति।",
    mantra: "Om Namo Bhagavate Vasudevaya · Om Namo Narayanaya",
    mantraDevanagari: "ॐ नमो भगवते वासुदेवाय ॥\nॐ नमो नारायणाय ॥",
    mantraMeaning: "Salutations to Lord Vasudeva and Lord Narayana, the supreme preservers of the cosmos, dispelling all suffering, bestowing divine protection, siddhi, peace, and spiritual liberation.",
    mantraMeaningHi: "परमपिता भगवान वासुदेव एवं श्री नारायण को कोटि-कोटि नमन, जो समस्त जगत के पालनकर्ता हैं तथा सिद्धि, सात्विक शांति, दिव्य सुरक्षा एवं मोक्ष प्रदान करते हैं।",
    featured: true,
    category: "core",
    categoryHi: "महासाधना",
    meetingTime: "Daily Flexible / Evening (Min 1000 Jaap or 3 Hours)",
    meetingTimeHi: "दैनिक (न्यूनतम 1000 जप अथवा 3 घंटे)",
    meetLink: "https://meet.google.com/odv-evnd-mfy",
    dailyCommitment: "Minimum 1000 Jaap OR Minimum 3 Hours Sadhana Daily",
    dailyCommitmentHi: "प्रतिदिन न्यूनतम 1000 जप अथवा 3 घंटे साधना",
    overview: "Starting on an auspicious Tuesday, this 21-day Sankalp sadhana is dedicated to Lord Vishnu. Practice the supreme mantras 'Om Namo Bhagavate Vasudevaya' and 'Om Namo Narayanaya' for spiritual breakthrough, inner peace, and divine siddhi. Practice 70% Whispering Jaap + 30% Mansik Jaap (e.g. in 1 hour: ~42 mins whispering + ~18 mins mental). Burn Agarbatti continuously and light Oil Diya with special oil mixture. On Thursday, Friday, and Saturday use Rooh Al Oudh, Sufi Arwah, or Rooh Gulab before, during, and after sadhana.",
    overviewHi: "शुभ मंगलवार से प्रारंभ होने वाला 21 दिवसीय श्री विष्णु संकल्प अनुष्ठान। 'ॐ नमो भगवते वासुदेवाय' तथा 'ॐ नमो नारायणाय' महामंत्र द्वारा सिद्धि, सात्विक संतुलन व आध्यात्मिक जागृति की प्राप्ति। 70% उपांशु जप + 30% मानस जप का नियम (1 घंटे में ~42 मिनट उपांशु + ~18 मिनट मानस)। अगरबत्ती निरंतर प्रज्वलित रखें तथा गुरु, शुक्र और शनिवार को विशेष बखूर (रूह अल ऊद, सूफी अरवाह, रूह गुलाब) का उपयोग करें।",
    pillars: [
      {
        title: "Lord Vishnu Mahamantras",
        titleHi: "श्री विष्णु महामंत्र",
        desc: "Sacred chanting of 'Om Namo Bhagavate Vasudevaya' and 'Om Namo Narayanaya' for divine siddhi and liberation.",
        descHi: "'ॐ नमो भगवते वासुदेवाय' व 'ॐ नमो नारायणाय' महामंत्र का श्रद्धापूर्वक जप।"
      },
      {
        title: "70% Whispering + 30% Mansik Jaap",
        titleHi: "70% उपांशु + 30% मानस जप",
        desc: "Minimum 1000 Jaap OR minimum 3 hours daily. In 1 hour: ~42 mins whispering + ~18 mins silent mental chanting.",
        descHi: "प्रतिदिन न्यूनतम 1000 जप अथवा 3 घंटे साधना। 1 घंटे में लगभग 42 मिनट उपांशु जप तथा 18 मिनट मानस जप।"
      },
      {
        title: "Continuous Agarbatti & Oil Diya",
        titleHi: "निरंतर अगरबत्ती व तेल दीपक",
        desc: "Keep Agarbatti burning continuously and light Oil Diya during Shubh Muhurat (family members may light if away).",
        descHi: "साधना काल में अगरबत्ती निरंतर जलती रहे और शुभ मुहूर्त में विशेष तेल दीपक प्रज्वलित करें।"
      },
      {
        title: "Thu–Fri–Sat Bakhoor Fragrance",
        titleHi: "गुरु-शुक्र-शनि बखूर विधान",
        desc: "Use Rooh Al Oudh, Sufi Arwah, or Rooh Gulab before, during, and after sadhana as guided.",
        descHi: "गुरुवार, शुक्रवार व शनिवार को साधना से पूर्व, दौरान व पश्चात रूह अल ऊद, सूफी अरवाह या रूह गुलाब का प्रयोग करें।"
      }
    ],
    dailySchedule: [
      {
        time: "Morning / Evening (Min 1000 Jaap / 3 Hours)",
        activity: "21-Day Vishnu Sankalp Japa & Dhyana",
        activityHi: "21-दिवसीय विष्णु संकल्प जप व ध्यान",
        details: "Light oil diya & agarbatti, complete 70% whispering + 30% mental jaap with high devotion.",
        detailsHi: "दीपक व अगरबत्ती जलाकर 70% उपांशु व 30% मानस जप पूर्ण करें।"
      }
    ],
    guidelines: {
      en: [
        "Daily Practice: Minimum 1000 Jaap OR Minimum 3 Hours Sadhana Daily of Lord Vishnu's mantras (Om Namo Bhagavate Vasudevaya & Om Namo Narayanaya).",
        "Follow 70% Whispering Jaap + 30% Mansik Jaap formula (e.g. 1 hour: ~42 min whispering + ~18 min mental).",
        "Burn Agarbatti continuously and light Oil Diya using special oil mixture. Family members may light diya in Shubh Muhurat if away, but avoid Bakhoor in your absence.",
        "Thursday–Friday–Saturday preferred fragrance: Rooh Al Oudh, Sufi Arwah, or Rooh Gulab (or Agarbatti).",
        "EXCLUSIONS: Those who have completed Trilok Nagri Sadhana, are currently practicing it, or doing Mahalakshmi Sadhana should avoid this mantra process.",
        "Members with travel, health issues, or monthly cycle may respectfully skip this process.",
        "Devote yourself with precision, pure sattvic intent, and sincere surrender for profound spiritual fruits."
      ],
      hi: [
        "दैनिक नियम: प्रतिदिन न्यूनतम 1000 जप अथवा न्यूनतम 3 घंटे श्री विष्णु मंत्र (ॐ नमो भगवते वासुदेवाय व ॐ नमो नारायणाय) की साधना।",
        "70% उपांशु जप + 30% मानस जप का नियम (जैसे 1 घंटे में ~42 मिनट उपांशु + ~18 मिनट मानस)।",
        "अगरबत्ती निरंतर जलती रहे और शुभ मुहूर्त में विशेष तेल दीपक जलाएं (अनुपस्थिति में परिवारजन केवल दीया जला सकते हैं, बखूर न जलाएं)।",
        "गुरुवार, शुक्रवार व शनिवार को बखूर: रूह अल ऊद, सूफी अरवाह अथवा रूह गुलाब का उपयोग करें।",
        "वर्जित: जो साधक त्रिलोक नगरी साधना कर चुके हैं, कर रहे हैं, या महालक्ष्मी साधना कर रहे हैं, वे इस साधना को न करें।",
        "यात्रा, स्वास्थ्य समस्या अथवा मासिक धर्म के समय साधक इस प्रक्रिया को स्थगित रख सकते हैं।",
        "पूर्ण निष्ठा और समर्पण भाव से नियमों का पालन करें।"
      ]
    },
    benefits: {
      en: [
        "Attainment of Lord Vishnu's supreme grace, siddhi, and energetic protection",
        "Complete removal of karmic burdens, planetary afflictions, and inner unrest",
        "Deep mental tranquility, heightened spiritual consciousness, and sattvic clarity",
        "Cosmic balance, spiritual liberation, and unshakeable inner grounding"
      ],
      hi: [
        "भगवान श्री विष्णु की असीम कृपा, मंत्र सिद्धि और दिव्य सुरक्षा की प्राप्ति",
        "समस्त कर्म बाधाओं, ग्रह दोषों और मानसिक अशांति का पूर्ण निवारण",
        "परम शांति, सात्विक तेज और आध्यात्मिक चेतना का तीव्र विस्तार",
        "जीवन में सात्विक संतुलन, अभय और आत्म-साक्षात्कार का मार्ग प्रशस्त"
      ]
    }
  },
  {
    id: "silver-diya-remedy-sadhana",
    slug: "silver-diya-remedy-sadhana",
    title: "Silver Diya Remedy — Business, Wealth & Ancestral Healing",
    titleHi: "चांदी का दीपक उपाय — व्यापार, धन व पितृ शांति",
    deity: "Source Deity, Kuldevi-Devta & Grah Devtas",
    deityHi: "इष्टदेव, कुलदेवी-देवता व ग्रह देवगण",
    durationDays: 21,
    durationLabel: "21–41 Days (1–3 Hours Daily)",
    durationLabelHi: "21–41 दिवसीय नित्य दीप साधना",
    startDate: "Auspicious Shubh Muhurat",
    startDateHi: "शुभ मुहूर्त / शुक्ल पक्ष",
    tag: "Wealth & Prosperity",
    tagHi: "धन व व्यापार उपाय",
    badge: "2 Pure Silver Diyas (Ghee + White Oil)",
    badgeHi: "2 शुद्ध चांदी के दीपक (घी + सफेद तेल)",
    accentColor: "#9A7B38",
    badgeBg: "rgba(154, 123, 56, 0.15)",
    bgGradient: "linear-gradient(135deg, #2B261F 0%, #15120D 100%)",
    summary: "A powerful material & spiritual support practice using 2 PURE Silver Diyas (1 with Cow Ghee, 1 with White Oil like Til/Coconut/Almond), 1 Silver bowl with clean water, camphor/attar fragrance, and one deity photo. Lit for 1–3 hours daily.",
    summaryHi: "व्यापार, धन, पारिवारिक स्थिरता, कुलदेवी-देवता व पितृ शांति हेतु शक्तिशाली उपाय। 2 शुद्ध चांदी के दीपक (1 गाय के घी का, 1 सफेद तेल का) तथा 1 चांदी की कटोरी में जल रखकर 1 से 3 घंटे नित्य प्रज्वलन।",
    mantra: "Your Ishtdevta Mantra · Source Mantra · Gayatri Mahamantra",
    mantraDevanagari: "ॐ भूर्भुवः स्वः तत्सवितुर्वरेण्यं भर्गो देवस्य धीमहि धियो यो नः प्रचोदयात् ॥\nॐ श्रीं महालक्ष्म्यै नमः ॥",
    mantraMeaning: "Chanted during the 1-3 hours of Silver Diya burning to clear planetary weakness, financial stagnations, and ancestral disturbances.",
    mantraMeaningHi: "चांदी के दीपकों के प्रकाश में इष्ट मंत्र अथवा गायत्री मंत्र का जप करने से आर्थिक रुकावटें समाप्त होती हैं और सकारात्मक ऊर्जा का संचार होता है।",
    featured: false,
    category: "remedies",
    categoryHi: "उपाय व अनुष्ठान",
    meetingTime: "1 to 3 Hours Daily in Shubh Muhurat",
    meetingTimeHi: "प्रतिदिन 1 से 3 घंटे (शुभ मुहूर्त)",
    meetLink: "https://meet.google.com/odv-evnd-mfy",
    dailyCommitment: "1 to 3 hours daily",
    dailyCommitmentHi: "प्रतिदिन 1 से 3 घंटे",
    overview: "Critical Rule: Must use PURE Silver Diyas (no alternative metals). Clean the diyas daily before lighting. Keeps the material layer around your energy field strong so opportunities, financial resources, client flow, and prosperity can resume flowing unhindered.",
    overviewHi: "महत्वपूर्ण नियम: केवल शुद्ध चांदी के दीपकों का ही प्रयोग करें। प्रतिदिन दीपकों को स्वच्छ करके ही प्रज्वलित करें। यह उपाय आपकी साधना को भौतिक सुरक्षा प्रदान करता है जिससे व्यापार, ग्राहक व धन का प्रवाह पुनः सुगम हो जाता है।",
    pillars: [
      {
        title: "2 Pure Silver Diyas",
        titleHi: "दो शुद्ध चांदी के दीपक",
        desc: "Diya 1: Pure Cow Ghee · Diya 2: White Oil (Til, Coconut, or Almond Oil).",
        descHi: "दीपक 1: शुद्ध गाय का घी · दीपक 2: सफेद तेल (तिल, नारियल या बादाम का तेल)।"
      },
      {
        title: "Silver Water Bowl & Attar",
        titleHi: "चांदी की कटोरी में जल व इत्र",
        desc: "1 Silver bowl of water alongside camphor or attar fragrance spread around altar.",
        descHi: "एक चांदी की कटोरी में शुद्ध जल और आसपास कपूर/इत्र की सुगंध का वातावरण।"
      },
      {
        title: "Financial & Grah Dosha Clearing",
        titleHi: "ग्रह दोष व पितृ शांति",
        desc: "Clearing planetary weaknesses and soothing ancestral issues affecting money flow.",
        descHi: "धन और आजीविका को प्रभावित करने वाले ग्रह दोषों व पितृ असंतुलन का शमन।"
      }
    ],
    dailySchedule: [
      {
        time: "Morning / Evening (1–3 Hours)",
        activity: "Silver Diya Lighting & Japa",
        activityHi: "चांदी दीप प्रज्वलन व जप",
        details: "Clean silver diyas, light with cow ghee and white oil for 1-3 hours, recite regular Ishtdevta mantra.",
        detailsHi: "दीपकों को साफ कर घी व सफेद तेल से 1-3 घंटे जलाएं और शांत भाव से जप करें।"
      }
    ],
    guidelines: {
      en: [
        "Must be PURE Silver Diyas — if not silver, do not perform this remedy.",
        "Clean both diyas daily before lighting — strict purity is essential.",
        "Keep only the silver diyas, silver water bowl, and ONE photo of favourite deity on the altar.",
        "Best results if the person practicing Mantra Jaap or Dhyan lights them."
      ],
      hi: [
        "अनिवार्य नियम: दोनों दीपक शुद्ध चांदी के होने चाहिए।",
        "प्रतिदिन जलाने से पूर्व दीपकों को मांझकर स्वच्छ करें।",
        "वेदी पर केवल दो चांदी के दीपक, एक चांदी की कटोरी में जल और एक इष्ट चित्र ही रखें।",
        "जो साधक जप या ध्यान करता है, उसके द्वारा दीपक प्रज्वलित करना सर्वश्रेष्ठ है।"
      ]
    },
    benefits: {
      en: [
        "Rapid removal of financial bottlenecks and business stagnation",
        "Soothing ancestral disturbances and strengthening Kuldevi-Kuldevta bond",
        "Enhancement of cashflow, client stability, and household peace",
        "Energetic purification of house vibrations"
      ],
      hi: [
        "व्यापारिक रुकावटों, मंदी और आर्थिक तंगी का निवारण",
        "पितृ शांति व कुलदेवी-देवता के आशीर्वाद का प्रत्यक्ष अनुभव",
        "घर में धन, शांति और सकारात्मक ऊर्जा के नए स्रोतों का उदय",
        "वास्तु व गृह वातावरण का पूर्ण शुद्धिकरण"
      ]
    }
  },
  {
    id: "court-case-remedy-havan",
    slug: "court-case-remedy-havan",
    title: "Court Cases & Legal Dispute Upaya Havan",
    titleHi: "कोर्ट केस व विवाद मुक्ति — लौंग-इलायची हवन",
    deity: "Surya Deva & Ishtdevta",
    deityHi: "सूर्य देव व इष्टदेव",
    durationDays: 11,
    durationLabel: "11 Saturdays (or Single Intensive Havan)",
    durationLabelHi: "11 शनिवार (अथवा विशेष शनिवार हवन)",
    startDate: "Any Auspicious Saturday",
    startDateHi: "शुभ शनिवार",
    tag: "Legal Victory",
    tagHi: "विवाद निवारण",
    badge: "1.25kg Clove & Cardamom · 108 Offerings",
    badgeHi: "सवा किलो लौंग व इलायची · 108 आहुति",
    accentColor: "#87361D",
    badgeBg: "rgba(135, 54, 29, 0.15)",
    bgGradient: "linear-gradient(135deg, #2B110B 0%, #140502 100%)",
    summary: "Targeted Vedic remedy for resolving prolonged court cases, false allegations, and legal disputes. Mix equal parts of Clove (1.25 kg) and Cardamom (1.25 kg) with cow ghee and camphor in a Mango wood Havan Kund, offering 108 times with Gayatri / regular mantra.",
    summaryHi: "कोर्ट-कचहरी, मुकदमे और विवादों से मुक्ति का अचूक उपाय। सवा किलो लौंग और सवा किलो छोटी इलायची को देशी गाय के घी व कपूर में मिलाकर आम की लकड़ी पर 108 बार गायत्री अथवा इष्ट मंत्र से आहुतियां दें।",
    mantra: "Om Bhūr Bhuvaḥ Svaḥ Tat Savitur Vareṇyaṃ Bhargo Devasya Dhīmahi Dhiyo Yo Naḥ Pracodayāt",
    mantraDevanagari: "ॐ भूर्भुवः स्वः तत्सवितुर्वरेण्यं भर्गो देवस्य धीमहि धियो यो नः प्रचोदयात् ॥",
    mantraMeaning: "Gayatri Mantra is recited 108 times daily and with each havan offering to illuminate the truth and ensure victory in legal proceedings.",
    mantraMeaningHi: "गायत्री महामंत्र का 108 बार नित्य जप और हवन की प्रत्येक आहुति के साथ उच्चारण न्याय और सत्य की विजय सुनिश्चित करता है।",
    featured: false,
    category: "remedies",
    categoryHi: "उपाय व अनुष्ठान",
    meetingTime: "Saturday Morning / Sandhya Kaal",
    meetingTimeHi: "शनिवार प्रातः / संध्या काल",
    meetLink: "https://meet.google.com/odv-evnd-mfy",
    dailyCommitment: "108 daily Gayatri japa + Saturday Havan",
    dailyCommitmentHi: "दैनिक 108 गायत्री जप + शनिवार हवन",
    overview: "Set up the Havan Kund on a clean spot on Saturday. Mix equal quantities of clove and green cardamom with cow ghee and camphor. Offer 108 times into the sacred fire with each mantra repetition. After completion, disperse the sacred ash at the base of a Peepal tree. Supplementary: Donate whole cloves every Saturday for 11 consecutive Saturdays to relieve Rahu-Ketu doshas.",
    overviewHi: "शनिवार के दिन स्वच्छ स्थान पर आम की समिधा से हवन कुंड प्रज्वलित करें। बराबर मात्रा में लौंग व इलायची घी-कपूर में मिलाकर 108 आहुतियां दें। भस्म को पीपल के वृक्ष में समर्पित करें। साथ ही 11 शनिवार तक साबुत लौंग का दान करें।",
    pillars: [
      {
        title: "Clove & Cardamom Havan Samagri",
        titleHi: "सवा-सवा किलो लौंग व इलायची",
        desc: "Equal 1.25 kg Clove and 1.25 kg Cardamom combined with pure cow ghee and camphor.",
        descHi: "सवा किलो लौंग व सवा किलो इलायची को शुद्ध घी व कपूर के साथ मिश्रित करना।"
      },
      {
        title: "108 Gayatri Offerings",
        titleHi: "108 गायत्री मंत्र आहुति",
        desc: "Offering the mixture slowly into the sacred fire with each recitation of Gayatri Mantra.",
        descHi: "प्रत्येक गायत्री मंत्र पाठ के साथ हवन कुंड में पावन आहुति समर्पित करना।"
      },
      {
        title: "11 Saturday Clove Donations",
        titleHi: "11 शनिवार लौंग दान",
        desc: "Donating whole cloves for 11 consecutive Saturdays to pacify Rahu-Ketu and legal blockages.",
        descHi: "राहु-केतु शांति हेतु लगातार 11 शनिवार तक साबुत लौंग का दान करना।"
      }
    ],
    dailySchedule: [
      {
        time: "Saturday Morning (07:00 AM – 08:30 AM)",
        activity: "Clove-Cardamom Legal Remedy Havan",
        activityHi: "शनिवार लौंग-इलायची हवन",
        details: "Perform 108 offerings with Gayatri Mantra, collect ash, and disperse at base of Peepal tree.",
        detailsHi: "108 आहुतियां पूर्ण कर हवन की भस्म को पीपल वृक्ष की जड़ में अर्पित करें।"
      }
    ],
    guidelines: {
      en: [
        "Mix equal quantities of clove (Laung) and cardamom (Elaichi) — 1.25 kg each recommended.",
        "Perform the havan preferably on a Saturday morning in a peaceful state of mind.",
        "Disperse remaining sacred ash respectfully at the base of a Peepal tree.",
        "Recite 108 repetitions of Gayatri Mantra daily throughout the court case duration."
      ],
      hi: [
        "लौंग और इलायची की मात्रा बराबर (यथाशक्ति सवा-सवा किग्रा) रखें।",
        "हवन शनिवार के दिन शांत और संकल्पित मन से करें।",
        "हवन की पावन भस्म को पीपल के वृक्ष की जड़ में विसर्जित करें।",
        "केस चलने तक प्रतिदिन 108 बार गायत्री मंत्र का नियमपूर्वक जप करें।"
      ]
    },
    benefits: {
      en: [
        "Swift favorable resolution in protracted court cases and false disputes",
        "Pacification of Rahu and Ketu karmic afflictions",
        "Clearing of fear, anxiety, and heavy mental fatigue associated with legal battles",
        "Establishment of truth and divine justice"
      ],
      hi: [
        "लंबे समय से चल रहे मुकदमों व विवादों का शीघ्र न्यायपूर्ण समाधान",
        "राहु-केतु ग्रह दोषों व शत्रु बाधा का शमन",
        "मानसिक तनाव, भय और कोर्ट-कचहरी की चिंता से मुक्ति",
        "सत्य और न्याय की विजय"
      ]
    }
  }
];

export function getSadhanaBySlug(slug: string): SadhanaItem | undefined {
  return SADHANAS_DATA.find((s) => s.slug === slug || s.id === slug);
}
