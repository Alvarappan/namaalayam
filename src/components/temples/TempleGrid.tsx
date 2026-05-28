"use client";

import { useState, useMemo, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { temples } from "@/data/temples";
import TempleCard from "./TempleCard";
import TempleFilters from "./TempleFilters";

export default function TempleGrid() {
  const searchParams = useSearchParams();
  const urlCategory = searchParams.get("category") ?? "";
  const urlState = searchParams.get("state") ?? "";

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState(urlCategory);
  const [state, setState] = useState(urlState);

  // Sync filters when URL changes (e.g. navigating from /temples?category=shiva to ?category=vishnu)
  useEffect(() => {
    setCategory(urlCategory);
    setState(urlState);
  }, [urlCategory, urlState]);

  const filtered = useMemo(() => {
    return temples.filter((t) => {
      const matchSearch =
        !search ||
        t.name.toLowerCase().includes(search.toLowerCase()) ||
        t.city.toLowerCase().includes(search.toLowerCase()) ||
        t.deity.toLowerCase().includes(search.toLowerCase()) ||
        t.tags.some((tag) => tag.toLowerCase().includes(search.toLowerCase()));
      // "vishnu" filter is treated as a group that also includes krishna temples,
      // matching the homepage Categories card grouping (templesByCategory.vishnu).
      const matchCategory =
        !category ||
        t.category === category ||
        (category === "vishnu" && t.category === "krishna");
      const matchState = !state || t.state === state;
      return matchSearch && matchCategory && matchState;
    });
  }, [search, category, state]);

  return (
    <>
      <TempleFilters
        search={search}
        onSearch={setSearch}
        category={category}
        onCategory={setCategory}
        state={state}
        onState={setState}
        total={temples.length}
        filtered={filtered.length}
      />

      <div className="max-w-7xl mx-auto px-4 py-10">
        {filtered.length === 0 ? (
          <div className="text-center py-20">
            <div className="text-5xl mb-4">🔍</div>
            <h3 className="text-stone-900 text-xl font-semibold mb-2">No temples found</h3>
            <p className="text-stone-600">Try adjusting your search or filters</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filtered.map((temple, index) => (
              <TempleCard key={temple.id} temple={temple} index={index} />
            ))}
          </div>
        )}
      </div>
    </>
  );
}
