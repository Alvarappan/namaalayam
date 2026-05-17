import { MhahPanchang } from "mhah-panchang";

const mhah = new MhahPanchang();

// Madurai — canonical reference location for Tamil panchangam
export const MADURAI = { lat: 9.9195, lng: 78.1193 };

// ── Tamil name maps (indexed by mhah's `ino` field) ──────────────────────────

const TITHI_TA_SHUKLA = [
  "பிரதமை", "துவிதியை", "திரிதியை", "சதுர்த்தி", "பஞ்சமி",
  "சஷ்டி", "சப்தமி", "அஷ்டமி", "நவமி", "தசமி",
  "ஏகாதசி", "துவாதசி", "த்ரயோதசி", "சதுர்த்தசி", "பௌர்ணமி",
];
const TITHI_TA_KRISHNA = [
  "பிரதமை", "துவிதியை", "திரிதியை", "சதுர்த்தி", "பஞ்சமி",
  "சஷ்டி", "சப்தமி", "அஷ்டமி", "நவமி", "தசமி",
  "ஏகாதசி", "துவாதசி", "த்ரயோதசி", "சதுர்த்தசி", "அமாவாசை",
];

const NAKSHATRA_TA = [
  "அஸ்வினி", "பரணி", "கார்த்திகை", "ரோகிணி", "மிருகசீரிஷம்",
  "திருவாதிரை", "புனர்பூசம்", "பூசம்", "ஆயில்யம்", "மகம்",
  "பூரம்", "உத்திரம்", "அஸ்தம்", "சித்திரை", "சுவாதி",
  "விசாகம்", "அனுஷம்", "கேட்டை", "மூலம்", "பூராடம்",
  "உத்திராடம்", "திருவோணம்", "அவிட்டம்", "சதயம்", "பூரட்டாதி",
  "உத்திரட்டாதி", "ரேவதி",
];

const YOGA_TA = [
  "விஷ்கம்பம்", "பிரீதி", "ஆயுஷ்மான்", "சௌபாக்கியம்", "சோபனம்",
  "அதிகண்டம்", "சுகர்மா", "த்ரிதி", "சூலம்", "கண்டம்",
  "விருத்தி", "த்ருவம்", "வ்யாகாதம்", "ஹர்ஷனம்", "வஜ்ரம்",
  "சித்தி", "வ்யதிபாதம்", "வரியான்", "பரிகம்", "சிவம்",
  "சித்தம்", "சாத்யம்", "சுபம்", "சுக்லம்", "பிரம்மா",
  "இந்திரம்", "வைதிருதி",
];

const KARANA_TA = [
  "பாலவ", "பாலவ", "கௌலவ", "தைதிலா", "கரஜி",
  "வணிஜ", "விஷ்டி", "சகுனி", "சதுஷ்பாதம்", "நாகவம்", "கிம்ஸ்துக்னம்",
];

const WEEKDAY_TA = [
  "ஞாயிறு", "திங்கள்", "செவ்வாய்", "புதன்", "வியாழன்", "வெள்ளி", "சனி",
];

// ── Tamil months & years ──────────────────────────────────────────────────────

interface TamilMonthRef { name: string; native: string; startMonth: number; startDay: number; }

// Tamil solar months begin on these approximate Gregorian dates (varies ±1 day)
const TAMIL_MONTHS: TamilMonthRef[] = [
  { name: "Chithirai",  native: "சித்திரை",   startMonth: 3,  startDay: 14 },
  { name: "Vaikasi",    native: "வைகாசி",     startMonth: 4,  startDay: 15 },
  { name: "Aani",       native: "ஆனி",        startMonth: 5,  startDay: 15 },
  { name: "Aadi",       native: "ஆடி",        startMonth: 6,  startDay: 17 },
  { name: "Aavani",     native: "ஆவணி",       startMonth: 7,  startDay: 17 },
  { name: "Purattaasi", native: "புரட்டாசி",   startMonth: 8,  startDay: 17 },
  { name: "Aippasi",    native: "ஐப்பசி",     startMonth: 9,  startDay: 18 },
  { name: "Karthigai",  native: "கார்த்திகை", startMonth: 10, startDay: 16 },
  { name: "Margazhi",   native: "மார்கழி",    startMonth: 11, startDay: 16 },
  { name: "Thai",       native: "தை",         startMonth: 0,  startDay: 14 },
  { name: "Maasi",      native: "மாசி",       startMonth: 1,  startDay: 13 },
  { name: "Panguni",    native: "பங்குனி",     startMonth: 2,  startDay: 15 },
];

