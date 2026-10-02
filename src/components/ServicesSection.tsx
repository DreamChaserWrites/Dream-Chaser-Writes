import React, { useState } from 'react';
import { ArrowRight, Info, Check, Sparkles } from 'lucide-react';
import { SITE_CONFIG, ServiceItem } from '../config/siteConfig';
import { ServiceIcon } from './ServiceIcon';
import { ServiceDetailModal } from './ServiceDetailModal';

interface ServicesSectionProps {
  onInquire: (serviceTitle?: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onInquire }) => {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);
  const [activeTab, setActiveTab] = useState<'all' | 'writing' | 'design' | 'publishing'>('all');

  const filterServices = (service: ServiceItem) => {
    if (activeTab === 'all') return true;
    if (activeTab === 'writing') {
      return (
        service.id === 'book-writing-ghostwriting' ||
        service.id === 'book-editing-proofreading' ||
        service.id === 'book-description-author-bio' ||
        service.id === 'manuscript-review-development'
      );
    }
    if (activeTab === 'design') {
      return (
        service.id === 'book-formatting-interior-layout' ||
        service.id === 'book-cover-design' ||
        service.id === 'ebook-creation-formatting'
      );
    }
    if (activeTab === 'publishing') {
      return (
        service.id === 'self-publishing-guidance' ||
        service.id === 'manuscript-review-development'
      );
    }
    return true;
  };

  const filteredList = SITE_CONFIG.services.filter(filterServices);

  return (
    <section id="services" className="py-24 bg-[#0E1524] text-[#FAF9F5] border-t border-b border-white/5 relative">
      {/* Background ambience */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="flex items-center gap-3 text-xs tracking-widest uppercase text-[#D4AF37] font-medium mb-3">
            <span className="w-6 h-[1px] bg-[#D4AF37]" />
            <span>Dedicated Literary Solutions</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-white mb-4">
            Curated Services for Authors & Storytellers
          </h2>
          <p className="text-neutral-300 text-base sm:text-lg font-light leading-relaxed">
            Every manuscript requires a unique path. Explore our specialized services designed to guide your book from nascent idea to polished publication.
          </p>
        </div>

        {/* Filter Tabs (Interactive segmented buttons allowed by frontend-design guidelines) */}
        <div className="flex flex-wrap items-center gap-2 p-1.5 bg-white/5 border border-white/10 rounded-xl mb-10 max-w-xl">
          <button
            onClick={() => setActiveTab('all')}
            className={`px-4 py-2 text-xs font-medium rounded-lg transition-all duration-200 cursor-pointer ${
              activeTab === 'all'
                ? 'bg-[#D4AF37] text-[#0B101B] font-semibold shadow-sm'
                : 'text-neutral-300 hover:text-white hover:bg-white/5'
            }`}
          >
            All Services ({SITE_CONFIG.services.length})
          </button>
          <button
            onClick={() => setActiveTab('writing')}
            className={`px-4 py-2 text-xs font-medium rounded-lg transition-all duration-200 cursor-pointer ${
              activeTab === 'writing'
                ? 'bg-[#D4AF37] text-[#0B101B] font-semibold shadow-sm'
                : 'text-neutral-300 hover:text-white hover:bg-white/5'
            }`}
          >
            Writing & Editorial
          </button>
          <button
            onClick={() => setActiveTab('design')}
            className={`px-4 py-2 text-xs font-medium rounded-lg transition-all duration-200 cursor-pointer ${
              activeTab === 'design'
                ? 'bg-[#D4AF37] text-[#0B101B] font-semibold shadow-sm'
                : 'text-neutral-300 hover:text-white hover:bg-white/5'
            }`}
          >
            Design & Formatting
          </button>
          <button
            onClick={() => setActiveTab('publishing')}
            className={`px-4 py-2 text-xs font-medium rounded-lg transition-all duration-200 cursor-pointer ${
              activeTab === 'publishing'
                ? 'bg-[#D4AF37] text-[#0B101B] font-semibold shadow-sm'
                : 'text-neutral-300 hover:text-white hover:bg-white/5'
            }`}
          >
            Publishing Strategy
          </button>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredList.map((service, index) => (
            <div
              key={service.id}
              className="group flex flex-col justify-between p-7 rounded-2xl bg-[#131B2D] border border-white/10 hover:border-[#D4AF37]/50 shadow-md hover:shadow-xl transition-all duration-300 relative overflow-hidden"
            >
              {/* Subtle gold hover highlight */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#D4AF37]/5 rounded-bl-full pointer-events-none transition-all duration-300 group-hover:scale-125" />

              <div>
                {/* Top Row: Icon & Status */}
                <div className="flex items-center justify-between mb-5">
                  <div className="p-3 bg-[#D4AF37]/10 text-[#D4AF37] border border-[#D4AF37]/25 rounded-xl group-hover:bg-[#D4AF37] group-hover:text-[#0B101B] transition-colors duration-300">
                    <ServiceIcon name={service.iconName} className="w-6 h-6" />
                  </div>
                  <span className={`text-[11px] font-medium tracking-wide ${
                    service.isAvailable
                      ? 'text-emerald-400'
                      : 'text-amber-400'
                  }`}>
                    {service.isAvailable ? '• Available' : '• Waitlist'}
                  </span>
                </div>

                {/* Service Title */}
                <h3 className="font-serif text-xl font-medium text-white mb-3 group-hover:text-[#FAF9F5] transition-colors">
                  {service.title}
                </h3>

                {/* Short Description */}
                <p className="text-sm text-neutral-300 font-light leading-relaxed mb-6">
                  {service.shortDescription}
                </p>
              </div>

              {/* Card Footer: Action Buttons */}
              <div className="pt-5 border-t border-white/10 flex items-center justify-between gap-3">
                <button
                  onClick={() => setSelectedService(service)}
                  className="text-xs font-medium text-[#D4AF37] hover:text-[#E8C86A] transition-colors flex items-center gap-1 cursor-pointer py-1"
                >
                  <Info className="w-3.5 h-3.5" />
                  <span>View Details</span>
                </button>

                <button
                  onClick={() => onInquire(service.title)}
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-medium text-white bg-white/10 hover:bg-[#D4AF37] hover:text-[#0B101B] rounded-lg transition-all duration-200 cursor-pointer whitespace-nowrap"
                >
                  <span>Inquire</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Custom Project Package Banner */}
        <div className="mt-14 p-8 rounded-2xl bg-gradient-to-r from-[#131B2D] via-[#1A253B] to-[#131B2D] border border-[#D4AF37]/30 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-left">
            <div className="flex items-center gap-2 text-xs text-[#D4AF37] font-medium uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Comprehensive Multi-Service Packages</span>
            </div>
            <h4 className="font-serif text-xl sm:text-2xl font-medium text-white">
              Need End-to-End Book Publishing Support?
            </h4>
            <p className="text-xs sm:text-sm text-neutral-300 max-w-xl font-light">
              Bundle developmental editing, interior typesetting, cover design, and self-publishing walkthroughs into a coordinated, step-by-step author roadmap.
            </p>
          </div>

          <button
            onClick={() => onInquire("Full Book Publishing Package")}
            className="shrink-0 px-6 py-3 text-xs font-semibold tracking-wide uppercase text-[#0B101B] bg-gradient-to-r from-[#D4AF37] to-[#E5C769] hover:brightness-110 active:brightness-95 rounded-lg shadow-md transition-all cursor-pointer whitespace-nowrap"
          >
            Request a Custom Package Quote
          </button>
        </div>

      </div>

      {/* Modal Dialog */}
      <ServiceDetailModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
        onInquire={onInquire}
      />
    </section>
  );
};
