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
  { value: "shiva", label: "Shiva" },
  { value: "vishnu", label: "Vishnu" },
  { value: "murugan", label: "Murugan" },
  { value: "shakti", label: "Shakti" },
  { value: "krishna", label: "Krishna" },
  { value: "ayyappa", label: "Ayyappa" },
  { value: "mixed", label: "Trinity" },
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
    <div className="bg-white/95 border-b border-amber-200/60 sticky top-16 z-40 backdrop-blur-md shadow-sm shadow-amber-100/40">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex flex-col md:flex-row gap-3 items-stretch md:items-center">
          {/* Search */}
          <div className="relative flex-1 max-w-md">
            <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-stone-500" />
            <input
              type="text"
              value={search}
              onChange={(e) => onSearch(e.target.value)}
              placeholder="Search by name, city, deity..."
              className="w-full pl-9 pr-4 py-2.5 bg-amber-50/50 border border-amber-200 rounded-xl text-stone-900 text-sm placeholder-stone-400 outline-none focus:border-orange-400 focus:bg-white transition-colors"
            />
          </div>

          <div className="flex gap-2 flex-wrap">
            {/* Category filter */}
            <div className="relative">
              <select
                value={category}
                onChange={(e) => onCategory(e.target.value)}
                className="appearance-none pl-3 pr-8 py-2.5 bg-amber-50/50 border border-amber-200 rounded-xl text-stone-700 text-sm outline-none focus:border-orange-400 focus:bg-white transition-colors cursor-pointer"
              >
                {categories.map((c) => (
                  <option key={c.value} value={c.value}>{c.label}</option>
                ))}
              </select>
              <SlidersHorizontal size={13} className="absolute right-2.5 top-1/2 -translate-y-1/2 text-stone-500 pointer-events-none" />
            </div>

            {/* State filter */}
            <div className="relative">
              <select
                value={state}
                onChange={(e) => onState(e.target.value)}
                className="appearance-none pl-3 pr-8 py-2.5 bg-amber-50/50 border border-amber-200 rounded-xl text-stone-700 text-sm outline-none focus:border-orange-400 focus:bg-white transition-colors cursor-pointer"
              >
                {states.map((s) => (
                  <option key={s.value} value={s.value}>{s.label}</option>
                ))}
              </select>
              <SlidersHorizontal size={13} className="absolute right-2.5 top-1/2 -translate-y-1/2 text-stone-500 pointer-events-none" />
            </div>

            {/* Clear filters */}
            {(search || category || state) && (
              <button
                onClick={() => { onSearch(""); onCategory(""); onState(""); }}
                className="px-3 py-2.5 text-orange-600 text-sm hover:bg-orange-50 rounded-xl transition-colors"
              >
                Clear
              </button>
            )}
          </div>

          {/* Result count */}
          <div className="text-stone-600 text-sm whitespace-nowrap">
            {filtered === total ? (
              <span>{total} temples</span>
            ) : (
              <span><span className="text-orange-600 font-semibold">{filtered}</span> of {total}</span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
