import Link from "next/link";
import { MapPin, CalendarDays, ArrowRight } from "lucide-react";
import { type Pooja, poojaVenue } from "@/data/poojas";

const typeStyles: Record<string, string> = {
  Homam: "bg-orange-100 text-orange-700",
  Abhishekam: "bg-blue-100 text-blue-700",
  Archana: "bg-rose-100 text-rose-700",
  Seva: "bg-emerald-100 text-emerald-700",
};

export default function PoojaCard({ pooja }: { pooja: Pooja }) {
  const venue = poojaVenue(pooja);

  return (
    <Link
      href={`/poojas/${pooja.slug}`}
      className="group flex flex-col rounded-2xl border border-amber-200 bg-white p-5 shadow-sm hover:shadow-lg hover:border-orange-300 transition-all duration-300"
    >
      <div className="flex items-center justify-between mb-3">
        <span
          className={`text-xs font-semibold px-2.5 py-1 rounded-full ${
            typeStyles[pooja.type] ?? "bg-stone-100 text-stone-700"
          }`}
        >
          {pooja.type}
        </span>
        <span className="text-xs font-medium text-stone-500">{pooja.problem}</span>
      </div>

      <h3 className="text-stone-900 font-bold text-lg leading-snug mb-1 group-hover:text-orange-700 transition-colors">
        {pooja.name}
      </h3>
      <p className="text-stone-600 text-sm mb-4 line-clamp-2">{pooja.tagline}</p>

      <div className="mt-auto space-y-1.5 text-sm">
        {venue && (
          <div className="flex items-center gap-1.5 text-stone-600">
            <MapPin size={14} className="text-orange-500 flex-shrink-0" />
            <span className="truncate">
              {venue.name}, {venue.city}
            </span>
          </div>
        )}
        <div className="flex items-center gap-1.5 text-stone-600">
          <CalendarDays size={14} className="text-orange-500 flex-shrink-0" />
          <span className="truncate">{pooja.tithiRule}</span>
        </div>
      </div>

      <div className="mt-4 inline-flex items-center gap-1.5 text-orange-600 text-sm font-semibold">
        Book this Pooja
        <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
      </div>
    </Link>
  );
}
