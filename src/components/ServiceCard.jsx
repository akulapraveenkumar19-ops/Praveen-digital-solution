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
  Zap 
} from "lucide-react";
import { AGENCY_INFO } from "../data/agencyData";

const iconMap = {
  Globe: Globe,
  MapPin: MapPin,
  Target: Target,
  TrendingUp: TrendingUp,
  Wrench: Wrench
};

export default function ServiceCard({ service, onOpenQuote }) {
  const IconComponent = iconMap[service.icon] || Globe;

  return (
    <div className="bg-glass-card rounded-2xl p-6 sm:p-7 flex flex-col justify-between relative group border border-slate-800/80 hover:border-blue-500/40 transition-all duration-300">
      
      {/* Top Header */}
      <div>
        <div className="flex items-center justify-between mb-5">
          <div className="w-13 h-13 rounded-xl bg-gradient-to-tr from-blue-700/40 to-cyan-500/20 border border-blue-500/30 flex items-center justify-center text-cyan-400 group-hover:scale-110 group-hover:text-white group-hover:bg-blue-600 transition duration-300">
            <IconComponent className="w-7 h-7" />
          </div>
          
          <div className="flex flex-col items-end">
            <span className="text-[11px] font-semibold uppercase tracking-wider text-cyan-400 bg-cyan-950/60 border border-cyan-500/30 px-2.5 py-0.5 rounded-full mb-1">
              {service.badge}
            </span>
            <span className="text-xs text-slate-400 font-medium">
              From <strong className="text-white font-semibold">{service.startingPrice}</strong>
            </span>
          </div>
        </div>

        <h3 className="text-xl font-bold text-white mb-2.5 group-hover:text-cyan-300 transition">
          {service.title}
        </h3>

        <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-6">
          {service.shortDesc}
        </p>

        {/* Features Checklist */}
        <div className="space-y-2 mb-6 pt-4 border-t border-slate-800/80">
          <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-2">
            Key Deliverables:
          </div>
          {service.features.slice(0, 4).map((feat, idx) => (
            <div key={idx} className="flex items-start space-x-2 text-xs text-slate-300">
              <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
              <span>{feat}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Card Actions */}
      <div className="pt-4 border-t border-slate-800/80 space-y-2.5">
        <div className="grid grid-cols-2 gap-2">
          <Link
            to={`/services/${service.slug}`}
            className="w-full py-2.5 px-3 rounded-xl bg-slate-800/80 hover:bg-slate-700/80 text-slate-200 hover:text-white text-xs font-semibold flex items-center justify-center space-x-1 transition"
          >
            <span>Learn Details</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>

          <button
            onClick={() => onOpenQuote(service.title)}
            className="w-full py-2.5 px-3 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white text-xs font-semibold flex items-center justify-center space-x-1 shadow-md shadow-blue-600/20 transition"
          >
            <span>Get Quote</span>
          </button>
        </div>

        <a
          href={`https://wa.me/${AGENCY_INFO.whatsappNumber}?text=Hello%20Praveen%2C%20I%20am%20interested%20in%20your%20*${encodeURIComponent(service.title)}*%20service.%20Please%20share%20quotation%20and%20timeline.`}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full py-2 px-3 rounded-xl bg-emerald-950/40 hover:bg-emerald-900/50 border border-emerald-500/30 text-emerald-400 text-[11px] font-medium flex items-center justify-center space-x-1.5 transition"
        >
          <MessageCircle className="w-3.5 h-3.5" />
          <span>Quick WhatsApp Enquiry</span>
        </a>
      </div>

    </div>
  );
}
