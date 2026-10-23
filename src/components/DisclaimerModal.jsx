import React, { useState, useEffect } from 'react';
import { Scale, ShieldCheck, AlertCircle } from 'lucide-react';

export default function DisclaimerModal({ forceOpen, onClose }) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (forceOpen) {
      setIsOpen(true);
      return;
    }
    const acknowledged = localStorage.getItem('adv_jagadish_bci_disclaimer');
    if (!acknowledged) {
      setIsOpen(true);
    }
  }, [forceOpen]);

  const handleAccept = () => {
    localStorage.setItem('adv_jagadish_bci_disclaimer', 'true');
    setIsOpen(false);
    if (onClose) onClose();
  };

  const handleDecline = () => {
    window.location.href = "https://www.google.com";
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy-950/85 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-2xl bg-[#0d162b] border border-gold-500/40 rounded-2xl p-6 sm:p-8 shadow-2xl text-slate-200">
        {/* Crest & Title */}
        <div className="flex items-center gap-3 border-b border-gold-500/20 pb-4 mb-5">
          <div className="w-12 h-12 rounded-xl bg-gold-500/10 border border-gold-500/30 flex items-center justify-center text-gold-400">
            <Scale className="w-6 h-6" />
          </div>
          <div>
            <div className="text-xs tracking-widest uppercase font-semibold text-gold-400 font-cinzel">
              Statutory Compliance Notice
            </div>
            <h2 className="text-xl sm:text-2xl font-serif text-white font-semibold">
              Bar Council of India Disclaimer
            </h2>
          </div>
        </div>

        {/* Content */}
        <div className="space-y-3.5 text-xs sm:text-sm text-slate-300 leading-relaxed font-sans max-h-[50vh] overflow-y-auto pr-2">
          <p>
            As per the rules of the <strong className="text-gold-300">Bar Council of India</strong>, advocates are strictly prohibited from soliciting work or advertising their legal services in any manner.
          </p>
          <p>
            By proceeding to access this website (<span className="text-gold-300 font-mono">advjagadish.in</span>), the user acknowledges and confirms the following:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-slate-300">
            <li>
              The user wishes to gain information about <strong>Advocate Jagadish Chandra Halder</strong> (High Court, Calcutta) for their own personal information and legal awareness.
            </li>
            <li>
              There has been no advertisement, personal communication, solicitation, invitation, or inducement of any sort whatsoever from Advocate Jagadish Chandra Halder or his chamber associates.
            </li>
            <li>
              The information provided under this website is solely available at the user's request for informational purposes only and should not be construed as legal advice.
            </li>
            <li>
              No advocate-client relationship is created simply by accessing the website, viewing content, or transmitting information through contact forms.
            </li>
          </ul>
        </div>

        {/* Action Buttons */}
        <div className="mt-6 pt-4 border-t border-slate-700/60 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2 text-xs text-slate-400">
            <ShieldCheck className="w-4 h-4 text-gold-400 shrink-0" />
            <span>Compliant with Rule 36 of Bar Council of India</span>
          </div>
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={handleDecline}
              className="flex-1 sm:flex-none px-4 py-2.5 rounded-lg border border-slate-600 text-slate-300 hover:bg-slate-800 text-xs sm:text-sm transition-colors font-medium"
            >
              Decline & Exit
            </button>
            <button
              onClick={handleAccept}
              className="flex-1 sm:flex-none px-6 py-2.5 rounded-lg bg-gold-gradient text-navy-950 font-semibold hover:opacity-95 text-xs sm:text-sm transition-all shadow-md hover:shadow-gold-500/20 active:scale-95"
            >
              I Accept & Proceed
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
