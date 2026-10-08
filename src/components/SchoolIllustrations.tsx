import React from "react";

interface IllustrationProps {
  className?: string;
  customSrc?: string;
}

/** 1. Hero Science Exploration Illustration */
export function HeroScienceIllustration({ className = "w-full h-auto max-w-md", customSrc }: IllustrationProps) {
  if (customSrc) {
    return <img src={customSrc} alt="Science Student Discovery" className={className} />;
  }

  return (
    <svg viewBox="0 0 500 420" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* Background Soft Aura */}
      <circle cx="250" cy="210" r="160" fill="#eff6ff" />
      <circle cx="250" cy="210" r="120" stroke="#bfdbfe" strokeWidth="1.5" strokeDasharray="6 6" />

      {/* Orbit Rings */}
      <ellipse cx="250" cy="210" rx="190" ry="70" stroke="#93c5fd" strokeWidth="1.5" transform="rotate(-25 250 210)" />
      <circle cx="110" cy="140" r="8" fill="#d97706" />
      <circle cx="390" cy="280" r="6" fill="#10b981" />

      {/* Laboratory Flask */}
      <path d="M230 150h40v40l50 110a15 15 0 01-14 20H194a15 15 0 01-14-20l50-110v-40z" fill="#ffffff" stroke="#0b132b" strokeWidth="4" />
      <path d="M200 280l30-60h40l30 60c2 4-1 10-6 10H206c-5 0-8-6-6-10z" fill="#dbeafe" opacity="0.8" />
      <line x1="220" y1="150" x2="280" y2="150" stroke="#0b132b" strokeWidth="6" strokeLinecap="round" />

      {/* Bubbling Chemical Particles */}
      <circle cx="245" cy="245" r="5" fill="#1d4ed8" />
      <circle cx="260" cy="230" r="4" fill="#d97706" />
      <circle cx="238" cy="265" r="3" fill="#10b981" />

      {/* Telescope Looking Up */}
      <path d="M120 290l100-110 20 18-100 110z" fill="#1d4ed8" stroke="#0b132b" strokeWidth="3" />
      <path d="M215 175l35-38 12 11-35 38z" fill="#f59e0b" stroke="#0b132b" strokeWidth="3" />
      <line x1="165" y1="240" x2="135" y2="330" stroke="#0b132b" strokeWidth="4" strokeLinecap="round" />
      <line x1="165" y1="240" x2="195" y2="330" stroke="#0b132b" strokeWidth="4" strokeLinecap="round" />

      {/* Open Book of Knowledge */}
      <path d="M300 290c20-6 40-5 60 5v45c-20-10-40-10-60-5v-45z" fill="#ffffff" stroke="#0b132b" strokeWidth="3" />
      <path d="M420 290c-20-6-40-5-60 5v45c20-10-40-10 60-5v-45z" fill="#ffffff" stroke="#0b132b" strokeWidth="3" />
      <line x1="360" y1="295" x2="360" y2="340" stroke="#0b132b" strokeWidth="3" />

      {/* Sparkles & Starlets */}
      <path d="M380 120l4 10 10 4-10 4-4 10-4-10-10-4 10-4z" fill="#f59e0b" />
      <path d="M130 90l3 7 7 3-7 3-3 7-3-7-7-3 7-3z" fill="#1d4ed8" />
    </svg>
  );
}

