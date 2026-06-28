"use client";

import { useState } from "react";
import Link from "next/link";
import { Search, Sparkles } from "lucide-react";

// Phase 1: the search is visual only (wired to the /poojas catalog later).
// The intent chips are real links into the dosha / pooja sections.
const intents = [
  { label: "Marriage delays", href: "/doshas/mangal-dosha" },
  { label: "Naga Dosha", href: "/doshas/naga-dosha" },
  { label: "Ancestral (Pitru) Dosha", href: "/doshas/pitru-dosha" },
  { label: "Wealth & debt", href: "/poojas" },
  { label: "Progeny", href: "/poojas" },
  { label: "Kala Sarpa", href: "/doshas/kalasarpa-dosha" },
];

export default function PoojaHero() {
  const [query, setQuery] = useState("");

  return (
    <section className="relative min-h-[560px] flex items-start justify-center overflow-hidden pt-16 md:pt-20">
      <div className="absolute inset-0 bg-gradient-to-br from-amber-100 via-orange-100 to-amber-200" />
      <div
        className="absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23c2410c' fill-opacity='0.5'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />
      <div className="absolute top-20 left-1/4 w-96 h-96 bg-amber-300/40 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-orange-300/40 rounded-full blur-3xl" />

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <p className="text-orange-700 text-sm font-medium tracking-[0.3em] uppercase mb-4">
          ॐ • Poojas · Doshas · Tithis
        </p>

        <h1 className="text-3xl md:text-5xl font-bold text-stone-900 mb-4 leading-tight">
          Find the right{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-amber-600">
            Pooja for your need
          </span>
        </h1>

        <p className="text-stone-700 text-lg md:text-xl mb-9 max-w-2xl mx-auto">
          Remedies for every dosha, performed on the right tithi at South India&apos;s most
          sacred temples — booked for you.
        </p>

        <div className="relative max-w-2xl mx-auto">
          <div className="flex items-center bg-white rounded-2xl shadow-xl shadow-orange-300/30 ring-1 ring-amber-200/60 overflow-hidden">
            <div className="flex items-center pl-5 text-gray-400">
              <Search size={20} />
            </div>
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search a pooja, dosha, or your concern…"
              className="flex-1 px-4 py-4 text-gray-800 text-base outline-none placeholder-gray-400"
            />
            <Link
              href="/poojas"
              className="m-2 px-6 py-3 bg-gradient-to-r from-orange-500 to-amber-500 text-white font-semibold rounded-xl hover:from-orange-600 hover:to-amber-600 transition-all duration-200 whitespace-nowrap"
            >
              Explore
            </Link>
          </div>

          <div className="flex flex-wrap justify-center gap-2 mt-4">
            {intents.map((s) => (
              <Link
                key={s.label}
                href={s.href}
                className="flex items-center gap-1.5 px-3 py-1.5 bg-white/70 hover:bg-white text-stone-700 text-sm rounded-full border border-amber-300/60 shadow-sm transition-all"
              >
                <Sparkles size={12} className="text-orange-600" />
                {s.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-8 mt-7 text-center">
          {[
            { value: "20+", label: "Poojas & Homams" },
            { value: "6", label: "Doshas covered" },
            { value: "25", label: "Sacred temples" },
          ].map((stat) => (
            <div key={stat.label}>
              <div className="text-2xl font-bold text-orange-700">{stat.value}</div>
              <div className="text-stone-600 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
