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
    <div className="space-y-16 pb-20 bg-white text-neutral-900 font-sans">
      {/* HEADER BANNER */}
      <section className="relative py-14 bg-neutral-50 border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl space-y-2.5">
            <div className="text-[11px] sm:text-xs font-semibold uppercase tracking-widest text-neutral-500 font-cinzel">
              High Court & Civil Jurisprudence
            </div>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-black tracking-tight leading-tight">
              Civil Practice Areas & Legal Services
            </h1>
            <p className="text-sm sm:text-base font-serif italic text-neutral-600">
              Comprehensive civil litigation, title defense, partition suits, and appellate advocacy in the High Court at Calcutta.
            </p>
          </div>
        </div>
      </section>

      {/* FILTER BUTTONS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-wrap items-center justify-center gap-2 pb-6 border-b border-neutral-200">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-medium transition-all ${
                activeCategory === cat.id
                  ? 'bg-black text-white shadow-xs'
                  : 'bg-neutral-100 text-neutral-600 hover:text-black hover:bg-neutral-200 border border-neutral-300'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </section>

      {/* DETAILED PRACTICE CARDS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {filteredAreas.map((pa) => (
            <div
              key={pa.id}
              className="bg-white rounded-2xl p-6 sm:p-8 border border-neutral-200 flex flex-col justify-between shadow-xs relative group hover:border-black transition-all"
            >
              <div>
                {/* Header */}
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-neutral-100 border border-neutral-200 flex items-center justify-center text-black group-hover:bg-black group-hover:text-white transition-colors shrink-0">
                    <Scale className="w-5 h-5" />
                  </div>
                  <div className="text-right">
                    <span className="text-[10px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full bg-neutral-100 border border-neutral-200 text-neutral-700 font-cinzel">
                      Civil Side
                    </span>
                  </div>
                </div>

                <h3 className="text-lg sm:text-xl font-serif font-semibold text-black mb-1 group-hover:text-neutral-900 transition-colors">
                  {pa.title}
                </h3>
                <div className="text-xs sm:text-sm font-medium text-neutral-500 mb-3">
                  {pa.subtitle}
                </div>

                <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed mb-4 font-normal">
                  {pa.description}
                </p>

                {/* Statutory Scope */}
                <div className="mb-4 space-y-1.5">
                  <div className="text-[11px] font-semibold uppercase tracking-wider text-neutral-500 font-cinzel">
                    Governing Acts & Statutes:
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {pa.statutes.map((st, idx) => (
                      <span
                        key={idx}
                        className="text-[11px] px-2.5 py-0.5 rounded bg-neutral-100 border border-neutral-200 text-neutral-700 font-medium"
                      >
                        {st}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Highlights Checklist */}
                <div className="space-y-2 mb-6">
                  <div className="text-[11px] font-semibold uppercase tracking-wider text-neutral-500 font-cinzel">
                    Key Legal Interventions:
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-neutral-700 font-normal">
                    {pa.highlights.map((h, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-black mt-0.5 shrink-0" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom CTA */}
              <div className="pt-4 border-t border-neutral-100 flex items-center justify-between">
                <span className="text-[11px] text-neutral-500 font-medium uppercase tracking-wider font-cinzel">
                  High Court & Civil Courts
                </span>
                <button
                  onClick={onOpenAppointment}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-black text-white font-medium text-xs hover:bg-neutral-800 transition-all shadow-xs active:scale-95"
                >
                  <span>Consult Matter</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* WHY CIVIL ADVOCACY REQUIRES SPECIALIST COUNSEL */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="bg-neutral-950 text-white rounded-2xl p-6 sm:p-10 border border-neutral-800 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            <div className="lg:col-span-5 space-y-3">
              <div className="text-[11px] sm:text-xs font-semibold uppercase tracking-widest text-neutral-400 font-cinzel">
                Procedural Caveat
              </div>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white leading-tight">
                Why Precision Pleadings Make or Break Civil Suits
              </h2>
              <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed font-normal">
                In Indian civil jurisprudence, a party cannot travel beyond their pleadings (Order 6 Rule 2 CPC). Any oversight in framing the plaint or written statement at the trial court cannot easily be remedied at the High Court appellate stage.
              </p>
            </div>

            <div className="lg:col-span-7 space-y-3 text-xs sm:text-sm text-neutral-200">
              <div className="p-4 rounded-xl bg-neutral-900 border border-neutral-800 space-y-1.5">
                <strong className="text-white block font-serif text-base font-semibold">Section 100 CPC Bar:</strong>
                Second Appeals before the High Court are entertained strictly on a "Substantial Question of Law" — not on mere appreciation of facts. Having experienced High Court counsel from day one protects your appellate remedies.
              </div>
              <div className="p-4 rounded-xl bg-neutral-900 border border-neutral-800 space-y-1.5">
                <strong className="text-white block font-serif text-base font-semibold">Limitation & Section 5:</strong>
                Civil appeals and revision petitions are bound by strict statutory limitation periods under the Limitation Act 1963. Prompt certified copy retrieval and swift filing are vital.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BOTTOM ACTION */}
      <section className="max-w-2xl mx-auto px-4 sm:px-6 text-center space-y-3">
        <h3 className="text-xl sm:text-2xl font-serif font-bold text-black">
          Require Legal Counsel for a Pending Civil Dispute?
        </h3>
        <p className="text-xs sm:text-sm text-neutral-600 font-normal">
          Consult directly with Advocate Jagadish Chandra Halder at Calcutta High Court Bar Association Room 15, Garia Chamber, or Kakdwip Chamber.
        </p>
        <div className="pt-2">
          <button
            onClick={onOpenAppointment}
            className="px-6 py-3 rounded-lg bg-black text-white font-semibold text-xs sm:text-sm tracking-wide shadow-md hover:bg-neutral-800 transition-all"
          >
            Book Civil Case Consultation
          </button>
        </div>
      </section>
    </div>
  );
}
