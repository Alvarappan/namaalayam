import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { doshas } from "@/data/doshas";
import DoshaCard from "@/components/doshas/DoshaCard";

export default function DoshasSection() {
  return (
    <section className="py-16 px-4 bg-amber-50">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
          <div>
            <p className="text-orange-600 text-sm font-semibold tracking-widest uppercase mb-2">
              Find your dosha
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-stone-900">
              Doshas &amp; their Remedies
            </h2>
            <p className="text-stone-600 mt-3 max-w-xl">
              Understand the affliction in your chart and the pooja that sets it right.
            </p>
          </div>
          <Link
            href="/doshas"
            className="inline-flex items-center gap-1.5 text-orange-600 font-semibold whitespace-nowrap"
          >
            All doshas
            <ArrowRight size={16} />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {doshas.map((dosha) => (
            <DoshaCard key={dosha.slug} dosha={dosha} />
          ))}
        </div>
      </div>
    </section>
  );
}
