import React from 'react';
import { MapPin, Clock, Calendar, Phone, MessageSquare, ExternalLink, Compass } from 'lucide-react';
import { lawyerData } from '../data/lawyerData';

export default function Chambers({ onOpenAppointment }) {
  return (
    <div className="space-y-20 pb-20 bg-white text-neutral-900 font-sans">
      {/* HEADER BANNER - Light Theme */}
      <section className="relative py-20 bg-neutral-50 border-b border-neutral-200 court-pattern">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-4xl space-y-4">
            <div className="text-xs sm:text-sm font-extrabold uppercase tracking-widest text-neutral-600 font-cinzel">
              Consultation Venues & Offices
            </div>
            <h1 className="text-4xl sm:text-6xl font-serif font-black text-black tracking-tight leading-[1.1]">
              Chambers & Legal Offices
            </h1>
            <p className="text-xl sm:text-2xl font-serif text-neutral-800 font-bold italic">
              Three strategically located chambers for legal consultation across Kolkata and South 24-Parganas.
            </p>
          </div>
        </div>
      </section>

      {/* THREE CHAMBER DETAILED CARDS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 space-y-12">
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
              className="bg-white rounded-3xl p-8 sm:p-12 border-2 border-neutral-200 shadow-md relative overflow-hidden"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
                
                {/* Left: Chamber Details */}
                <div className="lg:col-span-7 space-y-6">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="text-xs sm:text-sm font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full bg-neutral-100 text-black border-2 border-neutral-300 font-cinzel">
                      Chamber {index + 1} • {chamber.badge}
                    </span>
                    <span className="text-xs sm:text-sm text-neutral-600 font-bold">
                      {chamber.subtitle}
                    </span>
                  </div>

                  <h2 className="text-3xl sm:text-4xl font-serif font-black text-black">
                    {chamber.name}
                  </h2>

                  <div className="space-y-4 text-base sm:text-lg text-neutral-800">
                    <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-neutral-50 border-2 border-neutral-200">
                      <MapPin className="w-6 h-6 text-black shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-black block font-bold text-lg">Full Address:</strong>
                        <span className="leading-relaxed">{chamber.address}</span>
                        <div className="text-neutral-900 font-extrabold mt-1">{chamber.city}</div>
                      </div>
                    </div>

                    <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-neutral-50 border-2 border-neutral-200">
                      <Compass className="w-6 h-6 text-black shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-black block font-bold text-lg">Prominent Landmark:</strong>
                        <span className="leading-relaxed">{chamber.landmark}</span>
                      </div>
                    </div>

                    <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-neutral-50 border-2 border-neutral-200">
                      <Clock className="w-6 h-6 text-black shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-black block font-bold text-lg">Consultation Hours:</strong>
                        <span>{chamber.timings}</span>
                        <div className="text-neutral-600 text-sm font-medium mt-1">Availability: {chamber.days}</div>
                      </div>
                    </div>
                  </div>

                  {/* Chamber specific advisory note */}
                  <div className="text-sm sm:text-base text-neutral-700 bg-neutral-50 p-4 rounded-2xl border-2 border-neutral-200 leading-relaxed font-normal">
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
                <div className="lg:col-span-5 bg-neutral-50 rounded-3xl p-8 border-2 border-neutral-200 space-y-6">
                  <div className="border-b border-neutral-200 pb-4">
                    <h3 className="font-serif font-black text-2xl text-black">
                      Connect with this Chamber
                    </h3>
                    <p className="text-sm font-bold text-neutral-600 mt-1">
                      Advocate Jagadish Chandra Halder
                    </p>
                  </div>

                  <div className="space-y-3 text-sm sm:text-base">
                    <div className="flex items-center justify-between py-2 border-b border-neutral-200">
                      <span className="text-neutral-600 font-medium">Helpline Phone:</span>
                      <a href={`tel:+91${chamber.phone}`} className="text-black font-black hover:underline text-base sm:text-lg">
                        +91 {chamber.phone}
                      </a>
                    </div>
                    <div className="flex items-center justify-between py-2 border-b border-neutral-200">
                      <span className="text-neutral-600 font-medium">Consultation Type:</span>
                      <span className="text-neutral-900 font-bold">In-Person Review</span>
                    </div>
                    <div className="flex items-center justify-between py-2">
                      <span className="text-neutral-600 font-medium">Prior Notice:</span>
                      <span className="text-black font-extrabold">Appointment Advised</span>
                    </div>
                  </div>

                  <div className="space-y-3 pt-2">
                    <button
                      onClick={() => onOpenAppointment(chamber.id)}
                      className="w-full py-4 rounded-xl bg-black text-white font-extrabold text-sm sm:text-base shadow-md hover:bg-neutral-800 transition-all text-center flex items-center justify-center gap-2 active:scale-95"
                    >
                      <Calendar className="w-5 h-5" />
                      <span>Book at {chamber.name.split('(')[0]}</span>
                    </button>

                    <div className="grid grid-cols-2 gap-3">
                      <a
                        href={whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="py-3 px-4 rounded-xl bg-neutral-900 hover:bg-black text-white font-bold text-sm flex items-center justify-center gap-2 transition-all text-center"
                      >
                        <MessageSquare className="w-4 h-4" />
                        <span>WhatsApp</span>
                      </a>

                      <a
                        href={mapUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="py-3 px-4 rounded-xl bg-white hover:bg-neutral-100 text-black border-2 border-neutral-300 font-bold text-sm flex items-center justify-center gap-2 transition-all text-center shadow-sm"
                      >
                        <ExternalLink className="w-4 h-4" />
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
        <div className="p-8 rounded-3xl bg-neutral-50 border-2 border-neutral-200 text-base sm:text-lg text-neutral-800 space-y-3 shadow-sm leading-relaxed font-normal">
          <div className="font-serif font-black text-xl sm:text-2xl text-black">
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
