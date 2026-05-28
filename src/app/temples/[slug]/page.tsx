import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  MapPin, Clock, Star, ExternalLink, Calendar,
  Sparkles, BookOpen,
} from "lucide-react";
import { temples } from "@/data/temples";
import { getTempleDetail } from "@/data/templeDetails";
import VisitorLogisticsCard from "@/components/temples/VisitorLogisticsCard";
import TempleQuickCards from "@/components/temples/TempleQuickCards";
import TempleFAQ from "@/components/temples/TempleFAQ";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return temples.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const temple = temples.find((t) => t.slug === slug);
  if (!temple) return {};
  return {
    title: `${temple.name} — History, Timings & Travel Guide`,
    description: temple.description,
    openGraph: { title: temple.name, description: temple.description },
  };
}

const categoryColors: Record<string, string> = {
  shiva: "bg-blue-100/90 text-blue-800 border-blue-200",
  vishnu: "bg-violet-100/90 text-violet-800 border-violet-200",
  murugan: "bg-orange-100/90 text-orange-800 border-orange-200",
  shakti: "bg-rose-100/90 text-rose-800 border-rose-200",
  krishna: "bg-teal-100/90 text-teal-800 border-teal-200",
  ayyappa: "bg-green-100/90 text-green-800 border-green-200",
  mixed: "bg-amber-100/90 text-amber-800 border-amber-200",
};

