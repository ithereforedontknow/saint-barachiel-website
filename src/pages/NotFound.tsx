import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-5 py-16">
      <div className="text-center max-w-md space-y-4">
        <p className="text-sm font-bold text-blue-700 uppercase tracking-wider">404</p>
        <h1 className="text-3xl sm:text-4xl font-bold text-[#0b132b] tracking-tight">
          We could not find that page.
        </h1>
        <p className="text-slate-600 text-base">
          The page you are looking for may have moved or no longer exists.
        </p>
        <div className="pt-2">
          <Link to="/" className="btn-primary inline-flex items-center gap-2">
            Back to Home <ArrowRight size={15} />
          </Link>
        </div>
      </div>
    </div>
  );
}
