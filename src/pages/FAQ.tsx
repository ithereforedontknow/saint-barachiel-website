import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const faqs = [
    {
      q: "When does enrollment for SY 2026-2027 begin?",
      a: "Early reservation is currently open. Official registration and document processing run through July 2026.",
    },
    {
      q: "Where is the campus located?",
      a: "We are located at 350 Quezada Street, San Benito Sur, Aringay, La Union (near Linz Pharmacy along MacArthur National Highway).",
    },
    {
      q: "Is Saint Barachiel officially recognized by DepEd?",
      a: "Yes, our school is fully recognized by the Department of Education (DepEd) for Preschool, Elementary, and Junior High School tracks.",
    },
    {
      q: "What makes the Special Science curriculum different?",
      a: "Our curriculum integrates additional hours in Mathematics, Science laboratory work, Computer science, and investigatory research from an early age.",
    },
    {
      q: "Are installment payment plans available for tuition?",
      a: "Yes. We offer flexible payment arrangements including monthly, quarterly, and semi-annual options.",
    },
  ];

  return (
    <div className="min-h-screen bg-white py-16 px-5 sm:px-8 max-w-4xl mx-auto space-y-10">
      <div className="text-center space-y-3">
        <span className="text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-100/80 px-3 py-1 rounded-full border border-blue-200 inline-block">
          Help & Answers
        </span>
        <h1 className="text-4xl font-bold text-[#0b132b] tracking-tight">
          Frequently Asked Questions
        </h1>
        <p className="text-slate-600 text-sm">
          Everything you need to know about admissions, academics, and campus guidelines.
        </p>
      </div>

      <div className="space-y-3">
        {faqs.map((faq, idx) => {
          const isOpen = openIdx === idx;
          return (
            <div
              key={idx}
              className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-2xs transition"
            >
              <button
                onClick={() => setOpenIdx(isOpen ? null : idx)}
                className="w-full text-left p-5 flex items-center justify-between gap-4 font-bold text-[#0b132b] text-base hover:bg-slate-50 transition-colors"
              >
                <span>{faq.q}</span>
                <ChevronDown
                  size={18}
                  className={`text-slate-500 transition-transform ${isOpen ? "rotate-180" : ""}`}
                />
              </button>
              {isOpen && (
                <div className="px-5 pb-5 text-sm text-slate-700 leading-relaxed border-t border-slate-100 pt-3">
                  {faq.a}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
