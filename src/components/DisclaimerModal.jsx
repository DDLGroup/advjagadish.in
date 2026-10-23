import React, { useState, useEffect } from 'react';
import { Scale, ShieldCheck, X } from 'lucide-react';

export default function DisclaimerModal({ forceOpen, onClose }) {
  const [isOpen, setIsOpen] = useState(false);

  // ONLY open when explicitly requested (e.g., clicking footer disclaimer link).
  // First load popup notification is completely disabled as requested.
  useEffect(() => {
    if (forceOpen) {
      setIsOpen(true);
    } else {
      setIsOpen(false);
    }
  }, [forceOpen]);

  const handleClose = () => {
    setIsOpen(false);
    if (onClose) onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-2xl bg-white border border-neutral-300 rounded-2xl p-6 sm:p-8 shadow-2xl text-neutral-800">
        {/* Close icon */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 p-2 rounded-lg text-neutral-400 hover:text-black hover:bg-neutral-100 transition-colors"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Crest & Title */}
        <div className="flex items-center gap-3 border-b border-neutral-200 pb-4 mb-5">
          <div className="w-12 h-12 rounded-xl bg-neutral-100 border border-neutral-300 flex items-center justify-center text-neutral-900">
            <Scale className="w-6 h-6" />
          </div>
          <div>
            <div className="text-xs tracking-widest uppercase font-semibold text-neutral-500 font-cinzel">
              Statutory Compliance Notice
            </div>
            <h2 className="text-xl sm:text-2xl font-serif text-black font-bold">
              Bar Council of India Disclaimer
            </h2>
          </div>
        </div>

        {/* Content */}
        <div className="space-y-3.5 text-xs sm:text-sm text-neutral-600 leading-relaxed font-sans max-h-[50vh] overflow-y-auto pr-2">
          <p>
            As per the rules of the <strong className="text-black">Bar Council of India</strong>, advocates are strictly prohibited from soliciting work or advertising their legal services in any manner.
          </p>
          <p>
            By proceeding to access this website (<span className="text-black font-semibold font-mono">advjagadish.in</span>), the user acknowledges and confirms the following:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-neutral-700">
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
        <div className="mt-6 pt-4 border-t border-neutral-200 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2 text-xs text-neutral-500">
            <ShieldCheck className="w-4 h-4 text-black shrink-0" />
            <span>Compliant with Rule 36 of Bar Council of India</span>
          </div>
          <button
            onClick={handleClose}
            className="w-full sm:w-auto px-6 py-2.5 rounded-lg bg-black text-white font-semibold hover:bg-neutral-800 text-xs sm:text-sm transition-all shadow-md active:scale-95"
          >
            I Understand & Close
          </button>
        </div>
      </div>
    </div>
  );
}
