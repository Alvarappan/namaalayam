import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { featuredTemples } from "@/data/temples";

// Temples demoted to a secondary strip — the encyclopedia is now the "where"
// behind the poojas, not the front door. Full directory lives at /temples.
export default function TemplesStrip() {
  const temples = featuredTemples.slice(0, 6);

  return (
    <section className="py-16 px-4 bg-amber-50">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
          <div>
            <p className="text-orange-600 text-sm font-semibold tracking-widest uppercase mb-2">
              The encyclopedia
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-stone-900">Explore the Temples</h2>
            <p className="text-stone-600 mt-3 max-w-xl">
              Deep guides to the sacred temples where these poojas are performed — history,
              architecture, timings, and travel.
            </p>
          </div>
          <Link
            href="/temples"
            className="inline-flex items-center gap-1.5 text-orange-600 font-semibold whitespace-nowrap"
          >
            All 25 temples
            <ArrowRight size={16} />
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {temples.map((t) => (
            <Link
              key={t.slug}
              href={`/temples/${t.slug}`}
              className="group rounded-xl overflow-hidden border border-amber-200 bg-white shadow-sm hover:shadow-md transition-all"
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src={t.image}
                  alt={t.name}
                  fill
                  sizes="(max-width: 768px) 50vw, 16vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-900/70 via-transparent to-transparent" />
                <div className="absolute bottom-0 p-3">
                  <p className="text-white font-semibold text-sm leading-tight">{t.name}</p>
                  <p className="text-white/80 text-xs">{t.city}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
