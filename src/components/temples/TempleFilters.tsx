"use client";

import { Search, SlidersHorizontal } from "lucide-react";

interface Props {
  search: string;
  onSearch: (v: string) => void;
  category: string;
  onCategory: (v: string) => void;
  state: string;
  onState: (v: string) => void;
  total: number;
  filtered: number;
}

const categories = [
  { value: "", label: "All Deities" },
  { value: "shiva", label: "🔱 Shiva" },
  { value: "vishnu", label: "🪷 Vishnu" },
  { value: "murugan", label: "🌟 Murugan" },
  { value: "shakti", label: "🌺 Shakti" },
  { value: "krishna", label: "🦚 Krishna" },
  { value: "ayyappa", label: "🌿 Ayyappa" },
  { value: "mixed", label: "✨ Trinity" },
];

const states = [
  { value: "", label: "All States" },
  { value: "Tamil Nadu", label: "Tamil Nadu" },
  { value: "Kerala", label: "Kerala" },
  { value: "Karnataka", label: "Karnataka" },
  { value: "Andhra Pradesh", label: "Andhra Pradesh" },
  { value: "Telangana", label: "Telangana" },
];

export default function TempleFilters({ search, onSearch, category, onCategory, state, onState, total, filtered }: Props) {
  return (
    <div className="bg-stone-900/80 border-b border-stone-800/60 sticky top-16 z-40 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex flex-col md:flex-row gap-3 items-stretch md:items-center">
          {/* Search */}
          <div className="relative flex-1 max-w-md">
            <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-stone-400" />
            <input
              type="text"
              value={search}
              onChange={(e) => onSearch(e.target.value)}
              placeholder="Search by name, city, deity..."
              className="w-full pl-9 pr-4 py-2.5 bg-stone-800 border border-stone-700/60 rounded-xl text-white text-sm placeholder-stone-500 outline-none focus:border-amber-500/50 transition-colors"
            />
          </div>

          <div className="flex gap-2 flex-wrap">
            {/* Category filter */}
            <div className="relative">
              <select
                value={category}
                onChange={(e) => onCategory(e.target.value)}
                className="appearance-none pl-3 pr-8 py-2.5 bg-stone-800 border border-stone-700/60 rounded-xl text-stone-300 text-sm outline-none focus:border-amber-500/50 transition-colors cursor-pointer"
              >
                {categories.map((c) => (
                  <option key={c.value} value={c.value}>{c.label}</option>
                ))}
              </select>
              <SlidersHorizontal size={13} className="absolute right-2.5 top-1/2 -translate-y-1/2 text-stone-400 pointer-events-none" />
            </div>

            {/* State filter */}
            <div className="relative">
              <select
                value={state}
                onChange={(e) => onState(e.target.value)}
                className="appearance-none pl-3 pr-8 py-2.5 bg-stone-800 border border-stone-700/60 rounded-xl text-stone-300 text-sm outline-none focus:border-amber-500/50 transition-colors cursor-pointer"
              >
                {states.map((s) => (
                  <option key={s.value} value={s.value}>{s.label}</option>
                ))}
              </select>
              <SlidersHorizontal size={13} className="absolute right-2.5 top-1/2 -translate-y-1/2 text-stone-400 pointer-events-none" />
            </div>

            {/* Clear filters */}
            {(search || category || state) && (
              <button
                onClick={() => { onSearch(""); onCategory(""); onState(""); }}
                className="px-3 py-2.5 text-amber-400 text-sm hover:bg-amber-500/10 rounded-xl transition-colors"
              >
                Clear
              </button>
            )}
          </div>

          {/* Result count */}
          <div className="text-stone-500 text-sm whitespace-nowrap">
            {filtered === total ? (
              <span>{total} temples</span>
            ) : (
              <span><span className="text-amber-400 font-medium">{filtered}</span> of {total}</span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
