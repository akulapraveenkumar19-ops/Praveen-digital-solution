import React from "react";
import { 
  TrendingUp, 
  CheckCircle2, 
  Sparkles, 
  ArrowRight, 
  MessageCircle, 
  ShieldCheck, 
  Search, 
  Gauge, 
  FileCode, 
  Link2,
  LineChart
} from "lucide-react";
import { AGENCY_INFO } from "../data/agencyData";
import SEOHead from "../components/SEOHead";

export default function SEOServices({ onOpenQuote }) {
  const seoPillars = [
    { title: "Targeted Keyword Research", desc: "Finding high-traffic, low-competition local search terms that potential customers in Hyderabad & Telangana enter when looking for your services." },
    { title: "On-Page SEO Optimization", desc: "Crafting optimized meta titles, meta descriptions, H1/H2 header hierarchies, internal linking structures, and image alt attributes." },
    { title: "Local SEO & Citation Audit", desc: "Optimizing your location schema, Google Maps signals, and local directory listings to dominate geographical searches." },
    { title: "Technical SEO & Schema Markup", desc: "Fixing crawl errors, broken links, implementing canonical tags, SSL security, and JSON-LD schema for LocalBusiness." },
    { title: "Core Web Vitals & Speed Tuning", desc: "Optimizing JavaScript, CSS minification, image compression, and server caching to achieve sub-2-second loading times." },
    { title: "Search-Friendly Content Structuring", desc: "Guiding the creation of readable, authoritative service page content that answers common customer questions and ranks naturally." },
    { title: "Google Search Console & Sitemap Setup", desc: "Configuring XML sitemaps, robots.txt directives, and submitting your site to Google Search Console for instant indexation." },
    { title: "Continuous Monitoring & Monthly Reports", desc: "Tracking keyword ranking shifts, organic impressions, user click-throughs, and providing transparent progress reports." }
  ];

  return (
    <div className="w-full bg-[#070d1e] text-slate-100 pb-20">
      
      <SEOHead 
        title="SEO Services Hyderabad | Praveen Digital Solutions"
        description="Rank organically on Google with white-hat On-Page, Local, and Technical SEO in Hyderabad and Telangana. Monthly plans starting from ₹3,000."
      />

      {/* Hero Header */}
      <section className="pt-16 pb-20 bg-navy-gradient border-b border-slate-800/80">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-blue-950/80 border border-blue-500/30 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <TrendingUp className="w-3.5 h-3.5" />
            <span>Service #4: Sustainable Organic Dominance</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            Search Engine Optimization (SEO) <br />
            <span className="text-gradient">Rank on Google Organically.</span>
          </h1>

          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed mb-6">
            Paid ads stop delivering the second you stop spending. Organic SEO builds compounding, long-term search engine authority that delivers free business inquiries month after month.
          </p>

          <div className="inline-block bg-slate-900/80 border border-slate-700/80 px-4 py-2 rounded-xl text-xs text-slate-300 mb-8">
            Starting Price: <strong className="text-emerald-400 font-bold text-sm">₹3,000 / month onwards</strong> • 100% White-Hat Practices
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-3">
            <button
              onClick={() => onOpenQuote("Monthly SEO Service")}
              className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white font-semibold text-xs tracking-wide uppercase transition shadow-lg shadow-blue-600/30"
            >
              Start My SEO Growth Campaign
            </button>
            <a
              href={AGENCY_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs tracking-wide uppercase transition flex items-center justify-center space-x-2"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Discuss SEO on WhatsApp</span>
            </a>
          </div>

        </div>
      </section>

      {/* SEO Pillars Grid */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">
            Our 8-Point White-Hat SEO Framework
          </h2>
          <p className="text-slate-400 text-xs sm:text-sm">
            We follow Google's search quality evaluator guidelines to build lasting ranking resilience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {seoPillars.map((item, idx) => (
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

      {/* Realistic Timeline Expectation */}
      <section className="py-12 bg-slate-900/60 border-t border-slate-800/80">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-xl font-bold text-white mb-2">
            Transparent Timeline Expectations
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-2xl mx-auto mb-6">
            Unlike deceptive agencies that promise overnight #1 rankings, we are honest: Sustainable organic SEO takes <strong>3 to 6 months</strong> of consistent optimization as Google crawls and validates your site's authority. In return, you receive steady, non-stop inquiries with zero recurring ad click costs.
          </p>
          <button
            onClick={() => onOpenQuote("SEO Audit")}
            className="px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold text-xs tracking-wide uppercase transition shadow-lg shadow-blue-600/30"
          >
            Get a Free SEO Website Audit
          </button>
        </div>
      </section>

    </div>
  );
}
