"use client";

import { useState } from "react";
import { ChevronDown, HelpCircle, Plus, Minus } from "lucide-react";
import type { FAQ } from "@/data/templeDetails";

const INITIAL_COUNT = 5;

interface Props {
  faqs: FAQ[];
}

export default function TempleFAQ({ faqs }: Props) {
  const [openIdx, setOpenIdx] = useState<Set<number>>(new Set());
  const [showAll, setShowAll] = useState(false);

  const toggle = (i: number) => {
    setOpenIdx((prev) => {
      const next = new Set(prev);
      if (next.has(i)) next.delete(i);
      else next.add(i);
      return next;
    });
  };

  const visibleFaqs = showAll ? faqs : faqs.slice(0, INITIAL_COUNT);
  const hiddenCount = faqs.length - INITIAL_COUNT;

  return (
    <div>
      <div className="flex items-center gap-2 mb-4">
        <HelpCircle size={20} className="text-orange-600" />
        <h2 className="text-xl font-bold text-stone-900">Frequently Asked Questions</h2>
      </div>

      <div className="space-y-2">
        {visibleFaqs.map((faq, i) => {
          const isOpen = openIdx.has(i);
          return (
            <div key={i} className="bg-white border border-amber-200 rounded-xl overflow-hidden shadow-sm">
              <button
                onClick={() => toggle(i)}
                className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left hover:bg-amber-50/60 transition-colors"
                aria-expanded={isOpen}
              >
                <span className="text-stone-900 font-semibold text-sm sm:text-base leading-snug">
                  {faq.question}
                </span>
                <ChevronDown
                  size={18}
                  className={`text-orange-600 flex-shrink-0 transition-transform duration-200 ${
                    isOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              {isOpen && (
                <div className="px-5 pb-4 pt-1 border-t border-amber-100">
                  <p className="text-stone-700 text-sm leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {faqs.length > INITIAL_COUNT && (
        <div className="mt-4 text-center">
          <button
            onClick={() => setShowAll((v) => !v)}
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-amber-50 hover:bg-amber-100 text-orange-700 border border-amber-200 rounded-xl text-sm font-semibold transition-colors"
          >
            {showAll ? (
              <>
                <Minus size={14} />
                Show fewer
              </>
            ) : (
              <>
                <Plus size={14} />
                View {hiddenCount} more {hiddenCount === 1 ? "question" : "questions"}
              </>
            )}
          </button>
        </div>
      )}
    </div>
  );
}
