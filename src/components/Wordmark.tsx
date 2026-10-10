import logo from "../../public/logo.png";

interface WordmarkProps {
  dark?: boolean;
}

/** School wordmark integrating the official seal. */
export function Wordmark({ dark }: WordmarkProps) {
  return (
    <span className="flex items-center gap-3">
      <img
        src={logo}
        alt="Saint Barachiel Special Science School seal"
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
