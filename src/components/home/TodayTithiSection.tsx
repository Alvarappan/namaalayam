import Link from "next/link";
import { CalendarDays, Sun, Clock, ArrowRight } from "lucide-react";
import { getTamilPanchang } from "@/lib/panchang";
import { tithis } from "@/data/tithis";

// Server component — reads today's panchang and surfaces the matching tithi's
// recommended poojas. The auto-dated "what's auspicious today" edge.
export default function TodayTithiSection() {
  const p = getTamilPanchang(new Date());

  // Match today's thithi against our tithi concepts.
  const todays = tithis.find((t) =>
    t.matchKeys.some((k) => p.thithiEn.toLowerCase().includes(k.toLowerCase()))
  );

  return (
    <section className="py-16 px-4 bg-gradient-to-br from-amber-100/60 to-orange-100/60">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {/* Today's panchang summary */}
          <div className="rounded-2xl border border-amber-200 bg-white p-7 shadow-sm">
            <p className="text-orange-600 text-sm font-semibold tracking-widest uppercase mb-1">
              Today
            </p>
            <h2 className="text-2xl md:text-3xl font-bold text-stone-900 mb-5">
              {p.gregorianDate}
            </h2>

            <div className="grid grid-cols-2 gap-4">
              <Detail icon={CalendarDays} label="Thithi" value={`${p.thithiEn} · ${p.paksham}`} />
              <Detail icon={Sun} label="Natchathiram" value={p.natchathiramEn} />
              <Detail icon={Clock} label="Rahu Kalam" value={p.rahuKalam} tone="text-red-600" />
              <Detail icon={Clock} label="Abhijit Muhurta" value={p.abhijit} tone="text-emerald-600" />
            </div>

            <Link
              href="/calendar/tamil"
              className="mt-6 inline-flex items-center gap-1.5 text-orange-600 font-semibold text-sm"
            >
              View full panchang
              <ArrowRight size={15} />
            </Link>
          </div>

          {/* Recommended for today */}
          <div className="rounded-2xl border border-orange-200 bg-gradient-to-br from-orange-500 to-amber-500 p-7 text-white shadow-sm flex flex-col">
            <p className="text-white/85 text-sm font-semibold tracking-widest uppercase mb-1">
              Auspicious today
            </p>
            {todays ? (
              <>
                <h3 className="text-2xl md:text-3xl font-bold mb-2">{todays.name}</h3>
                <p className="text-white/90 text-sm leading-relaxed mb-5">{todays.meaning}</p>
                <div className="mb-5">
                  <p className="text-white/80 text-xs uppercase tracking-wider mb-2">
                    Recommended poojas
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {todays.recommendedPoojas.map((name) => (
                      <span
                        key={name}
                        className="px-3 py-1.5 bg-white/20 rounded-full text-sm font-medium"
                      >
                        {name}
                      </span>
                    ))}
                  </div>
                </div>
              </>
            ) : (
              <>
                <h3 className="text-2xl md:text-3xl font-bold mb-2">A day for darshan</h3>
                <p className="text-white/90 text-sm leading-relaxed mb-5">
                  No special tithi today. Explore poojas you can book any day, or check the
                  upcoming sacred days.
                </p>
              </>
            )}
            <Link
              href="/tithis"
              className="mt-auto inline-flex items-center justify-center gap-2 px-5 py-3 bg-white text-orange-700 font-semibold rounded-xl hover:bg-amber-50 transition-colors w-fit"
            >
              See the sacred calendar
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function Detail({
  icon: Icon,
  label,
  value,
  tone = "text-stone-900",
}: {
  icon: React.ComponentType<{ size?: number; className?: string }>;
  label: string;
  value: string;
  tone?: string;
}) {
  return (
    <div>
      <div className="flex items-center gap-1.5 text-stone-500 text-xs mb-1">
        <Icon size={13} />
        {label}
      </div>
      <div className={`font-semibold ${tone}`}>{value}</div>
    </div>
  );
}
