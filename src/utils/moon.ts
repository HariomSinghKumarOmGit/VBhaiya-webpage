const SYNODIC = 29.53058867; // synodic month in days
const KNOWN_NEW_MOON = Date.UTC(2000, 0, 6, 18, 14, 0); // ms reference

export function moonAgeDays(date: Date) {
  const diff = date.getTime() - KNOWN_NEW_MOON;
  const days = diff / 86400000;
  return ((days % SYNODIC) + SYNODIC) % SYNODIC;
}

export function nextNewMoon(from: Date) {
  const age = moonAgeDays(from);
  let daysUntil = (SYNODIC - age) % SYNODIC;
  if (daysUntil < 0.5) daysUntil += SYNODIC;
  return addDays(from, daysUntil);
}

export function nextFullMoon(from: Date) {
  const age = moonAgeDays(from);
  let daysUntil = ((SYNODIC / 2) - age + SYNODIC) % SYNODIC;
  if (daysUntil < 0.5) daysUntil += SYNODIC;
  return addDays(from, daysUntil);
}

export function addDays(date: Date, days: number) {
  const result = new Date(date);
  result.setDate(result.getDate() + days);
  return result;
}

export function fmt(date: Date, opts?: Intl.DateTimeFormatOptions) {
  return date.toLocaleDateString('en-IN', opts || { day: 'numeric', month: 'short' });
}

export interface SacredTithiInfo {
  type: 'amavasya' | 'purnima' | 'kaal_ashtami' | 'ekadashi';
  title: string;
  shortTitle: string;
  icon: string;
  badge: string;
  description: string;
  color: string;
  bgColor: string;
  borderColor: string;
  accentBg: string;
}

export interface FestivalInfo {
  name: string;
  hindiName?: string;
  deity: string;
  description: string;
  significance: string;
  color: string;
  tagColor: string;
}

export interface HinduMonthTheme {
  id: number; // 1 to 12
  hinduName: string;
  devanagari: string;
  gregorianSpan: string;
  primaryDeity: string;
  themeTitle: string;
  themeDescription: string;
  mantra: string;
  blessing: string;
  accentColor: string;
  bgGradient: string;
  bannerBorder: string;
  cardGlow: string;
  badgeBg: string;
  textColor: string;
  gregorianMonthIndex: number; // 0 to 11 (approx primary match)
}

export interface DayDeityInfo {
  dayOfWeek: string;
  title: string;
  team: string;
  leader?: string;
  bgGradient: string;
  badgeBg: string;
  textColor: string;
  cardType: 'teal' | 'rust' | 'purple' | 'green' | 'sand';
  mantra: string;
  focus: string;
}

export const WEEKLY_DEITIES: Record<number, DayDeityInfo> = {
  1: {
    dayOfWeek: "MONDAY",
    title: "Shiv Puja / Shiv Shakti Sadhana",
    team: "Team 1",
    leader: "And Rohit Bhai",
    bgGradient: "linear-gradient(135deg, #1C4E5B 0%, #153D47 100%)",
    badgeBg: "rgba(255,255,255,0.15)",
    textColor: "#FFFFFF",
    cardType: "teal",
    mantra: "ॐ नमः शिवाय (Om Namah Shivaya)",
    focus: "Inner stillness, Mahadeva consciousness, dissolution of ego & Shakti alignment.",
  },
  2: {
    dayOfWeek: "TUESDAY",
    title: "Hanuman Ji Sadhana",
    team: "Team 2",
    bgGradient: "linear-gradient(135deg, #A24628 0%, #87361D 100%)",
    badgeBg: "rgba(255,255,255,0.15)",
    textColor: "#FFFFFF",
    cardType: "rust",
    mantra: "ॐ हनुमते नमः (Om Hanumate Namah)",
    focus: "Fearlessness, unwavering devotion, prana shakti & protection from negative energies.",
  },
  3: {
    dayOfWeek: "WEDNESDAY",
    title: "Ganesh Ji Sadhana",
    team: "Team 3",
    bgGradient: "linear-gradient(135deg, #60467A 0%, #4D3464 100%)",
    badgeBg: "rgba(255,255,255,0.15)",
    textColor: "#FFFFFF",
    cardType: "purple",
    mantra: "ॐ गं गणपतये नमः (Om Gam Ganapataye Namah)",
    focus: "Removal of all obstacles, sharp intellect, auspicious beginnings & grounding.",
  },
  4: {
    dayOfWeek: "THURSDAY",
    title: "Guru Tattva Activation",
    team: "Team 3",
    bgGradient: "linear-gradient(135deg, #60467A 0%, #4D3464 100%)",
    badgeBg: "rgba(255,255,255,0.15)",
    textColor: "#FFFFFF",
    cardType: "purple",
    mantra: "गुरुर्ब्रह्मा गुरुर्विष्णुः गुरुर्देवो महेश्वरः (Gurur Brahma Gurur Vishnuh)",
    focus: "Higher wisdom, spiritual transmission, surrender to lineage & divine grace.",
  },
  5: {
    dayOfWeek: "FRIDAY",
    title: "Vishnu Lakshmi Tattva",
    team: "Team 1",
    bgGradient: "linear-gradient(135deg, #1C4E5B 0%, #153D47 100%)",
    badgeBg: "rgba(255,255,255,0.15)",
    textColor: "#FFFFFF",
    cardType: "teal",
    mantra: "ॐ नमो नारायणाय · ॐ श्रीं महालक्ष्म्यै नमः",
    focus: "Sustenance, spiritual abundance, heart expansion, peace & divine prosperity.",
  },
  6: {
    dayOfWeek: "SATURDAY",
    title: "Shani Dev Sadhana",
    team: "Team 2",
    bgGradient: "linear-gradient(135deg, #A24628 0%, #87361D 100%)",
    badgeBg: "rgba(255,255,255,0.15)",
    textColor: "#FFFFFF",
    cardType: "rust",
    mantra: "ॐ शं शनैश्चराय नमः (Om Sham Shanaishcharaya Namah)",
    focus: "Karmic purification, deep discipline, endurance, detachment & spiritual duty.",
  },
  0: {
    dayOfWeek: "SUNDAY",
    title: "Live Session",
    team: "Community Satsang",
    leader: "By Karim Bhai",
    bgGradient: "linear-gradient(135deg, #1D4B3E 0%, #13382D 100%)",
    badgeBg: "rgba(255,255,255,0.15)",
    textColor: "#FFFFFF",
    cardType: "green",
    mantra: "ॐ सूर्याय नमः (Om Suryaya Namah)",
    focus: "Collective sadhana, Q&A guidance with Karim Bhai, direct experiential transmission.",
  },
};

