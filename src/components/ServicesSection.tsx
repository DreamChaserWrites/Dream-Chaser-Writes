import React, { useState } from 'react';
import { ArrowRight, Info, MessageCircle, BookOpen, Globe, Share2 } from 'lucide-react';
import { SITE_CONFIG, ServiceItem, ServicePillarId } from '../config/siteConfig';
import { ServiceIcon } from './ServiceIcon';
import { ServiceDetailModal } from './ServiceDetailModal';

interface ServicesSectionProps {
  onInquire: (serviceTitle?: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onInquire }) => {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);
  // Default to 'book-services' as requested: "Beta reading and book service should be the first segment"
  const [activePillar, setActivePillar] = useState<'all' | ServicePillarId>('all');

  const filteredServices = SITE_CONFIG.services.filter((s) => {
    if (activePillar === 'all') return true;
    return s.pillarId === activePillar;
  });

  const whatsappUrl = `https://wa.me/+2349014111435?text=${encodeURIComponent("Hi! I found your portfolio and I would like to start a project with you.")}`;

  return (
    <section id="services" className="py-24 bg-[#0f2a45] text-[#FAF9F5] relative border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header (matching reference site rv style) */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs uppercase tracking-widest text-[#6BA5FF] font-bold block mb-2">
            What I Do
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-3">
            My Services
          </h2>
          <div className="w-12 h-1 bg-[#0166FE] rounded mx-auto mb-4" />
          <p className="text-neutral-200 text-sm sm:text-base font-light leading-relaxed">
            Professional beta reading & manuscript critique reports, multi-platform website design across any CMS, and social media brand management.
          </p>
        </div>

        {/* 3 Pillar Segmentation Switcher (Beta reading is FIRST!) */}
        <div className="flex flex-wrap items-center justify-center gap-2 p-1.5 bg-[#173E63]/80 border border-white/10 rounded-2xl mb-12 max-w-3xl mx-auto shadow-xl">
          <button
            onClick={() => setActivePillar('all')}
            className={`px-4 py-2.5 text-xs font-semibold uppercase tracking-wider rounded-xl transition-all cursor-pointer ${
              activePillar === 'all'
                ? 'bg-[#0166FE] text-white shadow-md'
                : 'text-neutral-300 hover:text-white hover:bg-white/5'
            }`}
          >
            All Services ({SITE_CONFIG.services.length})
          </button>
          
          {/* Segment 1: Beta Reading & Books */}
          <button
            onClick={() => setActivePillar('book-services')}
            className={`flex items-center gap-2 px-4 py-2.5 text-xs font-semibold uppercase tracking-wider rounded-xl transition-all cursor-pointer ${
              activePillar === 'book-services'
                ? 'bg-amber-600 text-white shadow-md'
                : 'text-neutral-300 hover:text-white hover:bg-white/5'
            }`}
          >
            <BookOpen className="w-3.5 h-3.5" />
            <span>1. BETA READING & BOOK SERVICE</span>
          </button>

          {/* Segment 2: Social Media Management & Brand Growth */}
          <button
            onClick={() => setActivePillar('social-media')}
            className={`flex items-center gap-2 px-4 py-2.5 text-xs font-semibold uppercase tracking-wider rounded-xl transition-all cursor-pointer ${
              activePillar === 'social-media'
                ? 'bg-pink-600 text-white shadow-md'
                : 'text-neutral-300 hover:text-white hover:bg-white/5'
            }`}
          >
            <Share2 className="w-3.5 h-3.5" />
            <span>2. SOCIAL MEDIA MANAGEMENT & BRAND GROWTH</span>
          </button>

          {/* Segment 3: Website Design on Any CMS Platform */}
          <button
            onClick={() => setActivePillar('web-design')}
            className={`flex items-center gap-2 px-4 py-2.5 text-xs font-semibold uppercase tracking-wider rounded-xl transition-all cursor-pointer ${
              activePillar === 'web-design'
                ? 'bg-[#0166FE] text-white shadow-md'
                : 'text-neutral-300 hover:text-white hover:bg-white/5'
            }`}
          >
            <Globe className="w-3.5 h-3.5" />
            <span>3. WEBSITE DESIGN ON ANY CMS PLATFORM</span>
          </button>
        </div>

        {/* Services Cards Grid (matching reference site .services-grid layout) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredServices.map((service, index) => (
            <div
              key={service.id}
              className="group flex flex-col justify-between p-7 rounded-2xl bg-[#173E63]/90 border border-white/10 hover:border-sky-400/50 shadow-xl transition-all duration-300 relative text-left"
            >
              <div>
                {/* Index Number & Category */}
                <div className="flex items-center justify-between mb-5">
                  <span className="font-mono text-base font-bold text-sky-300">
                    0{index + 1}
                  </span>
                  <span className="text-[11px] font-semibold tracking-wide px-2.5 py-0.5 rounded bg-black/40 text-neutral-200 border border-white/10">
                    {service.pillarLabel}
                  </span>
                </div>

                {/* Service Icon */}
                <div className="w-12 h-12 rounded-xl bg-white/10 text-white flex items-center justify-center mb-5 group-hover:bg-[#0166FE] transition-colors duration-300 shadow-md">
                  <ServiceIcon name={service.iconName} className="w-6 h-6" />
                </div>

                {/* Title */}
                <h3 className="font-serif text-xl font-bold text-white mb-2.5 group-hover:text-sky-300 transition-colors">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-sm text-neutral-200 font-light leading-relaxed mb-5">
                  {service.shortDescription}
                </p>

                {/* .service-tags */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {service.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="text-[11px] px-2 py-0.5 rounded bg-black/30 border border-white/10 text-neutral-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action row */}
              <div className="pt-4 border-t border-white/10 flex items-center justify-between gap-3">
                <button
                  onClick={() => setSelectedService(service)}
                  className="text-xs font-semibold text-sky-300 hover:text-white transition-colors flex items-center gap-1 cursor-pointer"
                >
                  <Info className="w-3.5 h-3.5" />
                  <span>Full Details</span>
                </button>

                <button
                  onClick={() => onInquire(service.title)}
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold uppercase tracking-wider text-white bg-[#0166FE] hover:bg-blue-600 rounded-lg transition-colors cursor-pointer"
                >
                  <span>Inquire</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Centered CTA matching reference site: "Start a Project on WhatsApp" */}
        <div className="text-center mt-12">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-lg bg-[#25D366] hover:bg-[#20ba5a] text-white text-xs sm:text-sm font-bold uppercase tracking-wider shadow-xl transition-all hover:scale-105"
          >
            <MessageCircle className="w-4 h-4 fill-white" />
            <span>Start a Project on WhatsApp (+2349014111435)</span>
          </a>
        </div>

      </div>

      <ServiceDetailModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
        onInquire={onInquire}
      />
    </section>
  );
};
