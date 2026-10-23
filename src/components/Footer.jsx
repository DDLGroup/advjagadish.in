import React from 'react';
import { Scale, Phone, Mail, MapPin, Download, ShieldCheck, ChevronRight, ExternalLink } from 'lucide-react';
import { lawyerData } from '../data/lawyerData';
import { downloadVCard } from '../utils/vcard';

export default function Footer({ setActivePage, onOpenDisclaimer, onOpenAppointment }) {
  const handleNav = (pageId) => {
    setActivePage(pageId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    window.location.hash = pageId === 'home' ? '' : pageId;
  };

  return (
    <footer className="bg-[#050914] border-t border-gold-500/20 text-slate-300 pt-16 pb-12 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Top Grid: Chambers & Profile */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-slate-800">
          
          {/* Column 1: Identity & Crest */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full border-2 border-gold-500/60 p-0.5 bg-navy-900 overflow-hidden shrink-0">
                <img
                  src="./logo.png"
                  alt="Advocate Jagadish Chandra Halder"
                  className="w-full h-full object-cover rounded-full"
                  onError={(e) => { e.target.style.display = 'none'; }}
                />
              </div>
              <div>
                <h4 className="font-serif font-bold text-lg text-white">
                  JAGADISH CHANDRA HALDER
                </h4>
                <div className="text-[11px] text-gold-400 font-cinzel font-medium">
                  Advocate, High Court, Calcutta
                </div>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed">
              Distinguished civil advocate with over 25 years of courtroom experience in the High Court at Calcutta, Sub-Divisional Courts, and District Courts of West Bengal. Specializing in property disputes, title suits, appeals, and constitutional writs.
            </p>

            <div className="pt-2">
              <button
                onClick={() => downloadVCard(lawyerData)}
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-navy-800 border border-gold-500/30 text-gold-300 hover:bg-gold-500 hover:text-navy-950 transition-all text-xs font-semibold"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Save Advocate Contact (vCard)</span>
              </button>
            </div>
          </div>

          {/* Column 2: The 3 Chambers */}
          <div className="space-y-4">
            <h5 className="font-cinzel text-xs font-bold uppercase tracking-wider text-gold-400 border-b border-slate-800 pb-2">
              Chambers & Offices
            </h5>
            <ul className="space-y-3.5 text-xs">
              <li className="space-y-0.5">
                <div className="font-semibold text-white flex items-center gap-1.5">
                  <Scale className="w-3.5 h-3.5 text-gold-400 shrink-0" />
                  Calcutta High Court Chamber
                </div>
                <div className="text-slate-400 pl-5">
                  Bar Association, Room No. 15 (2nd Floor), High Court, Calcutta
                </div>
              </li>

              <li className="space-y-0.5">
                <div className="font-semibold text-white flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-gold-400 shrink-0" />
                  Garia Chamber (Kolkata)
                </div>
                <div className="text-slate-400 pl-5">
                  Garia, Nabagram, Jhil Road, Kolkata - 700152
                </div>
              </li>

              <li className="space-y-0.5">
                <div className="font-semibold text-white flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-gold-400 shrink-0" />
                  Kakdwip Chamber (South 24-Parganas)
                </div>
                <div className="text-slate-400 pl-5">
                  Kakdwip New Market (Near Kakdwip Court), South 24-Parganas
                </div>
              </li>
            </ul>
          </div>

          {/* Column 3: Quick Navigation */}
          <div className="space-y-4">
            <h5 className="font-cinzel text-xs font-bold uppercase tracking-wider text-gold-400 border-b border-slate-800 pb-2">
              Explore & Services
            </h5>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => handleNav('home')}
                  className="hover:text-gold-300 transition-colors flex items-center gap-1.5 text-slate-300"
                >
                  <ChevronRight className="w-3 h-3 text-gold-400" /> Home Page
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('about')}
                  className="hover:text-gold-300 transition-colors flex items-center gap-1.5 text-slate-300"
                >
                  <ChevronRight className="w-3 h-3 text-gold-400" /> About Adv. Jagadish Halder
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('practice-areas')}
                  className="hover:text-gold-300 transition-colors flex items-center gap-1.5 text-slate-300"
                >
                  <ChevronRight className="w-3 h-3 text-gold-400" /> Civil Practice Areas
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('chambers')}
                  className="hover:text-gold-300 transition-colors flex items-center gap-1.5 text-slate-300"
                >
                  <ChevronRight className="w-3 h-3 text-gold-400" /> Chamber Timings & Directions
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('contact')}
                  className="hover:text-gold-300 transition-colors flex items-center gap-1.5 text-slate-300"
                >
                  <ChevronRight className="w-3 h-3 text-gold-400" /> Contact & Appointments
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Direct Helpline & Hours */}
          <div className="space-y-4">
            <h5 className="font-cinzel text-xs font-bold uppercase tracking-wider text-gold-400 border-b border-slate-800 pb-2">
              Direct Contact
            </h5>
            <div className="space-y-2.5 text-xs">
              <a
                href={`tel:+91${lawyerData.phone}`}
                className="flex items-center gap-2 p-2.5 rounded-lg bg-navy-900 border border-slate-800 hover:border-gold-500/50 transition-colors group"
              >
                <div className="w-8 h-8 rounded-full bg-gold-500/10 flex items-center justify-center text-gold-400 group-hover:bg-gold-500 group-hover:text-navy-950 transition-colors">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] text-slate-400">Direct Chamber Phone</div>
                  <div className="text-white font-bold">{lawyerData.phoneFormatted}</div>
                </div>
              </a>

              <a
                href={`mailto:${lawyerData.email}`}
                className="flex items-center gap-2 p-2.5 rounded-lg bg-navy-900 border border-slate-800 hover:border-gold-500/50 transition-colors group"
              >
                <div className="w-8 h-8 rounded-full bg-gold-500/10 flex items-center justify-center text-gold-400 group-hover:bg-gold-500 group-hover:text-navy-950 transition-colors">
                  <Mail className="w-4 h-4" />
                </div>
                <div className="truncate">
                  <div className="text-[10px] text-slate-400">Official Email</div>
                  <div className="text-white font-semibold truncate">{lawyerData.email}</div>
                </div>
              </a>

              <button
                onClick={onOpenAppointment}
                className="w-full py-2.5 rounded-lg bg-gold-gradient text-navy-950 font-bold text-xs tracking-wide shadow-md hover:opacity-95 transition-all text-center"
              >
                Request Chamber Appointment
              </button>
            </div>
          </div>
        </div>

        {/* Bar Council Disclaimer Notice in Footer */}
        <div className="mt-8 p-4 rounded-xl bg-navy-900/50 border border-slate-800/80 text-[11px] text-slate-400 leading-relaxed flex flex-col md:flex-row items-center justify-between gap-3">
          <div className="flex items-start gap-2">
            <ShieldCheck className="w-4 h-4 text-gold-400 mt-0.5 shrink-0" />
            <span>
              <strong>Bar Council of India Rule 36 Compliance:</strong> This website does not constitute advertising or solicitation. The information provided is solely for informational purposes upon user request.
            </span>
          </div>
          <button
            onClick={onOpenDisclaimer}
            className="text-gold-400 hover:underline shrink-0 text-xs font-medium"
          >
            View BCI Disclaimer
          </button>
        </div>

        {/* Bottom copyright & attribution */}
        <div className="mt-8 pt-6 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            &copy; {new Date().getFullYear()} Advocate Jagadish Chandra Halder. All Rights Reserved.
          </div>
          <div className="flex items-center gap-4">
            <span className="font-mono text-[11px] text-gold-400/80">advjagadish.in</span>
            <span>•</span>
            <span>High Court, Calcutta</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