export default async function TempleDetailPage({ params }: Props) {
  const { slug } = await params;
  const temple = temples.find((t) => t.slug === slug);
  if (!temple) notFound();

  const detail = getTempleDetail(slug);
  const nearbyTemples = temples.filter((t) => detail.nearbyTemples.includes(t.slug));

  return (
    <div className="min-h-screen bg-amber-50">
      {/* Hero */}
      <div className="relative bg-stone-900 py-16 px-4 overflow-hidden min-h-[420px] flex items-center">
        <Image
          src={temple.image}
          alt={temple.name}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/70 to-black/50" />

        <div className="relative z-10 max-w-4xl mx-auto">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-white/60 text-sm mb-6">
            <Link href="/" className="hover:text-amber-400 transition-colors">Home</Link>
            <span>›</span>
            <Link href="/temples" className="hover:text-amber-400 transition-colors">Temples</Link>
            <span>›</span>
            <span className="text-white/80">{temple.name}</span>
          </div>

          <div className="flex flex-wrap items-start gap-3 mb-4">
            <span className={`px-3 py-1 text-sm font-semibold rounded-full border ${categoryColors[temple.category]}`}>
              {temple.category.charAt(0).toUpperCase() + temple.category.slice(1)} Temple
            </span>
            <span className="flex items-center gap-1.5 px-3 py-1 bg-black/30 rounded-full text-white/70 text-sm">
              <Star size={13} className="text-amber-400 fill-amber-400" />
              {temple.rating} · {temple.reviewCount.toLocaleString()} reviews
            </span>
          </div>

          <h1 className="text-3xl md:text-5xl font-bold text-white mb-3">{temple.name}</h1>

          <div className="flex items-center gap-2 text-white/70 text-base mb-6">
            <MapPin size={16} className="text-amber-400" />
            <span>{temple.city}, {temple.state}</span>
          </div>

          <p className="text-white/80 text-lg leading-relaxed max-w-3xl">{temple.description}</p>

          {temple.officialUrl && (
            <a
              href={temple.officialUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-6 px-5 py-2.5 bg-white/10 hover:bg-white/20 text-white rounded-xl border border-white/20 text-sm font-medium transition-all"
            >
              <ExternalLink size={15} />
              Official Website
            </a>
          )}
        </div>
      </div>

      {/* Quick info cards — full-width strip */}
      <div className="max-w-6xl mx-auto px-4 pt-10">
        <TempleQuickCards
          detail={detail}
          templeName={temple.name}
          city={temple.city}
          state={temple.state}
          coordinates={temple.coordinates}
        />
      </div>

      {/* Main content */}
      <div className="max-w-6xl mx-auto px-4 pt-8 pb-12 grid grid-cols-1 lg:grid-cols-3 gap-8">

        {/* Left: Main Info */}
        <div className="lg:col-span-2 space-y-8">

          {/* History */}
          <Section title="History">
            <p className="text-stone-700 leading-relaxed">{detail.history}</p>
          </Section>

          {/* Mythology */}
          {detail.mythology && (
            <Section title="Mythology & Legend">
              <div className="space-y-5">
                {detail.mythology.legend && (
                  <div>
                    <h3 className="text-stone-900 font-semibold text-base mb-2 flex items-center gap-2">
                      <Sparkles size={16} className="text-orange-600" />
                      The Legend
                    </h3>
                    <p className="text-stone-700 leading-relaxed">{detail.mythology.legend}</p>
                  </div>
                )}
                {detail.mythology.tirukalyanam && (
                  <div>
                    <h3 className="text-stone-900 font-semibold text-base mb-2 flex items-center gap-2">
                      <Sparkles size={16} className="text-orange-600" />
                      The Divine Wedding
                    </h3>
                    <p className="text-stone-700 leading-relaxed">{detail.mythology.tirukalyanam}</p>
                  </div>
                )}
                {detail.mythology.additionalStories?.map((s) => (
                  <div key={s.title}>
                    <h3 className="text-stone-900 font-semibold text-base mb-2 flex items-center gap-2">
                      <BookOpen size={16} className="text-orange-600" />
                      {s.title}
                    </h3>
                    <p className="text-stone-700 leading-relaxed">{s.content}</p>
                  </div>
                ))}
              </div>
            </Section>
          )}

          {/* Architecture */}
          <Section title="Architecture">
            <p className="text-stone-700 leading-relaxed">{detail.architecture}</p>

            {detail.architectureFeatures && detail.architectureFeatures.length > 0 && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
                {detail.architectureFeatures.map((f) => (
                  <div key={f.name} className="bg-amber-50/60 border border-amber-200 rounded-xl p-4">
                    <div className="flex items-start justify-between gap-3 mb-1">
                      <h4 className="text-stone-900 font-semibold text-sm leading-tight">{f.name}</h4>
                      <span className="text-[10px] uppercase tracking-wider text-orange-700 bg-orange-100 px-1.5 py-0.5 rounded whitespace-nowrap">
                        {f.type}
                      </span>
                    </div>
                    {f.nameTa && (
                      <p className="text-stone-500 text-xs mb-2">{f.nameTa}</p>
                    )}
                    <p className="text-stone-700 text-xs leading-relaxed">{f.description}</p>
                    {f.detail && (
                      <p className="text-orange-700 text-xs font-medium mt-2">{f.detail}</p>
                    )}
                  </div>
                ))}
              </div>
            )}
          </Section>

          {/* Sub-shrines */}
          {detail.subShrines && detail.subShrines.length > 0 && (
            <Section title="Sub-shrines & Other Deities">
              <div className="space-y-3">
                {detail.subShrines.map((s) => (
                  <div key={s.name} className="bg-white border border-amber-200 rounded-xl p-4 shadow-sm">
                    <div className="flex items-start justify-between gap-3 mb-1">
                      <h4 className="text-stone-900 font-semibold text-base">{s.name}</h4>
                      <span className="text-orange-600 text-xs font-medium whitespace-nowrap">{s.deity}</span>
                    </div>
                    <p className="text-stone-700 text-sm leading-relaxed">{s.description}</p>
                  </div>
                ))}
              </div>
            </Section>
          )}

          {/* Highlights */}
          <Section title="Highlights">
            <ul className="space-y-3">
              {detail.highlights.map((h, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-amber-100 text-orange-700 flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">
                    {i + 1}
                  </span>
                  <span className="text-stone-700 text-sm leading-relaxed">{h}</span>
                </li>
              ))}
            </ul>
          </Section>

          {/* Festivals */}
          <Section title="Festivals & Events">
            <div className="space-y-4">
              {detail.festivals.map((f) => {
                const inner = (
                  <>
                    <div className="flex items-start justify-between gap-4 mb-2">
                      <h4 className="text-stone-900 font-semibold group-hover:text-orange-700 transition-colors">
                        {f.name}
                        {f.slug && <span className="text-orange-600 ml-1.5 text-xs">→</span>}
                      </h4>
                      <span className="flex items-center gap-1.5 text-orange-600 text-xs font-medium whitespace-nowrap">
                        <Calendar size={12} />
                        {f.month}
                      </span>
                    </div>
                    <p className="text-stone-700 text-sm leading-relaxed">{f.description}</p>
                  </>
                );
                return f.slug ? (
                  <Link key={f.name} href={`/festivals/${f.slug}`} className="group block bg-amber-50/60 border border-amber-200 hover:border-orange-400 rounded-xl p-4 transition-colors">
                    {inner}
                  </Link>
                ) : (
                  <div key={f.name} className="group bg-amber-50/60 border border-amber-200 rounded-xl p-4">
                    {inner}
                  </div>
                );
              })}
            </div>
          </Section>

          {/* Sevas (enhanced) or Poojas (fallback) */}
          {detail.sevas && detail.sevas.length > 0 ? (
            <Section title="Sevas & Poojas">
              <div className="space-y-3">
                {detail.sevas.map((s) => (
                  <div key={s.name} className="bg-white border border-amber-200 rounded-xl p-4 shadow-sm">
                    <div className="flex items-start justify-between gap-3 mb-2 flex-wrap">
                      <div className="flex items-center gap-2">
                        <h4 className="text-stone-900 font-semibold text-base">{s.name}</h4>
                        {s.type && (
                          <span className={`text-[10px] uppercase tracking-wider px-1.5 py-0.5 rounded ${
                            s.type === "daily" ? "bg-emerald-100 text-emerald-700" :
                            s.type === "weekly" ? "bg-blue-100 text-blue-700" :
                            s.type === "monthly" ? "bg-violet-100 text-violet-700" :
                            "bg-orange-100 text-orange-700"
                          }`}>
                            {s.type}
                          </span>
                        )}
                      </div>
                      <span className="text-orange-700 text-sm font-semibold whitespace-nowrap">{s.fee}</span>
                    </div>
                    {s.description && (
                      <p className="text-stone-700 text-sm leading-relaxed mb-2">{s.description}</p>
                    )}
                    <div className="flex items-center justify-between gap-3 flex-wrap text-xs">
                      <span className="flex items-center gap-1.5 text-stone-600">
                        <Clock size={12} className="text-orange-600" />
                        {s.time}
                      </span>
                      {s.bookingUrl && (
                        <a
                          href={s.bookingUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-orange-700 font-medium hover:underline"
                        >
                          Book online <ExternalLink size={11} />
                        </a>
                      )}
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-stone-500 text-xs mt-4 leading-relaxed">
                Fees and timings are indicative and may change. Please confirm with the temple office before travelling.
              </p>
            </Section>
          ) : (
            <Section title="Poojas & Sevas">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-amber-200">
                      <th className="text-left text-stone-600 font-medium pb-3 pr-4">Pooja / Seva</th>
                      <th className="text-left text-stone-600 font-medium pb-3 pr-4">Time</th>
                      <th className="text-left text-stone-600 font-medium pb-3">Fee</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-amber-100">
                    {detail.poojas.map((p) => (
                      <tr key={p.name}>
                        <td className="text-stone-900 py-3 pr-4 font-medium">{p.name}</td>
                        <td className="text-stone-600 py-3 pr-4">{p.time}</td>
                        <td className="text-orange-600 py-3 font-medium">{p.fee}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Section>
          )}

          {/* FAQs (optional) */}
          {detail.faqs && detail.faqs.length > 0 && (
            <TempleFAQ faqs={detail.faqs} />
          )}

        </div>

        {/* Right: Sidebar */}
        <div className="space-y-6">

          {/* Visitor Logistics (optional, opens modal) */}
          {detail.visitorLogistics && (
            <VisitorLogisticsCard logistics={detail.visitorLogistics} />
          )}

          {/* Location / Map */}
          <SideCard title="Location">
            <div className="rounded-xl overflow-hidden border border-amber-200 -mx-1">
              <iframe
                src={`https://www.google.com/maps?q=${temple.coordinates.lat},${temple.coordinates.lng}&hl=en&z=15&output=embed`}
                width="100%"
                height="220"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={`Map of ${temple.name}`}
                className="block"
              />
            </div>
            <div className="flex items-center gap-2 text-stone-600 text-xs mt-3">
              <MapPin size={13} className="text-orange-600" />
              <span>{temple.city}, {temple.state}</span>
            </div>
            <a
              href={`https://www.google.com/maps/search/?api=1&query=${temple.coordinates.lat},${temple.coordinates.lng}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 mt-3 px-4 py-2 bg-orange-100 hover:bg-orange-200 text-orange-700 border border-orange-300 rounded-xl text-sm font-medium transition-all"
            >
              <ExternalLink size={13} />
              View on Google Maps
            </a>
          </SideCard>

          {/* Tags */}
          <SideCard title="Tags">
            <div className="flex flex-wrap gap-2">
              {temple.tags.map((tag) => (
                <span key={tag} className="px-2.5 py-1 bg-amber-50 text-stone-700 border border-amber-200 text-xs rounded-lg">
                  {tag}
                </span>
              ))}
            </div>
          </SideCard>

          {/* Nearby Temples */}
          {nearbyTemples.length > 0 && (
            <SideCard title="Nearby Temples">
              <div className="space-y-3">
                {nearbyTemples.map((t) => (
                  <Link
                    key={t.slug}
                    href={`/temples/${t.slug}`}
                    className="block p-3 bg-amber-50/40 rounded-xl hover:bg-amber-50 border border-amber-200 hover:border-orange-400 transition-all group"
                  >
                    <div className="text-stone-900 text-sm font-medium group-hover:text-orange-600 transition-colors">
                      {t.name}
                    </div>
                    <div className="text-stone-600 text-xs">{t.city}, {t.state}</div>
                  </Link>
                ))}
              </div>
            </SideCard>
          )}

          {/* CTA */}
          <div className="bg-gradient-to-br from-orange-100 to-amber-100 border border-orange-300 rounded-2xl p-5 text-center">
            <div className="text-3xl mb-3">🪔</div>
            <h3 className="text-stone-900 font-semibold mb-2">Book a Pooja</h3>
            <p className="text-stone-700 text-sm mb-4">Perform sacred rituals at {temple.name} from anywhere</p>
            <Link
              href="/puja"
              className="block w-full py-3 bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-semibold rounded-xl shadow-md shadow-orange-300/40 transition-all text-sm"
            >
              Book Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h2 className="text-xl font-bold text-stone-900 mb-4">{title}</h2>
      {children}
    </div>
  );
}

function SideCard({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="bg-white border border-amber-200 rounded-2xl p-5 shadow-sm">
      <h3 className="text-stone-900 font-semibold mb-4">{title}</h3>
      {children}
    </div>
  );
}

