import React from 'react';
import { Scale, Award, Shield, BookOpen, Landmark, CheckCircle, ArrowRight, Download } from 'lucide-react';
import { lawyerData } from '../data/lawyerData';
import { downloadVCard } from '../utils/vcard';

export default function About({ setActivePage, onOpenAppointment }) {
  return (
    <div className="space-y-16 pb-20 bg-white text-neutral-900 font-sans">
      {/* HEADER BANNER */}
      <section className="relative py-14 bg-neutral-50 border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl space-y-2.5">
            <div className="text-[11px] sm:text-xs font-semibold uppercase tracking-widest text-neutral-500 font-cinzel">
              Professional Profile & Standing
            </div>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-black tracking-tight leading-tight">
              About Advocate Jagadish Chandra Halder
            </h1>
            <p className="text-sm sm:text-base font-serif italic text-neutral-600">
              Advocate, High Court, Calcutta • Bar Association, Room No. 15 (2nd Floor)
            </p>
          </div>
        </div>
      </section>

      {/* DETAILED BIOGRAPHY & JURISPRUDENCE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Portrait & Fast Facts */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-neutral-200 text-center shadow-xs">
              <div className="relative w-32 h-32 mx-auto rounded-full border-2 border-neutral-300 p-0.5 bg-neutral-100 shadow-sm overflow-hidden mb-4">
                <img
                  src="./logo.png"
                  alt="Advocate Jagadish Chandra Halder"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>

              <h2 className="font-cinzel font-bold text-lg sm:text-xl text-black">
                {lawyerData.name}
              </h2>
              <div className="text-xs font-cinzel text-neutral-600 tracking-wider uppercase mt-1 font-semibold">
                Advocate • High Court, Calcutta
              </div>
              <p className="text-xs font-medium text-neutral-500 mt-0.5">
                Bar Association, Room No. 15 (2nd Floor)
              </p>

              <div className="mt-6 pt-6 border-t border-neutral-100 text-xs sm:text-sm text-left space-y-2.5 text-neutral-700">
                <div className="flex justify-between py-1 border-b border-neutral-100">
                  <span className="text-neutral-500 font-normal">Designation:</span>
                  <span className="font-semibold text-black">High Court Advocate</span>
                </div>
                <div className="flex justify-between py-1 border-b border-neutral-100">
                  <span className="text-neutral-500 font-normal">Primary Court:</span>
                  <span className="font-semibold text-black">High Court, Calcutta</span>
                </div>
                <div className="flex justify-between py-1 border-b border-neutral-100">
                  <span className="text-neutral-500 font-normal">Bar Association:</span>
                  <span className="font-semibold text-black">Room No. 15 (2nd Floor)</span>
                </div>
                <div className="flex justify-between py-1 border-b border-neutral-100">
                  <span className="text-neutral-500 font-normal">Specialization:</span>
                  <span className="font-semibold text-black">Civil & Appellate Side</span>
                </div>
                <div className="flex justify-between py-1 border-b border-neutral-100">
                  <span className="text-neutral-500 font-normal">Regional Reach:</span>
                  <span className="font-semibold text-black">Kolkata & S. 24-Parganas</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-neutral-500 font-normal">Direct Phone:</span>
                  <span className="font-bold text-black">{lawyerData.phoneFormatted}</span>
                </div>
              </div>

              <div className="mt-6 flex flex-col gap-2.5">
                <button
                  onClick={onOpenAppointment}
                  className="w-full py-2.5 rounded-lg bg-black text-white font-semibold text-xs sm:text-sm shadow-xs hover:bg-neutral-800 transition-all active:scale-95"
                >
                  Schedule Consultation
                </button>
                <button
                  onClick={() => downloadVCard(lawyerData)}
                  className="w-full py-2 rounded-lg bg-neutral-100 hover:bg-neutral-200 text-black border border-neutral-300 text-xs font-medium transition-all flex items-center justify-center gap-2"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download vCard Contact</span>
                </button>
              </div>
            </div>

            {/* Quote Card */}
            <div className="bg-neutral-50 rounded-2xl p-6 border border-neutral-200 italic font-serif text-neutral-800 text-xs sm:text-sm leading-relaxed shadow-xs">
              "Civil disputes over land and inheritance are not mere files; they represent lifetimes of family labor, heritage, and peace. A true civil advocate combines deep knowledge of revenue records with fearless courtroom advocacy."
              <div className="text-xs font-sans not-italic font-semibold text-black mt-3 text-right">
                — Advocate Jagadish Chandra Halder
              </div>
            </div>
          </div>

          {/* Right Column: In-Depth Profile */}
          <div className="lg:col-span-7 space-y-8 text-neutral-700 text-xs sm:text-sm leading-relaxed font-normal">
            
            {/* Visual Banner */}
            <div className="relative w-full h-64 sm:h-80 rounded-2xl overflow-hidden border border-neutral-300 shadow-md group bg-neutral-100">
              <img
                src="./slider.jpg"
                alt="Advocate Jagadish Chandra Halder - Calcutta High Court"
                className="w-full h-full object-cover object-[center_20%] group-hover:scale-102 transition-transform duration-700"
                onError={(e) => { e.target.style.display = 'none'; }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-5">
                <span className="text-xs text-white font-medium bg-black/60 backdrop-blur-xs px-3 py-1.5 rounded-full border border-white/20">
                  Calcutta High Court • Bar Association Room No. 15 (2nd Floor)
                </span>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl sm:text-2xl font-serif font-bold text-black">
                A Legacy of Dedicated Civil Advocacy
              </h3>
              <p>
                <strong>Advocate Jagadish Chandra Halder</strong> is a seasoned civil counsel practicing before the Hon’ble High Court at Calcutta, the oldest and one of the most prestigious chartered High Courts in India. Operating from the historic <strong className="text-black font-semibold">Bar Association, Room No. 15 (2nd Floor)</strong> at the High Court building in Kolkata, Advocate Halder has built a formidable reputation over more than 25 years in complex property disputes, land title conflicts, and civil appellate litigation.
              </p>
              <p>
                His practice covers the entire spectrum of civil jurisprudence — from initial trial plaints and emergent injunction applications under Order 39 of the CPC to First Appeals (FA), Second Appeals (SA under Section 100 CPC), Civil Revisions under Section 115 CPC, and Constitutional Writ Petitions under Article 226/227 of the Constitution of India.
              </p>
            </div>

            {/* Distinctive Advantage Section */}
            <div className="p-6 sm:p-8 rounded-2xl bg-neutral-50 border border-neutral-200 space-y-4 shadow-xs">
              <div className="flex items-center gap-2 text-black font-cinzel font-semibold text-xs tracking-wider">
                <Landmark className="w-4 h-4 text-black" />
                Strategic Dual-Jurisdiction Advantage
              </div>
              <h4 className="text-lg sm:text-xl font-serif font-bold text-black">
                From Grassroots Revenue Courts to the High Court Bench
              </h4>
              <p className="text-xs sm:text-sm text-neutral-600">
                A key distinction in Advocate Halder’s practice is his direct presence at both the <strong>Calcutta High Court</strong> and the sub-divisional / district levels in <strong>Kakdwip (South 24-Parganas)</strong> and <strong>Alipore District Court</strong>.
              </p>
              <ul className="space-y-3 text-xs sm:text-sm text-neutral-700">
                <li className="flex items-start gap-2.5">
                  <CheckCircle className="w-4 h-4 text-black mt-0.5 shrink-0" />
                  <span><strong>Grassroots Trial Acumen:</strong> Deep understanding of rural and semi-urban Bengal land tenure, including Bargadar rights, vested lands, Porcha correction, BL&LRO hearings, and settlement operations.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle className="w-4 h-4 text-black mt-0.5 shrink-0" />
                  <span><strong>High Court Appellate Depth:</strong> Mastery in identifying substantial questions of law, formulating grounds in Second Appeals (SA), challenging perverse trial findings, and moving the High Court for supervisory relief under Article 227.</span>
                </li>
              </ul>
            </div>

            {/* Core Values */}
            <div className="space-y-4">
              <h3 className="text-xl sm:text-2xl font-serif font-bold text-black">
                Pillars of Practice
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-5 rounded-xl bg-white border border-neutral-200 shadow-xs space-y-2">
                  <div className="text-black font-serif font-semibold text-sm sm:text-base flex items-center gap-2">
                    <BookOpen className="w-4 h-4" />
                    Rigorous Title Scrutiny
                  </div>
                  <p className="text-xs text-neutral-600 font-normal">
                    Never taking claims at face value. Comprehensive investigation of CS, RS, and LR Record of Rights, registration ledgers, and revenue records.
                  </p>
                </div>

                <div className="p-5 rounded-xl bg-white border border-neutral-200 shadow-xs space-y-2">
                  <div className="text-black font-serif font-semibold text-sm sm:text-base flex items-center gap-2">
                    <Shield className="w-4 h-4" />
                    Procedural Precision
                  </div>
                  <p className="text-xs text-neutral-600 font-normal">
                    Drafting airtight pleadings, plaints, and petitions under the Code of Civil Procedure to withstand scrutiny from Trial to Appellate benches.
                  </p>
                </div>

                <div className="p-5 rounded-xl bg-white border border-neutral-200 shadow-xs space-y-2">
                  <div className="text-black font-serif font-semibold text-sm sm:text-base flex items-center gap-2">
                    <Award className="w-4 h-4" />
                    Transparent Legal Counsel
                  </div>
                  <p className="text-xs text-neutral-600 font-normal">
                    Honest, candid assessment of case merits, risks, and procedural timelines so clients make informed decisions at every stage.
                  </p>
                </div>

                <div className="p-5 rounded-xl bg-white border border-neutral-200 shadow-xs space-y-2">
                  <div className="text-black font-serif font-semibold text-sm sm:text-base flex items-center gap-2">
                    <Scale className="w-4 h-4" />
                    Ethical BCI Compliance
                  </div>
                  <p className="text-xs text-neutral-600 font-normal">
                    Adherence to the highest standards of professional ethics under the Bar Council of India, maintaining strict client-attorney confidentiality.
                  </p>
                </div>
              </div>
            </div>

            {/* CTA inside page */}
            <div className="pt-2 flex flex-col sm:flex-row gap-3">
              <button
                onClick={onOpenAppointment}
                className="px-6 py-2.5 rounded-lg bg-black text-white font-semibold text-xs sm:text-sm tracking-wide shadow-xs hover:bg-neutral-800 transition-all text-center"
              >
                Book Appointment with Adv. Halder
              </button>
              <button
                onClick={() => { setActivePage('chambers'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                className="px-6 py-2.5 rounded-lg bg-neutral-100 border border-neutral-300 text-black font-medium text-xs sm:text-sm hover:bg-black hover:text-white transition-all text-center"
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
