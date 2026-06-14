import type { Metadata } from "next";
import { Suspense } from "react";
import Link from "next/link";
import { CalendarDays } from "lucide-react";
import FestivalGrid from "@/components/festivals/FestivalGrid";

export const metadata: Metadata = {
  title: "South Indian Temple Festivals · Sacred Calendar",
  description:
    "Explore the major festivals of South Indian temples: Karthigai Deepam, Chithirai, Brahmotsavam, Skanda Sashti, Pongala and more. Browse by deity with dates, stories, rituals and where to celebrate.",
};

export default function FestivalsPage() {
  return (
    <div className="min-h-screen bg-amber-50">
      {/* Page header */}
      <div className="bg-gradient-to-b from-amber-100 to-amber-50 border-b border-amber-200/60 px-4 py-12">
        <div className="max-w-7xl mx-auto">
          <p className="text-orange-600 text-sm font-semibold tracking-widest uppercase mb-2">
            Sacred Calendar
          </p>
          <h1 className="text-3xl md:text-5xl font-bold text-stone-900 mb-3">
            Temple Festivals
          </h1>
          <p className="text-stone-700 text-lg max-w-2xl mb-5">
            The great celebrations of the South Indian temple year: their stories,
            rituals, dates, and where to experience them. Tap any festival for the
            full guide.
          </p>
          <Link
            href="/calendar/tamil"
            className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-amber-300 text-orange-600 rounded-xl hover:bg-orange-50 transition-colors text-sm font-medium"
          >
            <CalendarDays size={16} />
            Looking for today&apos;s panchang? Open the daily calendar →
          </Link>
        </div>
      </div>

      <Suspense fallback={<div className="max-w-7xl mx-auto px-4 py-20 text-center text-stone-600">Loading festivals…</div>}>
        <FestivalGrid />
      </Suspense>
    </div>
  );
}
