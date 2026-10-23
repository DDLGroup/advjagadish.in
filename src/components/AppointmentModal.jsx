import React, { useState } from 'react';
import { X, Calendar, MapPin, MessageSquare, Mail, CheckCircle2 } from 'lucide-react';
import { lawyerData } from '../data/lawyerData';

export default function AppointmentModal({ isOpen, onClose, preselectedChamber = null }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    chamber: preselectedChamber || 'highcourt',
    caseType: 'Property & Title Suit',
    preferredDate: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const selectedChamberObj = lawyerData.chambers.find(c => c.id === formData.chamber) || lawyerData.chambers[0];

  const generateWhatsAppMessage = () => {
    const text = `*LEGAL CONSULTATION REQUEST*\n\n` +
      `*Name:* ${formData.name || 'Not provided'}\n` +
      `*Phone:* ${formData.phone || 'Not provided'}\n` +
      `*Email:* ${formData.email || 'Not provided'}\n` +
      `*Preferred Chamber:* ${selectedChamberObj.name} (${selectedChamberObj.address})\n` +
      `*Matter Type:* ${formData.caseType}\n` +
      `*Preferred Date:* ${formData.preferredDate || 'Earliest available'}\n\n` +
      `*Case Summary:* ${formData.message || 'Seeking legal advisory and document verification.'}`;
    return encodeURIComponent(text);
  };

  const handleWhatsAppSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) {
      alert('Please provide your Name and Phone Number.');
      return;
    }
    const url = `https://wa.me/91${lawyerData.phone}?text=${generateWhatsAppMessage()}`;
    window.open(url, '_blank');
    setSubmitted(true);
  };

  const handleEmailSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) {
      alert('Please provide your Name and Phone Number.');
      return;
    }
    const subject = encodeURIComponent(`Consultation Request: ${formData.name} - ${formData.caseType}`);
    const body = encodeURIComponent(
      `Respected Advocate Jagadish Chandra Halder,\n\n` +
      `I would like to request an appointment for legal consultation at your ${selectedChamberObj.name}.\n\n` +
      `Client Details:\n` +
      `- Full Name: ${formData.name}\n` +
      `- Phone: ${formData.phone}\n` +
      `- Email: ${formData.email}\n` +
      `- Matter: ${formData.caseType}\n` +
      `- Preferred Date: ${formData.preferredDate}\n\n` +
      `Brief Description of Dispute:\n${formData.message}\n\n` +
      `Thank you.\n${formData.name}`
    );
    window.location.href = `mailto:${lawyerData.email}?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-xl bg-white border border-neutral-300 rounded-2xl shadow-2xl p-5 sm:p-7 text-neutral-800 max-h-[92vh] overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-lg text-neutral-400 hover:text-black hover:bg-neutral-100 transition-colors"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="mb-5 pb-3 border-b border-neutral-200">
          <div className="text-xs font-semibold uppercase tracking-wider text-neutral-500 font-cinzel">
            Schedule Legal Appointment
          </div>
          <h3 className="text-xl sm:text-2xl font-serif font-bold text-black mt-1">
            Consultation with Adv. Jagadish Chandra Halder
          </h3>
          <p className="text-xs text-neutral-500 mt-1">
            Advocate, High Court at Calcutta (Bar Association Room No. 15)
          </p>
        </div>

        {submitted ? (
          <div className="py-8 text-center space-y-4">
            <div className="w-14 h-14 mx-auto rounded-full bg-neutral-100 border border-neutral-300 flex items-center justify-center text-black">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h4 className="text-lg font-serif font-bold text-black">Consultation Request Dispatched</h4>
            <p className="text-xs sm:text-sm text-neutral-600 max-w-md mx-auto">
              Your inquiry has been generated. Advocate Jagadish Chandra Halder's office will review your request and get back to you shortly.
            </p>
            <div className="pt-3">
              <button
                onClick={() => { setSubmitted(false); onClose(); }}
                className="px-6 py-2 rounded-lg bg-black text-white font-semibold text-xs sm:text-sm hover:bg-neutral-800"
              >
                Close Window
              </button>
            </div>
          </div>
        ) : (
          <form className="space-y-4 text-xs sm:text-sm">
            {/* Preferred Chamber Selection */}
            <div>
              <label className="block text-xs font-medium text-neutral-700 mb-1.5 flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-black" />
                Select Preferred Consultation Chamber *
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                {lawyerData.chambers.map((chamber) => (
                  <label
                    key={chamber.id}
                    className={`cursor-pointer border rounded-xl p-2.5 flex flex-col transition-all ${
                      formData.chamber === chamber.id
                        ? 'border-black bg-neutral-100 text-black shadow-sm font-semibold'
                        : 'border-neutral-200 bg-white text-neutral-600 hover:border-neutral-300'
                    }`}
                  >
                    <input
                      type="radio"
                      name="chamber"
                      value={chamber.id}
                      checked={formData.chamber === chamber.id}
                      onChange={handleChange}
                      className="sr-only"
                    />
                    <span className="font-semibold text-xs text-black">{chamber.name}</span>
                    <span className="text-[11px] text-neutral-500 mt-0.5">{chamber.badge}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Client Name & Phone */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-medium text-neutral-700 mb-1">Full Name *</label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="e.g. Subir Mukherjee"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-neutral-50 border border-neutral-300 rounded-lg px-3 py-2 text-black placeholder-neutral-400 focus:outline-none focus:border-black text-xs sm:text-sm"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-neutral-700 mb-1">Phone Number *</label>
                <input
                  type="tel"
                  name="phone"
                  required
                  placeholder="e.g. 98302XXXXX"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full bg-neutral-50 border border-neutral-300 rounded-lg px-3 py-2 text-black placeholder-neutral-400 focus:outline-none focus:border-black text-xs sm:text-sm"
                />
              </div>
            </div>

            {/* Email & Date */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-medium text-neutral-700 mb-1">Email Address</label>
                <input
                  type="email"
                  name="email"
                  placeholder="your.email@gmail.com"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-neutral-50 border border-neutral-300 rounded-lg px-3 py-2 text-black placeholder-neutral-400 focus:outline-none focus:border-black text-xs sm:text-sm"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-neutral-700 mb-1 flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5 text-black" />
                  Preferred Consultation Date
                </label>
                <input
                  type="date"
                  name="preferredDate"
                  value={formData.preferredDate}
                  onChange={handleChange}
                  className="w-full bg-neutral-50 border border-neutral-300 rounded-lg px-3 py-2 text-black focus:outline-none focus:border-black text-xs sm:text-sm"
                />
              </div>
            </div>

            {/* Case Type */}
            <div>
              <label className="block text-xs font-medium text-neutral-700 mb-1">Subject / Practice Area *</label>
              <select
                name="caseType"
                value={formData.caseType}
                onChange={handleChange}
                className="w-full bg-neutral-50 border border-neutral-300 rounded-lg px-3 py-2 text-black focus:outline-none focus:border-black text-xs sm:text-sm"
              >
                {lawyerData.practiceAreas.map(pa => (
                  <option key={pa.id} value={pa.title}>{pa.title} — {pa.subtitle}</option>
                ))}
                <option value="General Civil Consultation">Other Civil Dispute / High Court Advisory</option>
              </select>
            </div>

            {/* Case Details */}
            <div>
              <label className="block text-xs font-medium text-neutral-700 mb-1">Brief Facts of the Case (Optional)</label>
              <textarea
                name="message"
                rows="3"
                placeholder="Briefly state property location (e.g. South 24 Parganas, Kolkata), whether any suit is pending in Kakdwip Court / District Court / High Court, or if urgent stay is required..."
                value={formData.message}
                onChange={handleChange}
                className="w-full bg-neutral-50 border border-neutral-300 rounded-lg p-3 text-black placeholder-neutral-400 focus:outline-none focus:border-black text-xs sm:text-sm"
              ></textarea>
            </div>

            {/* Two Dispatch Actions */}
            <div className="pt-2 flex flex-col sm:flex-row gap-2.5">
              <button
                type="button"
                onClick={handleWhatsAppSubmit}
                className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-neutral-900 hover:bg-black text-white font-semibold transition-all shadow-sm active:scale-98"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Send via WhatsApp</span>
              </button>

              <button
                type="button"
                onClick={handleEmailSubmit}
                className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-black hover:bg-neutral-800 text-white font-bold transition-all shadow-sm active:scale-98"
              >
                <Mail className="w-4 h-4" />
                <span>Send via Email</span>
              </button>
            </div>

            <div className="text-center pt-1 text-[11px] text-neutral-500">
              Direct Chamber Helpline: <a href={`tel:+91${lawyerData.phone}`} className="text-black font-semibold underline">{lawyerData.phoneFormatted}</a>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
