import React, { useState } from 'react';
import { Star, CheckCircle2, BookOpen, Share2, Layout, Quote, MessageCircle, ArrowRight } from 'lucide-react';
import { SITE_CONFIG, ServicePillarId, TestimonialItem } from '../config/siteConfig';

export const TestimonialsSection: React.FC = () => {
  const testimonials = SITE_CONFIG.testimonials;
  const [activeFilter, setActiveFilter] = useState<'all' | ServicePillarId>('all');

  const filteredReviews = testimonials.filter((t) => {
    if (activeFilter === 'all') return true;
    return t.pillar === activeFilter;
  });

  const getPillarBadge = (pillar: ServicePillarId) => {
    switch (pillar) {
      case 'book-services':
        return {
          bg: 'bg-amber-500/10 text-amber-300 border-amber-500/30',
          label: '1. BETA READING & BOOK SERVICE',
          icon: <BookOpen className="w-3.5 h-3.5" />
        };
      case 'social-media':
        return {
          bg: 'bg-pink-500/10 text-pink-300 border-pink-500/30',
          label: '2. SOCIAL MEDIA MANAGEMENT & BRAND GROWTH',
          icon: <Share2 className="w-3.5 h-3.5" />
        };
      case 'web-design':
        return {
          bg: 'bg-blue-500/10 text-blue-300 border-blue-500/30',
          label: '3. WEBSITE DESIGN ON ANY CMS PLATFORM',
          icon: <Layout className="w-3.5 h-3.5" />
        };
      default:
        return {
          bg: 'bg-white/10 text-neutral-200 border-white/20',
          label: 'Verified Service',
          icon: <CheckCircle2 className="w-3.5 h-3.5" />
        };
    }
  };

  const counts = {
    all: testimonials.length,
    'book-services': testimonials.filter((t) => t.pillar === 'book-services').length,
    'social-media': testimonials.filter((t) => t.pillar === 'social-media').length,
    'web-design': testimonials.filter((t) => t.pillar === 'web-design').length,
  };

  return (
    <section id="testimonials" className="py-24 bg-[#0a1c2e] text-[#FAF9F5] relative border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs uppercase tracking-widest text-amber-300 font-bold block mb-2">
            Verified Client Reviews
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-3">
            Real Results & Authentic Feedback
          </h2>
          <div className="w-12 h-1 bg-amber-400 rounded mx-auto mb-4" />
          <p className="text-sm sm:text-base text-neutral-300 font-light leading-relaxed">
            Read comprehensive, positive reviews from published authors, creators, and business founders across all three specialized service pillars.
          </p>

          {/* Social Proof Badges Bar */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-xs font-semibold">
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-amber-300">
              <div className="flex text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                ))}
              </div>
              <span className="font-bold text-white">5.0 Star Average</span>
            </div>
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-emerald-300">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
              <span>100% Client Satisfaction</span>
            </div>
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-sky-300">
              <span>50+ Projects Completed Worldwide</span>
            </div>
          </div>
        </div>

        {/* 3 Pillars Filter Buttons Arranged Exactly as Requested */}
        <div className="flex flex-wrap items-center justify-center gap-2 p-1.5 bg-[#173E63]/80 border border-white/10 rounded-2xl mb-12 max-w-4xl mx-auto shadow-lg">
          <button
            onClick={() => setActiveFilter('all')}
            className={`px-4 py-2.5 text-xs font-bold rounded-xl transition-all cursor-pointer ${
              activeFilter === 'all'
                ? 'bg-amber-400 text-[#0f2a45] shadow-md'
                : 'text-neutral-300 hover:text-white hover:bg-white/5'
            }`}
          >
            All Reviews ({counts.all})
          </button>

          <button
            onClick={() => setActiveFilter('book-services')}
            className={`flex items-center gap-1.5 px-4 py-2.5 text-xs font-bold rounded-xl transition-all cursor-pointer ${
              activeFilter === 'book-services'
                ? 'bg-amber-500 text-[#0f2a45] shadow-md'
                : 'text-neutral-300 hover:text-white hover:bg-white/5'
            }`}
          >
            <BookOpen className="w-3.5 h-3.5" />
            <span>1. BETA READING & BOOK SERVICE ({counts['book-services']})</span>
          </button>

          <button
            onClick={() => setActiveFilter('social-media')}
            className={`flex items-center gap-1.5 px-4 py-2.5 text-xs font-bold rounded-xl transition-all cursor-pointer ${
              activeFilter === 'social-media'
                ? 'bg-pink-600 text-white shadow-md'
                : 'text-neutral-300 hover:text-white hover:bg-white/5'
            }`}
          >
            <Share2 className="w-3.5 h-3.5" />
            <span>2. SOCIAL MEDIA MANAGEMENT & BRAND GROWTH ({counts['social-media']})</span>
          </button>

          <button
            onClick={() => setActiveFilter('web-design')}
            className={`flex items-center gap-1.5 px-4 py-2.5 text-xs font-bold rounded-xl transition-all cursor-pointer ${
              activeFilter === 'web-design'
                ? 'bg-blue-600 text-white shadow-md'
                : 'text-neutral-300 hover:text-white hover:bg-white/5'
            }`}
          >
            <Layout className="w-3.5 h-3.5" />
            <span>3. WEBSITE DESIGN ON ANY CMS PLATFORM ({counts['web-design']})</span>
          </button>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredReviews.map((t) => {
            const badge = getPillarBadge(t.pillar);

            return (
              <div
                key={t.id}
                className="p-7 sm:p-8 rounded-2xl bg-[#173E63]/90 border border-white/15 hover:border-amber-400/60 shadow-xl transition-all duration-300 flex flex-col justify-between text-left relative group hover:-translate-y-1"
              >
                <div>
                  {/* Top Bar: Segment Tag & Verified Rating */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                    <span
                      className={`inline-flex items-center gap-1.5 text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-md border ${badge.bg}`}
                    >
                      {badge.icon}
                      <span>{t.pillarLabel}</span>
                    </span>

                    <div className="flex items-center gap-1 text-amber-400">
                      {[...Array(t.rating)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                      ))}
                      <span className="text-xs text-amber-200 font-bold ml-1">5.0</span>
                    </div>
                  </div>

                  {/* Outcome Highlight Pill */}
                  <div className="p-2.5 rounded-lg bg-emerald-500/10 border border-emerald-500/25 text-emerald-300 text-xs font-semibold mb-4 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span><strong>Outcome:</strong> {t.highlightOutcome}</span>
                  </div>

                  {/* Service Subtitle */}
                  <p className="text-[11px] uppercase tracking-wider text-neutral-300 font-bold mb-3">
                    {t.service} {t.genreOrPlatform && `· ${t.genreOrPlatform}`}
                  </p>

                  {/* Quote Body */}
                  <div className="relative mb-6">
                    <Quote className="w-5 h-5 text-amber-400/30 absolute -top-2 -left-1" />
                    <p className="text-xs sm:text-sm text-neutral-100 leading-relaxed font-light pl-5 italic">
                      “{t.quote}”
                    </p>
                  </div>
                </div>

                {/* Reviewer Bio & Footer */}
                <div className="pt-4 border-t border-white/10 flex items-center justify-between gap-3">
                  <div>
                    <h4 className="font-serif text-base font-bold text-white group-hover:text-amber-300 transition-colors">
                      {t.client}
                    </h4>
                    <p className="text-xs text-neutral-300">
                      {t.role}
                    </p>
                  </div>

                  <span className="text-[10px] uppercase font-semibold px-2 py-0.5 rounded bg-black/40 border border-white/10 text-neutral-300">
                    Verified
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA Banner */}
        <div className="mt-16 p-8 rounded-2xl bg-gradient-to-r from-[#173E63] via-[#0f2a45] to-[#173E63] border border-amber-400/30 text-center max-w-4xl mx-auto shadow-2xl flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-left space-y-1">
            <span className="text-xs uppercase tracking-wider text-amber-300 font-bold block">
              Ready to Be My Next Success Story?
            </span>
            <h3 className="font-serif text-2xl font-bold text-white">
              Let's Discuss Your Book, Social Media, or Website
            </h3>
            <p className="text-xs sm:text-sm text-neutral-300 font-light">
              Fast turnarounds, clear communication, and dedicated craftsmanship.
            </p>
          </div>

          <a
            href="https://wa.me/+2349014111435?text=Hi!%20I%20read%20your%20client%20reviews%20and%20would%20love%20to%20discuss%20a%20project%20with%20you."
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-lg bg-[#25D366] hover:bg-[#20ba5a] text-white text-xs font-bold uppercase tracking-wider transition-all whitespace-nowrap shadow-lg flex items-center gap-2 shrink-0"
          >
            <MessageCircle className="w-4 h-4 fill-white" />
            <span>Chat on WhatsApp (+2349014111435)</span>
          </a>
        </div>

      </div>
    </section>
  );
};
