import React from 'react';
import { X, Settings, CheckCircle2, Globe, Share2, BookOpen, ExternalLink } from 'lucide-react';
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
        className="relative bg-[#0A1626] text-[#FAF9F5] border border-blue-500/40 rounded-2xl max-w-3xl w-full p-6 sm:p-10 shadow-2xl max-h-[85vh] overflow-y-auto text-left"
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
          <div className="p-2.5 bg-blue-500/15 text-blue-400 border border-blue-500/30 rounded-xl">
            <Settings className="w-6 h-6" />
          </div>
          <div>
            <span className="text-xs uppercase tracking-widest text-blue-400 font-semibold block">
              Website Owner & Portfolio Management Guide
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-medium text-white">
              How to Add Past Work & Personalize
            </h2>
          </div>
        </div>

        <p className="text-sm text-neutral-300 font-light leading-relaxed mb-6">
          Everything for <strong>DREAM CHASER WRITES</strong> is organized into 3 clear categories: <strong>Website Design (Any CMS)</strong>, <strong>Social Media Management</strong>, and <strong>Beta Reading & Books</strong>.
        </p>

        <div className="space-y-6 text-xs sm:text-sm text-neutral-300 font-light leading-relaxed">
          
          {/* Section 1: Adding past work to the 3 segmented portfolios */}
          <div className="p-5 rounded-xl bg-white/5 border border-white/10 space-y-3">
            <h3 className="font-serif text-base font-medium text-blue-300 flex items-center gap-2">
              <span>1. Adding Past Work for Each Category</span>
            </h3>
            <p>
              Open <code className="text-amber-300 bg-black/40 px-2 py-0.5 rounded">src/config/siteConfig.ts</code>. You will find 3 dedicated arrays for adding past work:
            </p>
            <ul className="space-y-2 text-neutral-200">
              <li className="flex items-start gap-2">
                <Globe className="w-4 h-4 text-blue-400 mt-0.5 shrink-0" />
                <span>
                  <strong>Website Design Work (<code className="text-amber-300">webProjects</code>):</strong> Add title, CMS platform (WordPress, Shopify, Webflow, Squarespace, Wix, Custom), client type (Business, Ecommerce, Author, Nonprofit, Event, Blog), description, and live URL.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <Share2 className="w-4 h-4 text-pink-400 mt-0.5 shrink-0" />
                <span>
                  <strong>Social Media Work (<code className="text-amber-300">socialProjects</code>):</strong> Add campaign title, platforms (Instagram, TikTok, Facebook), niche, strategy description, and outcome metrics.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <BookOpen className="w-4 h-4 text-amber-400 mt-0.5 shrink-0" />
                <span>
                  <strong>Beta Reading Work (<code className="text-amber-300">bookProjects</code>):</strong> Add manuscript title, genre, word count, sample reader feedback bullet points, and author outcome.
                </span>
              </li>
            </ul>
          </div>

          {/* Section 2: Sharing direct category links with clients */}
          <div className="p-5 rounded-xl bg-white/5 border border-white/10 space-y-3">
            <h3 className="font-serif text-base font-medium text-blue-300 flex items-center gap-2">
              <span>2. Sending Direct Portfolio Links to Prospective Clients</span>
            </h3>
            <p>
              When reaching out to clients, you can send direct links that open specifically to that category:
            </p>
            <ul className="space-y-1.5 font-mono text-xs text-blue-300">
              <li>• yourdomain.com/#portfolio-web (Opens Website Design Portfolio)</li>
              <li>• yourdomain.com/#portfolio-social (Opens Social Media Portfolio)</li>
              <li>• yourdomain.com/#portfolio-books (Opens Beta Reading Portfolio)</li>
            </ul>
          </div>

          {/* Section 3: WhatsApp and Contact Email */}
          <div className="p-5 rounded-xl bg-white/5 border border-white/10 space-y-3">
            <h3 className="font-serif text-base font-medium text-blue-300 flex items-center gap-2">
              <span>3. Contact & WhatsApp Configuration</span>
            </h3>
            <p>
              Your contact email is active at <strong className="text-white">dreamchaserwrites@gmail.com</strong>.
            </p>
            <p>
              To enable instant 1-click WhatsApp messaging, open <code className="text-amber-300">src/config/siteConfig.ts</code> and enter your WhatsApp phone number with country code in <code className="text-amber-300">whatsappNumber</code> (e.g. <code className="text-amber-300">"2349161880250"</code> or <code className="text-amber-300">"15551234567"</code>).
            </p>
          </div>

        </div>

        <div className="mt-8 pt-4 border-t border-white/10 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-white bg-blue-600 hover:bg-blue-500 rounded-lg transition-colors cursor-pointer"
          >
            Close Guide
          </button>
        </div>
      </div>
    </div>
  );
};
