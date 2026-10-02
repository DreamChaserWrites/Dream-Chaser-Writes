import React from 'react';
import { X, Shield, FileText } from 'lucide-react';
import { SITE_CONFIG } from '../config/siteConfig';

interface LegalModalProps {
  type: 'privacy' | 'terms' | null;
  onClose: () => void;
}

export const LegalModal: React.FC<LegalModalProps> = ({ type, onClose }) => {
  if (!type) return null;

  const isPrivacy = type === 'privacy';

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-fadeIn">
      <div
        className="relative bg-[#0E1524] text-[#FAF9F5] border border-[#D4AF37]/30 rounded-2xl max-w-3xl w-full p-6 sm:p-10 shadow-2xl max-h-[85vh] overflow-y-auto text-left"
        role="dialog"
        aria-modal="true"
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 text-neutral-400 hover:text-white rounded-lg hover:bg-white/10 transition-colors focus:outline-none"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3 mb-4">
          <div className="p-2.5 bg-[#D4AF37]/15 text-[#D4AF37] border border-[#D4AF37]/30 rounded-xl">
            {isPrivacy ? <Shield className="w-6 h-6" /> : <FileText className="w-6 h-6" />}
          </div>
          <div>
            <span className="text-xs uppercase tracking-wider text-[#D4AF37] font-semibold block">
              Legal Documentation
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-medium text-white">
              {isPrivacy ? 'Privacy Policy' : 'Terms of Service'}
            </h2>
          </div>
        </div>

        <div className="text-xs text-neutral-400 pb-4 mb-6 border-b border-white/10">
          Last Updated: October 2026 · {SITE_CONFIG.brandName}
        </div>

        {isPrivacy ? (
          <div className="space-y-5 text-xs sm:text-sm text-neutral-300 font-light leading-relaxed">
            <section className="space-y-2">
              <h3 className="font-serif text-base font-medium text-white">1. Commitment to Author Confidentiality</h3>
              <p>
                At {SITE_CONFIG.brandName}, we recognize that your manuscripts, story ideas, notes, and creative works are personal intellectual property. We treat all client submissions, book concepts, and communication with the utmost confidentiality.
              </p>
            </section>

            <section className="space-y-2">
              <h3 className="font-serif text-base font-medium text-white">2. Information We Collect</h3>
              <p>
                When you submit an inquiry through our website, we collect your full name, email address, optional WhatsApp number, book title, and project descriptions. This information is utilized solely to respond to your inquiry and evaluate project feasibility.
              </p>
            </section>

            <section className="space-y-2">
              <h3 className="font-serif text-base font-medium text-white">3. How Your Information Is Used</h3>
              <p>
                We do not sell, rent, trade, or distribute your personal details or manuscripts to third-party marketing companies. Data is used exclusively for project communication, drafting proposals, and delivering requested book services.
              </p>
            </section>

            <section className="space-y-2">
              <h3 className="font-serif text-base font-medium text-white">4. Intellectual Property Rights</h3>
              <p>
                You retain 100% ownership and copyright of your manuscript and creative ideas. We do not claim any royalties, publishing rights, or ownership shares over books we edit, format, or assist in publishing, unless explicitly arranged under a separate co-authorship contract.
              </p>
            </section>

            <section className="space-y-2">
              <h3 className="font-serif text-base font-medium text-white">5. Contact Us Regarding Your Data</h3>
              <p>
                For questions regarding your data or to request deletion of your inquiry details from our records, contact us at <a href={`mailto:${SITE_CONFIG.contactEmail}`} className="text-[#D4AF37] underline">{SITE_CONFIG.contactEmail}</a>.
              </p>
            </section>
          </div>
        ) : (
          <div className="space-y-5 text-xs sm:text-sm text-neutral-300 font-light leading-relaxed">
            <section className="space-y-2">
              <h3 className="font-serif text-base font-medium text-white">1. Overview of Services</h3>
              <p>
                {SITE_CONFIG.brandName} offers professional book-focused services including book writing and ghostwriting, developmental editing, copyediting, proofreading, interior layout typesetting, cover design, and self-publishing advisory.
              </p>
            </section>

            <section className="space-y-2">
              <h3 className="font-serif text-base font-medium text-white">2. Project Scopes and Agreements</h3>
              <p>
                Each project is governed by a defined project scope agreed upon prior to project commencement. Deliverables, revision rounds, timeline milestones, and fee schedules are clearly specified. Additional requests outside the agreed scope are subject to mutual discussion and revised quotes.
              </p>
            </section>

            <section className="space-y-2">
              <h3 className="font-serif text-base font-medium text-white">3. Honest Representation & No Guaranteed Bestseller Claims</h3>
              <p>
                While we commit to producing high-quality editorial and design work conforming to industry standards, {SITE_CONFIG.brandName} does not guarantee commercial sales volume, bestseller status, or acceptance by third-party literary agencies or traditional publishers. Success in the book market depends on numerous external variables including reader demand and marketing.
              </p>
            </section>

            <section className="space-y-2">
              <h3 className="font-serif text-base font-medium text-white">4. Client Responsibilities</h3>
              <p>
                Clients are responsible for providing timely feedback on manuscript drafts, confirming typographic preferences, and verifying that all supplied materials do not infringe upon any third-party copyrights or trademarks.
              </p>
            </section>

            <section className="space-y-2">
              <h3 className="font-serif text-base font-medium text-white">5. Governing Scope</h3>
              <p>
                Any formal engagement will include a standard written service agreement signed by both parties outlining milestones, payments, and scope.
              </p>
            </section>
          </div>
        )}

        <div className="mt-8 pt-4 border-t border-white/10 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 text-xs font-semibold uppercase tracking-wider text-[#0B101B] bg-[#D4AF37] hover:bg-[#E5C769] rounded-lg transition-colors cursor-pointer"
          >
            I Understand
          </button>
        </div>
      </div>
    </div>
  );
};
