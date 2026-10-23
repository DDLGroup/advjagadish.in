import React, { useState, useEffect } from 'react';
import { Phone, Mail, MapPin, Menu, X, Calendar, Scale, ChevronRight } from 'lucide-react';
import { lawyerData } from '../data/lawyerData';

export default function Navbar({ activePage, setActivePage, onOpenAppointment }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Advocate' },
    { id: 'practice-areas', label: 'Practice Areas' },
    { id: 'chambers', label: 'Chambers & Offices' },
    { id: 'contact', label: 'Contact & Appointments' },
  ];

  const handleNavClick = (pageId) => {
    setActivePage(pageId);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    window.location.hash = pageId === 'home' ? '' : pageId;
  };

  return (
    <header className="sticky top-0 z-40 w-full transition-all duration-300">
      {/* Top Banner with Credentials & Quick Contact */}
      <div className="bg-navy-950 border-b border-gold-500/20 text-slate-300 text-xs py-2 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-2">
          <div className="flex items-center gap-3 text-[11px] sm:text-xs">
            <span className="flex items-center gap-1.5 text-gold-400 font-semibold tracking-wide">
              <Scale className="w-3.5 h-3.5" />
              High Court, Calcutta
            </span>
            <span className="hidden sm:inline text-slate-600">|</span>
            <span className="hidden sm:inline text-slate-400">
              Bar Association, Room No. 15 (2nd Floor)
            </span>
          </div>

          <div className="flex items-center gap-4 text-[11px] sm:text-xs">
            <a
              href={`tel:+91${lawyerData.phone}`}
              className="flex items-center gap-1.5 hover:text-gold-300 transition-colors"
            >
              <Phone className="w-3 h-3 text-gold-400" />
              <span>{lawyerData.phoneFormatted}</span>
            </a>
            <span className="text-slate-600">|</span>
            <a
              href={`mailto:${lawyerData.email}`}
              className="flex items-center gap-1.5 hover:text-gold-300 transition-colors"
            >
              <Mail className="w-3 h-3 text-gold-400" />
              <span className="hidden md:inline">{lawyerData.email}</span>
              <span className="md:hidden">Email</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div
        className={`w-full transition-all duration-300 ${
          isScrolled
            ? 'bg-[#080e1b]/95 backdrop-blur-md shadow-2xl border-b border-gold-500/20 py-3'
            : 'bg-[#0a1224]/90 backdrop-blur-sm border-b border-slate-800/80 py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
          {/* Logo & Advocate Branding */}
          <button
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-3 group text-left"
          >
            <div className="relative w-11 h-11 sm:w-13 sm:h-13 rounded-full border-2 border-gold-500/60 p-0.5 bg-navy-900 shadow-md group-hover:border-gold-400 transition-colors overflow-hidden shrink-0">
              <img
                src="./logo.png"
                alt="Advocate Jagadish Chandra Halder Crest"
                className="w-full h-full object-cover rounded-full"
                onError={(e) => {
                  e.target.style.display = 'none';
                }}
              />
            </div>
            <div>
              <div className="font-serif font-bold text-base sm:text-xl tracking-tight text-white group-hover:text-gold-300 transition-colors">
                JAGADISH CHANDRA HALDER
              </div>
              <div className="text-[10px] sm:text-xs tracking-wider uppercase text-gold-400 font-cinzel font-medium">
                Advocate • High Court, Calcutta
              </div>
            </div>
          </button>

          {/* Desktop Nav Items */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`relative px-3.5 py-2 rounded-lg text-xs font-semibold tracking-wide transition-all ${
                  activePage === link.id
                    ? 'text-gold-300 bg-gold-500/10'
                    : 'text-slate-300 hover:text-white hover:bg-slate-800/50'
                }`}
              >
                {link.label}
                {activePage === link.id && (
                  <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-gold-gradient rounded-full" />
                )}
              </button>
            ))}
          </nav>

          {/* Action Button & Mobile Menu Toggle */}
          <div className="flex items-center gap-2 sm:gap-3">
            <button
              onClick={onOpenAppointment}
              className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-xl bg-gold-gradient text-navy-950 font-bold text-xs tracking-wide hover:opacity-95 shadow-md hover:shadow-gold-500/25 transition-all active:scale-95"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Consultation</span>
            </button>

            {/* Mobile Menu Hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg bg-navy-800 border border-slate-700 text-slate-300 hover:text-white"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0a1224] border-b border-gold-500/30 px-4 py-6 shadow-2xl animate-fadeIn">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`flex items-center justify-between p-3 rounded-xl text-sm font-semibold transition-all ${
                  activePage === link.id
                    ? 'text-gold-300 bg-gold-500/15 border border-gold-500/30'
                    : 'text-slate-200 hover:bg-slate-800/60'
                }`}
              >
                <span>{link.label}</span>
                <ChevronRight className="w-4 h-4 text-gold-400" />
              </button>
            ))}

            <div className="pt-4 border-t border-slate-800 flex flex-col gap-3 mt-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenAppointment();
                }}
                className="w-full py-3 rounded-xl bg-gold-gradient text-navy-950 font-bold text-sm tracking-wide text-center shadow-lg"
              >
                Schedule Consultation
              </button>

              <div className="p-3 rounded-xl bg-navy-900 border border-slate-800 text-xs text-slate-300 space-y-1.5">
                <div className="text-gold-400 font-semibold font-cinzel">Direct Chamber Contact:</div>
                <div className="flex items-center justify-between">
                  <span>Helpline:</span>
                  <a href={`tel:+91${lawyerData.phone}`} className="text-white font-bold underline">
                    {lawyerData.phoneFormatted}
                  </a>
                </div>
                <div className="flex items-center justify-between">
                  <span>Chamber:</span>
                  <span className="text-slate-200">High Court Bar Rm 15</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
