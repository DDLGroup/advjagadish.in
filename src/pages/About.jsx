import React from 'react';
import { Scale, Award, Shield, BookOpen, Landmark, CheckCircle, ArrowRight, Download } from 'lucide-react';
import { lawyerData } from '../data/lawyerData';
import { downloadVCard } from '../utils/vcard';

export default function About({ setActivePage, onOpenAppointment }) {
  return (
    <div className="space-y-20 pb-20 bg-white text-neutral-900 font-sans">
      {/* HEADER BANNER - Light Theme */}
      <section className="relative py-20 bg-neutral-50 border-b border-neutral-200 court-pattern">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-4xl space-y-4">
            <div className="text-xs sm:text-sm font-extrabold uppercase tracking-widest text-neutral-600 font-cinzel">
              Professional Profile & Standing
            </div>
            <h1 className="text-4xl sm:text-6xl font-serif font-black text-black tracking-tight leading-[1.1]">
              About Advocate Jagadish Chandra Halder
            </h1>
            <p className="text-xl sm:text-2xl font-serif text-neutral-800 font-bold italic">
              Advocate, High Court, Calcutta • Bar Association, Room No. 15 (2nd Floor)
            </p>
          </div>
        </div>
      </section>

      {/* DETAILED BIOGRAPHY & JURISPRUDENCE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Portrait & Fast Facts */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-white rounded-3xl p-6 sm:p-10 border-2 border-neutral-200 text-center shadow-md">
              <div className="relative w-40 h-40 mx-auto rounded-full border-4 border-black p-1 bg-neutral-100 shadow-lg overflow-hidden mb-6">
                <img
                  src="./logo.png"
                  alt="Advocate Jagadish Chandra Halder"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>

              <h2 className="font-serif font-black text-2xl sm:text-3xl text-black">
                {lawyerData.name}
              </h2>
              <div className="text-xs sm:text-sm font-cinzel text-neutral-700 tracking-wider uppercase mt-1.5 font-bold">
                Advocate • High Court, Calcutta
              </div>
              <p className="text-sm font-semibold text-neutral-600 mt-1">
                Bar Association, Room No. 15 (2nd Floor)
              </p>

              <div className="mt-8 pt-8 border-t border-neutral-200 text-sm sm:text-base text-left space-y-3.5 text-neutral-800">
                <div className="flex justify-between py-1.5 border-b border-neutral-100">
                  <span className="text-neutral-500 font-medium">Designation:</span>
                  <span className="font-extrabold text-black">High Court Advocate</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-neutral-100">
                  <span className="text-neutral-500 font-medium">Primary Court:</span>
                  <span className="font-extrabold text-black">High Court, Calcutta</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-neutral-100">
                  <span className="text-neutral-500 font-medium">Bar Association:</span>
                  <span className="font-extrabold text-black">Room No. 15 (2nd Floor)</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-neutral-100">
                  <span className="text-neutral-500 font-medium">Specialization:</span>
                  <span className="font-bold text-neutral-900">Civil & Appellate Side</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-neutral-100">
                  <span className="text-neutral-500 font-medium">Regional Reach:</span>
                  <span className="font-bold text-neutral-900">Kolkata & S. 24-Parganas</span>
                </div>
                <div className="flex justify-between py-1.5">
                  <span className="text-neutral-500 font-medium">Direct Phone:</span>
                  <span className="font-black text-black">{lawyerData.phoneFormatted}</span>
                </div>
              </div>

              <div className="mt-8 flex flex-col gap-3">
                <button
                  onClick={onOpenAppointment}
                  className="w-full py-4 rounded-xl bg-black text-white font-extrabold text-sm sm:text-base shadow-lg hover:bg-neutral-800 transition-all active:scale-95"
                >
                  Schedule Consultation
                </button>
                <button
                  onClick={() => downloadVCard(lawyerData)}
                  className="w-full py-3.5 rounded-xl bg-neutral-100 hover:bg-neutral-200 text-black border-2 border-neutral-300 text-sm font-bold transition-all flex items-center justify-center gap-2"
                >
                  <Download className="w-4 h-4" />
                  <span>Download vCard Contact</span>
                </button>
              </div>
            </div>

            {/* Quote Card */}
            <div className="bg-neutral-50 rounded-3xl p-8 border-2 border-neutral-200 italic font-serif text-neutral-900 text-base sm:text-lg leading-relaxed shadow-sm">
              "Civil disputes over land and inheritance are not mere files; they represent lifetimes of family labor, heritage, and peace. A true civil advocate combines deep knowledge of revenue records with fearless courtroom advocacy."
              <div className="text-xs sm:text-sm font-sans not-italic font-extrabold text-black mt-4 text-right">
                — Advocate Jagadish Chandra Halder
              </div>
            </div>
          </div>

          {/* Right Column: In-Depth Profile */}
          <div className="lg:col-span-7 space-y-10 text-neutral-800 text-base sm:text-lg leading-relaxed font-normal">
            
            {/* Visual Banner */}
            <div className="relative w-full h-72 sm:h-96 rounded-3xl overflow-hidden border-2 border-neutral-300 shadow-xl group bg-neutral-100">
              <img
                src="./slider.jpg"
                alt="Advocate Jagadish Chandra Halder - Calcutta High Court"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                onError={(e) => { e.target.style.display = 'none'; }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent flex items-end p-6">
                <span className="text-sm sm:text-base text-white font-bold bg-black/80 backdrop-blur-sm px-4 py-2 rounded-full border border-white/30">
                  Calcutta High Court • Bar Association Room No. 15 (2nd Floor)
                </span>
              </div>
            </div>

            <div className="space-y-5">
              <h3 className="text-3xl sm:text-4xl font-serif font-black text-black">
                A Legacy of Dedicated Civil Advocacy
              </h3>
              <p>
                <strong>Advocate Jagadish Chandra Halder</strong> is a seasoned civil counsel practicing before the Hon’ble High Court at Calcutta, the oldest and one of the most prestigious chartered High Courts in India. Operating from the historic <strong className="text-black font-extrabold underline decoration-neutral-300">Bar Association, Room No. 15 (2nd Floor)</strong> at the High Court building in Kolkata, Advocate Halder has built a formidable reputation over more than 25 years in complex property disputes, land title conflicts, and civil appellate litigation.
              </p>
              <p>
                His practice covers the entire spectrum of civil jurisprudence — from initial trial plaints and emergent injunction applications under Order 39 of the CPC to First Appeals (FA), Second Appeals (SA under Section 100 CPC), Civil Revisions under Section 115 CPC, and Constitutional Writ Petitions under Article 226/227 of the Constitution of India.
              </p>
            </div>

            {/* Distinctive Advantage Section */}
            <div className="p-8 sm:p-10 rounded-3xl bg-neutral-50 border-2 border-neutral-200 space-y-5 shadow-sm">
              <div className="flex items-center gap-2.5 text-black font-cinzel font-extrabold text-xs sm:text-sm tracking-wider">
                <Landmark className="w-5 h-5 text-black" />
                Strategic Dual-Jurisdiction Advantage
              </div>
              <h4 className="text-2xl sm:text-3xl font-serif font-black text-black">
                From Grassroots Revenue Courts to the High Court Bench
              </h4>
              <p className="text-base sm:text-lg text-neutral-700">
                A key distinction in Advocate Halder’s practice is his direct presence at both the <strong>Calcutta High Court</strong> and the sub-divisional / district levels in <strong>Kakdwip (South 24-Parganas)</strong> and <strong>Alipore District Court</strong>.
              </p>
              <ul className="space-y-4 text-base sm:text-lg text-neutral-800">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-black mt-1 shrink-0" />
                  <span><strong>Grassroots Trial Acumen:</strong> Deep understanding of rural and semi-urban Bengal land tenure, including Bargadar rights, vested lands, Porcha correction, BL&LRO hearings, and settlement operations.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-black mt-1 shrink-0" />
                  <span><strong>High Court Appellate Depth:</strong> Mastery in identifying substantial questions of law, formulating grounds in Second Appeals (SA), challenging perverse trial findings, and moving the High Court for supervisory relief under Article 227.</span>
                </li>
              </ul>
            </div>

            {/* Core Values */}
            <div className="space-y-6">
              <h3 className="text-3xl sm:text-4xl font-serif font-black text-black">
                Pillars of Practice
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="p-6 rounded-2xl bg-white border-2 border-neutral-200 shadow-sm space-y-2.5">
                  <div className="text-black font-serif font-bold text-lg sm:text-xl flex items-center gap-2.5">
                    <BookOpen className="w-5 h-5" />
                    Rigorous Title Scrutiny
                  </div>
                  <p className="text-sm sm:text-base text-neutral-700 font-normal">
                    Never taking claims at face value. Comprehensive investigation of CS, RS, and LR Record of Rights, registration ledgers, and revenue records.
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-white border-2 border-neutral-200 shadow-sm space-y-2.5">
                  <div className="text-black font-serif font-bold text-lg sm:text-xl flex items-center gap-2.5">
                    <Shield className="w-5 h-5" />
                    Procedural Precision
                  </div>
                  <p className="text-sm sm:text-base text-neutral-700 font-normal">
                    Drafting airtight pleadings, plaints, and petitions under the Code of Civil Procedure to withstand scrutiny from Trial to Appellate benches.
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-white border-2 border-neutral-200 shadow-sm space-y-2.5">
                  <div className="text-black font-serif font-bold text-lg sm:text-xl flex items-center gap-2.5">
                    <Award className="w-5 h-5" />
                    Transparent Legal Counsel
                  </div>
                  <p className="text-sm sm:text-base text-neutral-700 font-normal">
                    Honest, candid assessment of case merits, risks, and procedural timelines so clients make informed decisions at every stage.
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-white border-2 border-neutral-200 shadow-sm space-y-2.5">
                  <div className="text-black font-serif font-bold text-lg sm:text-xl flex items-center gap-2.5">
                    <Scale className="w-5 h-5" />
                    Ethical BCI Compliance
                  </div>
                  <p className="text-sm sm:text-base text-neutral-700 font-normal">
                    Adherence to the highest standards of professional ethics under the Bar Council of India, maintaining strict client-attorney confidentiality.
                  </p>
                </div>
              </div>
            </div>

            {/* CTA inside page */}
            <div className="pt-4 flex flex-col sm:flex-row gap-4">
              <button
                onClick={onOpenAppointment}
                className="px-8 py-4 rounded-xl bg-black text-white font-extrabold text-base tracking-wide shadow-lg hover:bg-neutral-800 transition-all text-center"
              >
                Book Appointment with Adv. Halder
              </button>
              <button
                onClick={() => { setActivePage('chambers'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                className="px-8 py-4 rounded-xl bg-neutral-100 border-2 border-neutral-300 text-black font-bold text-base hover:bg-black hover:text-white transition-all text-center"
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
