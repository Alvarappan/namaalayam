import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MapPin, CalendarDays, Check, ArrowLeft, ShieldAlert } from "lucide-react";
import { poojas, poojaBySlug, poojaVenue } from "@/data/poojas";
import { doshaBySlug } from "@/data/doshas";
import BookPooja from "@/components/poojas/BookPooja";

export function generateStaticParams() {
  return poojas.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const pooja = poojaBySlug(slug);
  if (!pooja) return { title: "Pooja | Namaalayam" };
  return {
    title: `${pooja.name} | Namaalayam`,
    description: pooja.tagline,
  };
}

export default async function PoojaDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const pooja = poojaBySlug(slug);
  if (!pooja) notFound();

  const venue = poojaVenue(pooja);
  const relatedDoshas = pooja.doshaSlugs
    .map((d) => doshaBySlug(d))
    .filter((d): d is NonNullable<typeof d> => Boolean(d));

  return (
    <main className="bg-amber-50 min-h-screen">
      <header className="bg-gradient-to-br from-orange-500 to-amber-500 text-white px-4 pt-24 pb-14">
        <div className="max-w-5xl mx-auto">
          <Link
            href="/poojas"
            className="inline-flex items-center gap-1.5 text-white/85 hover:text-white text-sm font-medium mb-5"
          >
            <ArrowLeft size={15} />
            All poojas
          </Link>
          <span className="inline-block text-xs font-semibold px-3 py-1 rounded-full bg-white/20 mb-3">
            {pooja.type} · {pooja.problem}
          </span>
          <h1 className="text-3xl md:text-5xl font-bold mb-3">{pooja.name}</h1>
          <p className="text-white/90 text-lg max-w-2xl">{pooja.tagline}</p>

          <div className="flex flex-wrap gap-x-6 gap-y-2 mt-6 text-sm text-white/90">
            {venue && (
              <span className="inline-flex items-center gap-1.5">
                <MapPin size={15} />
                {venue.name}, {venue.city}
              </span>
            )}
            <span className="inline-flex items-center gap-1.5">
              <CalendarDays size={15} />
              {pooja.tithiRule}
            </span>
          </div>
        </div>
      </header>

      <section className="px-4 py-12">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main */}
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-stone-900 mb-3">About this Pooja</h2>
              <p className="text-stone-700 leading-relaxed">{pooja.summary}</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-stone-900 mb-4">Benefits</h2>
              <ul className="space-y-2.5">
                {pooja.benefits.map((b) => (
                  <li key={b} className="flex items-start gap-2.5 text-stone-700">
                    <Check size={18} className="text-green-600 flex-shrink-0 mt-0.5" />
                    {b}
                  </li>
                ))}
              </ul>
            </div>

            {pooja.priceTiers.length > 0 && (
              <div>
                <h2 className="text-2xl font-bold text-stone-900 mb-4">Offering Options</h2>
                <div className="rounded-2xl border border-amber-200 bg-white overflow-hidden">
                  {pooja.priceTiers.map((tier, i) => (
                    <div
                      key={tier.label}
                      className={`flex items-center justify-between px-5 py-4 ${
                        i > 0 ? "border-t border-amber-100" : ""
                      }`}
                    >
                      <div>
                        <p className="font-semibold text-stone-900">{tier.label}</p>
                        {tier.note && <p className="text-stone-500 text-sm">{tier.note}</p>}
                      </div>
                      <span className="font-semibold text-orange-700">{tier.price}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <BookPooja
              poojaName={pooja.name}
              venue={venue ? `${venue.name}, ${venue.city}` : undefined}
            />
          </div>

          {/* Sidebar */}
          <aside className="space-y-6">
            {relatedDoshas.length > 0 && (
              <div className="rounded-2xl border border-amber-200 bg-white p-5">
                <h3 className="font-bold text-stone-900 mb-3 flex items-center gap-2">
                  <ShieldAlert size={18} className="text-violet-600" />
                  Remedies these doshas
                </h3>
                <div className="space-y-2">
                  {relatedDoshas.map((d) => (
                    <Link
                      key={d.slug}
                      href={`/doshas/${d.slug}`}
                      className="block px-3 py-2 rounded-lg border border-amber-100 hover:border-orange-300 hover:bg-amber-50 text-stone-700 text-sm font-medium transition-colors"
                    >
                      {d.name}
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {venue && (
              <div className="rounded-2xl border border-amber-200 bg-white p-5">
                <h3 className="font-bold text-stone-900 mb-2">The Venue</h3>
                <p className="text-stone-700 text-sm mb-1">{venue.name}</p>
                <p className="text-stone-500 text-sm mb-3">
                  {venue.city}, {venue.state}
                </p>
                <Link
                  href={`/temples/${venue.slug}`}
                  className="inline-flex items-center gap-1.5 text-orange-600 font-semibold text-sm"
                >
                  Read the temple guide
                  <ArrowLeft size={14} className="rotate-180" />
                </Link>
              </div>
            )}
          </aside>
        </div>
      </section>
    </main>
  );
}
