import type { Metadata } from "next";
import { Suspense } from "react";
import TempleGrid from "@/components/temples/TempleGrid";

export const metadata: Metadata = {
  title: "South Indian Temple Directory",
  description: "Browse and search 1000+ South Indian temples across Tamil Nadu, Kerala, Karnataka, Andhra Pradesh and Telangana. Filter by deity, state, and more.",
};

export default function TemplesPage() {
  return (
    <div className="min-h-screen bg-amber-50">
      {/* Page header */}
      <div className="bg-gradient-to-b from-amber-100 to-amber-50 border-b border-amber-200/60 px-4 py-12">
        <div className="max-w-7xl mx-auto">
          <p className="text-orange-600 text-sm font-semibold tracking-widest uppercase mb-2">
            Digital Encyclopedia
          </p>
          <h1 className="text-3xl md:text-5xl font-bold text-stone-900 mb-3">
            South Indian Temples
          </h1>
          <p className="text-stone-700 text-lg max-w-2xl">
            Explore the sacred temples of Tamil Nadu, Kerala, Karnataka, Andhra Pradesh
            and Telangana — with history, travel guides, timings, and more.
          </p>
        </div>
      </div>

      <Suspense fallback={<div className="max-w-7xl mx-auto px-4 py-20 text-center text-stone-600">Loading temples…</div>}>
        <TempleGrid />
      </Suspense>
    </div>
  );
}
