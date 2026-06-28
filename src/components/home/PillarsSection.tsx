import Link from "next/link";
import { Flame, ShieldAlert, CalendarDays, ArrowRight } from "lucide-react";

const pillars = [
  {
    title: "By Pooja",
    description: "Browse homams, abhishekams, and archanas by deity, occasion, and the problem they solve.",
    href: "/poojas",
    cta: "Explore poojas",
    icon: Flame,
    gradient: "from-orange-50 to-amber-100",
    border: "border-orange-200",
    accent: "text-orange-700",
    iconBg: "bg-orange-100 text-orange-600",
  },
  {
    title: "By Dosha",
    description: "Identify your dosha — Pitru, Naga, Mangal, Guru Chandal, Kala Sarpa, Rahu-Ketu — and its remedy.",
    href: "/doshas",
    cta: "Find your dosha",
    icon: ShieldAlert,
    gradient: "from-violet-50 to-indigo-100",
    border: "border-violet-200",
    accent: "text-violet-700",
    iconBg: "bg-violet-100 text-violet-600",
  },
  {
    title: "By Today's Tithi",
    description: "See what's auspicious today and this week, and the poojas best performed right now.",
    href: "/tithis",
    cta: "Today's calendar",
    icon: CalendarDays,
    gradient: "from-emerald-50 to-teal-100",
    border: "border-emerald-200",
    accent: "text-emerald-700",
    iconBg: "bg-emerald-100 text-emerald-600",
  },
];

export default function PillarsSection() {
  return (
    <section className="py-16 px-4 bg-amber-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-orange-600 text-sm font-semibold tracking-widest uppercase mb-2">
            Three ways in
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-stone-900">
            Where would you like to begin?
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pillars.map((p) => {
            const Icon = p.icon;
            return (
              <Link
                key={p.title}
                href={p.href}
                className={`group rounded-2xl border ${p.border} bg-gradient-to-br ${p.gradient} p-7 hover:shadow-lg hover:scale-[1.02] transition-all duration-300`}
              >
                <div className={`inline-flex p-3 rounded-xl ${p.iconBg} mb-5`}>
                  <Icon size={26} />
                </div>
                <h3 className="text-stone-900 text-2xl font-bold mb-2">{p.title}</h3>
                <p className="text-stone-700/90 text-sm leading-relaxed mb-5">{p.description}</p>
                <div className={`inline-flex items-center gap-1.5 ${p.accent} font-semibold`}>
                  {p.cta}
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
