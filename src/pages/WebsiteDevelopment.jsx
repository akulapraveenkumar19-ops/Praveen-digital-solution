import React from "react";
import { Link } from "react-router-dom";
import { 
  Globe, 
  CheckCircle2, 
  Sparkles, 
  ArrowRight, 
  MessageCircle, 
  Phone, 
  Smartphone, 
  Zap, 
  ShieldCheck, 
  Layers,
  Code2
} from "lucide-react";
import { AGENCY_INFO, INDUSTRIES_SERVED } from "../data/agencyData";
import SEOHead from "../components/SEOHead";

export default function WebsiteDevelopment({ onOpenQuote }) {
  const websiteTypes = [
    { title: "Business & Company Websites", desc: "Build instant enterprise authority, highlight your corporate credentials, and capture qualified business enquiries." },
    { title: "Personal Portfolio Websites", desc: "Position your individual expertise, medical or consulting credentials, and past case studies to win premier clients." },
    { title: "E-Commerce & Online Stores", desc: "Showcase your product inventory with clean item catalogs, dynamic search, price tiers, and direct WhatsApp / payment checkout." },
    { title: "100% Responsive Websites", desc: "Engineered mobile-first to ensure pixel-perfect rendering across iPhones, Androids, iPads, laptops, and ultra-wide desktop monitors." },
    { title: "Website Redesign & Upgrades", desc: "Transform slow, obsolete WordPress or legacy websites into modern, lightning-quick web applications that load in under 2 seconds." },
    { title: "High-Converting Landing Pages", desc: "Laser-focused single-page funnels tailored specifically to maximize leads from Google Ads, Meta Ads, and marketing campaigns." },
    { title: "Custom Web Applications", desc: "Dynamic, scalable web portals with custom calculation forms, multi-step booking workflows, and database record keeping." }
  ];

  return (
    <div className="w-full bg-[#070d1e] text-slate-100 pb-20">
      
      <SEOHead 
        title="Website Development Services Hyderabad | Praveen Digital Solutions"
        description="Professional website development in Hyderabad & Telangana. Mobile-responsive, fast, and SEO-optimized business websites starting from ₹5,000."
      />

      {/* Hero Header */}
      <section className="pt-16 pb-20 bg-navy-gradient border-b border-slate-800/80">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-blue-950/80 border border-blue-500/30 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <Globe className="w-3.5 h-3.5" />
            <span>Service #1: Core Website Engineering</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            Professional Website Development That <br />
            <span className="text-gradient">Converts Visitors Into Paying Clients.</span>
          </h1>

          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed mb-6">
            We don't build generic student portfolios or slow template bloat. We build custom, blazing-fast, mobile-friendly websites that position your business as a trusted market leader.
          </p>

          <div className="inline-block bg-slate-900/80 border border-slate-700/80 px-4 py-2 rounded-xl text-xs text-slate-300 mb-8">
            Starting Price: <strong className="text-emerald-400 font-bold text-sm">₹5,000 onwards</strong> • 2 to 7 Days Fast Delivery
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-3">
            <button
              onClick={() => onOpenQuote("Website Development Service")}
              className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white font-semibold text-xs tracking-wide uppercase transition shadow-lg shadow-blue-600/30"
            >
              Get a Free Website Quote
            </button>
            <a
              href={AGENCY_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs tracking-wide uppercase transition flex items-center justify-center space-x-2"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp Praveen Directly</span>
            </a>
          </div>

        </div>
      </section>

      {/* Website Types Section */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">
            Website Solutions Tailored to Your Specific Model
          </h2>
          <p className="text-slate-400 text-xs sm:text-sm">
            Whether you need a sleek landing page or an enterprise multi-page website, we have you covered.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {websiteTypes.map((type, idx) => (
            <div key={idx} className="bg-glass-card rounded-2xl p-6 border border-slate-800/80 hover:border-blue-500/40 transition">
              <div className="w-10 h-10 rounded-xl bg-blue-600/20 text-cyan-400 flex items-center justify-center mb-4 border border-blue-500/30">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-white mb-2">{type.title}</h3>
              <p className="text-xs text-slate-300 leading-relaxed">{type.desc}</p>
            </div>
          ))}
        </div>

      </section>

      {/* Industry-Specific Websites Breakdown */}
      <section className="py-16 bg-[#091024] border-y border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="text-xs font-semibold text-cyan-400 uppercase tracking-wider mb-2">
              Industry Specializations
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">
              Websites Customized for 15+ Business Sectors
            </h2>
            <p className="text-slate-400 text-xs sm:text-sm">
              Each industry requires different conversion hooks. Here is how we customize websites for each sector:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {INDUSTRIES_SERVED.map((ind, idx) => (
              <div key={idx} className="bg-glass-card rounded-2xl p-6 border border-slate-800/80 flex flex-col justify-between">
                <div>
                  <h3 className="text-base font-bold text-white mb-1.5 flex items-center space-x-2">
                    <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
                    <span>{ind.name}</span>
                  </h3>
                  <div className="text-xs font-semibold text-blue-400 mb-2">{ind.headline}</div>
                  <p className="text-xs text-slate-300 leading-relaxed mb-4">{ind.solution}</p>
                  
                  <div className="space-y-1.5 pt-3 border-t border-slate-800">
                    {ind.keyBenefits.map((b, bIdx) => (
                      <div key={bIdx} className="text-[11px] text-slate-400 flex items-center space-x-1.5">
                        <span className="text-emerald-400">✓</span>
                        <span>{b}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-800">
                  <button
                    onClick={() => onOpenQuote(`${ind.name} Website`)}
                    className="w-full py-2 px-3 rounded-lg bg-blue-600/30 hover:bg-blue-600 text-cyan-300 hover:text-white text-xs font-semibold transition"
                  >
                    Request {ind.name} Website Quote
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Bottom Action */}
      <section className="pt-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h3 className="text-2xl font-bold text-white mb-3">
          Ready to Build Your New Website?
        </h3>
        <p className="text-slate-300 text-sm max-w-xl mx-auto mb-6">
          Contact Akula Praveen Yadav today for a free design mockup and quotation tailored specifically to your business goals.
        </p>
        <button
          onClick={() => onOpenQuote("Website Development")}
          className="px-7 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold text-xs tracking-wide uppercase transition shadow-lg shadow-blue-600/30"
        >
          Request Your Free Quote
        </button>
      </section>

    </div>
  );
}
