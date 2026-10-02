import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { SITE_CONFIG } from '../config/siteConfig';

export const WhatsAppFloatingButton: React.FC = () => {
  const [showConfigNotice, setShowConfigNotice] = useState(false);

  const hasWhatsapp = Boolean(
    SITE_CONFIG.whatsappNumber && SITE_CONFIG.whatsappNumber.trim().length > 4
  );

  const whatsappUrl = hasWhatsapp
    ? `https://wa.me/${SITE_CONFIG.whatsappNumber.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(SITE_CONFIG.whatsappDefaultMessage)}`
    : null;

  const handleClick = (e: React.MouseEvent) => {
    if (!hasWhatsapp) {
      e.preventDefault();
      setShowConfigNotice(true);
    }
  };

  return (
    <>
      <div className="fixed bottom-6 right-6 z-40">
        <a
          href={whatsappUrl || '#'}
          onClick={handleClick}
          target={hasWhatsapp ? '_blank' : undefined}
          rel={hasWhatsapp ? 'noopener noreferrer' : undefined}
          className="group flex items-center gap-2.5 px-4 py-3 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white shadow-xl hover:shadow-emerald-600/30 transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
          aria-label="Direct WhatsApp author consultation"
        >
          <MessageCircle className="w-5 h-5 fill-current" />
          <span className="text-xs font-semibold tracking-wide hidden sm:inline">
            Author Support
          </span>
        </a>
      </div>

      {/* Helper notice if WhatsApp number not configured yet */}
      {showConfigNotice && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-[#0E1524] text-[#FAF9F5] border border-[#D4AF37]/30 rounded-2xl max-w-md w-full p-6 shadow-2xl relative text-left space-y-4">
            <button
              onClick={() => setShowConfigNotice(false)}
              className="absolute top-4 right-4 p-1.5 text-neutral-400 hover:text-white rounded-lg transition-colors"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="flex items-center gap-2.5 text-emerald-400">
              <MessageCircle className="w-5 h-5" />
              <h3 className="font-serif text-lg font-medium text-white">WhatsApp Integration</h3>
            </div>

            <p className="text-xs text-neutral-300 leading-relaxed font-light">
              This button connects visitors directly to your WhatsApp. To activate it with your actual business number, open <code className="text-[#D4AF37]">src/config/siteConfig.ts</code> and enter your phone number with country code in <code className="text-[#D4AF37]">whatsappNumber</code>.
            </p>

            <div className="pt-2 flex justify-end">
              <button
                onClick={() => setShowConfigNotice(false)}
                className="px-4 py-2 text-xs font-semibold uppercase tracking-wider text-[#0B101B] bg-[#D4AF37] hover:bg-[#E5C769] rounded-lg transition-colors"
              >
                Got It
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
