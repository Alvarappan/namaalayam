import Link from "next/link";
import { MapPin, Star } from "lucide-react";
import { temples } from "@/data/temples";

const categoryColors: Record<string, string> = {
  shiva: "bg-blue-900/60 text-blue-300 border-blue-700/50",
  vishnu: "bg-violet-900/60 text-violet-300 border-violet-700/50",
  murugan: "bg-orange-900/60 text-orange-300 border-orange-700/50",
  shakti: "bg-rose-900/60 text-rose-300 border-rose-700/50",
  krishna: "bg-teal-900/60 text-teal-300 border-teal-700/50",
  ayyappa: "bg-green-900/60 text-green-300 border-green-700/50",
  mixed: "bg-amber-900/60 text-amber-300 border-amber-700/50",
};

const categoryLabels: Record<string, string> = {
  shiva: "Shiva",
  vishnu: "Vishnu",
  murugan: "Murugan",
  shakti: "Shakti",
  krishna: "Krishna",
  ayyappa: "Ayyappa",
  mixed: "Trinity",
};

// Temple placeholder colors for when images aren't loaded
const templeGradients = [
  "from-amber-800 to-orange-900",
  "from-red-800 to-rose-900",
  "from-blue-800 to-indigo-900",
  "from-violet-800 to-purple-900",
  "from-teal-800 to-cyan-900",
  "from-green-800 to-emerald-900",
];

export default function FeaturedTemples() {
  const allTemples = temples;

  return (
    <section className="py-16 px-4 bg-stone-900">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-end justify-between mb-10 flex-wrap gap-4">
          <div>
            <p className="text-amber-500 text-sm font-semibold tracking-widest uppercase mb-2">
              Top Destinations
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Featured Temples
            </h2>
            <p className="text-stone-400 mt-2">
              The 25 most revered temples across South India
            </p>
          </div>
          <Link
            href="/temples"
            className="px-5 py-2.5 border border-amber-500/50 text-amber-400 rounded-xl hover:bg-amber-500/10 transition-colors text-sm font-medium"
          >
            View All Temples →
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {allTemples.map((temple, index) => (
            <Link
              key={temple.id}
              href={`/temples/${temple.slug}`}
              className="group bg-stone-800/60 border border-stone-700/50 rounded-2xl overflow-hidden hover:border-amber-500/40 hover:shadow-xl hover:shadow-amber-900/20 transition-all duration-300"
            >
              {/* Temple Image / Placeholder */}
              <div
                className={`relative h-44 bg-gradient-to-br ${
                  templeGradients[index % templeGradients.length]
                } overflow-hidden`}
              >
                {/* Decorative temple silhouette */}
                <div className="absolute inset-0 flex items-end justify-center pb-0 opacity-20">
                  <svg viewBox="0 0 200 120" className="w-full" fill="currentColor">
                    <rect x="90" y="20" width="20" height="80" className="text-white" />
                    <polygon points="100,5 85,25 115,25" className="text-white" />
                    <rect x="70" y="50" width="60" height="50" className="text-white" />
                    <rect x="50" y="70" width="100" height="30" className="text-white" />
                    <rect x="30" y="85" width="140" height="15" className="text-white" />
                    <rect x="10" y="95" width="180" height="5" className="text-white" />
                  </svg>
                </div>

                {/* Category badge */}
                <div className="absolute top-3 left-3">
                  <span
                    className={`px-2.5 py-1 text-xs font-semibold rounded-full border ${
                      categoryColors[temple.category]
                    }`}
                  >
                    {categoryLabels[temple.category]}
                  </span>
                </div>

                {/* Rating */}
                <div className="absolute top-3 right-3 flex items-center gap-1 bg-black/40 backdrop-blur-sm px-2 py-1 rounded-full">
                  <Star size={11} className="text-amber-400 fill-amber-400" />
                  <span className="text-white text-xs font-medium">{temple.rating}</span>
                </div>

                {/* Temple number */}
                <div className="absolute bottom-3 right-3 w-7 h-7 rounded-full bg-black/40 backdrop-blur-sm flex items-center justify-center">
                  <span className="text-amber-400 text-xs font-bold">#{temple.id}</span>
                </div>
              </div>

              {/* Card Content */}
              <div className="p-4">
                <h3 className="text-white font-semibold text-base leading-tight mb-1 group-hover:text-amber-400 transition-colors">
                  {temple.name}
                </h3>
                <div className="flex items-center gap-1 text-stone-400 text-xs mb-3">
                  <MapPin size={11} />
                  <span>
                    {temple.city}, {temple.state}
                  </span>
                </div>
                <p className="text-stone-400/80 text-xs leading-relaxed line-clamp-2">
                  {temple.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mt-3">
                  {temple.tags.slice(0, 2).map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 bg-stone-700/60 text-stone-400 text-xs rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
