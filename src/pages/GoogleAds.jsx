import React from "react";
import { 
  Target, 
  CheckCircle2, 
  Sparkles, 
  ArrowRight, 
  MessageCircle, 
  ShieldCheck, 
  AlertCircle, 
  Search, 
  PhoneCall, 
  TrendingUp, 
  DollarSign,
  BarChart3
} from "lucide-react";
import { AGENCY_INFO } from "../data/agencyData";
import SEOHead from "../components/SEOHead";

export default function GoogleAds({ onOpenQuote }) {
  const adFeatures = [
    { title: "Targeted Google Search Ads", desc: "Show your business at the very top of Google when potential customers enter high-intent buying queries." },
    { title: "Call-Only Ads for Mobile", desc: "Users on smartphones can tap once to call your dispatch or booking desk directly, generating immediate phone leads." },
    { title: "In-Depth Keyword Research", desc: "We identify terms with strong commercial intent, discarding vague or academic search queries that waste ad spend." },
    { title: "Aggressive Negative Keyword Planning", desc: "We continually build a shield of negative keywords to block unrelated, free-seeker, or competitor clicks." },
    { title: "Ad Copywriting & Extensions", desc: "Engaging headlines, callout extensions, sitelinks, and trust badges designed to achieve superior Click-Through Rates (CTR)." },
    { title: "Conversion & Call Tracking", desc: "Setting up Google Tag Manager and conversion goals to track every lead form submission and phone call accurately." },
    { title: "Geo-Targeting & Pincode Precision", desc: "Direct your advertising budget strictly to your desired localities in Hyderabad, specific districts, or all Telangana." },
    { title: "Performance Reporting & Bid Tuning", desc: "Regular bid optimization, Quality Score enhancement, and transparent cost-per-lead reporting." }
  ];

  return (
    <div className="w-full bg-[#070d1e] text-slate-100 pb-20">
      
      <SEOHead 
        title="Google Ads Management & Setup Hyderabad | Praveen Digital Solutions"
        description="High-ROI Google Search Ads & Call-Only campaigns in Hyderabad. Generate instant business leads. Setup fee starting from ₹2,000."
      />

      {/* Hero Header */}
      <section className="pt-16 pb-20 bg-navy-gradient border-b border-slate-800/80">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-blue-950/80 border border-blue-500/30 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <Target className="w-3.5 h-3.5" />
            <span>Service #3: High-Intent Paid Traffic</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            Google Ads (PPC) Management That <br />
            <span className="text-gradient">Generates Inbound Calls & Leads.</span>
          </h1>

          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed mb-6">
            Don't wait months for organic traffic if you need customers today. Google Search Ads place your business in front of ready-to-buy clients at the exact second they need you.
          </p>

          <div className="inline-block bg-slate-900/80 border border-slate-700/80 px-4 py-2 rounded-xl text-xs text-slate-300 mb-8">
            Setup Fee: <strong className="text-emerald-400 font-bold text-sm">₹2,000 onwards</strong> • Dedicated Account Management
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-3">
            <button
              onClick={() => onOpenQuote("Google Ads Setup Service")}
              className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white font-semibold text-xs tracking-wide uppercase transition shadow-lg shadow-blue-600/30"
            >
              Launch My Google Ads Campaign
            </button>
            <a
              href={AGENCY_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs tracking-wide uppercase transition flex items-center justify-center space-x-2"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Discuss Ad Strategy on WhatsApp</span>
            </a>
          </div>

        </div>
      </section>

      {/* Transparent Budget Disclaimer */}
      <section className="py-8 bg-blue-950/40 border-b border-blue-500/30">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-start space-x-3 text-xs text-blue-200">
            <AlertCircle className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
            <div>
              <strong className="text-cyan-300 font-semibold uppercase tracking-wider block mb-1">
                Transparent Advertising Budget Policy:
              </strong>
              <span>
                Please note: Your advertising click spend is paid directly to Google from your own Google Ads billing profile. Our agency fee covers keyword research, campaign architecture, ad copywriting, negative keyword lists, conversion tracking, and ongoing bid optimization. We do not markup Google's ad costs.
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">
            Engineered to Eliminate Wasted Clicks
          </h2>
          <p className="text-slate-400 text-xs sm:text-sm">
            We prioritize lead quality and low Cost-Per-Acquisition over empty clicks.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {adFeatures.map((item, idx) => (
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
            Start Receiving Calls from Ready Buyers Today
          </h3>
          <p className="text-slate-300 text-xs sm:text-sm max-w-xl mx-auto mb-6">
            Get your search campaign created by Akula Praveen Yadav with conversion tracking in place.
          </p>
          <button
            onClick={() => onOpenQuote("Google Ads Setup")}
            className="px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold text-xs tracking-wide uppercase transition shadow-lg shadow-blue-600/30"
          >
            Request Google Ads Setup (₹2,000)
          </button>
        </div>
      </section>

    </div>
  );
}
