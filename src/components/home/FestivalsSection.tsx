import Link from "next/link";
import { festivals } from "@/data/temples";
import FestivalCard from "@/components/festivals/FestivalCard";

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
          {festivals.filter((f) => f.featured !== false).map((festival, index) => (
            <FestivalCard key={festival.slug} festival={festival} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
