import { useEffect, useState } from "react";
import {
  ImagePlus,
  FlaskConical,
  Users,
  BookOpen,
  Telescope,
  type LucideIcon,
} from "lucide-react";
import logo from "/public/logo.png";

interface WordmarkProps {
  dark?: boolean;
}

/** School wordmark integrating the official seal */
export function Wordmark({ dark }: WordmarkProps) {
  return (
    <span className="flex items-center gap-3">
      <img
        src={logo}
        alt="Saint Barachiel Special Science School Seal"
        className="w-10 h-10 sm:w-11 sm:h-11 shrink-0 object-contain rounded-full bg-white p-0.5 border border-slate-200"
      />
      <span className="leading-tight text-left">
        <span className={`block font-bold text-base sm:text-lg tracking-tight ${dark ? "text-white" : "text-[#0b132b]"}`}>
          Saint Barachiel
        </span>
        <span className={`block text-xs font-semibold uppercase tracking-wider ${dark ? "text-amber-400" : "text-blue-700"}`}>
          Special Science School
        </span>
      </span>
    </span>
  );
}

interface PhotoPlaceholderProps {
  caption: string;
  tint?: string;
  className?: string;
}

/** Dashed photo placeholder for lab and campus photography */
export function PhotoPlaceholder({ caption, tint = "bg-blue-50/60", className = "" }: PhotoPlaceholderProps) {
  return (
    <div
      className={`aspect-[4/3] rounded-2xl border-2 border-dashed border-slate-300 flex flex-col items-center justify-center gap-3 text-center px-6 ${tint} ${className}`}
    >
      <ImagePlus className="text-blue-700/60" size={32} />
      <span className="text-sm font-medium text-slate-600">{caption}</span>
    </div>
  );
}

interface QuirkCardProps {
  icon: LucideIcon;
  title: string;
  body: string;
  rotate?: number;
  tint?: string;
  ink?: string;
}

/** Academic highlight card */
export function QuirkCard({
  icon: Icon,
  title,
  body,
  rotate = 0,
  tint = "bg-blue-50",
  ink = "text-blue-700",
}: QuirkCardProps) {
  return (
    <div
      className="bg-white rounded-2xl p-7 border border-slate-200 shadow-sm"
      style={{ transform: `rotate(${rotate}deg)` }}
    >
      <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 ${tint}`}>
        <Icon size={24} className={ink} />
      </div>
      <h3 className="text-xl font-bold text-[#0b132b] mb-2">{title}</h3>
      <p className="text-sm text-slate-600 leading-relaxed">{body}</p>
    </div>
  );
}

interface Slide {
  label: string;
  icon: LucideIcon;
}

const SLIDES: Slide[] = [
  { label: "Science & Robotics Lab", icon: FlaskConical },
  { label: "Morning Flag Assembly", icon: Users },
  { label: "Academic Reading Library", icon: BookOpen },
  { label: "Campus & Astronomy Corner", icon: Telescope },
];

/** Rotating carousel of campus science activities */
export function PhotoStack() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setIndex((i) => (i + 1) % SLIDES.length), 3400);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="relative h-96 sm:h-[28rem] w-full max-w-md mx-auto">
      {SLIDES.map((s, i) => {
        const offset = (i - index + SLIDES.length) % SLIDES.length;
        const Icon = s.icon;
        const style: React.CSSProperties = {
          zIndex: SLIDES.length - offset,
          transform: `translate(${offset * 12}px, ${offset * 16}px) rotate(${offset === 0 ? -2 : offset * 3 - 4}deg) scale(${1 - offset * 0.05})`,
          opacity: offset > 2 ? 0 : 1,
          transition: "transform 0.8s cubic-bezier(.22,1,.36,1), opacity 0.8s ease",
        };
        return (
          <div
            key={s.label}
            className="absolute inset-0 rounded-3xl border-4 border-white shadow-xl flex flex-col items-center justify-center gap-4 bg-gradient-to-br from-blue-100 via-slate-50 to-amber-50"
            style={style}
          >
            <div className="w-20 h-20 rounded-2xl bg-white shadow-sm flex items-center justify-center border border-slate-200">
              <Icon size={38} className="text-[#0b132b]" strokeWidth={1.75} />
            </div>
            <span className="font-bold text-[#0b132b] text-lg px-4 text-center">{s.label}</span>
          </div>
        );
      })}
    </div>
  );
}
