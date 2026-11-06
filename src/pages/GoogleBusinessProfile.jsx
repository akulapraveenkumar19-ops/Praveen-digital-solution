import React from "react";
import { 
  MapPin, 
  CheckCircle2, 
  Sparkles, 
  ArrowRight, 
  MessageCircle, 
  ShieldCheck, 
  AlertTriangle, 
  Search, 
  Star, 
  Image as ImageIcon, 
  PhoneCall,
  Clock
} from "lucide-react";
import { AGENCY_INFO } from "../data/agencyData";
import SEOHead from "../components/SEOHead";

export default function GoogleBusinessProfile({ onOpenQuote }) {
  const gbpDeliverables = [
    { title: "Complete Profile Setup & Claiming", desc: "We guide you through claiming, verifying, and setting up your Google Business Profile according to official Google protocols." },
    { title: "Accurate NAP Consistency", desc: "Ensuring your Business Name, Physical Address, and Phone Number match seamlessly across all digital listings." },
    { title: "Primary & Secondary Category Tuning", desc: "Selecting the highest-intent Google categories so you appear when local customers make intent-driven searches." },
    { title: "Service & Product Catalog Configuration", desc: "Listing every service, consultation package, or product offering complete with descriptions and price ranges." },
    { title: "Geo-Tagged Business Photos & Updates", desc: "Uploading high-resolution, geo-tagged storefront, interior, team, and work photos to increase viewer trust and clicks." },
    { title: "Service Area & Operating Hours Definition", desc: "Accurately defining your delivery or operational radius across Hyderabad, Telangana, or PAN-India." },
    { title: "Website & Direct Click-to-Call Links", desc: "Connecting your business website and trackable call buttons directly into the Google Maps profile view." },
    { title: "Review Management & Response Strategy", desc: "Professional review reply templates and authentic feedback collection systems to build verified customer reputation." }
  ];

  return (
    <div className="w-full bg-[#070d1e] text-slate-100 pb-20">
      
      <SEOHead 
        title="Google Business Profile Setup & Optimization Hyderabad | Praveen Digital"
        description="Google Business Profile setup, optimization, and local map SEO in Hyderabad & Telangana. Follow Google policies. Packages starting from ₹2,000."
      />

      {/* Hero Header */}
      <section className="pt-16 pb-20 bg-navy-gradient border-b border-slate-800/80">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-blue-950/80 border border-blue-500/30 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <MapPin className="w-3.5 h-3.5" />
            <span>Service #2: Local Maps Dominance</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            Google Business Profile Optimization <br />
            <span className="text-gradient">Get Discovered on Google Maps.</span>
          </h1>

          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed mb-6">
            When local customers search for "near me" or services in Hyderabad, your Google listing is often the very first thing they see. We optimize every aspect of your listing to drive genuine phone calls and visits.
          </p>

          <div className="inline-block bg-slate-900/80 border border-slate-700/80 px-4 py-2 rounded-xl text-xs text-slate-300 mb-8">
            Starting Price: <strong className="text-emerald-400 font-bold text-sm">₹2,000 onwards</strong> • Policy-Compliant Setup
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-3">
            <button
              onClick={() => onOpenQuote("Google Business Profile Service")}
              className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white font-semibold text-xs tracking-wide uppercase transition shadow-lg shadow-blue-600/30"
            >
              Get Your Profile Optimized
            </button>
            <a
              href={AGENCY_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs tracking-wide uppercase transition flex items-center justify-center space-x-2"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp Direct Enquiry</span>
            </a>
          </div>

        </div>
      </section>

      {/* Strict Policy & Transparency Notice */}
      <section className="py-8 bg-amber-950/40 border-b border-amber-500/30">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-start space-x-3 text-xs text-amber-200">
            <AlertTriangle className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
            <div>
              <strong className="text-amber-300 font-semibold uppercase tracking-wider block mb-1">
                Our Ethical Compliance Guarantee:
              </strong>
              <span>
                We strictly follow Google’s official guidelines and policies. We do <strong>NOT</strong> promise guaranteed instant #1 rankings, and we do <strong>NOT</strong> promise unauthorized circumvented verification. Genuine Google Maps dominance is achieved through authentic NAP accuracy, comprehensive photo assets, real verified customer reviews, and consistent local signals.
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Deliverables Grid */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">
            Everything Included in Our Google Business Setup
          </h2>
          <p className="text-slate-400 text-xs sm:text-sm">
            We leave zero stones unturned when optimizing your digital storefront on Google Maps.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {gbpDeliverables.map((item, idx) => (
            <div key={idx} className="bg-glass-card rounded-2xl p-6 border border-slate-800/80 hover:border-blue-500/40 transition">
              <div className="w-10 h-10 rounded-xl bg-blue-600/20 text-cyan-400 flex items-center justify-center mb-4 border border-blue-500/30 font-bold text-sm">
                0{idx + 1}
              </div>
              <h3 className="text-base font-bold text-white mb-2">{item.title}</h3>
              <p className="text-xs text-slate-300 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

      </section>

      {/* Bottom CTA */}
      <section className="pt-8 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="bg-slate-900/60 p-8 rounded-2xl border border-slate-800">
          <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
            Turn Nearby Searchers Into In-Store Customers
          </h3>
          <p className="text-slate-300 text-xs sm:text-sm max-w-xl mx-auto mb-6">
            Let Akula Praveen audit or configure your Google Business Profile today for maximum local visibility across Telangana.
          </p>
          <button
            onClick={() => onOpenQuote("Google Business Profile Service")}
            className="px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold text-xs tracking-wide uppercase transition shadow-lg shadow-blue-600/30"
          >
            Start Profile Optimization (₹2,000)
          </button>
        </div>
      </section>

    </div>
  );
}
