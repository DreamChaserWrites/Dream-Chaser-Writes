import React, { useState } from 'react';
import { ArrowRight, BookOpen, Eye, Sparkles } from 'lucide-react';
import { SITE_CONFIG, PortfolioItem } from '../config/siteConfig';
import { PortfolioDetailModal } from './PortfolioDetailModal';

interface PortfolioSectionProps {
  onInquire: (serviceTitle?: string) => void;
}

export const PortfolioSection: React.FC<PortfolioSectionProps> = ({ onInquire }) => {
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);
  const [filter, setFilter] = useState<'all' | 'fiction' | 'memoir' | 'cover-design'>('all');

  const filteredItems = SITE_CONFIG.portfolio.filter((item) => {
    if (filter === 'all') return true;
    return item.category === filter;
  });

  return (
    <section id="portfolio" className="py-24 bg-[#FAF9F5] text-[#1E232A] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl text-left">
            <div className="flex items-center gap-3 text-xs tracking-widest uppercase text-[#967417] font-semibold mb-3">
              <span className="w-6 h-[1.5px] bg-[#967417]" />
              <span>Portfolio & Book Showcase</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-[#0B101B] mb-3">
              Bespoke Craftsmanship in Every Detail
            </h2>
            <p className="text-base text-neutral-600 font-light leading-relaxed">
              Explore design concepts, hardcover finishes, and editorial layouts crafted to trade-publishing benchmarks.
            </p>
          </div>

          {/* Interactive Filter Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-neutral-200/70 rounded-xl self-start md:self-auto">
            <button
              onClick={() => setFilter('all')}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-all cursor-pointer ${
                filter === 'all'
                  ? 'bg-white text-[#0B101B] font-semibold shadow-sm'
                  : 'text-neutral-600 hover:text-[#0B101B]'
              }`}
            >
              All Projects
            </button>
            <button
              onClick={() => setFilter('fiction')}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-all cursor-pointer ${
                filter === 'fiction'
                  ? 'bg-white text-[#0B101B] font-semibold shadow-sm'
                  : 'text-neutral-600 hover:text-[#0B101B]'
              }`}
            >
              Fiction
            </button>
            <button
              onClick={() => setFilter('memoir')}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-all cursor-pointer ${
                filter === 'memoir'
                  ? 'bg-white text-[#0B101B] font-semibold shadow-sm'
                  : 'text-neutral-600 hover:text-[#0B101B]'
              }`}
            >
              Memoirs
            </button>
            <button
              onClick={() => setFilter('cover-design')}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-all cursor-pointer ${
                filter === 'cover-design'
                  ? 'bg-white text-[#0B101B] font-semibold shadow-sm'
                  : 'text-neutral-600 hover:text-[#0B101B]'
              }`}
            >
              Cover Design
            </button>
          </div>
        </div>

        {/* Portfolio Showcase Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedItem(item)}
              className="group cursor-pointer rounded-2xl bg-white border border-neutral-200 hover:border-[#D4AF37] shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col justify-between"
            >
              {/* Image Frame */}
              <div className="relative aspect-[3/4] bg-[#0E1524] overflow-hidden">
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  referrerPolicy="no-referrer"
                />
                
                {/* Hover overlay hint */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="px-4 py-2 rounded-lg bg-[#0B101B]/90 text-white text-xs font-medium flex items-center gap-1.5 shadow-lg border border-white/10">
                    <Eye className="w-3.5 h-3.5 text-[#D4AF37]" />
                    <span>View Project Details</span>
                  </div>
                </div>

                {/* Sample Tag */}
                {item.isSamplePlaceholder && (
                  <div className="absolute top-3 left-3 bg-[#0B101B]/85 backdrop-blur-sm border border-[#D4AF37]/30 text-[#D4AF37] text-[10px] uppercase tracking-wider px-2.5 py-1 rounded-md">
                    Showcase Concept
                  </div>
                )}
              </div>

              {/* Card Meta Content */}
              <div className="p-6 text-left">
                <div className="text-[11px] font-semibold tracking-wider uppercase text-[#967417] mb-1.5">
                  {item.categoryLabel}
                </div>
                <h3 className="font-serif text-xl font-medium text-[#0B101B] mb-1 group-hover:text-[#967417] transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-neutral-500 italic mb-3">
                  {item.subtitle}
                </p>
                <p className="text-xs text-neutral-600 line-clamp-2 font-light leading-relaxed mb-4">
                  {item.description}
                </p>

                {/* Services Tags */}
                <div className="flex flex-wrap gap-1.5 pt-3 border-t border-neutral-100">
                  {item.servicesProvided.slice(0, 2).map((srv, idx) => (
                    <span
                      key={idx}
                      className="text-[10px] text-neutral-600 bg-neutral-100 px-2 py-0.5 rounded"
                    >
                      {srv}
                    </span>
                  ))}
                  {item.servicesProvided.length > 2 && (
                    <span className="text-[10px] text-neutral-400 self-center">
                      +{item.servicesProvided.length - 2} more
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Dedicated Inquiry CTA Below Gallery */}
        <div className="p-8 sm:p-10 rounded-2xl bg-[#0B101B] text-white border border-[#D4AF37]/30 shadow-xl text-center max-w-4xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#D4AF37] font-semibold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Turn Your Idea Into Reality</span>
          </div>
          <h3 className="font-serif text-2xl sm:text-3xl font-medium text-white max-w-xl mx-auto">
            Envisioning Your Book in This Showcase?
          </h3>
          <p className="text-xs sm:text-sm text-neutral-300 font-light max-w-lg mx-auto leading-relaxed">
            From first concept brainstorming to the day you hold your physical book, Dream Chaser Writes provides the dedicated partnership you need.
          </p>
          <div className="pt-2">
            <button
              onClick={() => onInquire("Book Showcase Project")}
              className="inline-flex items-center gap-2 px-7 py-3.5 text-xs font-semibold uppercase tracking-wider text-[#0B101B] bg-gradient-to-r from-[#D4AF37] via-[#E4C569] to-[#D4AF37] hover:brightness-110 rounded-lg shadow-md transition-all cursor-pointer"
            >
              <span>Discuss Your Book Project With Us</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>

      {/* Modal */}
      <PortfolioDetailModal
        item={selectedItem}
        onClose={() => setSelectedItem(null)}
        onInquireSimilar={onInquire}
      />
    </section>
  );
};
