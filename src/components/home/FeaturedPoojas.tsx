import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { featuredPoojas } from "@/data/poojas";
import PoojaCard from "@/components/poojas/PoojaCard";

export default function FeaturedPoojas() {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
          <div>
            <p className="text-orange-600 text-sm font-semibold tracking-widest uppercase mb-2">
              Most sought
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-stone-900">Featured Poojas</h2>
            <p className="text-stone-600 mt-3 max-w-xl">
              Performed by temple priests on the right tithi, with prasadam delivered to you.
            </p>
          </div>
          <Link
            href="/poojas"
            className="inline-flex items-center gap-1.5 text-orange-600 font-semibold whitespace-nowrap"
          >
            View all poojas
            <ArrowRight size={16} />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredPoojas.map((pooja) => (
            <PoojaCard key={pooja.slug} pooja={pooja} />
          ))}
        </div>
      </div>
    </section>
  );
}
