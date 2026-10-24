import React from 'react';
import { Scale, Phone, Mail, MapPin, Download, ShieldCheck, ChevronRight } from 'lucide-react';
import { lawyerData } from '../data/lawyerData';
import { downloadVCard } from '../utils/vcard';

export default function Footer({ setActivePage, onOpenDisclaimer, onOpenAppointment }) {
  const handleNav = (pageId) => {
    setActivePage(pageId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    window.location.hash = pageId === 'home' ? '' : pageId;
  };

  return (
    <footer className="bg-neutral-100 border-t border-neutral-200 text-neutral-800 pt-12 pb-10 mt-auto font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Top Grid: Chambers & Profile */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pb-10 border-b border-neutral-200">
          
          {/* Column 1: Identity & Crest */}
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-full border border-neutral-300 p-0.5 bg-white overflow-hidden shrink-0 shadow-xs">
                <img
                  src="./logo.png"
                  alt="Advocate Jagadish Chandra Halder"
                  className="w-full h-full object-cover rounded-full"
                  onError={(e) => { e.target.style.display = 'none'; }}
                />
              </div>
              <div>
                <h4 className="font-cinzel font-bold text-sm sm:text-base text-black">
                  JAGADISH CHANDRA HALDER
                </h4>
                <div className="text-[10px] font-semibold uppercase tracking-wider text-neutral-600 font-cinzel">
                  Advocate, High Court, Calcutta
                </div>
              </div>
            </div>

            <p className="text-xs text-neutral-600 leading-relaxed font-normal">
              Distinguished civil advocate with over 25 years of courtroom experience in the High Court at Calcutta, Sub-Divisional Courts, and District Courts of West Bengal. Specializing in property disputes, title suits, appeals, and constitutional writs.
            </p>

            <div className="pt-1">
              <button
                onClick={() => downloadVCard(lawyerData)}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-neutral-300 text-black hover:bg-black hover:text-white transition-all text-xs font-medium shadow-xs"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Save Contact (vCard)</span>
              </button>
            </div>
          </div>

          {/* Column 2: The 3 Chambers */}
          <div className="space-y-3">
            <h5 className="font-cinzel text-xs font-semibold uppercase tracking-wider text-black border-b border-neutral-200 pb-1.5">
              Chambers & Offices
            </h5>
            <ul className="space-y-3 text-xs">
              <li className="space-y-0.5">
                <div className="font-semibold text-black flex items-center gap-1.5">
                  <Scale className="w-3.5 h-3.5 text-black shrink-0" />
                  Calcutta High Court Chamber
                </div>
                <div className="text-neutral-600 pl-5 text-[11px]">
                  Bar Association, Room No. 15 (2nd Floor), High Court, Calcutta
                </div>
              </li>

              <li className="space-y-0.5">
                <div className="font-semibold text-black flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-black shrink-0" />
                  Garia Chamber (Kolkata)
                </div>
                <div className="text-neutral-600 pl-5 text-[11px]">
                  Garia, Nabagram, Jhil Road, Kolkata - 700152
                </div>
              </li>

              <li className="space-y-0.5">
                <div className="font-semibold text-black flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-black shrink-0" />
                  Kakdwip Chamber (South 24-Parganas)
                </div>
                <div className="text-neutral-600 pl-5 text-[11px]">
                  Kakdwip New Market (Near Kakdwip Court), South 24-Parganas
                </div>
              </li>
            </ul>
          </div>

          {/* Column 3: Quick Navigation */}
          <div className="space-y-3">
            <h5 className="font-cinzel text-xs font-semibold uppercase tracking-wider text-black border-b border-neutral-200 pb-1.5">
              Explore & Services
            </h5>
            <ul className="space-y-2 text-xs font-medium">
              <li>
                <button
                  onClick={() => handleNav('home')}
                  className="hover:text-black transition-colors flex items-center gap-1.5 text-neutral-600 hover:underline"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-neutral-400" /> Home Page
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('about')}
                  className="hover:text-black transition-colors flex items-center gap-1.5 text-neutral-600 hover:underline"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-neutral-400" /> About Adv. Jagadish Halder
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('practice-areas')}
                  className="hover:text-black transition-colors flex items-center gap-1.5 text-neutral-600 hover:underline"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-neutral-400" /> Civil Practice Areas
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('chambers')}
                  className="hover:text-black transition-colors flex items-center gap-1.5 text-neutral-600 hover:underline"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-neutral-400" /> Chamber Timings & Directions
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('contact')}
                  className="hover:text-black transition-colors flex items-center gap-1.5 text-neutral-600 hover:underline"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-neutral-400" /> Contact & Appointments
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Direct Helpline & Hours */}
          <div className="space-y-3">
            <h5 className="font-cinzel text-xs font-semibold uppercase tracking-wider text-black border-b border-neutral-200 pb-1.5">
              Direct Contact
            </h5>
            <div className="space-y-2 text-xs">
              <a
                href={`tel:+91${lawyerData.phone}`}
                className="flex items-center gap-2.5 p-2.5 rounded-lg bg-white border border-neutral-200 hover:border-black transition-colors group shadow-xs"
              >
                <div className="w-8 h-8 rounded-md bg-neutral-100 flex items-center justify-center text-black group-hover:bg-black group-hover:text-white transition-colors">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] text-neutral-500 font-medium uppercase">Direct Phone</div>
                  <div className="text-black font-semibold text-xs sm:text-sm">{lawyerData.phoneFormatted}</div>
                </div>
              </a>

              <a
                href={`mailto:${lawyerData.email}`}
                className="flex items-center gap-2.5 p-2.5 rounded-lg bg-white border border-neutral-200 hover:border-black transition-colors group shadow-xs"
              >
                <div className="w-8 h-8 rounded-md bg-neutral-100 flex items-center justify-center text-black group-hover:bg-black group-hover:text-white transition-colors">
                  <Mail className="w-4 h-4" />
                </div>
                <div className="truncate">
                  <div className="text-[10px] text-neutral-500 font-medium uppercase">Official Email</div>
                  <div className="text-black font-medium text-xs truncate">{lawyerData.email}</div>
                </div>
              </a>

              <button
                onClick={onOpenAppointment}
                className="w-full py-2.5 rounded-lg bg-black text-white font-medium text-xs tracking-wide shadow-xs hover:bg-neutral-800 transition-all text-center active:scale-95"
              >
                Request Chamber Appointment
              </button>
            </div>
          </div>
        </div>

        {/* Bar Council Disclaimer Notice in Footer */}
        <div className="mt-6 p-4 rounded-xl bg-white border border-neutral-200 text-xs text-neutral-600 leading-relaxed flex flex-col md:flex-row items-center justify-between gap-3 shadow-xs">
          <div className="flex items-start gap-2">
            <ShieldCheck className="w-4 h-4 text-black mt-0.5 shrink-0" />
            <span>
              <strong>Bar Council of India Rule 36 Compliance:</strong> This website does not constitute advertising or solicitation. The information provided is solely for informational purposes upon user request.
            </span>
          </div>
          <button
            onClick={onOpenDisclaimer}
            className="text-black font-semibold hover:underline shrink-0 text-xs"
          >
            View BCI Disclaimer
          </button>
        </div>

        {/* Bottom copyright & attribution */}
        <div className="mt-6 pt-4 border-t border-neutral-200 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] sm:text-xs text-neutral-500 font-normal">
          <div>
            &copy; {new Date().getFullYear()} Advocate Jagadish Chandra Halder. All Rights Reserved.
          </div>
          <div className="flex items-center gap-3">
            <span className="font-mono text-black font-semibold">advjagadish.in</span>
            <span>•</span>
            <span className="font-medium">High Court, Calcutta</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