// 60-year Tamil cycle. Reference: Apr 2023 (Gregorian) = Shobakritu (index 36, 0-based)
const TAMIL_YEARS: { name: string; native: string }[] = [
  { name: "Prabhava",     native: "பிரபவ" },
  { name: "Vibhava",      native: "விபவ" },
  { name: "Shukla",       native: "சுக்ல" },
  { name: "Pramoduta",    native: "பிரமோதூத" },
  { name: "Prajotpatti",  native: "பிரஜோத்பத்தி" },
  { name: "Aangirasa",    native: "ஆங்கீரச" },
  { name: "Srimukha",     native: "ஶ்ரீமுக" },
  { name: "Bhava",        native: "பவ" },
  { name: "Yuva",         native: "யுவ" },
  { name: "Dhatu",        native: "தாது" },
  { name: "Eshwara",      native: "ஈஸ்வர" },
  { name: "Bahudhanya",   native: "பஹுதான்ய" },
  { name: "Pramathi",     native: "பிரமாதி" },
  { name: "Vikrama",      native: "விக்ரம" },
  { name: "Vishu",        native: "விஷு" },
  { name: "Chitrabhanu",  native: "சித்திரபானு" },
  { name: "Swabhanu",     native: "சுவபானு" },
  { name: "Tarana",       native: "தாரண" },
  { name: "Parthiva",     native: "பார்த்திவ" },
  { name: "Vyaya",        native: "வ்யய" },
  { name: "Sarvajit",     native: "சர்வஜித்" },
  { name: "Sarvadhari",   native: "சர்வதாரி" },
  { name: "Virodhi",      native: "விரோதி" },
  { name: "Vikriti",      native: "விக்ருதி" },
  { name: "Khara",        native: "கர" },
  { name: "Nandana",      native: "நந்தன" },
  { name: "Vijaya",       native: "விஜய" },
  { name: "Jaya",         native: "ஜய" },
  { name: "Manmatha",     native: "மன்மத" },
  { name: "Durmukhi",     native: "துர்முகி" },
  { name: "Hevilambi",    native: "ஹேவிளம்பி" },
  { name: "Vilambi",      native: "விளம்பி" },
  { name: "Vikari",       native: "விகாரி" },
  { name: "Sharvari",     native: "சார்வரி" },
  { name: "Plava",        native: "பிலவ" },
  { name: "Shubhakrit",   native: "சுபக்ருது" },
  { name: "Shobakritu",   native: "சோபக்ருது" },
  { name: "Krodhi",       native: "க்ரோதி" },
  { name: "Vishvavasu",   native: "விசுவாவசு" },
  { name: "Parabhava",    native: "பராபவ" },
  { name: "Plavanga",     native: "பிலவங்க" },
  { name: "Keelaka",      native: "கீலக" },
  { name: "Saumya",       native: "சௌம்ய" },
  { name: "Sadharana",    native: "சாதாரண" },
  { name: "Virodhikritu", native: "விரோதிக்ருது" },
  { name: "Paridhavi",    native: "பரிதாபி" },
  { name: "Pramadhi",     native: "பிரமாதி" },
  { name: "Ananda",       native: "ஆனந்த" },
  { name: "Rakshasa",     native: "ராக்ஷச" },
  { name: "Anala",        native: "அநல" },
  { name: "Pingala",      native: "பிங்கள" },
  { name: "Kalayukti",    native: "காளயுக்தி" },
  { name: "Siddharthi",   native: "சித்தார்த்தி" },
  { name: "Raudra",       native: "ரௌத்திரி" },
  { name: "Durmati",      native: "துர்மதி" },
  { name: "Dundhubi",     native: "துந்துபி" },
  { name: "Rudhirodgari", native: "ருதிரோத்காரி" },
  { name: "Raktakshi",    native: "ரக்தாக்ஷி" },
  { name: "Krodhana",     native: "க்ரோதன" },
  { name: "Akshaya",      native: "அக்ஷய" },
];
const TAMIL_YEAR_REF = { gregYear: 2023, index: 36 }; // 2023-04-14 = Shobakritu

// ── Inauspicious / auspicious time segments ────────────────────────────────────

