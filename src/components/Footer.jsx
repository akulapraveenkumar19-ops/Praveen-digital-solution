import React from "react";
import { Link } from "react-router-dom";
import { 
  Code2, 
  MapPin, 
  Phone, 
  Mail, 
  MessageCircle, 
  ArrowUpRight, 
  ShieldCheck,
  CheckCircle2,
  Heart
} from "lucide-react";
import { LinkedinIcon, InstagramIcon } from "./SocialIcons";
import { AGENCY_INFO } from "../data/agencyData";

export default function Footer() {
  return (
    <footer className="bg-[#050a18] text-slate-300 border-t border-slate-800/80 pt-16 pb-8 relative overflow-hidden">
      
      {/* Subtle background glow */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-600/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-slate-800/80">
          
          {/* Column 1: Brand & Founder */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-3 group">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-700 via-blue-600 to-cyan-400 flex items-center justify-center text-white shadow-lg shadow-blue-600/30">
                <Code2 className="w-6 h-6" />
              </div>
              <div>
                <div className="text-lg font-extrabold tracking-tight text-white flex items-center">
                  <span>PRAVEEN</span>
                  <span className="text-cyan-400 ml-1.5 font-bold">DIGITAL</span>
                </div>
                <div className="text-[10px] uppercase tracking-wider text-slate-400 font-medium -mt-1">
                  Solutions
                </div>
              </div>
            </Link>

            <p className="text-xs text-blue-400 font-semibold italic">
              "{AGENCY_INFO.tagline}"
            </p>

            <p className="text-xs text-slate-400 leading-relaxed">
              Founded by <strong>{AGENCY_INFO.founder}</strong>, we engineer high-converting websites and scalable digital growth solutions for small businesses, startups, and local entrepreneurs in Hyderabad, Telangana, and across India.
            </p>

            {/* Social Icons */}
            <div className="flex items-center space-x-3 pt-2">
              <a
                href={AGENCY_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-700/80 flex items-center justify-center text-slate-300 hover:text-white hover:border-blue-500 hover:bg-blue-600/20 transition"
                title="LinkedIn Profile"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>

              <a
                href={AGENCY_INFO.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-700/80 flex items-center justify-center text-slate-300 hover:text-pink-400 hover:border-pink-500 hover:bg-pink-600/20 transition"
                title="Instagram Profile"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>

              <a
                href={AGENCY_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-700/80 flex items-center justify-center text-slate-300 hover:text-emerald-400 hover:border-emerald-500 hover:bg-emerald-600/20 transition"
                title="WhatsApp Direct"
              >
                <MessageCircle className="w-4 h-4" />
              </a>

              <a
                href={`mailto:${AGENCY_INFO.email}`}
                className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-700/80 flex items-center justify-center text-slate-300 hover:text-cyan-400 hover:border-cyan-500 hover:bg-cyan-600/20 transition"
                title="Email Us"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4 flex items-center space-x-2">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
              <span>Quick Links</span>
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li>
                <Link to="/" className="hover:text-cyan-400 transition flex items-center justify-between group">
                  <span>Home</span>
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition text-cyan-400" />
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-cyan-400 transition flex items-center justify-between group">
                  <span>About Us</span>
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition text-cyan-400" />
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="hover:text-cyan-400 transition flex items-center justify-between group">
                  <span>Portfolio / Projects</span>
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition text-cyan-400" />
                </Link>
              </li>
              <li>
                <Link to="/industries" className="hover:text-cyan-400 transition flex items-center justify-between group">
                  <span>Industries We Serve</span>
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition text-cyan-400" />
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="hover:text-cyan-400 transition flex items-center justify-between group">
                  <span>Transparent Pricing</span>
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition text-cyan-400" />
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-cyan-400 transition flex items-center justify-between group">
                  <span>Contact Us</span>
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition text-cyan-400" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Specialized Services */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4 flex items-center space-x-2">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
              <span>Services</span>
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li>
                <Link to="/services/website-development" className="hover:text-cyan-400 transition flex items-center justify-between group">
                  <span>Website Development</span>
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition text-cyan-400" />
                </Link>
              </li>
              <li>
                <Link to="/services/google-business-profile" className="hover:text-cyan-400 transition flex items-center justify-between group">
                  <span>Google Business Profile</span>
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition text-cyan-400" />
                </Link>
              </li>
              <li>
                <Link to="/services/google-ads" className="hover:text-cyan-400 transition flex items-center justify-between group">
                  <span>Google Ads (PPC)</span>
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition text-cyan-400" />
                </Link>
              </li>
              <li>
                <Link to="/services/seo-services" className="hover:text-cyan-400 transition flex items-center justify-between group">
                  <span>SEO Services</span>
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition text-cyan-400" />
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-cyan-400 transition flex items-center justify-between group">
                  <span>Website Maintenance & Hosting</span>
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition text-cyan-400" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Location & Direct Contact */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4 flex items-center space-x-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
              <span>Direct Contact</span>
            </h4>
            <div className="space-y-3 text-xs text-slate-400">
              <div className="flex items-start space-x-2.5">
                <MapPin className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <span>{AGENCY_INFO.location}. Serving Telangana & Pan-India.</span>
              </div>
              <div className="flex items-center space-x-2.5">
                <Phone className="w-4 h-4 text-blue-400 shrink-0" />
                <a href={AGENCY_INFO.callUrl} className="hover:text-white transition">
                  {AGENCY_INFO.phoneFormatted}
                </a>
              </div>
              <div className="flex items-center space-x-2.5">
                <MessageCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <a 
                  href={AGENCY_INFO.whatsappUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-emerald-400 transition"
                >
                  WhatsApp: {AGENCY_INFO.phoneFormatted}
                </a>
              </div>
              <div className="flex items-center space-x-2.5">
                <Mail className="w-4 h-4 text-cyan-400 shrink-0" />
                <a href={`mailto:${AGENCY_INFO.email}`} className="hover:text-white transition truncate">
                  {AGENCY_INFO.email}
                </a>
              </div>

              <div className="pt-2">
                <div className="inline-flex items-center space-x-1.5 text-[11px] text-emerald-400 bg-emerald-950/60 border border-emerald-500/30 px-2.5 py-1 rounded-md">
                  <CheckCircle2 className="w-3 h-3" />
                  <span>Accepting New Clients Now</span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <div>
            <p>© 2026 Praveen Digital Solutions. All Rights Reserved.</p>
            <p className="text-[11px] text-slate-600 mt-0.5">
              Designed & Built with precision by founder Akula Praveen Yadav.
            </p>
          </div>

          <div className="flex items-center space-x-6">
            <Link to="/privacy-policy" className="hover:text-slate-400 transition">
              Privacy Policy
            </Link>
            <span>•</span>
            <Link to="/terms-and-conditions" className="hover:text-slate-400 transition">
              Terms & Conditions
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
