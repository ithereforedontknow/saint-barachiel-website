import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ArrowRight } from "lucide-react";
import { Wordmark } from "./Wordmark";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { label: "Home", path: "/" },
    { label: "About Us", path: "/about" },
    { label: "Academic Programs", path: "/programs" },
    { label: "Admissions", path: "/enrollment" },
    { label: "FAQ", path: "/faq" },
    { label: "Visit & Contact", path: "/visit" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200">
      {/* Light Mode Admissions Announcement Bar */}

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-5 sm:px-8 h-18 flex items-center justify-between">
        {/* Brand Wordmark */}
        <Link to="/" className="flex items-center">
          <Wordmark />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`px-3.5 py-2 rounded-lg text-sm font-medium transition-colors ${
                  isActive
                    ? "text-blue-700 bg-blue-50/90 font-semibold"
                    : "text-slate-600 hover:text-[#0b132b] hover:bg-slate-100"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Actions */}
        <div className="hidden lg:flex items-center gap-3">
          <Link
            to="/visit"
            className="text-sm font-semibold text-slate-700 hover:text-blue-700 px-3 py-2 transition-colors"
          >
            Inquire
          </Link>
          <Link to="/enrollment" className="btn-primary">
            Enroll Now <ArrowRight size={15} />
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden p-2.5 rounded-lg text-slate-700 hover:bg-slate-100 transition-colors"
          aria-label="Toggle navigation menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-5 py-4 space-y-2 shadow-lg">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={() => setMobileOpen(false)}
              className={`block px-3.5 py-2.5 rounded-lg text-sm font-medium ${
                location.pathname === item.path
                  ? "bg-blue-50 text-blue-700 font-semibold"
                  : "text-slate-700 hover:bg-slate-50"
              }`}
            >
              {item.label}
            </Link>
          ))}
          <div className="pt-3 border-t border-slate-200 flex flex-col gap-2">
            <Link
              to="/enrollment"
              onClick={() => setMobileOpen(false)}
              className="btn-primary w-full text-center"
            >
              Enroll Now
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
