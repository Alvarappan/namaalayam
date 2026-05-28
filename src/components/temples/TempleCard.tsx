import Link from "next/link";
import Image from "next/image";
import { MapPin, Star } from "lucide-react";
import type { Temple } from "@/data/temples";

const categoryColors: Record<string, string> = {
  shiva: "bg-blue-100 text-blue-800 border-blue-200",
  vishnu: "bg-violet-100 text-violet-800 border-violet-200",
  murugan: "bg-orange-100 text-orange-800 border-orange-200",
  shakti: "bg-rose-100 text-rose-800 border-rose-200",
  krishna: "bg-teal-100 text-teal-800 border-teal-200",
  ayyappa: "bg-green-100 text-green-800 border-green-200",
  mixed: "bg-amber-100 text-amber-800 border-amber-200",
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

interface Props {
  temple: Temple;
  index: number;
}

export default function TempleCard({ temple, index: _index }: Props) {
  return (
    <Link
      href={`/temples/${temple.slug}`}
      className="group bg-white border border-stone-200 rounded-2xl overflow-hidden hover:border-orange-400 hover:shadow-xl hover:shadow-orange-200/40 transition-all duration-300"
    >
      <div className="relative h-44 bg-stone-100 overflow-hidden">
        <Image
          src={temple.image}
          alt={temple.name}
          fill
          sizes="(min-width: 1280px) 25vw, (min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
        <div className="absolute top-3 left-3">
          <span className={`px-2.5 py-1 text-xs font-semibold rounded-full border ${categoryColors[temple.category]}`}>
            {categoryLabels[temple.category]}
          </span>
        </div>
        <div className="absolute top-3 right-3 flex items-center gap-1 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full shadow-sm">
          <Star size={11} className="text-amber-500 fill-amber-500" />
          <span className="text-stone-800 text-xs font-semibold">{temple.rating}</span>
        </div>
      </div>
      <div className="p-4">
        <h3 className="text-stone-900 font-semibold text-base leading-tight mb-1 group-hover:text-orange-600 transition-colors">
          {temple.name}
        </h3>
        <div className="flex items-center gap-1 text-stone-500 text-xs mb-3">
          <MapPin size={11} />
          <span>{temple.city}, {temple.state}</span>
        </div>
        <p className="text-stone-600 text-xs leading-relaxed line-clamp-2">{temple.description}</p>
        <div className="flex flex-wrap gap-1.5 mt-3">
          {temple.tags.slice(0, 2).map((tag) => (
            <span key={tag} className="px-2 py-0.5 bg-amber-50 text-stone-700 border border-amber-200 text-xs rounded-md">{tag}</span>
          ))}
        </div>
      </div>
    </Link>
  );
}
