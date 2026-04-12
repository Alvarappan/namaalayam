import Link from "next/link";
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
                className={`group p-5 rounded-2xl border ${color.bg} ${color.border} hover:scale-105 transition-all duration-300`}
              >
                <div className="flex items-start justify-between mb-3">
                  <span className={`text-3xl`}>🎉</span>
                  <span className={`px-2.5 py-1 ${color.badge} text-xs font-medium rounded-full`}>
                    {festival.type}
                  </span>
                </div>
                <h3 className="text-white font-bold text-base mb-1 group-hover:text-amber-300 transition-colors">
                  {festival.name}
                </h3>
                <p className="text-stone-400 text-sm mb-3">{festival.temple}</p>
                <div className={`flex items-center gap-1.5 ${color.text} text-xs font-medium`}>
                  <Calendar size={12} />
                  <span>{festival.date}</span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
