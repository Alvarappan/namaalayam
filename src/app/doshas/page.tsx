import type { Metadata } from "next";
import { doshas } from "@/data/doshas";
import DoshaCard from "@/components/doshas/DoshaCard";

export const metadata: Metadata = {
  title: "Doshas & Remedies | Namaalayam",
  description:
    "Understand Pitru, Naga, Mangal, Guru Chandal, Kala Sarpa, and Rahu-Ketu dosha — their signs, astrological significance, and the poojas that remedy them.",
};

export default function DoshasPage() {
  return (
    <main className="bg-amber-50 min-h-screen">
      <header className="bg-gradient-to-br from-violet-600 to-indigo-500 text-white px-4 pt-24 pb-14">
        <div className="max-w-7xl mx-auto">
          <p className="text-white/85 text-sm font-semibold tracking-widest uppercase mb-2">
            Find your dosha
          </p>
          <h1 className="text-4xl md:text-5xl font-bold mb-3">Doshas &amp; Remedies</h1>
          <p className="text-white/90 text-lg max-w-2xl">
            Every chart carries its afflictions. Learn the signs of each dosha, why it arises,
            and the pooja that sets it right.
          </p>
        </div>
      </header>

      <section className="px-4 py-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {doshas.map((dosha) => (
              <DoshaCard key={dosha.slug} dosha={dosha} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
