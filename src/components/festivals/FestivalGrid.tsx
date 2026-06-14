"use client";

import { useState, useMemo, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { Search, SlidersHorizontal } from "lucide-react";
import { festivals } from "@/data/temples";
import FestivalCard from "./FestivalCard";

const categoryLabels: Record<string, string> = {
  shiva: "Shiva",
  vishnu: "Vishnu",
  murugan: "Murugan",
  shakti: "Devi (Shakti)",
  krishna: "Krishna",
  ayyappa: "Ayyappa",
  mixed: "Multi-faith",
};

// Build the deity filter options from the festivals actually present, in a stable order.
const categoryOrder = ["shiva", "vishnu", "murugan", "shakti", "krishna", "ayyappa", "mixed"];
const availableCategories = categoryOrder.filter((c) =>
  festivals.some((f) => f.category === c)
);

export default function FestivalGrid() {
  const searchParams = useSearchParams();
  const urlCategory = searchParams.get("category") ?? "";

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState(urlCategory);

  // Keep the filter in sync if the URL category changes (e.g. linked from elsewhere).
  useEffect(() => {
    setCategory(urlCategory);
  }, [urlCategory]);

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase();
    return festivals.filter((f) => {
      const matchSearch =
        !q ||
        f.name.toLowerCase().includes(q) ||
        f.temple.toLowerCase().includes(q) ||
        f.type.toLowerCase().includes(q) ||
        f.description.toLowerCase().includes(q);
      const matchCategory = !category || f.category === category;
      return matchSearch && matchCategory;
    });
  }, [search, category]);

  return (
    <>
      {/* Filter bar */}
      <div className="bg-white/95 border-b border-amber-200/60 sticky top-16 z-40 backdrop-blur-md shadow-sm shadow-amber-100/40">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row gap-3 items-stretch md:items-center">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-stone-500" />
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search festivals, temples..."
                className="w-full pl-9 pr-4 py-2.5 bg-amber-50/50 border border-amber-200 rounded-xl text-stone-900 text-sm placeholder-stone-400 outline-none focus:border-orange-400 focus:bg-white transition-colors"
              />
            </div>

            {/* Deity chips */}
            <div className="flex gap-2 flex-wrap items-center">
              <SlidersHorizontal size={14} className="text-stone-500 hidden md:block" />
              <button
                onClick={() => setCategory("")}
                className={`px-3 py-1.5 rounded-full text-sm font-medium transition-colors border ${
                  category === ""
                    ? "bg-orange-500 border-orange-500 text-white"
                    : "bg-amber-50/50 border-amber-200 text-stone-700 hover:bg-orange-50"
                }`}
              >
                All
              </button>
              {availableCategories.map((c) => (
                <button
                  key={c}
                  onClick={() => setCategory(c)}
                  className={`px-3 py-1.5 rounded-full text-sm font-medium transition-colors border ${
                    category === c
                      ? "bg-orange-500 border-orange-500 text-white"
                      : "bg-amber-50/50 border-amber-200 text-stone-700 hover:bg-orange-50"
                  }`}
                >
                  {categoryLabels[c] ?? c}
                </button>
              ))}
            </div>

            {/* Result count */}
            <div className="text-stone-600 text-sm whitespace-nowrap md:ml-auto">
              {filtered.length === festivals.length ? (
                <span>{festivals.length} festivals</span>
              ) : (
                <span><span className="text-orange-600 font-semibold">{filtered.length}</span> of {festivals.length}</span>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-10">
        {filtered.length === 0 ? (
          <div className="text-center py-20">
            <div className="text-5xl mb-4">🔍</div>
            <h3 className="text-stone-900 text-xl font-semibold mb-2">No festivals found</h3>
            <p className="text-stone-600">Try adjusting your search or filter</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filtered.map((festival, index) => (
              <FestivalCard key={festival.slug} festival={festival} index={index} />
            ))}
          </div>
        )}
      </div>
    </>
  );
}
