import React from "react";
import { ShieldCheck, Lock, Eye, FileText } from "lucide-react";
import SEOHead from "../components/SEOHead";
import { AGENCY_INFO } from "../data/agencyData";

export default function PrivacyPolicy() {
  return (
    <div className="w-full bg-[#070d1e] text-slate-100 pb-20">
      
      <SEOHead 
        title="Privacy Policy | Praveen Digital Solutions"
        description="Privacy policy and data protection standards of Praveen Digital Solutions, Hyderabad, Telangana."
      />

      <section className="pt-16 pb-12 bg-navy-gradient border-b border-slate-800/80">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-950 border border-blue-500/30 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <Lock className="w-3.5 h-3.5" />
            <span>Data Protection & Privacy</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white mb-2">
            Privacy Policy
          </h1>
          <p className="text-xs sm:text-sm text-slate-400">
            Last Updated: 2026 • Praveen Digital Solutions, Hyderabad
          </p>
        </div>
      </section>

      <section className="py-12 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-glass-card rounded-3xl p-8 border border-slate-800/80 space-y-6 text-xs sm:text-sm text-slate-300 leading-relaxed">
          
          <div>
            <h2 className="text-lg font-bold text-white mb-2">1. Overview</h2>
            <p>
              At <strong>Praveen Digital Solutions</strong> (founded by Akula Praveen Yadav), we take your privacy and business confidentiality seriously. This Privacy Policy outlines what information we collect when you visit our website, submit a project quotation enquiry, or interact with our services in Telangana and across India.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-white mb-2">2. Information We Collect</h2>
            <p className="mb-2">We only collect information voluntarily provided by you through our website enquiry forms, phone calls, or WhatsApp chats, including:</p>
            <ul className="list-disc pl-5 space-y-1 text-slate-400">
              <li>Full Name and Professional Title</li>
              <li>Business or Enterprise Name</li>
              <li>Contact Phone Number and WhatsApp Number</li>
              <li>Email Address</li>
              <li>City and Target Service Region</li>
              <li>Project Description, Requirements, and Budget Preferences</li>
            </ul>
          </div>

          <div>
            <h2 className="text-lg font-bold text-white mb-2">3. How We Use Your Information</h2>
            <p>
              The collected information is solely used to evaluate your business requirements, generate customized proposals and quotations, coordinate project milestones, and communicate project deliverables. We never sell, rent, or trade your personal or business data to third-party marketing companies.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-white mb-2">4. Client Confidentiality</h2>
            <p>
              Any proprietary business data, credentials, customer lists, or internal workflows shared during website development or Google Ads management are treated as strictly confidential.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-white mb-2">5. Third-Party Integrations</h2>
            <p>
              Our website may utilize direct links to WhatsApp, Google Maps, and external social media platforms (LinkedIn, Instagram). Interactions with these platforms are governed by their respective privacy terms.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-white mb-2">6. Contact Our Grievance Officer</h2>
            <p>
              If you have any questions or concerns regarding your data privacy, you may reach out directly to founder Akula Praveen Yadav at <strong>{AGENCY_INFO.email}</strong> or call <strong>{AGENCY_INFO.phoneFormatted}</strong>.
            </p>
          </div>

        </div>
      </section>

    </div>
  );
}
