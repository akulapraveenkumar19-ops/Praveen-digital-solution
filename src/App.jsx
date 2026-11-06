import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import FloatingWhatsApp from "./components/FloatingWhatsApp";
import MobileBottomBar from "./components/MobileBottomBar";
import QuoteModal from "./components/QuoteModal";

// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import WebsiteDevelopment from "./pages/WebsiteDevelopment";
import GoogleBusinessProfile from "./pages/GoogleBusinessProfile";
import GoogleAds from "./pages/GoogleAds";
import SEOServices from "./pages/SEOServices";
import Portfolio from "./pages/Portfolio";
import Industries from "./pages/Industries";
import Pricing from "./pages/Pricing";
import Contact from "./pages/Contact";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsConditions from "./pages/TermsConditions";

export default function App() {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const [selectedService, setSelectedService] = useState("Website Development");

  const handleOpenQuote = (serviceName = "Website Development") => {
    setSelectedService(serviceName);
    setIsQuoteOpen(true);
  };

  const handleCloseQuote = () => {
    setIsQuoteOpen(false);
  };

  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen bg-[#070d1e] text-slate-100 selection:bg-blue-600 selection:text-white">
        
        {/* Navigation Bar */}
        <Navbar onOpenQuote={handleOpenQuote} />

        {/* Main Content Router */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home onOpenQuote={handleOpenQuote} />} />
            <Route path="/about" element={<About onOpenQuote={handleOpenQuote} />} />
            <Route path="/services" element={<Services onOpenQuote={handleOpenQuote} />} />
            <Route path="/services/website-development" element={<WebsiteDevelopment onOpenQuote={handleOpenQuote} />} />
            <Route path="/services/google-business-profile" element={<GoogleBusinessProfile onOpenQuote={handleOpenQuote} />} />
            <Route path="/services/google-ads" element={<GoogleAds onOpenQuote={handleOpenQuote} />} />
            <Route path="/services/seo-services" element={<SEOServices onOpenQuote={handleOpenQuote} />} />
            <Route path="/portfolio" element={<Portfolio onOpenQuote={handleOpenQuote} />} />
            <Route path="/industries" element={<Industries onOpenQuote={handleOpenQuote} />} />
            <Route path="/pricing" element={<Pricing onOpenQuote={handleOpenQuote} />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-and-conditions" element={<TermsConditions />} />
            
            {/* Catch-all redirect to Home */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>

        {/* Agency Footer */}
        <Footer />

        {/* Floating WhatsApp Contact Trigger */}
        <FloatingWhatsApp />

        {/* Mobile Sticky Action Bar for Smartphones */}
        <MobileBottomBar onOpenQuote={handleOpenQuote} />

        {/* Global Lead Capture & Quotation Modal */}
        <QuoteModal
          isOpen={isQuoteOpen}
          onClose={handleCloseQuote}
          initialService={selectedService}
        />

      </div>
    </BrowserRouter>
  );
}
