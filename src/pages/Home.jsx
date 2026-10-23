import React, { useState } from 'react';
import { 
  Scale, Shield, Award, MapPin, Phone, ArrowRight, FileText, 
  CheckCircle, ChevronDown, ChevronUp, Landmark, BookOpen, Clock 
} from 'lucide-react';
import { lawyerData } from '../data/lawyerData';

export default function Home({ setActivePage, onOpenAppointment }) {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (idx) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  const handleNav = (pageId) => {
    setActivePage(pageId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    window.location.hash = pageId;
  };

  return (
    <div className="space-y-20 pb-16 bg-white text-neutral-900">
      {/* HERO SECTION - Crisp Black & White Light Theme */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden pt-8 pb-16 bg-gradient-to-b from-neutral-50 via-white to-white border-b border-neutral-200">
        <div className="absolute inset-0 court-pattern opacity-60 pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: Hero Content */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-neutral-300 text-neutral-800 text-xs font-semibold tracking-wider uppercase font-cinzel shadow-sm">
                <Landmark className="w-3.5 h-3.5 text-black" />
                <span>High Court at Calcutta • Bar Association Room 15</span>
              </div>

              {/* Main Heading */}
              <div className="space-y-2">
                <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-bold text-black tracking-tight leading-[1.15]">
                  JAGADISH CHANDRA <br />
                  <span className="text-neutral-800">HALDER</span>
                </h1>
                <p className="text-lg sm:text-xl font-serif text-neutral-600 italic">
                  Advocate, High Court, Calcutta
                </p>
              </div>

              {/* Tagline / Subtitle */}
              <p className="text-sm sm:text-base text-neutral-700 max-w-2xl leading-relaxed font-sans">
                Over <strong className="text-black font-semibold">25 years of distinguished civil advocacy</strong> representing clients across the Hon’ble High Court at Calcutta, Sub-Divisional Court at Kakdwip, and District Courts of South 24-Parganas. Meticulous counsel in Property Disputes, Title Suits, Partition, Civil Appeals, and Constitutional Writs.
              </p>

              {/* Chamber Quick Badges */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 pt-1 text-xs">
                <span className="px-3 py-1.5 rounded-lg bg-white border border-neutral-200 text-neutral-800 font-medium shadow-sm">
                  🏛️ Calcutta High Court (Room 15)
                </span>
                <span className="px-3 py-1.5 rounded-lg bg-white border border-neutral-200 text-neutral-800 font-medium shadow-sm">
                  📍 Garia, Kolkata
                </span>
                <span className="px-3 py-1.5 rounded-lg bg-white border border-neutral-200 text-neutral-800 font-medium shadow-sm">
                  📍 Kakdwip New Market
                </span>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 pt-4">
                <button
                  onClick={onOpenAppointment}
                  className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-black text-white font-bold text-sm tracking-wide shadow-lg hover:bg-neutral-800 transition-all transform active:scale-95 flex items-center justify-center gap-2"
                >
                  <span>Book Legal Consultation</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <a
                  href={`tel:+91${lawyerData.phone}`}
                  className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-white border-2 border-black text-black font-bold text-sm hover:bg-black hover:text-white transition-all flex items-center justify-center gap-2 shadow-sm"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call: {lawyerData.phoneFormatted}</span>
                </a>
              </div>

              {/* Direct Info Row */}
              <div className="pt-2 text-xs text-neutral-600 flex flex-wrap items-center justify-center lg:justify-start gap-4">
                <span className="flex items-center gap-1.5">
                  <CheckCircle className="w-3.5 h-3.5 text-black" />
                  Direct Counsel Consultation
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle className="w-3.5 h-3.5 text-black" />
                  Complete Confidentiality
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle className="w-3.5 h-3.5 text-black" />
                  BCI Compliant
                </span>
              </div>
            </div>

            {/* Right Column: Crest, Credentials & Chamber Snapshot Card */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-md bg-white rounded-2xl p-5 sm:p-6 shadow-xl border border-neutral-200">
                
                {/* Hero Showcase Banner */}
                <div className="relative w-full h-48 sm:h-52 rounded-xl overflow-hidden border border-neutral-300 shadow-md mb-4 group bg-neutral-100">
                  <img
                    src="./slider.jpg"
                    alt="Advocate Jagadish Chandra Halder - High Court Calcutta"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    onError={(e) => { e.target.src = './logo.png'; }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent flex items-end p-3.5">
                    <div className="flex items-center gap-2.5">
                      <div className="w-9 h-9 rounded-full border-2 border-white p-0.5 bg-black overflow-hidden shrink-0 shadow">
                        <img src="./logo.png" alt="Crest" className="w-full h-full object-cover rounded-full" />
                      </div>
                      <div>
                        <div className="text-white text-xs sm:text-sm font-bold font-serif leading-tight">{lawyerData.name}</div>
                        <div className="text-[10px] text-neutral-300 font-cinzel font-medium">Bar Association Rm 15 • High Court Calcutta</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="text-center pb-4 border-b border-neutral-200">
                  <h3 className="font-serif font-bold text-lg text-black">
                    {lawyerData.name}
                  </h3>
                  <p className="text-xs font-cinzel text-neutral-600 tracking-wider uppercase mt-0.5">
                    Advocate • High Court, Calcutta
                  </p>
                </div>

                {/* Core Credentials List */}
                <div className="py-4 space-y-2.5 text-xs">
                  <div className="flex items-start justify-between py-1.5 border-b border-neutral-100">
                    <span className="text-neutral-500">Jurisdiction:</span>
                    <span className="text-right font-medium text-black">
                      High Court, Calcutta & Civil Courts
                    </span>
                  </div>
                  <div className="flex items-start justify-between py-1.5 border-b border-neutral-100">
                    <span className="text-neutral-500">Practice Core:</span>
                    <span className="text-right font-semibold text-black">
                      Civil, Property, Title, Writs & Appeals
                    </span>
                  </div>
                  <div className="flex items-start justify-between py-1.5 border-b border-neutral-100">
                    <span className="text-neutral-500">Court Chambers:</span>
                    <span className="text-right font-medium text-black">
                      High Court (Rm 15), Garia, Kakdwip
                    </span>
                  </div>
                  <div className="flex items-start justify-between py-1.5">
                    <span className="text-neutral-500">Direct Contact:</span>
                    <span className="text-right font-bold text-black">
                      {lawyerData.phoneFormatted}
                    </span>
                  </div>
                </div>

                {/* Action button inside card */}
                <div className="pt-2">
                  <button
                    onClick={() => handleNav('chambers')}
                    className="w-full py-2.5 rounded-xl bg-neutral-100 hover:bg-neutral-200 border border-neutral-300 text-black font-semibold text-xs transition-colors flex items-center justify-center gap-2"
                  >
                    <span>View Chamber Schedules & Maps</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* STATS COUNTER STRIP */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {lawyerData.stats.map((st, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-5 sm:p-6 text-center border border-neutral-200 hover:border-black transition-colors shadow-sm"
            >
              <div className="text-2xl sm:text-4xl font-serif font-bold text-black">
                {st.value}
              </div>
              <div className="text-xs sm:text-sm font-semibold text-neutral-900 mt-1">
                {st.label}
              </div>
              <div className="text-[11px] text-neutral-500 mt-0.5">
                {st.sublabel}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PRACTICE AREAS SPOTLIGHT */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="text-xs font-semibold uppercase tracking-widest text-neutral-600 font-cinzel">
            Key Civil Law Competencies
          </div>
          <h2 className="text-2xl sm:text-4xl font-serif font-bold text-black">
            Specialized Practice Areas
          </h2>
          <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
            Delivering strategic civil dispute resolution, trial court mastery, and appellate representation before the High Court at Calcutta.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {lawyerData.practiceAreas.slice(0, 6).map((pa) => (
            <div
              key={pa.id}
              className="bg-white rounded-2xl p-6 border border-neutral-200 hover:border-black flex flex-col justify-between group shadow-sm hover:shadow-md transition-all"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-neutral-100 border border-neutral-300 flex items-center justify-center text-black mb-4 group-hover:bg-black group-hover:text-white transition-colors">
                  <Scale className="w-5 h-5" />
                </div>
                <h3 className="font-serif font-bold text-lg sm:text-xl text-black group-hover:text-neutral-800 transition-colors">
                  {pa.title}
                </h3>
                <div className="text-xs text-neutral-600 font-medium mt-0.5 mb-3">
                  {pa.subtitle}
                </div>
                <p className="text-xs text-neutral-600 leading-relaxed mb-4">
                  {pa.description}
                </p>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {pa.statutes.map((st, idx) => (
                    <span
                      key={idx}
                      className="text-[10px] px-2 py-0.5 rounded bg-neutral-100 border border-neutral-200 text-neutral-700 font-medium"
                    >
                      {st}
                    </span>
                  ))}
                </div>
              </div>

              <button
                onClick={() => handleNav('practice-areas')}
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-black hover:text-neutral-700 transition-colors pt-3 border-t border-neutral-100"
              >
                <span>Read statutory relief & details</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <button
            onClick={() => handleNav('practice-areas')}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-neutral-100 border border-neutral-300 text-black hover:bg-black hover:text-white text-xs sm:text-sm font-semibold transition-all shadow-sm"
          >
            <span>Explore All Civil Practice Areas</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>

      {/* THE THREE CHAMBERS PRESENTATION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="bg-neutral-50 rounded-3xl p-6 sm:p-10 border border-neutral-200 shadow-sm">
          <div className="text-center max-w-3xl mx-auto mb-10 space-y-2">
            <div className="text-xs font-semibold uppercase tracking-widest text-neutral-600 font-cinzel">
              Strategic Jurisdictional Access
            </div>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-black">
              The Three Chambers of Adv. Jagadish Chandra Halder
            </h2>
            <p className="text-xs sm:text-sm text-neutral-600">
              Convenient legal consultation across Kolkata and South 24-Parganas.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {lawyerData.chambers.map((chamber) => (
              <div
                key={chamber.id}
                className="bg-white rounded-2xl p-6 border border-neutral-200 flex flex-col justify-between hover:border-black transition-all shadow-sm"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-neutral-100 text-black border border-neutral-300 font-cinzel">
                      {chamber.badge}
                    </span>
                    <span className="text-xs text-neutral-500 font-medium">
                      {chamber.type}
                    </span>
                  </div>

                  <h3 className="font-serif font-bold text-lg text-black">
                    {chamber.name}
                  </h3>

                  <div className="text-xs text-neutral-600 space-y-2">
                    <p className="flex items-start gap-2">
                      <MapPin className="w-4 h-4 text-black mt-0.5 shrink-0" />
                      <span>{chamber.address}, {chamber.city}</span>
                    </p>
                    <p className="flex items-start gap-2">
                      <Clock className="w-4 h-4 text-black mt-0.5 shrink-0" />
                      <span>{chamber.timings}</span>
                    </p>
                  </div>
                </div>

                <div className="pt-5 mt-5 border-t border-neutral-100 flex items-center justify-between">
                  <a
                    href={`tel:+91${chamber.phone}`}
                    className="text-xs font-semibold text-black hover:underline flex items-center gap-1"
                  >
                    <Phone className="w-3.5 h-3.5 text-black" />
                    <span>{chamber.phone}</span>
                  </a>
                  <button
                    onClick={() => handleNav('chambers')}
                    className="text-xs text-neutral-600 hover:text-black font-medium underline"
                  >
                    Get Directions
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CIVIL LITIGATION ROADMAP */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="text-xs font-semibold uppercase tracking-widest text-neutral-600 font-cinzel">
            Procedural Transparency
          </div>
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-black">
            The Civil Litigation Roadmap
          </h2>
          <p className="text-xs sm:text-sm text-neutral-600">
            How civil suits progress from trial courts to the High Court at Calcutta.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {lawyerData.processSteps.map((step, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-5 border border-neutral-200 shadow-sm relative flex flex-col justify-between"
            >
              <div className="text-3xl font-serif font-bold text-neutral-300 mb-2">
                {step.step}
              </div>
              <div>
                <h4 className="font-serif font-bold text-base text-black mb-2">
                  {step.title}
                </h4>
                <p className="text-xs text-neutral-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CLIENT DOCUMENT CHECKLIST - Sleek Contrast Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="bg-neutral-900 text-white rounded-3xl p-6 sm:p-10 border border-neutral-800 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5 space-y-4">
              <div className="text-xs font-semibold uppercase tracking-widest text-neutral-400 font-cinzel">
                Pre-Consultation Checklist
              </div>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white">
                Documents to Bring for Property & Civil Consultations
              </h2>
              <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                For a swift, accurate assessment of your legal position, having the complete chain of documentation is essential.
              </p>
              <div className="pt-2">
                <button
                  onClick={onOpenAppointment}
                  className="px-6 py-3 rounded-xl bg-white text-black font-bold text-xs sm:text-sm shadow-md hover:bg-neutral-100 transition-all"
                >
                  Schedule Case Review
                </button>
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-3.5 text-xs text-neutral-200">
              <div className="p-3.5 rounded-xl bg-neutral-800/80 border border-neutral-700/80 flex items-start gap-2.5">
                <FileText className="w-4 h-4 text-white shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block font-sans">Chain of Title Deeds (Dalil)</strong>
                  Registered deeds showing prior and current title ownership.
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-neutral-800/80 border border-neutral-700/80 flex items-start gap-2.5">
                <FileText className="w-4 h-4 text-white shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block font-sans">Record of Rights (Porcha/Khatiyan)</strong>
                  CS, RS, and latest LR Porchas indicating Dag number and Khatian.
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-neutral-800/80 border border-neutral-700/80 flex items-start gap-2.5">
                <FileText className="w-4 h-4 text-white shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block font-sans">Land Revenue (Khazna) Receipts</strong>
                  Up-to-date tax & rent receipts from BL&LRO office.
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-neutral-800/80 border border-neutral-700/80 flex items-start gap-2.5">
                <FileText className="w-4 h-4 text-white shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block font-sans">Prior Court Orders or Plaint Copies</strong>
                  Certified copies of judgments, plaints, or injunction orders (if any).
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-neutral-800/80 border border-neutral-700/80 flex items-start gap-2.5">
                <FileText className="w-4 h-4 text-white shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block font-sans">Site Plan / Demarcation Map</strong>
                  Sanctioned plan or hand sketch displaying boundaries and roads.
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-neutral-800/80 border border-neutral-700/80 flex items-start gap-2.5">
                <FileText className="w-4 h-4 text-white shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block font-sans">Legal Notices & Police Complaints</strong>
                  Copies of notice under Sec 106 T.P. Act or general diary (GD) logs.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FREQUENTLY ASKED QUESTIONS */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10 space-y-2">
          <div className="text-xs font-semibold uppercase tracking-widest text-neutral-600 font-cinzel">
            Clarifications & Advisory
          </div>
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-black">
            Frequently Asked Legal Questions
          </h2>
          <p className="text-xs sm:text-sm text-neutral-600">
            Common questions regarding civil litigation, High Court appeals, and consultation procedures.
          </p>
        </div>

        <div className="space-y-3">
          {lawyerData.faqs.map((faq, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl border border-neutral-200 overflow-hidden shadow-sm"
            >
              <button
                onClick={() => toggleFaq(idx)}
                className="w-full text-left p-4 sm:p-5 flex items-center justify-between gap-4 hover:bg-neutral-50 transition-colors"
              >
                <span className="font-serif font-bold text-sm sm:text-base text-black">
                  {faq.q}
                </span>
                <span className="p-1 rounded-full bg-neutral-100 text-black shrink-0">
                  {openFaq === idx ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                </span>
              </button>
              {openFaq === idx && (
                <div className="px-4 pb-4 sm:px-5 sm:pb-5 text-xs sm:text-sm text-neutral-600 border-t border-neutral-100 pt-3 leading-relaxed">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* FINAL CONSULTATION CTA BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="bg-neutral-900 rounded-3xl p-8 sm:p-12 text-center border border-neutral-800 shadow-xl space-y-6 text-white">
          <div className="w-16 h-16 mx-auto rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white">
            <Scale className="w-8 h-8" />
          </div>

          <div className="max-w-2xl mx-auto space-y-3">
            <h2 className="text-2xl sm:text-4xl font-serif font-bold text-white">
              Consult with Advocate Jagadish Chandra Halder
            </h2>
            <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
              Whether you are defending ancestral land, filing a partition plaint, appealing a trial court decree, or seeking urgent ad-interim injunctions in the High Court at Calcutta — receive authoritative, time-tested legal counsel.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <button
              onClick={onOpenAppointment}
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-white text-black font-bold text-sm tracking-wide shadow-lg hover:bg-neutral-100 transition-all"
            >
              Request Consultation Appointment
            </button>
            <a
              href={`tel:+91${lawyerData.phone}`}
              className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-neutral-800 border border-neutral-700 text-white font-semibold text-sm hover:bg-neutral-700 transition-all flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4" />
              <span>Call Helpline: {lawyerData.phoneFormatted}</span>
            </a>
          </div>

          <div className="text-[11px] text-neutral-400 font-cinzel uppercase tracking-wider">
            High Court at Calcutta • Bar Association Room 15 (2nd Floor)
          </div>
        </div>
      </section>
    </div>
  );
}
