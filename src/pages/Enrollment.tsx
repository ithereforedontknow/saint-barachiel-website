import { Link } from "react-router-dom";
import { Check, ArrowRight } from "lucide-react";

export default function Enrollment() {
  return (
    <div className="min-h-screen bg-white py-16 px-5 sm:px-8 max-w-7xl mx-auto space-y-16">
      {/* Title Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <h1 className="text-4xl sm:text-5xl font-bold text-[#0b132b] tracking-tight">
          Simple 4-step enrollment process.
        </h1>
        <p className="text-slate-600 text-base">
          Join the Saint Barachiel community. We accept transferees and new applicants for Preschool and Elementary.
        </p>
      </div>

      {/* 4-Step Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* Step 1 */}
        <div className="bg-white p-6 rounded-2xl border border-slate-200 space-y-4 flex flex-col justify-between shadow-xs">
          <div className="space-y-3">
            <span className="w-8 h-8 rounded-full bg-blue-100 text-blue-800 font-bold text-xs flex items-center justify-center">
              01
            </span>
            <h3 className="font-bold text-lg text-[#0b132b]">Submit Inquiry</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Fill out our simple online form or visit the campus registrar in Aringay.
            </p>
          </div>
          <span className="text-[11px] text-slate-500 font-medium">Estimated time: 5 minutes</span>
        </div>

        {/* Step 2 - Featured */}
        <div className="bg-blue-50/50 p-6 rounded-2xl border-2 border-blue-700 relative flex flex-col justify-between shadow-sm">
          <div className="space-y-3">
            <span className="bg-blue-700 text-white text-[10px] font-bold px-2.5 py-0.5 rounded-full absolute -top-3 right-4 tracking-wider uppercase">
              Important
            </span>
            <span className="w-8 h-8 rounded-full bg-blue-700 text-white font-bold text-xs flex items-center justify-center">
              02
            </span>
            <h3 className="font-bold text-lg text-[#0b132b]">Document Evaluation</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Submit report card (Form 138), birth certificate (PSA), and certificate of good moral character.
            </p>
          </div>
          <span className="text-[11px] text-blue-700 font-bold">Document Assessment</span>
        </div>

        {/* Step 3 */}
        <div className="bg-white p-6 rounded-2xl border border-slate-200 space-y-4 flex flex-col justify-between shadow-xs">
          <div className="space-y-3">
            <span className="w-8 h-8 rounded-full bg-amber-100 text-amber-800 font-bold text-xs flex items-center justify-center">
              03
            </span>
            <h3 className="font-bold text-lg text-[#0b132b]">Learner Assessment</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Short, friendly learner interview to determine proper grade level placement.
            </p>
          </div>
          <span className="text-[11px] text-slate-500 font-medium">On-Campus or Online</span>
        </div>

        {/* Step 4 */}
        <div className="bg-white p-6 rounded-2xl border border-slate-200 space-y-4 flex flex-col justify-between shadow-xs">
          <div className="space-y-3">
            <span className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-800 font-bold text-xs flex items-center justify-center">
              04
            </span>
            <h3 className="font-bold text-lg text-[#0b132b]">Official Reservation</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Settle the reservation fee to secure the student slot for SY 2026-2027.
            </p>
          </div>
          <span className="text-[11px] text-emerald-700 font-bold">Slot Guaranteed</span>
        </div>
      </div>

      {/* Checklist */}
      <div className="bg-slate-50 p-8 sm:p-10 rounded-2xl border border-slate-200 max-w-4xl mx-auto space-y-6">
        <h2 className="text-2xl font-bold text-[#0b132b] text-center">Requirements Checklist</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-slate-800">
          <div className="flex items-center gap-3 bg-white p-4 rounded-xl border border-slate-200">
            <Check size={18} className="text-blue-700 shrink-0" />
            <span>PSA Birth Certificate (Photocopy)</span>
          </div>
          <div className="flex items-center gap-3 bg-white p-4 rounded-xl border border-slate-200">
            <Check size={18} className="text-blue-700 shrink-0" />
            <span>Form 138 (Latest Report Card)</span>
          </div>
          <div className="flex items-center gap-3 bg-white p-4 rounded-xl border border-slate-200">
            <Check size={18} className="text-blue-700 shrink-0" />
            <span>Certificate of Good Moral Character</span>
          </div>
          <div className="flex items-center gap-3 bg-white p-4 rounded-xl border border-slate-200">
            <Check size={18} className="text-blue-700 shrink-0" />
            <span>2x2 ID Photos (White Background)</span>
          </div>
        </div>
        <div className="pt-4 text-center">
          <Link to="/visit" className="btn-primary inline-flex items-center gap-2">
            Submit Documents or Inquire <ArrowRight size={15} />
          </Link>
        </div>
      </div>
    </div>
  );
}
