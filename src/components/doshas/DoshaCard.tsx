import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { type Dosha } from "@/data/doshas";

export default function DoshaCard({ dosha }: { dosha: Dosha }) {
  return (
    <Link
      href={`/doshas/${dosha.slug}`}
      className={`group relative rounded-2xl border ${dosha.theme.border} bg-gradient-to-br ${dosha.theme.gradient} p-6 hover:shadow-lg hover:scale-[1.02] transition-all duration-300 overflow-hidden`}
    >
      <div
        className={`absolute inset-0 ${dosha.theme.bg} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
      />
      <div className="relative z-10">
        <div className="flex items-center justify-between mb-3">
          <span
            className={`text-[11px] font-semibold px-2.5 py-1 rounded-full ${dosha.theme.chip}`}
          >
            {dosha.planet.split("(")[0].trim()}
          </span>
        </div>
        <h3 className="text-stone-900 text-xl font-bold mb-1">{dosha.name}</h3>
        {dosha.altNames && (
          <p className={`${dosha.theme.accent} text-xs font-medium mb-3`}>{dosha.altNames}</p>
        )}
        <p className="text-stone-700/90 text-sm leading-relaxed mb-4">{dosha.tagline}</p>
        <div
          className={`inline-flex items-center gap-1.5 ${dosha.theme.accent} text-sm font-semibold`}
        >
          Signs &amp; remedies
          <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
    </Link>
  );
}
