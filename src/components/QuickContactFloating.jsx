import React from 'react';
import { Phone, MessageSquare, Calendar } from 'lucide-react';
import { lawyerData } from '../data/lawyerData';

export default function QuickContactFloating({ onOpenAppointment }) {
  const whatsappUrl = `https://wa.me/91${lawyerData.phone}?text=${encodeURIComponent(
    "Hello Advocate Jagadish Chandra Halder, I am seeking legal consultation regarding a civil matter / High Court advisory."
  )}`;

  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-2.5">
      {/* Appointment trigger pill */}
      <button
        onClick={onOpenAppointment}
        className="hidden sm:flex items-center gap-2 bg-white text-black border border-neutral-300 hover:border-black px-4 py-2 rounded-full shadow-lg text-xs font-semibold tracking-wide transition-all duration-300 hover:scale-105"
      >
        <Calendar className="w-4 h-4 text-black" />
        <span>Book Consultation</span>
      </button>

      <div className="flex items-center gap-2">
        {/* Call Button */}
        <a
          href={`tel:+91${lawyerData.phone}`}
          className="group relative w-12 h-12 rounded-full bg-white border-2 border-black flex items-center justify-center text-black shadow-lg hover:bg-black hover:text-white transition-all duration-300 hover:scale-110"
          aria-label="Call Chamber"
          title="Call Advocate Jagadish Chandra Halder"
        >
          <Phone className="w-5 h-5 group-hover:rotate-12 transition-transform" />
          <span className="sr-only">Call Advocate Jagadish Chandra Halder</span>
        </a>

        {/* WhatsApp Button */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="relative w-13 h-13 p-3.5 rounded-full bg-neutral-900 border border-neutral-700 text-white shadow-xl hover:bg-black transition-all duration-300 hover:scale-110 flex items-center justify-center"
          aria-label="Chat on WhatsApp"
          title="WhatsApp Advocate Jagadish Chandra Halder"
        >
          {/* Subtle pulse */}
          <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-neutral-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-neutral-200"></span>
          </span>
          <MessageSquare className="w-6 h-6" />
        </a>
      </div>
    </div>
  );
}
