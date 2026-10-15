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
    id: "var-siddhi-vinayak-sadhana",
    slug: "var-siddhi-vinayak-sadhana",
    title: "Var Siddhi Vinayak Sadhana",
    titleHi: "श्री वरसिद्धि विनायक साधना",
    deity: "Bhagwan Ganesha (Var Siddhi Vinayak)",
    deityHi: "भगवान श्री गणेश (वरसिद्धि विनायक)",
    durationDays: 21,
    durationLabel: "21-Day Sankalp (Month 01)",
    durationLabelHi: "21 दिवसीय संकल्प (महीना 01)",
    startDate: "Currently Active · Batches 2024, 2025, 2026",
    startDateHi: "वर्तमान में सक्रिय · बैच 2024, 2025, 2026",
    tag: "Month 01 · Active Cycle",
    tagHi: "महीना 01 · सक्रिय साधना",
    badge: "Active Now · 21 Days",
    badgeHi: "सक्रिय साधना · 21 दिन",
    accentColor: "#D57C3B",
    badgeBg: "rgba(213, 124, 59, 0.15)",
    bgGradient: "linear-gradient(135deg, #2B1608 0%, #150B04 50%, #361705 100%)",
    summary: "The foundational 21-day initiation of the Three-Month Sadhana Plan for Batches 2024, 2025 and 2026. Dedicated to Lord Var Siddhi Vinayak with daily target of 300–1,000 mantras or min 3 hours japa (70% Mental / 30% Whispering), Thursday–Saturday 3-diya practice, daily gratitude and kindness attitudes, and weekly temple visits.",
    summaryHi: "बैच 2024, 2025 और 2026 के लिए तीन महीने की साधना यात्रा का पहला महीना। विघ्नहर्ता वरसिद्धि विनायक को समर्पित 21 दिवसीय संकल्प। दैनिक 300-1,000 मंत्र या न्यूनतम 3 घंटे जप (70% मानसिक / 30% फुसफुसाकर), गुरु-शुक्र-शनि 3-दीपक साधना, दैनिक आचरण व साप्ताहिक मंदिर साधना।",
    mantra: "Om Shreem Hreem Kleem Glaum Gam Varsiddhi Vinayakaya Namaha",
    mantraDevanagari: "ॐ श्रीं ह्रीं क्लीं ग्लौं गं वरसिद्धि विनायकाय नमः",
    mantraMeaning: "Salutations to Lord Var Siddhi Vinayak, who removes obstacles and bestows divine boons, spiritual attainments, and auspiciousness.",
    mantraMeaningHi: "समस्त सिद्धियों के प्रदाता, विघ्नहर्ता, वरदानी भगवान श्री वरसिद्धि विनायक को हमारा कोटि-कोटि नमन।",
    featured: true,
    category: "core",
    categoryHi: "मुख्य साधना",
    meetingTime: "8:00 PM – 9:00 PM IST (Saturday & Sunday Zoom / Google Meet)",
    meetingTimeHi: "शाम 8:00 – 9:00 बजे (शनिवार व रविवार ज़ूम / गूगल मीट)",
    meetLink: "https://meet.google.com/odv-evnd-mfy",
    dailyCommitment: "300–1,000 Mantras Daily OR Minimum 3 Hours of Japa (70% Mental / 30% Whispering)",
    dailyCommitmentHi: "प्रतिदिन 300–1,000 मंत्र या कम से कम 3 घंटे जप (70% मानसिक / 30% फुसफुसाकर)",
    overview: "This 21-day sadhana dedicated to Lord Var Siddhi Vinayak marks the beginning of the Three-Month Sadhana Plan for Batches 2024, 2025, and 2026. The journey establishes deep internal discipline, purifies subconscious impressions, and invokes Bhagwan Ganesha's grace to dissolve all blockages. Complete the 21 days as one continuous sankalpa, or in 3 cycles of 7 days if expecting menstrual cycles. Women may skip during periods, and anyone traveling may also pause and resume upon returning.",
    overviewHi: "बैच 2024, 2025 और 2026 के साधकों के लिए तीन महीने की साधना यात्रा का यह पहला 21 दिवसीय चरण भगवान वरसिद्धि विनायक को समर्पित है। यह साधना आंतरिक अनुशासन, चित्त शुद्धि और जीवन के समस्त विघ्नों का समूल नाश करने हेतु अति फलदायी है। इसे 21 दिन के एक अखंड संकल्प के रूप में, अथवा माहवारी की स्थिति में 7 दिन के 3 चक्रों में पूरा करें। यात्रा व माहवारी में छूट मान्य है।",
    pillars: [
      {
        title: "Var Siddhi Vinayak Mantra Japa",
        titleHi: "वरसिद्धि विनायक मंत्र जप",
        desc: "Mantra: 'Om Shreem Hreem Kleem Glaum Gam Varsiddhi Vinayakaya Namaha'. Daily target: 300 to 1,000 mantras OR minimum 3 hours of japa. Follow 70% Mental Japa (Mansik) + 30% Whispering Jaap.",
        descHi: "महामंत्र: 'ॐ श्रीं ह्रीं क्लीं ग्लौं गं वरसिद्धि विनायकाय नमः'। दैनिक लक्ष्य: 300 से 1,000 मंत्र या न्यूनतम 3 घंटे जप। 70% मानसिक जप और 30% फुसफुसाकर जप का नियम रखें।"
      },
      {
        title: "Incense & Diya Guidelines",
        titleHi: "अगरबत्ती, दीपक व बखूर नियम",
        desc: "Regular members may use agarbatti. Bakhoor members may use Bakhoor oil and light 1, 2, or 3 diyas as convenient.",
        descHi: "नियमित सदस्य अगरबत्ती का उपयोग कर सकते हैं। बखूर सदस्य बखूर ऑयल का उपयोग कर सकते हैं और अपनी सुविधा के अनुसार 1, 2 या 3 दीपक जला सकते हैं।"
      },
      {
        title: "Three Diyas: Weekly Practice",
        titleHi: "तीन दीपक: साप्ताहिक साधना",
        desc: "Throughout all three months on Thursday, Friday, and Saturday: follow the three-diya process. Keep the diyas lit for a minimum of 3 hours; especially expected from serious seekers.",
        descHi: "तीनों महीनों के दौरान गुरुवार, शुक्रवार और शनिवार को तीन दीपक की प्रक्रिया करें। दीपक कम से कम 3 घंटे जलते रहें; गंभीर साधकों से यह विशेष रूप से अपेक्षित है।"
      },
      {
        title: "Daily Habits & Weekly Temple Visit",
        titleHi: "दैनिक आचरण व साप्ताहिक मंदिर साधना",
        desc: "Begin with gratitude, speak with kindness, choose positivity, and trust that your deities and Karim Bhai's shaktis are with you. Visit an old/significant temple weekly with homemade offering and 1-hour whispering japa.",
        descHi: "दिन की शुरुआत कृतज्ञता से करें, मधुर वाणी रखें, सकारात्मक सोचें, और विश्वास रखें कि इष्ट देव व करीम भाई की शक्तियां आपके साथ हैं। सप्ताह में एक बार घर से भोग बनाकर मंदिर जाएं और 1 घंटा जप करें।"
      }
    ],
    dailySchedule: [
      {
        time: "05:00 AM – 07:00 AM",
        activity: "Morning Var Siddhi Vinayak Japa",
        activityHi: "प्रातःकालीन वरसिद्धि विनायक जप",
        details: "Cleanse, light diya/agarbatti, chant with 70% mental / 30% whispering ratio towards daily target.",
        detailsHi: "स्नान व शुद्धि, दीप/अगरबत्ती प्रज्वलन, 70% मानसिक व 30% फुसफुसाकर मंत्र जप।"
      },
      {
        time: "Everyday",
        activity: "Personal Session of Jaap & Dhyan (WhatsApp Direct)",
        activityHi: "दैनिक व्यक्तिगत जप व ध्यान सत्र (सीधे व्हाट्सएप)",
        details: "1-on-1 personalized guidance with Vishal Bhaiya for sacred mantra jaap and dhyan sittings.",
        detailsHi: "विशाल भैया के साथ 1-ऑन-1 व्यक्तिगत सत्र: दैनिक मंत्र जप, गहन ध्यान व साधना मार्गदर्शन।"
      },
      {
        time: "Sat & Sun (08:00 PM – 09:00 PM)",
        activity: "Weekend Collective Sit (Zoom / Google Meet)",
        activityHi: "सप्ताहांत सामूहिक साधना (ज़ूम / गूगल मीट)",
        details: "Weekend live collective sit on Zoom / Google Meet with the sangha for silent resonance and shared guidance.",
        detailsHi: "शनिवार व रविवार रात्रि 8 बजे ज़ूम / गूगल मीट पर सामूहिक साधना व मार्गदर्शन।"
      },
      {
        time: "Thu / Fri / Sat",
        activity: "Three Diyas Weekly Practice",
        activityHi: "तीन दीपक साप्ताहिक साधना",
        details: "Light three diyas and keep them lit for a minimum of 3 hours as instructed.",
        detailsHi: "निर्देशानुसार तीन दीपक प्रज्वलित करें और कम से कम 3 घंटे अखंड रखें।"
      }
    ],
    guidelines: {
      en: [
        "Sankalpa Duration: Complete 21 continuous days OR 7 days × 3 cycles (only for women expecting periods).",
        "Skip Allowance: Women may skip sadhana during periods. Anyone travelling may also skip and resume upon return.",
        "Daily Target: Complete 300–1,000 mantras OR sit for minimum 3 hours of japa daily.",
        "Chanting Ratio: Practice 70% Mental Japa (Mansik) and 30% Whispering Jaap.",
        "Incense & Diya: Regular members use agarbatti; Bakhoor members use Bakhoor oil and 1, 2, or 3 diyas as convenient.",
        "Weekly Three Diyas: Keep diyas lit for minimum 3 hours on Thursday, Friday, and Saturday.",
        "Weekly Temple Visit: Visit an old or significant temple weekly, bring homemade offering, take 3 parikramas with sankalpa, sit quietly, and do 1 hour of whispering japa for temple deities & siddhi shaktis.",
        "Daily Habits: Begin with gratitude, speak with kindness, stay positive and disciplined, and trust the divine guidance of deities & Karim Bhai's shaktis."
      ],
      hi: [
        "संकल्प अवधि: 21 दिन का अखंड संकल्प, अथवा माहवारी की संभावना वाली महिलाओं के लिए 7 दिन × 3 चक्र।",
        "साधना में छूट: महिलाएं माहवारी में साधना छोड़ सकती हैं। यात्रा में भी साधना छोड़ी जा सकती है और लौटने पर जारी रखें।",
        "दैनिक लक्ष्य: प्रतिदिन 300 से 1,000 मंत्र अथवा न्यूनतम 3 घंटे का अखंड जप।",
        "जप अनुपात: 70% मानसिक जप और 30% फुसफुसाकर जप का नियम रखें।",
        "धूप व दीपक: नियमित सदस्य अगरबत्ती लगाएं; बखूर सदस्य बखूर ऑयल व 1, 2 या 3 दीपक जलाएं।",
        "साप्ताहिक 3 दीपक: गुरुवार, शुक्रवार और शनिवार को दीपक कम से कम 3 घंटे तक प्रज्वलित रखें।",
        "साप्ताहिक मंदिर दर्शन: किसी पुराने/प्रमुख मंदिर जाएं, घर से भोग लाएं, संकल्प लेकर 3 परिक्रमा करें, और 1 घंटा फुसफुसाकर जप करें।",
        "दैनिक आचरण: दिन की शुरुआत कृतज्ञता से करें, मधुर वाणी रखें, सकारात्मक रहें और इष्ट देव व करीम भाई की शक्तियों पर दृढ़ विश्वास रखें।"
      ]
    },
    benefits: {
      en: [
        "Dissolves deep subconscious blockages and material obstacles through Lord Ganesha's grace",
        "Establishes unbroken spiritual discipline and prana purification for the entire 3-month journey",
        "Deep mental peace, concentration, and emotional stability",
        "Divine protection and connection with Karim Bhai's shaktis and sacred deities",
        "Lays the pure foundation for the upcoming Month 02 Mahalaxmi Sadhana"
      ],
      hi: [
        "भगवान वरसिद्धि विनायक की कृपा से जीवन के समस्त विघ्नों, बाधाओं व नकारात्मक संस्कारों का निवारण",
        "तीन महीने की संपूर्ण साधना यात्रा हेतु अटूट आध्यात्मिक अनुशासन व प्राण शुद्धि",
        "गहरी मानसिक शांति, एकाग्रता और भावनात्मक संतुलन",
        "इष्ट देवों व करीम भाई की शक्तियों की सतत सुरक्षा व आशीर्वाद",
        "आगामी द्वितीय माह की महालक्ष्मी साधना हेतु पावन आधारशिला की स्थापना"
      ]
    },
    specialInstructions: {
      en: [
        "Batches 2024, 2025, and 2026 are currently active in Month 01.",
        "Maintain the 70% Mental + 30% Whispering chanting ratio during your daily practice.",
        "Women should pause practice during menstrual cycles and resume without guilt or resetting count.",
        "Join the 8:00 PM Google Meet collective sit daily for amplified group resonance."
      ],
      hi: [
        "बैच 2024, 2025 और 2026 के लिए प्रथम माह की साधना वर्तमान में सक्रिय है।",
        "दैनिक जप में 70% मानसिक जप और 30% फुसफुसाकर जप का संतुलन बनाए रखें।",
        "महिलाएं माहवारी के दिनों में साधना स्थगित रखें और शुद्धि उपरांत वहीं से पुनः प्रारंभ करें।",
        "सामूहिक शक्ति व अनुशासन हेतु प्रतिदिन रात्रि 8:00 बजे गूगल मीट पर अवश्य जुड़ें।"
      ]
    }
  },
  {
    id: "mahalaxmi-sadhana-month-2",
    slug: "mahalaxmi-sadhana-month-2",
    title: "Mahalaxmi Sadhana (Month 02)",
    titleHi: "श्री महालक्ष्मी साधना (महीना 02)",
    deity: "Maa Mahalaxmi (Vishnupriya)",
    deityHi: "माँ महालक्ष्मी (विष्णुप्रिया)",
    durationDays: 21,
    durationLabel: "21-Day Sankalp (Month 02 · Upcoming)",
    durationLabelHi: "21 दिवसीय संकल्प (महीना 02 · आगामी)",
    startDate: "Starts After Month 01 Completion",
    startDateHi: "महीना 01 पूर्ण होने के पश्चात प्रारंभ",
    tag: "Month 02 · Upcoming Cycle",
    tagHi: "महीना 02 · आगामी साधना",
    badge: "Upcoming · Month 02",
    badgeHi: "आगामी · द्वितीय माह",
    accentColor: "#AD6986",
    badgeBg: "rgba(173, 105, 134, 0.15)",
    bgGradient: "linear-gradient(135deg, #2B0D18 0%, #15050C 50%, #360E1D 100%)",
    summary: "The second phase of the Three-Month Sadhana Plan for Batches 2024, 2025 and 2026. Dedicated to Maa Mahalaxmi with the fourfold Mahalakshmi chant, daily target of 300–1,000 mantras or min 3 hours japa, Thursday–Saturday 3-diya practice, and weekly temple visits.",
    summaryHi: "बैच 2024, 2025 और 2026 के लिए तीन महीने की साधना योजना का दूसरा चरण। माँ महालक्ष्मी के चार पावन मंत्रों को समर्पित 21 दिवसीय संकल्प। दैनिक 300-1,000 मंत्र या 3 घंटे जप, गुरुवार-शनिवार 3-दीपक साधना व मंदिर दर्शन।",
    mantra: "Om Mahalakshmyai Namo Namah · Om Vishnu Priyayai Namo Namah · Om Dhanapradayai Namo Namah · Om Vishwajananyai Namo Namah",
    mantraDevanagari: "ॐ महालक्ष्म्यै नमो नमः\nॐ विष्णुप्रियायै नमो नमः\nॐ धनप्रदायै नमो नमः\nॐ विश्वजनन्यै नमो नमः",
    mantraMeaning: "Salutations to Divine Mother Mahalakshmi, beloved consort of Vishnu, bestower of spiritual and material abundance, and mother of the entire cosmos.",
    mantraMeaningHi: "परम पावन माँ महालक्ष्मी, श्री विष्णुप्रिया, समस्त धन-ऐश्वर्य प्रदाता और संपूर्ण ब्रह्मांड की जननी को हमारा बारंबार नमन।",
    featured: false,
    category: "core",
    categoryHi: "मुख्य साधना",
    meetingTime: "8:00 PM – 9:00 PM IST (Daily Collective Sit)",
    meetingTimeHi: "शाम 8:00 – 9:00 बजे (दैनिक सामूहिक ध्यान)",
    meetLink: "https://meet.google.com/odv-evnd-mfy",
    dailyCommitment: "300–1,000 Mantras Daily OR Minimum 3 Hours of Japa",
    dailyCommitmentHi: "प्रतिदिन 300–1,000 मंत्र या कम से कम 3 घंटे जप",
    overview: "Following the obstacle-clearing foundation of Lord Var Siddhi Vinayak in Month 01, Month 02 invokes the divine grace of Divine Mother Mahalaxmi. Practitioners engage the four sacred names of the Goddess to cultivate spiritual radiance, inner abundance, and pure devotion.",
    overviewHi: "प्रथम माह में भगवान वरसिद्धि विनायक द्वारा विघ्न निवारण के उपरांत, द्वितीय माह में माँ महालक्ष्मी की पावन कृपा का आवाहन किया जाता है। साधक देवी के चार दिव्य स्वरूपों के मंत्रों द्वारा आत्मिक शांति, समृद्धि और भक्ति प्राप्त करते हैं।",
    pillars: [
      {
        title: "Fourfold Mahalakshmi Chanting",
        titleHi: "महालक्ष्मी चतुर्विद मंत्र जप",
        desc: "Chant the four sacred verses: Om Mahalakshmyai Namo Namah, Om Vishnu Priyayai Namo Namah, Om Dhanapradayai Namo Namah, Om Vishwajananyai Namo Namah.",
        descHi: "देवी के चारों पावन मंत्रों का निरंतर जप: ॐ महालक्ष्म्यै नमो नमः, ॐ विष्णुप्रियायै नमो नमः, ॐ धनप्रदायै नमो नमः, ॐ विश्वजनन्यै नमो नमः।"
      },
      {
        title: "Three Diyas Weekly (Thu/Fri/Sat)",
        titleHi: "साप्ताहिक तीन दीपक साधना",
        desc: "Continue the three-diya process on Thursday, Friday, and Saturday for a minimum of 3 hours.",
        descHi: "गुरुवार, शुक्रवार और शनिवार को कम से कम 3 घंटे तक तीन दीपक की पावन प्रक्रिया जारी रखें।"
      }
    ],
    dailySchedule: [
      {
        time: "Morning / Evening",
        activity: "Mahalaxmi Japa",
        activityHi: "महालक्ष्मी मंत्र जप",
        details: "300–1,000 mantras daily or minimum 3 hours of japa.",
        detailsHi: "प्रतिदिन 300-1,000 मंत्र या कम से कम 3 घंटे जप।"
      },
      {
        time: "08:00 PM – 09:00 PM",
        activity: "Live Sangha Sit (Google Meet)",
        activityHi: "लाइव सामूहिक साधना (गूगल मीट)",
        details: "Daily evening collective sit on Google Meet.",
        detailsHi: "प्रतिदिन रात्रि 8 बजे गूगल मीट पर सामूहिक साधना।"
      }
    ],
    guidelines: {
      en: [
        "Begins strictly after completing Month 01 (Var Siddhi Vinayak).",
        "Daily Target: 300–1,000 mantras or minimum 3 hours of japa.",
        "Follow the 70% Mental + 30% Whispering rule.",
        "Weekly three-diya practice on Thursday, Friday, and Saturday for min 3 hours."
      ],
      hi: [
        "प्रथम माह (वरसिद्धि विनायक) पूर्ण होने के उपरांत ही प्रारंभ करें।",
        "दैनिक लक्ष्य: 300-1,000 मंत्र या कम से कम 3 घंटे जप।",
        "70% मानसिक जप और 30% फुसफुसाकर जप का नियम रखें।",
        "गुरुवार, शुक्रवार और शनिवार को तीन दीपक कम से कम 3 घंटे प्रज्वलित रखें।"
      ]
    },
    benefits: {
      en: [
        "Invokes supreme abundance, spiritual luminosity, and peace of mind",
        "Deepens alignment with Vishnu and Mahalakshmi consciousness",
        "Prepares the seeker for personalized Month 03 guidance"
      ],
      hi: [
        "दैवीय ऐश्वर्य, आंतरिक तेज और मानसिक शांति की प्राप्ति",
        "श्री हरि विष्णु और माँ महालक्ष्मी की चेतना से गहरा जुड़ाव",
        "तृतीय माह के व्यक्तिगत मार्गदर्शन हेतु साधक की पूर्ण तैयारी"
      ]
    }
  },
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
  }
];

export function getSadhanaBySlug(slug: string): SadhanaItem | undefined {
  return SADHANAS_DATA.find((s) => s.slug === slug || s.id === slug);
}
