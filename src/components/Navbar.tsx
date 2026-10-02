import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, MessageCircle } from 'lucide-react';
import { SITE_CONFIG } from '../config/siteConfig';

interface NavbarProps {
  onNavigate: (sectionId: string) => void;
  onOpenInquiry: (defaultService?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onNavigate, onOpenInquiry }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Services', target: 'services' },
    { label: 'About', target: 'about' },
    { label: 'Process', target: 'process' },
    { label: 'Showcase', target: 'portfolio' },
    { label: 'The Writer\'s Corner', target: 'blog' },
    { label: 'Contact', target: 'contact' },
  ];

  const handleLinkClick = (target: string) => {
    setMobileMenuOpen(false);
    onNavigate(target);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0B101B]/95 backdrop-blur-md border-b border-[#D4AF37]/20 shadow-lg'
          : 'bg-[#0B101B]/85 backdrop-blur-sm border-b border-white/10'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Zone 1: Single text element wordmark */}
        <button
          onClick={() => handleLinkClick('hero')}
          className="text-left group cursor-pointer focus:outline-none"
        >
          <span className="font-serif text-xl sm:text-2xl font-semibold tracking-wider text-[#FAF9F5] transition-colors group-hover:text-[#D4AF37]">
            DREAM CHASER WRITES
          </span>
        </button>

        {/* Zone 2: Clean text navigation links */}
        <nav className="hidden lg:flex items-center gap-7 text-sm font-medium tracking-wide text-neutral-300">
          {navItems.map((item) => (
            <button
              key={item.target}
              onClick={() => handleLinkClick(item.target)}
              className="hover:text-[#FAF9F5] transition-colors cursor-pointer py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] after:bg-[#D4AF37] hover:after:w-full after:transition-all after:duration-200"
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Zone 3: Primary Actions */}
        <div className="hidden sm:flex items-center gap-4">
          {SITE_CONFIG.whatsappNumber ? (
            <a
              href={`https://wa.me/${SITE_CONFIG.whatsappNumber.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(SITE_CONFIG.whatsappDefaultMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-medium text-emerald-400 hover:text-emerald-300 transition-colors border border-emerald-500/30 rounded-lg hover:border-emerald-500/50"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>WhatsApp</span>
            </a>
          ) : null}

          <button
            onClick={() => onOpenInquiry()}
            className="inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs font-semibold tracking-wide uppercase text-[#0B101B] bg-gradient-to-r from-[#D4AF37] via-[#E6C665] to-[#D4AF37] hover:brightness-110 active:brightness-95 rounded-lg shadow-md transition-all duration-200 cursor-pointer whitespace-nowrap"
          >
            <span>Start Your Book Journey</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="flex sm:hidden items-center gap-2">
          <button
            onClick={() => onOpenInquiry()}
            className="px-3 py-1.5 text-xs font-medium bg-[#D4AF37] text-[#0B101B] rounded-md font-semibold"
          >
            Inquire
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-neutral-300 hover:text-white rounded-lg hover:bg-white/5 transition-colors focus:outline-none"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0B101B] border-b border-[#D4AF37]/20 px-5 pt-3 pb-6 space-y-3 animate-fadeIn">
          {navItems.map((item) => (
            <button
              key={item.target}
              onClick={() => handleLinkClick(item.target)}
              className="block w-full text-left py-2.5 text-base font-medium text-neutral-200 hover:text-[#D4AF37] border-b border-white/5 transition-colors"
            >
              {item.label}
            </button>
          ))}
          <div className="pt-3 flex flex-col gap-2.5">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenInquiry();
              }}
              className="w-full py-3 text-center text-xs font-semibold tracking-wider uppercase text-[#0B101B] bg-[#D4AF37] hover:bg-[#E6C665] rounded-lg transition-colors"
            >
              Start Your Book Journey
            </button>
            <div className="text-center text-xs text-neutral-400 pt-1">
              <span>Official Literary Studio</span>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
