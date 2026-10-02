import React from 'react';
import { X, Settings, CheckCircle2, AlertTriangle, Globe, Mail, Phone, ExternalLink } from 'lucide-react';
import { SITE_CONFIG } from '../config/siteConfig';

interface ConfigGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ConfigGuideModal: React.FC<ConfigGuideModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-fadeIn">
      <div
        className="relative bg-[#0E1524] text-[#FAF9F5] border border-[#D4AF37]/40 rounded-2xl max-w-3xl w-full p-6 sm:p-10 shadow-2xl max-h-[85vh] overflow-y-auto text-left"
        role="dialog"
        aria-modal="true"
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 text-neutral-400 hover:text-white rounded-lg hover:bg-white/10 transition-colors focus:outline-none"
          aria-label="Close configuration guide"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3 mb-4">
          <div className="p-2.5 bg-[#D4AF37]/15 text-[#D4AF37] border border-[#D4AF37]/30 rounded-xl">
            <Settings className="w-6 h-6" />
          </div>
          <div>
            <span className="text-xs uppercase tracking-widest text-[#D4AF37] font-semibold block">
              Website Owner & Administration
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-medium text-white">
              Personalization & Deployment Manual
            </h2>
          </div>
        </div>

        <p className="text-sm text-neutral-300 font-light leading-relaxed mb-6">
          Everything for <strong>DREAM CHASER WRITES</strong> is designed for effortless maintenance. Below is your quick reference for personalization, integrations, and deployment.
        </p>

        <div className="space-y-6 text-xs sm:text-sm text-neutral-300 font-light leading-relaxed">
          
          {/* Section 1: Central Config */}
          <div className="p-5 rounded-xl bg-white/5 border border-white/10 space-y-3">
            <h3 className="font-serif text-base font-medium text-[#D4AF37] flex items-center gap-2">
              <span>1. Centralized Configuration File</span>
            </h3>
            <p>
              To edit your brand name, phone number, prices, service descriptions, portfolio items, or team details, open the file:
              <br />
              <code className="inline-block mt-1 text-xs text-amber-300 bg-black/40 px-2 py-1 rounded">
                src/config/siteConfig.ts
              </code>
            </p>
          </div>

          {/* Section 2: Values to Personalize */}
          <div className="p-5 rounded-xl bg-white/5 border border-white/10 space-y-3">
            <h3 className="font-serif text-base font-medium text-[#D4AF37] flex items-center gap-2">
              <span>2. Values You Should Personalize</span>
            </h3>
            <ul className="space-y-2 text-neutral-200">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#D4AF37] mt-0.5 shrink-0" />
                <span>
                  <strong>WhatsApp Phone Number:</strong> In <code className="text-amber-300">siteConfig.ts</code>, update <code className="text-amber-300">whatsappNumber: "15551234567"</code> (include country code without spaces or dashes). This automatically enables instant 1-click WhatsApp author chat.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#D4AF37] mt-0.5 shrink-0" />
                <span>
                  <strong>Contact Email:</strong> Set to <code className="text-amber-300">{SITE_CONFIG.contactEmail}</code> or your preferred studio inbox.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#D4AF37] mt-0.5 shrink-0" />
                <span>
                  <strong>Social Media:</strong> Your 3 official profiles (Facebook, Instagram, TikTok) are pre-connected and active.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#D4AF37] mt-0.5 shrink-0" />
                <span>
                  <strong>Authentic Testimonials:</strong> When you receive verified client reviews, set <code className="text-amber-300">testimonials.showSectionOnSite: true</code> and paste your quotes into <code className="text-amber-300">siteConfig.ts</code>.
                </span>
              </li>
            </ul>
          </div>

          {/* Section 3: Live Inquiry System & Email Integration */}
          <div className="p-5 rounded-xl bg-white/5 border border-white/10 space-y-3">
            <h3 className="font-serif text-base font-medium text-[#D4AF37] flex items-center gap-2">
              <span>3. Inquiry System & Form Submission</span>
            </h3>
            <p>
              Your website features a working full-stack backend endpoint at <code className="text-amber-300">POST /api/inquiries</code>.
            </p>
            <p>
              Submitted inquiries are validated server-side, assigned an authentic reference number (e.g. <code className="text-amber-300">DCW-XXXXX</code>), and recorded to <code className="text-amber-300">data/inquiries.json</code> on your server.
            </p>
            <p className="text-neutral-400">
              To also route notifications directly to your email automatically, you can connect Formspree (just set your Formspree endpoint URL in <code className="text-amber-300">ContactSection.tsx</code>) or connect Resend/SendGrid in <code className="text-amber-300">server.ts</code>.
            </p>
          </div>

          {/* Section 4: Custom Domain & Deployment */}
          <div className="p-5 rounded-xl bg-white/5 border border-white/10 space-y-3">
            <h3 className="font-serif text-base font-medium text-[#D4AF37] flex items-center gap-2">
              <Globe className="w-4 h-4" />
              <span>4. Custom Domain & Production Deployment</span>
            </h3>
            <ol className="list-decimal list-inside space-y-2 text-neutral-300">
              <li>
                <strong>Build:</strong> Run <code className="text-amber-300">npm run build</code> to produce optimized production assets in <code className="text-amber-300">dist/</code>.
              </li>
              <li>
                <strong>Start Server:</strong> Run <code className="text-amber-300">npm start</code> which runs the Express server serving your application and API.
              </li>
              <li>
                <strong>Custom Domain:</strong> In your domain registrar (GoDaddy, Namecheap, Google Domains/Squarespace), add a CNAME record pointing your domain (e.g. <code className="text-amber-300">dreamchaserwrites.com</code>) to your Cloud Run or server hosting URL.
              </li>
            </ol>
          </div>

        </div>

        <div className="mt-8 pt-4 border-t border-white/10 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-[#0B101B] bg-[#D4AF37] hover:bg-[#E5C769] rounded-lg transition-colors cursor-pointer"
          >
            Close Guide
          </button>
        </div>
      </div>
    </div>
  );
};
