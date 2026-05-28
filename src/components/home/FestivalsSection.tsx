import Link from "next/link";
import Image from "next/image";
import { Calendar } from "lucide-react";
import { festivals } from "@/data/temples";

const festivalColors = [
  { bg: "bg-amber-50", border: "border-amber-200", text: "text-amber-700", badge: "bg-amber-100/90 text-amber-800" },
  { bg: "bg-rose-50", border: "border-rose-200", text: "text-rose-700", badge: "bg-rose-100/90 text-rose-800" },
  { bg: "bg-violet-50", border: "border-violet-200", text: "text-violet-700", badge: "bg-violet-100/90 text-violet-800" },
  { bg: "bg-orange-50", border: "border-orange-200", text: "text-orange-700", badge: "bg-orange-100/90 text-orange-800" },
  { bg: "bg-teal-50", border: "border-teal-200", text: "text-teal-700", badge: "bg-teal-100/90 text-teal-800" },
  { bg: "bg-blue-50", border: "border-blue-200", text: "text-blue-700", badge: "bg-blue-100/90 text-blue-800" },
  { bg: "bg-green-50", border: "border-green-200", text: "text-green-700", badge: "bg-green-100/90 text-green-800" },
  { bg: "bg-pink-50", border: "border-pink-200", text: "text-pink-700", badge: "bg-pink-100/90 text-pink-800" },
];

export default function FestivalsSection() {
  return (
    <section className="py-16 px-4 bg-amber-50">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-end justify-between mb-10 flex-wrap gap-4">
          <div>
            <p className="text-orange-600 text-sm font-semibold tracking-widest uppercase mb-2">
              Sacred Calendar
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-stone-900">
              Trending Festivals
            </h2>
            <p className="text-stone-600 mt-2">
              Major celebrations across South Indian temples
            </p>
          </div>
          <Link
            href="/festivals"
            className="px-5 py-2.5 border border-orange-500 text-orange-600 rounded-xl hover:bg-orange-50 transition-colors text-sm font-medium"
          >
            Full Festival Calendar →
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {festivals.filter((f) => f.featured !== false).map((festival, index) => {
            const color = festivalColors[index % festivalColors.length];
            return (
              <Link
                key={festival.slug}
                href={`/festivals/${festival.slug}`}
                className={`group rounded-2xl border ${color.bg} ${color.border} hover:scale-105 hover:shadow-lg transition-all duration-300 overflow-hidden flex flex-col`}
              >
                <div className="relative w-full h-36 overflow-hidden">
                  <Image
                    src={`/images/festivals/${festival.slug}.png`}
                    alt={festival.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                  <span className={`absolute top-3 right-3 px-2.5 py-1 ${color.badge} backdrop-blur-sm text-xs font-medium rounded-full`}>
                    {festival.type}
                  </span>
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <h3 className="text-stone-900 font-bold text-base mb-1 group-hover:text-orange-600 transition-colors">
                    {festival.name}
                  </h3>
                  <p className="text-stone-500 text-xs mb-2">{festival.temple}</p>
                  <p className="text-stone-700 text-sm leading-relaxed mb-4 line-clamp-3 flex-1">
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
