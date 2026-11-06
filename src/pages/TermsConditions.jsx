import React from "react";
import { FileText, CheckCircle2, ShieldCheck, AlertCircle } from "lucide-react";
import SEOHead from "../components/SEOHead";
import { AGENCY_INFO } from "../data/agencyData";

export default function TermsConditions() {
  return (
    <div className="w-full bg-[#070d1e] text-slate-100 pb-20">
      
      <SEOHead 
        title="Terms and Conditions | Praveen Digital Solutions"
        description="Terms and conditions, scope of work, milestone policies, and service guidelines of Praveen Digital Solutions, Hyderabad."
      />

      <section className="pt-16 pb-12 bg-navy-gradient border-b border-slate-800/80">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-950 border border-blue-500/30 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <FileText className="w-3.5 h-3.5" />
            <span>Service Agreement</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white mb-2">
            Terms and Conditions
          </h1>
          <p className="text-xs sm:text-sm text-slate-400">
            Governing Commercial Engagements with Praveen Digital Solutions, Hyderabad, India
          </p>
        </div>
      </section>

      <section className="py-12 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-glass-card rounded-3xl p-8 border border-slate-800/80 space-y-6 text-xs sm:text-sm text-slate-300 leading-relaxed">
          
          <div>
            <h2 className="text-lg font-bold text-white mb-2">1. Scope of Work & Quotations</h2>
            <p>
              All website development, Google Business Profile setups, and digital marketing engagements are governed by formal written quotations or agreed WhatsApp project briefs detailing specific deliverables, page counts, features, and target timelines. Any additions beyond the agreed scope will be quoted separately.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-white mb-2">2. Client Review & Revisions</h2>
            <p>
              During Phase 4 of our 5-Step Process, clients receive a live preview link to review the build. We include agreed revision rounds to refine styling, layout hierarchy, and content before final deployment sign-off.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-white mb-2">3. Third-Party Costs & Ad Budgets</h2>
            <p>
              Unless explicitly bundled into the written quotation:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-slate-400 mt-2">
              <li>Domain registration and cloud server hosting fees are the responsibility of the client.</li>
              <li>Google Ads advertising click budgets are paid directly by the client to Google through the client's own payment profile. Agency fees cover campaign architecture, copywriting, optimization, and reporting only.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-lg font-bold text-white mb-2">4. No False Guarantees Policy</h2>
            <p>
              In strict adherence to Google policies, Praveen Digital Solutions does <strong>not</strong> make deceptive promises of guaranteed #1 Google rankings or unauthorized profile verifications. Search algorithm outcomes depend on authentic relevance, user signals, and local competitive factors.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-white mb-2">5. Ownership & Handover</h2>
            <p>
              Upon receipt of final milestone settlement, complete administrative ownership, source code access, and login credentials for the deployed website are fully handed over to the client.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-white mb-2">6. Governing Law</h2>
            <p>
              These terms shall be construed and governed in accordance with the laws of the State of Telangana, India.
            </p>
          </div>

        </div>
      </section>

    </div>
  );
}
