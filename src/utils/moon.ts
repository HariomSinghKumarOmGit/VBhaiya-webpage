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
    bgGradient: "linear-gradient(135deg, #1D4B3E 0%, #13382D 100%)",
    badgeBg: "rgba(255,255,255,0.15)",
    textColor: "#FFFFFF",
    cardType: "green",
    mantra: "ॐ सूर्याय नमः (Om Suryaya Namah)",
    focus: "Collective sadhana, divine communion, direct experiential transmission.",
  },
};

export const ADDITIONAL_PRACTICE = {
  category: "ADDITIONAL PRACTICES",
  title: "Kaal Ashtami & Kaal Ratri Hawan",
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

export interface MonthSacredData {
  amavasya: number[];
  purnima: number[];
  kaalAshtami: number[];
  ekadashi: number[];
}

/**
 * Authentic 2026 Sacred Dates from hindu_calendar_2026_2027.pdf
 * (Month index: 0 = Jan, 1 = Feb, ..., 11 = Dec)
 */
export const HINDU_SACRED_DATES_2026: Record<number, MonthSacredData> = {
  0: { // Jan
    amavasya: [18],
    purnima: [3],
    kaalAshtami: [10],
    ekadashi: [14, 29],
  },
  1: { // Feb
    amavasya: [17],
    purnima: [1],
    kaalAshtami: [9],
    ekadashi: [13, 27],
  },
  2: { // Mar
    amavasya: [18],
    purnima: [3],
    kaalAshtami: [11],
    ekadashi: [14, 29],
  },
  3: { // Apr
    amavasya: [17],
    purnima: [1],
    kaalAshtami: [10],
    ekadashi: [13, 27],
  },
  4: { // May
    amavasya: [16],
    purnima: [1, 31],
    kaalAshtami: [9],
    ekadashi: [13, 27],
  },
  5: { // Jun
    amavasya: [15],
    purnima: [29],
    kaalAshtami: [8],
    ekadashi: [11, 26],
  },
  6: { // Jul
    amavasya: [14],
    purnima: [29],
    kaalAshtami: [7],
    ekadashi: [11, 25],
  },
  7: { // Aug
    amavasya: [12],
    purnima: [28],
    kaalAshtami: [5],
    ekadashi: [9, 24],
  },
  8: { // Sep
    amavasya: [10],
    purnima: [26],
    kaalAshtami: [4],
    ekadashi: [8, 22],
  },
  9: { // Oct
    amavasya: [10],
    purnima: [25],
    kaalAshtami: [3],
    ekadashi: [7, 22],
  },
  10: { // Nov
    amavasya: [9],
    purnima: [24],
    kaalAshtami: [1],
    ekadashi: [5, 21],
  },
  11: { // Dec
    amavasya: [9],
    purnima: [23],
    kaalAshtami: [1, 30],
    ekadashi: [5, 20],
  },
};

/**
 * Authentic 2027 Sacred Dates from hindu_calendar_2026_2027.pdf
 * (Month index: 0 = Jan, 1 = Feb, ..., 11 = Dec)
 */
export const HINDU_SACRED_DATES_2027: Record<number, MonthSacredData> = {
  0: { // Jan
    amavasya: [7],
    purnima: [22],
    kaalAshtami: [29],
    ekadashi: [3, 18],
  },
  1: { // Feb
    amavasya: [6],
    purnima: [21],
    kaalAshtami: [28],
    ekadashi: [2, 17],
  },
  2: { // Mar
    amavasya: [8],
    purnima: [22],
    kaalAshtami: [30],
    ekadashi: [4, 18],
  },
  3: { // Apr
    amavasya: [6],
    purnima: [20],
    kaalAshtami: [28],
    ekadashi: [2, 17],
  },
  4: { // May
    amavasya: [6],
    purnima: [20],
    kaalAshtami: [28],
    ekadashi: [2, 16, 31],
  },
  5: { // Jun
    amavasya: [4],
    purnima: [19],
    kaalAshtami: [26],
    ekadashi: [15, 30],
  },
  6: { // Jul
    amavasya: [4],
    purnima: [18],
    kaalAshtami: [26],
    ekadashi: [15, 29],
  },
  7: { // Aug
    amavasya: [2, 31],
    purnima: [17],
    kaalAshtami: [25],
    ekadashi: [13, 28],
  },
  8: { // Sep
    amavasya: [30],
    purnima: [15],
    kaalAshtami: [23],
    ekadashi: [12, 26],
  },
  9: { // Oct
    amavasya: [29],
    purnima: [15],
    kaalAshtami: [22],
    ekadashi: [11, 26],
  },
  10: { // Nov
    amavasya: [28],
    purnima: [14],
    kaalAshtami: [21],
    ekadashi: [9, 24],
  },
  11: { // Dec
    amavasya: [28],
    purnima: [13],
    kaalAshtami: [21],
    ekadashi: [9, 24],
  },
};

/**
 * Authentic 2026 Key Festivals from hindu_calendar_2026_2027.pdf
 */
export const HINDU_FESTIVALS_2026: Record<number, Record<number, FestivalInfo[]>> = {
  0: { // Jan
    14: [{
      name: "Makar Sankranti",
      hindiName: "मकर संक्रांति",
      deity: "Surya Deva",
      description: "Auspicious solar transition into Uttarayana. Holy dips, charity, Surya Arghya, and sweet til-gul distribution.",
      significance: "Victory of light and abundance; beginning of the sun's northward cosmic journey.",
      color: "#EA580C",
      tagColor: "#F97316",
    }],
    22: [{
      name: "Vasant Panchami",
      hindiName: "बसंत पंचमी (सरस्वती पूजा)",
      deity: "Goddess Saraswati",
      description: "Arrival of springtime and worship of Maa Saraswati, the embodiment of wisdom, fine arts, music, and pure learning.",
      significance: "Invocation of highest intellect (Medha), sacred Vidyarambha, and wearing yellow garments.",
      color: "#D97706",
      tagColor: "#F59E0B",
    }],
  },
  1: { // Feb
    15: [{
      name: "Maha Shivaratri",
      hindiName: "महाशिवरात्रि",
      deity: "Lord Shiva & Goddess Parvati",
      description: "The Great Night of Shiva. Night-long vigils, continuous chanting of Om Namah Shivaya, Bilva leaf offerings, and sacred Shiva lingam abhisheka.",
      significance: "Transcending the senses, dissolution of ego, and absorption into supreme cosmic stillness.",
      color: "#0D9488",
      tagColor: "#14B8A6",
    }],
  },
  2: { // Mar
    3: [{
      name: "Holi",
      hindiName: "होली / होलिका दहन",
      deity: "Radha - Krishna & Bhakta Prahlada",
      description: "Joyous celebration of divine love, sacred bonfire burning away impurities, and sharing vibrant sacred colors of unity.",
      significance: "Triumph of unwavering devotion over tyranny, renewal of hearts, and unconditional divine love.",
      color: "#DB2777",
      tagColor: "#F472B6",
    }],
    19: [{
      name: "Chaitra Navratri / Ugadi",
      hindiName: "चैत्र नवरात्रि / गुड़ी पड़वा / उगादी",
      deity: "Maa Durga & Lord Brahma",
      description: "Commencement of the Vedic New Year (Nav Samvatsar) and the nine holy days of Chaitra Navratri sadhana and Devi invocation.",
      significance: "Spiritual renewal, fresh righteous beginnings, and awakening the primordial creative Shakti.",
      color: "#D97706",
      tagColor: "#F59E0B",
    }],
  },
  3: { // Apr
    26: [{
      name: "Sita Navami",
      hindiName: "सीता नवमी",
      deity: "Maa Sita & Lord Rama",
      description: "Sacred appearance day of Mother Sita (Janaki Jayanti), the supreme embodiment of dedication, virtue, sacrifice, and grace.",
      significance: "Cultivating patience, selfless devotion, inner purity, and unwavering fidelity to Dharma.",
      color: "#E11D48",
      tagColor: "#FB7185",
    }],
  },
  4: { // May
    18: [{
      name: "Jyeshtha Amavasya (Vat Savitri)",
      hindiName: "ज्येष्ठ अमावस्या (वट सावित्री व्रत)",
      deity: "Savitri, Satyavan & Lord Yama",
      description: "Sacred worship around the immortal Banyan tree (Vat Vriksha), praying for family longevity, health, and marital bliss.",
      significance: "Power of steadfast devotion, triumph over mortality, and deep reverence for nature.",
      color: "#059669",
      tagColor: "#10B981",
    }],
  },
  5: { // Jun
    16: [{
      name: "Jagannath Ratha Yatra",
      hindiName: "जगन्नाथ रथ यात्रा",
      deity: "Lord Jagannath, Balabhadra & Subhadra",
      description: "Grand chariot procession from Jagannath Temple to Gundicha Temple in Puri, where the Lord of the Universe meets all devotees on the streets.",
      significance: "Universal grace, all-inclusive divine embrace, and inner pilgrimage of the soul toward liberation.",
      color: "#DC2626",
      tagColor: "#EF4444",
    }],
  },
  6: { // Jul
    29: [{
      name: "Guru Purnima",
      hindiName: "गुरु पूर्णिमा (व्यास पूजा)",
      deity: "Maharishi Ved Vyasa & Guru Parampara",
      description: "Sacred full moon honoring the spiritual master and lineage of sages who dispel the darkness of ignorance and guide the soul to light.",
      significance: "Heartfelt gratitude to the Guru, surrender of ego, and rededication to daily spiritual practice.",
      color: "#CA8A04",
      tagColor: "#FACC15",
    }],
  },
  7: { // Aug
    16: [{
      name: "Hariyali Teej",
      hindiName: "हरियाली तीज",
      deity: "Lord Shiva & Goddess Parvati",
      description: "Monsoon festival celebrating the divine reunion of Shiva and Parvati, welcoming lush green nature with joyful songs and prayers.",
      significance: "Marital harmony, conjugal happiness, devotion, and alignment with the rejuvenating rhythm of earth.",
      color: "#059669",
      tagColor: "#10B981",
    }],
    28: [{
      name: "Raksha Bandhan",
      hindiName: "रक्षा बंधन (श्रावणी पूर्णिमा)",
      deity: "Lord Vishnu & Divine Siblinghood",
      description: "Sacred knot of protection tied on the wrist with prayers for goodwill, duty, and eternal fraternal care.",
      significance: "Mutual protection, selfless love, family purity, and sacred Gayatri Upakarma renewal.",
      color: "#BE123C",
      tagColor: "#E11D48",
    }],
  },
  8: { // Sep
    4: [{
      name: "Krishna Janmashtami",
      hindiName: "श्री कृष्ण जन्माष्टमी",
      deity: "Bhagavan Sri Krishna",
      description: "Midnight manifestation of Bhagavan Sri Krishna in Mathura. Fasting, kirtan, bathing of Laddu Gopal, and midnight joy.",
      significance: "Celebration of Supreme Consciousness, Gita wisdom, playful divine love, and total refuge.",
      color: "#2563EB",
      tagColor: "#3B82F6",
    }],
    15: [{
      name: "Ganesh Chaturthi",
      hindiName: "गणेश चतुर्थी (विनायक चतुर्थी)",
      deity: "Lord Ganesha",
      description: "Grand arrival of Vignaharta Lord Ganesha. Modak offerings, Vedic stotras, and hearty joyous family celebrations.",
      significance: "Dissolution of all obstacles, bestowal of auspicious intellect (Buddhi), and blessed beginnings.",
      color: "#D97706",
      tagColor: "#F59E0B",
    }],
  },
  9: { // Oct
    10: [{
      name: "Mahalaya",
      hindiName: "महालय (सर्वपितृ अमावस्या)",
      deity: "Pitru Devas & Maa Durga",
      description: "Culmination of Pitru Paksha with sacred Tarpan for departed ancestors, marking the auspicious dawn of Devi Paksha.",
      significance: "Honoring ancestral lineage, clearing karmic debts, and welcoming Maa Durga down to earth.",
      color: "#475569",
      tagColor: "#64748B",
    }],
    11: [{
      name: "Navratri Begins",
      hindiName: "शारदीय नवरात्रि प्रारंभ (घटस्थापना)",
      deity: "Maa Durga & Navadurga",
      description: "Sacred Ghatasthapana commencing nine holy nights of profound Shakti sadhana, fasting, and Akhand Jyoti meditation.",
      significance: "Awakening divine inner power, conquering negative tendencies, and spiritual transformation.",
      color: "#BE123C",
      tagColor: "#E11D48",
    }],
    20: [{
      name: "Dussehra",
      hindiName: "विजयादशमी / दशहरा",
      deity: "Lord Rama & Maa Durga",
      description: "Celebration of Lord Rama conquering Ravana and Goddess Durga annihilating Mahishasura after nine nights of battle.",
      significance: "Eternal triumph of Dharma over Adharma, truth over falsehood, and divine consciousness over ego.",
      color: "#EA580C",
      tagColor: "#FB923C",
    }],
  },
  10: { // Nov
    8: [{
      name: "Diwali",
      hindiName: "दीपावली (महालक्ष्मी पूजन)",
      deity: "Goddess Lakshmi, Lord Ganesha & Lord Rama",
      description: "The grand Festival of Lights! Millions of earthen ghee lamps illuminate homes to welcome Lord Rama back to Ayodhya and invoke Maha Lakshmi.",
      significance: "Total victory of spiritual illumination over inner darkness, abundance, and righteous prosperity.",
      color: "#D97706",
      tagColor: "#F59E0B",
    }],
    10: [{
      name: "Govardhan Puja",
      hindiName: "गोवर्धन पूजा / अन्नकूट",
      deity: "Lord Krishna & Giriraj Govardhan",
      description: "Worship of Mount Govardhan and Mother Cow, offering 56 sacred delicacies (Annakut) in reverence of Krishna's divine shelter.",
      significance: "Deep gratitude to Mother Nature, ecological harmony, and wholehearted surrender to Krishna.",
      color: "#059669",
      tagColor: "#10B981",
    }],
    11: [{
      name: "Bhai Dooj",
      hindiName: "भाई दूज (यम द्वितीया)",
      deity: "Goddess Yamuna & Yamaraj",
      description: "Auspicious tilak ceremony between sisters and brothers, commemorating the sacred affection between Yamuna and Yama.",
      significance: "Protection from untimely suffering, mutual longevity, and celebration of pure familial bond.",
      color: "#E11D48",
      tagColor: "#FB7185",
    }],
  },
  11: { // Dec
    23: [{
      name: "Dattatreya Jayanti",
      hindiName: "दत्तात्रेय जयंती",
      deity: "Lord Dattatreya (Trimurti Avatara)",
      description: "Appearance anniversary of Lord Dattatreya, the primordial Adi Guru combining the powers of Brahma, Vishnu, and Shiva.",
      significance: "Non-attachment, viewing the entire universe as Guru, and attainment of ultimate self-knowledge (Atma Jnana).",
      color: "#B45309",
      tagColor: "#D97706",
    }],
  },
};

/**
 * Authentic 2027 Key Festivals from hindu_calendar_2026_2027.pdf
 */
export const HINDU_FESTIVALS_2027: Record<number, Record<number, FestivalInfo[]>> = {
  0: { // Jan
    14: [{
      name: "Makar Sankranti",
      hindiName: "मकर संक्रांति",
      deity: "Surya Deva",
      description: "Auspicious solar ingress into Capricorn (Makara Rashi). Sacred bathing, charity, and prayers for health and vigor.",
      significance: "Welcoming longer, luminous days, harvest blessings, and sun worship.",
      color: "#EA580C",
      tagColor: "#F97316",
    }],
    22: [{
      name: "Paush Purnima",
      hindiName: "पौष पूर्णिमा (शाकंभरी जयंती)",
      deity: "Lord Vishnu, Surya Deva & Shakambhari Devi",
      description: "Sacred full moon marking the culmination of the Paush month austerities and the descent of Mother Shakambhari.",
      significance: "Holy sangam bath, charitable offerings, and prayers for nourishment and abundance.",
      color: "#D97706",
      tagColor: "#F59E0B",
    }],
  },
  1: { // Feb
    11: [{
      name: "Vasant Panchami",
      hindiName: "बसंत पंचमी (सरस्वती पूजन)",
      deity: "Goddess Saraswati",
      description: "Worship of the Goddess of Knowledge, Music, and the Arts on the arrival of the spring season.",
      significance: "Initiation into sacred wisdom, intellectual clarity, and divine artistic inspiration.",
      color: "#D97706",
      tagColor: "#F59E0B",
    }],
  },
  2: { // Mar
    6: [{
      name: "Maha Shivaratri",
      hindiName: "महाशिवरात्रि",
      deity: "Lord Shiva & Goddess Parvati",
      description: "The Great Night of Shiva. Continuous meditative absorption, Rudrabhisheka, fasting, and sacred vigil.",
      significance: "Awakening of transcendent Shiva consciousness and liberation from karmic bondages.",
      color: "#0D9488",
      tagColor: "#14B8A6",
    }],
    22: [{
      name: "Holi",
      hindiName: "होली / होलिका दहन",
      deity: "Radha - Krishna & Bhakta Prahlada",
      description: "Joyful festival of colors commemorating Prahlada's victory and the divine pastimes of Radha-Krishna.",
      significance: "Forgiveness of past differences, spreading divine love, and burning internal negativities.",
      color: "#DB2777",
      tagColor: "#F472B6",
    }],
  },
  3: { // Apr
    7: [{
      name: "Chaitra Navratri / Gudi Padwa",
      hindiName: "चैत्र नवरात्रि / गुड़ी पड़वा",
      deity: "Maa Durga & Lord Brahma",
      description: "Commencement of the Hindu New Year (Vikram Samvat) and opening day of 9 days of Navratri worship.",
      significance: "Righteous resolutions, raising the victory flag (Gudi), and invoking maternal cosmic grace.",
      color: "#D97706",
      tagColor: "#F59E0B",
    }],
    15: [{
      name: "Ram Navami",
      hindiName: "राम नवमी",
      deity: "Lord Rama",
      description: "Auspicious birth of Maryada Purushottam Lord Rama at midday in Ayodhya. Chanting of Rama Raksha and Ramayana parayana.",
      significance: "Establishment of Dharma, exemplary moral conduct, and supreme divine grace.",
      color: "#D97706",
      tagColor: "#F59E0B",
    }],
  },
  4: { // May
    9: [{
      name: "Akshaya Tritiya",
      hindiName: "अक्षय तृतीया (आखा तीज)",
      deity: "Lord Vishnu & Goddess Lakshmi",
      description: "The day of eternal, imperishable spiritual merit (Akshaya). Ideal for sacred beginnings, charity, and japa.",
      significance: "Infinite returns on righteous actions and perpetual prosperity.",
      color: "#B45309",
      tagColor: "#D97706",
    }],
    20: [{
      name: "Buddha Purnima",
      hindiName: "बुद्ध पूर्णिमा / वैशाख पूर्णिमा",
      deity: "Lord Buddha / Lord Vishnu",
      description: "Sacred full moon commemorating the birth, enlightenment, and Mahaparinirvana of Gautama Buddha.",
      significance: "Universal compassion, ahimsa (non-violence), deep meditation, and mindful living.",
      color: "#65A30D",
      tagColor: "#84CC16",
    }],
  },
  5: { // Jun
    5: [{
      name: "Shani Amavasya",
      hindiName: "शनि अमावस्या (शनि जयंती)",
      deity: "Lord Shani Dev",
      description: "Rare and potent confluence of Lord Shani's sacred day and Amavasya. Mustard oil offering, Hanuman Chalisa, and charity to the needy.",
      significance: "Mitigation of Saturn-related afflictions, karmic purification, patience, and duty.",
      color: "#1E293B",
      tagColor: "#334155",
    }],
  },
  6: { // Jul
    5: [{
      name: "Jagannath Ratha Yatra",
      hindiName: "जगन्नाथ रथ यात्रा",
      deity: "Lord Jagannath, Balabhadra & Subhadra",
      description: "Grand chariot procession through Puri streets where the Lord personally comes out to bless all beings unconditionally.",
      significance: "Universal grace, devotion without barriers, and liberation for all who behold the chariot.",
      color: "#DC2626",
      tagColor: "#EF4444",
    }],
    18: [{
      name: "Guru Purnima",
      hindiName: "गुरु पूर्णिमा (व्यास पूजा)",
      deity: "Maharishi Ved Vyasa & Guru Lineage",
      description: "Honoring spiritual masters who dispel darkness and illuminate the path of realization.",
      significance: "Surrendering the ego at the lotus feet of the Guru and deep gratitude for guidance.",
      color: "#CA8A04",
      tagColor: "#FACC15",
    }],
  },
  7: { // Aug
    24: [{
      name: "Krishna Janmashtami",
      hindiName: "श्री कृष्ण जन्माष्टमी",
      deity: "Bhagavan Sri Krishna",
      description: "Midnight manifestation of Lord Krishna. Continuous bhajans, fasting, and celebrating the birth of the Supreme Lord.",
      significance: "Supreme devotion, release from earthly fears, and awakening divine joy.",
      color: "#2563EB",
      tagColor: "#3B82F6",
    }],
  },
  8: { // Sep
    4: [{
      name: "Ganesh Chaturthi",
      hindiName: "गणेश चतुर्थी",
      deity: "Lord Ganesha",
      description: "Grand welcome of Ganapati Bappa into homes and pandals with modak offerings and Vedic prayers.",
      significance: "Removal of obstacles, gift of discrimination, and joyous spiritual grounding.",
      color: "#D97706",
      tagColor: "#F59E0B",
    }],
    15: [{
      name: "Anant Chaturdashi",
      hindiName: "अनंत चतुर्दशी (गणेश विसर्जन)",
      deity: "Lord Vishnu (Ananta) & Lord Ganesha",
      description: "Observance of the sacred Ananta Vrata with the 14-knot sacred thread and grand immersion procession of Ganesha idols.",
      significance: "Surrender to the infinite nature of the Supreme Lord and seeking eternal divine protection.",
      color: "#0284C7",
      tagColor: "#38BDF8",
    }],
  },
  9: { // Oct
    1: [{
      name: "Mahalaya",
      hindiName: "महालय (सर्वपितृ मोक्ष अमावस्या)",
      deity: "Pitru Devas & Maa Durga",
      description: "Final day of Pitru Paksha honoring ancestors with tarpan, heralding the glorious onset of Devi Durga's arrival.",
      significance: "Ancestral peace, liberation of souls, and welcoming cosmic Mother energy.",
      color: "#475569",
      tagColor: "#64748B",
    }],
    10: [{
      name: "Dussehra",
      hindiName: "विजयादशमी / दशहरा",
      deity: "Lord Rama & Maa Durga",
      description: "Celebration of victorious righteousness over demonic ego, marking Rama's victory over Ravana and Durga's victory over Mahishasura.",
      significance: "Triumph of Dharma, inner courage, and destruction of spiritual impediments.",
      color: "#EA580C",
      tagColor: "#FB923C",
    }],
    29: [{
      name: "Diwali Puja",
      hindiName: "दीपावली / महालक्ष्मी पूजन",
      deity: "Goddess Lakshmi & Lord Ganesha",
      description: "The grand Festival of Lights celebrating Maha Lakshmi Puja on Amavasya night, lighting countless deepaks.",
      significance: "Dispelling darkness, welcoming righteous wealth, peace, and spiritual illumination.",
      color: "#D97706",
      tagColor: "#F59E0B",
    }],
  },
  10: { // Nov
    8: [{
      name: "Dev Deepawali",
      hindiName: "देव दीपावली (कार्तिक पूर्णिमा)",
      deity: "Lord Shiva (Tripurari) & Lord Vishnu",
      description: "Divine Diwali celebrated by the Devas in Kashi (Varanasi), bathing all ghats with millions of glowing diyas.",
      significance: "Celebration of Shiva slaying the demon Tripurasura and ultimate spiritual illumination.",
      color: "#B45309",
      tagColor: "#D97706",
    }],
  },
  11: { // Dec
    13: [{
      name: "Margashirsha Purnima",
      hindiName: "मार्गशीर्ष पूर्णिमा (दत्तात्रेय जयंती)",
      deity: "Lord Dattatreya & Chandra Deva",
      description: "Sacred full moon of Margashirsha month, celebrating the appearance of Lord Dattatreya, embodiment of the supreme Guru Tattva.",
      significance: "Gita wisdom, supreme detachment, and receiving the eternal blessings of the Trinity.",
      color: "#B45309",
      tagColor: "#D97706",
    }],
  },
};

/**
 * Returns sacred tithi events for a specific month (Amavasya, Purnima, Kaal Ashtami, Ekadashi)
 * Uses accurate standard Udayatithi Panchang data for 2026 and 2027 from PDF;
 * falls back to calculated peak days for other years.
 */
export function getMonthSacredDates(year: number, month: number): MonthSacredData {
  if (year === 2026 && HINDU_SACRED_DATES_2026[month]) {
    return HINDU_SACRED_DATES_2026[month];
  }
  if (year === 2027 && HINDU_SACRED_DATES_2027[month]) {
    return HINDU_SACRED_DATES_2027[month];
  }

  // Algorithmic fallback for years outside 2026-2027
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
 * Returns Major Indian/Hindu Festivals for a given year and month.
 * Uses exact verified festival dates from hindu_calendar_2026_2027.pdf for 2026 and 2027.
 */
export function getMajorFestivalsForMonth(year: number, month: number): Record<number, FestivalInfo[]> {
  if (year === 2026 && HINDU_FESTIVALS_2026[month]) {
    return HINDU_FESTIVALS_2026[month];
  }
  if (year === 2027 && HINDU_FESTIVALS_2027[month]) {
    return HINDU_FESTIVALS_2027[month];
  }

  // Fallback for other years
  const sacredDates = getMonthSacredDates(year, month);
  const festivals: Record<number, FestivalInfo[]> = {};

  const addFestival = (day: number, info: FestivalInfo) => {
    if (!festivals[day]) festivals[day] = [];
    festivals[day].push(info);
  };

  if (month === 0) {
    addFestival(14, {
      name: "Makar Sankranti",
      hindiName: "मकर संक्रांति",
      deity: "Surya Deva",
      description: "Solar transition into Uttarayana. Holy dips and sweet til-gul distribution.",
      significance: "Victory of light and abundance.",
      color: "#EA580C",
      tagColor: "#F97316",
    });
  } else if (month === 1 && sacredDates.amavasya.length > 0) {
    addFestival(Math.max(1, sacredDates.amavasya[0] - 1), {
      name: "Maha Shivaratri",
      hindiName: "महाशिवरात्रि",
      deity: "Lord Shiva & Goddess Parvati",
      description: "The Great Night of Shiva. Continuous chanting and lingam abhisheka.",
      significance: "Transcending the senses and supreme awakening.",
      color: "#0D9488",
      tagColor: "#14B8A6",
    });
  }

  return festivals;
}

