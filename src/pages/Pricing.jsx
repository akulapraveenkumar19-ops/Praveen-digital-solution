import React, { useState } from "react";
import { Link } from "react-router-dom";
import { 
  ShieldCheck, 
  CheckCircle2, 
  Sparkles, 
  ArrowRight, 
  MessageCircle, 
  Phone, 
  HelpCircle, 
  Zap, 
  Calculator 
} from "lucide-react";
import { PRICING_PACKAGES, STANDALONE_SERVICES_PRICING, AGENCY_INFO } from "../data/agencyData";
import SEOHead from "../components/SEOHead";

export default function Pricing({ onOpenQuote }) {
  // Simple interactive estimator state
  const [estPages, setEstPages] = useState("5");
  const [estGbp, setEstGbp] = useState(true);
  const [estAds, setEstAds] = useState(false);
  const [estSeo, setEstSeo] = useState(false);

  // Dynamic estimate calculation
  const calculateEstimate = () => {
    let base = estPages === "1" ? 5000 : estPages === "5" ? 8999 : 14999;
    if (estGbp) base += 2000;
    if (estAds) base += 2000;
    if (estSeo) base += 3000;
    return base;
  };

  return (
    <div className="w-full bg-[#070d1e] text-slate-100 pb-20">
      
      <SEOHead 
        title="Pricing & Packages | Praveen Digital Solutions Hyderabad"
        description="Affordable and transparent website packages in Hyderabad: Starter from ₹5,000, Business from ₹8,999, Advanced from ₹14,999. Google Business Profile & Ads from ₹2,000."
      />

      {/* Hero Banner */}
      <section className="pt-16 pb-20 bg-navy-gradient border-b border-slate-800/80">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-blue-950/80 border border-blue-500/30 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Honest, Transparent & Clear Pricing</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            Affordable Website Packages for <br />
            <span className="text-gradient">Every Stage of Business Growth.</span>
          </h1>

          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed mb-6">
            No surprise invoices or hidden charges. We provide straightforward quotations tailored to your exact scope, giving you the best return on your investment.
          </p>

          <div className="inline-block bg-slate-900/80 border border-slate-700/80 px-4 py-2 rounded-xl text-xs text-slate-300">
            Founder-Direct Pricing • Fast Turnarounds • High-Quality Output
          </div>

        </div>
      </section>

      {/* Main Website Packages */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">
            Website Development Packages
          </h2>
          <p className="text-slate-400 text-xs sm:text-sm">
            Select the perfect package for your business, or request a custom quotation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {PRICING_PACKAGES.map((pkg) => (
            <div
              key={pkg.id}
              className={`rounded-2xl p-7 flex flex-col justify-between relative transition-all duration-300 ${
                pkg.highlighted
                  ? "bg-[#0c183a] border-2 border-cyan-400/80 shadow-2xl shadow-cyan-950/80 scale-105 z-10"
                  : "bg-glass-card border border-slate-800/80 hover:border-blue-500/40"
              }`}
            >
              {pkg.highlighted && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-bold text-[11px] uppercase tracking-wider px-3.5 py-1 rounded-full shadow-md">
                  {pkg.badge}
                </div>
              )}

              <div>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-white">
                    {pkg.name}
                  </h3>
                  {!pkg.highlighted && (
                    <span className="text-[10px] font-semibold text-slate-400 bg-slate-900 border border-slate-800 px-2 py-0.5 rounded">
                      {pkg.badge}
                    </span>
                  )}
                </div>

                <div className="mb-4">
                  <span className="text-3xl sm:text-4xl font-black text-white">
                    {pkg.price}
                  </span>
                  <span className="text-xs text-slate-400 ml-1.5">
                    {pkg.unit}
                  </span>
                </div>

                <p className="text-xs text-slate-300 leading-relaxed mb-6">
                  {pkg.idealFor}
                </p>

                <div className="space-y-2.5 mb-8 pt-4 border-t border-slate-800/80">
                  {pkg.features.map((feat, idx) => (
                    <div key={idx} className="flex items-start space-x-2 text-xs text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <button
                  onClick={() => onOpenQuote(pkg.name)}
                  className={`w-full py-3 px-4 rounded-xl font-semibold text-xs transition flex items-center justify-center space-x-1.5 ${
                    pkg.highlighted
                      ? "bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white shadow-lg shadow-cyan-500/25"
                      : "bg-slate-800/90 hover:bg-slate-700 text-white"
                  }`}
                >
                  <span>{pkg.buttonText}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>

                <a
                  href={`https://wa.me/${AGENCY_INFO.whatsappNumber}?text=Hello%20Praveen%2C%20I%20am%20interested%20in%20the%20*${encodeURIComponent(pkg.name)}*%20(${encodeURIComponent(pkg.price)}).%20Please%20share%20further%20details.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2 px-3 rounded-xl bg-emerald-950/40 hover:bg-emerald-900/50 border border-emerald-500/30 text-emerald-400 text-[11px] font-medium flex items-center justify-center space-x-1.5 transition"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>WhatsApp Enquiry</span>
                </a>
              </div>
            </div>
          ))}
        </div>

      </section>

      {/* Standalone Growth Services Pricing */}
      <section className="py-16 bg-[#091024] border-y border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">
              Standalone Google & SEO Services
            </h2>
            <p className="text-slate-400 text-xs sm:text-sm">
              Already have a website? Accelerate your traffic with targeted local marketing.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {STANDALONE_SERVICES_PRICING.map((item, idx) => (
              <div key={idx} className="bg-glass-card rounded-2xl p-6 border border-slate-800/80 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] font-semibold text-cyan-400 bg-cyan-950/60 border border-cyan-500/30 px-2.5 py-0.5 rounded-full">
                      {item.badge}
                    </span>
                    <span className="text-xl font-extrabold text-white">
                      {item.price}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-white mb-1">
                    {item.title}
                  </h3>
                  <div className="text-[11px] text-slate-400 mb-3">
                    {item.frequency}
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed mb-4">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-800">
                  <button
                    onClick={() => onOpenQuote(item.title)}
                    className="w-full py-2.5 px-3 rounded-lg bg-blue-600/30 hover:bg-blue-600 text-cyan-300 hover:text-white text-xs font-semibold transition"
                  >
                    Select {item.title}
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Interactive Quick Cost Calculator */}
      <section className="py-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-glass-card rounded-3xl p-6 sm:p-8 border border-blue-500/30 shadow-2xl">
          <div className="flex items-center space-x-2 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-2">
            <Calculator className="w-4 h-4" />
            <span>Interactive Cost Estimator</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
            Estimate Your Custom Project Investment
          </h3>
          <p className="text-xs text-slate-400 mb-6">
            Configure your desired combination to see an estimated budget range:
          </p>

          <div className="space-y-4">
            <div>
              <label className="block text-xs font-medium text-slate-300 mb-2">
                Website Scope:
              </label>
              <div className="grid grid-cols-3 gap-2">
                <button
                  type="button"
                  onClick={() => setEstPages("1")}
                  className={`p-3 rounded-xl text-xs font-semibold transition border ${
                    estPages === "1"
                      ? "bg-blue-600 text-white border-blue-400"
                      : "bg-slate-900 text-slate-400 border-slate-800"
                  }`}
                >
                  Starter (Single Page - ₹5,000)
                </button>
                <button
                  type="button"
                  onClick={() => setEstPages("5")}
                  className={`p-3 rounded-xl text-xs font-semibold transition border ${
                    estPages === "5"
                      ? "bg-blue-600 text-white border-blue-400"
                      : "bg-slate-900 text-slate-400 border-slate-800"
                  }`}
                >
                  Business (Up to 5 Pages - ₹8,999)
                </button>
                <button
                  type="button"
                  onClick={() => setEstPages("custom")}
                  className={`p-3 rounded-xl text-xs font-semibold transition border ${
                    estPages === "custom"
                      ? "bg-blue-600 text-white border-blue-400"
                      : "bg-slate-900 text-slate-400 border-slate-800"
                  }`}
                >
                  Advanced (Custom - ₹14,999)
                </button>
              </div>
            </div>

            <div className="pt-2">
              <label className="block text-xs font-medium text-slate-300 mb-2">
                Add-on Services:
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                <label className="flex items-center space-x-2 p-3 rounded-xl bg-slate-900/80 border border-slate-800 cursor-pointer text-xs text-slate-300">
                  <input
                    type="checkbox"
                    checked={estGbp}
                    onChange={(e) => setEstGbp(e.target.checked)}
                    className="rounded text-blue-600 focus:ring-0"
                  />
                  <span>Google Business Profile (+₹2,000)</span>
                </label>

                <label className="flex items-center space-x-2 p-3 rounded-xl bg-slate-900/80 border border-slate-800 cursor-pointer text-xs text-slate-300">
                  <input
                    type="checkbox"
                    checked={estAds}
                    onChange={(e) => setEstAds(e.target.checked)}
                    className="rounded text-blue-600 focus:ring-0"
                  />
                  <span>Google Ads Setup (+₹2,000)</span>
                </label>

                <label className="flex items-center space-x-2 p-3 rounded-xl bg-slate-900/80 border border-slate-800 cursor-pointer text-xs text-slate-300">
                  <input
                    type="checkbox"
                    checked={estSeo}
                    onChange={(e) => setEstSeo(e.target.checked)}
                    className="rounded text-blue-600 focus:ring-0"
                  />
                  <span>Monthly SEO (+₹3,000)</span>
                </label>
              </div>
            </div>

            {/* Total Estimated Calculation Box */}
            <div className="mt-6 p-4 rounded-2xl bg-blue-950/60 border border-blue-500/40 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <div className="text-xs text-slate-400">Estimated Total Package Investment:</div>
                <div className="text-2xl sm:text-3xl font-black text-cyan-400">
                  ₹{calculateEstimate().toLocaleString("en-IN")}{" "}
                  <span className="text-xs font-normal text-slate-400">onwards</span>
                </div>
              </div>

              <button
                onClick={() => onOpenQuote(`Estimated Package: ₹${calculateEstimate().toLocaleString("en-IN")}`)}
                className="w-full sm:w-auto px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold text-xs tracking-wide uppercase transition shadow-lg shadow-blue-600/30"
              >
                Lock In This Estimate
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Transparent Disclaimer Policy */}
      <section className="pt-4 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900/70 p-6 rounded-2xl border border-slate-800 text-xs text-slate-400 leading-relaxed">
          <strong className="text-white block mb-1">Clear Commercial Terms:</strong>
          Final project fees depend on specific business requirements, custom features, and third-party integrations. Domain name registration, cloud web hosting, paid third-party APIs/software, and Google Ads advertising click budget are separate expenses unless explicitly bundled in your written formal quotation.
        </div>
      </section>

    </div>
  );
}
