"use client";

import { useState, useEffect } from "react";
import {
  X, Compass, Ticket, Smartphone, Camera,
  Accessibility, Users, ParkingCircle, Droplet, MapPin, ChevronRight,
} from "lucide-react";
import type { VisitorLogistics } from "@/data/templeDetails";

export default function VisitorLogisticsCard({ logistics }: { logistics: VisitorLogistics }) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      {/* Compact teaser card */}
      <button
        onClick={() => setIsOpen(true)}
        className="group w-full bg-white border border-amber-200 hover:border-orange-400 rounded-2xl p-5 shadow-sm hover:shadow-md hover:shadow-orange-200/40 transition-all text-left"
      >
        <div className="flex items-start justify-between gap-3 mb-2">
          <h3 className="text-stone-900 font-semibold flex items-center gap-2">
            <Compass size={16} className="text-orange-600" />
            Visitor Logistics
          </h3>
          <ChevronRight
            size={18}
            className="text-orange-600 group-hover:translate-x-1 transition-transform mt-0.5 flex-shrink-0"
          />
        </div>
        <p className="text-stone-600 text-xs leading-relaxed">
          Entry gates, cloak rooms, photography rules, accessibility & parking
        </p>
        <p className="text-orange-700 text-xs font-semibold mt-2">View details</p>
      </button>

      {/* Modal */}
      {isOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-stone-900/60 backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="visitor-logistics-title"
        >
          <div
            className="bg-white rounded-2xl shadow-2xl max-w-lg w-full max-h-[85vh] overflow-hidden flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-amber-200 bg-amber-50">
              <h2
                id="visitor-logistics-title"
                className="text-stone-900 font-bold text-lg flex items-center gap-2"
              >
                <Compass size={18} className="text-orange-600" />
                Visitor Logistics
              </h2>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1 text-stone-600 hover:text-stone-900 hover:bg-amber-100 rounded-lg transition-colors"
                aria-label="Close"
              >
                <X size={20} />
              </button>
            </div>

            {/* Body */}
            <div className="px-6 py-5 overflow-y-auto">
              {logistics.gates && logistics.gates.length > 0 && (
                <div className="mb-5">
                  <div className="flex items-center gap-2 text-stone-700 text-xs uppercase tracking-wider font-semibold mb-3">
                    <Compass size={13} className="text-orange-600" />
                    Entry Gates
                  </div>
                  <ul className="space-y-3">
                    {logistics.gates.map((g) => (
                      <li key={g.name}>
                        <div className="text-stone-900 text-sm font-medium">{g.name}</div>
                        {g.notes && (
                          <div className="text-stone-600 text-xs leading-relaxed mt-0.5">{g.notes}</div>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="space-y-4">
                {logistics.cloakRoom && (
                  <Row icon={<Ticket size={15} />} label="Cloak Room" value={logistics.cloakRoom} />
                )}
                {logistics.mobilePolicy && (
                  <Row icon={<Smartphone size={15} />} label="Mobile Phones" value={logistics.mobilePolicy} />
                )}
                {logistics.cameraPolicy && (
                  <Row icon={<Camera size={15} />} label="Cameras" value={logistics.cameraPolicy} />
                )}
                {logistics.wheelchairAccess && (
                  <Row icon={<Accessibility size={15} />} label="Wheelchair Access" value={logistics.wheelchairAccess} />
                )}
                {logistics.seniorCitizenDarshan && (
                  <Row icon={<Users size={15} />} label="Priority Darshan" value={logistics.seniorCitizenDarshan} />
                )}
                {logistics.parking && (
                  <Row icon={<ParkingCircle size={15} />} label="Parking" value={logistics.parking} />
                )}
                {logistics.drinkingWater && (
                  <Row icon={<Droplet size={15} />} label="Drinking Water" value={logistics.drinkingWater} />
                )}
                {logistics.restrooms && (
                  <Row icon={<MapPin size={15} />} label="Restrooms" value={logistics.restrooms} />
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

function Row({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div className="flex gap-3">
      <div className="text-orange-600 mt-0.5 flex-shrink-0">{icon}</div>
      <div>
        <div className="text-stone-800 text-sm font-semibold mb-0.5">{label}</div>
        <div className="text-stone-600 text-sm leading-relaxed">{value}</div>
      </div>
    </div>
  );
}
