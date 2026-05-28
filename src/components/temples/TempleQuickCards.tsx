"use client";

import { useState, useEffect } from "react";
import {
  X, Clock, Ticket, Calendar, MapPin,
  Plane, Train, Car, Sun, AlertTriangle, Shirt, ExternalLink, ChevronRight,
} from "lucide-react";
import type { TempleDetail } from "@/data/templeDetails";

interface Props {
  detail: TempleDetail;
  templeName: string;
  city: string;
  state: string;
  coordinates: { lat: number; lng: number };
}

type ModalKey = "timings" | "fee" | "bestTime" | "reach" | null;

export default function TempleQuickCards({ detail, templeName, city, state, coordinates }: Props) {
  const [open, setOpen] = useState<ModalKey>(null);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(null);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  const dailySevas = detail.sevas?.filter((s) => s.type === "daily" || !s.type) ?? [];
  const paidSevas = detail.sevas?.filter((s) => s.fee && s.fee !== "Free") ?? [];
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${coordinates.lat},${coordinates.lng}`;
  const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${coordinates.lat},${coordinates.lng}`;

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <QuickCard
          accent="rose"
          icon={<Clock size={18} />}
          title="Temple Timings"
          line1={detail.timings.morning}
          line2={detail.timings.evening}
          cta="View full schedule"
          onClick={() => setOpen("timings")}
        />
        <QuickCard
          accent="orange"
          icon={<Ticket size={18} />}
          title="Entry Fee"
          line1={firstSentence(detail.entryFee)}
          line2={restSentences(detail.entryFee) || "See details for camera/special darshan"}
          cta="View fee details"
          onClick={() => setOpen("fee")}
        />
        <QuickCard
          accent="amber"
          icon={<Calendar size={18} />}
          title="Best Time to Visit"
          line1={firstSentence(detail.bestTime)}
          line2={restSentences(detail.bestTime) || "Weekday mornings are quietest"}
          cta="Tips to avoid crowds"
          onClick={() => setOpen("bestTime")}
        />
        <QuickCard
          accent="blue"
          icon={<MapPin size={18} />}
          title="How to Reach"
          line1={firstClause(detail.travelInfo.byAir)}
          line2={firstClause(detail.travelInfo.byTrain)}
          cta="Get directions"
          onClick={() => setOpen("reach")}
        />
      </div>

      {/* Timings modal */}
      <Modal isOpen={open === "timings"} onClose={() => setOpen(null)} title="Temple Timings" icon={<Clock size={18} className="text-rose-600" />}>
        <Row icon={<Sun size={15} />} label="Morning" value={detail.timings.morning} />
        <Row icon={<Sun size={15} />} label="Evening" value={detail.timings.evening} />
        {detail.timings.note && (
          <div className="mt-3 p-3 bg-amber-50 border border-amber-200 rounded-lg">
            <p className="text-amber-900 text-sm leading-relaxed">⚠ {detail.timings.note}</p>
          </div>
        )}
        {dailySevas.length > 0 && (
          <div className="mt-5">
            <div className="text-stone-700 text-xs uppercase tracking-wider font-semibold mb-2">Daily Pooja Schedule</div>
            <ul className="space-y-2">
              {dailySevas.map((s) => (
                <li key={s.name} className="flex items-start justify-between gap-3 text-sm">
                  <span className="text-stone-900 font-medium">{s.name}</span>
                  <span className="text-stone-600 whitespace-nowrap">{s.time}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
        {detail.dressCode && (
          <div className="mt-5 pt-4 border-t border-amber-100">
            <Row icon={<Shirt size={15} />} label="Dress Code" value={detail.dressCode} />
          </div>
        )}
      </Modal>

      {/* Fee modal */}
      <Modal isOpen={open === "fee"} onClose={() => setOpen(null)} title="Entry Fee & Sevas" icon={<Ticket size={18} className="text-orange-600" />}>
        <div className="mb-4">
          <div className="text-stone-700 text-xs uppercase tracking-wider font-semibold mb-2">General Entry</div>
          <p className="text-stone-800 text-sm leading-relaxed">{detail.entryFee}</p>
        </div>
        {paidSevas.length > 0 && (
          <div>
            <div className="text-stone-700 text-xs uppercase tracking-wider font-semibold mb-2">Paid Sevas</div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-amber-200">
                    <th className="text-left text-stone-600 font-medium pb-2 pr-3">Seva</th>
                    <th className="text-left text-stone-600 font-medium pb-2">Fee</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-amber-100">
                  {paidSevas.map((s) => (
                    <tr key={s.name}>
                      <td className="text-stone-900 py-2 pr-3 font-medium">{s.name}</td>
                      <td className="text-orange-700 py-2 font-semibold whitespace-nowrap">{s.fee}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
        <p className="text-stone-500 text-xs mt-4 leading-relaxed">
          Fees are indicative. Confirm at the temple office before booking.
        </p>
      </Modal>

      {/* Best time modal */}
      <Modal isOpen={open === "bestTime"} onClose={() => setOpen(null)} title="Best Time to Visit" icon={<Calendar size={18} className="text-amber-600" />}>
        <div className="mb-5">
          <div className="text-stone-700 text-xs uppercase tracking-wider font-semibold mb-2">Recommended</div>
          <p className="text-stone-800 text-sm leading-relaxed">{detail.bestTime}</p>
        </div>

        <div className="mb-5">
          <div className="text-stone-700 text-xs uppercase tracking-wider font-semibold mb-2">Crowd-Avoidance Tips</div>
          <ul className="space-y-2 text-sm text-stone-700">
            <li className="flex gap-2">
              <span className="text-orange-600">•</span>
              <span><strong className="text-stone-900">Weekday mornings (5–9 AM)</strong> are the quietest darshan window.</span>
            </li>
            {detail.timings.note && (
              <li className="flex gap-2">
                <span className="text-orange-600">•</span>
                <span>{detail.timings.note}</span>
              </li>
            )}
            <li className="flex gap-2">
              <span className="text-orange-600">•</span>
              <span>Avoid <strong className="text-stone-900">Saturdays, Sundays, public holidays</strong> — queues can extend 2+ hours.</span>
            </li>
            {detail.festivals.length > 0 && (
              <li className="flex gap-2">
                <span className="text-orange-600">•</span>
                <span>
                  Skip these festival weeks if you want a quiet darshan:{" "}
                  <span className="text-stone-900 font-medium">
                    {detail.festivals.map((f) => `${f.name} (${f.month})`).join(" · ")}
                  </span>
                </span>
              </li>
            )}
          </ul>
        </div>

        <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-lg">
          <div className="flex items-start gap-2">
            <AlertTriangle size={14} className="text-emerald-700 mt-0.5 flex-shrink-0" />
            <p className="text-emerald-900 text-xs leading-relaxed">
              <strong>Best single window:</strong> Tuesday or Wednesday between 5:30–7:30 AM, in {detail.bestTime.split(/[.,(]/)[0].trim().toLowerCase()}.
            </p>
          </div>
        </div>
      </Modal>

      {/* How to reach modal */}
      <Modal isOpen={open === "reach"} onClose={() => setOpen(null)} title={`How to Reach ${templeName}`} icon={<MapPin size={18} className="text-blue-600" />}>
        <div className="space-y-4 mb-5">
          <TravelRow icon={<Plane size={15} />} label="By Air" value={detail.travelInfo.byAir} />
          <TravelRow icon={<Train size={15} />} label="By Train" value={detail.travelInfo.byTrain} />
          <TravelRow icon={<Car size={15} />} label="By Road" value={detail.travelInfo.byRoad} />
        </div>
        <div className="flex items-center gap-2 text-stone-600 text-sm mb-4">
          <MapPin size={14} className="text-orange-600" />
          <span>{city}, {state}</span>
        </div>
        <div className="grid grid-cols-2 gap-3">
          <a
            href={directionsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 px-4 py-2.5 bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white text-sm font-semibold rounded-xl shadow-md shadow-orange-300/40 transition-all"
          >
            <ExternalLink size={14} />
            Get Directions
          </a>
          <a
            href={mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 px-4 py-2.5 bg-amber-50 hover:bg-amber-100 text-orange-700 text-sm font-semibold rounded-xl border border-amber-200 transition-all"
          >
            <MapPin size={14} />
            View on Map
          </a>
        </div>
      </Modal>
    </>
  );
}

// ──────────────────────────────────────────────────────────────────────────────

const accentStyles = {
  rose: { iconBg: "bg-rose-100", iconText: "text-rose-600", title: "text-rose-700", cta: "text-rose-700 hover:text-rose-800", border: "hover:border-rose-300" },
  orange: { iconBg: "bg-orange-100", iconText: "text-orange-600", title: "text-orange-700", cta: "text-orange-700 hover:text-orange-800", border: "hover:border-orange-300" },
  amber: { iconBg: "bg-amber-100", iconText: "text-amber-700", title: "text-amber-700", cta: "text-amber-700 hover:text-amber-800", border: "hover:border-amber-300" },
  blue: { iconBg: "bg-blue-100", iconText: "text-blue-600", title: "text-blue-700", cta: "text-blue-700 hover:text-blue-800", border: "hover:border-blue-300" },
} as const;

function QuickCard({
  accent, icon, title, line1, line2, cta, onClick,
}: {
  accent: keyof typeof accentStyles;
  icon: React.ReactNode;
  title: string;
  line1: string;
  line2: string;
  cta: string;
  onClick: () => void;
}) {
  const s = accentStyles[accent];
  return (
    <button
      onClick={onClick}
      className={`group bg-white border border-amber-200 ${s.border} rounded-2xl p-5 shadow-sm hover:shadow-md transition-all text-left flex flex-col`}
    >
      <div className="flex items-center gap-3 mb-3">
        <div className={`w-10 h-10 rounded-full ${s.iconBg} ${s.iconText} flex items-center justify-center flex-shrink-0`}>
          {icon}
        </div>
        <h3 className={`font-bold text-base ${s.title}`}>{title}</h3>
      </div>
      <div className="flex-1 space-y-1 mb-3">
        <p className="text-stone-800 text-sm leading-snug line-clamp-2">{line1}</p>
        <p className="text-stone-700 text-sm leading-snug line-clamp-2">{line2}</p>
      </div>
      <div className={`flex items-center gap-1 text-sm font-semibold ${s.cta} mt-auto`}>
        <span>{cta}</span>
        <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
      </div>
    </button>
  );
}

function Modal({
  isOpen, onClose, title, icon, children,
}: {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  icon: React.ReactNode;
  children: React.ReactNode;
}) {
  if (!isOpen) return null;
  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-stone-900/60 backdrop-blur-sm"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="bg-white rounded-2xl shadow-2xl max-w-lg w-full max-h-[85vh] overflow-hidden flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between px-6 py-4 border-b border-amber-200 bg-amber-50">
          <h2 className="text-stone-900 font-bold text-lg flex items-center gap-2">
            {icon}
            {title}
          </h2>
          <button
            onClick={onClose}
            className="p-1 text-stone-600 hover:text-stone-900 hover:bg-amber-100 rounded-lg transition-colors"
            aria-label="Close"
          >
            <X size={20} />
          </button>
        </div>
        <div className="px-6 py-5 overflow-y-auto">
          {children}
        </div>
      </div>
    </div>
  );
}

function Row({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div className="flex gap-3 mb-3 last:mb-0">
      <div className="text-orange-600 mt-0.5 flex-shrink-0">{icon}</div>
      <div>
        <div className="text-stone-700 text-xs font-semibold mb-0.5">{label}</div>
        <div className="text-stone-800 text-sm leading-relaxed">{value}</div>
      </div>
    </div>
  );
}

function TravelRow({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div className="flex gap-3">
      <div className="text-orange-600 mt-0.5 flex-shrink-0">{icon}</div>
      <div>
        <div className="text-stone-700 text-xs font-semibold mb-0.5">{label}</div>
        <div className="text-stone-700 text-sm leading-relaxed">{value}</div>
      </div>
    </div>
  );
}

// ──────────────────────────────────────────────────────────────────────────────

function firstSentence(s: string): string {
  const idx = s.indexOf(". ");
  return idx > 0 ? s.slice(0, idx) : s;
}

function restSentences(s: string): string {
  const idx = s.indexOf(". ");
  return idx > 0 ? s.slice(idx + 2) : "";
}

function firstClause(s: string): string {
  // Take up to the first period or up to ~60 chars
  const period = s.indexOf(".");
  if (period > 0 && period < 80) return s.slice(0, period);
  return s.length > 60 ? s.slice(0, 60).trimEnd() + "…" : s;
}
