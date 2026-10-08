import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Sparkles,
  BookOpen,
  Users,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Atom,
  Microscope,
  Compass,
  Award,
  ChevronRight,
} from "lucide-react";
import logo from "../assets/logo.png";

export default function Home() {
  const [activeTrack, setActiveTrack] = useState<"preschool" | "elementary" | "jhs">("elementary");

  const trackData = {
    preschool: {
      tag: "Preschool Division",
      headline: "Early STEM Discovery",
      details: "Hands-on sensorial science, phonics mastery, and creative curiosity for ages 3 to 5.",
    },
    elementary: {
      tag: "Grades 1 to 6",
      headline: "Special Science Foundation",
      details: "Accelerated mathematics, laboratory inquiry, robotics basics, and values formation.",
    },
    jhs: {
      tag: "Junior High School",
      headline: "Advanced Research & Robotics",
      details: "Comprehensive biology, chemistry, physics, coding projects, and regional science fairs.",
    },
  };

  return (
    <div className="min-h-screen bg-white">
      {/* 1. UNIQUE ANIMATED LIGHT MODE HERO */}
      <section className="relative overflow-hidden bg-gradient-to-b from-blue-50/70 via-slate-50/50 to-white pt-12 pb-20 md:py-20 border-b border-slate-200">
        {/* Subtle SVG Grid Background Texture */}
        <div
          className="absolute inset-0 opacity-[0.035] pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(#0b132b 1px, transparent 1px)`,
            backgroundSize: "28px 28px",
          }}
        />

        <div className="max-w-7xl mx-auto px-5 sm:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Column: Value Prop & Actions */}
            <div className="lg:col-span-7 space-y-6 text-left">
              {/* Eyebrow Pill */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-100/80 border border-blue-200 text-xs font-semibold text-blue-900 shadow-2xs">
                <span className="w-2 h-2 rounded-full bg-blue-600 animate-ping" />
                <Atom size={14} className="text-amber-600 shrink-0" />
                <span>Special Science Curriculum • DepEd Recognized</span>
              </div>

              {/* Main Headline (Max 2 lines on desktop) */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#0b132b] leading-[1.1]">
                Where young curiosity meets scientific discovery.
              </h1>

              {/* Subtext: Strictly under 20 words */}
              <p className="text-base sm:text-lg text-slate-600 max-w-xl leading-relaxed">
                Empowering tomorrow's scientists through an enriched curriculum, hands-on laboratory discovery, and strong Christian values in La Union.
              </p>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-wrap items-center gap-4">
                <Link to="/enrollment" className="btn-primary">
                  Enroll for SY 2026-2027 <ArrowRight size={15} />
                </Link>
                <Link to="/programs" className="btn-secondary">
                  Explore Academic Programs
                </Link>
              </div>

              {/* Trust Indicators Strip */}
              <div className="pt-4 grid grid-cols-3 gap-4 border-t border-slate-200/80 max-w-lg">
                <div>
                  <p className="font-bold text-xl text-[#0b132b]">100%</p>
                  <p className="text-xs text-slate-500 font-medium">DepEd Certified</p>
                </div>
                <div>
                  <p className="font-bold text-xl text-[#0b132b]">1:15</p>
                  <p className="text-xs text-slate-500 font-medium">Teacher Ratio</p>
                </div>
                <div>
                  <p className="font-bold text-xl text-[#0b132b]">Est. 2001</p>
                  <p className="text-xs text-slate-500 font-medium">STEM Legacy</p>
                </div>
              </div>
            </div>

            {/* Right Column: Unique Interactive Atomic STEM Orbital Canvas */}
            <div className="lg:col-span-5 relative flex items-center justify-center">
              <div className="relative w-full max-w-[420px] aspect-square flex items-center justify-center">
                {/* Background Solar Aura Glow */}
                <div className="absolute inset-0 rounded-full bg-radial from-blue-200/40 via-amber-100/30 to-transparent blur-2xl pointer-events-none" />

                {/* Outer Orbital Ring with Counter-Rotating Badges */}
                <div className="absolute inset-4 rounded-full border border-dashed border-blue-300/70 animate-spin-orbit">
                  {/* Orbiting Node 1: Robotics */}
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-white px-2.5 py-1 rounded-full shadow-md border border-amber-200 text-[11px] font-bold text-amber-800 flex items-center gap-1 animate-spin-counter">
                    <Sparkles size={12} className="text-amber-500" /> Robotics
                  </div>
                  {/* Orbiting Node 2: Chemistry */}
                  <div className="absolute -bottom-3.5 left-1/2 -translate-x-1/2 bg-white px-2.5 py-1 rounded-full shadow-md border border-emerald-200 text-[11px] font-bold text-emerald-800 flex items-center gap-1 animate-spin-counter">
                    <Microscope size={12} className="text-emerald-600" /> Lab Inquiry
                  </div>
                </div>

                {/* Inner Orbital Ring */}
                <div className="absolute inset-16 rounded-full border border-blue-400/30 animate-spin-orbit-slow">
                  {/* Orbiting Node 3: Coding */}
                  <div className="absolute top-1/2 -right-3.5 -translate-y-1/2 bg-white px-2.5 py-1 rounded-full shadow-md border border-blue-200 text-[11px] font-bold text-blue-800 flex items-center gap-1 animate-spin-counter-slow">
                    <Atom size={12} className="text-blue-600" /> Math & Code
                  </div>
                </div>

                {/* Center Core: Saint Barachiel Seal Emblem */}
                <div className="relative z-10 w-28 h-28 sm:w-32 sm:h-32 rounded-full bg-white p-2.5 shadow-xl border-4 border-white flex items-center justify-center animate-pulse-core ring-8 ring-blue-100/60">
                  <img
                    src={logo}
                    alt="Saint Barachiel Special Science School Emblem"
                    className="w-full h-full object-contain"
                  />
                </div>

                {/* Floating Micro-Badge Top Left */}
                <div className="absolute -top-2 left-2 z-20 bg-white/95 backdrop-blur-xs p-2.5 rounded-xl shadow-lg border border-slate-200 flex items-center gap-2 animate-float-gentle">
                  <div className="w-7 h-7 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold">
                    <CheckCircle2 size={16} />
                  </div>
                  <div className="text-left pr-1">
                    <p className="text-[10px] text-slate-500 uppercase tracking-wide font-semibold">Quality Standard</p>
                    <p className="text-xs font-bold text-[#0b132b]">Full DepEd Recognition</p>
                  </div>
                </div>

                {/* Floating Micro-Badge Bottom Right */}
                <div className="absolute -bottom-2 right-2 z-20 bg-white/95 backdrop-blur-xs p-2.5 rounded-xl shadow-lg border border-slate-200 flex items-center gap-2 animate-float-delayed">
                  <div className="w-7 h-7 rounded-lg bg-amber-100 text-amber-800 flex items-center justify-center font-bold">
                    <Award size={16} />
                  </div>
                  <div className="text-left pr-1">
                    <p className="text-[10px] text-slate-500 uppercase tracking-wide font-semibold">Enriched Track</p>
                    <p className="text-xs font-bold text-[#0b132b]">Applied Sciences Focus</p>
                  </div>
                </div>
              </div>

              {/* Interactive Track Switcher Pill Below Orbital Graphic */}
              <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-full max-w-sm hidden sm:block">
                <div className="bg-white rounded-xl border border-slate-200 p-2.5 shadow-md space-y-2">
                  <div className="flex rounded-lg bg-slate-100 p-1 text-[11px] font-semibold text-slate-600">
                    <button
                      onClick={() => setActiveTrack("preschool")}
                      className={`flex-1 py-1 rounded-md transition ${activeTrack === "preschool" ? "bg-white text-blue-700 shadow-xs" : "hover:text-[#0b132b]"}`}
                    >
                      Preschool
                    </button>
                    <button
                      onClick={() => setActiveTrack("elementary")}
                      className={`flex-1 py-1 rounded-md transition ${activeTrack === "elementary" ? "bg-white text-blue-700 shadow-xs" : "hover:text-[#0b132b]"}`}
                    >
                      Elementary
                    </button>
                    <button
                      onClick={() => setActiveTrack("jhs")}
                      className={`flex-1 py-1 rounded-md transition ${activeTrack === "jhs" ? "bg-white text-blue-700 shadow-xs" : "hover:text-[#0b132b]"}`}
                    >
                      Junior High
                    </button>
                  </div>
                  <div className="text-left px-2 py-1">
                    <p className="text-xs font-bold text-[#0b132b] flex items-center justify-between">
                      <span>{trackData[activeTrack].headline}</span>
                      <span className="text-[10px] text-amber-700 font-semibold">{trackData[activeTrack].tag}</span>
                    </p>
                    <p className="text-[11px] text-slate-500 leading-snug mt-0.5">
                      {trackData[activeTrack].details}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. STATS ROW (Light Mode Slate Surface) */}
      <section className="py-12 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div>
            <p className="text-3xl sm:text-4xl font-extrabold text-[#0b132b]">100%</p>
            <p className="text-xs sm:text-sm text-slate-600 mt-1 font-medium">DepEd Recognized</p>
          </div>
          <div>
            <p className="text-3xl sm:text-4xl font-extrabold text-[#0b132b]">1:15</p>
            <p className="text-xs sm:text-sm text-slate-600 mt-1 font-medium">Teacher-Student Ratio</p>
          </div>
          <div>
            <p className="text-3xl sm:text-4xl font-extrabold text-[#0b132b]">2001</p>
            <p className="text-xs sm:text-sm text-slate-600 mt-1 font-medium">Year Established</p>
          </div>
          <div>
            <p className="text-3xl sm:text-4xl font-extrabold text-[#0b132b]">Aringay</p>
            <p className="text-xs sm:text-sm text-slate-600 mt-1 font-medium">La Union Campus</p>
          </div>
        </div>
      </section>

      {/* 3. SOLAR GOLD FEATURE BANNER */}
      <section className="py-20 max-w-7xl mx-auto px-5 sm:px-8">
        <div className="bg-gradient-to-r from-amber-50 to-amber-100/70 rounded-2xl p-8 sm:p-12 border border-amber-200">
          <div className="max-w-3xl space-y-4">
            <span className="bg-[#0b132b] text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider inline-block">
              The Science Advantage
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#0b132b]">
              Designed for curious minds ready to explore the world.
            </h2>
            <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
              We go beyond standard textbook learning. Our students engage in interactive laboratory experiments, early robotics modules, and critical thinking challenges from their early years.
            </p>
            <div className="pt-2">
              <Link to="/programs" className="btn-primary">
                Explore Our Science Curriculum <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 4. PILLARS GRID */}
      <section className="py-12 max-w-7xl mx-auto px-5 sm:px-8 space-y-10">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <h2 className="text-3xl font-bold text-[#0b132b]">Built around every learner's growth</h2>
          <p className="text-slate-600 text-base">
            Discover why families trust Saint Barachiel Special Science School for foundational education.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-emerald-50/70 p-8 rounded-2xl border border-emerald-200/80 space-y-4 shadow-xs">
            <div className="w-12 h-12 rounded-xl bg-emerald-800 text-white flex items-center justify-center">
              <BookOpen size={22} />
            </div>
            <h3 className="text-xl font-bold text-[#0b132b]">Enriched Science & Math</h3>
            <p className="text-sm text-slate-700 leading-relaxed">
              Advanced modules in problem-solving, environmental science, and practical technology starting early in grade school.
            </p>
          </div>

          <div className="bg-blue-50/70 p-8 rounded-2xl border border-blue-200/80 space-y-4 shadow-xs">
            <div className="w-12 h-12 rounded-xl bg-blue-800 text-white flex items-center justify-center">
              <ShieldCheck size={22} />
            </div>
            <h3 className="text-xl font-bold text-[#0b132b]">Values & Character</h3>
            <p className="text-sm text-slate-700 leading-relaxed">
              Grounded in moral integrity, discipline, and community service to develop compassionate, responsible citizens.
            </p>
          </div>

          <div className="bg-amber-50/70 p-8 rounded-2xl border border-amber-200/80 space-y-4 shadow-xs">
            <div className="w-12 h-12 rounded-xl bg-amber-700 text-white flex items-center justify-center">
              <Users size={22} />
            </div>
            <h3 className="text-xl font-bold text-[#0b132b]">Nurturing Class Sizes</h3>
            <p className="text-sm text-slate-700 leading-relaxed">
              Small student groups ensure every child receives personalized academic attention and mentorship from qualified educators.
            </p>
          </div>
        </div>
      </section>

      {/* 5. CALL TO ACTION BANNER */}
      <section className="py-20 bg-slate-50 border-t border-slate-200 mt-12">
        <div className="max-w-4xl mx-auto px-5 text-center space-y-6">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0b132b]">
            Ready to secure your child's educational future?
          </h2>
          <p className="text-slate-600 text-base max-w-xl mx-auto">
            Applications for SY 2026-2027 are processed on a rolling basis. Begin the simple online reservation process today.
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-2">
            <Link to="/enrollment" className="btn-primary text-base px-8 py-3.5">
              Enroll Now
            </Link>
            <Link to="/visit" className="btn-secondary text-base px-8 py-3.5">
              Contact Admissions
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
