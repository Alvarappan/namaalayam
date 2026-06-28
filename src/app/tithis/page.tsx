import type { Metadata } from "next";
import Link from "next/link";
import { Check, X, CalendarDays } from "lucide-react";
import { tithis } from "@/data/tithis";
import { getTamilPanchang } from "@/lib/panchang";

export const metadata: Metadata = {
  title: "Tithis — The Sacred Calendar | Namaalayam",
  description:
    "What each tithi means, its spiritual significance, the poojas best performed on it, and what to do and avoid — Pradosham, Amavasya, Pournami, Ekadasi, and more.",
};

export default function TithisPage() {
  const p = getTamilPanchang(new Date());
  const todaySlug = tithis.find((t) =>
    t.matchKeys.some((k) => p.thithiEn.toLowerCase().includes(k.toLowerCase()))
  )?.slug;

  return (
    <main className="bg-amber-50 min-h-screen">
      <header className="bg-gradient-to-br from-emerald-600 to-teal-500 text-white px-4 pt-24 pb-14">
        <div className="max-w-7xl mx-auto">
          <p className="text-white/85 text-sm font-semibold tracking-widest uppercase mb-2">
            The sacred calendar
          </p>
          <h1 className="text-4xl md:text-5xl font-bold mb-3">Tithis</h1>
          <p className="text-white/90 text-lg max-w-2xl mb-5">
            The lunar days that shape worship — what each one means, and the poojas best
            performed on it. Today is{" "}
            <span className="font-semibold">
              {p.thithiEn} ({p.paksham})
            </span>
            .
          </p>
          <Link
            href="/calendar/tamil"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-white text-emerald-700 font-semibold rounded-xl hover:bg-emerald-50 transition-colors"
          >
            <CalendarDays size={17} />
            Open the daily panchang
          </Link>
        </div>
      </header>

      <section className="px-4 py-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {tithis.map((t) => (
            <div
              key={t.slug}
              className={`rounded-2xl border bg-white p-6 shadow-sm ${
                t.slug === todaySlug ? "border-emerald-400 ring-2 ring-emerald-200" : "border-amber-200"
              }`}
            >
              <div className="flex items-center justify-between mb-1">
                <h2 className="text-xl font-bold text-stone-900">{t.name}</h2>
                {t.slug === todaySlug && (
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-700">
                    Today
                  </span>
                )}
              </div>
              {t.altName && <p className="text-stone-400 text-sm mb-3">{t.altName}</p>}
              <p className="text-stone-700 text-sm mb-4">{t.meaning}</p>

              <div className="mb-4">
                <p className="text-xs uppercase tracking-wider text-stone-400 mb-2">
                  Recommended poojas
                </p>
                <div className="flex flex-wrap gap-2">
                  {t.recommendedPoojas.map((name) => (
                    <span
                      key={name}
                      className="px-3 py-1 bg-amber-100 text-amber-800 rounded-full text-xs font-medium"
                    >
                      {name}
                    </span>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="flex items-center gap-1.5 text-green-700 font-semibold mb-1.5">
                    <Check size={14} /> Do
                  </p>
                  <ul className="space-y-1 text-stone-600">
                    {t.doList.map((d) => (
                      <li key={d}>{d}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="flex items-center gap-1.5 text-red-600 font-semibold mb-1.5">
                    <X size={14} /> Avoid
                  </p>
                  <ul className="space-y-1 text-stone-600">
                    {t.avoidList.map((a) => (
                      <li key={a}>{a}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
