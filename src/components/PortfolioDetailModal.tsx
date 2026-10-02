import React from 'react';
import { X, ArrowRight, Tag, BookMarked, Sparkles } from 'lucide-react';
import { PortfolioItem } from '../config/siteConfig';

interface PortfolioDetailModalProps {
  item: PortfolioItem | null;
  onClose: () => void;
  onInquireSimilar: (serviceTitle?: string) => void;
}

export const PortfolioDetailModal: React.FC<PortfolioDetailModalProps> = ({
  item,
  onClose,
  onInquireSimilar
}) => {
  if (!item) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-fadeIn">
      <div
        className="relative bg-[#0E1524] text-[#FAF9F5] border border-[#D4AF37]/30 rounded-2xl max-w-3xl w-full p-6 sm:p-8 shadow-2xl overflow-hidden"
        role="dialog"
        aria-modal="true"
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 text-neutral-400 hover:text-white rounded-lg hover:bg-white/10 transition-colors focus:outline-none"
          aria-label="Close project showcase"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          {/* Image Column */}
          <div className="md:col-span-5">
            <div className="rounded-xl overflow-hidden border border-white/15 shadow-xl bg-[#090D15]">
              <img
                src={item.imageUrl}
                alt={item.title}
                className="w-full aspect-[3/4] object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            {item.isSamplePlaceholder && (
              <div className="mt-3 text-center">
                <span className="text-[11px] text-amber-300/80 bg-amber-500/10 border border-amber-500/20 px-2.5 py-1 rounded-md inline-block">
                  Studio Design Showcase Concept
                </span>
              </div>
            )}
          </div>

          {/* Details Column */}
          <div className="md:col-span-7 space-y-5 text-left">
            <div>
              <span className="text-xs uppercase tracking-widest text-[#D4AF37] font-semibold block mb-1">
                {item.categoryLabel}
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-medium text-white mb-1">
                {item.title}
              </h2>
              <p className="text-sm text-neutral-400 italic">
                {item.subtitle}
              </p>
            </div>

            <p className="text-sm text-neutral-300 leading-relaxed font-light">
              {item.description}
            </p>

            {/* Services Rendered */}
            <div className="space-y-2">
              <span className="text-xs font-semibold uppercase tracking-wider text-neutral-400 block">
                Services Demonstrated:
              </span>
              <div className="flex flex-wrap gap-2">
                {item.servicesProvided.map((srv, idx) => (
                  <span
                    key={idx}
                    className="text-xs px-2.5 py-1 rounded bg-white/5 border border-white/10 text-neutral-200"
                  >
                    {srv}
                  </span>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center gap-3">
              <button
                onClick={() => {
                  onClose();
                  onInquireSimilar(item.servicesProvided[0] || 'Custom Book Project');
                }}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 text-xs font-semibold uppercase tracking-wider text-[#0B101B] bg-gradient-to-r from-[#D4AF37] to-[#E5C769] hover:brightness-110 rounded-lg shadow-md transition-all cursor-pointer"
              >
                <span>Inquire About Similar Project</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={onClose}
                className="w-full sm:w-auto px-4 py-2.5 text-xs font-medium text-neutral-400 hover:text-white transition-colors"
              >
                Back to Showcase
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
