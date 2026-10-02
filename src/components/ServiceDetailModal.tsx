import React from 'react';
import { X, CheckCircle2, Clock, DollarSign, ArrowRight, ShieldCheck } from 'lucide-react';
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

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/75 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-fadeIn">
      <div
        className="relative bg-[#0E1524] text-[#FAF9F5] border border-[#D4AF37]/30 rounded-2xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl overflow-hidden"
        role="dialog"
        aria-modal="true"
        aria-labelledby="service-modal-title"
      >
        {/* Subtle decorative gold light */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#D4AF37]/10 rounded-full blur-3xl pointer-events-none" />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 text-neutral-400 hover:text-white rounded-lg hover:bg-white/10 transition-colors focus:outline-none"
          aria-label="Close service details"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="flex items-start gap-4 mb-6">
          <div className="p-3 bg-[#D4AF37]/15 text-[#D4AF37] border border-[#D4AF37]/30 rounded-xl">
            <ServiceIcon name={service.iconName} className="w-7 h-7" />
          </div>
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className={`text-xs font-medium px-2 py-0.5 rounded ${
                service.isAvailable
                  ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                  : 'bg-amber-500/20 text-amber-300 border border-amber-500/30'
              }`}>
                {service.isAvailable ? 'Currently Accepting Projects' : 'Waitlist Booking'}
              </span>
              <span className="text-xs text-neutral-400">· Bespoke Book Service</span>
            </div>
            <h2 id="service-modal-title" className="font-serif text-2xl sm:text-3xl font-medium text-white">
              {service.title}
            </h2>
          </div>
        </div>

        {/* Body Description */}
        <div className="space-y-6 text-sm text-neutral-300 leading-relaxed">
          <p className="text-base text-neutral-200">
            {service.fullDescription}
          </p>

          {/* Deliverables List */}
          <div className="p-5 bg-white/5 border border-white/10 rounded-xl space-y-3">
            <h3 className="text-xs font-semibold tracking-wider uppercase text-[#D4AF37] flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4" />
              <span>What Is Included in This Service</span>
            </h3>
            <ul className="grid grid-cols-1 gap-2.5 pt-1">
              {service.deliverables.map((item, index) => (
                <li key={index} className="flex items-start gap-2.5 text-neutral-200">
                  <CheckCircle2 className="w-4 h-4 text-[#D4AF37] mt-0.5 shrink-0" />
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
                <Clock className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>Estimated Timeframe</span>
              </span>
              <p className="text-xs text-neutral-200">{service.turnaroundTimePlaceholder}</p>
            </div>
          </div>

          {/* Pricing transparency note */}
          <div className="flex items-center justify-between p-4 bg-[#D4AF37]/10 border border-[#D4AF37]/25 rounded-xl">
            <div>
              <span className="text-xs text-neutral-400 block">Investment</span>
              <span className="text-base font-medium text-[#FAF9F5]">{service.startingPricePlaceholder}</span>
            </div>
            <p className="text-xs text-neutral-400 text-right max-w-xs">
              Pricing is customized according to manuscript length, genre, and exact project scope.
            </p>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="mt-8 pt-5 border-t border-white/10 flex flex-col sm:flex-row items-center justify-end gap-3">
          <button
            onClick={onClose}
            className="w-full sm:w-auto px-5 py-2.5 text-xs font-medium text-neutral-300 hover:text-white rounded-lg hover:bg-white/5 transition-colors"
          >
            Close Details
          </button>
          <button
            onClick={() => {
              onClose();
              onInquire(service.title);
            }}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 text-xs font-semibold uppercase tracking-wider text-[#0B101B] bg-gradient-to-r from-[#D4AF37] to-[#E5C769] hover:brightness-110 rounded-lg shadow-md transition-all cursor-pointer"
          >
            <span>Inquire About This Service</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