export const ADDITIONAL_PRACTICE = {
  category: "ADDITIONAL PRACTICES",
  title: "Kaal Ashtami & Kaal Ratri Hawan",
  leader: "Akhil Bhai",
  bgColor: "#EADBB6",
  textColor: "#2B1D0E",
  accentColor: "#8B5E1E",
  mantra: "ॐ कालभैरवाय नमः · ॐ ऐं ह्रीं क्लीं चामुण्डायै विच्चे",
  description: "Special sacred Hawan rituals for deep purification, overcoming fears & fierce protective shield.",
};

// 12 HINDU LUNAR MONTHS AS DISPLAYED IN THE POSTER (LIGHT THEME LUXURY PALETTES)
export const HINDU_LUNAR_MONTHS: HinduMonthTheme[] = [
  {
    id: 1,
    hinduName: "Chaitra",
    devanagari: "चैत्र",
    gregorianSpan: "Mar – Apr",
    primaryDeity: "Lord Rama",
    themeTitle: "Dharma & New Beginnings",
    themeDescription: "The commencement of the Hindu New Year (Nav Varsh) and Chaitra Navratri. Embodying righteous conduct, purity of purpose, and divine alignment through Lord Rama.",
    mantra: "श्री राम जय राम जय जय राम",
    blessing: "Embrace fresh beginnings in righteousness and truth.",
    accentColor: "#B45309",
    bgGradient: "linear-gradient(135deg, #FFFBEB 0%, #FEF3C7 50%, #FDE68A 100%)",
    bannerBorder: "#F59E0B",
    cardGlow: "rgba(217, 119, 6, 0.15)",
    badgeBg: "#D97706",
    textColor: "#78350F",
    gregorianMonthIndex: 2, // March
  },
  {
    id: 2,
    hinduName: "Vaishakha",
    devanagari: "वैशाख",
    gregorianSpan: "Apr – May",
    primaryDeity: "Lord Narasimha",
    themeTitle: "Protection & Courage",
    themeDescription: "A fiercely transformative month blessed by Lord Narasimha. Fosters unshakable spiritual courage, divine protection against negative forces, and devotion.",
    mantra: "उग्रं वीरं महाविष्णुं ज्वलन्तं सर्वतोमुखम्। नृसिंहं भीषणं भद्रं मृत्युमृत्युं नमाम्यहम्॥",
    blessing: "Invoking absolute fearlessness and divine refuge.",
    accentColor: "#C2410C",
    bgGradient: "linear-gradient(135deg, #FFF7ED 0%, #FFEDD5 50%, #FED7AA 100%)",
    bannerBorder: "#EA580C",
    cardGlow: "rgba(234, 88, 12, 0.15)",
    badgeBg: "#EA580C",
    textColor: "#7C2D12",
    gregorianMonthIndex: 3, // April
  },
  {
    id: 3,
    hinduName: "Jyeshtha",
    devanagari: "ज्येष्ठ",
    gregorianSpan: "May – Jun",
    primaryDeity: "Goddess Ganga",
    themeTitle: "Purification & Renewal",
    themeDescription: "The sacred descent of Ma Ganga (Ganga Dussehra). Cleansing the mind, prana, and subtle nadis with the cooling stream of divine grace during summer heat.",
    mantra: "ॐ नमो भगवत्यै कालिन्द्यै गङ्गायै विश्वरुपिण्यै नमः",
    blessing: "Purifying your karma and refreshing the inner spiritual flow.",
    accentColor: "#0284C7",
    bgGradient: "linear-gradient(135deg, #F0F9FF 0%, #E0F2FE 50%, #BAE6FD 100%)",
    bannerBorder: "#38BDF8",
    cardGlow: "rgba(2, 132, 199, 0.15)",
    badgeBg: "#0284C7",
    textColor: "#075985",
    gregorianMonthIndex: 4, // May
  },
  {
    id: 4,
    hinduName: "Ashadha",
    devanagari: "आषाढ़",
    gregorianSpan: "Jun – Jul",
    primaryDeity: "Lord Jagannath",
    themeTitle: "Devotion & Divine Journey",
    themeDescription: "Marked by the world-renowned Jagannath Ratha Yatra and sacred Guru Purnima. Represents the inner pilgrimage of the soul and deepest devotion.",
    mantra: "नीलाचलनिवासाय नित्याय परमात्मने। बलभद्रसुभद्राभ्यां जगन्नाथाय ते नमः॥",
    blessing: "Guiding the chariot of your life toward the Supreme Lord.",
    accentColor: "#B91C1C",
    bgGradient: "linear-gradient(135deg, #FEF2F2 0%, #FEE2E2 50%, #FECACA 100%)",
    bannerBorder: "#EF4444",
    cardGlow: "rgba(220, 38, 38, 0.15)",
    badgeBg: "#DC2626",
    textColor: "#991B1B",
    gregorianMonthIndex: 5, // June
  },
  {
    id: 5,
    hinduName: "Shravana",
    devanagari: "श्रावण",
    gregorianSpan: "Jul – Aug",
    primaryDeity: "Lord Shiva",
    themeTitle: "Meditation & Transformation",
    themeDescription: "The holiest month for Lord Shiva devotees. Constant japa, abhisheka, fasting on Shravan Somwars, and deep meditative absorption into cosmic silence.",
    mantra: "ॐ त्र्यम्बकं यजामहे सुगन्धिं पुष्टिवर्धनम्। उर्वारुकमिव बन्धनान्मृत्योर्मुक्षीय मामृतात्॥",
    blessing: "Dissolving limitations through deep tapas and Mahadeva's grace.",
    accentColor: "#0D9488",
    bgGradient: "linear-gradient(135deg, #F0FDFA 0%, #CCFBF1 50%, #99F6E4 100%)",
    bannerBorder: "#2DD4BF",
    cardGlow: "rgba(13, 148, 136, 0.15)",
    badgeBg: "#0D9488",
    textColor: "#115E59",
    gregorianMonthIndex: 6, // July
  },
  {
    id: 6,
    hinduName: "Bhadrapada",
    devanagari: "भाद्रपद",
    gregorianSpan: "Aug – Sep",
    primaryDeity: "Lord Ganesha",
    themeTitle: "Wisdom & Removal of Obstacles",
    themeDescription: "Celebration of Ganesh Chaturthi and Krishna Janmashtami. Cultivating auspicious discernment (buddhi), removing spiritual hurdles, and inner awakening.",
    mantra: "वक्रतुण्ड महाकाय सूर्यकोटि समप्रभ। निर्विघ्नं कुरु मे देव सर्वकार्येषु सर्वदा॥",
    blessing: "Clearing all inner and outer obstacles with auspicious wisdom.",
    accentColor: "#A16207",
    bgGradient: "linear-gradient(135deg, #FEFCE8 0%, #FEF9C3 50%, #FEF08A 100%)",
    bannerBorder: "#FACC15",
    cardGlow: "rgba(202, 138, 4, 0.15)",
    badgeBg: "#CA8A04",
    textColor: "#713F12",
    gregorianMonthIndex: 7, // August
  },
  {
    id: 7,
    hinduName: "Ashvina",
    devanagari: "आश्विन",
    gregorianSpan: "Sep – Oct",
    primaryDeity: "Goddess Durga",
    themeTitle: "Strength & Victory",
    themeDescription: "The grand 9 nights of Sharad Navratri culminating in Vijayadashami (Dussehra). Awakening the primordial Shakti to conquer internal darkness and ego.",
    mantra: "सर्वमङ्गलमाङ्गल्ये शिवे सर्वार्थसाधिके। शरण्ये त्र्यम्बके गौरि नारायणि नमोऽस्तु ते॥",
    blessing: "Empowering your consciousness with victorious divine Shakti.",
    accentColor: "#BE123C",
    bgGradient: "linear-gradient(135deg, #FFF1F2 0%, #FFE4E6 50%, #FECDD3 100%)",
    bannerBorder: "#FB7185",
    cardGlow: "rgba(225, 29, 72, 0.15)",
    badgeBg: "#E11D48",
    textColor: "#881337",
    gregorianMonthIndex: 8, // September
  },
  {
    id: 8,
    hinduName: "Kartika",
    devanagari: "कार्तिक",
    gregorianSpan: "Oct – Nov",
    primaryDeity: "Lord Kartikeya / Murugan",
    themeTitle: "Courage & Spiritual Victory",
    themeDescription: "The most radiant month containing Diwali, Dev Deepawali, and Skanda Sashti. Daily lighting of ghee lamps (Deep Daan) to illuminate the inner self.",
    mantra: "ॐ षण्मुखाय विद्महे महासेनाय धीमहि। तन्नः षण्मुखः प्रचोदयात्॥",
    blessing: "Igniting radiant light, inner courage, and spiritual mastery.",
    accentColor: "#0369A1",
    bgGradient: "linear-gradient(135deg, #F0F9FF 0%, #E0F2FE 50%, #BAE6FD 100%)",
    bannerBorder: "#38BDF8",
    cardGlow: "rgba(2, 132, 199, 0.15)",
    badgeBg: "#0284C7",
    textColor: "#0C4A6E",
    gregorianMonthIndex: 9, // October
  },
  {
    id: 9,
    hinduName: "Margashirsha",
    devanagari: "मार्गशीर्ष",
    gregorianSpan: "Nov – Dec",
    primaryDeity: "Lord Dattatreya",
    themeTitle: "Wisdom & Guru Principle",
    themeDescription: "Declared by Bhagavan Krishna in Gita: 'Among months, I am Margashirsha.' Celebrating Gita Jayanti and Lord Dattatreya, embodiment of supreme Jnana.",
    mantra: "मासानां मार्गशीर्षोऽहम् · ॐ दिगम्बराय विद्महे योगीशाय धीमहि तन्नो दत्तः प्रचोदयात्",
    blessing: "Attuning to the universal Guru Principle and timeless Gita wisdom.",
    accentColor: "#92400E",
    bgGradient: "linear-gradient(135deg, #FFFBEB 0%, #FEF3C7 50%, #FDE68A 100%)",
    bannerBorder: "#F59E0B",
    cardGlow: "rgba(180, 83, 9, 0.15)",
    badgeBg: "#B45309",
    textColor: "#78350F",
    gregorianMonthIndex: 10, // November
  },
  {
    id: 10,
    hinduName: "Pausha",
    devanagari: "पौष",
    gregorianSpan: "Dec – Jan",
    primaryDeity: "Surya Deva",
    themeTitle: "Vitality & Illumination",
    themeDescription: "Marks the auspicious solar transition into Uttarayana (Makar Sankranti). Offering arghya and surya namaskar for physical vitality, prana, and mental clarity.",
    mantra: "ॐ आदित्याय विद्महे प्रभाकराय धीमहि। तन्नः सूर्यः प्रचोदयात्॥",
    blessing: "Invoking radiant solar health, vigor, and luminous consciousness.",
    accentColor: "#C2410C",
    bgGradient: "linear-gradient(135deg, #FFF7ED 0%, #FFEDD5 50%, #FED7AA 100%)",
    bannerBorder: "#FB923C",
    cardGlow: "rgba(249, 115, 22, 0.15)",
    badgeBg: "#F97316",
    textColor: "#7C2D12",
    gregorianMonthIndex: 11, // December
  },
  {
    id: 11,
    hinduName: "Magha",
    devanagari: "माघ",
    gregorianSpan: "Jan – Feb",
    primaryDeity: "Goddess Saraswati",
    themeTitle: "Knowledge & Creativity",
    themeDescription: "Sacred for Vasant Panchami, Saraswati Puja, and holy Sangam snana. Fostering pure knowledge, artistic expression, vocal eloquence, and sacred learning.",
    mantra: "या कुन्देन्दुतुषारहारधवला या शुभ्रवस्त्रावृता। या वीणावरदण्डमण्डितकरा या श्वेतपद्मासना॥",
    blessing: "Awakening pure intellect, creative inspiration, and divine arts.",
    accentColor: "#4338CA",
    bgGradient: "linear-gradient(135deg, #EEF2FF 0%, #E0E7FF 50%, #C7D2FE 100%)",
    bannerBorder: "#818CF8",
    cardGlow: "rgba(99, 102, 241, 0.15)",
    badgeBg: "#6366F1",
    textColor: "#312E81",
    gregorianMonthIndex: 0, // January
  },
  {
    id: 12,
    hinduName: "Phalguna",
    devanagari: "फाल्गुन",
    gregorianSpan: "Feb – Mar",
    primaryDeity: "Radha - Krishna",
    themeTitle: "Divine Love & Joy",
    themeDescription: "Brimming with celebrations of Maha Shivratri and the ecstasy of Holi. Merging devotion into divine transcendental love, bliss, and supreme joy.",
    mantra: "हरे कृष्ण हरे कृष्ण कृष्ण कृष्ण हरे हरे। हरे राम हरे राम राम राम हरे हरे॥",
    blessing: "Infusing your life with unconditional divine love and spiritual joy.",
    accentColor: "#BE185D",
    bgGradient: "linear-gradient(135deg, #FDF2F8 0%, #FCE7F3 50%, #FBCFE8 100%)",
    bannerBorder: "#F472B6",
    cardGlow: "rgba(219, 39, 119, 0.15)",
    badgeBg: "#DB2777",
    textColor: "#831843",
    gregorianMonthIndex: 1, // February
  },
];

