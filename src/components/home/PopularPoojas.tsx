import Link from "next/link";
import { popularPoojas } from "@/data/temples";

export default function PopularPoojas() {
  return (
    <section className="py-16 px-4 bg-stone-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-amber-500 text-sm font-semibold tracking-widest uppercase mb-2">
            Divine Offerings
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white">Popular Poojas</h2>
          <p className="text-stone-400 mt-3 max-w-xl mx-auto">
            Book sacred rituals at the most revered South Indian temples
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {popularPoojas.map((pooja) => (
            <div
              key={pooja.name}
              className="group flex gap-4 p-5 bg-stone-800/50 border border-stone-700/50 rounded-2xl hover:border-amber-500/40 hover:bg-stone-800/80 transition-all duration-300 cursor-pointer"
            >
              <div className="text-4xl flex-shrink-0">{pooja.icon}</div>
              <div className="flex-1 min-w-0">
                <h3 className="text-white font-semibold text-base mb-1 group-hover:text-amber-400 transition-colors">
                  {pooja.name}
                </h3>
                <p className="text-stone-400 text-sm leading-relaxed mb-3">
                  {pooja.description}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {pooja.temples.map((temple) => (
                    <span
                      key={temple}
                      className="px-2 py-0.5 bg-amber-900/40 text-amber-400/80 text-xs rounded-md border border-amber-700/30"
                    >
                      {temple}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/puja"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white font-semibold rounded-xl transition-all duration-200 shadow-lg shadow-amber-900/30"
          >
            Browse All Poojas →
          </Link>
        </div>
      </div>
    </section>
  );
}
