import Link from "next/link";

const footerLinks = {
  Temples: [
    { label: "Shiva Temples", href: "/temples?category=shiva" },
    { label: "Vishnu Temples", href: "/temples?category=vishnu" },
    { label: "Murugan Temples", href: "/temples?category=murugan" },
    { label: "Shakti Temples", href: "/temples?category=shakti" },
    { label: "All Temples", href: "/temples" },
  ],
  Discover: [
    { label: "Festival Calendar", href: "/festivals" },
    { label: "Travel Guides", href: "/travel" },
    { label: "Book Poojas", href: "/puja" },
    { label: "Photo Gallery", href: "/gallery" },
    { label: "Temple Blog", href: "/blog" },
  ],
  States: [
    { label: "Tamil Nadu", href: "/temples?state=tamil-nadu" },
    { label: "Kerala", href: "/temples?state=kerala" },
    { label: "Karnataka", href: "/temples?state=karnataka" },
    { label: "Andhra Pradesh", href: "/temples?state=andhra-pradesh" },
    { label: "Telangana", href: "/temples?state=telangana" },
  ],
  Company: [
    { label: "About Us", href: "/about" },
    { label: "Contact", href: "/contact" },
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Use", href: "/terms" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-stone-950 border-t border-stone-800/60">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <span className="text-2xl">🛕</span>
              <span className="text-white font-bold text-lg">
                Naama<span className="text-amber-500">alayam</span>
              </span>
            </Link>
            <p className="text-stone-400 text-sm leading-relaxed">
              Your complete digital guide to the sacred temples of South India.
            </p>
            <div className="flex gap-3 mt-5">
              {["𝕏", "f", "in", "▶"].map((icon, i) => (
                <button
                  key={i}
                  className="w-8 h-8 bg-stone-800 hover:bg-amber-500/20 hover:text-amber-400 text-stone-400 rounded-lg flex items-center justify-center text-sm transition-all"
                >
                  {icon}
                </button>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-white font-semibold text-sm mb-4">{category}</h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-stone-400 hover:text-amber-400 text-sm transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-8 border-t border-stone-800/60 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-stone-500 text-sm">
            © {new Date().getFullYear()} Namaalayam.com · All rights reserved
          </p>
          <p className="text-stone-600 text-xs">
            🙏 Dedicated to the sacred temples of South India
          </p>
        </div>
      </div>
    </footer>
  );
}
