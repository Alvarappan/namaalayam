import Link from "next/link";
import Image from "next/image";
import { Calendar } from "lucide-react";
import { festivals } from "@/data/temples";

const festivalColors = [
  { bg: "bg-amber-900/30", border: "border-amber-700/40", text: "text-amber-400", badge: "bg-amber-500/20 text-amber-300" },
  { bg: "bg-rose-900/30", border: "border-rose-700/40", text: "text-rose-400", badge: "bg-rose-500/20 text-rose-300" },
  { bg: "bg-violet-900/30", border: "border-violet-700/40", text: "text-violet-400", badge: "bg-violet-500/20 text-violet-300" },
  { bg: "bg-orange-900/30", border: "border-orange-700/40", text: "text-orange-400", badge: "bg-orange-500/20 text-orange-300" },
  { bg: "bg-teal-900/30", border: "border-teal-700/40", text: "text-teal-400", badge: "bg-teal-500/20 text-teal-300" },
  { bg: "bg-blue-900/30", border: "border-blue-700/40", text: "text-blue-400", badge: "bg-blue-500/20 text-blue-300" },
  { bg: "bg-green-900/30", border: "border-green-700/40", text: "text-green-400", badge: "bg-green-500/20 text-green-300" },
  { bg: "bg-pink-900/30", border: "border-pink-700/40", text: "text-pink-400", badge: "bg-pink-500/20 text-pink-300" },
];

export default function FestivalsSection() {
  return (
    <section className="py-16 px-4 bg-stone-950">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-end justify-between mb-10 flex-wrap gap-4">
          <div>
            <p className="text-amber-500 text-sm font-semibold tracking-widest uppercase mb-2">
              Sacred Calendar
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Trending Festivals
            </h2>
            <p className="text-stone-400 mt-2">
              Major celebrations across South Indian temples
            </p>
          </div>
          <Link
            href="/festivals"
            className="px-5 py-2.5 border border-amber-500/50 text-amber-400 rounded-xl hover:bg-amber-500/10 transition-colors text-sm font-medium"
          >
            Full Festival Calendar →
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {festivals.map((festival, index) => {
            const color = festivalColors[index % festivalColors.length];
            return (
              <Link
                key={festival.slug}
                href={`/festivals/${festival.slug}`}
                className={`group rounded-2xl border ${color.bg} ${color.border} hover:scale-105 transition-all duration-300 overflow-hidden flex flex-col`}
              >
                <div className="relative w-full h-36 overflow-hidden">
                  <Image
                    src={`/images/festivals/${festival.slug}.png`}
                    alt={festival.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                  <span className={`absolute top-3 right-3 px-2.5 py-1 ${color.badge} backdrop-blur-sm text-xs font-medium rounded-full`}>
                    {festival.type}
                  </span>
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <h3 className="text-white font-bold text-base mb-1 group-hover:text-amber-300 transition-colors">
                    {festival.name}
                  </h3>
                  <p className="text-stone-400 text-xs mb-2">{festival.temple}</p>
                  <p className="text-stone-300/80 text-sm leading-relaxed mb-4 line-clamp-3 flex-1">
                    {festival.description}
                  </p>
                  <div className={`flex items-center gap-1.5 ${color.text} text-xs font-medium`}>
                    <Calendar size={12} />
                    <span>{festival.date}</span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
