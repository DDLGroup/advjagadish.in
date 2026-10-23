import React, { useState } from 'react';
import { 
  Scale, Shield, Award, MapPin, Phone, Mail, ArrowRight, FileText, 
  CheckCircle, ChevronDown, ChevronUp, Landmark, BookOpen, Clock, Users 
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
    <div className="space-y-20 pb-16">
      {/* HERO SECTION */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden pt-8 pb-16">
        {/* Background Ambient Glows & Subtle Pattern */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0e172b] via-[#080e1b] to-[#080e1b]" />
        <div className="absolute inset-0 court-pattern opacity-40 pointer-events-none" />
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-gold-500/10 rounded-full blur-3xl pointer-events-none pulse-glow" />
        <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: Hero Content */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gold-500/10 border border-gold-500/30 text-gold-300 text-xs font-semibold tracking-wider uppercase font-cinzel">
                <Landmark className="w-3.5 h-3.5 text-gold-400" />
                <span>High Court at Calcutta • Bar Association Room 15</span>
              </div>

              {/* Main Heading */}
              <div className="space-y-2">
                <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-bold text-white tracking-tight leading-[1.15]">
                  JAGADISH CHANDRA <br />
                  <span className="text-gold-gradient">HALDER</span>
                </h1>
                <p className="text-lg sm:text-xl font-serif text-slate-300 italic">
                  Advocate, High Court, Calcutta
                </p>
              </div>

              {/* Tagline / Subtitle */}
              <p className="text-sm sm:text-base text-slate-300 max-w-2xl leading-relaxed font-sans">
                Over <strong className="text-gold-300">25 years of distinguished civil advocacy</strong> representing clients across the Hon’ble High Court at Calcutta, Sub-Divisional Court at Kakdwip, and District Courts of South 24-Parganas. Meticulous counsel in Property Disputes, Title Suits, Partition, Civil Appeals, and Constitutional Writs.
              </p>

              {/* Chamber Quick Badges */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 pt-1 text-xs">
                <span className="px-3 py-1 rounded-lg bg-navy-800/80 border border-gold-500/20 text-slate-300">
                  🏛️ Calcutta High Court (Room 15)
                </span>
                <span className="px-3 py-1 rounded-lg bg-navy-800/80 border border-gold-500/20 text-slate-300">
                  📍 Garia, Kolkata
                </span>
                <span className="px-3 py-1 rounded-lg bg-navy-800/80 border border-gold-500/20 text-slate-300">
                  📍 Kakdwip New Market
                </span>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 pt-4">
                <button
                  onClick={onOpenAppointment}
                  className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-gold-gradient text-navy-950 font-bold text-sm tracking-wide shadow-xl hover:shadow-gold-500/25 hover:opacity-95 transition-all transform active:scale-95 flex items-center justify-center gap-2"
                >
                  <span>Book Legal Consultation</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <a
                  href={`tel:+91${lawyerData.phone}`}
                  className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-navy-800/90 border border-gold-500/40 text-gold-300 font-semibold text-sm hover:bg-gold-500 hover:text-navy-950 transition-all flex items-center justify-center gap-2"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call: {lawyerData.phoneFormatted}</span>
                </a>
              </div>

              {/* Direct Info Row */}
              <div className="pt-2 text-xs text-slate-400 flex flex-wrap items-center justify-center lg:justify-start gap-4">
                <span className="flex items-center gap-1.5">
                  <CheckCircle className="w-3.5 h-3.5 text-gold-400" />
                  Direct Counsel Consultation
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle className="w-3.5 h-3.5 text-gold-400" />
                  Complete Confidentiality
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle className="w-3.5 h-3.5 text-gold-400" />
                  BCI Compliant
                </span>
              </div>
            </div>

            {/* Right Column: Crest, Credentials & Chamber Snapshot Card */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-md bg-dark-card rounded-2xl p-6 sm:p-8 shadow-2xl border border-gold-500/30">
                {/* Gold Crest in Box */}
                <div className="text-center pb-6 border-b border-gold-500/20">
                  <div className="relative w-28 h-28 sm:w-32 sm:h-32 mx-auto rounded-full border-4 border-gold-500/60 p-1 bg-navy-900 shadow-2xl overflow-hidden mb-4">
                    <img
                      src="./logo.png"
                      alt="Advocate Jagadish Chandra Halder Official Seal"
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                  <h3 className="font-serif font-bold text-xl text-white">
                    {lawyerData.name}
                  </h3>
                  <p className="text-xs font-cinzel text-gold-400 tracking-wider uppercase mt-0.5">
                    Advocate • High Court, Calcutta
                  </p>
                  <p className="text-xs text-slate-400 mt-1">
                    Bar Association, Room No. 15 (2nd Floor)
                  </p>
                </div>

                {/* Core Credentials List */}
                <div className="py-5 space-y-3 text-xs">
                  <div className="flex items-start justify-between py-1.5 border-b border-slate-800">
                    <span className="text-slate-400">Jurisdiction:</span>
                    <span className="text-right font-medium text-slate-200">
                      High Court, Calcutta & West Bengal Civil Courts
                    </span>
                  </div>
                  <div className="flex items-start justify-between py-1.5 border-b border-slate-800">
                    <span className="text-slate-400">Practice Core:</span>
                    <span className="text-right font-medium text-gold-300">
                      Civil, Property, Title, Writs & Appeals
                    </span>
                  </div>
                  <div className="flex items-start justify-between py-1.5 border-b border-slate-800">
                    <span className="text-slate-400">Court Chambers:</span>
                    <span className="text-right font-medium text-slate-200">
                      High Court (Rm 15), Garia, Kakdwip
                    </span>
                  </div>
                  <div className="flex items-start justify-between py-1.5">
                    <span className="text-slate-400">Direct Contact:</span>
                    <span className="text-right font-bold text-white">
                      {lawyerData.phoneFormatted}
                    </span>
                  </div>
                </div>

                {/* Action button inside card */}
                <div className="pt-2">
                  <button
                    onClick={() => handleNav('chambers')}
                    className="w-full py-2.5 rounded-xl bg-navy-800 hover:bg-navy-700 border border-gold-500/30 text-gold-300 font-semibold text-xs transition-colors flex items-center justify-center gap-2"
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
              className="bg-dark-card rounded-2xl p-5 sm:p-6 text-center border border-gold-500/20 hover:border-gold-500/40 transition-colors shadow-lg"
            >
              <div className="text-2xl sm:text-4xl font-serif font-bold text-gold-gradient">
                {st.value}
              </div>
              <div className="text-xs sm:text-sm font-semibold text-white mt-1">
                {st.label}
              </div>
              <div className="text-[11px] text-slate-400 mt-0.5">
                {st.sublabel}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PRACTICE AREAS SPOTLIGHT */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="text-xs font-semibold uppercase tracking-widest text-gold-400 font-cinzel">
            Key Civil Law Competencies
          </div>
          <h2 className="text-2xl sm:text-4xl font-serif font-bold text-white">
            Specialized Practice Areas
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            Delivering strategic civil dispute resolution, trial court mastery, and appellate representation before the High Court at Calcutta.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {lawyerData.practiceAreas.slice(0, 6).map((pa) => (
            <div
              key={pa.id}
              className="bg-dark-card bg-dark-card-hover rounded-2xl p-6 border border-gold-500/20 flex flex-col justify-between group"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-gold-500/10 border border-gold-500/30 flex items-center justify-center text-gold-400 mb-4 group-hover:bg-gold-500 group-hover:text-navy-950 transition-colors">
                  <Scale className="w-5 h-5" />
                </div>
                <h3 className="font-serif font-bold text-lg sm:text-xl text-white group-hover:text-gold-300 transition-colors">
                  {pa.title}
                </h3>
                <div className="text-xs text-gold-400/90 font-medium mt-0.5 mb-3">
                  {pa.subtitle}
                </div>
                <p className="text-xs text-slate-300 leading-relaxed mb-4">
                  {pa.description}
                </p>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {pa.statutes.map((st, idx) => (
                    <span
                      key={idx}
                      className="text-[10px] px-2 py-0.5 rounded bg-navy-900 border border-slate-700/80 text-slate-400"
                    >
                      {st}
                    </span>
                  ))}
                </div>
              </div>

              <button
                onClick={() => handleNav('practice-areas')}
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-gold-400 hover:text-gold-300 transition-colors pt-2 border-t border-slate-800"
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
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-navy-800 border border-gold-500/40 text-gold-300 hover:bg-gold-500 hover:text-navy-950 text-xs sm:text-sm font-semibold transition-all"
          >
            <span>Explore All Civil Practice Areas</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>

      {/* THE THREE CHAMBERS PRESENTATION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="bg-[#0b1327] rounded-3xl p-6 sm:p-10 border border-gold-500/30 shadow-2xl">
          <div className="text-center max-w-3xl mx-auto mb-10 space-y-2">
            <div className="text-xs font-semibold uppercase tracking-widest text-gold-400 font-cinzel">
              Strategic Jurisdictional Access
            </div>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white">
              The Three Chambers of Adv. Jagadish Chandra Halder
            </h2>
            <p className="text-xs sm:text-sm text-slate-300">
              Convenient legal consultation across Kolkata and South 24-Parganas.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {lawyerData.chambers.map((chamber) => (
              <div
                key={chamber.id}
                className="bg-navy-900/90 rounded-2xl p-6 border border-slate-700/80 flex flex-col justify-between hover:border-gold-500/40 transition-all shadow-lg"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-gold-500/15 text-gold-300 border border-gold-500/30 font-cinzel">
                      {chamber.badge}
                    </span>
                    <span className="text-xs text-slate-400 font-medium">
                      {chamber.type}
                    </span>
                  </div>

                  <h3 className="font-serif font-bold text-lg text-white">
                    {chamber.name}
                  </h3>

                  <div className="text-xs text-slate-300 space-y-2">
                    <p className="flex items-start gap-2">
                      <MapPin className="w-4 h-4 text-gold-400 mt-0.5 shrink-0" />
                      <span>{chamber.address}, {chamber.city}</span>
                    </p>
                    <p className="flex items-start gap-2">
                      <Clock className="w-4 h-4 text-gold-400 mt-0.5 shrink-0" />
                      <span>{chamber.timings}</span>
                    </p>
                  </div>
                </div>

                <div className="pt-5 mt-5 border-t border-slate-800 flex items-center justify-between">
                  <a
                    href={`tel:+91${chamber.phone}`}
                    className="text-xs font-semibold text-gold-400 hover:text-gold-300 flex items-center gap-1"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>{chamber.phone}</span>
                  </a>
                  <button
                    onClick={() => handleNav('chambers')}
                    className="text-xs text-slate-400 hover:text-white underline"
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
          <div className="text-xs font-semibold uppercase tracking-widest text-gold-400 font-cinzel">
            Procedural Transparency
          </div>
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white">
            The Civil Litigation Roadmap
          </h2>
          <p className="text-xs sm:text-sm text-slate-300">
            How civil suits progress from trial courts to the High Court at Calcutta.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {lawyerData.processSteps.map((step, idx) => (
            <div
              key={idx}
              className="bg-dark-card rounded-2xl p-5 border border-gold-500/20 relative flex flex-col justify-between"
            >
              <div className="text-3xl font-serif font-bold text-gold-500/30 mb-2">
                {step.step}
              </div>
              <div>
                <h4 className="font-serif font-bold text-base text-white mb-2">
                  {step.title}
                </h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CLIENT DOCUMENT CHECKLIST */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="bg-gradient-to-r from-navy-900 via-navy-850 to-navy-900 rounded-3xl p-6 sm:p-10 border border-gold-500/30">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5 space-y-4">
              <div className="text-xs font-semibold uppercase tracking-widest text-gold-400 font-cinzel">
                Pre-Consultation Checklist
              </div>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white">
                Documents to Bring for Property & Civil Consultations
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                For a swift, accurate assessment of your legal position, having the complete chain of documentation is essential.
              </p>
              <div className="pt-2">
                <button
                  onClick={onOpenAppointment}
                  className="px-6 py-3 rounded-xl bg-gold-gradient text-navy-950 font-bold text-xs sm:text-sm shadow-md hover:opacity-95 transition-all"
                >
                  Schedule Case Review
                </button>
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-3.5 text-xs text-slate-200">
              <div className="p-3.5 rounded-xl bg-navy-950/60 border border-slate-700/60 flex items-start gap-2.5">
                <FileText className="w-4 h-4 text-gold-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block">Chain of Title Deeds (Dalil)</strong>
                  Registered deeds showing prior and current title ownership.
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-navy-950/60 border border-slate-700/60 flex items-start gap-2.5">
                <FileText className="w-4 h-4 text-gold-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block">Record of Rights (Porcha/Khatiyan)</strong>
                  CS, RS, and latest LR Porchas indicating Dag number and Khatian.
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-navy-950/60 border border-slate-700/60 flex items-start gap-2.5">
                <FileText className="w-4 h-4 text-gold-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block">Land Revenue (Khazna) Receipts</strong>
                  Up-to-date tax & rent receipts from BL&LRO office.
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-navy-950/60 border border-slate-700/60 flex items-start gap-2.5">
                <FileText className="w-4 h-4 text-gold-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block">Prior Court Orders or Plaint Copies</strong>
                  Certified copies of judgments, plaints, or injunction orders (if any).
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-navy-950/60 border border-slate-700/60 flex items-start gap-2.5">
                <FileText className="w-4 h-4 text-gold-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block">Site Plan / Demarcation Map</strong>
                  Sanctioned plan or hand sketch displaying boundaries and roads.
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-navy-950/60 border border-slate-700/60 flex items-start gap-2.5">
                <FileText className="w-4 h-4 text-gold-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block">Legal Notices & Police Complaints</strong>
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
          <div className="text-xs font-semibold uppercase tracking-widest text-gold-400 font-cinzel">
            Clarifications & Advisory
          </div>
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white">
            Frequently Asked Legal Questions
          </h2>
          <p className="text-xs sm:text-sm text-slate-300">
            Common questions regarding civil litigation, High Court appeals, and consultation procedures.
          </p>
        </div>

        <div className="space-y-3">
          {lawyerData.faqs.map((faq, idx) => (
            <div
              key={idx}
              className="bg-dark-card rounded-xl border border-gold-500/20 overflow-hidden"
            >
              <button
                onClick={() => toggleFaq(idx)}
                className="w-full text-left p-4 sm:p-5 flex items-center justify-between gap-4 hover:bg-navy-800/40 transition-colors"
              >
                <span className="font-serif font-bold text-sm sm:text-base text-white">
                  {faq.q}
                </span>
                <span className="p-1 rounded-full bg-gold-500/10 text-gold-400 shrink-0">
                  {openFaq === idx ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                </span>
              </button>
              {openFaq === idx && (
                <div className="px-4 pb-4 sm:px-5 sm:pb-5 text-xs sm:text-sm text-slate-300 border-t border-slate-800/80 pt-3 leading-relaxed">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* FINAL CONSULTATION CTA BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="bg-gradient-to-r from-navy-950 via-[#132244] to-navy-950 rounded-3xl p-8 sm:p-12 text-center border-2 border-gold-500/40 shadow-2xl space-y-6">
          <div className="w-16 h-16 mx-auto rounded-full bg-gold-500/15 border border-gold-500/30 flex items-center justify-center text-gold-400">
            <Scale className="w-8 h-8" />
          </div>

          <div className="max-w-2xl mx-auto space-y-3">
            <h2 className="text-2xl sm:text-4xl font-serif font-bold text-white">
              Consult with Advocate Jagadish Chandra Halder
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Whether you are defending ancestral land, filing a partition plaint, appealing a trial court decree, or seeking urgent ad-interim injunctions in the High Court at Calcutta — receive authoritative, time-tested legal counsel.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <button
              onClick={onOpenAppointment}
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-gold-gradient text-navy-950 font-bold text-sm tracking-wide shadow-xl hover:opacity-95 transition-all"
            >
              Request Consultation Appointment
            </button>
            <a
              href={`tel:+91${lawyerData.phone}`}
              className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-navy-800 border border-gold-500/40 text-gold-300 font-semibold text-sm hover:bg-gold-500 hover:text-navy-950 transition-all flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4" />
              <span>Call Helpline: {lawyerData.phoneFormatted}</span>
            </a>
          </div>

          <div className="text-[11px] text-slate-400 font-cinzel uppercase tracking-wider">
            High Court at Calcutta • Bar Association Room 15 (2nd Floor)
          </div>
        </div>
      </section>
    </div>
  );
}
