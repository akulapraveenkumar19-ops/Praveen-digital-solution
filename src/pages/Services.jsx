import React from "react";
import { Link } from "react-router-dom";
import { 
  Globe, 
  MapPin, 
  Target, 
  TrendingUp, 
  Wrench, 
  CheckCircle2, 
  ArrowRight, 
  MessageCircle, 
  Phone, 
  Sparkles,
  ShieldCheck,
  ChevronRight
} from "lucide-react";
import { SERVICES_DATA, AGENCY_INFO } from "../data/agencyData";
import SEOHead from "../components/SEOHead";
import ServiceCard from "../components/ServiceCard";

export default function Services({ onOpenQuote }) {
  return (
    <div className="w-full bg-[#070d1e] text-slate-100 pb-20">
      
      <SEOHead 
        title="Services | Website Development, Google Business Profile, Ads & SEO Hyderabad"
        description="Explore digital growth services by Praveen Digital Solutions: Custom website development, Google Business Profile setup, Google Ads campaigns and local SEO across Telangana."
      />

      {/* Hero Banner */}
      <section className="pt-16 pb-20 bg-navy-gradient border-b border-slate-800/80">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-blue-950/80 border border-blue-500/30 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>End-to-End Digital Capabilities</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            Strategic Digital Services Engineered for <br />
            <span className="text-gradient">Measurable Business Growth.</span>
          </h1>

          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            We provide everything your business requires to get found on Google, attract qualified local leads, and convert web visitors into long-term clients.
          </p>

        </div>
      </section>

      {/* Service Cards Grid */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES_DATA.map((service) => (
            <ServiceCard 
              key={service.id} 
              service={service} 
              onOpenQuote={onOpenQuote} 
            />
          ))}
        </div>

        {/* Specialized Dedicated Links Box */}
        <div className="mt-16 bg-slate-900/60 rounded-3xl p-8 border border-slate-800">
          <div className="max-w-3xl mb-8">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
              Deep-Dive Into Our Core Service Offerings
            </h3>
            <p className="text-slate-400 text-xs sm:text-sm">
              Click any of our specialized service hubs below to learn our detailed methodologies, compliance standards, and industry implementations.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <Link
              to="/services/website-development"
              className="p-5 rounded-2xl bg-[#0b152e] border border-blue-500/20 hover:border-blue-400 transition group flex flex-col justify-between"
            >
              <div>
                <Globe className="w-6 h-6 text-cyan-400 mb-3" />
                <h4 className="text-sm font-bold text-white group-hover:text-cyan-300 transition">
                  Website Development
                </h4>
                <p className="text-xs text-slate-400 mt-1">
                  15+ industry solutions, responsive React architecture & redesigns.
                </p>
              </div>
              <div className="pt-4 text-xs text-cyan-400 font-semibold flex items-center space-x-1">
                <span>View Page</span>
                <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition" />
              </div>
            </Link>

            <Link
              to="/services/google-business-profile"
              className="p-5 rounded-2xl bg-[#0b152e] border border-blue-500/20 hover:border-blue-400 transition group flex flex-col justify-between"
            >
              <div>
                <MapPin className="w-6 h-6 text-cyan-400 mb-3" />
                <h4 className="text-sm font-bold text-white group-hover:text-cyan-300 transition">
                  Google Business Profile
                </h4>
                <p className="text-xs text-slate-400 mt-1">
                  Google Maps ranking, NAP optimization & verified setup.
                </p>
              </div>
              <div className="pt-4 text-xs text-cyan-400 font-semibold flex items-center space-x-1">
                <span>View Page</span>
                <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition" />
              </div>
            </Link>

            <Link
              to="/services/google-ads"
              className="p-5 rounded-2xl bg-[#0b152e] border border-blue-500/20 hover:border-blue-400 transition group flex flex-col justify-between"
            >
              <div>
                <Target className="w-6 h-6 text-cyan-400 mb-3" />
                <h4 className="text-sm font-bold text-white group-hover:text-cyan-300 transition">
                  Google Ads (PPC)
                </h4>
                <p className="text-xs text-slate-400 mt-1">
                  Search & call campaigns, negative keyword tuning & lead tracking.
                </p>
              </div>
              <div className="pt-4 text-xs text-cyan-400 font-semibold flex items-center space-x-1">
                <span>View Page</span>
                <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition" />
              </div>
            </Link>

            <Link
              to="/services/seo-services"
              className="p-5 rounded-2xl bg-[#0b152e] border border-blue-500/20 hover:border-blue-400 transition group flex flex-col justify-between"
            >
              <div>
                <TrendingUp className="w-6 h-6 text-cyan-400 mb-3" />
                <h4 className="text-sm font-bold text-white group-hover:text-cyan-300 transition">
                  SEO Services
                </h4>
                <p className="text-xs text-slate-400 mt-1">
                  On-page, local citations, technical health & Search Console setup.
                </p>
              </div>
              <div className="pt-4 text-xs text-cyan-400 font-semibold flex items-center space-x-1">
                <span>View Page</span>
                <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition" />
              </div>
            </Link>
          </div>
        </div>

      </section>

      {/* Direct Contact Banner */}
      <section className="mt-8 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="bg-gradient-to-r from-blue-900/40 via-blue-950 to-slate-900 p-8 rounded-2xl border border-blue-500/30">
          <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
            Not Sure Which Service Your Business Needs First?
          </h3>
          <p className="text-slate-300 text-xs sm:text-sm max-w-xl mx-auto mb-6">
            Get in touch with Akula Praveen Yadav. We will assess your business sector, existing web presence, and recommend the most cost-effective path forward.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3">
            <button
              onClick={() => onOpenQuote("Custom Growth Plan")}
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold text-xs tracking-wide uppercase transition shadow-lg shadow-blue-600/30"
            >
              Get Custom Quotation
            </button>
            <a
              href={AGENCY_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs tracking-wide uppercase transition flex items-center justify-center space-x-2"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Discuss on WhatsApp</span>
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
