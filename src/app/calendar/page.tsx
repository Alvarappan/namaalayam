import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hindu Calendar — Tamil, Malayalam, Telugu & Kannada Panchang",
  description: "Daily Hindu calendar (panchang) for South Indian languages — Tamil, Malayalam, Telugu, and Kannada. Tithi, Nakshatra, Rahu Kalam, festivals and more.",
};

const languages = [
  {
    key: "tamil",
    name: "Tamil Calendar",
    nativeName: "தமிழ் காலண்டர்",
    description: "Daily panchang with Thithi, Natchathiram, Rahu Kalam, and Tamil festivals",
    gradient: "from-rose-50 to-red-100",
    border: "border-rose-200",
    accent: "text-rose-700",
    href: "/calendar/tamil",
    available: true,
  },
  {
    key: "malayalam",
    name: "Malayalam Calendar",
    nativeName: "മലയാളം കലണ്ടർ",
    description: "Kollavarsham panchangam with Thithi, Nakshathram, and Kerala festivals",
    gradient: "from-emerald-50 to-green-100",
    border: "border-emerald-200",
    accent: "text-emerald-700",
    href: "/calendar/malayalam",
    available: false,
  },
  {
    key: "telugu",
    name: "Telugu Calendar",
    nativeName: "తెలుగు క్యాలెండర్",
    description: "Telugu panchangam with Tithi, Nakshatra, Varjyam, and Andhra/Telangana festivals",
    gradient: "from-amber-50 to-yellow-100",
    border: "border-amber-200",
    accent: "text-amber-700",
    href: "/calendar/telugu",
    available: false,
  },
  {
    key: "kannada",
    name: "Kannada Calendar",
    nativeName: "ಕನ್ನಡ ಕ್ಯಾಲೆಂಡರ್",
    description: "Kannada panchanga with Tithi, Nakshatra, and Karnataka festivals",
    gradient: "from-violet-50 to-purple-100",
    border: "border-violet-200",
    accent: "text-violet-700",
    href: "/calendar/kannada",
    available: false,
  },
];

export default function CalendarLandingPage() {
  return (
    <div className="min-h-screen bg-amber-50 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-orange-600 text-sm font-semibold tracking-widest uppercase mb-2">
            Hindu Panchang
          </p>
          <h1 className="text-3xl md:text-5xl font-bold text-stone-900 mb-4">
            South Indian Calendar
          </h1>
          <p className="text-stone-600 max-w-2xl mx-auto">
            Daily Hindu calendar with Tithi, Nakshatra, Rahu Kalam, festivals & auspicious timings.
            Choose your language to begin.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {languages.map((lang) =>
            lang.available ? (
              <Link
                key={lang.key}
                href={lang.href}
                className={`group relative rounded-2xl border ${lang.border} bg-gradient-to-br ${lang.gradient} p-8 hover:scale-[1.02] hover:shadow-lg transition-all`}
              >
                <h2 className="text-stone-900 text-2xl font-bold mb-1">{lang.name}</h2>
                <p className={`${lang.accent} text-base mb-3`}>{lang.nativeName}</p>
                <p className="text-stone-700/90 text-sm leading-relaxed mb-4">
                  {lang.description}
                </p>
                <span className={`inline-flex items-center gap-2 ${lang.accent} text-sm font-semibold`}>
                  Open calendar
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </span>
              </Link>
            ) : (
              <div
                key={lang.key}
                className={`relative rounded-2xl border ${lang.border} bg-gradient-to-br ${lang.gradient} opacity-70 p-8`}
              >
                <h2 className="text-stone-900 text-2xl font-bold mb-1">{lang.name}</h2>
                <p className={`${lang.accent} text-base mb-3`}>{lang.nativeName}</p>
                <p className="text-stone-700/90 text-sm leading-relaxed mb-4">
                  {lang.description}
                </p>
                <span className="inline-block px-3 py-1 bg-white text-stone-600 border border-stone-300 text-xs font-medium rounded-full">
                  Coming soon
                </span>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
}
