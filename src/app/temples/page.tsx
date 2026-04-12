import type { Metadata } from "next";
import TempleGrid from "@/components/temples/TempleGrid";

export const metadata: Metadata = {
  title: "South Indian Temple Directory",
  description: "Browse and search 1000+ South Indian temples across Tamil Nadu, Kerala, Karnataka, Andhra Pradesh and Telangana. Filter by deity, state, and more.",
};

export default function TemplesPage() {
  return (
    <div className="min-h-screen bg-stone-950">
      {/* Page header */}
      <div className="bg-gradient-to-b from-stone-900 to-stone-950 border-b border-stone-800/60 px-4 py-12">
        <div className="max-w-7xl mx-auto">
          <p className="text-amber-500 text-sm font-semibold tracking-widest uppercase mb-2">
            Digital Encyclopedia
          </p>
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-3">
            South Indian Temples
          </h1>
          <p className="text-stone-400 text-lg max-w-2xl">
            Explore the sacred temples of Tamil Nadu, Kerala, Karnataka, Andhra Pradesh
            and Telangana — with history, travel guides, timings, and more.
          </p>
        </div>
      </div>

      <TempleGrid />
    </div>
  );
}
