import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Calendar, MapPin, Sparkles } from "lucide-react";
import { festivals, temples } from "@/data/temples";
import { getFestivalDetail } from "@/data/festivalDetails";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return festivals.map((f) => ({ slug: f.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const festival = festivals.find((f) => f.slug === slug);
  if (!festival) return {};
  return {
    title: `${festival.name} — Significance, Rituals & Festival Guide`,
    description: festival.description,
    openGraph: { title: festival.name, description: festival.description },
  };
}

export default async function FestivalDetailPage({ params }: Props) {
  const { slug } = await params;
  const festival = festivals.find((f) => f.slug === slug);
  if (!festival) notFound();

  const detail = getFestivalDetail(slug);
  const relatedTemples = detail?.relatedTempleSlugs
    ? temples.filter((t) => detail.relatedTempleSlugs?.includes(t.slug))
    : [];

  return (
    <div className="min-h-screen bg-amber-50">
      {/* Hero */}
      <div className="relative bg-stone-900 py-16 px-4 overflow-hidden min-h-[380px] flex items-center">
        <Image
          src={`/images/festivals/${festival.slug}.png`}
          alt={festival.name}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/70 to-black/40" />

        <div className="relative z-10 max-w-4xl mx-auto">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-white/60 text-sm mb-6">
            <Link href="/" className="hover:text-amber-400 transition-colors">Home</Link>
            <span>›</span>
            <Link href="/festivals" className="hover:text-amber-400 transition-colors">Festivals</Link>
            <span>›</span>
            <span className="text-white/80">{festival.name}</span>
          </div>

          <div className="flex flex-wrap items-start gap-3 mb-4">
            <span className="px-3 py-1 text-sm font-semibold rounded-full bg-amber-100/95 text-amber-900 border border-amber-200">
              {festival.type}
            </span>
            <span className="flex items-center gap-1.5 px-3 py-1 bg-black/30 rounded-full text-white/70 text-sm">
              <Calendar size={13} className="text-amber-400" />
              {festival.date}
            </span>
            <span className="flex items-center gap-1.5 px-3 py-1 bg-black/30 rounded-full text-white/70 text-sm">
              <MapPin size={13} className="text-amber-400" />
              {festival.temple}
            </span>
          </div>

          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">{festival.name}</h1>
          <p className="text-white/80 text-lg leading-relaxed max-w-3xl">{festival.description}</p>
        </div>
      </div>

      {/* Main content */}
      <div className="max-w-4xl mx-auto px-4 py-12 space-y-10">
        {detail ? (
          <>
            <Section title="Overview">
              <p className="text-stone-700 leading-relaxed">{detail.intro}</p>
            </Section>

            <Section title="Significance">
              <p className="text-stone-700 leading-relaxed">{detail.significance}</p>
            </Section>

            <Section title="The Story Behind the Festival">
              <p className="text-stone-700 leading-relaxed">{detail.story}</p>
            </Section>

            <Section title="Rituals & Observances">
              <ul className="space-y-3">
                {detail.rituals.map((r, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Sparkles size={16} className="text-orange-600 flex-shrink-0 mt-1" />
                    <span className="text-stone-700 leading-relaxed">{r}</span>
                  </li>
                ))}
              </ul>
            </Section>

            <Section title="When & Where">
              <div className="bg-white border border-amber-200 rounded-2xl p-6 space-y-4 shadow-sm">
                <InfoRow label="Duration" value={detail.whenWhere.duration} />
                <InfoRow label="Main Temple" value={detail.whenWhere.mainTemple} />
                {detail.whenWhere.otherLocations && (
                  <InfoRow label="Also Celebrated At" value={detail.whenWhere.otherLocations.join(" · ")} />
                )}
              </div>
            </Section>

            <Section title="For Devotees">
              <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6">
                <p className="text-amber-900 leading-relaxed">{detail.forDevotees}</p>
              </div>
            </Section>

            {relatedTemples.length > 0 && (
              <Section title="Related Temples">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {relatedTemples.map((t) => (
                    <Link
                      key={t.slug}
                      href={`/temples/${t.slug}`}
                      className="flex items-center gap-4 p-4 bg-white hover:bg-amber-50 border border-amber-200 hover:border-orange-400 rounded-2xl shadow-sm transition-all group"
                    >
                      <div className="relative w-16 h-16 rounded-xl overflow-hidden flex-shrink-0">
                        <Image src={t.image} alt={t.name} fill sizes="64px" className="object-cover" />
                      </div>
                      <div>
                        <div className="text-stone-900 font-semibold group-hover:text-orange-600 transition-colors">
                          {t.name}
                        </div>
                        <div className="text-stone-600 text-sm">{t.city}, {t.state}</div>
                      </div>
                    </Link>
                  ))}
                </div>
              </Section>
            )}
          </>
        ) : (
          <div className="bg-white border border-amber-200 rounded-xl p-8 text-center">
            <p className="text-stone-600">Detailed information for this festival is coming soon.</p>
          </div>
        )}
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

function InfoRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex gap-3">
      <div className="text-orange-600 text-xs uppercase tracking-wider w-32 flex-shrink-0 mt-0.5">{label}</div>
      <div className="text-stone-800 leading-relaxed">{value}</div>
    </div>
  );
}
