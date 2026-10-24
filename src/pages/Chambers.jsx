import React from 'react';
import { MapPin, Clock, Calendar, Phone, MessageSquare, ExternalLink, Compass } from 'lucide-react';
import { lawyerData } from '../data/lawyerData';

export default function Chambers({ onOpenAppointment }) {
  return (
    <div className="space-y-16 pb-20 bg-white text-neutral-900 font-sans">
      {/* HEADER BANNER */}
      <section className="relative py-14 bg-neutral-50 border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl space-y-2.5">
            <div className="text-[11px] sm:text-xs font-semibold uppercase tracking-widest text-neutral-500 font-cinzel">
              Consultation Venues & Offices
            </div>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-black tracking-tight leading-tight">
              Chambers & Legal Offices
            </h1>
            <p className="text-sm sm:text-base font-serif italic text-neutral-600">
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
              className="bg-white rounded-2xl p-6 sm:p-10 border border-neutral-200 shadow-xs relative overflow-hidden"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                
                {/* Left: Chamber Details */}
                <div className="lg:col-span-7 space-y-5">
                  <div className="flex flex-wrap items-center gap-2.5">
                    <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full bg-neutral-100 text-black border border-neutral-200 font-cinzel">
                      Chamber {index + 1} • {chamber.badge}
                    </span>
                    <span className="text-xs text-neutral-500 font-medium">
                      {chamber.subtitle}
                    </span>
                  </div>

                  <h2 className="text-xl sm:text-2xl font-serif font-bold text-black">
                    {chamber.name}
                  </h2>

                  <div className="space-y-3 text-xs sm:text-sm text-neutral-700">
                    <div className="flex items-start gap-3 p-3.5 rounded-xl bg-neutral-50 border border-neutral-200">
                      <MapPin className="w-4 h-4 text-black shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-black block font-semibold text-sm">Full Address:</strong>
                        <span className="leading-relaxed">{chamber.address}</span>
                        <div className="text-neutral-900 font-medium mt-0.5">{chamber.city}</div>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 p-3.5 rounded-xl bg-neutral-50 border border-neutral-200">
                      <Compass className="w-4 h-4 text-black shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-black block font-semibold text-sm">Prominent Landmark:</strong>
                        <span className="leading-relaxed">{chamber.landmark}</span>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 p-3.5 rounded-xl bg-neutral-50 border border-neutral-200">
                      <Clock className="w-4 h-4 text-black shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-black block font-semibold text-sm">Consultation Hours:</strong>
                        <span>{chamber.timings}</span>
                        <div className="text-neutral-500 text-xs font-normal mt-0.5">Availability: {chamber.days}</div>
                      </div>
                    </div>
                  </div>

                  {/* Chamber specific advisory note */}
                  <div className="text-xs sm:text-sm text-neutral-600 bg-neutral-50 p-3.5 rounded-xl border border-neutral-200 leading-relaxed font-normal">
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
                <div className="lg:col-span-5 bg-neutral-50 rounded-2xl p-6 border border-neutral-200 space-y-4">
                  <div className="border-b border-neutral-200 pb-3">
                    <h3 className="font-serif font-bold text-lg text-black">
                      Connect with this Chamber
                    </h3>
                    <p className="text-xs text-neutral-500 mt-0.5 font-medium">
                      Advocate Jagadish Chandra Halder
                    </p>
                  </div>

                  <div className="space-y-2.5 text-xs sm:text-sm">
                    <div className="flex items-center justify-between py-1.5 border-b border-neutral-200">
                      <span className="text-neutral-500 font-normal">Helpline Phone:</span>
                      <a href={`tel:+91${chamber.phone}`} className="text-black font-semibold hover:underline">
                        +91 {chamber.phone}
                      </a>
                    </div>
                    <div className="flex items-center justify-between py-1.5 border-b border-neutral-200">
                      <span className="text-neutral-500 font-normal">Consultation Type:</span>
                      <span className="text-neutral-900 font-medium">In-Person Review</span>
                    </div>
                    <div className="flex items-center justify-between py-1.5">
                      <span className="text-neutral-500 font-normal">Prior Notice:</span>
                      <span className="text-black font-semibold">Appointment Advised</span>
                    </div>
                  </div>

                  <div className="space-y-2.5 pt-2">
                    <button
                      onClick={() => onOpenAppointment(chamber.id)}
                      className="w-full py-2.5 rounded-lg bg-black text-white font-medium text-xs sm:text-sm shadow-xs hover:bg-neutral-800 transition-all text-center flex items-center justify-center gap-2 active:scale-95"
                    >
                      <Calendar className="w-4 h-4" />
                      <span>Book at {chamber.name.split('(')[0]}</span>
                    </button>

                    <div className="grid grid-cols-2 gap-2.5">
                      <a
                        href={whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="py-2 px-3 rounded-lg bg-neutral-900 hover:bg-black text-white font-medium text-xs flex items-center justify-center gap-1.5 transition-all text-center"
                      >
                        <MessageSquare className="w-3.5 h-3.5" />
                        <span>WhatsApp</span>
                      </a>

                      <a
                        href={mapUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="py-2 px-3 rounded-lg bg-white hover:bg-neutral-100 text-black border border-neutral-300 font-medium text-xs flex items-center justify-center gap-1.5 transition-all text-center shadow-xs"
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
      <section className="max-w-3xl mx-auto px-4 sm:px-6 text-center space-y-3">
        <div className="p-6 rounded-2xl bg-neutral-50 border border-neutral-200 text-xs sm:text-sm text-neutral-700 space-y-2 shadow-xs leading-relaxed font-normal">
          <div className="font-serif font-bold text-base sm:text-lg text-black">
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
