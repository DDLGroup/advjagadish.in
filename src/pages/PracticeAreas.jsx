import React, { useState } from 'react';
import { Scale, CheckCircle2, ArrowRight } from 'lucide-react';
import { lawyerData } from '../data/lawyerData';

export default function PracticeAreas({ onOpenAppointment }) {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'All Civil Practice Areas' },
    { id: 'property', label: 'Land & Property Disputes' },
    { id: 'highcourt', label: 'High Court Appeals & Writs' },
    { id: 'family', label: 'Partition, Wills & Succession' },
  ];

  const getCategoryForPractice = (id) => {
    if (['property-title', 'injunctions', 'wblr-revenue'].includes(id)) return 'property';
    if (['civil-appeals', 'civil-revision', 'writ-petitions'].includes(id)) return 'highcourt';
    if (['partition-suits', 'wills-probate'].includes(id)) return 'family';
    return 'property';
  };

  const filteredAreas = activeCategory === 'all'
    ? lawyerData.practiceAreas
    : lawyerData.practiceAreas.filter(p => getCategoryForPractice(p.id) === activeCategory);

  return (
    <div className="space-y-20 pb-20 bg-white text-neutral-900 font-sans">
      {/* HEADER BANNER - Light Theme */}
      <section className="relative py-20 bg-neutral-50 border-b border-neutral-200 court-pattern">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-4xl space-y-4">
            <div className="text-xs sm:text-sm font-extrabold uppercase tracking-widest text-neutral-600 font-cinzel">
              High Court & Civil Jurisprudence
            </div>
            <h1 className="text-4xl sm:text-6xl font-serif font-black text-black tracking-tight leading-[1.1]">
              Civil Practice Areas & Legal Services
            </h1>
            <p className="text-xl sm:text-2xl font-serif text-neutral-800 font-bold italic">
              Comprehensive civil litigation, title defense, partition suits, and appellate advocacy in the High Court at Calcutta.
            </p>
          </div>
        </div>
      </section>

      {/* FILTER BUTTONS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-wrap items-center justify-center gap-3 pb-8 border-b border-neutral-200">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-6 py-3 rounded-xl text-sm sm:text-base font-extrabold transition-all ${
                activeCategory === cat.id
                  ? 'bg-black text-white shadow-md'
                  : 'bg-neutral-100 text-neutral-700 hover:text-black hover:bg-neutral-200 border-2 border-neutral-300'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </section>

      {/* DETAILED PRACTICE CARDS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10">
          {filteredAreas.map((pa) => (
            <div
              key={pa.id}
              className="bg-white rounded-3xl p-8 sm:p-10 border-2 border-neutral-200 flex flex-col justify-between shadow-sm relative group hover:border-black transition-all"
            >
              <div>
                {/* Header */}
                <div className="flex items-start justify-between gap-4 mb-5">
                  <div className="w-14 h-14 rounded-2xl bg-neutral-100 border border-neutral-300 flex items-center justify-center text-black group-hover:bg-black group-hover:text-white transition-colors shrink-0">
                    <Scale className="w-7 h-7" />
                  </div>
                  <div className="text-right">
                    <span className="text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-full bg-neutral-100 border border-neutral-300 text-neutral-800 font-cinzel">
                      Civil Side
                    </span>
                  </div>
                </div>

                <h3 className="text-2xl sm:text-3xl font-serif font-black text-black mb-1 group-hover:text-neutral-900 transition-colors">
                  {pa.title}
                </h3>
                <div className="text-sm sm:text-base font-bold text-neutral-600 mb-4">
                  {pa.subtitle}
                </div>

                <p className="text-base sm:text-lg text-neutral-700 leading-relaxed mb-6 font-normal">
                  {pa.description}
                </p>

                {/* Statutory Scope */}
                <div className="mb-6 space-y-2">
                  <div className="text-xs font-extrabold uppercase tracking-wider text-neutral-500 font-cinzel">
                    Governing Acts & Statutes:
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {pa.statutes.map((st, idx) => (
                      <span
                        key={idx}
                        className="text-xs sm:text-sm px-3 py-1 rounded-md bg-neutral-100 border border-neutral-200 text-neutral-900 font-bold"
                      >
                        {st}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Highlights Checklist */}
                <div className="space-y-3 mb-8">
                  <div className="text-xs font-extrabold uppercase tracking-wider text-neutral-500 font-cinzel">
                    Key Legal Interventions:
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm sm:text-base text-neutral-800 font-medium">
                    {pa.highlights.map((h, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-black mt-1 shrink-0" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom CTA */}
              <div className="pt-6 border-t border-neutral-200 flex items-center justify-between">
                <span className="text-xs sm:text-sm text-neutral-500 font-bold uppercase tracking-wider">
                  High Court & Civil Courts
                </span>
                <button
                  onClick={onOpenAppointment}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-black text-white font-extrabold text-sm hover:bg-neutral-800 transition-all shadow-sm active:scale-95"
                >
                  <span>Consult on this Matter</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* WHY CIVIL ADVOCACY REQUIRES SPECIALIST COUNSEL */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="bg-neutral-950 text-white rounded-3xl p-8 sm:p-14 border border-neutral-800 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5 space-y-4">
              <div className="text-xs sm:text-sm font-extrabold uppercase tracking-widest text-neutral-400 font-cinzel">
                Procedural Caveat
              </div>
              <h2 className="text-3xl sm:text-5xl font-serif font-black text-white leading-tight">
                Why Precision Pleadings Make or Break Civil Suits
              </h2>
              <p className="text-base sm:text-lg text-neutral-300 leading-relaxed font-normal">
                In Indian civil jurisprudence, a party cannot travel beyond their pleadings (Order 6 Rule 2 CPC). Any oversight in framing the plaint or written statement at the trial court cannot easily be remedied at the High Court appellate stage.
              </p>
            </div>

            <div className="lg:col-span-7 space-y-4 text-base sm:text-lg text-neutral-200">
              <div className="p-5 rounded-2xl bg-neutral-900 border border-neutral-800 space-y-2">
                <strong className="text-white block font-serif text-xl font-bold">Section 100 CPC Bar:</strong>
                Second Appeals before the High Court are entertained strictly on a "Substantial Question of Law" — not on mere appreciation of facts. Having experienced High Court counsel from day one protects your appellate remedies.
              </div>
              <div className="p-5 rounded-2xl bg-neutral-900 border border-neutral-800 space-y-2">
                <strong className="text-white block font-serif text-xl font-bold">Limitation & Section 5:</strong>
                Civil appeals and revision petitions are bound by strict statutory limitation periods under the Limitation Act 1963. Prompt certified copy retrieval and swift filing are vital.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BOTTOM ACTION */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-5">
        <h3 className="text-3xl sm:text-4xl font-serif font-black text-black">
          Require Legal Counsel for a Pending Civil Dispute?
        </h3>
        <p className="text-base sm:text-xl text-neutral-700 font-medium">
          Consult directly with Advocate Jagadish Chandra Halder at Calcutta High Court Bar Association Room 15, Garia Chamber, or Kakdwip Chamber.
        </p>
        <div className="pt-2">
          <button
            onClick={onOpenAppointment}
            className="px-9 py-4 rounded-xl bg-black text-white font-extrabold text-base sm:text-lg tracking-wide shadow-xl hover:bg-neutral-800 transition-all"
          >
            Book Civil Case Consultation
          </button>
        </div>
      </section>
    </div>
  );
}
