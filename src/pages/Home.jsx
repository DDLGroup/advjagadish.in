import React, { useState, useEffect } from 'react';
import { 
  Scale, Shield, Award, MapPin, Phone, ArrowRight, FileText, 
  CheckCircle, ChevronDown, ChevronUp, Landmark, BookOpen, Clock, 
  ChevronLeft, ChevronRight 
} from 'lucide-react';
import { lawyerData } from '../data/lawyerData';

export default function Home({ setActivePage, onOpenAppointment }) {
  const [openFaq, setOpenFaq] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const toggleFaq = (idx) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  const handleNav = (pageId) => {
    setActivePage(pageId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    window.location.hash = pageId;
  };

  const slides = [
    {
      badge: "High Court, Calcutta • Bar Association Room 15",
      title: "JAGADISH CHANDRA HALDER",
      subtitle: "Advocate • High Court, Calcutta",
      description: "Dedicated civil litigation, appellate advocacy, and property law counsel with over 25 years of practice.",
      primaryCta: "Book Consultation",
      actionType: "appointment",
      secondaryCta: `Call: ${lawyerData.phoneFormatted}`,
      secondaryLink: `tel:+91${lawyerData.phone}`,
    },
    {
      badge: "Appellate Jurisprudence & Writs",
      title: "Civil Appeals & Writ Petitions",
      subtitle: "First Appeals (FA) • Second Appeals (SA) • Art. 226",
      description: "Substantial questions of law under Section 100 CPC, civil revisions, and constitutional remedies.",
      primaryCta: "Practice Areas",
      actionType: "practice",
      secondaryCta: "Schedule Review",
      secondaryAction: onOpenAppointment,
    },
    {
      badge: "Kolkata & South 24-Parganas Chambers",
      title: "Three Strategic Chambers",
      subtitle: "High Court Bar Rm 15 • Garia • Kakdwip",
      description: "Direct client consultation across Calcutta High Court, Alipore District Court, and Kakdwip Court.",
      primaryCta: "View Chambers",
      actionType: "chambers",
      secondaryCta: `Call: ${lawyerData.phoneFormatted}`,
      secondaryLink: `tel:+91${lawyerData.phone}`,
    }
  ];

  // Auto advance slides every 7 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 7000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  const slide = slides[currentSlide];

  return (
    <div className="space-y-20 pb-20 bg-white text-neutral-900 font-sans">
      
      {/* HERO SLIDER SECTION - FULL IMAGE VISIBILITY, TEXT OVER IMAGE WITHOUT BACKGROUND */}
      <section className="relative w-full h-[500px] sm:h-[560px] lg:h-[620px] flex items-center overflow-hidden bg-neutral-950 border-b border-neutral-200">
        
        {/* Full Image Display - Advocate & Library Clearly Visible */}
        <div className="absolute inset-0 w-full h-full">
          <img
            src="./slider.jpg"
            alt="Advocate Jagadish Chandra Halder - Calcutta High Court"
            className="w-full h-full object-cover object-[center_20%] lg:object-[center_15%]"
            onError={(e) => { e.target.src = './logo.png'; }}
          />
          {/* Subtle uniform overlay for contrast so text is readable over image without any background boxes */}
          <div className="absolute inset-0 bg-black/45" />
        </div>

        {/* Minimal Hero Text Over Image - Left Aligned so Advocate Face Remains Uncovered */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
          <div className="max-w-md sm:max-w-lg lg:max-w-xl space-y-3.5 text-white">
            
            {/* Small Legal Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/35 border border-white/25 text-neutral-100 text-[11px] sm:text-xs font-cinzel font-semibold tracking-wider uppercase backdrop-blur-xs">
              <Landmark className="w-3.5 h-3.5 text-neutral-300 shrink-0" />
              <span>{slide.badge}</span>
            </div>

            {/* Main Title - Refined Legal Typography (Cinzel) */}
            <h1 
              className="text-2xl sm:text-3xl lg:text-4xl font-cinzel font-bold text-white tracking-wide leading-tight"
              style={{ textShadow: '0 2px 6px rgba(0,0,0,0.85)' }}
            >
              {slide.title}
            </h1>

            {/* Subtitle - Merriweather Serif */}
            <p 
              className="text-base sm:text-lg font-serif italic text-neutral-200"
              style={{ textShadow: '0 1px 4px rgba(0,0,0,0.85)' }}
            >
              {slide.subtitle}
            </p>

            {/* Concise 1-Line Description */}
            <p 
              className="text-xs sm:text-sm text-neutral-200 font-sans leading-relaxed max-w-md"
              style={{ textShadow: '0 1px 4px rgba(0,0,0,0.85)' }}
            >
              {slide.description}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={() => {
                  if (slide.actionType === 'practice') handleNav('practice-areas');
                  else if (slide.actionType === 'chambers') handleNav('chambers');
                  else onOpenAppointment();
                }}
                className="px-5 py-2.5 rounded-lg bg-white text-black font-semibold text-xs sm:text-sm tracking-wide shadow-md hover:bg-neutral-100 transition-all flex items-center gap-2 active:scale-95"
              >
                <span>{slide.primaryCta}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              {slide.secondaryLink ? (
                <a
                  href={slide.secondaryLink}
                  className="px-5 py-2.5 rounded-lg bg-black/35 border border-white/30 text-white font-semibold text-xs sm:text-sm hover:bg-white hover:text-black transition-all flex items-center gap-2 backdrop-blur-xs"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>{slide.secondaryCta}</span>
                </a>
              ) : (
                <button
                  onClick={slide.secondaryAction}
                  className="px-5 py-2.5 rounded-lg bg-black/35 border border-white/30 text-white font-semibold text-xs sm:text-sm hover:bg-white hover:text-black transition-all flex items-center gap-2 backdrop-blur-xs"
                >
                  <span>{slide.secondaryCta}</span>
                </button>
              )}
            </div>

          </div>
        </div>

        {/* Minimal Controls: Arrows & Dots on Bottom Right */}
        <div className="absolute bottom-5 right-4 sm:right-8 z-20 flex items-center gap-3">
          <div className="flex items-center gap-1.5">
            <button
              onClick={prevSlide}
              className="w-8 h-8 rounded-full bg-black/40 hover:bg-white hover:text-black text-white flex items-center justify-center transition-colors backdrop-blur-xs border border-white/20"
              aria-label="Previous Slide"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={nextSlide}
              className="w-8 h-8 rounded-full bg-black/40 hover:bg-white hover:text-black text-white flex items-center justify-center transition-colors backdrop-blur-xs border border-white/20"
              aria-label="Next Slide"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          <div className="flex items-center gap-1.5 pl-1">
            {slides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentSlide(idx)}
                className={`h-2 rounded-full transition-all ${
                  currentSlide === idx ? 'w-6 bg-white' : 'w-2 bg-white/40 hover:bg-white/70'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>

      </section>

      {/* STATS COUNTER STRIP */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {lawyerData.stats.map((st, i) => (
            <div
              key={i}
              className="bg-white rounded-xl p-5 sm:p-6 text-center border border-neutral-200 hover:border-black transition-colors shadow-xs"
            >
              <div className="text-2xl sm:text-3xl font-serif font-bold text-black">
                {st.value}
              </div>
              <div className="text-xs sm:text-sm font-semibold text-neutral-800 mt-1">
                {st.label}
              </div>
              <div className="text-[11px] sm:text-xs text-neutral-500 font-normal mt-0.5">
                {st.sublabel}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PRACTICE AREAS SPOTLIGHT */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
          <div className="text-[11px] sm:text-xs font-semibold uppercase tracking-widest text-neutral-500 font-cinzel">
            Key Civil Law Competencies
          </div>
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-black">
            Specialized Practice Areas
          </h2>
          <p className="text-sm sm:text-base text-neutral-600 leading-relaxed font-normal">
            Delivering strategic civil dispute resolution, trial court mastery, and appellate representation before the High Court at Calcutta.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {lawyerData.practiceAreas.slice(0, 6).map((pa) => (
            <div
              key={pa.id}
              className="bg-white rounded-xl p-5 sm:p-6 border border-neutral-200 hover:border-black flex flex-col justify-between group shadow-xs hover:shadow-md transition-all"
            >
              <div>
                <div className="w-10 h-10 rounded-lg bg-neutral-100 border border-neutral-200 flex items-center justify-center text-black mb-4 group-hover:bg-black group-hover:text-white transition-colors">
                  <Scale className="w-5 h-5" />
                </div>
                <h3 className="font-serif font-semibold text-lg text-black group-hover:text-neutral-900 transition-colors">
                  {pa.title}
                </h3>
                <div className="text-xs text-neutral-500 font-medium mt-0.5 mb-2.5">
                  {pa.subtitle}
                </div>
                <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed mb-4 font-normal">
                  {pa.description}
                </p>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {pa.statutes.map((st, idx) => (
                    <span
                      key={idx}
                      className="text-[11px] px-2 py-0.5 rounded bg-neutral-100 border border-neutral-200 text-neutral-700 font-medium"
                    >
                      {st}
                    </span>
                  ))}
                </div>
              </div>

              <button
                onClick={() => handleNav('practice-areas')}
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-black hover:underline transition-colors pt-3 border-t border-neutral-100"
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
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-neutral-100 border border-neutral-300 text-black hover:bg-black hover:text-white text-xs sm:text-sm font-semibold transition-all shadow-xs"
          >
            <span>Explore All Civil Practice Areas</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>

      {/* THE THREE CHAMBERS PRESENTATION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="bg-neutral-50 rounded-2xl p-6 sm:p-10 border border-neutral-200 shadow-xs">
          <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
            <div className="text-[11px] sm:text-xs font-semibold uppercase tracking-widest text-neutral-500 font-cinzel">
              Strategic Jurisdictional Access
            </div>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-black">
              The Three Chambers of Adv. Jagadish Chandra Halder
            </h2>
            <p className="text-sm sm:text-base text-neutral-600 font-normal">
              Convenient legal consultation across Kolkata and South 24-Parganas.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
            {lawyerData.chambers.map((chamber) => (
              <div
                key={chamber.id}
                className="bg-white rounded-xl p-5 sm:p-6 border border-neutral-200 flex flex-col justify-between hover:border-black transition-all shadow-xs"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-semibold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-neutral-100 text-black border border-neutral-200 font-cinzel">
                      {chamber.badge}
                    </span>
                    <span className="text-[11px] text-neutral-500 font-medium">
                      {chamber.type}
                    </span>
                  </div>

                  <h3 className="font-serif font-semibold text-base sm:text-lg text-black">
                    {chamber.name}
                  </h3>

                  <div className="text-xs sm:text-sm text-neutral-600 space-y-2 font-normal">
                    <p className="flex items-start gap-2">
                      <MapPin className="w-4 h-4 text-black mt-0.5 shrink-0" />
                      <span>{chamber.address}, <strong>{chamber.city}</strong></span>
                    </p>
                    <p className="flex items-start gap-2">
                      <Clock className="w-4 h-4 text-black mt-0.5 shrink-0" />
                      <span>{chamber.timings}</span>
                    </p>
                  </div>
                </div>

                <div className="pt-4 mt-5 border-t border-neutral-100 flex items-center justify-between">
                  <a
                    href={`tel:+91${chamber.phone}`}
                    className="text-xs font-semibold text-black hover:underline flex items-center gap-1.5"
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
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
          <div className="text-[11px] sm:text-xs font-semibold uppercase tracking-widest text-neutral-500 font-cinzel">
            Procedural Transparency
          </div>
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-black">
            The Civil Litigation Roadmap
          </h2>
          <p className="text-sm sm:text-base text-neutral-600 font-normal">
            How civil suits progress from trial courts to the High Court at Calcutta.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {lawyerData.processSteps.map((step, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl p-5 border border-neutral-200 shadow-xs relative flex flex-col justify-between"
            >
              <div className="text-2xl sm:text-3xl font-serif font-bold text-neutral-300 mb-1">
                {step.step}
              </div>
              <div>
                <h4 className="font-serif font-semibold text-sm sm:text-base text-black mb-1">
                  {step.title}
                </h4>
                <p className="text-xs text-neutral-600 leading-relaxed font-normal">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CLIENT DOCUMENT CHECKLIST */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="bg-neutral-950 text-white rounded-2xl p-6 sm:p-10 border border-neutral-800 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            <div className="lg:col-span-5 space-y-3">
              <div className="text-[11px] sm:text-xs font-semibold uppercase tracking-widest text-neutral-400 font-cinzel">
                Pre-Consultation Checklist
              </div>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white leading-tight">
                Documents to Bring for Property & Civil Consultations
              </h2>
              <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed font-normal">
                For an accurate assessment of your legal position, having the complete chain of documentation is essential.
              </p>
              <div className="pt-2">
                <button
                  onClick={onOpenAppointment}
                  className="px-6 py-2.5 rounded-lg bg-white text-black font-semibold text-xs sm:text-sm shadow-md hover:bg-neutral-100 transition-all"
                >
                  Schedule Case Review
                </button>
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-neutral-200">
              <div className="p-3.5 rounded-lg bg-neutral-900 border border-neutral-800 flex items-start gap-2.5">
                <FileText className="w-4 h-4 text-white shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block font-medium">Chain of Title Deeds (Dalil)</strong>
                  Registered deeds showing prior and current title ownership.
                </div>
              </div>

              <div className="p-3.5 rounded-lg bg-neutral-900 border border-neutral-800 flex items-start gap-2.5">
                <FileText className="w-4 h-4 text-white shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block font-medium">Record of Rights (Porcha/Khatiyan)</strong>
                  CS, RS, and latest LR Porchas indicating Dag number and Khatian.
                </div>
              </div>

              <div className="p-3.5 rounded-lg bg-neutral-900 border border-neutral-800 flex items-start gap-2.5">
                <FileText className="w-4 h-4 text-white shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block font-medium">Land Revenue (Khazna) Receipts</strong>
                  Up-to-date tax & rent receipts from BL&LRO office.
                </div>
              </div>

              <div className="p-3.5 rounded-lg bg-neutral-900 border border-neutral-800 flex items-start gap-2.5">
                <FileText className="w-4 h-4 text-white shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block font-medium">Prior Court Orders or Plaint Copies</strong>
                  Certified copies of judgments, plaints, or injunction orders.
                </div>
              </div>

              <div className="p-3.5 rounded-lg bg-neutral-900 border border-neutral-800 flex items-start gap-2.5">
                <FileText className="w-4 h-4 text-white shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block font-medium">Site Plan / Demarcation Map</strong>
                  Sanctioned plan or sketch displaying boundaries and roads.
                </div>
              </div>

              <div className="p-3.5 rounded-lg bg-neutral-900 border border-neutral-800 flex items-start gap-2.5">
                <FileText className="w-4 h-4 text-white shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block font-medium">Legal Notices & Police Complaints</strong>
                  Copies of notice under Sec 106 T.P. Act or general diary logs.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FREQUENTLY ASKED QUESTIONS */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-8 space-y-2">
          <div className="text-[11px] sm:text-xs font-semibold uppercase tracking-widest text-neutral-500 font-cinzel">
            Clarifications & Advisory
          </div>
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-black">
            Frequently Asked Legal Questions
          </h2>
          <p className="text-xs sm:text-sm text-neutral-600 font-normal">
            Common questions regarding civil litigation, High Court appeals, and consultation procedures.
          </p>
        </div>

        <div className="space-y-3">
          {lawyerData.faqs.map((faq, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl border border-neutral-200 overflow-hidden shadow-xs"
            >
              <button
                onClick={() => toggleFaq(idx)}
                className="w-full text-left p-4 sm:p-5 flex items-center justify-between gap-4 hover:bg-neutral-50 transition-colors"
              >
                <span className="font-serif font-semibold text-sm sm:text-base text-black">
                  {faq.q}
                </span>
                <span className="p-1 rounded-full bg-neutral-100 text-black shrink-0">
                  {openFaq === idx ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                </span>
              </button>
              {openFaq === idx && (
                <div className="px-4 pb-4 sm:px-5 sm:pb-5 text-xs sm:text-sm text-neutral-600 border-t border-neutral-100 pt-3 leading-relaxed font-normal">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* FINAL CONSULTATION CTA BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="bg-neutral-950 rounded-2xl p-6 sm:p-10 text-center border border-neutral-800 shadow-xl space-y-5 text-white">
          <div className="w-12 h-12 mx-auto rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white">
            <Scale className="w-6 h-6" />
          </div>

          <div className="max-w-2xl mx-auto space-y-2">
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white leading-tight">
              Consult with Advocate Jagadish Chandra Halder
            </h2>
            <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed font-normal">
              Whether you are defending ancestral land, filing a partition plaint, appealing a trial court decree, or seeking urgent ad-interim injunctions in the High Court at Calcutta — receive authoritative, time-tested legal counsel.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
            <button
              onClick={onOpenAppointment}
              className="w-full sm:w-auto px-6 py-3 rounded-lg bg-white text-black font-semibold text-xs sm:text-sm tracking-wide shadow-md hover:bg-neutral-100 transition-all"
            >
              Request Consultation
            </button>
            <a
              href={`tel:+91${lawyerData.phone}`}
              className="w-full sm:w-auto px-6 py-3 rounded-lg bg-neutral-800 border border-neutral-700 text-white font-semibold text-xs sm:text-sm hover:bg-neutral-700 transition-all flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4" />
              <span>Call Helpline: {lawyerData.phoneFormatted}</span>
            </a>
          </div>

          <div className="text-[11px] sm:text-xs text-neutral-400 font-cinzel font-medium uppercase tracking-wider pt-1">
            High Court at Calcutta • Bar Association Room 15 (2nd Floor)
          </div>
        </div>
      </section>
    </div>
  );
}
