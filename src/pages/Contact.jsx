import { 
  Phone, 
  Mail, 
  MapPin, 
  MessageCircle, 
  Send, 
  CheckCircle2, 
  Sparkles, 
  Clock, 
  ShieldCheck, 
  AlertCircle 
} from "lucide-react";
import { LinkedinIcon, InstagramIcon } from "../components/SocialIcons";
import { AGENCY_INFO } from "../data/agencyData";
import SEOHead from "../components/SEOHead";

export default function Contact() {
  const [formData, setFormData] = useState({
    fullName: "",
    businessName: "",
    phoneNumber: "",
    emailAddress: "",
    city: "Hyderabad",
    businessCategory: "Retail / Local Business",
    requiredService: "Website Development",
    projectBudget: "₹5,000 – ₹8,999 (Starter Plan)",
    projectDescription: ""
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

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

    // Save lead to local storage (production safeguard)
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

    // Format WhatsApp prefilled message
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
      window.open(waLink, "_blank", "noopener,noreferrer");
    }, 600);
  };

  return (
    <div className="w-full bg-[#070d1e] text-slate-100 pb-20">
      
      <SEOHead 
        title="Contact Us | Praveen Digital Solutions Hyderabad"
        description="Contact Akula Praveen Yadav at Praveen Digital Solutions. Phone: +91 9505164685, Email: akulapraveenkumar19@gmail.com. Hyderabad, Telangana."
      />

      {/* Hero Banner */}
      <section className="pt-16 pb-20 bg-navy-gradient border-b border-slate-800/80">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-blue-950/80 border border-blue-500/30 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <MessageCircle className="w-3.5 h-3.5" />
            <span>Direct Founder Communication</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            Let's Discuss Your Project & <br />
            <span className="text-gradient">Grow Your Business Online.</span>
          </h1>

          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Have a question, need a website quotation, or want to dominate Google Maps in Hyderabad? Get in touch with Akula Praveen Yadav today.
          </p>

        </div>
      </section>

      {/* Main Grid: Contact Details & Interactive Form */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Contact Details Column */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="bg-glass-card rounded-3xl p-8 border border-slate-800/80">
              <h2 className="text-2xl font-bold text-white mb-2">
                Business Information
              </h2>
              <p className="text-xs text-slate-400 mb-6 leading-relaxed">
                Connect directly with the founder for instant project estimates, technical consultations, and timeline reviews.
              </p>

              <div className="space-y-5 text-sm">
                
                {/* Business Name */}
                <div className="flex items-start space-x-3">
                  <div className="w-9 h-9 rounded-xl bg-blue-600/20 text-cyan-400 flex items-center justify-center shrink-0 border border-blue-500/30">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[11px] uppercase tracking-wider text-slate-400 font-semibold">
                      Business Name
                    </div>
                    <div className="font-bold text-white text-base">
                      {AGENCY_INFO.name}
                    </div>
                  </div>
                </div>

                {/* Founder */}
                <div className="flex items-start space-x-3">
                  <div className="w-9 h-9 rounded-xl bg-blue-600/20 text-cyan-400 flex items-center justify-center shrink-0 border border-blue-500/30">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[11px] uppercase tracking-wider text-slate-400 font-semibold">
                      Founder & Lead Developer
                    </div>
                    <div className="font-semibold text-white">
                      {AGENCY_INFO.founder}
                    </div>
                    <div className="text-xs text-cyan-400">
                      {AGENCY_INFO.role}
                    </div>
                  </div>
                </div>

                {/* Phone & WhatsApp */}
                <div className="flex items-start space-x-3">
                  <div className="w-9 h-9 rounded-xl bg-blue-600/20 text-cyan-400 flex items-center justify-center shrink-0 border border-blue-500/30">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[11px] uppercase tracking-wider text-slate-400 font-semibold">
                      Phone & WhatsApp
                    </div>
                    <div className="font-semibold text-white">
                      <a href={AGENCY_INFO.callUrl} className="hover:text-cyan-400 transition">
                        {AGENCY_INFO.phoneFormatted}
                      </a>
                    </div>
                    <div className="text-xs text-emerald-400">
                      <a href={AGENCY_INFO.whatsappUrl} target="_blank" rel="noopener noreferrer" className="hover:underline">
                        WhatsApp Active (Click to Chat)
                      </a>
                    </div>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start space-x-3">
                  <div className="w-9 h-9 rounded-xl bg-blue-600/20 text-cyan-400 flex items-center justify-center shrink-0 border border-blue-500/30">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[11px] uppercase tracking-wider text-slate-400 font-semibold">
                      Business Email
                    </div>
                    <a href={`mailto:${AGENCY_INFO.email}`} className="font-semibold text-white hover:text-cyan-400 transition break-all">
                      {AGENCY_INFO.email}
                    </a>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start space-x-3">
                  <div className="w-9 h-9 rounded-xl bg-blue-600/20 text-cyan-400 flex items-center justify-center shrink-0 border border-blue-500/30">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[11px] uppercase tracking-wider text-slate-400 font-semibold">
                      Location & Coverage
                    </div>
                    <div className="font-semibold text-white">
                      {AGENCY_INFO.location}
                    </div>
                    <div className="text-xs text-slate-400">
                      Serving All Telangana & Pan-India
                    </div>
                  </div>
                </div>

              </div>

              {/* Social Channels */}
              <div className="pt-6 mt-6 border-t border-slate-800/80">
                <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">
                  Connect on Social Media
                </div>
                <div className="flex items-center space-x-3 mb-4">
                  <a
                    href={AGENCY_INFO.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-1.5 px-3 py-2 rounded-xl bg-slate-900 border border-slate-700 text-blue-400 hover:text-white hover:border-blue-500 hover:bg-blue-600/20 text-xs font-medium transition"
                  >
                    <LinkedinIcon className="w-4 h-4" />
                    <span>LinkedIn</span>
                  </a>

                  <a
                    href={AGENCY_INFO.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-1.5 px-3 py-2 rounded-xl bg-slate-900 border border-slate-700 text-pink-400 hover:text-white hover:border-pink-500 hover:bg-pink-600/20 text-xs font-medium transition"
                  >
                    <InstagramIcon className="w-4 h-4" />
                    <span>Instagram ({AGENCY_INFO.instagramHandle})</span>
                  </a>
                </div>

                {/* Instagram QR Code Scan Box */}
                <div className="bg-slate-900/80 rounded-2xl p-3.5 border border-slate-700/80 flex items-center gap-3.5">
                  <img 
                    src="/images/instagram-qr.jpg" 
                    alt="Instagram QR @praveen.digital.solution" 
                    className="w-16 h-16 rounded-xl object-cover border border-slate-700 shrink-0 shadow"
                  />
                  <div>
                    <div className="text-[10px] text-pink-400 font-bold uppercase tracking-wider">Scan Instagram QR</div>
                    <div className="text-xs font-mono font-bold text-white">{AGENCY_INFO.instagramHandle}</div>
                    <a 
                      href={AGENCY_INFO.instagram} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-[11px] text-cyan-400 hover:text-cyan-300 font-semibold inline-flex items-center mt-0.5"
                    >
                      <span>Direct Profile Link →</span>
                    </a>
                  </div>
                </div>
              </div>

            </div>

            {/* Quick Response Promise */}
            <div className="bg-slate-900/60 p-5 rounded-2xl border border-slate-800 text-xs text-slate-300 flex items-start space-x-3">
              <Clock className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
              <div>
                <strong className="text-white block mb-0.5">Prompt Founder Response Guarantee</strong>
                WhatsApp and phone inquiries are addressed promptly within regular business hours (9:00 AM – 8:00 PM IST).
              </div>
            </div>

          </div>

          {/* Contact Form Column */}
          <div className="lg:col-span-7">
            <div className="bg-glass-card rounded-3xl p-8 sm:p-10 border border-blue-500/20 shadow-2xl relative">
              
              {!submitted ? (
                <div>
                  <div className="flex items-center space-x-2 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-1">
                    <Sparkles className="w-4 h-4" />
                    <span>Send Project Inquiry</span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-2">
                    Request a Customized Proposal
                  </h3>
                  <p className="text-slate-400 text-xs sm:text-sm mb-6">
                    Fill out the fields below. We will analyze your business requirements and provide an itemized quotation.
                  </p>

                  {errorMsg && (
                    <div className="mb-6 p-3 rounded-xl bg-red-950/80 border border-red-500/50 text-red-200 text-xs">
                      {errorMsg}
                    </div>
                  )}

                  <form onSubmit={handleSubmit} className="space-y-4">
                    
                    {/* 1. Full Name & 2. Business Name */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-medium text-slate-300 mb-1">
                          Full Name <span className="text-cyan-400">*</span>
                        </label>
                        <input
                          type="text"
                          name="fullName"
                          required
                          value={formData.fullName}
                          onChange={handleChange}
                          placeholder="Your Full Name"
                          className="w-full px-4 py-2.5 rounded-xl bg-slate-900/90 border border-slate-700 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 text-sm text-white placeholder-slate-500 outline-none transition"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-medium text-slate-300 mb-1">
                          Business Name
                        </label>
                        <input
                          type="text"
                          name="businessName"
                          value={formData.businessName}
                          onChange={handleChange}
                          placeholder="Your Company / Brand Name"
                          className="w-full px-4 py-2.5 rounded-xl bg-slate-900/90 border border-slate-700 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 text-sm text-white placeholder-slate-500 outline-none transition"
                        />
                      </div>
                    </div>

                    {/* 3. Phone Number & 4. Email Address */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-medium text-slate-300 mb-1">
                          Phone / WhatsApp Number <span className="text-cyan-400">*</span>
                        </label>
                        <input
                          type="tel"
                          name="phoneNumber"
                          required
                          value={formData.phoneNumber}
                          onChange={handleChange}
                          placeholder="+91 95051 64685"
                          className="w-full px-4 py-2.5 rounded-xl bg-slate-900/90 border border-slate-700 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 text-sm text-white placeholder-slate-500 outline-none transition"
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
                          placeholder="you@company.com"
                          className="w-full px-4 py-2.5 rounded-xl bg-slate-900/90 border border-slate-700 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 text-sm text-white placeholder-slate-500 outline-none transition"
                        />
                      </div>
                    </div>

                    {/* 5. City & 6. Business Category */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-medium text-slate-300 mb-1">
                          City / Region <span className="text-cyan-400">*</span>
                        </label>
                        <input
                          type="text"
                          name="city"
                          required
                          value={formData.city}
                          onChange={handleChange}
                          placeholder="Hyderabad, Telangana..."
                          className="w-full px-4 py-2.5 rounded-xl bg-slate-900/90 border border-slate-700 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 text-sm text-white placeholder-slate-500 outline-none transition"
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
                          className="w-full px-4 py-2.5 rounded-xl bg-slate-900/90 border border-slate-700 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 text-sm text-white outline-none transition"
                        >
                          <option value="Ambulance / Emergency Services">Ambulance / Emergency Services</option>
                          <option value="Hospital / Clinic / Health">Hospital / Clinic / Health</option>
                          <option value="Salon & Beauty Parlour">Salon & Beauty Parlour</option>
                          <option value="Car Travels & Taxi Rentals">Car Travels & Taxi Rentals</option>
                          <option value="Travel Agency & Tours">Travel Agency & Tours</option>
                          <option value="Restaurant / Cafe / Hotel">Restaurant / Cafe / Hotel</option>
                          <option value="Coaching Centre / Institute">Coaching Centre / Institute</option>
                          <option value="Real Estate / Properties">Real Estate / Properties</option>
                          <option value="Gym & Fitness Centre">Gym & Fitness Centre</option>
                          <option value="Retail Store / Local Shop">Retail Store / Local Shop</option>
                          <option value="Interior Design / Decor">Interior Design / Decor</option>
                          <option value="Home Services (Electrician, Plumber)">Home Services (Electrician, Plumber)</option>
                          <option value="Other Business">Other Commercial Business</option>
                        </select>
                      </div>
                    </div>

                    {/* 7. Required Service & 8. Project Budget */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-medium text-slate-300 mb-1">
                          Required Service <span className="text-cyan-400">*</span>
                        </label>
                        <select
                          name="requiredService"
                          value={formData.requiredService}
                          onChange={handleChange}
                          className="w-full px-4 py-2.5 rounded-xl bg-slate-900/90 border border-slate-700 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 text-sm text-white outline-none transition"
                        >
                          <option value="Website Development">Website Development (New Site)</option>
                          <option value="Website Redesign">Website Redesign (Upgrade Existing)</option>
                          <option value="Google Business Profile">Google Business Profile (Maps SEO)</option>
                          <option value="Google Ads (PPC)">Google Ads (Lead Generation)</option>
                          <option value="SEO Services">Monthly SEO Services</option>
                          <option value="Complete Agency Growth Package">Complete Agency Growth Package</option>
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
                          className="w-full px-4 py-2.5 rounded-xl bg-slate-900/90 border border-slate-700 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 text-sm text-white outline-none transition"
                        >
                          <option value="₹5,000 – ₹8,999 (Starter Plan)">₹5,000 – ₹8,999 (Starter Plan)</option>
                          <option value="₹8,999 – ₹14,999 (Business Plan)">₹8,999 – ₹14,999 (Business Plan)</option>
                          <option value="₹14,999 – ₹25,000+ (Advanced / Custom)">₹14,999 – ₹25,000+ (Advanced / Custom)</option>
                          <option value="Google Services Only (₹2,000 - ₹5,000)">Google Services Only (₹2,000 - ₹5,000)</option>
                          <option value="Custom / Need Consultation">Custom / Need Consultation</option>
                        </select>
                      </div>
                    </div>

                    {/* 9. Project Description */}
                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1">
                        Project Description
                      </label>
                      <textarea
                        name="projectDescription"
                        rows={4}
                        value={formData.projectDescription}
                        onChange={handleChange}
                        placeholder="Share your goals, required pages, reference websites, or specific features needed..."
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-900/90 border border-slate-700 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 text-sm text-white placeholder-slate-500 outline-none transition resize-none"
                      ></textarea>
                    </div>

                    <div className="pt-2">
                      <button
                        type="submit"
                        disabled={loading}
                        className="w-full py-4 px-6 rounded-xl bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white font-semibold text-sm shadow-xl shadow-blue-600/30 transition flex items-center justify-center space-x-2 disabled:opacity-75"
                      >
                        {loading ? (
                          <span>Submitting Enquiry...</span>
                        ) : (
                          <>
                            <Send className="w-4 h-4" />
                            <span>Send My Enquiry</span>
                          </>
                        )}
                      </button>
                    </div>

                  </form>
                </div>
              ) : (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mx-auto mb-4 border border-emerald-500/40">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">
                    Enquiry Successfully Received!
                  </h3>
                  <p className="text-slate-300 text-sm max-w-md mx-auto mb-6">
                    Thank you, <strong>{formData.fullName}</strong>. Your enquiry details have been forwarded directly to Akula Praveen Yadav.
                  </p>

                  <div className="flex flex-col sm:flex-row gap-3 justify-center">
                    <a
                      href={AGENCY_INFO.whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs tracking-wide uppercase transition flex items-center justify-center space-x-2"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>Chat on WhatsApp Directly</span>
                    </a>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="px-6 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold uppercase transition"
                    >
                      Send Another Message
                    </button>
                  </div>
                </div>
              )}

            </div>
          </div>

        </div>
      </section>

      {/* Embedded Google Maps Location */}
      <section className="pt-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-glass-card rounded-3xl p-6 border border-slate-800/80 overflow-hidden">
          <div className="flex items-center space-x-2 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <MapPin className="w-4 h-4" />
            <span>Serving Hyderabad & Entire Telangana</span>
          </div>
          <div className="w-full h-72 rounded-2xl overflow-hidden border border-slate-800">
            <iframe
              title="Praveen Digital Solutions Location Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d243647.3160407063!2d78.26795856429285!3d17.41229980145694!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb99daeaebd2c7%3A0xae93b78392bafbc2!2sHyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0, filter: "invert(90%) hue-rotate(180deg)" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>

    </div>
  );
}
