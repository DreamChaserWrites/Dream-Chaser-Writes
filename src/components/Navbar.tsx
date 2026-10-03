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
    { label: 'Genres', target: 'beta-genres' },
    { label: 'Portfolio', target: 'portfolio' },
    { label: 'About', target: 'about' },
    { label: 'Reviews', target: 'testimonials' },
    { label: 'FAQ', target: 'faq' },
    { label: 'Contact', target: 'contact' },
  ];

  const handleLinkClick = (target: string) => {
    setMobileMenuOpen(false);
    onNavigate(target);
  };

  const whatsappUrl = `https://wa.me/+2349014111435?text=${encodeURIComponent(SITE_CONFIG.whatsappDefaultMessage)}`;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0f2a45]/95 backdrop-blur-md border-b border-blue-400/20 shadow-lg'
          : 'bg-[#0f2a45]/85 backdrop-blur-sm border-b border-white/10'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Zone 1: Brand Wordmark (matching reference site nav-logo) */}
        <button
          onClick={() => handleLinkClick('hero')}
          className="text-left group cursor-pointer focus:outline-none flex items-center gap-2.5"
        >
          <div className="w-9 h-9 rounded-lg bg-[#0166FE] text-white flex items-center justify-center font-bold text-sm shadow-md">
            DC
          </div>
          <div className="flex flex-col text-left">
            <span className="font-serif text-lg sm:text-xl font-bold tracking-wide text-white transition-colors group-hover:text-blue-300">
              {SITE_CONFIG.brandName}
            </span>
            <span className="text-[10px] uppercase tracking-widest text-sky-400 font-medium">
              Beta Reader · Web Designer
            </span>
          </div>
        </button>

        {/* Zone 2: Navigation Links */}
        <nav className="hidden lg:flex items-center gap-7 text-sm font-medium tracking-wide text-neutral-200">
          {navItems.map((item) => (
            <button
              key={item.target}
              onClick={() => handleLinkClick(item.target)}
              className="hover:text-sky-300 transition-colors cursor-pointer py-1 relative"
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Zone 3: Actions */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-emerald-300 hover:text-white bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/30 rounded-lg transition-all"
          >
            <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
            <span>WhatsApp</span>
          </a>

          <button
            onClick={() => onOpenInquiry()}
            className="inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs font-semibold tracking-wide uppercase text-white bg-[#0166FE] hover:bg-blue-600 rounded-lg shadow-md transition-all cursor-pointer whitespace-nowrap"
          >
            <span>Start a Project</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="flex sm:hidden items-center gap-2">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-emerald-400 hover:text-white"
            aria-label="WhatsApp"
          >
            <MessageCircle className="w-5 h-5" />
          </a>
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

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0f2a45] border-b border-blue-500/20 px-5 pt-3 pb-6 space-y-3 animate-fadeIn text-left">
          {navItems.map((item) => (
            <button
              key={item.target}
              onClick={() => handleLinkClick(item.target)}
              className="block w-full text-left py-2.5 text-base font-medium text-neutral-200 hover:text-blue-300 border-b border-white/5 transition-colors"
            >
              {item.label}
            </button>
          ))}
          <div className="pt-3 flex flex-col gap-2.5">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 flex items-center justify-center gap-2 text-xs font-semibold tracking-wider uppercase text-emerald-300 bg-emerald-500/10 border border-emerald-500/30 rounded-lg"
            >
              <MessageCircle className="w-4 h-4 text-emerald-400" />
              <span>WhatsApp (+2349014111435)</span>
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenInquiry();
              }}
              className="w-full py-3 text-center text-xs font-semibold tracking-wider uppercase text-white bg-[#0166FE] hover:bg-blue-600 rounded-lg transition-colors cursor-pointer"
            >
              Start a Project
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
