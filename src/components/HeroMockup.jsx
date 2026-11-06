import React, { useState } from "react";
import { 
  Laptop, 
  Smartphone, 
  Sparkles, 
  ShieldCheck, 
  Zap, 
  Eye, 
  Layers,
  ArrowRight,
  ExternalLink,
  MessageCircle,
  Phone
} from "lucide-react";
import { AGENCY_INFO } from "../data/agencyData";

export default function HeroMockup() {
  const [activeDevice, setActiveDevice] = useState("both"); // "both" | "desktop" | "mobile"

  return (
    <div className="relative w-full max-w-4xl mx-auto select-none">
      
      {/* Background ambient lighting */}
      <div className="absolute -top-12 -left-12 w-72 h-72 bg-blue-600/20 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute -bottom-10 -right-10 w-80 h-80 bg-cyan-500/20 rounded-full blur-3xl pointer-events-none"></div>

      {/* Interactive Device View Selector Switcher */}
      <div className="flex items-center justify-center mb-6">
        <div className="inline-flex items-center p-1 rounded-xl bg-slate-900/90 border border-slate-800 shadow-xl backdrop-blur-md">
          <button
            onClick={() => setActiveDevice("both")}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition flex items-center space-x-1.5 ${
              activeDevice === "both"
                ? "bg-blue-600 text-white shadow-md shadow-blue-600/30"
                : "text-slate-400 hover:text-white"
            }`}
          >
            <Layers className="w-3.5 h-3.5" />
            <span>Dual View</span>
          </button>

          <button
            onClick={() => setActiveDevice("desktop")}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition flex items-center space-x-1.5 ${
              activeDevice === "desktop"
                ? "bg-blue-600 text-white shadow-md shadow-blue-600/30"
                : "text-slate-400 hover:text-white"
            }`}
          >
            <Laptop className="w-3.5 h-3.5" />
            <span>Desktop Website</span>
          </button>

          <button
            onClick={() => setActiveDevice("mobile")}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition flex items-center space-x-1.5 ${
              activeDevice === "mobile"
                ? "bg-emerald-600 text-white shadow-md shadow-emerald-600/30"
                : "text-slate-400 hover:text-white"
            }`}
          >
            <Smartphone className="w-3.5 h-3.5 text-emerald-300" />
            <span>Mobile Version</span>
          </button>
        </div>
      </div>

      {/* Main Mockups Container */}
      <div className="relative flex flex-col md:flex-row items-center justify-center gap-6 py-4 px-2">
        
        {/* ========================================= */}
        {/* 1. DESKTOP LAPTOP MOCKUP */}
        {/* ========================================= */}
        {(activeDevice === "both" || activeDevice === "desktop") && (
          <div className={`transition-all duration-500 transform ${
            activeDevice === "desktop" 
              ? "w-full max-w-3xl scale-100" 
              : "w-full max-w-xl scale-95 md:scale-100"
          }`}>
            {/* Laptop Screen Bezel */}
            <div className="bg-[#111827] rounded-t-2xl p-2 sm:p-2.5 shadow-2xl border border-slate-700/80 ring-1 ring-blue-500/20">
              
              {/* Screen Header / Web Browser Bar */}
              <div className="bg-[#090d1a] rounded-t-lg px-3 py-2 flex items-center justify-between border-b border-slate-800 text-xs">
                <div className="flex items-center space-x-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/80"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500/80"></div>
                </div>

                {/* URL Address Bar */}
                <div className="flex items-center space-x-1.5 bg-slate-900/90 text-slate-400 px-3 py-1 rounded-md text-[11px] border border-slate-700/60 w-3/5 justify-center">
                  <ShieldCheck className="w-3 h-3 text-emerald-400 shrink-0" />
                  <span className="text-slate-300 font-mono font-medium truncate">https://praveendigitalsolutions.com</span>
                </div>

                <div className="flex items-center space-x-1 text-slate-500">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                  <span className="text-[10px] text-emerald-400 font-semibold hidden sm:inline">LIVE</span>
                </div>
              </div>

              {/* Laptop Screen Content - High Resolution Image Preview */}
              <div className="relative bg-[#070d1e] rounded-b-lg overflow-hidden border border-t-0 border-slate-800 group">
                <img 
                  src="/images/hero-desktop-preview.svg" 
                  alt="Praveen Digital Solutions - Desktop Website Preview with Image" 
                  className="w-full h-auto object-cover group-hover:scale-[1.01] transition-transform duration-500 block"
                />

                {/* Floating Interactive Badge overlay */}
                <div className="absolute bottom-3 left-3 bg-slate-950/90 backdrop-blur-md border border-slate-700/80 rounded-lg px-2.5 py-1 flex items-center space-x-2 text-[11px] shadow-lg">
                  <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                  <span className="text-slate-300 font-medium">Desktop Production Interface</span>
                </div>
              </div>

            </div>

            {/* Laptop Base Stand */}
            <div className="relative mx-auto bg-slate-700 h-3 rounded-b-xl max-w-[85%] shadow-lg flex items-center justify-center">
              <div className="w-16 h-1 bg-slate-900 rounded-b"></div>
            </div>
            <div className="mx-auto bg-slate-800/60 h-1.5 rounded-b-2xl max-w-[95%]"></div>
          </div>
        )}

        {/* ========================================= */}
        {/* 2. SMARTPHONE MOBILE VERSION MOCKUP */}
        {/* ========================================= */}
        {(activeDevice === "both" || activeDevice === "mobile") && (
          <div className={`transition-all duration-500 transform ${
            activeDevice === "mobile"
              ? "w-full max-w-sm mx-auto scale-100"
              : "w-52 sm:w-60 shrink-0 md:-ml-12 mt-4 md:mt-8 z-20 hover:scale-105"
          }`}>
            <div className="relative bg-[#0a0f1d] border-2 border-slate-600/90 rounded-[34px] p-2 shadow-2xl shadow-black/90 ring-2 ring-emerald-500/30">
              
              {/* Phone Dynamic Island / Speaker Notch */}
              <div className="w-16 h-3.5 bg-black rounded-full mx-auto mb-1.5 flex items-center justify-center space-x-1.5">
                <div className="w-2 h-2 rounded-full bg-slate-800"></div>
                <div className="w-1.5 h-1.5 rounded-full bg-blue-900"></div>
              </div>

              {/* Phone Screen Display - High Resolution Mobile Website Preview Image */}
              <div className="relative bg-[#060a17] rounded-[26px] overflow-hidden border border-slate-800/80 group">
                <img 
                  src="/images/hero-mobile-preview.svg" 
                  alt="Praveen Digital Solutions - Mobile Version Preview with Image" 
                  className="w-full h-auto object-cover group-hover:scale-[1.02] transition-transform duration-500 block"
                />

                {/* Mobile Floating Trust Pill */}
                <div className="absolute top-2 left-2 right-2 bg-slate-950/80 backdrop-blur-md rounded-lg px-2 py-1 flex items-center justify-between text-[9px] border border-slate-800">
                  <span className="text-emerald-400 font-bold flex items-center space-x-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span>
                    <span>100% Mobile First</span>
                  </span>
                  <span className="text-slate-300 font-medium">Touch Optimized</span>
                </div>
              </div>

              {/* Phone Bottom Home Bar */}
              <div className="w-14 h-1 bg-slate-500/60 rounded-full mx-auto mt-2"></div>
            </div>
          </div>
        )}

      </div>

      {/* Floating Trust Indicator Chip */}
      <div className="mt-4 flex flex-wrap items-center justify-center gap-3 text-xs text-slate-400">
        <span className="flex items-center space-x-1 bg-slate-900/80 border border-slate-800 px-3 py-1 rounded-full">
          <Zap className="w-3.5 h-3.5 text-cyan-400" />
          <span className="text-slate-200">Mobile &amp; Desktop Unified</span>
        </span>
        <span className="flex items-center space-x-1 bg-slate-900/80 border border-slate-800 px-3 py-1 rounded-full">
          <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
          <span className="text-slate-200">&lt;1.5s Mobile Load Speed</span>
        </span>
        <span className="flex items-center space-x-1 bg-slate-900/80 border border-slate-800 px-3 py-1 rounded-full">
          <Sparkles className="w-3.5 h-3.5 text-amber-400" />
          <span className="text-slate-200">1-Click WhatsApp Direct</span>
        </span>
      </div>

    </div>
  );
}
