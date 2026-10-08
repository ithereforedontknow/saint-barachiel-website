import { useState } from "react";
import { Link } from "react-router-dom";
import { Check, ArrowRight } from "lucide-react";

export default function Programs() {
  const [activeTab, setActiveTab] = useState<"all" | "preschool" | "elementary" | "jhs">("all");

  const programs = [
    {
      category: "preschool",
      badge: "Preschool",
      cardBg: "bg-amber-50/60 border-amber-200",
      badgeStyle: "bg-amber-100 text-amber-800 border-amber-200",
      title: "Nursery & Kindergarten",
      desc: "Early childhood development combining phonics, arithmetic, and playful science exploration.",
      features: [
        "Interactive play-based learning",
        "Early reading and numerical confidence",
        "Motor skills and social growth",
        "Gentle introduction to science concepts",
      ],
    },
    {
      category: "elementary",
      badge: "Elementary",
      cardBg: "bg-blue-50/60 border-blue-200",
      badgeStyle: "bg-blue-100 text-blue-800 border-blue-200",
      title: "Primary Science Track (Grades 1-3)",
      desc: "Laying a strong foundation in reading comprehension, mathematical logic, and hands-on nature discovery.",
      features: [
        "Enriched Math and English drills",
        "Basic science lab activities",
        "Values formation and good manners",
        "Computer literacy fundamentals",
      ],
    },
    {
      category: "elementary",
      badge: "Elementary",
      cardBg: "bg-emerald-50/60 border-emerald-200",
      badgeStyle: "bg-emerald-100 text-emerald-800 border-emerald-200",
      title: "Intermediate Science Track (Grades 4-6)",
      desc: "Advanced elementary studies preparing students for secondary science high school standards.",
      features: [
        "Investigatory science projects",
        "Intermediate algebra and geometry concepts",
        "Robotics and computer logic",
        "Regional academic competitions",
      ],
    },
    {
      category: "jhs",
      badge: "Junior High",
      cardBg: "bg-slate-50 border-slate-300",
      badgeStyle: "bg-[#0b132b] text-white border-[#0b132b]",
      title: "Junior High School (Grades 7-10)",
      desc: "A rigorous STEM-focused curriculum designed to prepare students for top Senior High strands and universities.",
      features: [
        "Advanced Biology, Chemistry, and Physics labs",
        "Research methodology and defense",
        "Robotics and programming options",
        "Student council and leadership programs",
      ],
    },
  ];

  const filtered = activeTab === "all" ? programs : programs.filter((p) => p.category === activeTab);

  return (
    <div className="min-h-screen bg-white py-12 px-5 sm:px-8 max-w-7xl mx-auto space-y-12">
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-100/80 px-3 py-1 rounded-full border border-blue-200 inline-block">
          Academic Offerings
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-[#0b132b] tracking-tight">
          Curriculum structured for academic brilliance.
        </h1>
        <p className="text-slate-600 text-base">
          Our science-oriented curriculum prepares students at every level with the tools needed for modern academic success.
        </p>

        {/* Tab Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
          {[
            { id: "all", label: "All Offerings" },
            { id: "preschool", label: "Preschool" },
            { id: "elementary", label: "Elementary" },
            { id: "jhs", label: "Junior High School" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as typeof activeTab)}
              className={`px-4 py-2 rounded-full text-xs font-semibold border transition ${
                activeTab === tab.id
                  ? "bg-[#0b132b] text-white border-[#0b132b]"
                  : "bg-white text-slate-700 border-slate-300 hover:bg-slate-50"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Program Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {filtered.map((prog, idx) => (
          <div
            key={idx}
            className={`${prog.cardBg} p-8 rounded-2xl border flex flex-col justify-between space-y-6 shadow-xs`}
          >
            <div className="space-y-4">
              <span
                className={`text-xs font-bold px-3 py-1 rounded-md border inline-block ${prog.badgeStyle}`}
              >
                {prog.badge}
              </span>
              <h2 className="text-2xl font-bold text-[#0b132b]">{prog.title}</h2>
              <p className="text-sm text-slate-700 leading-relaxed">{prog.desc}</p>

              <ul className="space-y-2.5 pt-2">
                {prog.features.map((f, i) => (
                  <li key={i} className="flex items-center gap-2.5 text-xs text-slate-800 font-medium">
                    <Check size={15} className="text-blue-700 shrink-0" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-4 border-t border-slate-300/60 flex items-center justify-between">
              <span className="text-xs font-semibold text-slate-600">DepEd Recognized Track</span>
              <Link to="/enrollment" className="btn-primary text-xs py-2 px-4 inline-flex items-center gap-1">
                Apply for this program <ArrowRight size={13} />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
