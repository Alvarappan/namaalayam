"use client";

import { useState } from "react";
import { Search, MapPin } from "lucide-react";

export default function HeroSection() {
  const [query, setQuery] = useState("");

  const suggestions = [
    "Tirupati Venkateswara",
    "Madurai Meenakshi",
    "Rameswaram",
    "Sabarimala",
    "Brihadeeswara",
  ];

  return (
    <section className="relative min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-amber-950 via-red-950 to-orange-950" />

      {/* Decorative pattern overlay */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23f59e0b' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      {/* Glow orbs */}
      <div className="absolute top-20 left-1/4 w-96 h-96 bg-amber-500/20 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-orange-500/20 rounded-full blur-3xl" />

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        {/* Sanskrit/Tamil decorative text */}
        <p className="text-amber-400/80 text-sm font-medium tracking-[0.3em] uppercase mb-4">
          ॐ நமசிவாய • Om Namo Narayanaya
        </p>

        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 leading-tight">
          Discover the Sacred{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-400">
            Temples of South India
          </span>
        </h1>

        <p className="text-amber-100/80 text-lg md:text-xl mb-10 max-w-2xl mx-auto">
          Your complete guide to 1000+ temples — history, travel, timings, poojas & festivals
        </p>

        {/* Search Box */}
        <div className="relative max-w-2xl mx-auto">
          <div className="flex items-center bg-white rounded-2xl shadow-2xl shadow-black/40 overflow-hidden">
            <div className="flex items-center pl-5 text-gray-400">
              <Search size={20} />
            </div>
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search temples, cities, deities..."
              className="flex-1 px-4 py-4 text-gray-800 text-base outline-none placeholder-gray-400"
            />
            <button className="m-2 px-6 py-3 bg-gradient-to-r from-amber-500 to-orange-500 text-white font-semibold rounded-xl hover:from-amber-600 hover:to-orange-600 transition-all duration-200 whitespace-nowrap">
              Search
            </button>
          </div>

          {/* Quick suggestions */}
          <div className="flex flex-wrap justify-center gap-2 mt-4">
            {suggestions.map((s) => (
              <button
                key={s}
                onClick={() => setQuery(s)}
                className="flex items-center gap-1.5 px-3 py-1.5 bg-white/10 hover:bg-white/20 text-white/90 text-sm rounded-full border border-white/20 transition-all"
              >
                <MapPin size={12} className="text-amber-400" />
                {s}
              </button>
            ))}
          </div>
        </div>

        {/* Stats bar */}
        <div className="flex flex-wrap justify-center gap-8 mt-12 text-center">
          {[
            { value: "1,000+", label: "Temples" },
            { value: "5", label: "States" },
            { value: "25+", label: "Festivals" },
            { value: "50+", label: "Poojas" },
          ].map((stat) => (
            <div key={stat.label}>
              <div className="text-2xl font-bold text-amber-400">{stat.value}</div>
              <div className="text-amber-100/60 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
