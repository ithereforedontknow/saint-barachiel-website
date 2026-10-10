import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, BookOpen, ShieldCheck, Users, MapPin, Sprout, Microscope } from "lucide-react";
import { RoboticsLabIllustration } from "../components/SchoolIllustrations";

export default function Home() {
  const animatedWords = [
    { text: "scientific excellence.", style: "bg-amber-100 text-amber-950" },
    { text: "creative discovery.", style: "bg-emerald-100 text-emerald-950" },
    { text: "future leadership.", style: "bg-blue-100 text-blue-950" },
  ];

  const [wordIdx, setWordIdx] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setWordIdx((prev) => (prev + 1) % animatedWords.length);
        setIsAnimating(false);
      }, 300);
    }, 3200);

    return () => clearInterval(interval);
  }, [animatedWords.length]);

  return (
    <div className="min-h-screen bg-white">
      {/* 1. HERO */}
      <section className="relative overflow-hidden bg-gradient-to-b from-blue-50/50 via-slate-50/25 to-white min-h-[calc(100dvh-4.5rem)] flex flex-col justify-center items-center py-10 md:py-14 border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-5 sm:px-8 text-center relative z-10 space-y-7 my-auto">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#0b132b] leading-[1.2] max-w-4xl mx-auto">
            <span className="block">Where young curiosity becomes</span>
            <span className="inline-block mt-2 sm:mt-3">
              <span
                className={`inline-block px-3.5 sm:px-5 py-1 sm:py-1.5 rounded-2xl transition-all duration-300 ease-out ${
                  animatedWords[wordIdx].style
                } ${
                  isAnimating
                    ? "opacity-0 -translate-y-2 scale-98 blur-xs"
                    : "opacity-100 translate-y-0 scale-100 blur-none"
                }`}
              >
                {animatedWords[wordIdx].text}
              </span>
            </span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Empowering tomorrow's scientists through an enriched curriculum, laboratory discovery, and strong Christian values in La Union.
          </p>

          <div className="pt-1 flex flex-wrap items-center justify-center gap-4">
            <Link to="/enrollment" className="btn-primary text-base px-8 py-3.5 shadow-md">
              Enroll for SY 2026-2027 <ArrowRight size={16} />
            </Link>
            <Link to="/programs" className="btn-secondary text-base px-8 py-3.5">
              Explore Academic Programs
            </Link>
          </div>
          <div className="flex justify-center">
            <RoboticsLabIllustration customSrc="/images/friends.svg" className="w-full max-w-sm h-auto drop-shadow-sm" />
          </div>
        </div>
      </section>

      {/* 2. FACTS ROW */}
      <section className="py-12 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="flex flex-col items-center gap-2">
            <Sprout size={22} className="text-blue-700" />
            <p className="text-sm font-semibold text-[#0b132b]">Non-sectarian Christian</p>
          </div>
          <div className="flex flex-col items-center gap-2">
            <BookOpen size={22} className="text-blue-700" />
            <p className="text-sm font-semibold text-[#0b132b]">Nursery through Grade 6</p>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Microscope size={22} className="text-blue-700" />
            <p className="text-sm font-semibold text-[#0b132b]">Science-oriented curriculum</p>
          </div>
          <div className="flex flex-col items-center gap-2">
            <MapPin size={22} className="text-blue-700" />
            <p className="text-sm font-semibold text-[#0b132b]">Aringay, La Union</p>
          </div>
        </div>
      </section>

      {/* 3. FEATURE BANNER */}
      <section className="py-20 max-w-7xl mx-auto px-5 sm:px-8">
        <div className="bg-gradient-to-r from-amber-50 to-amber-100/60 rounded-2xl p-8 sm:p-12 border border-amber-200 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-4">
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
          <div className="lg:col-span-5 flex justify-center">
            <RoboticsLabIllustration customSrc="/images/creative.svg" className="w-full max-w-sm h-auto drop-shadow-sm" />
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
