"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, Search } from "lucide-react";
import GopuramIcon from "./GopuramIcon";

const navLinks = [
  { label: "Temples", href: "/temples" },
  { label: "Festivals", href: "/festivals" },
  { label: "Travel", href: "/travel" },
  { label: "Poojas", href: "/puja" },
  { label: "Gallery", href: "/gallery" },
  { label: "Blog", href: "/blog" },
  { label: "Calendar", href: "/calendar" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-amber-200/60 shadow-sm shadow-amber-100/40">
      <nav className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5">
          <GopuramIcon size={30} className="text-orange-600" />
          <div>
            <span className="text-stone-900 font-bold text-xl tracking-tight">
              Nam <span className="text-orange-600">Aalayam</span>
            </span>
            <p className="text-stone-500 text-[10px] leading-none tracking-wider">
              நம் ஆலயம்
            </p>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="px-3.5 py-2 text-stone-700 hover:text-orange-600 text-sm font-medium rounded-lg hover:bg-amber-100/60 transition-all"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Right actions */}
        <div className="hidden md:flex items-center gap-3">
          <button className="p-2 text-stone-500 hover:text-orange-600 hover:bg-amber-100/60 rounded-lg transition-all">
            <Search size={18} />
          </button>
          <Link
            href="/puja"
            className="px-4 py-2 bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white text-sm font-semibold rounded-lg shadow-md shadow-orange-300/40 transition-all"
          >
            Book Pooja
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-2 text-stone-700 hover:text-orange-600"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-amber-200/60 px-4 py-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block py-3 text-stone-700 hover:text-orange-600 text-sm font-medium border-b border-amber-100 last:border-0"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/puja"
            className="block mt-4 px-4 py-3 bg-gradient-to-r from-orange-500 to-amber-500 text-white text-sm font-semibold rounded-xl text-center"
          >
            Book Pooja
          </Link>
        </div>
      )}
    </header>
  );
}
