import React, { useState } from "react";
import { MessageCircle, Phone, X } from "lucide-react";
import { AGENCY_INFO } from "../data/agencyData";

export default function FloatingWhatsApp() {
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <div className="fixed bottom-20 sm:bottom-6 right-4 sm:right-6 z-40 flex flex-col items-end space-y-3">
      
      {/* Interactive Tooltip Callout */}
      {showTooltip && (
        <div className="relative bg-[#0d1b3e] text-slate-100 border border-blue-500/40 rounded-xl px-3.5 py-2 text-xs shadow-2xl shadow-blue-900/60 max-w-xs animate-bounce hidden sm:block">
          <button 
            onClick={() => setShowTooltip(false)}
            className="absolute -top-1.5 -right-1.5 w-4 h-4 bg-slate-800 text-slate-400 hover:text-white rounded-full flex items-center justify-center text-[10px]"
            title="Dismiss message"
          >
            <X className="w-2.5 h-2.5" />
          </button>
          <div className="font-semibold text-cyan-400 mb-0.5 flex items-center space-x-1">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
            <span>Online | Akula Praveen</span>
          </div>
          <p className="text-slate-300 text-[11px] leading-tight">
            Need a professional website or Google Business listing? Chat directly with me on WhatsApp!
          </p>
        </div>
      )}

      {/* Floating Buttons Group */}
      <div className="flex items-center space-x-2">
        {/* Mobile Quick Call Button */}
        <a
          href={AGENCY_INFO.callUrl}
          className="sm:hidden w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center shadow-lg shadow-blue-600/40 hover:bg-blue-500 transition"
          aria-label="Direct Phone Call"
        >
          <Phone className="w-5 h-5" />
        </a>

        {/* WhatsApp Floating Button */}
        <a
          href={AGENCY_INFO.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="relative group flex items-center justify-center w-14 h-14 rounded-full bg-emerald-500 hover:bg-emerald-400 text-white shadow-xl shadow-emerald-500/30 hover:scale-110 transition duration-300 transform"
          aria-label="Chat on WhatsApp"
        >
          {/* Subtle Ring Ping */}
          <span className="absolute -inset-1 rounded-full bg-emerald-400/40 animate-ping opacity-75"></span>
          
          <MessageCircle className="w-7 h-7 relative z-10 fill-current" />
          
          {/* Badge */}
          <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-cyan-400 border-2 border-[#070d1e] rounded-full"></span>
        </a>
      </div>

    </div>
  );
}
