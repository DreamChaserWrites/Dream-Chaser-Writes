import React from 'react';
import { X, CheckCircle2, Clock, ArrowRight, ShieldCheck, Tag } from 'lucide-react';
import { ServiceItem } from '../config/siteConfig';
import { ServiceIcon } from './ServiceIcon';

interface ServiceDetailModalProps {
  service: ServiceItem | null;
  onClose: () => void;
  onInquire: (serviceTitle: string) => void;
}

export const ServiceDetailModal: React.FC<ServiceDetailModalProps> = ({
  service,
  onClose,
  onInquire
}) => {
  if (!service) return null;

  const getServicePreviewImage = (id: string) => {
    switch (id) {
      case 'ecommerce-stores':
        return '/images/web_ecommerce_store.jpg';
      case 'custom-website-design':
        return '/images/web_author_speaker.jpg';
      case 'website-redesign-error-fixing':
        return '/images/web_business_booking.jpg';
      case 'beta-reading-critique':
        return '/images/beta_reading_showcase.jpg';
      case 'manuscript-developmental-critique':
        return '/images/about_literary_studio.jpg';
      case 'book-formatting-author-branding':
        return '/images/portfolio_novel_hardcover.jpg';
      case 'social-media-management':
        return '/images/social_skincare_feed.jpg';
      case 'brand-aesthetic-feed-design':
        return '/images/social_author_booktok.jpg';
      default:
        return '/images/web_design_showcase.jpg';
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-fadeIn">
      <div
        className="relative bg-[#0E1524] text-[#FAF9F5] border border-blue-500/30 rounded-2xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto"
        role="dialog"
        aria-modal="true"
        aria-labelledby="service-modal-title"
      >
        {/* Subtle decorative glow */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 text-neutral-400 hover:text-white rounded-lg hover:bg-white/10 transition-colors focus:outline-none"
          aria-label="Close service details"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="flex items-start gap-4 mb-5">
          <div className="p-3 bg-blue-500/15 text-blue-400 border border-blue-500/30 rounded-xl shrink-0">
            <ServiceIcon name={service.iconName} className="w-7 h-7" />
          </div>
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-xs font-semibold px-2.5 py-0.5 rounded bg-blue-500/20 text-blue-300 border border-blue-500/30">
                {service.pillarLabel}
              </span>
              <span className="text-xs text-neutral-400">· Available Worldwide</span>
            </div>
            <h2 id="service-modal-title" className="font-serif text-2xl sm:text-3xl font-bold text-white">
              {service.title}
            </h2>
          </div>
        </div>

        {/* Visual Mockup Banner */}
        <div className="rounded-xl overflow-hidden aspect-[16/9] mb-5 border border-white/10 bg-black shadow-md">
          <img
            src={getServicePreviewImage(service.id)}
            alt={service.title}
            className="w-full h-full object-cover object-top"
          />
        </div>

        {/* Body Description */}
        <div className="space-y-5 text-sm text-neutral-300 leading-relaxed text-left">
          <p className="text-base text-neutral-200">
            {service.fullDescription}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {service.tags.map((t, idx) => (
              <span key={idx} className="text-xs px-2.5 py-1 rounded bg-white/5 border border-white/10 text-neutral-300">
                {t}
              </span>
            ))}
          </div>

          {/* Deliverables List */}
          <div className="p-5 bg-white/5 border border-white/10 rounded-xl space-y-3">
            <h3 className="text-xs font-semibold tracking-wider uppercase text-blue-400 flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4" />
              <span>What Is Included in This Service</span>
            </h3>
            <ul className="grid grid-cols-1 gap-2.5 pt-1">
              {service.deliverables.map((item, index) => (
                <li key={index} className="flex items-start gap-2.5 text-neutral-200 text-xs sm:text-sm">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Ideal For & Turnaround Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 bg-white/5 border border-white/10 rounded-xl">
              <span className="text-xs font-medium text-neutral-400 block mb-1">Ideal For</span>
              <p className="text-xs text-neutral-200 font-light">{service.idealFor}</p>
            </div>
            <div className="p-4 bg-white/5 border border-white/10 rounded-xl">
              <span className="text-xs font-medium text-neutral-400 block mb-1 flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-blue-400" />
                <span>Estimated Turnaround</span>
              </span>
              <p className="text-xs text-neutral-200">{service.turnaroundTime}</p>
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="mt-7 pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-end gap-3">
          <button
            onClick={onClose}
            className="w-full sm:w-auto px-5 py-2.5 text-xs font-medium text-neutral-300 hover:text-white rounded-lg hover:bg-white/5 transition-colors cursor-pointer"
          >
            Close
          </button>
          <button
            onClick={() => {
              onClose();
              onInquire(service.title);
            }}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 text-xs font-semibold uppercase tracking-wider text-white bg-blue-600 hover:bg-blue-500 rounded-lg shadow-md transition-all cursor-pointer"
          >
            <span>Inquire About This Service</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
