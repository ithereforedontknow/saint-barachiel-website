import React, { useEffect, useState } from "react";
import {
  ImagePlus,
  FlaskConical,
  Users,
  BookOpen,
  Telescope,
  type LucideIcon,
} from "lucide-react";
import logo from "../assets/logo.png";

interface WordmarkProps {
  dark?: boolean;
}

/** School wordmark using the real seal artwork. `dark` = light text for dark backgrounds. */
export function Wordmark({ dark }: WordmarkProps) {
  return (
    <span className="flex items-center gap-3">
      <img
        src={logo}
        alt="Saint Barachiel Special Science School seal"
        className="w-11 h-11 sm:w-12 sm:h-12 shrink-0"
      />
      <span className={`font-display leading-tight text-left text-base sm:text-lg ${dark ? "text-white" : "text-navy"}`}>
        Saint Barachiel
        <br className="hidden sm:block" />{" "}
        <span className={`font-normal text-xs sm:text-sm sm:inline block ${dark ? "text-gold-light" : "text-brand"}`}>
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

/** A dashed placeholder slot for a real photo to be dropped in later. */
export function PhotoPlaceholder({ caption, tint = "bg-brand-pale", className = "" }: PhotoPlaceholderProps) {
  return (
    <div
      className={`aspect-[4/3] rounded-3xl border-2 border-dashed border-navy/25 flex flex-col items-center justify-center gap-3 text-center px-6 ${tint} ${className}`}
    >
      <ImagePlus className="text-navy/50" size={32} />
      <span className="text-sm text-navy/50">{caption}</span>
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

/** A card with an organic blob badge behind its icon and a slight, intentional tilt. */
export function QuirkCard({ icon: Icon, title, body, rotate = 0, tint = "bg-brand-light", ink = "text-brand" }: QuirkCardProps) {
  return (
    <div className="bg-white rounded-3xl p-7 sm:p-8 shadow-sm" style={{ transform: `rotate(${rotate}deg)` }}>
      <div
        className={`w-14 h-14 flex items-center justify-center mb-5 ${tint}`}
        style={{ borderRadius: "60% 40% 55% 45% / 45% 55% 40% 60%" }}
      >
        <Icon size={24} className={ink} />
      </div>
      <h3 className="font-display text-xl text-navy mb-2">{title}</h3>
      <p className="text-base text-navy/70 leading-relaxed">{body}</p>
    </div>
  );
}

interface Slide {
  label: string;
  icon: LucideIcon;
}

const SLIDES: Slide[] = [
  { label: "Science time", icon: FlaskConical },
  { label: "Morning assembly", icon: Users },
  { label: "Reading corner", icon: BookOpen },
  { label: "Campus grounds", icon: Telescope },
];

/** Rotating stack of "photo" cards — illustrated placeholders, ready to swap for real photos. */
export function PhotoStack() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setIndex((i) => (i + 1) % SLIDES.length), 3200);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="relative h-96 sm:h-[30rem] w-full max-w-md mx-auto">
      {SLIDES.map((s, i) => {
        const offset = (i - index + SLIDES.length) % SLIDES.length;
        const Icon = s.icon;
        const style: React.CSSProperties = {
          zIndex: SLIDES.length - offset,
          transform: `translate(${offset * 14}px, ${offset * 18}px) rotate(${offset === 0 ? -3 : offset * 4 - 6}deg) scale(${1 - offset * 0.06})`,
          opacity: offset > 2 ? 0 : 1,
          transition: "transform 0.8s cubic-bezier(.22,1,.36,1), opacity 0.8s ease",
        };
        return (
          <div
            key={s.label}
            className="absolute inset-0 rounded-[36px] border-[6px] border-white shadow-xl flex flex-col items-center justify-center gap-4"
            style={{ ...style, background: "linear-gradient(155deg, #bfe0f8 0%, #eaf5fd 100%)" }}
          >
            <Icon size={44} className="text-navy" strokeWidth={1.5} />
            <span className="font-display text-navy text-lg">{s.label}</span>
          </div>
        );
      })}
    </div>
  );
}
