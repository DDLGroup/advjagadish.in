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
        className="hidden sm:flex items-center gap-2 bg-[#0d162a]/95 text-gold-300 border border-gold-500/50 hover:border-gold-400 px-4 py-2 rounded-full shadow-xl hover:shadow-gold-500/20 backdrop-blur-md text-xs font-semibold tracking-wide transition-all duration-300 hover:scale-105"
      >
        <Calendar className="w-4 h-4 text-gold-400" />
        <span>Book Consultation</span>
      </button>

      <div className="flex items-center gap-2">
        {/* Call Button */}
        <a
          href={`tel:+91${lawyerData.phone}`}
          className="group relative w-12 h-12 rounded-full bg-navy-800 border border-gold-500/50 flex items-center justify-center text-gold-300 shadow-xl hover:bg-gold-500 hover:text-navy-950 transition-all duration-300 hover:scale-110"
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
          className="relative w-13 h-13 p-3.5 rounded-full bg-emerald-600 border border-emerald-400/40 text-white shadow-xl hover:bg-emerald-500 transition-all duration-300 hover:scale-110 flex items-center justify-center"
          aria-label="Chat on WhatsApp"
          title="WhatsApp Advocate Jagadish Chandra Halder"
        >
          {/* Pulsing ring indicator */}
          <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-300"></span>
          </span>
          <MessageSquare className="w-6 h-6" />
        </a>
      </div>
    </div>
  );
}