/**
 * Returns the corresponding Hindu Month Theme for any given Gregorian month index (0 to 11)
 */
export function getHinduMonthForGregorian(monthIndex: number): HinduMonthTheme {
  const match = HINDU_LUNAR_MONTHS.find((m) => m.gregorianMonthIndex === monthIndex);
  return match || HINDU_LUNAR_MONTHS[0];
}

/**
 * Returns sacred tithi events for a specific month (Amavasya, Purnima, Kaal Ashtami, Kaal Ratri, Ekadashi, Pradosha, Shivratri)
 */
export function getMonthSacredDates(year: number, month: number) {
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const monthDays: { day: number; age: number; date: Date }[] = [];

  for (let d = 1; d <= daysInMonth; d++) {
    const dt = new Date(year, month, d, 12, 0, 0);
    const age = moonAgeDays(dt);
    monthDays.push({ day: d, age, date: dt });
  }

  function findLocalPeakDays(targetAge: number, tolerance: number = 1.25) {
    const matched: number[] = [];
    for (let i = 0; i < monthDays.length; i++) {
      const d = monthDays[i];
      let diff = Math.abs(d.age - targetAge);
      if (targetAge === 0 || targetAge === SYNODIC) {
        diff = Math.min(d.age, Math.abs(SYNODIC - d.age));
      }
      if (diff < tolerance) {
        const prevDiff = i > 0 
          ? (targetAge === 0 ? Math.min(monthDays[i-1].age, Math.abs(SYNODIC - monthDays[i-1].age)) : Math.abs(monthDays[i-1].age - targetAge))
          : 999;
        const nextDiff = i < monthDays.length - 1
          ? (targetAge === 0 ? Math.min(monthDays[i+1].age, Math.abs(SYNODIC - monthDays[i+1].age)) : Math.abs(monthDays[i+1].age - targetAge))
          : 999;
        if (diff <= prevDiff && diff <= nextDiff) {
          if (!matched.includes(d.day)) {
            matched.push(d.day);
          }
        }
      }
    }
    return matched;
  }

  const amavasyaDays = findLocalPeakDays(0);
  const purnimaDays = findLocalPeakDays(SYNODIC / 2);
  const kaalAshtamiDays = findLocalPeakDays(SYNODIC / 2 + 7.38);
  const shuklaEkadashiDays = findLocalPeakDays(10.8);
  const krishnaEkadashiDays = findLocalPeakDays(25.5);
  const allEkadashiDays = Array.from(new Set([...shuklaEkadashiDays, ...krishnaEkadashiDays]));

  return {
    amavasya: amavasyaDays,
    purnima: purnimaDays,
    kaalAshtami: kaalAshtamiDays,
    ekadashi: allEkadashiDays,
  };
}

