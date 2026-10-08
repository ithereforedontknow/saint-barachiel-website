import React from "react";
import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, ArrowUpRight } from "lucide-react";
import { Wordmark } from "./Wordmark";

export default function Footer() {
  return (
    <footer className="bg-slate-50 text-slate-600 pt-16 pb-12 border-t border-slate-200 text-sm">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10 pb-12 border-b border-slate-200">
          {/* Brand Info */}
          <div className="md:col-span-2 space-y-4">
            <Wordmark />
            <p className="text-slate-600 leading-relaxed max-w-sm text-sm">
              Empowering future scientists and leaders through an enriched science curriculum, character formation, and academic rigor in Aringay, La Union.
            </p>
            <div className="pt-2 text-xs text-slate-600 space-y-2">
              <p className="flex items-start gap-2.5">
                <MapPin size={15} className="text-blue-700 shrink-0 mt-0.5" />
                <span>350 Quezada Street, San Benito Sur, Aringay, La Union</span>
              </p>
              <p className="flex items-center gap-2.5">
                <Phone size={15} className="text-blue-700 shrink-0" />
                <span>0917 123 4567 / (072) 607 1234</span>
              </p>
              <p className="flex items-center gap-2.5">
                <Mail size={15} className="text-blue-700 shrink-0" />
                <span>admissions@sbsss.edu.ph</span>
              </p>
            </div>
          </div>

          {/* Academics */}
          <div>
            <h4 className="font-bold text-[#0b132b] mb-4 text-xs uppercase tracking-wider text-blue-800">
              Academics
            </h4>
            <ul className="space-y-2.5 text-slate-600">
              <li><Link to="/programs" className="hover:text-blue-700 transition">Preschool (Nursery & Kinder)</Link></li>
              <li><Link to="/programs" className="hover:text-blue-700 transition">Elementary (Grades 1-6)</Link></li>
              <li><Link to="/programs" className="hover:text-blue-700 transition">Junior High School</Link></li>
              <li><Link to="/programs" className="hover:text-blue-700 transition">STEM & Robotics Focus</Link></li>
            </ul>
          </div>

          {/* Admissions */}
          <div>
            <h4 className="font-bold text-[#0b132b] mb-4 text-xs uppercase tracking-wider text-blue-800">
              Admissions
            </h4>
            <ul className="space-y-2.5 text-slate-600">
              <li><Link to="/enrollment" className="hover:text-blue-700 transition">Enrollment Steps</Link></li>
              <li><Link to="/enrollment" className="hover:text-blue-700 transition">Requirements Checklist</Link></li>
              <li><Link to="/enrollment" className="hover:text-blue-700 transition">Tuition & Assistance</Link></li>
              <li><Link to="/faq" className="hover:text-blue-700 transition">Frequently Asked Questions</Link></li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="font-bold text-[#0b132b] mb-4 text-xs uppercase tracking-wider text-blue-800">
              Connect
            </h4>
            <ul className="space-y-2.5 text-slate-600">
              <li><Link to="/visit" className="hover:text-blue-700 transition">Campus Directions</Link></li>
              <li><Link to="/visit" className="hover:text-blue-700 transition">Send an Inquiry</Link></li>
              <li>
                <a
                  href="https://www.facebook.com/SaintBarachiel2001"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-700 transition inline-flex items-center gap-1 text-slate-700 font-medium"
                >
                  Facebook Page <ArrowUpRight size={13} />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Footer Credits */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© {new Date().getFullYear()} Saint Barachiel Special Science School Inc. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span className="hover:text-[#0b132b] cursor-pointer">DepEd Recognized</span>
            <span className="hover:text-[#0b132b] cursor-pointer">Student Safety</span>
            <Link to="/visit" className="hover:text-[#0b132b]">Contact Registrar</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
