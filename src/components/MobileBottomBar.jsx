import React from "react";
import { Phone, MessageCircle, Sparkles } from "lucide-react";
import { AGENCY_INFO } from "../data/agencyData";

export default function MobileBottomBar({ onOpenQuote }) {
  return (
    <div className="sm:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#070d1e]/95 backdrop-blur-xl border-t border-slate-800/90 px-3 py-2 shadow-2xl safe-area-pb">
      <div className="grid grid-cols-3 gap-2 items-center">
        
        {/* 1. Direct Call */}
        <a
          href={AGENCY_INFO.callUrl}
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-slate-900 border border-slate-700/80 text-blue-400 active:bg-blue-600 active:text-white transition"
        >
          <Phone className="w-4 h-4 mb-0.5" />
          <span className="text-[10px] font-bold text-white">Call Now</span>
        </a>

        {/* 2. Direct WhatsApp */}
        <a
          href={AGENCY_INFO.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-emerald-600 text-white shadow-lg shadow-emerald-600/30 active:bg-emerald-500 transition"
        >
          <MessageCircle className="w-4 h-4 mb-0.5" />
          <span className="text-[10px] font-extrabold tracking-tight">WhatsApp</span>
        </a>

        {/* 3. Get Free Quote */}
        <button
          onClick={() => onOpenQuote("Website Development")}
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-lg shadow-blue-600/30 active:opacity-90 transition"
        >
          <Sparkles className="w-4 h-4 mb-0.5" />
          <span className="text-[10px] font-extrabold tracking-tight">Free Quote</span>
        </button>

      </div>
    </div>
  );
}
