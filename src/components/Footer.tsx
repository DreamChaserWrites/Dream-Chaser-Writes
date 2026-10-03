import React from 'react';
import { ExternalLink, Mail, MapPin, Settings, MessageCircle, BookOpen, Globe, Share2 } from 'lucide-react';
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
  const whatsappUrl = `https://wa.me/+2349014111435?text=${encodeURIComponent(SITE_CONFIG.whatsappDefaultMessage)}`;

  return (
    <footer className="bg-[#0a1c2e] text-[#FAF9F5] border-t border-white/10 pt-16 pb-12 text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-14 border-b border-white/10">
          
          {/* Brand Info */}
          <div className="lg:col-span-5 space-y-4">
            <button
              onClick={() => onNavigate('hero')}
              className="text-left group cursor-pointer focus:outline-none flex items-center gap-2.5"
            >
              <div className="w-9 h-9 rounded-lg bg-[#0166FE] text-white flex items-center justify-center font-bold text-sm shadow-md">
                DC
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-xl font-bold tracking-wide text-white group-hover:text-blue-300 transition-colors">
                  {SITE_CONFIG.brandName}
                </span>
                <span className="text-[10px] uppercase tracking-widest text-sky-400 font-medium">
                  Beta Reader · Web Designer
                </span>
              </div>
            </button>
            <p className="text-sm text-neutral-300 font-light leading-relaxed max-w-sm">
              In-depth manuscript beta reading reports for authors, custom website design across any CMS platform, and high-converting social media management.
            </p>
            <div className="pt-2 flex items-center gap-2 text-xs text-neutral-300">
              <MapPin className="w-3.5 h-3.5 text-sky-400" />
              <span>{SITE_CONFIG.businessLocation}</span>
            </div>
          </div>

          {/* Quick Services (Beta Reading FIRST!) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs uppercase tracking-widest text-[#6BA5FF] font-bold">
              Services Pillars
            </h4>
            <ul className="space-y-2 text-sm text-neutral-300 font-light">
              <li>
                <button
                  onClick={() => onNavigate('services')}
                  className="hover:text-white transition-colors cursor-pointer flex items-center gap-2"
                >
                  <BookOpen className="w-3.5 h-3.5 text-amber-400" />
                  <span>1. BETA READING & BOOK SERVICE</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('services')}
                  className="hover:text-white transition-colors cursor-pointer flex items-center gap-2"
                >
                  <Share2 className="w-3.5 h-3.5 text-pink-400" />
                  <span>2. SOCIAL MEDIA MANAGEMENT & BRAND GROWTH</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('services')}
                  className="hover:text-white transition-colors cursor-pointer flex items-center gap-2"
                >
                  <Globe className="w-3.5 h-3.5 text-sky-400" />
                  <span>3. WEBSITE DESIGN ON ANY CMS PLATFORM</span>
                </button>
              </li>
              <li className="pt-2 border-t border-white/5">
                <button
                  onClick={() => onNavigate('portfolio')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Segmented Work Portfolio
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('faq')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Frequently Asked Questions
                </button>
              </li>
            </ul>
          </div>

          {/* WhatsApp Direct & Social Channels */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs uppercase tracking-widest text-[#6BA5FF] font-bold">
              Direct Contact & Socials
            </h4>

            {/* WhatsApp Link Box */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 p-3 rounded-xl bg-[#25D366]/15 border border-[#25D366]/35 text-white hover:bg-[#25D366]/25 transition-all text-xs font-semibold"
            >
              <MessageCircle className="w-4 h-4 fill-[#25D366] text-[#25D366]" />
              <span>WhatsApp: +2349014111435</span>
            </a>

            <div className="space-y-1.5 text-sm text-neutral-300 font-light pt-1">
              <a
                href={SITE_CONFIG.socialLinks.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors text-xs"
              >
                <span>Facebook · @Dreamchaserwrites</span>
                <ExternalLink className="w-3 h-3 text-neutral-400" />
              </a>
              <a
                href={SITE_CONFIG.socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors text-xs"
              >
                <span>Instagram · @dream_chase_write</span>
                <ExternalLink className="w-3 h-3 text-neutral-400" />
              </a>
              <a
                href={SITE_CONFIG.socialLinks.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors text-xs"
              >
                <span>TikTok · @dreamchaserwrites</span>
                <ExternalLink className="w-3 h-3 text-neutral-400" />
              </a>
            </div>

            <div className="pt-1">
              <a
                href={`mailto:${SITE_CONFIG.contactEmail}`}
                className="inline-flex items-center gap-1.5 text-xs text-sky-300 hover:underline"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>{SITE_CONFIG.contactEmail}</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Legal */}
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
              className="text-sky-400 hover:text-white transition-colors cursor-pointer flex items-center gap-1"
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