// 1-indexed segment of day (sunrise→sunset divided into 8) per weekday (0=Sun…6=Sat)
const RAHU_SEGMENT   = [8, 2, 7, 5, 6, 4, 3];
const YAMA_SEGMENT   = [5, 4, 3, 2, 1, 8, 7];
const GULIKA_SEGMENT = [7, 6, 5, 4, 3, 2, 1];

// ── Helpers ──────────────────────────────────────────────────────────────────

function formatIST(date: Date): string {
  return date.toLocaleTimeString("en-IN", {
    timeZone: "Asia/Kolkata",
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });
}

function segmentRange(sunrise: Date, sunset: Date, segment1Indexed: number): string {
  const dayMs = sunset.getTime() - sunrise.getTime();
  const partMs = dayMs / 8;
  const start = new Date(sunrise.getTime() + (segment1Indexed - 1) * partMs);
  const end   = new Date(sunrise.getTime() + segment1Indexed * partMs);
  return `${formatIST(start)} – ${formatIST(end)}`;
}

function abhijitMuhurta(sunrise: Date, sunset: Date): string {
  // Abhijit = the 8th muhurta of the day. Each muhurta = (sunset-sunrise)/15.
  // Midpoint at solar noon ± half muhurta.
  const noon = (sunrise.getTime() + sunset.getTime()) / 2;
  const muhurtaMs = (sunset.getTime() - sunrise.getTime()) / 15;
  const start = new Date(noon - muhurtaMs / 2);
  const end   = new Date(noon + muhurtaMs / 2);
  return `${formatIST(start)} – ${formatIST(end)}`;
}

function getTamilMonthAndDay(date: Date): { name: string; native: string; day: number } {
  const m = date.getMonth();
  const d = date.getDate();
  // Find which Tamil month index this falls into
  for (let i = 0; i < TAMIL_MONTHS.length; i++) {
    const cur = TAMIL_MONTHS[i];
    const next = TAMIL_MONTHS[(i + 1) % TAMIL_MONTHS.length];
    // Convert "start" of current Tamil month and next to Date objects in this Gregorian year
    const year = date.getFullYear();
    const curStart = new Date(year, cur.startMonth, cur.startDay);
    let nextStart = new Date(year, next.startMonth, next.startDay);
    // Handle year wrap (e.g. Margazhi→Thai crosses Jan 1)
    if (nextStart.getTime() <= curStart.getTime()) {
      nextStart = new Date(year + 1, next.startMonth, next.startDay);
    }
    // Adjust if we're before curStart this year (e.g. Jan dates before Thai)
    let effectiveStart = curStart;
    if (date.getTime() < curStart.getTime()) {
      // Try the previous year for Tamil months that crossed boundaries
      effectiveStart = new Date(year - 1, cur.startMonth, cur.startDay);
      const adjNext = new Date(effectiveStart);
      adjNext.setMonth(next.startMonth);
      adjNext.setDate(next.startDay);
      if (adjNext.getTime() <= effectiveStart.getTime()) {
        adjNext.setFullYear(adjNext.getFullYear() + 1);
      }
      if (date.getTime() >= effectiveStart.getTime() && date.getTime() < adjNext.getTime()) {
        return { name: cur.name, native: cur.native, day: dayDiff(effectiveStart, date) };
      }
      continue;
    }
    if (date.getTime() >= curStart.getTime() && date.getTime() < nextStart.getTime()) {
      return { name: cur.name, native: cur.native, day: dayDiff(curStart, date) };
    }
  }
  // Fallback
  return { name: TAMIL_MONTHS[m].name, native: TAMIL_MONTHS[m].native, day: d };
}

function dayDiff(from: Date, to: Date): number {
  const ms = to.getTime() - from.getTime();
  return Math.floor(ms / (1000 * 60 * 60 * 24)) + 1;
}

function getTamilYear(date: Date): { name: string; native: string } {
  // Tamil year starts April 14 (Chithirai 1)
  const year = date.getFullYear();
  const tamilNewYear = new Date(year, 3, 14);
  const effectiveYear = date.getTime() >= tamilNewYear.getTime() ? year : year - 1;
  const idx = ((effectiveYear - TAMIL_YEAR_REF.gregYear) + TAMIL_YEAR_REF.index) % 60;
  const normalized = ((idx % 60) + 60) % 60;
  return TAMIL_YEARS[normalized];
}

// ── Main ─────────────────────────────────────────────────────────────────────

