import React from 'react';
import { MapPin, Clock, Calendar, Phone, MessageSquare, ExternalLink, Scale, Landmark, Compass, CheckCircle } from 'lucide-react';
import { lawyerData } from '../data/lawyerData';

export default function Chambers({ onOpenAppointment }) {
  return (
    <div className="space-y-16 pb-16">
      {/* HEADER BANNER */}
      <section className="relative py-16 bg-[#0a1224] border-b border-gold-500/20 court-pattern">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl space-y-3">
            <div className="text-xs font-semibold uppercase tracking-widest text-gold-400 font-cinzel">
              Consultation Venues & Offices
            </div>
            <h1 className="text-3xl sm:text-5xl font-serif font-bold text-white">
              Chambers & Legal Offices
            </h1>
            <p className="text-sm sm:text-base text-slate-300 font-serif italic">
              Three strategically located chambers for legal consultation across Kolkata and South 24-Parganas.
            </p>
          </div>
        </div>
      </section>

      {/* THREE CHAMBER DETAILED CARDS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 space-y-10">
        {lawyerData.chambers.map((chamber, index) => {
          const mapUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
            chamber.address + ', ' + chamber.city
          )}`;
          const whatsappUrl = `https://wa.me/91${chamber.phone}?text=${encodeURIComponent(
            `Hello Advocate Jagadish Chandra Halder, I would like to schedule an appointment at your ${chamber.name}.`
          )}`;

          return (
            <div
              key={chamber.id}
              className="bg-dark-card rounded-3xl p-6 sm:p-10 border border-gold-500/30 shadow-2xl relative overflow-hidden"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                
                {/* Left: Chamber Details */}
                <div className="lg:col-span-7 space-y-5">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-gold-500/15 text-gold-300 border border-gold-500/30 font-cinzel">
                      Chamber {index + 1} • {chamber.badge}
                    </span>
                    <span className="text-xs text-slate-400 font-medium">
                      {chamber.subtitle}
                    </span>
                  </div>

                  <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white">
                    {chamber.name}
                  </h2>

                  <div className="space-y-3 text-xs sm:text-sm text-slate-300">
                    <div className="flex items-start gap-3 p-3 rounded-xl bg-navy-900/60 border border-slate-800">
                      <MapPin className="w-5 h-5 text-gold-400 shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-white block font-sans">Full Address:</strong>
                        <span>{chamber.address}</span>
                        <div className="text-gold-300/90 font-medium mt-0.5">{chamber.city}</div>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 p-3 rounded-xl bg-navy-900/60 border border-slate-800">
                      <Compass className="w-5 h-5 text-gold-400 shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-white block font-sans">Prominent Landmark:</strong>
                        <span>{chamber.landmark}</span>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 p-3 rounded-xl bg-navy-900/60 border border-slate-800">
                      <Clock className="w-5 h-5 text-gold-400 shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-white block font-sans">Consultation Hours:</strong>
                        <span>{chamber.timings}</span>
                        <div className="text-slate-400 text-xs mt-0.5">Availability: {chamber.days}</div>
                      </div>
                    </div>
                  </div>

                  {/* Chamber specific advisory note */}
                  <div className="text-xs text-slate-400 bg-navy-950/40 p-3 rounded-lg border border-slate-800">
                    {chamber.id === 'highcourt' && (
                      <p>
                        💡 <strong>High Court Note:</strong> Bar Association Room No. 15 is accessible during High Court sitting hours (10:30 AM to 4:30 PM). Suitable for discussing High Court filings, Second Appeals, Writ matters, and Urgent Interim mentions. Prior phone confirmation is recommended.
                      </p>
                    )}
                    {chamber.id === 'garia' && (
                      <p>
                        💡 <strong>Garia Note:</strong> Located conveniently in South Kolkata for evening consultations. Ideal for detailed case conferences, reviewing title deeds, and family partition discussions outside court hours.
                      </p>
                    )}
                    {chamber.id === 'kakdwip' && (
                      <p>
                        💡 <strong>Kakdwip Note:</strong> Situated right next to Kakdwip Court Complex in South 24-Parganas. Dedicated to trial court litigants, revenue hearings under WBLR Act, Bargadar disputes, and local civil suits.
                      </p>
                    )}
                  </div>
                </div>

                {/* Right: Actions, Map link & Booking */}
                <div className="lg:col-span-5 bg-navy-900/80 rounded-2xl p-6 border border-slate-700/80 space-y-5">
                  <div className="border-b border-slate-800 pb-3">
                    <h3 className="font-serif font-bold text-lg text-white">
                      Connect with this Chamber
                    </h3>
                    <p className="text-xs text-slate-400">
                      Advocate Jagadish Chandra Halder
                    </p>
                  </div>

                  <div className="space-y-2 text-xs">
                    <div className="flex items-center justify-between py-1.5 border-b border-slate-800">
                      <span className="text-slate-400">Helpline Phone:</span>
                      <a href={`tel:+91${chamber.phone}`} className="text-gold-300 font-bold hover:underline">
                        +91 {chamber.phone}
                      </a>
                    </div>
                    <div className="flex items-center justify-between py-1.5 border-b border-slate-800">
                      <span className="text-slate-400">Consultation Type:</span>
                      <span className="text-slate-200 font-medium">In-Person & Chamber Review</span>
                    </div>
                    <div className="flex items-center justify-between py-1.5">
                      <span className="text-slate-400">Prior Notice:</span>
                      <span className="text-emerald-400 font-semibold">Appointment Advised</span>
                    </div>
                  </div>

                  <div className="space-y-2.5 pt-2">
                    <button
                      onClick={() => onOpenAppointment(chamber.id)}
                      className="w-full py-3 rounded-xl bg-gold-gradient text-navy-950 font-bold text-xs sm:text-sm shadow-md hover:opacity-95 transition-all text-center flex items-center justify-center gap-2"
                    >
                      <Calendar className="w-4 h-4" />
                      <span>Book at {chamber.name.split('(')[0]}</span>
                    </button>

                    <div className="grid grid-cols-2 gap-2">
                      <a
                        href={whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="py-2.5 px-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs flex items-center justify-center gap-1.5 transition-all text-center"
                      >
                        <MessageSquare className="w-3.5 h-3.5" />
                        <span>WhatsApp</span>
                      </a>

                      <a
                        href={mapUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="py-2.5 px-3 rounded-xl bg-navy-800 hover:bg-navy-700 text-gold-300 border border-gold-500/30 font-semibold text-xs flex items-center justify-center gap-1.5 transition-all text-center"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                        <span>Google Map</span>
                      </a>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          );
        })}
      </section>

      {/* SUMMARY NOTE */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-4">
        <div className="p-6 rounded-2xl bg-navy-900 border border-slate-800 text-xs sm:text-sm text-slate-300 space-y-2">
          <div className="font-serif font-bold text-base text-gold-300">
            Need Guidance on Which Chamber to Visit?
          </div>
          <p>
            If your matter is an ongoing trial suit in Kakdwip Court or a rural South 24-Parganas land issue, consult at the <strong>Kakdwip Chamber</strong>. For South Kolkata residents and weekend case preparations, visit the <strong>Garia Chamber</strong>. For High Court appeals, Second Appeals, and Writ matters, visit <strong>Bar Association Room 15 at High Court, Calcutta</strong>.
          </p>
        </div>
      </section>
    </div>
  );
}
