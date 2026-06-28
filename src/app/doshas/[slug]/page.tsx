import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { AlertCircle, Sparkles, Check, MapPin, CalendarDays, ArrowLeft } from "lucide-react";
import { doshas, doshaBySlug } from "@/data/doshas";
import { poojasForDosha, poojaVenue } from "@/data/poojas";
import { temples } from "@/data/temples";

export function generateStaticParams() {
  return doshas.map((d) => ({ slug: d.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const dosha = doshaBySlug(slug);
  if (!dosha) return { title: "Dosha | Namaalayam" };
  return {
    title: `${dosha.name} — Signs, Significance & Remedies | Namaalayam`,
    description: dosha.tagline,
  };
}

export default async function DoshaDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const dosha = doshaBySlug(slug);
  if (!dosha) notFound();

  const remedyPoojas = poojasForDosha(dosha.slug);
  const venue = temples.find((t) => t.slug === dosha.templeSlug);

  return (
    <main className="bg-amber-50 min-h-screen">
      <header className={`bg-gradient-to-br ${dosha.theme.gradient} px-4 pt-24 pb-14`}>
        <div className="max-w-5xl mx-auto">
          <Link
            href="/doshas"
            className="inline-flex items-center gap-1.5 text-stone-600 hover:text-stone-900 text-sm font-medium mb-5"
          >
            <ArrowLeft size={15} />
            All doshas
          </Link>
          <span className={`inline-block text-xs font-semibold px-3 py-1 rounded-full ${dosha.theme.chip} mb-3`}>
            {dosha.planet}
          </span>
          <h1 className="text-3xl md:text-5xl font-bold text-stone-900 mb-2">{dosha.name}</h1>
          {dosha.altNames && (
            <p className={`${dosha.theme.accent} font-medium mb-3`}>{dosha.altNames}</p>
          )}
          <p className="text-stone-700 text-lg max-w-2xl">{dosha.summary}</p>
        </div>
      </header>

      <section className="px-4 py-12">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h2 className="flex items-center gap-2 text-2xl font-bold text-stone-900 mb-4">
                <AlertCircle size={22} className="text-red-500" />
                Signs &amp; Symptoms
              </h2>
              <ul className="space-y-2.5">
                {dosha.signs.map((s) => (
                  <li key={s} className="flex items-start gap-2.5 text-stone-700">
                    <span className="text-red-400 mt-1">•</span>
                    {s}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="flex items-center gap-2 text-2xl font-bold text-stone-900 mb-3">
                <Sparkles size={22} className="text-violet-500" />
                Astrological Significance
              </h2>
              <p className="text-stone-700 leading-relaxed">{dosha.significance}</p>
            </div>

            <div>
              <h2 className="flex items-center gap-2 text-2xl font-bold text-stone-900 mb-4">
                <Check size={22} className="text-green-600" />
                Recommended Remedies
              </h2>
              <ul className="space-y-2.5">
                {dosha.remedies.map((r) => (
                  <li key={r} className="flex items-start gap-2.5 text-stone-700">
                    <Check size={18} className="text-green-600 flex-shrink-0 mt-0.5" />
                    {r}
                  </li>
                ))}
              </ul>
            </div>

            {/* Remedy poojas — the conversion point */}
            {remedyPoojas.length > 0 && (
              <div>
                <h2 className="text-2xl font-bold text-stone-900 mb-4">Book a Remedy Pooja</h2>
                <div className="space-y-3">
                  {remedyPoojas.map((p) => {
                    const v = poojaVenue(p);
                    return (
                      <Link
                        key={p.slug}
                        href={`/poojas/${p.slug}`}
                        className="group flex items-center justify-between gap-4 rounded-2xl border border-amber-200 bg-white p-5 hover:shadow-md hover:border-orange-300 transition-all"
                      >
                        <div>
                          <p className="font-bold text-stone-900 group-hover:text-orange-700 transition-colors">
                            {p.name}
                          </p>
                          <p className="text-stone-500 text-sm mt-0.5">
                            {p.type}
                            {v && ` · ${v.name}, ${v.city}`}
                          </p>
                        </div>
                        <span className="flex-shrink-0 px-4 py-2 bg-gradient-to-r from-orange-500 to-amber-500 text-white text-sm font-semibold rounded-xl">
                          Book this Pooja
                        </span>
                      </Link>
                    );
                  })}
                </div>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <aside className="space-y-6">
            <div className="rounded-2xl border border-amber-200 bg-white p-5">
              <h3 className="font-bold text-stone-900 mb-3 flex items-center gap-2">
                <CalendarDays size={18} className="text-orange-500" />
                Best days
              </h3>
              <p className="text-stone-700 text-sm">{dosha.bestDays}</p>
            </div>

            {venue && (
              <div className="rounded-2xl border border-amber-200 bg-white p-5">
                <h3 className="font-bold text-stone-900 mb-2 flex items-center gap-2">
                  <MapPin size={18} className="text-orange-500" />
                  Remedy temple
                </h3>
                <p className="text-stone-700 text-sm mb-1">{venue.name}</p>
                <p className="text-stone-500 text-sm mb-3">
                  {venue.city}, {venue.state}
                </p>
                <Link
                  href={`/temples/${venue.slug}`}
                  className="inline-flex items-center gap-1.5 text-orange-600 font-semibold text-sm"
                >
                  Read the temple guide →
                </Link>
              </div>
            )}
          </aside>
        </div>
      </section>
    </main>
  );
}
