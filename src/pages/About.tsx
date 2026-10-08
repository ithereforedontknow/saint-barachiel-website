import { Target, Award, BookOpen, Shield, Users } from "lucide-react";

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header Band */}
      <section className="border-b border-slate-200 bg-slate-50 py-16 px-5 sm:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <h1 className="text-4xl sm:text-5xl font-bold text-[#0b132b] tracking-tight">
            Nurturing academic brilliance and character.
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Located in Aringay, La Union, Saint Barachiel Special Science School is dedicated to nurturing young minds with a robust science-oriented foundation.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Mission */}
          <div className="bg-blue-50/70 p-8 sm:p-10 rounded-2xl border border-blue-200 space-y-4">
            <div className="w-12 h-12 rounded-xl bg-blue-700 text-white flex items-center justify-center shadow-xs">
              <Target size={24} />
            </div>
            <h2 className="text-2xl font-bold text-[#0b132b]">Our Mission</h2>
            <p className="text-slate-700 text-base leading-relaxed">
              To deliver an exceptional, holistic science education that challenges students intellectually, instills moral values, and equips them with critical thinking skills required to thrive in a rapidly advancing global society.
            </p>
          </div>

          {/* Vision */}
          <div className="bg-amber-50/70 p-8 sm:p-10 rounded-2xl border border-amber-200 space-y-4">
            <div className="w-12 h-12 rounded-xl bg-amber-600 text-white flex items-center justify-center shadow-xs">
              <Award size={24} />
            </div>
            <h2 className="text-2xl font-bold text-[#0b132b]">Our Vision</h2>
            <p className="text-slate-700 text-base leading-relaxed">
              To be the premier science elementary and junior high institution in the region, recognized for academic excellence, innovative teaching practices, and students who lead with integrity.
            </p>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 space-y-10">
          <div className="text-center max-w-xl mx-auto space-y-2">
            <h2 className="text-3xl font-bold text-[#0b132b]">Our Core Pillars</h2>
            <p className="text-slate-600 text-sm">The foundational principles that guide everything we do.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="p-6 space-y-3 bg-white rounded-xl border border-slate-200 shadow-2xs">
              <div className="w-10 h-10 rounded-lg bg-blue-100 text-blue-800 flex items-center justify-center font-bold">
                <BookOpen size={20} />
              </div>
              <h3 className="font-bold text-lg text-[#0b132b]">
                Scientific Inquiry
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Encouraging questions, empirical investigation, and active problem solving across all subjects.
              </p>
            </div>

            <div className="p-6 space-y-3 bg-white rounded-xl border border-slate-200 shadow-2xs">
              <div className="w-10 h-10 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold">
                <Shield size={20} />
              </div>
              <h3 className="font-bold text-lg text-[#0b132b]">
                Moral Formation
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Instilling ethical responsibility, empathy, and respect for others in our daily school life.
              </p>
            </div>

            <div className="p-6 space-y-3 bg-white rounded-xl border border-slate-200 shadow-2xs">
              <div className="w-10 h-10 rounded-lg bg-amber-100 text-amber-800 flex items-center justify-center font-bold">
                <Users size={20} />
              </div>
              <h3 className="font-bold text-lg text-[#0b132b]">
                Community Leadership
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Developing leaders who contribute meaningfully to the betterment of La Union and beyond.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