/**
 * Checks if a specific date falls on any sacred tithi
 */
export function getSacredTithiForDate(date: Date): SacredTithiInfo | null {
  const year = date.getFullYear();
  const month = date.getMonth();
  const day = date.getDate();

  const sacredDates = getMonthSacredDates(year, month);

  if (sacredDates.amavasya.includes(day)) {
    return {
      type: 'amavasya',
      title: 'Amavasya ●',
      shortTitle: 'Amavasya',
      icon: '●',
      badge: 'Amavasya (New Moon)',
      description: 'Auspicious day for deep dhyana, silence, ancestral tarpan & introspection.',
      color: '#E5D5B8',
      bgColor: '#181410',
      borderColor: '#B8934A',
      accentBg: 'linear-gradient(135deg, #181410 0%, #2B2319 100%)',
    };
  }
  if (sacredDates.purnima.includes(day)) {
    return {
      type: 'purnima',
      title: 'Purnima ○',
      shortTitle: 'Purnima',
      icon: '○',
      badge: 'Purnima (Full Moon)',
      description: 'Peak lunar radiance. Ideal for Satyanarayan katha, mantra chanting & heart opening.',
      color: '#1B1812',
      bgColor: '#E5BF67',
      borderColor: '#B8934A',
      accentBg: 'linear-gradient(135deg, #E5BF67 0%, #D4A738 100%)',
    };
  }
  if (sacredDates.kaalAshtami.includes(day)) {
    return {
      type: 'kaal_ashtami',
      title: 'Kaal Ashtami ⚡',
      shortTitle: 'Kaal Ashtami',
      icon: '⚡',
      badge: 'Kaal Ashtami (Bhairav)',
      description: 'Sacred to Lord Bhairava. Perfect for overcoming fears, obstacles & psychic shielding.',
      color: '#F4E8FF',
      bgColor: '#4A2A68',
      borderColor: '#A855F7',
      accentBg: 'linear-gradient(135deg, #4A2A68 0%, #341A4B 100%)',
    };
  }
  if (sacredDates.ekadashi.includes(day)) {
    return {
      type: 'ekadashi',
      title: 'Ekadashi 🪔',
      shortTitle: 'Ekadashi',
      icon: '🪔',
      badge: 'Ekadashi Vrat',
      description: 'Holy 11th tithi for fasting, detoxification, Lord Vishnu worship & mind mastery.',
      color: '#D1FAE5',
      bgColor: '#065F46',
      borderColor: '#10B981',
      accentBg: 'linear-gradient(135deg, #065F46 0%, #047857 100%)',
    };
  }

  return null;
}

