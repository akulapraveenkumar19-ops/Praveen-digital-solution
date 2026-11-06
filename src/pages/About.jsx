import { 
  ShieldCheck, 
  Sparkles, 
  CheckCircle2, 
  MapPin, 
  Mail, 
  Phone, 
  MessageCircle, 
  Code2, 
  Target, 
  Users, 
  HeartHandshake,
  ArrowRight
} from "lucide-react";
import { LinkedinIcon, InstagramIcon } from "../components/SocialIcons";
import { AGENCY_INFO } from "../data/agencyData";
import SEOHead from "../components/SEOHead";

export default function About({ onOpenQuote }) {
  return (
    <div className="w-full bg-[#070d1e] text-slate-100 pb-20">
      
      <SEOHead 
        title="About Us | Praveen Digital Solutions - Hyderabad, Telangana"
        description="Learn about Praveen Digital Solutions and founder Akula Praveen Yadav. We help local businesses, startups and companies across Telangana build websites and grow online."
      />

      {/* Hero Banner */}
      <section className="pt-16 pb-20 bg-navy-gradient border-b border-slate-800/80">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-blue-950/80 border border-blue-500/30 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Agency Story & Founder Mission</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            Building Digital Authority for <br />
            <span className="text-gradient">Local Businesses & Growing Brands.</span>
          </h1>

          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Praveen Digital Solutions was founded to bridge the gap between expensive metropolitan agencies and local businesses that need honest, high-impact digital presence.
          </p>

        </div>
      </section>

      {/* Main Agency & Founder Profile */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Founder Profile Card */}
          <div className="lg:col-span-5 bg-glass-card rounded-3xl p-8 border border-slate-800/80 relative overflow-hidden text-center sm:text-left">
            {/* Founder Avatar & Badge */}
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5 mb-6">
              <div className="w-24 h-24 rounded-2xl overflow-hidden p-0.5 bg-gradient-to-tr from-blue-600 via-cyan-400 to-blue-500 shadow-xl shadow-blue-600/30 shrink-0">
                <img 
                  src="/images/founder.svg" 
                  alt="Akula Praveen Yadav - Founder Praveen Digital Solutions" 
                  className="w-full h-full object-cover rounded-2xl bg-[#0b152e]"
                />
              </div>
              <div className="text-center sm:text-left">
                <div className="inline-flex items-center space-x-1.5 text-[11px] font-semibold text-blue-400 bg-blue-950/80 px-2.5 py-1 rounded-md mb-1.5 border border-blue-500/30">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                  <span>Founder & Lead Technologist</span>
                </div>
                <h2 className="text-2xl font-bold text-white mb-0.5">
                  {AGENCY_INFO.founder}
                </h2>
                <div className="text-xs text-cyan-400 font-medium">
                  {AGENCY_INFO.role}
                </div>
              </div>
            </div>

            <p className="text-xs text-slate-300 leading-relaxed mb-6">
              "My mission is simple: To provide genuine small businesses, doctors, salon owners, travel operators, and entrepreneurs with modern, high-speed websites that convert local searches into real paying clients."
            </p>

            <div className="space-y-2.5 text-xs text-slate-300 border-t border-slate-800/80 pt-5">
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Based in {AGENCY_INFO.location}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-blue-400 shrink-0" />
                <a href={AGENCY_INFO.callUrl} className="hover:text-white transition">
                  {AGENCY_INFO.phoneFormatted}
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-cyan-400 shrink-0" />
                <a href={`mailto:${AGENCY_INFO.email}`} className="hover:text-white transition truncate">
                  {AGENCY_INFO.email}
                </a>
              </div>
            </div>

            {/* Social Buttons */}
            <div className="flex items-center space-x-3 mt-6 pt-5 border-t border-slate-800/80">
              <a
                href={AGENCY_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-blue-600/20 text-blue-300 hover:bg-blue-600 hover:text-white text-xs font-medium transition"
              >
                <LinkedinIcon className="w-3.5 h-3.5" />
                <span>LinkedIn</span>
              </a>

              <a
                href={AGENCY_INFO.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-pink-600/20 text-pink-300 hover:bg-pink-600 hover:text-white text-xs font-medium transition"
              >
                <InstagramIcon className="w-3.5 h-3.5" />
                <span>Instagram</span>
              </a>

              <a
                href={AGENCY_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-emerald-600/20 text-emerald-300 hover:bg-emerald-600 hover:text-white text-xs font-medium transition"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>WhatsApp</span>
              </a>
            </div>

            {/* Official Instagram QR Card */}
            <div className="mt-6 pt-5 border-t border-slate-800/80 bg-slate-900/60 rounded-2xl p-4 border border-slate-800 flex items-center gap-4 text-left">
              <img 
                src="/images/instagram-qr.jpg" 
                alt="Instagram QR @praveen.digital.solution" 
                className="w-16 h-16 rounded-xl object-cover border border-slate-700 shrink-0 shadow-md"
              />
              <div>
                <div className="text-[10px] text-pink-400 font-semibold uppercase tracking-wider">Official Instagram</div>
                <div className="text-xs font-bold text-white font-mono">{AGENCY_INFO.instagramHandle}</div>
                <a 
                  href={AGENCY_INFO.instagram} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center space-x-1 text-[11px] text-cyan-400 hover:text-cyan-300 font-medium mt-1"
                >
                  <span>Follow & Scan QR →</span>
                </a>
              </div>
            </div>

          </div>

          {/* Agency Mission, Vision & Standards */}
          <div className="lg:col-span-7 space-y-8">
            
            <div>
              <div className="text-xs font-semibold text-blue-400 uppercase tracking-wider mb-2">
                Our Purpose
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-4">
                "We Build Websites. We Grow Businesses."
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed mb-4">
                At Praveen Digital Solutions, we believe that an online presence should be an active revenue generator, not a dormant cost. We blend modern aesthetic web standards with practical search visibility to ensure your enterprise flourishes in Hyderabad, across Telangana, and throughout India.
              </p>
              <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                Whether you run an ambulance service needing urgent emergency dispatch dials, a family salon seeking bridal bookings, or a taxi rental agency competing with big aggregators, we develop solutions aligned with your direct business model.
              </p>
            </div>

            {/* Core Values */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-slate-900/60 p-4 rounded-xl border border-slate-800">
                <div className="flex items-center space-x-2 text-cyan-400 font-bold text-sm mb-1">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Honesty & Google Policy</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  We never promise impossible overnight #1 rankings or fake Google verifications. We practice compliant, sustainable white-hat digital growth.
                </p>
              </div>

              <div className="bg-slate-900/60 p-4 rounded-xl border border-slate-800">
                <div className="flex items-center space-x-2 text-cyan-400 font-bold text-sm mb-1">
                  <Code2 className="w-4 h-4" />
                  <span>Modern Tech Stack</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Built with high-speed React, Vite, and responsive mobile architecture so your pages load in under 2 seconds on 4G and 5G networks.
                </p>
              </div>

              <div className="bg-slate-900/60 p-4 rounded-xl border border-slate-800">
                <div className="flex items-center space-x-2 text-cyan-400 font-bold text-sm mb-1">
                  <HeartHandshake className="w-4 h-4" />
                  <span>Direct Communication</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  You work directly with the founder and developer. Fast turnarounds, instant answers on WhatsApp, and zero agency bureaucratic delay.
                </p>
              </div>

              <div className="bg-slate-900/60 p-4 rounded-xl border border-slate-800">
                <div className="flex items-center space-x-2 text-cyan-400 font-bold text-sm mb-1">
                  <Target className="w-4 h-4" />
                  <span>Conversion Focused</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Every button, color contrast, and headline is engineered to guide visitors toward picking up the phone or messaging you on WhatsApp.
                </p>
              </div>
            </div>

            {/* CTA */}
            <div className="pt-2">
              <button
                onClick={() => onOpenQuote("Direct Founder Consultation")}
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white font-semibold text-xs tracking-wide uppercase transition shadow-lg shadow-blue-600/30 flex items-center space-x-2"
              >
                <span>Book a Consultation with Praveen</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
}
