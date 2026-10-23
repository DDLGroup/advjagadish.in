import React, { useState } from 'react';
import { 
  Phone, Mail, MapPin, Send, MessageSquare, Download, Clock, 
  ShieldAlert, CheckCircle2, Calendar, Scale, ExternalLink 
} from 'lucide-react';
import { lawyerData } from '../data/lawyerData';
import { downloadVCard } from '../utils/vcard';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    chamber: 'highcourt',
    caseType: 'Property & Title Suit',
    preferredDate: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const selectedChamberObj = lawyerData.chambers.find(c => c.id === formData.chamber) || lawyerData.chambers[0];

  const handleWhatsAppSend = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) {
      alert('Please fill in your Name and Phone Number.');
      return;
    }
    const message = `*CIVIL LEGAL INQUIRY*\n\n` +
      `*Client Name:* ${formData.name}\n` +
      `*Contact Phone:* ${formData.phone}\n` +
      `*Email:* ${formData.email || 'N/A'}\n` +
      `*Preferred Chamber:* ${selectedChamberObj.name}\n` +
      `*Dispute Category:* ${formData.caseType}\n` +
      `*Preferred Date:* ${formData.preferredDate || 'Earliest available'}\n\n` +
      `*Brief Facts:* ${formData.message || 'Seeking legal advisory and document verification.'}`;

    const url = `https://wa.me/91${lawyerData.phone}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
    setSubmitted(true);
  };

  const handleEmailSend = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) {
      alert('Please fill in your Name and Phone Number.');
      return;
    }
    const subject = encodeURIComponent(`Legal Consultation: ${formData.name} - ${formData.caseType}`);
    const body = encodeURIComponent(
      `Respected Advocate Jagadish Chandra Halder,\n\n` +
      `I am requesting a legal consultation regarding a civil dispute.\n\n` +
      `Client Details:\n` +
      `- Name: ${formData.name}\n` +
      `- Phone: ${formData.phone}\n` +
      `- Email: ${formData.email}\n` +
      `- Preferred Chamber: ${selectedChamberObj.name} (${selectedChamberObj.address})\n` +
      `- Matter Type: ${formData.caseType}\n` +
      `- Preferred Date: ${formData.preferredDate}\n\n` +
      `Dispute Summary:\n${formData.message}\n\n` +
      `Kind regards,\n${formData.name}`
    );
    window.location.href = `mailto:${lawyerData.email}?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  return (
    <div className="space-y-16 pb-16">
      {/* HEADER BANNER */}
      <section className="relative py-16 bg-[#0a1224] border-b border-gold-500/20 court-pattern">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl space-y-3">
            <div className="text-xs font-semibold uppercase tracking-widest text-gold-400 font-cinzel">
              Get in Touch • Direct Counsel
            </div>
            <h1 className="text-3xl sm:text-5xl font-serif font-bold text-white">
              Contact & Schedule Consultation
            </h1>
            <p className="text-sm sm:text-base text-slate-300 font-serif italic">
              Connect directly with Advocate Jagadish Chandra Halder at High Court Bar Room 15, Garia, or Kakdwip.
            </p>
          </div>
        </div>
      </section>

      {/* QUICK ACTIONS BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          {/* Phone Card */}
          <div className="bg-dark-card rounded-2xl p-6 border border-gold-500/25 flex flex-col justify-between">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-xl bg-gold-500/10 border border-gold-500/30 flex items-center justify-center text-gold-400">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <div className="text-[11px] text-slate-400 font-cinzel uppercase font-semibold">Direct Phone</div>
                <div className="text-lg font-serif font-bold text-white">{lawyerData.phoneFormatted}</div>
              </div>
            </div>
            <p className="text-xs text-slate-400 mb-4">
              Direct line for urgent inquiries, court date status, and appointment scheduling.
            </p>
            <a
              href={`tel:+91${lawyerData.phone}`}
              className="w-full py-2.5 rounded-lg bg-navy-800 hover:bg-gold-500 hover:text-navy-950 text-gold-300 border border-gold-500/30 text-xs font-semibold text-center transition-all"
            >
              Call 9830243096
            </a>
          </div>

          {/* Email Card */}
          <div className="bg-dark-card rounded-2xl p-6 border border-gold-500/25 flex flex-col justify-between">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-xl bg-gold-500/10 border border-gold-500/30 flex items-center justify-center text-gold-400">
                <Mail className="w-5 h-5" />
              </div>
              <div className="truncate">
                <div className="text-[11px] text-slate-400 font-cinzel uppercase font-semibold">Official Email</div>
                <div className="text-sm font-semibold text-white truncate">{lawyerData.email}</div>
              </div>
            </div>
            <p className="text-xs text-slate-400 mb-4">
              Send soft copies of plaints, trial judgments, deeds, or writ drafts for preliminary review.
            </p>
            <a
              href={`mailto:${lawyerData.email}`}
              className="w-full py-2.5 rounded-lg bg-navy-800 hover:bg-gold-500 hover:text-navy-950 text-gold-300 border border-gold-500/30 text-xs font-semibold text-center transition-all truncate px-2"
            >
              Email Advocate
            </a>
          </div>

          {/* vCard Save Contact Card */}
          <div className="bg-dark-card rounded-2xl p-6 border border-gold-500/25 flex flex-col justify-between">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-xl bg-gold-500/10 border border-gold-500/30 flex items-center justify-center text-gold-400">
                <Download className="w-5 h-5" />
              </div>
              <div>
                <div className="text-[11px] text-slate-400 font-cinzel uppercase font-semibold">Digital vCard</div>
                <div className="text-sm font-serif font-bold text-white">Save to Phone Book</div>
              </div>
            </div>
            <p className="text-xs text-slate-400 mb-4">
              Download Advocate Jagadish Chandra Halder's full verified contact profile directly to your mobile device.
            </p>
            <button
              onClick={() => downloadVCard(lawyerData)}
              className="w-full py-2.5 rounded-lg bg-gold-gradient text-navy-950 font-bold text-xs text-center transition-all hover:opacity-95"
            >
              Download vCard (.vcf)
            </button>
          </div>
        </div>
      </section>

      {/* FORM & CHAMBER CONTACTS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Interactive Form */}
          <div className="lg:col-span-7 bg-dark-card rounded-3xl p-6 sm:p-8 border border-gold-500/30 shadow-2xl">
            <div className="border-b border-gold-500/20 pb-4 mb-6">
              <div className="text-xs font-semibold uppercase tracking-widest text-gold-400 font-cinzel">
                Online Consultation Request
              </div>
              <h2 className="text-2xl font-serif font-bold text-white mt-1">
                Schedule Chamber Appointment
              </h2>
              <p className="text-xs text-slate-400 mt-1">
                Please provide case details to arrange a consultation at your preferred chamber.
              </p>
            </div>

            {submitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-16 h-16 mx-auto rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400">
                  <CheckCircle2 className="w-9 h-9" />
                </div>
                <h3 className="text-xl font-serif font-bold text-white">
                  Consultation Request Dispatched!
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 max-w-md mx-auto">
                  Your inquiry has been generated and dispatched. Advocate Jagadish Chandra Halder's office will review the schedule and confirm your consultation shortly.
                </p>
                <div className="pt-4">
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-6 py-2.5 rounded-xl bg-gold-gradient text-navy-950 font-bold text-xs sm:text-sm"
                  >
                    Submit Another Query
                  </button>
                </div>
              </div>
            ) : (
              <form className="space-y-4 text-xs sm:text-sm">
                
                {/* Chamber Picker */}
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1.5">
                    Select Consultation Chamber *
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                    {lawyerData.chambers.map((chamber) => (
                      <label
                        key={chamber.id}
                        className={`cursor-pointer border rounded-xl p-3 flex flex-col transition-all ${
                          formData.chamber === chamber.id
                            ? 'border-gold-500 bg-gold-500/15 text-white shadow-sm'
                            : 'border-slate-700 bg-navy-900/40 text-slate-400 hover:border-slate-600'
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
                        <span className="font-semibold text-xs text-slate-100">{chamber.name}</span>
                        <span className="text-[10px] text-gold-400/90 mt-0.5">{chamber.badge}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Name & Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1">Your Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="e.g. Ramesh Chandra Mondal"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full bg-slate-900/80 border border-slate-700 rounded-xl px-3.5 py-2.5 text-white placeholder-slate-500 focus:outline-none focus:border-gold-400 text-xs sm:text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1">Contact Phone *</label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      placeholder="e.g. 98302XXXXX"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full bg-slate-900/80 border border-slate-700 rounded-xl px-3.5 py-2.5 text-white placeholder-slate-500 focus:outline-none focus:border-gold-400 text-xs sm:text-sm"
                    />
                  </div>
                </div>

                {/* Email & Date */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1">Email Address</label>
                    <input
                      type="email"
                      name="email"
                      placeholder="your.email@gmail.com"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full bg-slate-900/80 border border-slate-700 rounded-xl px-3.5 py-2.5 text-white placeholder-slate-500 focus:outline-none focus:border-gold-400 text-xs sm:text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1 flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-gold-400" />
                      Preferred Consultation Date
                    </label>
                    <input
                      type="date"
                      name="preferredDate"
                      value={formData.preferredDate}
                      onChange={handleChange}
                      className="w-full bg-slate-900/80 border border-slate-700 rounded-xl px-3.5 py-2.5 text-white focus:outline-none focus:border-gold-400 text-xs sm:text-sm"
                    />
                  </div>
                </div>

                {/* Case Subject */}
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">Subject / Dispute Category *</label>
                  <select
                    name="caseType"
                    value={formData.caseType}
                    onChange={handleChange}
                    className="w-full bg-slate-900/80 border border-slate-700 rounded-xl px-3.5 py-2.5 text-white focus:outline-none focus:border-gold-400 text-xs sm:text-sm"
                  >
                    {lawyerData.practiceAreas.map(pa => (
                      <option key={pa.id} value={pa.title}>{pa.title} — {pa.subtitle}</option>
                    ))}
                    <option value="General Civil Consultation">General Civil Dispute / High Court Advisory</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">Brief Description of Dispute</label>
                  <textarea
                    name="message"
                    rows="4"
                    placeholder="Provide land location, Dag/Khatian details (if applicable), court where suit is pending (Kakdwip Court, Alipore District Court, or Calcutta High Court), and urgency (e.g. ad-interim stay required)..."
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full bg-slate-900/80 border border-slate-700 rounded-xl p-3 text-white placeholder-slate-500 focus:outline-none focus:border-gold-400 text-xs sm:text-sm"
                  ></textarea>
                </div>

                {/* Submit Buttons */}
                <div className="pt-2 flex flex-col sm:flex-row gap-3">
                  <button
                    type="button"
                    onClick={handleWhatsAppSend}
                    className="flex-1 py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-md transition-all active:scale-95"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Send via WhatsApp</span>
                  </button>

                  <button
                    type="button"
                    onClick={handleEmailSend}
                    className="flex-1 py-3 px-4 rounded-xl bg-gold-gradient text-navy-950 font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-md hover:opacity-95 transition-all active:scale-95"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send via Email</span>
                  </button>
                </div>

                <div className="text-[11px] text-slate-400 text-center pt-2">
                  🔒 Information shared is treated with strict professional confidentiality under the Advocates Act.
                </div>
              </form>
            )}
          </div>

          {/* Right Column: All 3 Chamber Cards with Maps */}
          <div className="lg:col-span-5 space-y-4">
            <h3 className="font-serif font-bold text-xl text-white">
              Official Chamber Addresses
            </h3>

            {lawyerData.chambers.map((chamber) => (
              <div
                key={chamber.id}
                className="bg-navy-900/80 rounded-2xl p-5 border border-slate-800 space-y-2.5 hover:border-gold-500/40 transition-colors"
              >
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-gold-500/10 text-gold-300 border border-gold-500/20 font-cinzel">
                    {chamber.badge}
                  </span>
                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                      chamber.address + ', ' + chamber.city
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-gold-400 hover:underline flex items-center gap-1"
                  >
                    <span>View Map</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>

                <h4 className="font-serif font-bold text-base text-white">
                  {chamber.name}
                </h4>

                <p className="text-xs text-slate-300 flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-gold-400 shrink-0 mt-0.5" />
                  <span>{chamber.address}, {chamber.city}</span>
                </p>

                <p className="text-xs text-slate-400 flex items-start gap-2">
                  <Clock className="w-4 h-4 text-gold-400 shrink-0 mt-0.5" />
                  <span>{chamber.timings}</span>
                </p>
              </div>
            ))}

            {/* Emergency Injunction Notice */}
            <div className="p-4 rounded-2xl bg-amber-950/30 border border-amber-600/40 text-xs text-amber-200 space-y-1.5">
              <div className="flex items-center gap-2 font-bold font-serif text-amber-300 text-sm">
                <ShieldAlert className="w-4 h-4" />
                Urgent Interim Injunctions & Stay Matters
              </div>
              <p className="leading-relaxed">
                If your property is under imminent threat of demolition, illegal third-party construction, or dispossession, please call <a href={`tel:+91${lawyerData.phone}`} className="font-bold underline text-white">9830243096</a> immediately for urgent Order 39 motion in trial court or Vacation/Regular Bench mentions in Calcutta High Court.
              </p>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
