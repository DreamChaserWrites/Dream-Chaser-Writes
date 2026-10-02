import React from 'react';
import { ExternalLink, Mail, MapPin, Feather, Settings, Shield, FileText } from 'lucide-react';
import { SITE_CONFIG } from '../config/siteConfig';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
  onOpenLegal: (type: 'privacy' | 'terms') => void;
  onOpenConfigGuide: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onNavigate,
  onOpenLegal,
  onOpenConfigGuide
}) => {
  return (
    <footer className="bg-[#070A11] text-[#FAF9F5] border-t border-[#D4AF37]/20 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-14 border-b border-white/10 text-left">
          
          {/* Brand Info (Zone 1) */}
          <div className="lg:col-span-5 space-y-4">
            <button
              onClick={() => onNavigate('hero')}
              className="text-left group cursor-pointer focus:outline-none"
            >
              <span className="font-serif text-2xl font-semibold tracking-wider text-white group-hover:text-[#D4AF37] transition-colors">
                {SITE_CONFIG.brandName}
              </span>
            </button>
            <p className="text-sm text-neutral-400 font-light leading-relaxed max-w-sm">
              Helping aspiring authors, writers, and storytellers develop their concepts and bring their book ambitions to life through dedicated literary craft and book services.
            </p>
            <div className="pt-2 flex items-center gap-2 text-xs text-neutral-400">
              <MapPin className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>{SITE_CONFIG.businessLocation}</span>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs uppercase tracking-widest text-[#D4AF37] font-semibold">
              Explore
            </h4>
            <ul className="space-y-2 text-sm text-neutral-300 font-light">
              <li>
                <button
                  onClick={() => onNavigate('services')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Book Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('about')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  About the Studio
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('process')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Author Pathway
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('portfolio')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Book Showcase
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('blog')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  The Writer's Corner
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('contact')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Submit Inquiry
                </button>
              </li>
            </ul>
          </div>

          {/* Official Social Channels & Connect */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs uppercase tracking-widest text-[#D4AF37] font-semibold">
              Official Channels
            </h4>
            <div className="space-y-2 text-sm text-neutral-300 font-light">
              <a
                href={SITE_CONFIG.socialLinks.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-2.5 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
              >
                <span>Facebook · @Dreamchaserwrites</span>
                <ExternalLink className="w-3.5 h-3.5 text-neutral-400" />
              </a>
              <a
                href={SITE_CONFIG.socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-2.5 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
              >
                <span>Instagram · @dream_chase_write</span>
                <ExternalLink className="w-3.5 h-3.5 text-neutral-400" />
              </a>
              <a
                href={SITE_CONFIG.socialLinks.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-2.5 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
              >
                <span>TikTok · @dreamchaserwrites</span>
                <ExternalLink className="w-3.5 h-3.5 text-neutral-400" />
              </a>
            </div>

            <div className="pt-2">
              <a
                href={`mailto:${SITE_CONFIG.contactEmail}`}
                className="inline-flex items-center gap-2 text-xs text-[#D4AF37] hover:underline"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>{SITE_CONFIG.contactEmail}</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright, Legal & Administration */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-400">
          <div>
            © {new Date().getFullYear()} {SITE_CONFIG.brandName}. All rights reserved.
          </div>

          <div className="flex flex-wrap items-center gap-4 text-neutral-400">
            <button
              onClick={() => onOpenLegal('privacy')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Privacy Policy
            </button>
            <span>·</span>
            <button
              onClick={() => onOpenLegal('terms')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Terms of Service
            </button>
            <span>·</span>
            <button
              onClick={onOpenConfigGuide}
              className="text-[#D4AF37] hover:text-[#E8C86A] transition-colors cursor-pointer flex items-center gap-1"
            >
              <Settings className="w-3 h-3" />
              <span>Owner Guide</span>
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
