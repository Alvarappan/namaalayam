"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, Search } from "lucide-react";

const navLinks = [
  { label: "Temples", href: "/temples" },
  { label: "Festivals", href: "/festivals" },
  { label: "Travel", href: "/travel" },
  { label: "Poojas", href: "/puja" },
  { label: "Gallery", href: "/gallery" },
  { label: "Blog", href: "/blog" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-stone-950/95 backdrop-blur-md border-b border-stone-800/60">
      <nav className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5">
          <span className="text-2xl">🛕</span>
          <div>
            <span className="text-white font-bold text-xl tracking-tight">
              Naama<span className="text-amber-500">alayam</span>
            </span>
            <p className="text-stone-500 text-[10px] leading-none tracking-widest uppercase">
              நாமாலயம்
            </p>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="px-3.5 py-2 text-stone-300 hover:text-amber-400 text-sm font-medium rounded-lg hover:bg-stone-800/60 transition-all"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Right actions */}
        <div className="hidden md:flex items-center gap-3">
          <button className="p-2 text-stone-400 hover:text-amber-400 hover:bg-stone-800/60 rounded-lg transition-all">
            <Search size={18} />
          </button>
          <Link
            href="/puja"
            className="px-4 py-2 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white text-sm font-semibold rounded-lg transition-all"
          >
            Book Pooja
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-2 text-stone-300 hover:text-white"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-stone-950 border-t border-stone-800/60 px-4 py-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block py-3 text-stone-300 hover:text-amber-400 text-sm font-medium border-b border-stone-800/40 last:border-0"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/puja"
            className="block mt-4 px-4 py-3 bg-gradient-to-r from-amber-500 to-orange-500 text-white text-sm font-semibold rounded-xl text-center"
          >
            Book Pooja
          </Link>
        </div>
      )}
    </header>
  );
}
