import React from "react";
import { Link } from "react-router-dom";
import { 
  Users, 
  Sparkles, 
  CheckCircle2, 
  ArrowRight, 
  MessageCircle, 
  HeartPulse, 
  Stethoscope, 
  Car, 
  Palmtree, 
  UtensilsCrossed, 
  GraduationCap, 
  Building2, 
  Dumbbell, 
  ShoppingBag, 
  Home as HomeIcon, 
  Zap, 
  Droplets, 
  BookOpen, 
  Briefcase 
} from "lucide-react";
import { INDUSTRIES_SERVED, AGENCY_INFO } from "../data/agencyData";
import SEOHead from "../components/SEOHead";

const industryIcons = {
  "Ambulance Services": HeartPulse,
  "Hospitals and Clinics": Stethoscope,
  "Salons and Beauty Parlours": Sparkles,
  "Restaurants and Hotels": UtensilsCrossed,
  "Car Travels and Taxi Operators": Car,
  "Travel Agencies & Tour Operators": Palmtree,
  "Real Estate Agencies": Building2,
  "Coaching Centres & Academies": GraduationCap,
  "Gyms and Fitness Centres": Dumbbell,
  "Retail Shops & Local Stores": ShoppingBag,
  "Interior Designers & Architects": HomeIcon,
  "Electrical Services": Zap,
  "Plumbing Services": Droplets,
  "Educational Institutions": BookOpen,
  "Small & Medium Businesses (SMBs)": Briefcase,
};

export default function Industries({ onOpenQuote }) {
  return (
    <div className="w-full bg-[#070d1e] text-slate-100 pb-20">
      
      <SEOHead 
        title="Industries We Serve | Praveen Digital Solutions Hyderabad"
        description="We build high-converting websites tailored for 15+ business sectors: Ambulance services, clinics, salons, travel agencies, car rentals, restaurants, gyms, real estate and more."
      />

      {/* Hero Banner */}
      <section className="pt-16 pb-20 bg-navy-gradient border-b border-slate-800/80">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-blue-950/80 border border-blue-500/30 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <Users className="w-3.5 h-3.5" />
            <span>Sector-Specific Digital Growth</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            Websites Engineered for Your <br />
            <span className="text-gradient">Specific Business Industry.</span>
          </h1>

          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed mb-6">
            A generic template won't work for an ambulance service that needs an urgent calling button, nor will it work for a luxury salon showcasing bridal portfolios. We architect purpose-built websites that solve real industry problems.
          </p>

          <div className="inline-block bg-slate-900/80 border border-slate-700/80 px-4 py-2 rounded-xl text-xs text-slate-300">
            Covering 15+ Core Business Sectors Across Telangana & India
          </div>

        </div>
      </section>

      {/* 15 Industries Breakdown */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {INDUSTRIES_SERVED.map((ind, idx) => {
            const Icon = industryIcons[ind.name] || Briefcase;

            return (
              <div 
                key={ind.name}
                className="bg-glass-card rounded-2xl p-7 border border-slate-800/80 hover:border-cyan-500/40 flex flex-col justify-between group transition-all duration-300"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-blue-600/20 text-cyan-400 flex items-center justify-center border border-blue-500/30 group-hover:bg-blue-600 group-hover:text-white transition duration-300">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-mono text-slate-500">
                      Sector #{idx + 1 < 10 ? `0${idx + 1}` : idx + 1}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-1.5 group-hover:text-cyan-300 transition">
                    {ind.name}
                  </h3>

                  <div className="text-xs font-semibold text-blue-400 mb-3 leading-snug">
                    {ind.headline}
                  </div>

                  <p className="text-xs text-slate-300 leading-relaxed mb-5">
                    {ind.solution}
                  </p>

                  {/* Key Benefits */}
                  <div className="space-y-1.5 pt-4 border-t border-slate-800/80 mb-6">
                    <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-2">
                      Key Growth Drivers:
                    </div>
                    {ind.keyBenefits.map((ben, bIdx) => (
                      <div key={bIdx} className="flex items-start space-x-2 text-xs text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                        <span>{ben}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-800/80 flex items-center space-x-2">
                  <button
                    onClick={() => onOpenQuote(`${ind.name} Website Enquiry`)}
                    className="flex-1 py-2.5 px-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold transition text-center shadow-sm"
                  >
                    Get {ind.name.split(" ")[0]} Quote
                  </button>

                  <a
                    href={`https://wa.me/${AGENCY_INFO.whatsappNumber}?text=Hello%20Praveen%2C%20I%20run%20a%20business%20in%20the%20*${encodeURIComponent(ind.name)}*%20sector.%20I%20would%20like%20to%20know%20how%20a%20website%20can%20help%20me%20grow.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl bg-emerald-950/60 border border-emerald-500/30 text-emerald-400 hover:bg-emerald-600 hover:text-white transition"
                    title="WhatsApp Consultation"
                  >
                    <MessageCircle className="w-4 h-4" />
                  </a>
                </div>

              </div>
            );
          })}
        </div>
      </section>

      {/* Bottom CTA Banner */}
      <section className="pt-8 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="bg-slate-900/60 p-8 rounded-2xl border border-slate-800">
          <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
            Don't See Your Exact Industry Listed?
          </h3>
          <p className="text-slate-300 text-xs sm:text-sm max-w-xl mx-auto mb-6">
            We develop custom web architectures for any commercial domain. Talk directly to founder Akula Praveen Yadav to brainstorm your solution.
          </p>
          <button
            onClick={() => onOpenQuote("Custom Industry Solution")}
            className="px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold text-xs tracking-wide uppercase transition shadow-lg shadow-blue-600/30"
          >
            Discuss Your Custom Industry
          </button>
        </div>
      </section>

    </div>
  );
}
