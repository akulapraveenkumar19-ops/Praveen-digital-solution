import React, { useState } from "react";
import { Link } from "react-router-dom";
import { 
  ArrowRight, 
  MessageCircle, 
  Phone, 
  Sparkles, 
  CheckCircle2, 
  Search, 
  Eye, 
  Users, 
  TrendingUp, 
  ShieldCheck, 
  Zap, 
  Star,
  ChevronRight,
  Layers,
  HelpCircle,
  Clock,
  Send
} from "lucide-react";
import { 
  AGENCY_INFO, 
  SERVICES_DATA, 
  PORTFOLIO_PROJECTS, 
  INDUSTRIES_SERVED, 
  PRICING_PACKAGES, 
  DEVELOPMENT_STEPS, 
  WHY_CHOOSE_US 
} from "../data/agencyData";
import SEOHead from "../components/SEOHead";
import HeroMockup from "../components/HeroMockup";
import ServiceCard from "../components/ServiceCard";
import ProjectCard from "../components/ProjectCard";

export default function Home({ onOpenQuote }) {
  const [portfolioTab, setPortfolioTab] = useState("all");

  const filteredProjects = portfolioTab === "all"
    ? PORTFOLIO_PROJECTS
    : portfolioTab === "client"
    ? PORTFOLIO_PROJECTS.filter(p => p.isLiveProject)
    : PORTFOLIO_PROJECTS.filter(p => !p.isLiveProject);

  return (
    <div className="w-full bg-[#070d1e] text-slate-100 overflow-hidden">
      
      {/* SEO META TAGS */}
      <SEOHead 
        title="Praveen Digital Solutions | Website Development & Digital Marketing Hyderabad"
        description="Praveen Digital Solutions offers professional website development, Google Business Profile services, Google Ads and SEO for businesses in Hyderabad and across Telangana."
      />

      {/* ================================================== */}
      {/* 1. HERO SECTION */}
      {/* ================================================== */}
      <section className="relative pt-12 pb-20 md:pt-20 md:pb-32 bg-navy-gradient border-b border-slate-800/80">
        
        {/* Glow ambient spots */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-blue-600/15 rounded-full blur-[120px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="text-center max-w-4xl mx-auto mb-12">
            
            {/* Top Pill / Badge */}
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-blue-950/80 border border-blue-500/30 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-6 shadow-sm">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Hyderabad & Telangana's Trusted Web Agency</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.15] mb-6">
              Grow Your Business Online With <br className="hidden sm:inline" />
              <span className="text-gradient">
                Powerful Websites.
              </span>
            </h1>

            {/* Subheading */}
            <p className="text-base sm:text-xl font-medium text-slate-200 mb-4 leading-relaxed max-w-3xl mx-auto">
              We design professional websites and help businesses grow online through Google Business Profile, SEO and Google Ads.
            </p>

            {/* Supporting Text */}
            <p className="text-xs sm:text-sm text-slate-400 max-w-2xl mx-auto leading-relaxed mb-8">
              From small local businesses to growing companies, we help you build a strong digital presence and make it easier for customers to discover and contact your business.
            </p>

            {/* 3 Call-To-Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 max-w-xl mx-auto">
              
              {/* Button 1: Get a Free Consultation */}
              <button
                onClick={() => onOpenQuote("Website Development")}
                className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white font-semibold text-sm shadow-xl shadow-blue-600/30 hover:scale-[1.02] active:scale-[0.98] transition transform duration-200 flex items-center justify-center space-x-2"
              >
                <span>Get a Free Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              {/* Button 2: View Our Portfolio */}
              <Link
                to="/portfolio"
                className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-slate-900/90 hover:bg-slate-800 border border-slate-700/80 text-slate-200 hover:text-white font-semibold text-sm transition flex items-center justify-center space-x-2"
              >
                <span>View Our Portfolio</span>
                <Eye className="w-4 h-4 text-cyan-400" />
              </Link>

              {/* Button 3: WhatsApp Us */}
              <a
                href={AGENCY_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-emerald-600/90 hover:bg-emerald-500 text-white font-semibold text-sm shadow-lg shadow-emerald-600/20 transition flex items-center justify-center space-x-2"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp Us</span>
              </a>

            </div>

          </div>

          {/* Hero Visual: Laptop and Smartphone with business website displayed */}
          <div className="mt-8 sm:mt-12">
            <HeroMockup />
          </div>

        </div>
      </section>

      {/* ================================================== */}
      {/* 2. VALUE PROPOSITION SECTION */}
      {/* "Your Business Deserves a Powerful Online Presence." */}
      {/* ================================================== */}
      <section className="py-20 bg-[#091024] border-b border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center space-x-1.5 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-2">
              <Zap className="w-4 h-4 text-cyan-400" />
              <span>Why Online Presence Matters</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
              Your Business Deserves a Powerful Online Presence.
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-3 leading-relaxed">
              Every day, thousands of potential customers in Hyderabad and across Telangana search Google for the exact services you provide. Without a professional website, you hand those paying customers directly to your competitors.
            </p>
          </div>

          {/* 5 Core Pillars Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            
            {/* Pillar 1: Get Discovered Online */}
            <div className="bg-glass-card rounded-2xl p-6 text-center border border-slate-800/80 hover:border-blue-500/40 transition">
              <div className="w-12 h-12 rounded-xl bg-blue-600/20 text-cyan-400 flex items-center justify-center mx-auto mb-4 border border-blue-500/30">
                <Search className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-white mb-2">
                Get Discovered Online
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Be visible right at the top when local customers search for your services on Google Search and Google Maps.
              </p>
            </div>

            {/* Pillar 2: Showcase Products & Services */}
            <div className="bg-glass-card rounded-2xl p-6 text-center border border-slate-800/80 hover:border-blue-500/40 transition">
              <div className="w-12 h-12 rounded-xl bg-blue-600/20 text-cyan-400 flex items-center justify-center mx-auto mb-4 border border-blue-500/30">
                <Layers className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-white mb-2">
                Showcase Offerings
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Present your packages, high-definition photo galleries, pricing tiers, and special offers with total clarity.
              </p>
            </div>

            {/* Pillar 3: Easy Customer Contact */}
            <div className="bg-glass-card rounded-2xl p-6 text-center border border-slate-800/80 hover:border-blue-500/40 transition">
              <div className="w-12 h-12 rounded-xl bg-blue-600/20 text-cyan-400 flex items-center justify-center mx-auto mb-4 border border-blue-500/30">
                <Phone className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-white mb-2">
                Frictionless Contact
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Instant one-click WhatsApp chat and direct dialing buttons make it effortless for mobile visitors to reach you.
              </p>
            </div>

            {/* Pillar 4: Build Customer Trust */}
            <div className="bg-glass-card rounded-2xl p-6 text-center border border-slate-800/80 hover:border-blue-500/40 transition">
              <div className="w-12 h-12 rounded-xl bg-blue-600/20 text-cyan-400 flex items-center justify-center mx-auto mb-4 border border-blue-500/30">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-white mb-2">
                Build Instant Trust
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                A clean, modern agency-grade website positions your company as a verified, legitimate industry authority.
              </p>
            </div>

            {/* Pillar 5: Generate Business Enquiries */}
            <div className="bg-glass-card rounded-2xl p-6 text-center border border-slate-800/80 hover:border-blue-500/40 transition">
              <div className="w-12 h-12 rounded-xl bg-blue-600/20 text-cyan-400 flex items-center justify-center mx-auto mb-4 border border-blue-500/30">
                <TrendingUp className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-white mb-2">
                Generate Inquiries
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Turn passive browsers into paying customers with optimized conversion forms and high-intent sales funnels.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* ================================================== */}
      {/* 3. CORE SERVICES SHOWCASE */}
      {/* ================================================== */}
      <section className="py-20 bg-[#070d1e] border-b border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-14">
            <div>
              <div className="inline-flex items-center space-x-1.5 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-2">
                <Sparkles className="w-4 h-4 text-cyan-400" />
                <span>Our Digital Agency Services</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
                Complete Digital Growth Services.
              </h2>
              <p className="text-slate-400 text-sm max-w-xl mt-2">
                From high-performing web engineering to Google local dominance and paid ad campaigns, we deliver tangible business results.
              </p>
            </div>

            <div className="mt-4 md:mt-0">
              <Link
                to="/services"
                className="inline-flex items-center space-x-1.5 text-cyan-400 hover:text-cyan-300 font-semibold text-sm transition"
              >
                <span>View All Service Details</span>
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Service Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES_DATA.map((service) => (
              <ServiceCard 
                key={service.id} 
                service={service} 
                onOpenQuote={onOpenQuote} 
              />
            ))}
          </div>

        </div>
      </section>

      {/* ================================================== */}
      {/* 4. FEATURED PORTFOLIO SHOWCASE */}
      {/* ================================================== */}
      <section className="py-20 bg-[#0a1127] border-b border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-10">
            <div className="inline-flex items-center space-x-1.5 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-2">
              <Eye className="w-4 h-4 text-cyan-400" />
              <span>Real Work & Demonstrations</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
              Featured Client & Concept Projects.
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-2">
              We take pride in building fast, purpose-built websites. We transparently separate real client work from prototype concept demos.
            </p>

            {/* Filter Tabs */}
            <div className="flex items-center justify-center space-x-2 mt-6">
              <button
                onClick={() => setPortfolioTab("all")}
                className={`px-4 py-2 rounded-xl text-xs font-semibold transition ${
                  portfolioTab === "all"
                    ? "bg-blue-600 text-white shadow-md shadow-blue-600/30"
                    : "bg-slate-900 text-slate-400 hover:text-white"
                }`}
              >
                All Projects ({PORTFOLIO_PROJECTS.length})
              </button>
              <button
                onClick={() => setPortfolioTab("client")}
                className={`px-4 py-2 rounded-xl text-xs font-semibold transition flex items-center space-x-1.5 ${
                  portfolioTab === "client"
                    ? "bg-emerald-600 text-white shadow-md shadow-emerald-600/30"
                    : "bg-slate-900 text-slate-400 hover:text-white"
                }`}
              >
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Client Projects (2)</span>
              </button>
              <button
                onClick={() => setPortfolioTab("demo")}
                className={`px-4 py-2 rounded-xl text-xs font-semibold transition flex items-center space-x-1.5 ${
                  portfolioTab === "demo"
                    ? "bg-amber-600 text-white shadow-md shadow-amber-600/30"
                    : "bg-slate-900 text-slate-400 hover:text-white"
                }`}
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>Concept Demos (4)</span>
              </button>
            </div>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <ProjectCard 
                key={project.id} 
                project={project} 
                onOpenQuote={onOpenQuote} 
              />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/portfolio"
              className="inline-flex items-center space-x-2 px-6 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-200 hover:text-white text-xs font-semibold transition"
            >
              <span>Explore All Industry Case Studies</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

        </div>
      </section>

      {/* ================================================== */}
      {/* 5. 5-STEP DEVELOPMENT PROCESS */}
      {/* ================================================== */}
      <section className="py-20 bg-[#070d1e] border-b border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center space-x-1.5 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-2">
              <Clock className="w-4 h-4 text-cyan-400" />
              <span>How We Work</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
              Our 5-Step Proven Development Process.
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-2">
              A transparent, hassle-free roadmap from initial conversation to live website launch.
            </p>
          </div>

          {/* Steps Timeline Grid */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6 relative">
            {DEVELOPMENT_STEPS.map((step, idx) => (
              <div 
                key={step.step}
                className="bg-glass-card rounded-2xl p-6 border border-slate-800/80 relative flex flex-col justify-between group hover:border-blue-500/40 transition"
              >
                <div>
                  <div className="text-3xl font-black text-cyan-400/40 mb-3 group-hover:text-cyan-400 transition font-mono">
                    {step.step}
                  </div>
                  <h3 className="text-base font-bold text-white mb-2 leading-snug">
                    {step.title}
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-800/80 flex items-center text-[10px] text-blue-400 font-semibold uppercase">
                  <span>Phase {idx + 1}</span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ================================================== */}
      {/* 6. INDUSTRIES WE SERVE PREVIEW */}
      {/* ================================================== */}
      <section className="py-20 bg-[#091024] border-b border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-14">
            <div>
              <div className="inline-flex items-center space-x-1.5 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-2">
                <Users className="w-4 h-4 text-cyan-400" />
                <span>Tailored Industry Solutions</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
                Websites Built for Every Industry.
              </h2>
              <p className="text-slate-400 text-sm max-w-xl mt-2">
                We understand the unique lead generation dynamics for emergency services, local retail, medical clinics, hospitality, and service technicians.
              </p>
            </div>

            <div className="mt-4 md:mt-0">
              <Link
                to="/industries"
                className="inline-flex items-center space-x-1.5 text-cyan-400 hover:text-cyan-300 font-semibold text-sm transition"
              >
                <span>Browse All 15 Industries</span>
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Industry Cards Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {INDUSTRIES_SERVED.map((ind, idx) => (
              <Link
                key={ind.name}
                to="/industries"
                className="bg-glass-card rounded-xl p-4 border border-slate-800/80 hover:border-cyan-500/50 hover:bg-blue-950/30 transition text-left group"
              >
                <div className="text-xs font-bold text-white group-hover:text-cyan-300 transition">
                  {ind.name}
                </div>
                <div className="text-[11px] text-slate-400 line-clamp-2 mt-1 leading-snug">
                  {ind.headline}
                </div>
                <div className="text-[10px] text-blue-400 mt-2 font-medium flex items-center space-x-1">
                  <span>View Solutions</span>
                  <ArrowRight className="w-2.5 h-2.5 group-hover:translate-x-1 transition" />
                </div>
              </Link>
            ))}
          </div>

        </div>
      </section>

      {/* ================================================== */}
      {/* 7. TRANSPARENT PRICING PREVIEW */}
      {/* ================================================== */}
      <section className="py-20 bg-[#070d1e] border-b border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center space-x-1.5 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-2">
              <ShieldCheck className="w-4 h-4 text-cyan-400" />
              <span>Honest & Upfront</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
              Clear, Budget-Friendly Packages.
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-2">
              Quality website development does not need to cost a fortune. Choose a package tailored to your current stage of growth.
            </p>
          </div>

          {/* Pricing Grid */}
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

                <div>
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
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center text-xs text-slate-400 max-w-2xl mx-auto bg-slate-900/60 p-4 rounded-xl border border-slate-800">
            <strong>Transparency Notice:</strong> Final project costs depend on exact business requirements. Domain registration, cloud hosting, third-party software, and Google Ads advertising click budget are paid separately unless expressly bundled in your tailored quotation.
          </div>

        </div>
      </section>

      {/* ================================================== */}
      {/* 8. WHY CHOOSE PRAVEEN DIGITAL SOLUTIONS */}
      {/* ================================================== */}
      <section className="py-20 bg-[#0a1127] border-b border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center space-x-1.5 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-2">
              <Star className="w-4 h-4 text-cyan-400" />
              <span>Why Business Owners Trust Us</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
              Why Choose Praveen Digital Solutions?
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-2">
              We focus on measurable business growth, direct communication, and reliable ongoing support.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {WHY_CHOOSE_US.map((item, idx) => (
              <div
                key={idx}
                className="bg-glass-card rounded-2xl p-6 border border-slate-800/80 hover:border-blue-500/40 transition"
              >
                <div className="w-10 h-10 rounded-xl bg-blue-600/20 text-cyan-400 flex items-center justify-center mb-4 border border-blue-500/30">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ================================================== */}
      {/* 9. AUTHENTIC CLIENT NOTICE / TESTIMONIAL INVITATION */}
      {/* Strictly following: Never generate fake reviews! */}
      {/* ================================================== */}
      <section className="py-16 bg-[#070d1e] border-b border-slate-800/80">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          
          <div className="bg-gradient-to-br from-blue-950/70 via-slate-900/90 to-slate-950 p-8 sm:p-10 rounded-2xl border border-blue-500/30 shadow-2xl relative overflow-hidden">
            
            <div className="w-14 h-14 rounded-full bg-cyan-500/20 text-cyan-400 flex items-center justify-center mx-auto mb-4 border border-cyan-500/40">
              <Sparkles className="w-7 h-7" />
            </div>

            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3">
              Your Feedback Could Be Featured Here.
            </h3>

            <p className="text-slate-300 text-sm max-w-xl mx-auto leading-relaxed mb-6">
              We strictly uphold truth and integrity in digital marketing. We do not manufacture fake 5-star reviews or fabricate client testimonials. Instead, we invite you to become one of our pioneer business clients and experience dedicated craftsmanship.
            </p>

            <div className="inline-flex items-center space-x-2 text-xs font-semibold text-emerald-400 bg-emerald-950/60 border border-emerald-500/40 px-4 py-2 rounded-full mb-6">
              <CheckCircle2 className="w-4 h-4" />
              <span>100% Genuine Work • Founder-Led Dedication</span>
            </div>

            <div>
              <button
                onClick={() => onOpenQuote("Founding Client Special Offer")}
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white font-semibold text-xs tracking-wide uppercase transition shadow-lg shadow-blue-600/30"
              >
                Partner With Us Today
              </button>
            </div>

          </div>

        </div>
      </section>

      {/* ================================================== */}
      {/* 10. BOTTOM CALL-TO-ACTION BANNER */}
      {/* ================================================== */}
      <section className="py-20 bg-gradient-to-b from-[#0a1226] to-[#050b18] relative">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
            Ready to Take Your Business to the Next Level?
          </h2>

          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto mb-8 leading-relaxed">
            Let's discuss how a modern website and targeted Google visibility can generate continuous inquiries for your company in Hyderabad, Telangana, and across India.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={AGENCY_INFO.callUrl}
              className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs tracking-wide uppercase transition shadow-xl shadow-blue-600/30 flex items-center justify-center space-x-2"
            >
              <Phone className="w-4 h-4" />
              <span>Call +91 9505164685</span>
            </a>

            <a
              href={AGENCY_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs tracking-wide uppercase transition shadow-xl shadow-emerald-600/30 flex items-center justify-center space-x-2"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Chat on WhatsApp</span>
            </a>

            <button
              onClick={() => onOpenQuote("Custom Consultation")}
              className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-semibold text-xs tracking-wide uppercase transition flex items-center justify-center space-x-2"
            >
              <span>Get Free Quote</span>
            </button>
          </div>

        </div>
      </section>

    </div>
  );
}