export interface TamilPanchang {
  gregorianDate: string;
  tamilYearName: string;
  tamilYearNative: string;
  tamilMonth: string;
  tamilMonthNative: string;
  tamilDay: number;
  vaaramTa: string;
  vaaramEn: string;
  thithiTa: string;
  thithiEn: string;
  paksham: string;
  natchathiramTa: string;
  natchathiramEn: string;
  yogamTa: string;
  yogamEn: string;
  karanamTa: string;
  karanamEn: string;
  sunrise: string;
  sunset: string;
  rahuKalam: string;
  yamagandam: string;
  kuligai: string;
  abhijit: string;
  tithiIno: number;
  pakshaIno: number;
  marker: string | null;
}

export function getTamilPanchang(date: Date = new Date(), lat = MADURAI.lat, lng = MADURAI.lng): TamilPanchang {
  const calc = mhah.calculate(date);
  const sun = mhah.sunTimer(date, lat, lng);
  const sunrise = new Date(sun.sunRise);
  const sunset  = new Date(sun.sunSet);
  const weekday = date.getDay();

  const tithiInoRaw = calc.Tithi?.ino ?? 0;
  const tithiInPaksha = tithiInoRaw % 15;
  const pakshaIno = calc.Paksha?.ino ?? 0;
  const tithiTa = pakshaIno === 0 ? TITHI_TA_SHUKLA[tithiInPaksha] : TITHI_TA_KRISHNA[tithiInPaksha];

  const nakshatraIno = calc.Nakshatra?.ino ?? 0;
  const yogaIno = calc.Yoga?.ino ?? 0;
  const karanaIno = calc.Karna?.ino ?? 0;

  const { name: tYearName, native: tYearNative } = getTamilYear(date);
  const { name: tMonthName, native: tMonthNative, day: tDay } = getTamilMonthAndDay(date);

  return {
    gregorianDate: date.toLocaleDateString("en-IN", { timeZone: "Asia/Kolkata", weekday: "long", year: "numeric", month: "long", day: "numeric" }),
    tamilYearName: tYearName,
    tamilYearNative: tYearNative,
    tamilMonth: tMonthName,
    tamilMonthNative: tMonthNative,
    tamilDay: tDay,
    vaaramTa: WEEKDAY_TA[weekday],
    vaaramEn: ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][weekday],
    thithiTa: tithiTa,
    thithiEn: calc.Tithi?.name_en_IN ?? "",
    paksham: pakshaIno === 0 ? "சுக்ல பக்ஷம் · Shukla (Waxing)" : "கிருஷ்ண பக்ஷம் · Krishna (Waning)",
    natchathiramTa: NAKSHATRA_TA[nakshatraIno] ?? "",
    natchathiramEn: calc.Nakshatra?.name_en_IN ?? "",
    yogamTa: YOGA_TA[yogaIno] ?? "",
    yogamEn: calc.Yoga?.name_en_IN ?? "",
    karanamTa: KARANA_TA[karanaIno] ?? "",
    karanamEn: calc.Karna?.name_en_IN ?? "",
    sunrise: formatIST(sunrise),
    sunset: formatIST(sunset),
    rahuKalam:  segmentRange(sunrise, sunset, RAHU_SEGMENT[weekday]),
    yamagandam: segmentRange(sunrise, sunset, YAMA_SEGMENT[weekday]),
    kuligai:    segmentRange(sunrise, sunset, GULIKA_SEGMENT[weekday]),
    abhijit:    abhijitMuhurta(sunrise, sunset),
    tithiIno: tithiInPaksha,
    pakshaIno,
    marker: dayMarker(tithiInPaksha, pakshaIno),
  };
}

function dayMarker(tithiInPaksha: number, pakshaIno: number): string | null {
  if (pakshaIno === 0 && tithiInPaksha === 14) return "பௌர்ணமி"; // Pournami (Full Moon)
  if (pakshaIno === 1 && tithiInPaksha === 14) return "அமாவாசை"; // Amavasai (New Moon)
  if (tithiInPaksha === 10) return "ஏகாதசி"; // Ekadasi
  return null;
}

export function getMonthPanchang(year: number, month: number): TamilPanchang[] {
  const lastDay = new Date(year, month + 1, 0).getDate();
  const days: TamilPanchang[] = [];
  for (let d = 1; d <= lastDay; d++) {
    // Use mid-day to avoid tithi-transition ambiguity at midnight
    days.push(getTamilPanchang(new Date(year, month, d, 12, 0, 0)));
  }
  return days;
}
