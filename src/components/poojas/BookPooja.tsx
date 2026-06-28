"use client";

import { useState } from "react";
import { MessageCircle, Send } from "lucide-react";
import { whatsappLink, CONTACT_EMAIL } from "@/lib/contact";

// Phase 1 booking: no backend. "Enquire on WhatsApp" opens a prefilled wa.me chat;
// "Send Enquiry" opens the user's mail client with the same details.
// Phase 2 replaces this with a real cart + payment checkout.

export default function BookPooja({
  poojaName,
  venue,
}: {
  poojaName: string;
  venue?: string;
}) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [gotra, setGotra] = useState("");
  const [nakshatra, setNakshatra] = useState("");
  const [date, setDate] = useState("");

  const summary = [
    `Pooja booking enquiry: ${poojaName}`,
    venue ? `Venue: ${venue}` : "",
    name ? `Name: ${name}` : "",
    phone ? `Phone: ${phone}` : "",
    gotra ? `Gotra: ${gotra}` : "",
    nakshatra ? `Nakshatra: ${nakshatra}` : "",
    date ? `Preferred date: ${date}` : "",
  ]
    .filter(Boolean)
    .join("\n");

  const mailto = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
    `Pooja enquiry — ${poojaName}`
  )}&body=${encodeURIComponent(summary)}`;

  const field =
    "w-full px-3.5 py-2.5 rounded-xl border border-amber-200 bg-amber-50/40 text-stone-800 text-sm outline-none focus:border-orange-400 focus:bg-white transition-colors placeholder-stone-400";

  return (
    <div className="rounded-2xl border border-amber-200 bg-white p-6 shadow-sm">
      <h3 className="text-stone-900 font-bold text-lg mb-1">Book this Pooja</h3>
      <p className="text-stone-600 text-sm mb-5">
        Share your details and our team will confirm the date, offerings, and prasadam delivery.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3">
        <input className={field} placeholder="Full name" value={name} onChange={(e) => setName(e.target.value)} />
        <input className={field} placeholder="Phone / WhatsApp" value={phone} onChange={(e) => setPhone(e.target.value)} />
        <input className={field} placeholder="Gotra (optional)" value={gotra} onChange={(e) => setGotra(e.target.value)} />
        <input className={field} placeholder="Nakshatra (optional)" value={nakshatra} onChange={(e) => setNakshatra(e.target.value)} />
      </div>
      <input
        type="date"
        className={`${field} mb-5`}
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />

      <div className="flex flex-col sm:flex-row gap-3">
        <a
          href={whatsappLink(summary)}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-xl transition-colors"
        >
          <MessageCircle size={18} />
          Enquire on WhatsApp
        </a>
        <a
          href={mailto}
          className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-semibold rounded-xl transition-all"
        >
          <Send size={17} />
          Send Enquiry
        </a>
      </div>
      <p className="text-stone-400 text-xs mt-3 text-center">
        No payment now — we&apos;ll confirm availability and pricing first.
      </p>
    </div>
  );
}
