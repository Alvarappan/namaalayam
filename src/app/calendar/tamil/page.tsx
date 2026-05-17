import Link from "next/link";
import type { Metadata } from "next";
import { Sun, Moon, Star, Clock, AlertTriangle, ChevronLeft, ChevronRight, Calendar as CalendarIcon } from "lucide-react";
import { getTamilPanchang, getMonthPanchang } from "@/lib/panchang";
import MonthPicker from "@/components/calendar/MonthPicker";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Tamil Daily Calendar (தமிழ் காலண்டர்) — Panchang, Thithi & Rahu Kalam",
  description: "Tamil daily calendar with Thithi, Natchathiram, Yogam, Karanam, Rahu Kalam, Yamagandam, Sunrise & Sunset for any date.",
};

interface Props {
  searchParams: Promise<{ date?: string }>;
}

const BASE_HREF = "/calendar/tamil";

function parseDate(s?: string): Date | null {
  if (!s) return null;
  const m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(s);
  if (!m) return null;
  const date = new Date(parseInt(m[1]), parseInt(m[2]) - 1, parseInt(m[3]), 12, 0, 0);
  return isNaN(date.getTime()) ? null : date;
}

function formatDateParam(d: Date): string {
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
}

export default async function TamilCalendarPage({ searchParams }: Props) {
  const { date: dateParam } = await searchParams;
  const today = new Date();
  const selected = parseDate(dateParam) ?? today;

  const p = getTamilPanchang(selected);
  const monthDays = getMonthPanchang(selected.getFullYear(), selected.getMonth());
  const firstWeekday = new Date(selected.getFullYear(), selected.getMonth(), 1).getDay();
  const monthLabel = selected.toLocaleDateString("en-IN", { month: "long", year: "numeric" });

  const prevMonth = new Date(selected.getFullYear(), selected.getMonth() - 1, 1);
  const nextMonth = new Date(selected.getFullYear(), selected.getMonth() + 1, 1);

  const todayKey = formatDateParam(today);
  const selectedKey = formatDateParam(selected);

  return (
    <div className="min-h-screen bg-stone-950 py-12 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-stone-500 text-sm mb-6">
          <Link href="/" className="hover:text-amber-400">Home</Link>
          <span>›</span>
          <Link href="/calendar" className="hover:text-amber-400">Calendar</Link>
          <span>›</span>
          <span className="text-stone-300">Tamil</span>
        </div>

        {/* Header */}
        <div className="flex flex-wrap items-end justify-between gap-4 mb-8">
          <div>
            <p className="text-amber-500 text-sm font-semibold tracking-widest uppercase mb-2">
              தமிழ் தினசரி காலண்டர்
            </p>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">Tamil Daily Calendar</h1>
            <p className="text-stone-400">{p.gregorianDate}</p>
          </div>
          {selectedKey !== todayKey && (
            <Link
              href={BASE_HREF}
              className="inline-flex items-center gap-2 px-4 py-2 bg-amber-500/15 hover:bg-amber-500/25 text-amber-300 border border-amber-500/30 rounded-xl text-sm font-medium transition-all"
            >
              <CalendarIcon size={14} />
              Jump to today
            </Link>
          )}
        </div>

        {/* Banner: selected date */}
        <div className="bg-gradient-to-br from-red-900/60 to-rose-900/40 border border-red-700/40 rounded-2xl p-8 mb-8">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <p className="text-rose-300 text-sm mb-1">தமிழ் வருடம் · Tamil Year</p>
              <h2 className="text-white text-2xl md:text-3xl font-bold mb-3">
                {p.tamilYearNative} ({p.tamilYearName})
              </h2>
              <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-stone-300">
                <span>
                  <span className="text-rose-300 text-xs uppercase tracking-wider mr-2">Month</span>
                  {p.tamilMonthNative} · {p.tamilMonth}
                </span>
                <span>
                  <span className="text-rose-300 text-xs uppercase tracking-wider mr-2">Day</span>
                  {p.tamilDay}
                </span>
                <span>
                  <span className="text-rose-300 text-xs uppercase tracking-wider mr-2">Vaaram</span>
                  {p.vaaramTa} · {p.vaaramEn}
                </span>
              </div>
            </div>
            <div className="text-7xl md:text-8xl font-bold text-white/90">{p.tamilDay}</div>
          </div>
        </div>

        {/* Panchang grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-stone-900/80 border border-stone-700/50 rounded-2xl p-6">
            <h3 className="flex items-center gap-2 text-white font-bold text-lg mb-4">
              <Star size={18} className="text-amber-400" />
              Panchangam · பஞ்சாங்கம்
            </h3>
            <div className="space-y-3">
              <PanchangRow label="Thithi · திதி" tamil={p.thithiTa} english={p.thithiEn} />
              <PanchangRow label="Paksham · பக்ஷம்" tamil={p.paksham} />
              <PanchangRow label="Natchathiram · நட்சத்திரம்" tamil={p.natchathiramTa} english={p.natchathiramEn} />
              <PanchangRow label="Yogam · யோகம்" tamil={p.yogamTa} english={p.yogamEn} />
              <PanchangRow label="Karanam · கரணம்" tamil={p.karanamTa} english={p.karanamEn} />
            </div>
          </div>

          <div className="bg-stone-900/80 border border-stone-700/50 rounded-2xl p-6">
            <h3 className="flex items-center gap-2 text-white font-bold text-lg mb-4">
              <Sun size={18} className="text-amber-400" />
              Sun Timings
            </h3>
            <div className="space-y-3">
              <PanchangRow label="Sunrise · சூரிய உதயம்" tamil={p.sunrise} icon={<Sun size={14} className="text-amber-400" />} />
              <PanchangRow label="Sunset · சூரிய அஸ்தமனம்" tamil={p.sunset} icon={<Moon size={14} className="text-orange-400" />} />
            </div>
          </div>

          <div className="bg-stone-900/80 border border-stone-700/50 rounded-2xl p-6">
            <h3 className="flex items-center gap-2 text-white font-bold text-lg mb-4">
              <AlertTriangle size={18} className="text-red-400" />
              Inauspicious Times · தீய நேரம்
            </h3>
            <div className="space-y-3">
              <PanchangRow label="Rahu Kalam · ராகு காலம்" tamil={p.rahuKalam} valueClass="text-red-300" />
              <PanchangRow label="Yamagandam · எமகண்டம்" tamil={p.yamagandam} valueClass="text-red-300" />
              <PanchangRow label="Kuligai · குளிகை" tamil={p.kuligai} valueClass="text-red-300" />
            </div>
          </div>

          <div className="bg-stone-900/80 border border-stone-700/50 rounded-2xl p-6">
            <h3 className="flex items-center gap-2 text-white font-bold text-lg mb-4">
              <Clock size={18} className="text-emerald-400" />
              Auspicious Times · சுப நேரம்
            </h3>
            <div className="space-y-3">
              <PanchangRow label="Abhijit Muhurta · அபிஜித் முகூர்த்தம்" tamil={p.abhijit} valueClass="text-emerald-300" />
            </div>
          </div>
        </div>

        {/* Monthly Calendar Grid */}
        <div className="bg-stone-900/80 border border-stone-700/50 rounded-2xl p-4 sm:p-6 mb-8">
          <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
            <div className="flex items-center gap-2">
              <Link
                href={`${BASE_HREF}?date=${formatDateParam(prevMonth)}`}
                className="p-2 bg-stone-800 hover:bg-stone-700 border border-stone-700 text-stone-300 rounded-lg transition-all"
                aria-label="Previous month"
              >
                <ChevronLeft size={16} />
              </Link>
              <MonthPicker
                selectedYear={selected.getFullYear()}
                selectedMonth={selected.getMonth()}
                baseHref={BASE_HREF}
              />
              <Link
                href={`${BASE_HREF}?date=${formatDateParam(nextMonth)}`}
                className="p-2 bg-stone-800 hover:bg-stone-700 border border-stone-700 text-stone-300 rounded-lg transition-all"
                aria-label="Next month"
              >
                <ChevronRight size={16} />
              </Link>
            </div>
            <span className="text-stone-400 text-sm">{p.tamilMonthNative} · {p.tamilMonth}</span>
          </div>

          {/* Weekday headers */}
          <div className="grid grid-cols-7 gap-1 sm:gap-2 mb-2">
            {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((d, i) => (
              <div
                key={d}
                className={`text-center text-xs font-semibold py-2 ${i === 0 ? "text-red-400" : "text-stone-400"}`}
              >
                {d}
              </div>
            ))}
          </div>

          {/* Day cells */}
          <div className="grid grid-cols-7 gap-1 sm:gap-2">
            {Array.from({ length: firstWeekday }).map((_, i) => (
              <div key={`pad-${i}`} className="aspect-square" />
            ))}
            {monthDays.map((day, idx) => {
              const gregDay = idx + 1;
              const cellDate = new Date(selected.getFullYear(), selected.getMonth(), gregDay);
              const cellKey = formatDateParam(cellDate);
              const weekday = (firstWeekday + idx) % 7;
              const isSunday = weekday === 0;
              const isToday = cellKey === todayKey;
              const isSelected = cellKey === selectedKey;

              const baseClasses = "aspect-square rounded-lg border p-1 sm:p-2 flex flex-col justify-between text-[10px] sm:text-xs transition-all cursor-pointer";
              const stateClasses = isSelected
                ? "border-amber-500 bg-amber-500/25 ring-2 ring-amber-500/40"
                : isToday
                ? "border-amber-500/70 bg-amber-500/10"
                : "border-stone-800 bg-stone-950/60 hover:border-amber-500/50 hover:bg-stone-800/50";

              return (
                <Link
                  key={gregDay}
                  href={`${BASE_HREF}?date=${cellKey}`}
                  scroll={false}
                  className={`${baseClasses} ${stateClasses}`}
                >
                  <div className="flex items-start justify-between gap-1">
                    <span className={`font-bold text-sm sm:text-lg leading-none ${
                      isSelected ? "text-amber-200" :
                      isSunday ? "text-red-400" :
                      isToday ? "text-amber-300" :
                      "text-white"
                    }`}>
                      {gregDay}
                    </span>
                    <span className="text-stone-400 text-[10px] sm:text-xs font-medium">{day.tamilDay}</span>
                  </div>
                  <div className="space-y-0.5 mt-1">
                    <div className="text-stone-400 truncate leading-tight" title={day.natchathiramTa}>{day.natchathiramTa}</div>
                    {day.marker && (
                      <div className={`truncate leading-tight font-medium ${
                        day.marker === "பௌர்ணமி" ? "text-amber-400" :
                        day.marker === "அமாவாசை" ? "text-stone-400" :
                        "text-emerald-400"
                      }`}>
                        {day.marker}
                      </div>
                    )}
                  </div>
                </Link>
              );
            })}
          </div>

          {/* Legend */}
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2 mt-5 pt-4 border-t border-stone-800 text-xs">
            <span className="flex items-center gap-1.5"><span className="w-3 h-3 rounded bg-amber-500/40 border border-amber-500"></span><span className="text-stone-400">Selected</span></span>
            <span className="flex items-center gap-1.5"><span className="w-3 h-3 rounded bg-amber-500/20 border border-amber-500/70"></span><span className="text-stone-400">Today</span></span>
            <span className="text-stone-400"><span className="text-amber-400 font-medium">பௌர்ணமி</span> Full Moon</span>
            <span className="text-stone-400"><span className="text-stone-300 font-medium">அமாவாசை</span> New Moon</span>
            <span className="text-stone-400"><span className="text-emerald-400 font-medium">ஏகாதசி</span> Ekadasi</span>
          </div>
        </div>

        {/* Note */}
        <div className="bg-stone-900/60 border border-stone-800 rounded-xl p-5 text-center">
          <p className="text-stone-400 text-xs leading-relaxed">
            Panchang values are computed using the <code className="text-stone-300">mhah-panchang</code> library
            (Swiss Ephemeris-based astronomical calculations). Rahu Kalam, Yamagandam &amp; Kuligai are derived from sunrise/sunset
            using the traditional 8-segment day division. All times shown in Indian Standard Time (IST).
          </p>
        </div>
      </div>
    </div>
  );
}

function PanchangRow({
  label, tamil, english, icon, valueClass,
}: {
  label: string;
  tamil: string;
  english?: string;
  icon?: React.ReactNode;
  valueClass?: string;
}) {
  return (
    <div className="flex items-start justify-between gap-4 py-1">
      <span className="text-stone-400 text-sm flex items-center gap-2 flex-shrink-0">
        {icon}
        {label}
      </span>
      <span className="text-right">
        <span className={`text-sm font-medium ${valueClass ?? "text-white"}`}>{tamil}</span>
        {english && <span className="text-stone-500 text-xs ml-1.5">({english})</span>}
      </span>
    </div>
  );
}
