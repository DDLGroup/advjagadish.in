import React from 'react';
import { Scale, Award, Shield, BookOpen, Landmark, CheckCircle, ArrowRight, Phone, Download } from 'lucide-react';
import { lawyerData } from '../data/lawyerData';
import { downloadVCard } from '../utils/vcard';

export default function About({ setActivePage, onOpenAppointment }) {
  return (
    <div className="space-y-16 pb-16">
      {/* HEADER BANNER */}
      <section className="relative py-16 bg-[#0a1224] border-b border-gold-500/20 court-pattern">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl space-y-3">
            <div className="text-xs font-semibold uppercase tracking-widest text-gold-400 font-cinzel">
              Professional Profile & Standing
            </div>
            <h1 className="text-3xl sm:text-5xl font-serif font-bold text-white">
              About Advocate Jagadish Chandra Halder
            </h1>
            <p className="text-sm sm:text-base text-slate-300 font-serif italic">
              Advocate, High Court, Calcutta • Bar Association, Room No. 15 (2nd Floor)
            </p>
          </div>
        </div>
      </section>

      {/* DETAILED BIOGRAPHY & JURISPRUDENCE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Portrait & Fast Facts */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-dark-card rounded-2xl p-6 sm:p-8 border border-gold-500/30 text-center shadow-xl">
              <div className="relative w-36 h-36 mx-auto rounded-full border-4 border-gold-500/60 p-1 bg-navy-900 shadow-2xl overflow-hidden mb-5">
                <img
                  src="./logo.png"
                  alt="Advocate Jagadish Chandra Halder"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>

              <h2 className="font-serif font-bold text-2xl text-white">
                {lawyerData.name}
              </h2>
              <div className="text-xs font-cinzel text-gold-400 tracking-wider uppercase mt-1">
                Advocate • High Court, Calcutta
              </div>
              <p className="text-xs text-slate-300 mt-1">
                Bar Association, Room No. 15 (2nd Floor)
              </p>

              <div className="mt-6 pt-6 border-t border-slate-800 text-xs text-left space-y-3 text-slate-300">
                <div className="flex justify-between py-1 border-b border-slate-800/60">
                  <span className="text-slate-400">Designation:</span>
                  <span className="font-semibold text-white">High Court Advocate</span>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-800/60">
                  <span className="text-slate-400">Primary Court:</span>
                  <span className="font-semibold text-gold-300">High Court, Calcutta</span>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-800/60">
                  <span className="text-slate-400">Bar Association:</span>
                  <span className="font-semibold text-white">Room No. 15 (2nd Floor)</span>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-800/60">
                  <span className="text-slate-400">Specialization:</span>
                  <span className="font-semibold text-slate-200">Civil & Appellate Side</span>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-800/60">
                  <span className="text-slate-400">Regional Footprint:</span>
                  <span className="font-semibold text-slate-200">Kolkata & S. 24-Parganas</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-slate-400">Contact:</span>
                  <span className="font-bold text-white">{lawyerData.phoneFormatted}</span>
                </div>
              </div>

              <div className="mt-6 flex flex-col gap-2">
                <button
                  onClick={onOpenAppointment}
                  className="w-full py-3 rounded-xl bg-gold-gradient text-navy-950 font-bold text-xs shadow-md hover:opacity-95 transition-all"
                >
                  Schedule Appointment
                </button>
                <button
                  onClick={() => downloadVCard(lawyerData)}
                  className="w-full py-2.5 rounded-xl bg-navy-800 hover:bg-navy-700 text-gold-300 border border-gold-500/30 text-xs font-semibold transition-all flex items-center justify-center gap-1.5"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download vCard Contact</span>
                </button>
              </div>
            </div>

            {/* Quote Card */}
            <div className="bg-navy-900/60 rounded-2xl p-6 border border-gold-500/20 italic font-serif text-slate-300 text-sm leading-relaxed">
              "Civil disputes over land and inheritance are not mere files; they represent lifetimes of family labor, heritage, and peace. A true civil advocate combines deep knowledge of revenue records with fearless courtroom advocacy."
              <div className="text-xs font-sans not-italic font-bold text-gold-400 mt-3 text-right">
                — Advocate Jagadish Chandra Halder
              </div>
            </div>
          </div>

          {/* Right Column: In-Depth Profile */}
          <div className="lg:col-span-7 space-y-8 text-slate-300 text-sm leading-relaxed font-sans">
            <div className="space-y-4">
              <h3 className="text-2xl font-serif font-bold text-white">
                A Legacy of Dedicated Civil Advocacy
              </h3>
              <p>
                <strong>Advocate Jagadish Chandra Halder</strong> is a seasoned civil counsel practicing before the Hon’ble High Court at Calcutta, the oldest and one of the most prestigious chartered High Courts in India. Operating from the historic <strong className="text-gold-300">Bar Association, Room No. 15 (2nd Floor)</strong> at the High Court building in Kolkata, Advocate Halder has built a formidable reputation over more than 25 years in complex property disputes, land title conflicts, and civil appellate litigation.
              </p>
              <p>
                His practice covers the entire spectrum of civil jurisprudence — from initial trial plaints and emergent injunction applications under Order 39 of the CPC to First Appeals (FA), Second Appeals (SA under Section 100 CPC), Civil Revisions under Section 115 CPC, and Constitutional Writ Petitions under Article 226/227 of the Constitution of India.
              </p>
            </div>

            {/* Distinctive Advantage Section */}
            <div className="p-6 rounded-2xl bg-[#0d162b] border border-gold-500/30 space-y-4">
              <div className="flex items-center gap-2 text-gold-400 font-cinzel font-semibold text-xs tracking-wider">
                <Landmark className="w-4 h-4" />
                Strategic Dual-Jurisdiction Advantage
              </div>
              <h4 className="text-xl font-serif font-bold text-white">
                From Grassroots Revenue Courts to the High Court Bench
              </h4>
              <p className="text-xs sm:text-sm text-slate-300">
                A key distinction in Advocate Halder’s practice is his direct presence at both the <strong>Calcutta High Court</strong> and the sub-divisional / district levels in <strong>Kakdwip (South 24-Parganas)</strong> and <strong>Alipore District Court</strong>.
              </p>
              <ul className="space-y-2 text-xs sm:text-sm">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-gold-400 mt-0.5 shrink-0" />
                  <span><strong>Grassroots Trial Acumen:</strong> Deep understanding of rural and semi-urban Bengal land tenure, including Bargadar rights, vested lands, Porcha correction, BL&LRO hearings, and settlement operations.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-gold-400 mt-0.5 shrink-0" />
                  <span><strong>High Court Appellate Depth:</strong> Mastery in identifying substantial questions of law, formulating grounds in Second Appeals (SA), challenging perverse trial findings, and moving the High Court for supervisory relief under Article 227.</span>
                </li>
              </ul>
            </div>

            {/* Core Values */}
            <div className="space-y-4">
              <h3 className="text-2xl font-serif font-bold text-white">
                Pillars of Practice
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-navy-900 border border-slate-800 space-y-2">
                  <div className="text-gold-400 font-serif font-bold text-base flex items-center gap-2">
                    <BookOpen className="w-4 h-4" />
                    Rigorous Title Scrutiny
                  </div>
                  <p className="text-xs text-slate-400">
                    Never taking claims at face value. Comprehensive investigation of CS, RS, and LR Record of Rights, registration ledgers, and revenue records.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-navy-900 border border-slate-800 space-y-2">
                  <div className="text-gold-400 font-serif font-bold text-base flex items-center gap-2">
                    <Shield className="w-4 h-4" />
                    Procedural Precision
                  </div>
                  <p className="text-xs text-slate-400">
                    Drafting airtight pleadings, plaints, and petitions under the Code of Civil Procedure to withstand scrutiny from Trial to Appellate benches.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-navy-900 border border-slate-800 space-y-2">
                  <div className="text-gold-400 font-serif font-bold text-base flex items-center gap-2">
                    <Award className="w-4 h-4" />
                    Transparent Legal Counsel
                  </div>
                  <p className="text-xs text-slate-400">
                    Honest, candid assessment of case merits, risks, and procedural timelines so clients make informed decisions at every stage.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-navy-900 border border-slate-800 space-y-2">
                  <div className="text-gold-400 font-serif font-bold text-base flex items-center gap-2">
                    <Scale className="w-4 h-4" />
                    Ethical BCI Compliance
                  </div>
                  <p className="text-xs text-slate-400">
                    Adherence to the highest standards of professional ethics under the Bar Council of India, maintaining strict client-attorney confidentiality.
                  </p>
                </div>
              </div>
            </div>

            {/* CTA inside page */}
            <div className="pt-4 flex flex-col sm:flex-row gap-4">
              <button
                onClick={onOpenAppointment}
                className="px-6 py-3 rounded-xl bg-gold-gradient text-navy-950 font-bold text-xs sm:text-sm tracking-wide shadow-md hover:opacity-95 transition-all text-center"
              >
                Book Appointment with Adv. Halder
              </button>
              <button
                onClick={() => { setActivePage('chambers'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                className="px-6 py-3 rounded-xl bg-navy-800 border border-gold-500/30 text-gold-300 font-semibold text-xs sm:text-sm hover:bg-gold-500 hover:text-navy-950 transition-all text-center"
              >
                View Chamber Locations & Timings
              </button>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
