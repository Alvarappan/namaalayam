import type { Metadata } from "next";
import { poojas } from "@/data/poojas";
import PoojaCard from "@/components/poojas/PoojaCard";

export const metadata: Metadata = {
  title: "Poojas & Homams | Namaalayam",
  description:
    "Browse poojas, homams, and abhishekams for every dosha and need — performed by temple priests across South India and booked for you.",
};

export default function PoojasPage() {
  return (
    <main className="bg-amber-50 min-h-screen">
      <header className="bg-gradient-to-br from-orange-500 to-amber-500 text-white px-4 pt-24 pb-14">
        <div className="max-w-7xl mx-auto">
          <p className="text-white/85 text-sm font-semibold tracking-widest uppercase mb-2">
            The catalog
          </p>
          <h1 className="text-4xl md:text-5xl font-bold mb-3">Poojas &amp; Homams</h1>
          <p className="text-white/90 text-lg max-w-2xl">
            Sacred remedies for every dosha and life goal — performed on the right tithi at the
            temple best suited to each, with prasadam delivered to you.
          </p>
        </div>
      </header>

      <section className="px-4 py-12">
        <div className="max-w-7xl mx-auto">
          <p className="text-stone-600 mb-8">{poojas.length} poojas available</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {poojas.map((pooja) => (
              <PoojaCard key={pooja.slug} pooja={pooja} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
