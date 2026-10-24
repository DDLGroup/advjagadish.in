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
    <footer className="bg-neutral-100 border-t-2 border-neutral-300 text-neutral-800 pt-16 pb-12 mt-auto font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Top Grid: Chambers & Profile */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b-2 border-neutral-300">
          
          {/* Column 1: Identity & Crest */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-14 h-14 rounded-full border-2 border-black p-0.5 bg-white overflow-hidden shrink-0 shadow-sm">
                <img
                  src="./logo.png"
                  alt="Advocate Jagadish Chandra Halder"
                  className="w-full h-full object-cover rounded-full"
                  onError={(e) => { e.target.style.display = 'none'; }}
                />
              </div>
              <div>
                <h4 className="font-serif font-black text-xl text-black">
                  JAGADISH CHANDRA HALDER
                </h4>
                <div className="text-xs font-bold uppercase tracking-wider text-neutral-700 font-cinzel">
                  Advocate, High Court, Calcutta
                </div>
              </div>
            </div>

            <p className="text-sm sm:text-base text-neutral-700 leading-relaxed font-normal">
              Distinguished civil advocate with over 25 years of courtroom experience in the High Court at Calcutta, Sub-Divisional Courts, and District Courts of West Bengal. Specializing in property disputes, title suits, appeals, and constitutional writs.
            </p>

            <div className="pt-2">
              <button
                onClick={() => downloadVCard(lawyerData)}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white border-2 border-neutral-300 text-black hover:bg-black hover:text-white transition-all text-sm font-bold shadow-sm"
              >
                <Download className="w-4 h-4" />
                <span>Save Advocate Contact (vCard)</span>
              </button>
            </div>
          </div>

          {/* Column 2: The 3 Chambers */}
          <div className="space-y-4">
            <h5 className="font-cinzel text-xs sm:text-sm font-extrabold uppercase tracking-wider text-black border-b-2 border-neutral-300 pb-2">
              Chambers & Offices
            </h5>
            <ul className="space-y-4 text-sm sm:text-base">
              <li className="space-y-1">
                <div className="font-bold text-black flex items-center gap-2">
                  <Scale className="w-4 h-4 text-black shrink-0" />
                  Calcutta High Court Chamber
                </div>
                <div className="text-neutral-700 pl-6 text-xs sm:text-sm">
                  Bar Association, Room No. 15 (2nd Floor), High Court, Calcutta
                </div>
              </li>

              <li className="space-y-1">
                <div className="font-bold text-black flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-black shrink-0" />
                  Garia Chamber (Kolkata)
                </div>
                <div className="text-neutral-700 pl-6 text-xs sm:text-sm">
                  Garia, Nabagram, Jhil Road, Kolkata - 700152
                </div>
              </li>

              <li className="space-y-1">
                <div className="font-bold text-black flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-black shrink-0" />
                  Kakdwip Chamber (South 24-Parganas)
                </div>
                <div className="text-neutral-700 pl-6 text-xs sm:text-sm">
                  Kakdwip New Market (Near Kakdwip Court), South 24-Parganas
                </div>
              </li>
            </ul>
          </div>

          {/* Column 3: Quick Navigation */}
          <div className="space-y-4">
            <h5 className="font-cinzel text-xs sm:text-sm font-extrabold uppercase tracking-wider text-black border-b-2 border-neutral-300 pb-2">
              Explore & Services
            </h5>
            <ul className="space-y-2.5 text-sm sm:text-base font-semibold">
              <li>
                <button
                  onClick={() => handleNav('home')}
                  className="hover:text-black transition-colors flex items-center gap-2 text-neutral-700 hover:underline"
                >
                  <ChevronRight className="w-4 h-4 text-black" /> Home Page
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('about')}
                  className="hover:text-black transition-colors flex items-center gap-2 text-neutral-700 hover:underline"
                >
                  <ChevronRight className="w-4 h-4 text-black" /> About Adv. Jagadish Halder
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('practice-areas')}
                  className="hover:text-black transition-colors flex items-center gap-2 text-neutral-700 hover:underline"
                >
                  <ChevronRight className="w-4 h-4 text-black" /> Civil Practice Areas
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('chambers')}
                  className="hover:text-black transition-colors flex items-center gap-2 text-neutral-700 hover:underline"
                >
                  <ChevronRight className="w-4 h-4 text-black" /> Chamber Timings & Directions
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('contact')}
                  className="hover:text-black transition-colors flex items-center gap-2 text-neutral-700 hover:underline"
                >
                  <ChevronRight className="w-4 h-4 text-black" /> Contact & Appointments
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Direct Helpline & Hours */}
          <div className="space-y-4">
            <h5 className="font-cinzel text-xs sm:text-sm font-extrabold uppercase tracking-wider text-black border-b-2 border-neutral-300 pb-2">
              Direct Contact
            </h5>
            <div className="space-y-3 text-sm">
              <a
                href={`tel:+91${lawyerData.phone}`}
                className="flex items-center gap-3 p-3 rounded-xl bg-white border-2 border-neutral-300 hover:border-black transition-colors group shadow-sm"
              >
                <div className="w-10 h-10 rounded-xl bg-neutral-100 flex items-center justify-center text-black group-hover:bg-black group-hover:text-white transition-colors">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-neutral-500 font-bold uppercase">Direct Phone</div>
                  <div className="text-black font-extrabold text-base">{lawyerData.phoneFormatted}</div>
                </div>
              </a>

              <a
                href={`mailto:${lawyerData.email}`}
                className="flex items-center gap-3 p-3 rounded-xl bg-white border-2 border-neutral-300 hover:border-black transition-colors group shadow-sm"
              >
                <div className="w-10 h-10 rounded-xl bg-neutral-100 flex items-center justify-center text-black group-hover:bg-black group-hover:text-white transition-colors">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="truncate">
                  <div className="text-xs text-neutral-500 font-bold uppercase">Official Email</div>
                  <div className="text-black font-bold text-sm truncate">{lawyerData.email}</div>
                </div>
              </a>

              <button
                onClick={onOpenAppointment}
                className="w-full py-3.5 rounded-xl bg-black text-white font-extrabold text-sm tracking-wide shadow-md hover:bg-neutral-800 transition-all text-center active:scale-95"
              >
                Request Chamber Appointment
              </button>
            </div>
          </div>
        </div>

        {/* Bar Council Disclaimer Notice in Footer */}
        <div className="mt-8 p-5 rounded-2xl bg-white border-2 border-neutral-300 text-xs sm:text-sm text-neutral-700 leading-relaxed flex flex-col md:flex-row items-center justify-between gap-4 shadow-sm">
          <div className="flex items-start gap-2.5">
            <ShieldCheck className="w-5 h-5 text-black mt-0.5 shrink-0" />
            <span>
              <strong>Bar Council of India Rule 36 Compliance:</strong> This website does not constitute advertising or solicitation. The information provided is solely for informational purposes upon user request.
            </span>
          </div>
          <button
            onClick={onOpenDisclaimer}
            className="text-black font-extrabold hover:underline shrink-0 text-sm"
          >
            View BCI Disclaimer
          </button>
        </div>

        {/* Bottom copyright & attribution */}
        <div className="mt-8 pt-6 border-t border-neutral-300 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs sm:text-sm text-neutral-600 font-medium">
          <div>
            &copy; {new Date().getFullYear()} Advocate Jagadish Chandra Halder. All Rights Reserved.
          </div>
          <div className="flex items-center gap-4">
            <span className="font-mono text-sm text-black font-extrabold">advjagadish.in</span>
            <span>•</span>
            <span className="font-bold">High Court, Calcutta</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
