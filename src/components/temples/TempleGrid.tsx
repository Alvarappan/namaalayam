"use client";

import { useState, useMemo } from "react";
import { temples } from "@/data/temples";
import TempleCard from "./TempleCard";
import TempleFilters from "./TempleFilters";

export default function TempleGrid() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [state, setState] = useState("");

  const filtered = useMemo(() => {
    return temples.filter((t) => {
      const matchSearch =
        !search ||
        t.name.toLowerCase().includes(search.toLowerCase()) ||
        t.city.toLowerCase().includes(search.toLowerCase()) ||
        t.deity.toLowerCase().includes(search.toLowerCase()) ||
        t.tags.some((tag) => tag.toLowerCase().includes(search.toLowerCase()));
      const matchCategory = !category || t.category === category;
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
            <h3 className="text-white text-xl font-semibold mb-2">No temples found</h3>
            <p className="text-stone-400">Try adjusting your search or filters</p>
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
