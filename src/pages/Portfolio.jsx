import React, { useState } from "react";
import { 
  Eye, 
  Sparkles, 
  ShieldCheck, 
  ArrowRight, 
  MessageCircle, 
  CheckCircle2, 
  Layers, 
  ExternalLink 
} from "lucide-react";
import { PORTFOLIO_PROJECTS, AGENCY_INFO } from "../data/agencyData";
import SEOHead from "../components/SEOHead";
import ProjectCard from "../components/ProjectCard";

export default function Portfolio({ onOpenQuote }) {
  const [activeTab, setActiveTab] = useState("all");

  const filteredProjects = activeTab === "all"
    ? PORTFOLIO_PROJECTS
    : activeTab === "client"
    ? PORTFOLIO_PROJECTS.filter(p => p.isLiveProject)
    : PORTFOLIO_PROJECTS.filter(p => !p.isLiveProject);

  return (
    <div className="w-full bg-[#070d1e] text-slate-100 pb-20">
      
      <SEOHead 
        title="Portfolio & Projects | Praveen Digital Solutions Hyderabad"
        description="View our website development portfolio including ambulance emergency platforms, salon portals, car rental demos, travel agency websites, and restaurant portals."
      />

      {/* Hero Banner */}
      <section className="pt-16 pb-20 bg-navy-gradient border-b border-slate-800/80">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-blue-950/80 border border-blue-500/30 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <Eye className="w-3.5 h-3.5" />
            <span>Proven Craftsmanship</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            Our Website Portfolio & <br />
            <span className="text-gradient">Industry Case Studies.</span>
          </h1>

          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed mb-8">
            Explore our real client websites and purpose-built concept prototypes. We build websites that don't just look stunning—they generate direct inquiries on phone and WhatsApp.
          </p>

          {/* Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 max-w-md mx-auto">
            <button
              onClick={() => setActiveTab("all")}
              className={`px-5 py-2.5 rounded-xl text-xs font-semibold transition ${
                activeTab === "all"
                  ? "bg-blue-600 text-white shadow-lg shadow-blue-600/30"
                  : "bg-slate-900 text-slate-400 hover:text-white border border-slate-800"
              }`}
            >
              All Showcase ({PORTFOLIO_PROJECTS.length})
            </button>

            <button
              onClick={() => setActiveTab("client")}
              className={`px-5 py-2.5 rounded-xl text-xs font-semibold transition flex items-center space-x-1.5 ${
                activeTab === "client"
                  ? "bg-emerald-600 text-white shadow-lg shadow-emerald-600/30"
                  : "bg-slate-900 text-slate-400 hover:text-white border border-slate-800"
              }`}
            >
              <ShieldCheck className="w-4 h-4" />
              <span>Real Client Projects</span>
            </button>

            <button
              onClick={() => setActiveTab("demo")}
              className={`px-5 py-2.5 rounded-xl text-xs font-semibold transition flex items-center space-x-1.5 ${
                activeTab === "demo"
                  ? "bg-amber-600 text-white shadow-lg shadow-amber-600/30"
                  : "bg-slate-900 text-slate-400 hover:text-white border border-slate-800"
              }`}
            >
              <Sparkles className="w-4 h-4" />
              <span>Concept Demos</span>
            </button>
          </div>

        </div>
      </section>

      {/* Transparency Note */}
      <section className="py-4 bg-[#0a1430] border-b border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-xs text-slate-400">
          <span className="text-cyan-400 font-semibold">Integrity Standard:</span> We clearly distinguish live deployed client applications from demo prototypes. We never fabricate client testimonials, vanity metrics, or fake reviews.
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard 
              key={project.id} 
              project={project} 
              onOpenQuote={onOpenQuote} 
            />
          ))}
        </div>

      </section>

      {/* Bottom CTA */}
      <section className="pt-8 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="bg-slate-900/60 p-8 rounded-2xl border border-slate-800">
          <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
            Want a Custom Website Like One of These?
          </h3>
          <p className="text-slate-300 text-xs sm:text-sm max-w-xl mx-auto mb-6">
            Share your business niche with Akula Praveen Yadav. We can design and launch a custom website matching your exact branding in as fast as 3 to 7 days.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3">
            <button
              onClick={() => onOpenQuote("Custom Portfolio Project")}
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
