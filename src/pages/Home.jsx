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
      badge: "High Court at Calcutta • Bar Association Room 15",
      title: "JAGADISH CHANDRA HALDER",
      subtitle: "Advocate, High Court, Calcutta",
      room: "Bar Association, Room No. 15 (2nd Floor)",
      description: "Over 25 years of distinguished civil advocacy representing clients across the Hon’ble High Court at Calcutta, Sub-Divisional Court at Kakdwip, and District Courts of South 24-Parganas. Meticulous counsel in Property Disputes, Title Suits, Partition, Civil Appeals, and Constitutional Writs.",
      primaryCta: "Book Legal Consultation",
      actionType: "appointment",
      secondaryCta: `Call: ${lawyerData.phoneFormatted}`,
      secondaryLink: `tel:+91${lawyerData.phone}`,
    },
    {
      badge: "Appellate Side & Constitutional Writs",
      title: "HIGH COURT APPEALS & WRITS",
      subtitle: "First Appeals (FA) • Second Appeals (SA) • Art. 226",
      room: "Appellate Jurisprudence & Substantial Questions of Law",
      description: "Formulating substantial questions of law under Section 100 CPC, challenging trial court decrees, staying execution proceedings, and moving supervisory revision petitions under Article 227 and Section 115 CPC.",
      primaryCta: "Explore Civil Practice Areas",
      actionType: "practice",
      secondaryCta: "Schedule Case Review",
      secondaryAction: onOpenAppointment,
    },
    {
      badge: "Kolkata & South 24-Parganas Chambers",
      title: "THREE STRATEGIC CHAMBERS",
      subtitle: "High Court Bar Rm 15 • Garia • Kakdwip Court",
      room: "Convenient Consultation Across Bengal",
      description: "Direct trial court presence at Kakdwip Sub-Divisional Court and Alipore District Court combined with daily appellate representation before the High Court at Calcutta.",
      primaryCta: "View Chamber Locations & Maps",
      actionType: "chambers",
      secondaryCta: `Direct Helpline: ${lawyerData.phoneFormatted}`,
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
    <div className="space-y-24 pb-20 bg-white text-neutral-900 font-sans">
      
      {/* FULL VIEWPORT HERO SLIDER SECTION */}
      <section className="relative w-full min-h-[90vh] lg:min-h-screen flex items-center overflow-hidden bg-neutral-900 border-b border-neutral-300">
        
        {/* Full Viewport Background Image */}
        <div className="absolute inset-0 w-full h-full">
          <img
            src="./slider.jpg"
            alt="Advocate Jagadish Chandra Halder - Calcutta High Court"
            className="w-full h-full object-cover object-[center_right] lg:object-[82%_center] scale-100 transition-all duration-1000"
            onError={(e) => { e.target.src = './logo.png'; }}
          />
          {/* Desktop Left-to-Right Scrim: keeps the text 100% readable on the left, reveals the advocate on the right */}
          <div className="hidden lg:block absolute inset-0 bg-gradient-to-r from-white via-white/95 via-50% to-transparent" />
          
          {/* Mobile Overlay: ensure text stands out with rich white backdrop */}
          <div className="lg:hidden absolute inset-0 bg-white/90 backdrop-blur-xs" />
        </div>

        {/* Hero Content Container */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-16 lg:py-24 z-10">
          <div className="max-w-3xl space-y-6">
            
            {/* Top Credential Pill Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border-2 border-black text-black text-xs sm:text-sm font-extrabold tracking-wider uppercase shadow-md">
              <Landmark className="w-4 h-4 text-black shrink-0" />
              <span>{slide.badge}</span>
            </div>

            {/* Main Title Heading - Massive & Highly Readable */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-serif font-black text-black tracking-tight leading-[1.08]">
                {slide.title}
              </h1>
              <p className="text-xl sm:text-2xl lg:text-3xl font-serif font-bold text-neutral-800 italic">
                {slide.subtitle}
              </p>
            </div>

            {/* Chamber / Jurisdiction Tag */}
            <div className="flex items-center gap-2 text-sm sm:text-base font-bold text-neutral-900 uppercase tracking-wide">
              <span className="w-2.5 h-2.5 rounded-full bg-black inline-block"></span>
              <span>{slide.room}</span>
            </div>

            {/* Description Paragraph - High Readability & Large Size */}
            <p className="text-base sm:text-xl text-neutral-800 font-medium leading-relaxed max-w-2xl">
              {slide.description}
            </p>

            {/* Chamber Locations Quick Row */}
            <div className="flex flex-wrap items-center gap-2.5 pt-1 text-xs sm:text-sm font-bold">
              <span className="px-3.5 py-1.5 rounded-lg bg-white border-2 border-neutral-300 text-black shadow-sm">
                🏛️ Calcutta High Court (Room 15)
              </span>
              <span className="px-3.5 py-1.5 rounded-lg bg-white border-2 border-neutral-300 text-black shadow-sm">
                📍 Garia Chamber, Kolkata
              </span>
              <span className="px-3.5 py-1.5 rounded-lg bg-white border-2 border-neutral-300 text-black shadow-sm">
                📍 Kakdwip Court Chamber
              </span>
            </div>

            {/* Action Buttons - Prominent & Large */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
              <button
                onClick={() => {
                  if (slide.actionType === 'practice') handleNav('practice-areas');
                  else if (slide.actionType === 'chambers') handleNav('chambers');
                  else onOpenAppointment();
                }}
                className="px-8 py-4 rounded-xl bg-black text-white font-extrabold text-base sm:text-lg tracking-wide shadow-xl hover:bg-neutral-800 transition-all flex items-center justify-center gap-3 active:scale-95"
              >
                <span>{slide.primaryCta}</span>
                <ArrowRight className="w-5 h-5" />
              </button>

              {slide.secondaryLink ? (
                <a
                  href={slide.secondaryLink}
                  className="px-8 py-4 rounded-xl bg-white border-2 border-black text-black font-extrabold text-base sm:text-lg hover:bg-black hover:text-white transition-all flex items-center justify-center gap-3 shadow-md"
                >
                  <Phone className="w-5 h-5" />
                  <span>{slide.secondaryCta}</span>
                </a>
              ) : (
                <button
                  onClick={slide.secondaryAction}
                  className="px-8 py-4 rounded-xl bg-white border-2 border-black text-black font-extrabold text-base sm:text-lg hover:bg-black hover:text-white transition-all flex items-center justify-center gap-3 shadow-md"
                >
                  <Clock className="w-5 h-5" />
                  <span>{slide.secondaryCta}</span>
                </button>
              )}
            </div>

            {/* Checkmark Highlights */}
            <div className="pt-2 text-sm sm:text-base font-bold text-neutral-900 flex flex-wrap items-center gap-5">
              <span className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-black shrink-0" />
                Direct Senior Advocacy
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-black shrink-0" />
                Complete Confidentiality
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-black shrink-0" />
                BCI Rule 36 Compliant
              </span>
            </div>

          </div>
        </div>

        {/* Slider Controls: Arrows & Dots */}
        <div className="absolute bottom-6 left-4 sm:left-8 z-20 flex items-center gap-4">
          <div className="flex items-center gap-2">
            <button
              onClick={prevSlide}
              className="w-10 h-10 rounded-full bg-white/90 border-2 border-black text-black flex items-center justify-center hover:bg-black hover:text-white transition-colors shadow-md"
              aria-label="Previous Slide"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextSlide}
              className="w-10 h-10 rounded-full bg-white/90 border-2 border-black text-black flex items-center justify-center hover:bg-black hover:text-white transition-colors shadow-md"
              aria-label="Next Slide"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Dots Indicator */}
          <div className="flex items-center gap-2">
            {slides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentSlide(idx)}
                className={`h-3 rounded-full transition-all ${
                  currentSlide === idx ? 'w-8 bg-black' : 'w-3 bg-neutral-400 hover:bg-neutral-600'
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
              className="bg-white rounded-2xl p-6 sm:p-8 text-center border-2 border-neutral-200 hover:border-black transition-colors shadow-sm"
            >
              <div className="text-3xl sm:text-5xl lg:text-6xl font-serif font-black text-black">
                {st.value}
              </div>
              <div className="text-base sm:text-xl font-extrabold text-neutral-900 mt-2">
                {st.label}
              </div>
              <div className="text-xs sm:text-sm text-neutral-600 font-medium mt-1">
                {st.sublabel}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PRACTICE AREAS SPOTLIGHT */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="text-xs sm:text-sm font-extrabold uppercase tracking-widest text-neutral-600 font-cinzel">
            Key Civil Law Competencies
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif font-black text-black">
            Specialized Practice Areas
          </h2>
          <p className="text-base sm:text-lg text-neutral-700 leading-relaxed font-medium">
            Delivering strategic civil dispute resolution, trial court mastery, and appellate representation before the High Court at Calcutta.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {lawyerData.practiceAreas.slice(0, 6).map((pa) => (
            <div
              key={pa.id}
              className="bg-white rounded-2xl p-6 sm:p-8 border-2 border-neutral-200 hover:border-black flex flex-col justify-between group shadow-sm hover:shadow-lg transition-all"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-neutral-100 border border-neutral-300 flex items-center justify-center text-black mb-5 group-hover:bg-black group-hover:text-white transition-colors">
                  <Scale className="w-6 h-6" />
                </div>
                <h3 className="font-serif font-bold text-xl sm:text-2xl text-black group-hover:text-neutral-900 transition-colors">
                  {pa.title}
                </h3>
                <div className="text-xs sm:text-sm text-neutral-600 font-bold mt-1 mb-3">
                  {pa.subtitle}
                </div>
                <p className="text-sm sm:text-base text-neutral-700 leading-relaxed mb-5 font-normal">
                  {pa.description}
                </p>
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {pa.statutes.map((st, idx) => (
                    <span
                      key={idx}
                      className="text-xs px-2.5 py-1 rounded bg-neutral-100 border border-neutral-200 text-neutral-800 font-semibold"
                    >
                      {st}
                    </span>
                  ))}
                </div>
              </div>

              <button
                onClick={() => handleNav('practice-areas')}
                className="inline-flex items-center gap-2 text-sm font-bold text-black hover:underline transition-colors pt-4 border-t border-neutral-200"
              >
                <span>Read statutory relief & details</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <button
            onClick={() => handleNav('practice-areas')}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-neutral-100 border-2 border-neutral-300 text-black hover:bg-black hover:text-white text-sm sm:text-base font-extrabold transition-all shadow-sm"
          >
            <span>Explore All Civil Practice Areas</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>

      {/* THE THREE CHAMBERS PRESENTATION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="bg-neutral-50 rounded-3xl p-6 sm:p-12 border-2 border-neutral-200 shadow-sm">
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
            <div className="text-xs sm:text-sm font-extrabold uppercase tracking-widest text-neutral-600 font-cinzel">
              Strategic Jurisdictional Access
            </div>
            <h2 className="text-3xl sm:text-5xl font-serif font-black text-black">
              The Three Chambers of Adv. Jagadish Chandra Halder
            </h2>
            <p className="text-base sm:text-lg text-neutral-700 font-medium">
              Convenient legal consultation across Kolkata and South 24-Parganas.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {lawyerData.chambers.map((chamber) => (
              <div
                key={chamber.id}
                className="bg-white rounded-2xl p-6 sm:p-8 border-2 border-neutral-200 flex flex-col justify-between hover:border-black transition-all shadow-sm"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-neutral-100 text-black border border-neutral-300 font-cinzel">
                      {chamber.badge}
                    </span>
                    <span className="text-xs text-neutral-500 font-bold">
                      {chamber.type}
                    </span>
                  </div>

                  <h3 className="font-serif font-bold text-xl sm:text-2xl text-black">
                    {chamber.name}
                  </h3>

                  <div className="text-sm sm:text-base text-neutral-700 space-y-3 font-normal">
                    <p className="flex items-start gap-2.5">
                      <MapPin className="w-5 h-5 text-black mt-0.5 shrink-0" />
                      <span>{chamber.address}, <strong>{chamber.city}</strong></span>
                    </p>
                    <p className="flex items-start gap-2.5">
                      <Clock className="w-5 h-5 text-black mt-0.5 shrink-0" />
                      <span>{chamber.timings}</span>
                    </p>
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-neutral-200 flex items-center justify-between">
                  <a
                    href={`tel:+91${chamber.phone}`}
                    className="text-sm font-extrabold text-black hover:underline flex items-center gap-1.5"
                  >
                    <Phone className="w-4 h-4 text-black" />
                    <span>{chamber.phone}</span>
                  </a>
                  <button
                    onClick={() => handleNav('chambers')}
                    className="text-sm text-neutral-700 hover:text-black font-bold underline"
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
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="text-xs sm:text-sm font-extrabold uppercase tracking-widest text-neutral-600 font-cinzel">
            Procedural Transparency
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif font-black text-black">
            The Civil Litigation Roadmap
          </h2>
          <p className="text-base sm:text-lg text-neutral-700 font-medium">
            How civil suits progress from trial courts to the High Court at Calcutta.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 sm:gap-6">
          {lawyerData.processSteps.map((step, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-6 border-2 border-neutral-200 shadow-sm relative flex flex-col justify-between"
            >
              <div className="text-4xl sm:text-5xl font-serif font-black text-neutral-300 mb-2">
                {step.step}
              </div>
              <div>
                <h4 className="font-serif font-bold text-lg sm:text-xl text-black mb-2">
                  {step.title}
                </h4>
                <p className="text-xs sm:text-sm text-neutral-700 leading-relaxed font-normal">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CLIENT DOCUMENT CHECKLIST - Contrast Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="bg-neutral-950 text-white rounded-3xl p-8 sm:p-14 border border-neutral-800 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5 space-y-4">
              <div className="text-xs sm:text-sm font-extrabold uppercase tracking-widest text-neutral-400 font-cinzel">
                Pre-Consultation Checklist
              </div>
              <h2 className="text-3xl sm:text-5xl font-serif font-black text-white leading-tight">
                Documents to Bring for Property & Civil Consultations
              </h2>
              <p className="text-base sm:text-lg text-neutral-300 leading-relaxed font-normal">
                For a swift, accurate assessment of your legal position, having the complete chain of documentation is essential.
              </p>
              <div className="pt-2">
                <button
                  onClick={onOpenAppointment}
                  className="px-8 py-4 rounded-xl bg-white text-black font-extrabold text-sm sm:text-base shadow-lg hover:bg-neutral-100 transition-all"
                >
                  Schedule Case Review
                </button>
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm sm:text-base text-neutral-200">
              <div className="p-4 rounded-xl bg-neutral-900 border border-neutral-800 flex items-start gap-3">
                <FileText className="w-5 h-5 text-white shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block font-bold">Chain of Title Deeds (Dalil)</strong>
                  Registered deeds showing prior and current title ownership.
                </div>
              </div>

              <div className="p-4 rounded-xl bg-neutral-900 border border-neutral-800 flex items-start gap-3">
                <FileText className="w-5 h-5 text-white shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block font-bold">Record of Rights (Porcha/Khatiyan)</strong>
                  CS, RS, and latest LR Porchas indicating Dag number and Khatian.
                </div>
              </div>

              <div className="p-4 rounded-xl bg-neutral-900 border border-neutral-800 flex items-start gap-3">
                <FileText className="w-5 h-5 text-white shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block font-bold">Land Revenue (Khazna) Receipts</strong>
                  Up-to-date tax & rent receipts from BL&LRO office.
                </div>
              </div>

              <div className="p-4 rounded-xl bg-neutral-900 border border-neutral-800 flex items-start gap-3">
                <FileText className="w-5 h-5 text-white shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block font-bold">Prior Court Orders or Plaint Copies</strong>
                  Certified copies of judgments, plaints, or injunction orders (if any).
                </div>
              </div>

              <div className="p-4 rounded-xl bg-neutral-900 border border-neutral-800 flex items-start gap-3">
                <FileText className="w-5 h-5 text-white shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block font-bold">Site Plan / Demarcation Map</strong>
                  Sanctioned plan or hand sketch displaying boundaries and roads.
                </div>
              </div>

              <div className="p-4 rounded-xl bg-neutral-900 border border-neutral-800 flex items-start gap-3">
                <FileText className="w-5 h-5 text-white shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block font-bold">Legal Notices & Police Complaints</strong>
                  Copies of notice under Sec 106 T.P. Act or general diary (GD) logs.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FREQUENTLY ASKED QUESTIONS */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 space-y-3">
          <div className="text-xs sm:text-sm font-extrabold uppercase tracking-widest text-neutral-600 font-cinzel">
            Clarifications & Advisory
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-black text-black">
            Frequently Asked Legal Questions
          </h2>
          <p className="text-base sm:text-lg text-neutral-700 font-medium">
            Common questions regarding civil litigation, High Court appeals, and consultation procedures.
          </p>
        </div>

        <div className="space-y-4">
          {lawyerData.faqs.map((faq, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl border-2 border-neutral-200 overflow-hidden shadow-sm"
            >
              <button
                onClick={() => toggleFaq(idx)}
                className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 hover:bg-neutral-50 transition-colors"
              >
                <span className="font-serif font-bold text-base sm:text-xl text-black">
                  {faq.q}
                </span>
                <span className="p-1.5 rounded-full bg-neutral-100 text-black shrink-0">
                  {openFaq === idx ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                </span>
              </button>
              {openFaq === idx && (
                <div className="px-5 pb-5 sm:px-6 sm:pb-6 text-sm sm:text-base text-neutral-800 border-t border-neutral-200 pt-4 leading-relaxed font-normal">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* FINAL CONSULTATION CTA BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="bg-neutral-950 rounded-3xl p-8 sm:p-14 text-center border border-neutral-800 shadow-2xl space-y-6 text-white">
          <div className="w-16 h-16 mx-auto rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white">
            <Scale className="w-8 h-8" />
          </div>

          <div className="max-w-3xl mx-auto space-y-3">
            <h2 className="text-3xl sm:text-5xl font-serif font-black text-white leading-tight">
              Consult with Advocate Jagadish Chandra Halder
            </h2>
            <p className="text-base sm:text-xl text-neutral-300 leading-relaxed font-normal">
              Whether you are defending ancestral land, filing a partition plaint, appealing a trial court decree, or seeking urgent ad-interim injunctions in the High Court at Calcutta — receive authoritative, time-tested legal counsel.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-3">
            <button
              onClick={onOpenAppointment}
              className="w-full sm:w-auto px-9 py-4 rounded-xl bg-white text-black font-extrabold text-base sm:text-lg tracking-wide shadow-xl hover:bg-neutral-100 transition-all"
            >
              Request Consultation Appointment
            </button>
            <a
              href={`tel:+91${lawyerData.phone}`}
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-neutral-800 border-2 border-neutral-700 text-white font-extrabold text-base sm:text-lg hover:bg-neutral-700 transition-all flex items-center justify-center gap-2"
            >
              <Phone className="w-5 h-5" />
              <span>Call Helpline: {lawyerData.phoneFormatted}</span>
            </a>
          </div>

          <div className="text-xs sm:text-sm text-neutral-400 font-bold uppercase tracking-wider pt-2">
            High Court at Calcutta • Bar Association Room 15 (2nd Floor)
          </div>
        </div>
      </section>
    </div>
  );
}
