import React, { useState } from "react";
import { X, Send, CheckCircle2, MessageCircle, Phone, Sparkles } from "lucide-react";
import { AGENCY_INFO } from "../data/agencyData";

export default function QuoteModal({ isOpen, onClose, initialService = "Website Development" }) {
  const [formData, setFormData] = useState({
    fullName: "",
    businessName: "",
    phoneNumber: "",
    emailAddress: "",
    city: "Hyderabad",
    businessCategory: "Retail / Local Business",
    requiredService: initialService,
    projectBudget: "₹5,000 – ₹10,000 (Starter / Business)",
    projectDescription: ""
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrorMsg("");

    if (!formData.fullName.trim()) {
      setErrorMsg("Please enter your Full Name.");
      return;
    }
    if (!formData.phoneNumber.trim() || formData.phoneNumber.trim().length < 10) {
      setErrorMsg("Please enter a valid 10-digit Phone / WhatsApp number.");
      return;
    }

    setLoading(true);

    // Save lead to local storage (production safeguard so inquiry is never lost)
    try {
      const existingInquiries = JSON.parse(localStorage.getItem("praveen_digital_enquiries") || "[]");
      const newEntry = {
        id: Date.now(),
        date: new Date().toISOString(),
        ...formData
      };
      existingInquiries.push(newEntry);
      localStorage.setItem("praveen_digital_enquiries", JSON.stringify(existingInquiries));
    } catch (err) {
      console.warn("Storage warning:", err);
    }

    // Format WhatsApp message
    const formattedMsg = `*NEW WEBSITE & DIGITAL ENQUIRY - PRAVEEN DIGITAL SOLUTIONS*%0A%0A` +
      `👤 *Name:* ${encodeURIComponent(formData.fullName)}%0A` +
      `🏢 *Business:* ${encodeURIComponent(formData.businessName || "N/A")}%0A` +
      `📱 *Phone:* ${encodeURIComponent(formData.phoneNumber)}%0A` +
      `✉️ *Email:* ${encodeURIComponent(formData.emailAddress || "N/A")}%0A` +
      `📍 *City:* ${encodeURIComponent(formData.city)}%0A` +
      `🏷️ *Category:* ${encodeURIComponent(formData.businessCategory)}%0A` +
      `⚡ *Required Service:* ${encodeURIComponent(formData.requiredService)}%0A` +
      `💰 *Budget:* ${encodeURIComponent(formData.projectBudget)}%0A` +
      `📝 *Details:* ${encodeURIComponent(formData.projectDescription || "Discuss on call")}`;

    const waLink = `https://wa.me/${AGENCY_INFO.whatsappNumber}?text=${formattedMsg}`;

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      // Auto open WhatsApp in new tab for immediate connection
      window.open(waLink, "_blank", "noopener,noreferrer");
    }, 600);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fade-in overflow-y-auto">
      <div className="relative w-full max-w-2xl bg-[#0b152e] border border-blue-500/30 rounded-2xl shadow-2xl p-6 md:p-8 my-8 text-slate-100">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white transition"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div>
            <div className="flex items-center space-x-2 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-1">
              <Sparkles className="w-4 h-4 text-cyan-400" />
              <span>Free Consultation & Quotation</span>
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
              Request Your Custom Website Quote
            </h3>
            <p className="text-slate-400 text-sm mb-6">
              Fill in your project details below. Akula Praveen will review your requirements and respond with a customized quotation and strategy plan.
            </p>

            {errorMsg && (
              <div className="mb-4 p-3 bg-red-950/80 border border-red-500/50 rounded-lg text-red-200 text-xs">
                {errorMsg}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">
                    Full Name <span className="text-blue-400">*</span>
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    required
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="e.g. Ramesh Reddy"
                    className="w-full px-3.5 py-2.5 rounded-lg bg-slate-900/90 border border-slate-700 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-sm text-white placeholder-slate-500 outline-none transition"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">
                    Business / Company Name
                  </label>
                  <input
                    type="text"
                    name="businessName"
                    value={formData.businessName}
                    onChange={handleChange}
                    placeholder="e.g. Hyderabad Dental Clinic"
                    className="w-full px-3.5 py-2.5 rounded-lg bg-slate-900/90 border border-slate-700 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-sm text-white placeholder-slate-500 outline-none transition"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">
                    Phone / WhatsApp Number <span className="text-blue-400">*</span>
                  </label>
                  <input
                    type="tel"
                    name="phoneNumber"
                    required
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    placeholder="+91 98765 43210"
                    className="w-full px-3.5 py-2.5 rounded-lg bg-slate-900/90 border border-slate-700 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-sm text-white placeholder-slate-500 outline-none transition"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="emailAddress"
                    value={formData.emailAddress}
                    onChange={handleChange}
                    placeholder="name@example.com"
                    className="w-full px-3.5 py-2.5 rounded-lg bg-slate-900/90 border border-slate-700 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-sm text-white placeholder-slate-500 outline-none transition"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">
                    City / Location <span className="text-blue-400">*</span>
                  </label>
                  <input
                    type="text"
                    name="city"
                    required
                    value={formData.city}
                    onChange={handleChange}
                    placeholder="Hyderabad, Warangal, Karimnagar..."
                    className="w-full px-3.5 py-2.5 rounded-lg bg-slate-900/90 border border-slate-700 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-sm text-white placeholder-slate-500 outline-none transition"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">
                    Business Category
                  </label>
                  <select
                    name="businessCategory"
                    value={formData.businessCategory}
                    onChange={handleChange}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-slate-900/90 border border-slate-700 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-sm text-white outline-none transition"
                  >
                    <option value="Ambulance / Healthcare">Ambulance / Healthcare</option>
                    <option value="Hospital / Clinic / Doctor">Hospital / Clinic / Doctor</option>
                    <option value="Salon / Beauty / Spa">Salon / Beauty / Spa</option>
                    <option value="Car Travels / Taxi Service">Car Travels / Taxi Service</option>
                    <option value="Travel Agency / Tours">Travel Agency / Tours</option>
                    <option value="Restaurant / Cafe / Hotel">Restaurant / Cafe / Hotel</option>
                    <option value="Coaching / Institute / School">Coaching / Institute / School</option>
                    <option value="Real Estate / Construction">Real Estate / Construction</option>
                    <option value="Gym / Fitness Centre">Gym / Fitness Centre</option>
                    <option value="Retail / Local Shop">Retail / Local Shop</option>
                    <option value="Interior Design / Architecture">Interior Design / Architecture</option>
                    <option value="Home Services (Electrical, Plumbing)">Home Services (Electrical, Plumbing)</option>
                    <option value="Startup / Tech / Consultant">Startup / Tech / Consultant</option>
                    <option value="Other Business">Other Business</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">
                    Required Service <span className="text-blue-400">*</span>
                  </label>
                  <select
                    name="requiredService"
                    value={formData.requiredService}
                    onChange={handleChange}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-slate-900/90 border border-slate-700 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-sm text-white outline-none transition"
                  >
                    <option value="Website Development">Website Development (New Site)</option>
                    <option value="Website Redesign">Website Redesign (Upgrade Existing)</option>
                    <option value="Google Business Profile">Google Business Profile Setup & SEO</option>
                    <option value="Google Ads (PPC)">Google Ads (Lead Generation Ads)</option>
                    <option value="SEO Services">Monthly SEO Services (Rank on Google)</option>
                    <option value="Complete Digital Growth Package">Complete Digital Growth Package</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">
                    Project Budget
                  </label>
                  <select
                    name="projectBudget"
                    value={formData.projectBudget}
                    onChange={handleChange}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-slate-900/90 border border-slate-700 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-sm text-white outline-none transition"
                  >
                    <option value="₹5,000 – ₹8,999 (Starter Plan)">₹5,000 – ₹8,999 (Starter Plan)</option>
                    <option value="₹8,999 – ₹14,999 (Business Plan)">₹8,999 – ₹14,999 (Business Plan)</option>
                    <option value="₹14,999 – ₹25,000+ (Advanced / Custom)">₹14,999 – ₹25,000+ (Advanced / Custom)</option>
                    <option value="Google Services Only (₹2,000 - ₹5,000)">Google Services Only (₹2,000 - ₹5,000)</option>
                    <option value="Flexible / Need Consultation">Flexible / Need Consultation</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">
                  Project Description / Specific Requirements
                </label>
                <textarea
                  name="projectDescription"
                  rows={3}
                  value={formData.projectDescription}
                  onChange={handleChange}
                  placeholder="Tell us about the pages you need, reference websites you like, or specific business goals..."
                  className="w-full px-3.5 py-2.5 rounded-lg bg-slate-900/90 border border-slate-700 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-sm text-white placeholder-slate-500 outline-none transition resize-none"
                ></textarea>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white font-semibold text-sm shadow-lg shadow-blue-600/30 transition flex items-center justify-center space-x-2 disabled:opacity-70"
                >
                  {loading ? (
                    <span>Processing Enquiry...</span>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Send My Enquiry & Connect on WhatsApp</span>
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        ) : (
          <div className="text-center py-8">
            <div className="w-16 h-16 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mx-auto mb-4 border border-emerald-500/40">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">
              Thank You, {formData.fullName}!
            </h3>
            <p className="text-slate-300 text-sm max-w-md mx-auto mb-6">
              Your project enquiry has been submitted. A WhatsApp chat with Praveen Digital Solutions has been triggered with your requirements.
            </p>

            <div className="bg-slate-900/80 p-4 rounded-xl border border-slate-800 text-left text-xs text-slate-400 space-y-1.5 mb-6">
              <p><strong className="text-slate-200">Required Service:</strong> {formData.requiredService}</p>
              <p><strong className="text-slate-200">Budget Range:</strong> {formData.projectBudget}</p>
              <p><strong className="text-slate-200">Location:</strong> {formData.city}</p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href={AGENCY_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-5 py-2.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-medium text-xs space-x-2 transition"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Open WhatsApp Chat Directly</span>
              </a>
              <a
                href={AGENCY_INFO.callUrl}
                className="inline-flex items-center justify-center px-5 py-2.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-white font-medium text-xs space-x-2 transition"
              >
                <Phone className="w-4 h-4" />
                <span>Call {AGENCY_INFO.phoneFormatted}</span>
              </a>
              <button
                onClick={onClose}
                className="px-5 py-2.5 rounded-lg bg-slate-800/60 hover:bg-slate-800 text-slate-300 hover:text-white text-xs font-medium transition"
              >
                Close Window
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