/** 2. Robotics & Applied Science Banner Illustration */
export function RoboticsLabIllustration({ className = "w-full h-auto", customSrc }: IllustrationProps) {
  if (customSrc) {
    return <img src={customSrc} alt="Robotics and Science Laboratory" className={className} />;
  }

  return (
    <svg viewBox="0 0 460 300" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <rect x="20" y="40" width="420" height="230" rx="24" fill="#fef3c7" opacity="0.4" />
      {/* Rover Body */}
      <rect x="150" y="140" width="160" height="75" rx="16" fill="#ffffff" stroke="#0b132b" strokeWidth="4" />
      {/* Wheels */}
      <circle cx="170" cy="225" r="24" fill="#0b132b" />
      <circle cx="170" cy="225" r="10" fill="#d97706" />
      <circle cx="290" cy="225" r="24" fill="#0b132b" />
      <circle cx="290" cy="225" r="10" fill="#d97706" />
      {/* Robotic Sensor Antenna */}
      <line x1="230" y1="140" x2="230" y2="90" stroke="#0b132b" strokeWidth="4" />
      <circle cx="230" cy="80" r="12" fill="#1d4ed8" stroke="#0b132b" strokeWidth="3" />
      {/* Circuit Traces */}
      <path d="M180 170h40v20h30" stroke="#1d4ed8" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="250" cy="190" r="4" fill="#d97706" />
      {/* Binary & Math Floating Tags */}
      <rect x="70" y="80" width="60" height="28" rx="8" fill="#ffffff" stroke="#0b132b" strokeWidth="2" />
      <text x="78" y="99" fontFamily="monospace" fontSize="13" fontWeight="bold" fill="#1d4ed8">AI/IOT</text>
      <rect x="330" y="90" width="65" height="28" rx="8" fill="#ffffff" stroke="#0b132b" strokeWidth="2" />
      <text x="340" y="109" fontFamily="monospace" fontSize="13" fontWeight="bold" fill="#059669">E=mc²</text>
    </svg>
  );
}

/** 3. Pillar 1: Enriched Science Flask */
export function SciencePillarIllustration({ className = "w-16 h-16" }: { className?: string }) {
  return (
    <svg viewBox="0 0 80 80" fill="none" className={className}>
      <circle cx="40" cy="40" r="38" fill="#ecfdf5" stroke="#a7f3d0" strokeWidth="2" />
      <path d="M34 22h12v12l14 26a3 3 0 01-3 4H23a3 3 0 01-3-4l14-26V22z" fill="#ffffff" stroke="#065f46" strokeWidth="2.5" />
      <path d="M25 56l9-18h12l9 18H25z" fill="#6ee7b7" opacity="0.6" />
      <circle cx="40" cy="48" r="2.5" fill="#065f46" />
      <circle cx="45" cy="42" r="2" fill="#065f46" />
    </svg>
  );
}

/** 4. Pillar 2: Values & Character Shield */
export function ValuesPillarIllustration({ className = "w-16 h-16" }: { className?: string }) {
  return (
    <svg viewBox="0 0 80 80" fill="none" className={className}>
      <circle cx="40" cy="40" r="38" fill="#eff6ff" stroke="#bfdbfe" strokeWidth="2" />
      <path d="M40 20l18 7v16c0 14-8 23-18 27-10-4-18-13-18-27V27l18-7z" fill="#ffffff" stroke="#1e40af" strokeWidth="2.5" />
      <path d="M40 28v24M30 38h20" stroke="#f59e0b" strokeWidth="3.5" strokeLinecap="round" />
    </svg>
  );
}

/** 5. Pillar 3: Small Class Mentorship */
export function MentorshipPillarIllustration({ className = "w-16 h-16" }: { className?: string }) {
  return (
    <svg viewBox="0 0 80 80" fill="none" className={className}>
      <circle cx="40" cy="40" r="38" fill="#fffbeb" stroke="#fde68a" strokeWidth="2" />
      <circle cx="40" cy="30" r="8" fill="#ffffff" stroke="#b45309" strokeWidth="2.5" />
      <path d="M26 55c0-8 6-13 14-13s14 5 14 13" stroke="#b45309" strokeWidth="2.5" strokeLinecap="round" />
      <circle cx="22" cy="34" r="5" fill="#ffffff" stroke="#d97706" strokeWidth="2" />
      <circle cx="58" cy="34" r="5" fill="#ffffff" stroke="#d97706" strokeWidth="2" />
    </svg>
  );
}
