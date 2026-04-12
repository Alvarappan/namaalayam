import Link from "next/link";
import { templesByCategory } from "@/data/temples";

const categories = [
  {
    key: "shiva",
    name: "Shiva Temples",
    deity: "Lord Shiva",
    description: "Jyotirlingas, Pancha Bhuta Stalas & sacred Shaivite shrines",
    icon: "🔱",
    gradient: "from-blue-900 to-indigo-900",
    border: "border-blue-700/50",
    accent: "text-blue-400",
    bg: "bg-blue-500/10",
    count: templesByCategory.shiva.length,
    href: "/temples?category=shiva",
  },
  {
    key: "vishnu",
    name: "Vishnu Temples",
    deity: "Lord Vishnu",
    description: "Divya Desams, Kshetrams & sacred Vaishnavite shrines",
    icon: "🪷",
    gradient: "from-violet-900 to-purple-900",
    border: "border-violet-700/50",
    accent: "text-violet-400",
    bg: "bg-violet-500/10",
    count: templesByCategory.vishnu.length,
    href: "/temples?category=vishnu",
  },
  {
    key: "murugan",
    name: "Murugan Temples",
    deity: "Lord Murugan",
    description: "Arupadai Veedu & the six sacred abodes of Karthikeya",
    icon: "🌟",
    gradient: "from-orange-900 to-red-900",
    border: "border-orange-700/50",
    accent: "text-orange-400",
    bg: "bg-orange-500/10",
    count: templesByCategory.murugan.length,
    href: "/temples?category=murugan",
  },
  {
    key: "shakti",
    name: "Shakti Temples",
    deity: "Goddess Shakti",
    description: "Shaktipeethas, Amman temples & divine feminine shrines",
    icon: "🌺",
    gradient: "from-rose-900 to-pink-900",
    border: "border-rose-700/50",
    accent: "text-rose-400",
    bg: "bg-rose-500/10",
    count: templesByCategory.shakti.length,
    href: "/temples?category=shakti",
  },
];

export default function CategoriesSection() {
  return (
    <section className="py-16 px-4 bg-stone-950">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-amber-500 text-sm font-semibold tracking-widest uppercase mb-2">
            Browse by Deity
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Temple Categories
          </h2>
          <p className="text-stone-400 mt-3 max-w-xl mx-auto">
            Explore temples by the presiding deity across all of South India
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat) => (
            <Link
              key={cat.key}
              href={cat.href}
              className={`group relative rounded-2xl border ${cat.border} bg-gradient-to-br ${cat.gradient} p-6 hover:scale-105 transition-all duration-300 overflow-hidden`}
            >
              {/* Background glow on hover */}
              <div className={`absolute inset-0 ${cat.bg} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

              <div className="relative z-10">
                <div className="text-5xl mb-4">{cat.icon}</div>
                <h3 className="text-white text-xl font-bold mb-1">{cat.name}</h3>
                <p className={`${cat.accent} text-sm font-medium mb-3`}>{cat.deity}</p>
                <p className="text-stone-300/70 text-sm leading-relaxed mb-4">
                  {cat.description}
                </p>
                <div className={`inline-flex items-center gap-2 ${cat.accent} text-sm font-semibold`}>
                  <span>{cat.count} temples</span>
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
