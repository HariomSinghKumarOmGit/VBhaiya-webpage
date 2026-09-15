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
}

export const SADHANAS_DATA: SadhanaItem[] = [
  {
    id: "41-day-sadhana",
    slug: "41-day-sadhana",
    title: "41-Day Innerlight Mahasadhana",
    titleHi: "41-दिवसीय अंतर्प्रकाश महासाधना",
    deity: "Unified Divine Consciousness (Shiv-Shakti & Gayatri)",
    deityHi: "अखंड चेतना (शिव-शक्ति व गायत्री तत्व)",
    durationDays: 41,
    durationLabel: "41 Days Unbroken Cycle",
    durationLabelHi: "41 दिवसीय अखंड चक्र",
    startDate: "Starts 4th September",
    startDateHi: "प्रारंभ: 4 सितंबर",
    tag: "Core Intensive",
    tagHi: "महासाधना",
    badge: "Master Cycle · 41 Days",
    badgeHi: "महाचक्र · 41 दिन",
    accentColor: "#B8934A",
    badgeBg: "rgba(184, 147, 74, 0.15)",
    bgGradient: "linear-gradient(135deg, #2B2113 0%, #17130E 100%)",
    summary: "The foundational 41-day spiritual immersion. Rewire your prana, quieten the restless mind, and anchor your life in deep daily sadhana starting every 4th of September.",
    summaryHi: "41 दिनों का गहन आध्यात्मिक अनुष्ठान। 4 सितंबर से प्रारंभ होकर यह साधना आपके प्राण, मन और अंतरात्मा को पूर्ण मौन व आत्म-ज्ञान में प्रतिष्ठित करती है।",
    mantra: "Om Bhur Bhuvaḥ Svaḥ Tat Savitur Vareṇyaṃ Bhargo Devasya Dhīmahi Dhiyo Yo Naḥ Pracodayāt",
    mantraDevanagari: "ॐ भूर्भुवः स्वः तत्सवितुर्वरेण्यं भर्गो देवस्य धीमहि धियो यो नः प्रचोदयात् ॥",
    mantraMeaning: "May the supreme radiant divine light illuminate our intellect and dispel all inner darkness.",
    mantraMeaningHi: "उस प्राणस्वरूप, दुःखनाशक, सुखस्वरूप, श्रेष्ठ, तेजस्वी, पापनाशक, देवस्वरूप परमात्मा को हम अंतःकरण में धारण करें जो हमारी बुद्धि को सन्मार्ग पर प्रेरित करे।",
    featured: true,
    meetingTime: "8:00 PM – 9:00 PM IST (Daily Collective Sit)",
    meetingTimeHi: "शाम 8:00 – 9:00 बजे (दैनिक सामूहिक ध्यान)",
    meetLink: "https://meet.google.com/odv-evnd-mfy",
    dailyCommitment: "45–60 mins daily (Morning & Evening)",
    dailyCommitmentHi: "प्रतिदिन 45–60 मिनट (प्रातः व सायं)",
    overview: "In the Vedic tradition, a 41-day cycle constitutes one full 'Mandala Kalam' — the exact duration required to rewrite neural pathways, establish lasting sattva, and anchor prana in the higher chakras. Starting on September 4th, this journey brings daily guidance, mantra japa, breath purification, and live community sits.",
    overviewHi: "वैदिक परंपरा में 41 दिनों की अवधि को 'एक मंडल' कहा जाता है। यह वह समय है जिसमें मन के पुराने संस्कार समाप्त होते हैं और उच्च चेतना स्थापित होती है। 4 सितंबर से आरंभ होने वाली यह साधना आत्म-जागरण का सर्वोच्च माध्यम है।",
    pillars: [
      {
        title: "Brahmamuhurta Alignment",
        titleHi: "ब्रह्ममुहूर्त जागरण",
        desc: "Awakening at dawn to absorb the undisturbed cosmic silence and prana.",
        descHi: "सूर्योदय पूर्व शांत वातावरण में ध्यान और प्राण ऊर्जा का संचयन।"
      },
      {
        title: "Gayatri & Japa Yoga",
        titleHi: "गायत्री व जप योग",
        desc: "Purification of the subconscious through unbroken daily mantra repetition.",
        descHi: "मंत्र की पावन ध्वनि तरंगों से चित्त की एकाग्रता व संस्कारों की शुद्धि।"
      },
      {
        title: "Pranayama & Kriya",
        titleHi: "प्राणायाम व प्राण शुद्धि",
        desc: "Balancing Ida and Pingala nadis through rhythmic breath retention and awareness.",
        descHi: "इड़ा और पिंगला नाड़ियों का संतुलन व कुंडलिनी शक्ति का जागरण।"
      },
      {
        title: "Evening Google Meet Sit",
        titleHi: "सामूहिक संध्या साधना",
        desc: "Gathering at 8:00 PM IST with the global sangha for shared resonance and guidance.",
        descHi: "प्रतिदिन रात्रि 8 बजे संगति के साथ सामूहिक मौन और मार्गदर्शन।"
      }
    ],
    dailySchedule: [
      {
        time: "05:30 AM – 06:15 AM",
        activity: "Morning Sadhana & Pranayama",
        activityHi: "प्रातःकालीन ध्यान व प्राणायाम",
        details: "Nadi Shodhana, Surya Trataka, and 108 Repetitions of Gayatri Mantra.",
        detailsHi: "नाड़ी शोधन, त्राटक एवं 108 बार गायत्री मंत्र जप।"
      },
      {
        time: "12:30 PM",
        activity: "Midday Sattvic Mindfulness",
        activityHi: "मध्याह्न सात्विक चेतना",
        details: "3 minutes of silent gratitude and mindful eating.",
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
        activity: "Night Journaling & Reflection",
        activityHi: "रात्रि आत्म-चिंतन",
        details: "Noting inner shifts, dreams, and observing the mind's patterns.",
        detailsHi: "दिनभर के अनुभवों का अवलोकन और चित्त शुद्धि।"
      }
    ],
    guidelines: {
      en: [
        "Commit to 41 days without skipping a single day of practice.",
        "Maintain a pure, sattvic vegetarian diet devoid of tamasic foods.",
        "Spend at least 15 minutes in total silence before sleep.",
        "Join the 8:00 PM daily live sit on Google Meet whenever possible."
      ],
      hi: [
        "लगातार 41 दिनों तक बिना किसी नागे के साधना का संकल्प लें।",
        "शुद्ध, सात्विक एवं तामसिकता रहित आहार ग्रहण करें।",
        "रात्रि विश्राम से पूर्व 15 मिनट मौन का अभ्यास करें।",
        "प्रतिदिन रात्रि 8 बजे गूगल मीट पर सामूहिक ध्यान में जुड़ें।"
      ]
    },
    benefits: {
      en: [
        "Deep mental clarity and permanent freedom from anxiety patterns",
        "Heightened intuition and balanced nervous system",
        "Direct connection to the divine lineage and collective field",
        "Establishment of lifelong meditation mastery"
      ],
      hi: [
        "मानसिक अशांति और तनाव से पूर्ण मुक्ति",
        "अंतर्ज्ञान का विकास और एकाग्रता में वृद्धि",
        "साधना के प्रति दृढ़ निष्ठा और उच्च चेतना की प्राप्ति",
        "जीवन में स्थायी शांति और आत्म-संतोष"
      ]
    }
  },
  {
    id: "vishnu-bhagwan-sadhana",
    slug: "vishnu-bhagwan-sadhana-21-days",
    title: "Shree Vishnu Bhagwan Sadhana",
    titleHi: "श्री विष्णु भगवान साधना",
    deity: "Bhagwan Maha Vishnu & Mahalakshmi",
    deityHi: "भगवान महाविष्णु व माता महालक्ष्मी",
    durationDays: 21,
    durationLabel: "21-Day Divine Preservation",
    durationLabelHi: "21 दिवसीय श्री हरि कृपा चक्र",
    startDate: "Starts 4th September / Ekadashi Cycles",
    startDateHi: "प्रारंभ: 4 सितंबर / एकादशी",
    tag: "Preservation & Peace",
    tagHi: "शांति व समृद्धि",
    badge: "21 Days · Vishnu Sadhana",
    badgeHi: "21 दिन · विष्णु साधना",
    accentColor: "#1C4E5B",
    badgeBg: "rgba(28, 78, 91, 0.15)",
    bgGradient: "linear-gradient(135deg, #10333D 0%, #092027 100%)",
    summary: "21 days dedicated to Bhagwan Vishnu — the Sustainer of all existence. Cultivate inner peace, divine abundance, Lakshmi Narayan blessings, and supreme emotional balance.",
    summaryHi: "जगत के पालनहार भगवान श्री हरि विष्णु को समर्पित 21 दिवसीय साधना। चित्त की शांति, पारिवारिक सौहार्द, श्री महालक्ष्मी की कृपा और सात्विक समृद्धि की प्राप्ति।",
    mantra: "Om Namo Bhagavate Vasudevaya · Om Namo Narayanaya",
    mantraDevanagari: "ॐ नमो भगवते वासुदेवाय ॥ ॐ नमो नारायणाय ॥",
    mantraMeaning: "I bow to the Supreme Lord Vasudeva, the all-pervading divine consciousness dwelling in all hearts.",
    mantraMeaningHi: "सर्वव्यापी, समस्त जगत के आधार, परम दयालु भगवान वासुदेव-नारायण को मेरा कोटि-कोटि नमन।",
    featured: true,
    meetingTime: "Daily Morning Sit & Evening 8:00 PM Japa",
    meetingTimeHi: "दैनिक प्रातः ध्यान व सायं 8:00 बजे जप",
    meetLink: "https://meet.google.com/odv-evnd-mfy",
    dailyCommitment: "30–45 mins daily",
    dailyCommitmentHi: "प्रतिदिन 30–45 मिनट",
    overview: "Bhagwan Vishnu represents the cosmic principle of Harmony, Sustenance, and Compassion (Sattva Guna). This 21-day sadhana dissolves inner conflicts, anchors steady peace in home and heart, balances the Anahata (Heart) Chakra, and invites Mahalakshmi's unshakeable spiritual and material prosperity.",
    overviewHi: "भगवान विष्णु सृष्टि के संतुलन, पालन और परमानंद के प्रतीक हैं। 21 दिनों की यह साधना हृदय चक्र को जाग्रत करती है, मन से भय और हीनभावना को मिटाती है, तथा जीवन में शांति और दिव्यता का संचार करती है।",
    pillars: [
      {
        title: "Vasudeva Mantra Japa",
        titleHi: "वासुदेव महामंत्र जप",
        desc: "Chanting the sacred 12-syllable Dvadasakshari Mantra using a Tulsi mala.",
        descHi: "तुलसी की माला से 12 अक्षरी द्वादशाक्षर महामंत्र का श्रद्धापूर्वक जप।"
      },
      {
        title: "Anahata Heart Expansion",
        titleHi: "हृदय चक्र ध्यान",
        desc: "Meditation upon the golden light of Narayana in the cave of the spiritual heart.",
        descHi: "हृदय कमल में भगवान नारायण के शांत चतुर्भुज स्वरूप का ध्यान।"
      },
      {
        title: "Tulsi & Jal Arpan",
        titleHi: "तुलसी व जल अर्पण",
        desc: "Morning offering of clean water and Tulsi leaf with prayers of surrender.",
        descHi: "प्रातःकाल पवित्र जल व तुलसी दल अर्पण कर समर्पण भाव का अभ्यास।"
      },
      {
        title: "Sattvic Harmony (Maitri)",
        titleHi: "मैत्री व क्षमा भाव",
        desc: "Cultivating unconditional compassion, forgiveness, and selfless service.",
        descHi: "समस्त प्राणियों के प्रति करुणा, क्षमाशीलता और परोपकार की भावना।"
      }
    ],
    dailySchedule: [
      {
        time: "06:00 AM – 06:40 AM",
        activity: "Morning Vishnu Japa & Dhyana",
        activityHi: "प्रातः श्री हरि जप व ध्यान",
        details: "108 counts of 'Om Namo Bhagavate Vasudevaya' on Tulsi Mala + Heart Dhyana.",
        detailsHi: "तुलसी माला पर 108 बार वासुदेव मंत्र जप एवं ध्यान।"
      },
      {
        time: "12:00 PM",
        activity: "Satvik Diet & Gratitude",
        activityHi: "सात्विक आहार व भोग",
        details: "Offering meals with devotion and consuming with reverence.",
        detailsHi: "ईश्वर को नैवेद्य अर्पित कर सात्विक भोजन ग्रहण करना।"
      },
      {
        time: "08:00 PM – 08:45 PM",
        activity: "Evening Vishnu Sahasranama / Sangha Sit",
        activityHi: "संध्या विष्णु सहस्रनाम / सामूहिक ध्यान",
        details: "Listening to or chanting sacred stotras, accompanied by deep stillness.",
        detailsHi: "विष्णु सहस्रनाम या नारायण अष्टकम का श्रवण व ध्यान।"
      }
    ],
    guidelines: {
      en: [
        "Use a genuine Tulsi mala for mantra recitation.",
        "Keep thoughts calm, avoid anger, harsh speech, and gossip during the 21 days.",
        "Offer water (Jal Arpan) to Surya or Tulsi plant each morning.",
        "Observe light fasting or sattvic fruits on Ekadashi days."
      ],
      hi: [
        "मंत्र जप के लिए शुद्ध तुलसी की माला का उपयोग करें।",
        "21 दिनों तक वाणी में मधुरता रखें, क्रोध व निंदा से बचें।",
        "प्रतिदिन प्रातः तुलसी या सूर्य देव को तांबे के लोटे से जल अर्पित करें।",
        "एकादशी के दिन फलाहार या सात्विक उपवास रखें।"
      ]
    },
    benefits: {
      en: [
        "Unshakeable inner calmness and emotional resilience",
        "Harmony in relationships, family life, and workspace",
        "Protection from malefic planetary influences and negative thought loops",
        "Awakening of pure devotion (Bhakti) and spiritual grace"
      ],
      hi: [
        "चित्त की गहरी शांति और मानसिक अशांति का नाश",
        "घर-परिवार में सुख, शांति और आपसी सामंजस्य",
        "नकारात्मक ऊर्जा व ग्रह दोषों से दिव्य सुरक्षा",
        "हृदय में ईश्वर के प्रति अनन्य प्रेम और भक्ति का प्राकट्य"
      ]
    }
  },
  {
    id: "durga-maa-sadhana",
    slug: "durga-maa-sadhana-33-days",
    title: "Durga Maa Shakti Sadhana",
    titleHi: "माँ दुर्गा शक्ति साधना",
    deity: "Maa Durga & Navadurga Shakti",
    deityHi: "आदिशक्ति माँ दुर्गा व नवदुर्गा",
    durationDays: 33,
    durationLabel: "33-Day Shakti Immersion",
    durationLabelHi: "33 दिवसीय आदिशक्ति अनुष्ठान",
    startDate: "Starts 4th September / Navratri Cycles",
    startDateHi: "प्रारंभ: 4 सितंबर / शारदीय नवरात्रि",
    tag: "Shakti & Protection",
    tagHi: "शक्ति व सुरक्षा",
    badge: "33 Days · Durga Sadhana",
    badgeHi: "33 दिन · दुर्गा साधना",
    accentColor: "#A24628",
    badgeBg: "rgba(162, 70, 40, 0.15)",
    bgGradient: "linear-gradient(135deg, #38150D 0%, #200905 100%)",
    summary: "33 days of sacred fire and Shakti awakening. Awaken supreme courage, shatter self-limiting doubts, invoke divine protection, and align with the invincible grace of Maa Durga.",
    summaryHi: "माँ जगदम्बा की असीम शक्ति का 33 दिवसीय दिव्य अनुष्ठान। भय का निवारण, शत्रुओं व बाधाओं पर विजय, संकल्प शक्ति का जागरण और अंतरात्मा की रक्षा।",
    mantra: "Om Dum Durgayei Namaha · Sarva Mangala Mangalye",
    mantraDevanagari: "ॐ दुं दुर्गायै नमः ॥\nसर्वमङ्गलमाङ्गल्ये शिवे सर्वार्थसाधिके ।\nशरण्ये त्र्यम्बके गौरि नारायणि नमोऽस्तु ते ॥",
    mantraMeaning: "Salutations to the Supreme Mother Durga who bestows all auspiciousness, fulfills all desires, and protects those who surrender unto Her.",
    mantraMeaningHi: "हे सर्वकल्याणकारिणी, मनोकामना पूर्ण करने वाली, तीन नेत्रों वाली और शिव की अर्धांगिनी नारायणी, आपको हमारा कोटि-कोटि नमस्कार।",
    featured: true,
    meetingTime: "Sandhya Kaal (Twilight) & Evening 8:00 PM Sit",
    meetingTimeHi: "संध्या काल व सायं 8:00 बजे लाइव ध्यान",
    meetLink: "https://meet.google.com/odv-evnd-mfy",
    dailyCommitment: "40–50 mins daily",
    dailyCommitmentHi: "प्रतिदिन 40–50 मिनट",
    overview: "33 days represent the mastery over the 33 cosmic forces (Trayastrimshata Devas) through the grace of the Supreme Mother. Durga Sadhana is an intense fire practice designed to burn through lethargy, fear, and karmic stagnation, replacing them with lion-hearted clarity, unshakable boundaries, and protective aura.",
    overviewHi: "33 दिनों का यह अनुष्ठान 33 कोटि दिव्य ऊर्जाओं को जाग्रत करने का प्रतीक है। माँ दुर्गा की यह साधना मन से आलस्य, भय, हीनभावना और पुरानी रुकावटों को भस्म कर सिंह के समान अदम्य साहस और सकारात्मक ऊर्जा प्रदान करती है।",
    pillars: [
      {
        title: "Navarna & Bija Japa",
        titleHi: "दुर्गा बीज मंत्र जप",
        desc: "Recitation of Durga Bija 'Dum' and Navarna mantra with concentrated gaze.",
        descHi: "रुद्राक्ष या रक्त चंदन माला पर 'ॐ दुं दुर्गायै नमः' का श्रद्धापूर्वक जप।"
      },
      {
        title: "Deepam (Sacred Flame) Dhyana",
        titleHi: "दीपक त्राटक व ध्यान",
        desc: "Lighting a pure ghee or sesame lamp representing the eternal consciousness of Maa.",
        descHi: "शुद्ध घी का दीपक प्रज्वलित कर ज्योति में माँ की उपस्थिति का अनुभव।"
      },
      {
        title: "Durga Saptashati & Kavacham",
        titleHi: "दुर्गा कवच व अर्गला पाठ",
        desc: "Chanting protective hymns for physical, mental, and energetic shielding.",
        descHi: "देवी कवच एवं कीलक स्तोत्र का पाठ कर अभेद्य सुरक्षा चक्र का निर्माण।"
      },
      {
        title: "Sankalpa Shakti Activation",
        titleHi: "अटूट संकल्प शक्ति",
        desc: "Channeling disciplined willpower to conquer temptations, fears, and procrastination.",
        descHi: "आत्म-अनुशासन और अडिग संकल्प से जीवन की चुनौतियों पर विजय।"
      }
    ],
    dailySchedule: [
      {
        time: "06:15 AM – 07:00 AM",
        activity: "Morning Devi Dhyana & Deepam",
        activityHi: "प्रातः दीप प्रज्वलन व देवी ध्यान",
        details: "Light the sacred lamp, chant Devi Kavach, and complete 108 Navarna japa.",
        detailsHi: "दीपक जलाकर देवी कवच का पाठ व 108 बार बीज मंत्र का जप।"
      },
      {
        time: "06:30 PM (Sandhya Kaal)",
        activity: "Evening Twilight Aarti & Stotra",
        activityHi: "संध्या आरती व महिषासुरमर्दिनी स्तोत्र",
        details: "Offer flowers, burn camphor/incense, and recite sacred Durga hymns.",
        detailsHi: "धूप-दीप अर्पित कर महिषासुरमर्दिनी स्तोत्र या आरती का पाठ।"
      },
      {
        time: "08:00 PM – 09:00 PM",
        activity: "Night Sangha Sit & Silent Dhyana",
        activityHi: "रात्रि सामूहिक ध्यान (गूगल मीट)",
        details: "Collective silence, absorption in Durga tattva, and energy harmonization.",
        detailsHi: "सामूहिक संगति में मौन ध्यान और शक्ति संतुलन।"
      }
    ],
    guidelines: {
      en: [
        "Light a pure ghee or sesame oil lamp during your daily sit.",
        "Use a Rudraksha or Red Sandalwood (Lal Chandan) mala for japa.",
        "Observe strict truthfulness, avoid gossiping, and maintain clean sacred space.",
        "Wear clean, simple clothes (red, yellow, or white preferred during Devi sadhana)."
      ],
      hi: [
        "साधना काल में शुद्ध घी या तिल के तेल का दीपक अवश्य प्रज्वलित रखें।",
        "मंत्र जप के लिए रुद्राक्ष या रक्त चंदन की माला का प्रयोग करें।",
        "पवित्रता का विशेष ध्यान रखें, सत्य वचन बोलें और क्रोध से दूर रहें।",
        "साधना के समय लाल, पीला या श्वेत वस्त्र धारण करना अत्यंत शुभ माना गया है।"
      ]
    },
    benefits: {
      en: [
        "Absolute fearlessness and unshakable self-confidence",
        "Strong energetic shield protecting against negativity and evil eye",
        "Swift removal of chronic obstacles in career, health, and mind",
        "Awakening of dormant Shakti and inner spiritual fire"
      ],
      hi: [
        "भय, चिंता और असुरक्षा की भावना से पूर्ण मुक्ति",
        "नकारात्मक शक्तियों और बुरी दृष्टि से अभेद्य सुरक्षा कवच",
        "कार्य, स्वास्थ्य और जीवन में आने वाली रुकावटों का निवारण",
        "आत्म-बल, तेज और आंतरिक कुंडलिनी शक्ति का विकास"
      ]
    }
  },
  {
    id: "shiv-shakti-sadhana",
    slug: "shiv-shakti-sadhana-21-days",
    title: "Shiv Shakti Sadhana",
    titleHi: "शिव शक्ति साधना",
    deity: "Bhagwan Shiva & Maa Parvati",
    deityHi: "भगवान शिव व माता पार्वती",
    durationDays: 21,
    durationLabel: "21 Days Stillness",
    durationLabelHi: "21 दिवसीय महाकाल ध्यान",
    startDate: "Mondays / Pradosham Cycles",
    startDateHi: "प्रारंभ: सोमवार / प्रदोष व्रत",
    tag: "Dissolution & Stillness",
    tagHi: "मौन व आत्म-साक्षात्कार",
    badge: "21 Days · Shiva Sadhana",
    badgeHi: "21 दिन · शिव साधना",
    accentColor: "#4E6B7A",
    badgeBg: "rgba(78, 107, 122, 0.15)",
    bgGradient: "linear-gradient(135deg, #1C2B33 0%, #0F191E 100%)",
    summary: "21 days of entering the infinite quietude of Mahadeva. Dissolve the ego, awaken witness consciousness, and master inner stillness.",
    summaryHi: "भगवान भोलेनाथ के परम मौन में डूबने की 21 दिवसीय साधना। अहंकार का लय, साक्षी भाव का उदय और कैवल्य शांति की प्राप्ति।",
    mantra: "Om Namah Shivaya · Om Tryambakam Yajamahe",
    mantraDevanagari: "ॐ नमः शिवाय ॥ ॐ त्र्यम्बकं यजामहे सुगन्धिं पुष्टिवर्धनम् ॥",
    mantraMeaning: "I bow to Shiva, the auspicious infinite silence dwelling beyond time and space.",
    mantraMeaningHi: "समस्त सृष्टि के कर्ता-धर्ता, त्रिकालदर्शी भगवान शिव को मेरा नमन।",
    featured: false,
    meetingTime: "Daily 8:00 PM Sit",
    meetingTimeHi: "प्रतिदिन रात्रि 8:00 बजे",
    meetLink: "https://meet.google.com/odv-evnd-mfy",
    dailyCommitment: "30–45 mins daily",
    dailyCommitmentHi: "प्रतिदिन 30–45 मिनट",
    overview: "Shiva is pure unbounded consciousness. In this 21-day sadhana, learn the art of dropping effort, observing thoughts without attachment, and settling into that unshakeable silence that never leaves.",
    overviewHi: "शिव चेतना का नाम है। इस साधना में साधक अपने विचारों के परे साक्षी बनना सीखता है।",
    pillars: [
      {
        title: "Panchakshari Japa",
        titleHi: "पंचाक्षरी मंत्र जप",
        desc: "Continuous mental repetition of Om Namah Shivaya with slow, deep breathing.",
        descHi: "गहरे श्वास के साथ ॐ नमः शिवाय का शांत मानसिक जप।"
      },
      {
        title: "Maha Mrityunjaya",
        titleHi: "महामृत्युंजय पाठ",
        desc: "Invoking vital health, longevity, and liberation from mortal fears.",
        descHi: "आरोग्य, दीर्घायु और मृत्यु भय से मुक्ति हेतु महामृत्युंजय जप।"
      }
    ],
    dailySchedule: [
      {
        time: "06:00 AM – 06:45 AM",
        activity: "Morning Stillness Sit",
        activityHi: "प्रातः शिव ध्यान",
        details: "108 Rudraksha Japa + 20 mins of motionless seated meditation.",
        detailsHi: "रुद्राक्ष माला पर जप एवं स्थिर ध्यान।"
      }
    ],
    guidelines: {
      en: ["Use a genuine Rudraksha mala.", "Practice silent witnessing."],
      hi: ["रुद्राक्ष की माला का उपयोग करें।", "साक्षी भाव का अभ्यास करें।"]
    },
    benefits: {
      en: ["Deep mental quietude", "Eradication of fear and stress"],
      hi: ["गहरी मानसिक शांति", "तनाव और भय का समूल नाश"]
    }
  },
  {
    id: "hanuman-ji-sadhana",
    slug: "hanuman-ji-sadhana-21-days",
    title: "Shree Hanuman Ji Sadhana",
    titleHi: "श्री हनुमान जी साधना",
    deity: "Shree Hanuman (Pavanputra)",
    deityHi: "पवनपुत्र श्री हनुमान जी",
    durationDays: 21,
    durationLabel: "21 Days Devotion & Prana",
    durationLabelHi: "21 दिवसीय वीर हनुमान साधना",
    startDate: "Tuesdays / Purnima Cycles",
    startDateHi: "प्रारंभ: मंगलवार / पूर्णिमा",
    tag: "Strength & Protection",
    tagHi: "बल व अभय",
    badge: "21 Days · Hanuman Sadhana",
    badgeHi: "21 दिन · हनुमान साधना",
    accentColor: "#A24628",
    badgeBg: "rgba(162, 70, 40, 0.15)",
    bgGradient: "linear-gradient(135deg, #3B1B11 0%, #1F0D07 100%)",
    summary: "21 days of unbroken devotion to Pavanputra Hanuman. Awaken boundless physical and mental strength, eradicate negative planetary influences, and embody supreme devotion.",
    summaryHi: "पवनपुत्र हनुमान जी की 21 दिवसीय साधना। शारीरिक व मानसिक बल का विकास, भय व नकारात्मकता से मुक्ति, और श्रीराम भक्ति का जागरण।",
    mantra: "Om Hanumate Namaha · Om Namo Bhagavate Anjaneyaya",
    mantraDevanagari: "ॐ हनुमते नमः ॥ मनोजवं मारुततुल्यवेगं जितेन्द्रियं बुद्धिमतां वरिष्ठम् ॥",
    mantraMeaning: "Salutations to Lord Hanuman, who is swift as thought, powerful as wind, and master over all senses.",
    mantraMeaningHi: "मन के समान तीव्र गति वाले, वायुवेग से चलने वाले, इंद्रियों को जीतने वाले श्री हनुमान जी को प्रणाम।",
    featured: false,
    meetingTime: "Daily Morning & Evening 8:00 PM Sit",
    meetingTimeHi: "प्रातः व सायं 8:00 बजे",
    meetLink: "https://meet.google.com/odv-evnd-mfy",
    dailyCommitment: "30–45 mins daily",
    dailyCommitmentHi: "प्रतिदिन 30–45 मिनट",
    overview: "Lord Hanuman is the embodiment of Prana Shakti, pure devotion (Bhakti), and supreme fearlessness. This sadhana cleanses all weakness from mind and body.",
    overviewHi: "हनुमान जी प्राण शक्ति और भक्ति के साक्षात विग्रह हैं। यह साधना मनुष्य के भीतर अदम्य साहस भर देती है।",
    pillars: [
      {
        title: "Hanuman Chalisa Path",
        titleHi: "हनुमान चालीसा पाठ",
        desc: "Daily recitation of 7 or 11 cycles of Sri Hanuman Chalisa with deep devotion.",
        descHi: "प्रतिदिन 7 या 11 बार श्री हनुमान चालीसा का श्रद्धापूर्वक पाठ।"
      },
      {
        title: "Bajrang Baan & Japa",
        titleHi: "बजरंग बाण व जप",
        desc: "Chanting for instant clearing of obstacles, negative energies, and inner doubts.",
        descHi: "संकटों और भय से मुक्ति हेतु बजरंग बाण व मंत्र जप।"
      }
    ],
    dailySchedule: [
      {
        time: "06:30 AM",
        activity: "Morning Hanuman Chalisa",
        activityHi: "प्रातः हनुमान चालीसा",
        details: "Lighting mustard oil/ghee lamp and chanting with red tilak.",
        detailsHi: "दीपक जलाकर हनुमान चालीसा का पाठ।"
      }
    ],
    guidelines: {
      en: ["Observe strict Brahmacharya during the 21 days.", "Chant with complete devotion."],
      hi: ["21 दिनों तक ब्रह्मचर्य का पालन करें।", "पूर्ण श्रद्धा से पाठ करें।"]
    },
    benefits: {
      en: ["Total fearlessness and boundless vitality", "Complete protection from negative energies"],
      hi: ["असीम आत्मबल व स्वास्थ्य", "नकारात्मक ऊर्जा व बुरी नजर से रक्षा"]
    }
  }
];

export function getSadhanaBySlug(slug: string): SadhanaItem | undefined {
  return SADHANAS_DATA.find((s) => s.slug === slug || s.id === slug);
}
