import React, { useState } from 'react';
import { 
  Phone, Mail, MapPin, Send, MessageSquare, Download, Clock, 
  ShieldAlert, CheckCircle2, Calendar, ExternalLink 
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
    <div className="space-y-16 pb-20 bg-white text-neutral-900 font-sans">
      {/* HEADER BANNER */}
      <section className="relative py-14 bg-neutral-50 border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl space-y-2.5">
            <div className="text-[11px] sm:text-xs font-semibold uppercase tracking-widest text-neutral-500 font-cinzel">
              Get in Touch • Direct Counsel
            </div>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-black tracking-tight leading-tight">
              Contact & Schedule Consultation
            </h1>
            <p className="text-sm sm:text-base font-serif italic text-neutral-600">
              Connect directly with Advocate Jagadish Chandra Halder at High Court Bar Room 15, Garia, or Kakdwip.
            </p>
          </div>
        </div>
      </section>

      {/* QUICK ACTIONS BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
          {/* Phone Card */}
          <div className="bg-white rounded-2xl p-6 border border-neutral-200 shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3.5 mb-3">
                <div className="w-10 h-10 rounded-xl bg-neutral-100 border border-neutral-200 flex items-center justify-center text-black">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] font-semibold uppercase tracking-wider text-neutral-500 font-cinzel">Direct Phone</div>
                  <div className="text-base sm:text-lg font-serif font-bold text-black">{lawyerData.phoneFormatted}</div>
                </div>
              </div>
              <p className="text-xs sm:text-sm text-neutral-600 mb-5 leading-relaxed font-normal">
                Direct helpline for urgent inquiries, court date status, and appointment scheduling.
              </p>
            </div>
            <a
              href={`tel:+91${lawyerData.phone}`}
              className="w-full py-2.5 rounded-lg bg-black text-white hover:bg-neutral-800 text-xs sm:text-sm font-semibold text-center transition-all shadow-xs"
            >
              Call 9830243096
            </a>
          </div>

          {/* Email Card */}
          <div className="bg-white rounded-2xl p-6 border border-neutral-200 shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3.5 mb-3">
                <div className="w-10 h-10 rounded-xl bg-neutral-100 border border-neutral-200 flex items-center justify-center text-black">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="truncate">
                  <div className="text-[10px] font-semibold uppercase tracking-wider text-neutral-500 font-cinzel">Official Email</div>
                  <div className="text-xs sm:text-sm font-bold text-black truncate">{lawyerData.email}</div>
                </div>
              </div>
              <p className="text-xs sm:text-sm text-neutral-600 mb-5 leading-relaxed font-normal">
                Send soft copies of plaints, trial judgments, deeds, or writ drafts for preliminary review.
              </p>
            </div>
            <a
              href={`mailto:${lawyerData.email}`}
              className="w-full py-2.5 rounded-lg bg-neutral-100 hover:bg-neutral-200 text-black border border-neutral-300 text-xs sm:text-sm font-medium text-center transition-all truncate px-2"
            >
              Email Advocate
            </a>
          </div>

          {/* vCard Save Contact Card */}
          <div className="bg-white rounded-2xl p-6 border border-neutral-200 shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3.5 mb-3">
                <div className="w-10 h-10 rounded-xl bg-neutral-100 border border-neutral-200 flex items-center justify-center text-black">
                  <Download className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] font-semibold uppercase tracking-wider text-neutral-500 font-cinzel">Digital vCard</div>
                  <div className="text-sm sm:text-base font-serif font-bold text-black">Save to Phone Book</div>
                </div>
              </div>
              <p className="text-xs sm:text-sm text-neutral-600 mb-5 leading-relaxed font-normal">
                Download Advocate Jagadish Chandra Halder's verified contact profile directly to your phone.
              </p>
            </div>
            <button
              onClick={() => downloadVCard(lawyerData)}
              className="w-full py-2.5 rounded-lg bg-neutral-100 hover:bg-black hover:text-white border border-neutral-300 text-black font-medium text-xs sm:text-sm text-center transition-all"
            >
              Download vCard (.vcf)
            </button>
          </div>
        </div>
      </section>

      {/* FORM & CHAMBER CONTACTS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Column: Interactive Form */}
          <div className="lg:col-span-7 bg-white rounded-2xl p-6 sm:p-8 border border-neutral-200 shadow-xs">
            <div className="border-b border-neutral-200 pb-4 mb-6">
              <div className="text-[11px] sm:text-xs font-semibold uppercase tracking-widest text-neutral-500 font-cinzel">
                Online Consultation Request
              </div>
              <h2 className="text-xl sm:text-2xl font-serif font-bold text-black mt-1">
                Schedule Chamber Appointment
              </h2>
              <p className="text-xs sm:text-sm text-neutral-500 mt-1 font-normal">
                Please provide case details to arrange a consultation at your preferred chamber.
              </p>
            </div>

            {submitted ? (
              <div className="py-10 text-center space-y-4">
                <div className="w-14 h-14 mx-auto rounded-full bg-neutral-100 border border-neutral-300 flex items-center justify-center text-black">
                  <CheckCircle2 className="w-7 h-7" />
                </div>
                <h3 className="text-lg sm:text-xl font-serif font-bold text-black">
                  Consultation Request Dispatched!
                </h3>
                <p className="text-xs sm:text-sm text-neutral-600 max-w-sm mx-auto leading-relaxed">
                  Your inquiry has been generated and dispatched. Advocate Jagadish Chandra Halder's office will review the schedule and confirm your consultation shortly.
                </p>
                <div className="pt-3">
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-6 py-2.5 rounded-lg bg-black text-white font-medium text-xs sm:text-sm hover:bg-neutral-800"
                  >
                    Submit Another Query
                  </button>
                </div>
              </div>
            ) : (
              <form className="space-y-4 text-xs sm:text-sm">
                
                {/* Chamber Picker */}
                <div>
                  <label className="block text-xs sm:text-sm font-semibold text-neutral-800 mb-1.5">
                    Select Consultation Chamber *
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                    {lawyerData.chambers.map((chamber) => (
                      <label
                        key={chamber.id}
                        className={`cursor-pointer border rounded-xl p-3 flex flex-col transition-all ${
                          formData.chamber === chamber.id
                            ? 'border-black bg-neutral-100 text-black shadow-xs font-semibold'
                            : 'border-neutral-200 bg-white text-neutral-600 hover:border-neutral-400'
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
                        <span className="text-[10px] text-neutral-500 font-normal mt-0.5">{chamber.badge}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Name & Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs sm:text-sm font-semibold text-neutral-800 mb-1.5">Your Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="e.g. Ramesh Chandra Mondal"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full bg-neutral-50 border border-neutral-300 rounded-lg px-3.5 py-2.5 text-black placeholder-neutral-400 focus:outline-none focus:border-black text-xs sm:text-sm font-normal"
                    />
                  </div>
                  <div>
                    <label className="block text-xs sm:text-sm font-semibold text-neutral-800 mb-1.5">Contact Phone *</label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      placeholder="e.g. 98302XXXXX"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full bg-neutral-50 border border-neutral-300 rounded-lg px-3.5 py-2.5 text-black placeholder-neutral-400 focus:outline-none focus:border-black text-xs sm:text-sm font-normal"
                    />
                  </div>
                </div>

                {/* Email & Date */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs sm:text-sm font-semibold text-neutral-800 mb-1.5">Email Address</label>
                    <input
                      type="email"
                      name="email"
                      placeholder="your.email@gmail.com"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full bg-neutral-50 border border-neutral-300 rounded-lg px-3.5 py-2.5 text-black placeholder-neutral-400 focus:outline-none focus:border-black text-xs sm:text-sm font-normal"
                    />
                  </div>
                  <div>
                    <label className="block text-xs sm:text-sm font-semibold text-neutral-800 mb-1.5 flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-black" />
                      Preferred Date
                    </label>
                    <input
                      type="date"
                      name="preferredDate"
                      value={formData.preferredDate}
                      onChange={handleChange}
                      className="w-full bg-neutral-50 border border-neutral-300 rounded-lg px-3.5 py-2.5 text-black focus:outline-none focus:border-black text-xs sm:text-sm font-normal"
                    />
                  </div>
                </div>

                {/* Case Subject */}
                <div>
                  <label className="block text-xs sm:text-sm font-semibold text-neutral-800 mb-1.5">Subject / Dispute Category *</label>
                  <select
                    name="caseType"
                    value={formData.caseType}
                    onChange={handleChange}
                    className="w-full bg-neutral-50 border border-neutral-300 rounded-lg px-3.5 py-2.5 text-black focus:outline-none focus:border-black text-xs sm:text-sm font-normal"
                  >
                    {lawyerData.practiceAreas.map(pa => (
                      <option key={pa.id} value={pa.title}>{pa.title} — {pa.subtitle}</option>
                    ))}
                    <option value="General Civil Consultation">General Civil Dispute / High Court Advisory</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs sm:text-sm font-semibold text-neutral-800 mb-1.5">Brief Description of Dispute</label>
                  <textarea
                    name="message"
                    rows="3"
                    placeholder="Provide land location, Dag/Khatian details (if applicable), court where suit is pending (Kakdwip Court, Alipore District Court, or Calcutta High Court), and urgency..."
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full bg-neutral-50 border border-neutral-300 rounded-lg p-3 text-black placeholder-neutral-400 focus:outline-none focus:border-black text-xs sm:text-sm font-normal"
                  ></textarea>
                </div>

                {/* Submit Buttons */}
                <div className="pt-2 flex flex-col sm:flex-row gap-3">
                  <button
                    type="button"
                    onClick={handleWhatsAppSend}
                    className="flex-1 py-2.5 px-4 rounded-lg bg-neutral-900 hover:bg-black text-white font-medium text-xs sm:text-sm flex items-center justify-center gap-2 shadow-xs transition-all active:scale-95"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Send via WhatsApp</span>
                  </button>

                  <button
                    type="button"
                    onClick={handleEmailSend}
                    className="flex-1 py-2.5 px-4 rounded-lg bg-black text-white font-medium text-xs sm:text-sm flex items-center justify-center gap-2 shadow-xs hover:bg-neutral-800 transition-all active:scale-95"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send via Email</span>
                  </button>
                </div>

                <div className="text-[11px] text-neutral-500 text-center pt-1">
                  🔒 Information shared is treated with strict professional confidentiality under the Advocates Act.
                </div>
              </form>
            )}
          </div>

          {/* Right Column: All 3 Chamber Cards with Maps */}
          <div className="lg:col-span-5 space-y-4">
            <h3 className="font-serif font-bold text-lg sm:text-xl text-black">
              Official Chamber Addresses
            </h3>

            {lawyerData.chambers.map((chamber) => (
              <div
                key={chamber.id}
                className="bg-white rounded-2xl p-5 border border-neutral-200 space-y-2 hover:border-black transition-colors shadow-xs"
              >
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-semibold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-neutral-100 text-black border border-neutral-200 font-cinzel">
                    {chamber.badge}
                  </span>
                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                      chamber.address + ', ' + chamber.city
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-neutral-700 hover:text-black hover:underline flex items-center gap-1 font-medium"
                  >
                    <span>View Map</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>

                <h4 className="font-serif font-semibold text-base text-black">
                  {chamber.name}
                </h4>

                <p className="text-xs sm:text-sm text-neutral-600 flex items-start gap-2 leading-relaxed font-normal">
                  <MapPin className="w-4 h-4 text-black shrink-0 mt-0.5" />
                  <span>{chamber.address}, <strong>{chamber.city}</strong></span>
                </p>

                <p className="text-xs text-neutral-500 flex items-start gap-2 font-normal">
                  <Clock className="w-4 h-4 text-black shrink-0 mt-0.5" />
                  <span>{chamber.timings}</span>
                </p>
              </div>
            ))}

            {/* Emergency Injunction Notice */}
            <div className="p-4 rounded-2xl bg-neutral-100 border border-neutral-200 text-xs sm:text-sm text-neutral-800 space-y-1.5 shadow-xs">
              <div className="flex items-center gap-2 font-serif font-semibold text-black text-sm">
                <ShieldAlert className="w-4 h-4" />
                Urgent Interim Injunctions & Stay Matters
              </div>
              <p className="leading-relaxed text-neutral-600 font-normal">
                If your property is under imminent threat of demolition, illegal third-party construction, or dispossession, please call <a href={`tel:+91${lawyerData.phone}`} className="font-semibold underline text-black">9830243096</a> immediately for urgent Order 39 motion in trial court or Vacation/Regular Bench mentions in Calcutta High Court.
              </p>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
