import React from "react";
import { 
  ExternalLink, 
  CheckCircle2, 
  Sparkles, 
  ShieldCheck, 
  Layers, 
  MessageCircle,
  Eye,
  Check
} from "lucide-react";
import { AGENCY_INFO } from "../data/agencyData";

export default function ProjectCard({ project, onOpenQuote }) {
  const isClient = project.isLiveProject;

  return (
    <div className="bg-glass-card rounded-2xl overflow-hidden border border-slate-800/80 hover:border-blue-500/40 flex flex-col justify-between transition-all duration-300 group">
      
      {/* Project Visual Banner with Real Website Preview Image */}
      <div className="relative h-52 sm:h-56 bg-slate-950 overflow-hidden border-b border-slate-800 group">
        <img 
          src={project.previewImage} 
          alt={project.title} 
          className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent pointer-events-none"></div>

        {/* Top Badges */}
        <div className="absolute top-3 left-3 right-3 z-10 flex items-center justify-between">
          <span className="text-[11px] font-semibold text-slate-200 bg-slate-900/90 backdrop-blur-md px-2.5 py-1 rounded-md border border-slate-700/80 shadow">
            {project.category}
          </span>

          {isClient ? (
            <span className="text-[11px] font-semibold text-emerald-300 bg-emerald-950/90 border border-emerald-500/50 px-2.5 py-1 rounded-full flex items-center space-x-1 shadow">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>Real Client Project</span>
            </span>
          ) : (
            <span className="text-[11px] font-semibold text-amber-300 bg-amber-950/90 border border-amber-500/50 px-2.5 py-1 rounded-full flex items-center space-x-1 shadow">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>Sample Demo Concept</span>
            </span>
          )}
        </div>

        {/* Bottom Bar on image */}
        <div className="absolute bottom-2.5 left-3 right-3 z-10 flex items-center justify-between text-[11px] text-slate-300">
          <span className="flex items-center space-x-1 text-cyan-400 font-mono text-[10px] bg-slate-900/90 px-2 py-0.5 rounded border border-slate-800">
            <Eye className="w-3 h-3" />
            <span>Interactive UI Preview</span>
          </span>
          <span className="text-[10px] bg-blue-900/70 text-blue-200 px-2 py-0.5 rounded border border-blue-500/30">
            100% Mobile Ready
          </span>
        </div>
      </div>

      {/* Content Details */}
      <div className="p-6 flex-1 flex flex-col justify-between">
        <div>
          <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-300 transition">
            {project.title}
          </h3>

          <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-4">
            {project.description}
          </p>

          {/* Key Features List */}
          <div className="space-y-1.5 mb-5">
            <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-1">
              Core Capabilities:
            </div>
            {project.features.map((feat, idx) => (
              <div key={idx} className="flex items-start space-x-2 text-xs text-slate-300">
                <Check className="w-3.5 h-3.5 text-blue-400 shrink-0 mt-0.5" />
                <span>{feat}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Tech Stack Chips & Buttons */}
        <div>
          {/* Tech badges */}
          <div className="flex flex-wrap gap-1.5 mb-5 pt-3 border-t border-slate-800">
            {project.technologies.map((tech, idx) => (
              <span
                key={idx}
                className="text-[10px] font-medium text-slate-400 bg-slate-900 border border-slate-800 px-2 py-0.5 rounded-md"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Action CTAs */}
          <div className="grid grid-cols-2 gap-2 pt-2 border-t border-slate-800">
            <button
              onClick={() => onOpenQuote(project.title)}
              className="w-full py-2.5 px-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold flex items-center justify-center space-x-1 transition shadow-sm"
            >
              <span>Build Similar</span>
            </button>

            <a
              href={`https://wa.me/${AGENCY_INFO.whatsappNumber}?text=Hello%20Praveen%2C%20I%20saw%20your%20portfolio%20project%20*${encodeURIComponent(project.title)}*%20and%20want%20a%20similar%20website%20for%20my%20business.`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 px-3 rounded-xl bg-emerald-950/60 hover:bg-emerald-900/60 border border-emerald-500/40 text-emerald-400 text-xs font-medium flex items-center justify-center space-x-1 transition"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>Discuss Project</span>
            </a>
          </div>

        </div>
      </div>

    </div>
  );
}
