import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  MapPin, Clock, Star, ExternalLink,
  Plane, Train, Car, Calendar, Ticket, Shirt, Sun
} from "lucide-react";
import { temples } from "@/data/temples";
import { getTempleDetail } from "@/data/templeDetails";

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
  shiva: "bg-blue-900/60 text-blue-300 border-blue-700/50",
  vishnu: "bg-violet-900/60 text-violet-300 border-violet-700/50",
  murugan: "bg-orange-900/60 text-orange-300 border-orange-700/50",
  shakti: "bg-rose-900/60 text-rose-300 border-rose-700/50",
  krishna: "bg-teal-900/60 text-teal-300 border-teal-700/50",
  ayyappa: "bg-green-900/60 text-green-300 border-green-700/50",
  mixed: "bg-amber-900/60 text-amber-300 border-amber-700/50",
};

export default async function TempleDetailPage({ params }: Props) {
  const { slug } = await params;
  const temple = temples.find((t) => t.slug === slug);
  if (!temple) notFound();

  const detail = getTempleDetail(slug);
  const nearbyTemples = temples.filter((t) => detail.nearbyTemples.includes(t.slug));

  return (
    <div className="min-h-screen bg-stone-950">
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

      {/* Main content */}
      <div className="max-w-6xl mx-auto px-4 py-12 grid grid-cols-1 lg:grid-cols-3 gap-8">

        {/* Left: Main Info */}
        <div className="lg:col-span-2 space-y-8">

          {/* Quick Facts */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              { icon: <Clock size={18} />, label: "Morning", value: detail.timings.morning },
              { icon: <Clock size={18} />, label: "Evening", value: detail.timings.evening },
              { icon: <Ticket size={18} />, label: "Entry", value: detail.entryFee.split(".")[0] },
              { icon: <Sun size={18} />, label: "Best Time", value: detail.bestTime.split(".")[0] },
            ].map((fact) => (
              <div key={fact.label} className="bg-stone-800/60 border border-stone-700/50 rounded-xl p-4">
                <div className="text-amber-400 mb-2">{fact.icon}</div>
                <div className="text-stone-400 text-xs mb-1">{fact.label}</div>
                <div className="text-white text-sm font-medium leading-tight">{fact.value}</div>
              </div>
            ))}
          </div>

          {/* History */}
          <Section title="History" icon="📜">
            <p className="text-stone-300 leading-relaxed">{detail.history}</p>
          </Section>

          {/* Architecture */}
          <Section title="Architecture" icon="🏛️">
            <p className="text-stone-300 leading-relaxed">{detail.architecture}</p>
          </Section>

          {/* Highlights */}
          <Section title="Highlights" icon="✨">
            <ul className="space-y-3">
              {detail.highlights.map((h, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">
                    {i + 1}
                  </span>
                  <span className="text-stone-300 text-sm leading-relaxed">{h}</span>
                </li>
              ))}
            </ul>
          </Section>

          {/* Festivals */}
          <Section title="Festivals & Events" icon="🎉">
            <div className="space-y-4">
              {detail.festivals.map((f) => (
                <div key={f.name} className="bg-stone-800/50 border border-stone-700/40 rounded-xl p-4">
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <h4 className="text-white font-semibold">{f.name}</h4>
                    <span className="flex items-center gap-1.5 text-amber-400 text-xs font-medium whitespace-nowrap">
                      <Calendar size={12} />
                      {f.month}
                    </span>
                  </div>
                  <p className="text-stone-400 text-sm leading-relaxed">{f.description}</p>
                </div>
              ))}
            </div>
          </Section>

          {/* Poojas */}
          <Section title="Poojas & Sevas" icon="🪔">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-stone-700/60">
                    <th className="text-left text-stone-400 font-medium pb-3 pr-4">Pooja / Seva</th>
                    <th className="text-left text-stone-400 font-medium pb-3 pr-4">Time</th>
                    <th className="text-left text-stone-400 font-medium pb-3">Fee</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-stone-800/60">
                  {detail.poojas.map((p) => (
                    <tr key={p.name}>
                      <td className="text-white py-3 pr-4 font-medium">{p.name}</td>
                      <td className="text-stone-400 py-3 pr-4">{p.time}</td>
                      <td className="text-amber-400 py-3">{p.fee}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Section>
        </div>

        {/* Right: Sidebar */}
        <div className="space-y-6">

          {/* Visitor Info */}
          <SideCard title="Visitor Information">
            <InfoRow icon={<Shirt size={15} />} label="Dress Code" value={detail.dressCode} />
            <InfoRow icon={<Ticket size={15} />} label="Entry Fee" value={detail.entryFee} />
            <InfoRow icon={<Sun size={15} />} label="Best Time" value={detail.bestTime} />
            {detail.timings.note && (
              <div className="mt-3 p-3 bg-amber-500/10 border border-amber-500/20 rounded-lg">
                <p className="text-amber-300/80 text-xs leading-relaxed">⚠ {detail.timings.note}</p>
              </div>
            )}
          </SideCard>

          {/* How to Reach */}
          <SideCard title="How to Reach">
            <div className="space-y-4">
              <TravelRow icon={<Plane size={15} />} label="By Air" value={detail.travelInfo.byAir} />
              <TravelRow icon={<Train size={15} />} label="By Train" value={detail.travelInfo.byTrain} />
              <TravelRow icon={<Car size={15} />} label="By Road" value={detail.travelInfo.byRoad} />
            </div>
          </SideCard>

          {/* Tags */}
          <SideCard title="Tags">
            <div className="flex flex-wrap gap-2">
              {temple.tags.map((tag) => (
                <span key={tag} className="px-2.5 py-1 bg-stone-700/60 text-stone-300 text-xs rounded-lg">
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
                    className="flex items-center gap-3 p-3 bg-stone-800/60 rounded-xl hover:bg-stone-700/60 border border-stone-700/40 hover:border-amber-500/30 transition-all group"
                  >
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-amber-800 to-orange-900 flex items-center justify-center text-lg flex-shrink-0">
                      🛕
                    </div>
                    <div>
                      <div className="text-white text-sm font-medium group-hover:text-amber-400 transition-colors">
                        {t.name}
                      </div>
                      <div className="text-stone-500 text-xs">{t.city}, {t.state}</div>
                    </div>
                  </Link>
                ))}
              </div>
            </SideCard>
          )}

          {/* CTA */}
          <div className="bg-gradient-to-br from-amber-900/40 to-orange-900/40 border border-amber-700/30 rounded-2xl p-5 text-center">
            <div className="text-3xl mb-3">🪔</div>
            <h3 className="text-white font-semibold mb-2">Book a Pooja</h3>
            <p className="text-stone-400 text-sm mb-4">Perform sacred rituals at {temple.name} from anywhere</p>
            <Link
              href="/puja"
              className="block w-full py-3 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white font-semibold rounded-xl transition-all text-sm"
            >
              Book Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

function Section({ title, icon, children }: { title: string; icon: string; children: React.ReactNode }) {
  return (
    <div>
      <h2 className="flex items-center gap-2 text-xl font-bold text-white mb-4">
        <span>{icon}</span>
        {title}
      </h2>
      {children}
    </div>
  );
}

function SideCard({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="bg-stone-900/80 border border-stone-700/50 rounded-2xl p-5">
      <h3 className="text-white font-semibold mb-4">{title}</h3>
      {children}
    </div>
  );
}

function InfoRow({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div className="flex gap-3 mb-3 last:mb-0">
      <div className="text-amber-400 mt-0.5 flex-shrink-0">{icon}</div>
      <div>
        <div className="text-stone-500 text-xs mb-0.5">{label}</div>
        <div className="text-stone-300 text-sm leading-relaxed">{value}</div>
      </div>
    </div>
  );
}

function TravelRow({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div className="flex gap-3">
      <div className="text-amber-400 mt-0.5 flex-shrink-0">{icon}</div>
      <div>
        <div className="text-stone-400 text-xs font-medium mb-0.5">{label}</div>
        <div className="text-stone-300 text-xs leading-relaxed">{value}</div>
      </div>
    </div>
  );
}