/**
 * Returns Major Indian/Hindu Festivals for a given year and month
 */
export function getMajorFestivalsForMonth(year: number, month: number): Record<number, FestivalInfo[]> {
  const sacredDates = getMonthSacredDates(year, month);
  const festivals: Record<number, FestivalInfo[]> = {};

  const addFestival = (day: number, info: FestivalInfo) => {
    if (!festivals[day]) festivals[day] = [];
    festivals[day].push(info);
  };

  // January (Month 0)
  if (month === 0) {
    addFestival(14, {
      name: "Makar Sankranti / Pongal",
      hindiName: "मकर संक्रांति",
      deity: "Surya Deva",
      description: "Solar transition to Uttarayana. Auspicious donations, holy dip & sweet til-gul distribution.",
      significance: "Victory of light and harvest blessings.",
      color: "#EA580C",
      tagColor: "#F97316",
    });
    if (sacredDates.amavasya.length > 0) {
      const amavasyaDay = sacredDates.amavasya[0];
      const panchamDay = (amavasyaDay + 5) % 31;
      if (panchamDay > 15 && panchamDay <= 31) {
        addFestival(panchamDay, {
          name: "Vasant Panchami / Saraswati Puja",
          hindiName: "बसंत पंचमी",
          deity: "Goddess Saraswati",
          description: "Arrival of spring & worship of Goddess of Knowledge, arts and music.",
          significance: "Yellow garments, aksharabhyasam & wisdom invocation.",
          color: "#EAB308",
          tagColor: "#FACC15",
        });
      }
    }
  }

  // February (Month 1)
  if (month === 1) {
    if (sacredDates.amavasya.length > 0) {
      const amavDay = sacredDates.amavasya[0];
      const shivratriDay = Math.max(1, amavDay - 1);
      addFestival(shivratriDay, {
        name: "Maha Shivratri",
        hindiName: "महाशिवरात्रि",
        deity: "Lord Shiva & Goddess Parvati",
        description: "The Great Night of Shiva. All-night vigils, continuous chanting, bilva leaf offering and lingam abhisheka.",
        significance: "Transcending the senses and supreme awakening.",
        color: "#0D9488",
        tagColor: "#14B8A6",
      });
    }
  }

  // March (Month 2)
  if (month === 2) {
    if (sacredDates.purnima.length > 0) {
      const purnimaDay = sacredDates.purnima[0];
      addFestival(purnimaDay, {
        name: "Holika Dahan / Chhoti Holi",
        hindiName: "होलिका दहन",
        deity: "Lord Narasimha & Bhakta Prahlada",
        description: "Sacred bonfire celebrating the victory of genuine devotion over tyrant forces.",
        significance: "Burning of impurities and ego.",
        color: "#EA580C",
        tagColor: "#FB923C",
      });
      if (purnimaDay + 1 <= 31) {
        addFestival(purnimaDay + 1, {
          name: "Holi (Festival of Colors)",
          hindiName: "होली",
          deity: "Radha - Krishna",
          description: "Joyful celebration of divine colors, forgiveness, harmony and joyous brotherhood.",
          significance: "Spreading colors of divine love and joy.",
          color: "#DB2777",
          tagColor: "#F472B6",
        });
      }
    }

    if (sacredDates.amavasya.length > 0) {
      const amavDay = sacredDates.amavasya[0];
      const newYearDay = amavDay + 1;
      if (newYearDay <= 31) {
        addFestival(newYearDay, {
          name: "Chaitra Navratri Start / Gudi Padwa / Ugadi",
          hindiName: "चैत्र नवरात्रि / नव संवत्सर",
          deity: "Maa Durga & Lord Brahma",
          description: "Commencement of Vedic New Year and 9 days of Navratri worship.",
          significance: "Auspicious new beginnings & spiritual rejuvenation.",
          color: "#D97706",
          tagColor: "#F59E0B",
        });
      }
    }
  }

  // April (Month 3)
  if (month === 3) {
    if (sacredDates.amavasya.length > 0) {
      const ramNavamiDay = (sacredDates.amavasya[0] + 9) % 30;
      if (ramNavamiDay > 0 && ramNavamiDay <= 30) {
        addFestival(ramNavamiDay, {
          name: "Rama Navami",
          hindiName: "राम नवमी",
          deity: "Lord Rama",
          description: "Appearance day of Maryada Purushottam Lord Rama. Reading Ramayana and chanting Ram Naam.",
          significance: "Establishment of Dharma, courage & truth.",
          color: "#D97706",
          tagColor: "#F59E0B",
        });
      }
    }

    if (sacredDates.purnima.length > 0) {
      addFestival(sacredDates.purnima[0], {
        name: "Hanuman Jayanti",
        hindiName: "हनुमान जयंती",
        deity: "Lord Hanuman",
        description: "Birth celebration of Lord Hanuman. Chanting Hanuman Chalisa and Sundarkand.",
        significance: "Unconditional devotion, strength & fearlessness.",
        color: "#C2410C",
        tagColor: "#EA580C",
      });
    }
  }

  // May (Month 4)
  if (month === 4) {
    if (sacredDates.amavasya.length > 0) {
      const akshayaDay = Math.min(31, Math.max(1, sacredDates.amavasya[0] + 3));
      addFestival(akshayaDay, {
        name: "Akshaya Tritiya",
        hindiName: "अक्षय तृतीया",
        deity: "Lord Vishnu & Goddess Lakshmi",
        description: "Day of imperishable merit. Perfect for new ventures, charity, japa and sadhana.",
        significance: "Eternal prosperity and unfading blessings.",
        color: "#B45309",
        tagColor: "#D97706",
      });
    }

    if (sacredDates.purnima.length > 0) {
      addFestival(sacredDates.purnima[0], {
        name: "Buddha Purnima / Vaishakha Purnima",
        hindiName: "बुद्ध पूर्णिमा",
        deity: "Lord Buddha / Lord Vishnu",
        description: "Celebration of enlightenment, compassion, and peace.",
        significance: "Cultivating non-violence and quiet contemplation.",
        color: "#65A30D",
        tagColor: "#84CC16",
      });
    }
  }

  // June (Month 5)
  if (month === 5) {
    if (sacredDates.purnima.length > 0) {
      const gangaDay = Math.max(1, sacredDates.purnima[0] - 5);
      addFestival(gangaDay, {
        name: "Ganga Dussehra",
        hindiName: "गंगा दशहरा",
        deity: "Goddess Ganga",
        description: "Descent of River Ganga to Earth. Dip in holy waters and prayer for cleansing 10 sins.",
        significance: "Complete karmic purification and forgiveness.",
        color: "#0284C7",
        tagColor: "#38BDF8",
      });
    }
  }

  // July (Month 6)
  if (month === 6) {
    if (sacredDates.purnima.length > 0) {
      addFestival(sacredDates.purnima[0], {
        name: "Guru Purnima / Vyasa Puja",
        hindiName: "गुरु पूर्णिमा",
        deity: "Ved Vyasa & Sacred Guru Lineage",
        description: "Honoring spiritual masters and mentors who illuminate the path to liberation.",
        significance: "Expressing gratitude and surrendering ego to the Guru.",
        color: "#CA8A04",
        tagColor: "#FACC15",
      });
    }
    if (sacredDates.amavasya.length > 0) {
      const rathaDay = Math.min(31, sacredDates.amavasya[0] + 2);
      addFestival(rathaDay, {
        name: "Jagannath Ratha Yatra",
        hindiName: "जगन्नाथ रथ यात्रा",
        deity: "Lord Jagannath, Balabhadra & Subhadra",
        description: "Grand chariot procession celebrating the Lord meeting his devotees in the streets.",
        significance: "Supreme devotion and all-inclusive divine grace.",
        color: "#DC2626",
        tagColor: "#EF4444",
      });
    }
  }

  // August (Month 7)
  if (month === 7) {
    if (sacredDates.purnima.length > 0) {
      addFestival(sacredDates.purnima[0], {
        name: "Raksha Bandhan / Shravani Purnima",
        hindiName: "रक्षा बंधन",
        deity: "Lord Vishnu & Divine Siblinghood",
        description: "Sacred thread of protection, selfless love, and Gayatri Upakarma.",
        significance: "Bond of protection and mutual goodwill.",
        color: "#E11D48",
        tagColor: "#FB7185",
      });

      const janmashtamiDay = Math.min(31, sacredDates.purnima[0] + 8);
      addFestival(janmashtamiDay, {
        name: "Krishna Janmashtami",
        hindiName: "श्री कृष्ण जन्माष्टमी",
        deity: "Bhagavan Sri Krishna",
        description: "Midnight manifestation of Sri Krishna. Fasting, kirtan, makhan-mishri bhog and dancing.",
        significance: "Celebration of Supreme Joy, Wisdom and Gita essence.",
        color: "#2563EB",
        tagColor: "#60A5FA",
      });
    }
  }

  // September (Month 8)
  if (month === 8) {
    if (sacredDates.amavasya.length > 0) {
      const ganeshDay = Math.min(30, sacredDates.amavasya[0] + 4);
      addFestival(ganeshDay, {
        name: "Ganesh Chaturthi",
        hindiName: "गणेश चतुर्थी",
        deity: "Lord Ganesha",
        description: "Grand installation of Ganapati Bappa. Modak offerings, aarti and joyous celebrations.",
        significance: "Removal of all hindrances and wisdom bestowed.",
        color: "#D97706",
        tagColor: "#F59E0B",
      });

      const radhaDay = Math.min(30, sacredDates.amavasya[0] + 8);
      addFestival(radhaDay, {
        name: "Radha Ashtami",
        hindiName: "राधा अष्टमी",
        deity: "Srimati Radharani",
        description: "Appearance of the embodiment of supreme Bhakti and pure selfless devotion.",
        significance: "Divine love, humility, and transcendental bliss.",
        color: "#DB2777",
        tagColor: "#F472B6",
      });
    }
  }

  // October (Month 9)
  if (month === 9) {
    if (sacredDates.amavasya.length > 0) {
      const navratriStart = Math.min(31, sacredDates.amavasya[0] + 1);
      addFestival(navratriStart, {
        name: "Sharad Navratri Start (Ghatasthapana)",
        hindiName: "शारदीय नवरात्रि प्रारंभ",
        deity: "Maa Durga & Navadurga",
        description: "Nine holy nights honoring Goddess Durga, Lakshmi and Saraswati.",
        significance: "Awakening Shakti for inner victory.",
        color: "#BE123C",
        tagColor: "#F43F5E",
      });

      const dussehraDay = Math.min(31, sacredDates.amavasya[0] + 10);
      addFestival(dussehraDay, {
        name: "Vijayadashami / Dussehra",
        hindiName: "विजयादशमी / दशहरा",
        deity: "Lord Rama & Goddess Durga",
        description: "Victory of Lord Rama over Ravana and Maa Durga over Mahishasura.",
        significance: "Triumph of Dharma, truth and light over dark ego.",
        color: "#EA580C",
        tagColor: "#FB923C",
      });
    }

    if (sacredDates.purnima.length > 0) {
      const karwaDay = Math.min(31, sacredDates.purnima[0] + 4);
      addFestival(karwaDay, {
        name: "Karwa Chauth",
        hindiName: "करवा चौथ",
        deity: "Lord Shiva, Parvati & Chandra Deva",
        description: "Nirjala fast observed for marital longevity, devotion and family harmony.",
        significance: "Unconditional love, faith and moon worship.",
        color: "#E11D48",
        tagColor: "#FB7185",
      });
    }
  }

  // November (Month 10)
  if (month === 10) {
    if (sacredDates.amavasya.length > 0) {
      const amavDay = sacredDates.amavasya[0];
      const dhanterasDay = Math.max(1, amavDay - 2);
      addFestival(dhanterasDay, {
        name: "Dhanteras (Dhanwantari Jayanti)",
        hindiName: "धनतेरस",
        deity: "Lord Dhanwantari & Goddess Lakshmi",
        description: "Celebration of holistic health, sacred healing herbs, gold and new utensils.",
        significance: "Divine health, abundance and spiritual wealth.",
        color: "#CA8A04",
        tagColor: "#FACC15",
      });

      addFestival(amavDay, {
        name: "Diwali / Deepawali (Maha Lakshmi Puja)",
        hindiName: "दीपावली / महालक्ष्मी पूजन",
        deity: "Goddess Lakshmi, Lord Ganesha & Lord Rama",
        description: "Grand Festival of Lights! Lighting millions of deepaks, welcoming Rama to Ayodhya.",
        significance: "Total victory of light over ignorance and dispelling all darkness.",
        color: "#D97706",
        tagColor: "#F59E0B",
      });

      if (amavDay + 1 <= 30) {
        addFestival(amavDay + 1, {
          name: "Govardhan Puja / Annakut",
          hindiName: "गोवर्धन पूजा / अन्नकूट",
          deity: "Lord Krishna & Giriraj Govardhan",
          description: "Massive feast offering 56 bhog to Govardhan Hill and cow veneration.",
          significance: "Gratitude to Mother Nature and Lord's supreme shelter.",
          color: "#059669",
          tagColor: "#10B981",
        });
      }

      const chhathDay = Math.min(30, amavDay + 6);
      addFestival(chhathDay, {
        name: "Chhath Puja (Sandhya Arghya)",
        hindiName: "छठ पूजा",
        deity: "Surya Deva & Chhathi Maiya",
        description: "Sacred rigorous Sun worship on riverbanks with arghya at dusk and dawn.",
        significance: "Purity, discipline, life vitality and health.",
        color: "#EA580C",
        tagColor: "#F97316",
      });
    }

    if (sacredDates.purnima.length > 0) {
      addFestival(sacredDates.purnima[0], {
        name: "Dev Deepawali / Kartika Purnima",
        hindiName: "देव दीपावली / कार्तिक पूर्णिमा",
        deity: "Lord Shiva (Tripurari) & Lord Vishnu",
        description: "Celebrated in Varanasi where Gods descend to light ghats with countless lamps.",
        significance: "Ultimate spiritual illumination and liberation.",
        color: "#B45309",
        tagColor: "#D97706",
      });
    }
  }

  // December (Month 11)
  if (month === 11) {
    if (sacredDates.purnima.length > 0) {
      const purnimaDay = sacredDates.purnima[0];
      const gitaDay = Math.max(1, purnimaDay - 4);
      addFestival(gitaDay, {
        name: "Gita Jayanti / Mokshada Ekadashi",
        hindiName: "गीता जयंती",
        deity: "Bhagavan Sri Krishna",
        description: "The auspicious day Bhagavan Krishna spoke the Bhagavad Gita to Arjuna in Kurukshetra.",
        significance: "Liberation through supreme knowledge, devotion and action.",
        color: "#2563EB",
        tagColor: "#3B82F6",
      });

      addFestival(purnimaDay, {
        name: "Dattatreya Jayanti",
        hindiName: "दत्तात्रेय जयंती",
        deity: "Lord Dattatreya (Trimurti Avatara)",
        description: "Celebration of the supreme Adi Guru Dattatreya, embodiment of Brahma, Vishnu and Shiva.",
        significance: "Guru grace, non-attachment and constant learning.",
        color: "#B45309",
        tagColor: "#F59E0B",
      });
    }
  }

  return festivals;
}
