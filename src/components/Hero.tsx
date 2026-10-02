import React from 'react';
import { ArrowRight, BookOpen, Compass, Sparkles, Feather } from 'lucide-react';
import { SITE_CONFIG } from '../config/siteConfig';
import heroDeskImg from '../assets/images/hero_manuscript_desk_1790937157102.jpg';

interface HeroProps {
  onExploreServices: () => void;
  onStartJourney: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreServices, onStartJourney }) => {
  return (
    <section id="hero" className="relative min-h-[92vh] flex items-center bg-[#0B101B] text-[#FAF9F5] pt-24 pb-16 overflow-hidden">
      {/* Subtle ambient lighting gradients */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-[#D4AF37]/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute -bottom-20 right-0 w-[500px] h-[400px] bg-[#1E293B]/40 rounded-full blur-[120px] pointer-events-none" />

      {/* Subtle editorial watermark lines */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Editorial Value Proposition */}
          <div className="lg:col-span-7 space-y-7 text-left">
            
            {/* Elegant kicker indicator without pill enclosures */}
            <div className="flex items-center gap-3 text-xs tracking-widest uppercase text-[#D4AF37] font-medium">
              <span className="w-8 h-[1px] bg-[#D4AF37]" />
              <span className="flex items-center gap-1.5">
                <Feather className="w-3.5 h-3.5" />
                <span>Professional Literary & Book Services</span>
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-[#FAF9F5] leading-[1.15] text-balance">
              Your Story Deserves to Become a Book.
            </h1>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg text-neutral-300 font-light leading-relaxed max-w-2xl">
              From the first spark of an idea to a manuscript ready for its next chapter, <strong className="text-[#FAF9F5] font-medium">DREAM CHASER WRITES</strong> helps bring your book ambitions to life with creative support and professional book services.
            </p>

            {/* CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                onClick={onExploreServices}
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 text-sm font-semibold tracking-wide text-[#0B101B] bg-gradient-to-r from-[#D4AF37] via-[#E4C569] to-[#D4AF37] hover:brightness-110 active:brightness-95 rounded-lg shadow-lg hover:shadow-[#D4AF37]/20 transition-all duration-200 cursor-pointer"
              >
                <span>Explore Our Services</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onStartJourney}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-medium text-neutral-200 hover:text-white bg-white/5 hover:bg-white/10 border border-white/15 rounded-lg backdrop-blur-sm transition-all duration-200 cursor-pointer"
              >
                <span>Start Your Book Journey</span>
              </button>
            </div>

            {/* Trust-Building Message (Honest, authentic, without unsupported claims) */}
            <div className="pt-6 border-t border-white/10 flex flex-wrap items-center gap-y-3 gap-x-6 text-xs text-neutral-400">
              <div className="flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-[#D4AF37]" />
                <span>Tailored Writing & Editorial Craft</span>
              </div>
              <span className="hidden sm:inline text-neutral-600">·</span>
              <div className="flex items-center gap-2">
                <Compass className="w-4 h-4 text-[#D4AF37]" />
                <span>Transparent Collaboration</span>
              </div>
              <span className="hidden sm:inline text-neutral-600">·</span>
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#D4AF37]" />
                <span>Author-Centered Vision</span>
              </div>
            </div>

          </div>

          {/* Right Column: Visual Composition with Book Mockup & Open Manuscript */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Decorative Frame */}
              <div className="absolute -inset-2 bg-gradient-to-tr from-[#D4AF37]/30 via-transparent to-[#D4AF37]/10 rounded-2xl blur-sm -z-10" />

              {/* High-Resolution Hero Visual */}
              <div className="relative rounded-2xl overflow-hidden border border-[#D4AF37]/30 bg-[#121926] shadow-2xl group">
                <img
                  src={heroDeskImg}
                  alt="Author's writing desk with open manuscript, vintage fountain pen, and published hardcover books"
                  className="w-full aspect-[4/3] object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    const target = e.currentTarget;
                    if (target.src !== '/images/hero_manuscript_desk.jpg') {
                      target.src = '/images/hero_manuscript_desk.jpg';
                    }
                  }}
                />

                {/* Subtle scrim overlay for atmospheric elegance */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B101B] via-transparent to-transparent opacity-80" />

                {/* Floating literary quote overlay */}
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-[#0B101B]/85 backdrop-blur-md border border-[#D4AF37]/20 text-left">
                  <p className="font-serif italic text-xs text-neutral-200 leading-relaxed">
                    “Every page begins with courage. We provide the dedicated craft to see it through.”
                  </p>
                  <div className="mt-2 flex items-center justify-between text-[11px] text-neutral-400">
                    <span className="text-[#D4AF37] font-medium">DREAM CHASER WRITES</span>
                    <span>Editorial Craftsmanship</span>
                  </div>
                </div>
              </div>

              {/* Floating secondary badge for visual rhythm */}
              <div className="absolute -top-4 -right-3 hidden sm:flex items-center gap-2 px-3.5 py-2 rounded-lg bg-[#0B101B]/90 backdrop-blur-md border border-[#D4AF37]/40 shadow-lg text-xs font-serif text-[#D4AF37]">
                <Feather className="w-3.5 h-3.5" />
                <span>Crafting Books With Purpose</span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
