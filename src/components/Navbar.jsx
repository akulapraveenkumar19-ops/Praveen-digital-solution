import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { 
  Phone, 
  Mail, 
  MapPin, 
  MessageCircle, 
  ChevronDown, 
  Menu, 
  X, 
  Code2, 
  Sparkles,
  ArrowRight,
  Globe,
  MapPinned,
  Target,
  TrendingUp
} from "lucide-react";
import { AGENCY_INFO } from "../data/agencyData";

export default function Navbar({ onOpenQuote }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on page transition
  useEffect(() => {
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    {
      name: "Services",
      path: "/services",
      hasDropdown: true,
      subItems: [
        { name: "All Services Overview", path: "/services", icon: Sparkles, desc: "Explore our full suite of solutions" },
        { name: "Website Development", path: "/services/website-development", icon: Globe, desc: "Fast, custom & responsive web designs" },
        { name: "Google Business Profile", path: "/services/google-business-profile", icon: MapPinned, desc: "Local Maps setup & optimization" },
        { name: "Google Ads (PPC)", path: "/services/google-ads", icon: Target, desc: "High-ROI lead generation ads" },
        { name: "SEO Services", path: "/services/seo-services", icon: TrendingUp, desc: "Organic search ranking growth" },
      ]
    },
    { name: "Portfolio", path: "/portfolio" },
    { name: "Industries", path: "/industries" },
    { name: "Pricing", path: "/pricing" },
    { name: "Contact Us", path: "/contact" },
  ];

  const isActive = (path) => {
    if (path === "/" && location.pathname === "/") return true;
    if (path !== "/" && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <header className="sticky top-0 z-40 w-full transition-all duration-300">
      
      {/* Top Contact Bar */}
      <div className="bg-[#050b1a] text-xs text-slate-300 border-b border-slate-800/80 py-2 px-4 hidden lg:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-6">
            <span className="flex items-center space-x-1.5 text-slate-400">
              <MapPin className="w-3.5 h-3.5 text-cyan-400" />
              <span>{AGENCY_INFO.location} • Serving All Telangana & India</span>
            </span>
            <a 
              href={AGENCY_INFO.callUrl} 
              className="flex items-center space-x-1.5 hover:text-cyan-400 transition"
            >
              <Phone className="w-3.5 h-3.5 text-blue-400" />
              <span>{AGENCY_INFO.phoneFormatted}</span>
            </a>
            <a 
              href={`mailto:${AGENCY_INFO.email}`} 
              className="flex items-center space-x-1.5 hover:text-cyan-400 transition"
            >
              <Mail className="w-3.5 h-3.5 text-blue-400" />
              <span>{AGENCY_INFO.email}</span>
            </a>
          </div>

          <div className="flex items-center space-x-4">
            <a
              href={AGENCY_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-1 text-emerald-400 hover:text-emerald-300 font-medium transition"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>WhatsApp Direct: {AGENCY_INFO.phoneFormatted}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div 
        className={`w-full transition-all duration-300 ${
          isScrolled 
            ? "bg-[#070d1e]/95 backdrop-blur-md shadow-xl border-b border-blue-900/30 py-3" 
            : "bg-[#070d1e]/85 backdrop-blur-sm border-b border-slate-800/60 py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Brand Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-700 via-blue-600 to-cyan-400 flex items-center justify-center text-white shadow-lg shadow-blue-600/30 group-hover:scale-105 transition transform">
              <Code2 className="w-6 h-6" />
            </div>
            <div>
              <div className="text-lg md:text-xl font-extrabold tracking-tight text-white flex items-center">
                <span>PRAVEEN</span>
                <span className="text-cyan-400 ml-1.5 font-bold">DIGITAL</span>
              </div>
              <div className="text-[10px] uppercase tracking-wider text-slate-400 font-medium -mt-1">
                Solutions & Web Growth
              </div>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => {
              if (link.hasDropdown) {
                return (
                  <div 
                    key={link.name} 
                    className="relative"
                    onMouseEnter={() => setServicesDropdownOpen(true)}
                    onMouseLeave={() => setServicesDropdownOpen(false)}
                  >
                    <button
                      className={`px-3 py-2 rounded-lg text-sm font-medium transition flex items-center space-x-1 ${
                        isActive(link.path)
                          ? "text-cyan-400 bg-blue-950/40"
                          : "text-slate-200 hover:text-white hover:bg-slate-800/40"
                      }`}
                    >
                      <span>{link.name}</span>
                      <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${servicesDropdownOpen ? "rotate-180" : ""}`} />
                    </button>

                    {/* Services Dropdown Menu */}
                    {servicesDropdownOpen && (
                      <div className="absolute top-full left-0 w-80 pt-2 z-50">
                        <div className="bg-[#0b152e] border border-blue-500/20 rounded-xl p-2 shadow-2xl shadow-blue-950/80 backdrop-blur-xl">
                          {link.subItems.map((sub) => {
                            const Icon = sub.icon;
                            return (
                              <Link
                                key={sub.name}
                                to={sub.path}
                                className="flex items-start space-x-3 p-2.5 rounded-lg hover:bg-blue-600/10 hover:border-blue-500/30 transition group"
                              >
                                <div className="p-2 rounded-lg bg-blue-900/30 text-cyan-400 group-hover:bg-blue-600 group-hover:text-white transition">
                                  <Icon className="w-4 h-4" />
                                </div>
                                <div>
                                  <div className="text-sm font-semibold text-white group-hover:text-cyan-300 transition">
                                    {sub.name}
                                  </div>
                                  <div className="text-xs text-slate-400 leading-tight">
                                    {sub.desc}
                                  </div>
                                </div>
                              </Link>
                            );
                          })}
                        </div>
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`px-3 py-2 rounded-lg text-sm font-medium transition ${
                    isActive(link.path)
                      ? "text-cyan-400 bg-blue-950/40"
                      : "text-slate-200 hover:text-white hover:bg-slate-800/40"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center space-x-3">
            <a
              href={AGENCY_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 hover:bg-emerald-500 hover:text-white transition shadow-sm"
              title="Chat with Praveen on WhatsApp"
            >
              <MessageCircle className="w-4 h-4" />
            </a>

            <button
              onClick={() => onOpenQuote("Website Development")}
              className="relative group overflow-hidden px-5 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 text-white font-semibold text-xs tracking-wide uppercase shadow-lg shadow-blue-600/30 hover:shadow-cyan-500/40 hover:scale-[1.02] active:scale-[0.98] transition transform duration-200"
            >
              <span className="flex items-center space-x-1.5">
                <span>Get a Quote</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition" />
              </span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center space-x-2">
            <button
              onClick={() => onOpenQuote("Website Development")}
              className="px-3 py-1.5 rounded-lg bg-gradient-to-r from-blue-600 to-cyan-500 text-white text-xs font-semibold"
            >
              Quote
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-slate-800 text-slate-200 hover:text-white transition"
              aria-label="Toggle navigation"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0a1226] border-b border-slate-800 px-4 pt-3 pb-6 shadow-2xl animate-fade-in">
          <div className="space-y-1">
            <Link
              to="/"
              className={`block px-3 py-2 rounded-lg text-sm font-medium ${
                isActive("/") ? "bg-blue-600/20 text-cyan-400" : "text-slate-200"
              }`}
            >
              Home
            </Link>
            <Link
              to="/about"
              className={`block px-3 py-2 rounded-lg text-sm font-medium ${
                isActive("/about") ? "bg-blue-600/20 text-cyan-400" : "text-slate-200"
              }`}
            >
              About Us
            </Link>

            {/* Mobile Services Accordion */}
            <div className="py-1">
              <div className="px-3 py-1 text-xs font-semibold uppercase tracking-wider text-slate-400">
                Services
              </div>
              <div className="pl-3 space-y-1 mt-1 border-l-2 border-blue-500/30 ml-2">
                <Link to="/services" className="block px-2 py-1.5 text-xs text-slate-300 hover:text-cyan-400">
                  Overview of All Services
                </Link>
                <Link to="/services/website-development" className="block px-2 py-1.5 text-xs text-slate-300 hover:text-cyan-400">
                  Website Development
                </Link>
                <Link to="/services/google-business-profile" className="block px-2 py-1.5 text-xs text-slate-300 hover:text-cyan-400">
                  Google Business Profile
                </Link>
                <Link to="/services/google-ads" className="block px-2 py-1.5 text-xs text-slate-300 hover:text-cyan-400">
                  Google Ads (PPC)
                </Link>
                <Link to="/services/seo-services" className="block px-2 py-1.5 text-xs text-slate-300 hover:text-cyan-400">
                  SEO Services
                </Link>
              </div>
            </div>

            <Link
              to="/portfolio"
              className={`block px-3 py-2 rounded-lg text-sm font-medium ${
                isActive("/portfolio") ? "bg-blue-600/20 text-cyan-400" : "text-slate-200"
              }`}
            >
              Portfolio & Projects
            </Link>
            <Link
              to="/industries"
              className={`block px-3 py-2 rounded-lg text-sm font-medium ${
                isActive("/industries") ? "bg-blue-600/20 text-cyan-400" : "text-slate-200"
              }`}
            >
              Industries We Serve
            </Link>
            <Link
              to="/pricing"
              className={`block px-3 py-2 rounded-lg text-sm font-medium ${
                isActive("/pricing") ? "bg-blue-600/20 text-cyan-400" : "text-slate-200"
              }`}
            >
              Transparent Pricing
            </Link>
            <Link
              to="/contact"
              className={`block px-3 py-2 rounded-lg text-sm font-medium ${
                isActive("/contact") ? "bg-blue-600/20 text-cyan-400" : "text-slate-200"
              }`}
            >
              Contact Us
            </Link>
          </div>

          <div className="pt-4 border-t border-slate-800/80 mt-4 space-y-2">
            <a
              href={AGENCY_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center space-x-2 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-medium text-xs transition"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp: +91 9505164685</span>
            </a>
            <a
              href={AGENCY_INFO.callUrl}
              className="w-full flex items-center justify-center space-x-2 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-medium text-xs transition"
            >
              <Phone className="w-4 h-4" />
              <span>Direct Call: +91 9505164685</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
