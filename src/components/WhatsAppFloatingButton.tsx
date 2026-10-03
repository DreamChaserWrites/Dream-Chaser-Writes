import React from 'react';
import { MessageCircle } from 'lucide-react';
import { SITE_CONFIG } from '../config/siteConfig';

export const WhatsAppFloatingButton: React.FC = () => {
  const whatsappUrl = `https://wa.me/+2349014111435?text=${encodeURIComponent(SITE_CONFIG.whatsappDefaultMessage)}`;

  return (
    <div className="fixed bottom-6 right-6 z-40">
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center gap-2.5 px-4 py-3 rounded-full bg-[#25D366] hover:bg-[#20ba5a] text-white shadow-xl hover:shadow-emerald-600/40 transition-all duration-300 transform hover:-translate-y-1 active:translate-y-0 cursor-pointer"
        aria-label="Direct WhatsApp consultation with Dream Chaser Writes"
      >
        <MessageCircle className="w-5 h-5 fill-current" />
        <span className="text-xs font-semibold tracking-wide hidden sm:inline">
          Chat on WhatsApp
        </span>
      </a>
    </div>
  );
};
