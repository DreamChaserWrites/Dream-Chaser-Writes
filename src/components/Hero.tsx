import React from 'react';
import { ArrowRight, MessageCircle, BookOpen, Star, Sparkles } from 'lucide-react';
import { SITE_CONFIG } from '../config/siteConfig';
import betaShowcaseImg from '../assets/images/beta_reading_showcase_1791030913829.jpg';
import webShowcaseImg from '../assets/images/web_design_showcase_1791030888542.jpg';

interface HeroProps {
  onExploreServices: () => void;
  onViewPortfolio: (category?: string) => void;
  onStartJourney: (service?: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreServices, onViewPortfolio, onStartJourney }) => {
  const whatsappUrl = `https://wa.me/+2349014111435?text=${encodeURIComponent(SITE_CONFIG.whatsappDefaultMessage)}`;

  return (
    <section id="hero" className="relative min-h-[92vh] flex items-center bg-[#0f2a45] text-[#FAF9F5] pt-28 pb-16 overflow-hidden">
      {/* Background ambient lighting matching reference site style */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[550px] bg-[#1e4f7e]/30 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute -bottom-24 right-0 w-[550px] h-[450px] bg-[#0166FE]/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Left Column (matching reference hero-content) */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* .hero-eyebrow */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-300 text-xs font-semibold tracking-wide">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping inline-block" />
              <span>Available for Projects Worldwide</span>
            </div>

            {/* h1 with colored line2 span (Beta reading first!) */}
            <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.12]">
              Beta Reader, <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-sky-300 to-[#6BA5FF]">
                Website Designer
              </span> <br />
              <span className="text-neutral-100">& Social Media Specialist.</span>
            </h1>

            {/* .hero-desc */}
            <p className="text-base sm:text-lg text-neutral-200 font-light leading-relaxed max-w-2xl">
              I deliver in-depth <strong className="text-amber-300 font-medium">Beta Reading & Manuscript Reports</strong> for authors, build fast, beautiful websites on <strong className="text-white font-medium">any CMS platform</strong> (Personal, Business, Event, Author, Nonprofit, Blog, Ecommerce), and drive organic brand growth with <strong className="text-white font-medium">Social Media Management</strong>.
            </p>

            {/* .hero-actions */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                onClick={() => onViewPortfolio('book-services')}
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 text-xs sm:text-sm font-semibold tracking-wide uppercase text-white bg-[#0166FE] hover:bg-blue-600 rounded-lg shadow-lg hover:shadow-blue-500/25 transition-all duration-200 cursor-pointer"
              >
                <span>View My Work</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-xs sm:text-sm font-semibold text-white bg-[#25D366] hover:bg-[#20ba5a] rounded-lg shadow-lg transition-all duration-200"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>WhatsApp Me</span>
              </a>
            </div>

            {/* .hero-stats (matching reference 3 stats) */}
            <div className="pt-6 border-t border-white/10 grid grid-cols-3 gap-4">
              <div className="text-left">
                <div className="font-serif text-2xl sm:text-3xl font-extrabold text-white">50+</div>
                <div className="text-xs text-neutral-300 font-light mt-0.5">Projects completed</div>
              </div>
              <div className="text-left">
                <div className="font-serif text-2xl sm:text-3xl font-extrabold text-white">100%</div>
                <div className="text-xs text-neutral-300 font-light mt-0.5">Client satisfaction</div>
              </div>
              <div className="text-left">
                <div className="font-serif text-2xl sm:text-3xl font-extrabold text-white">24h</div>
                <div className="text-xs text-neutral-300 font-light mt-0.5">Response time</div>
              </div>
            </div>

          </div>

          {/* Right Column: .hero-visual with float badges and hero-card */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Floating Top Badge fb-1 */}
              <div className="absolute -top-4 -left-3 z-20 flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-[#0a1f33]/95 backdrop-blur-md border border-amber-400/40 shadow-xl text-xs font-semibold text-amber-300">
                <BookOpen className="w-4 h-4 text-amber-400" />
                <span>Beta Reading & Literary Craft</span>
              </div>

              {/* .hero-card */}
              <div className="relative rounded-2xl overflow-hidden border border-white/15 bg-[#173E63]/90 backdrop-blur-md p-6 sm:p-7 shadow-2xl space-y-5 text-left">
                
                {/* Visual Image Preview */}
                <div className="relative rounded-xl overflow-hidden aspect-[16/10] bg-[#091827] border border-white/10 group">
                  <img
                    src={betaShowcaseImg}
                    alt="Dream Chaser Writes manuscript review and author reports"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => { e.currentTarget.src = '/images/beta_reading_showcase.jpg'; }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#173E63] via-transparent to-transparent opacity-80" />
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-[11px] text-white">
                    <span className="font-semibold text-amber-300">Manuscript Diagnostic Review</span>
                    <span className="bg-black/60 px-2 py-0.5 rounded text-[10px] text-neutral-300">Detailed Feedback</span>
                  </div>
                </div>

                {/* Identity */}
                <div>
                  <h3 className="font-serif text-xl font-bold text-white">
                    {SITE_CONFIG.brandName}
                  </h3>
                  <p className="text-xs text-sky-200 mt-0.5">
                    1. Beta Reading · 2. Social Media Management · 3. Website Design (Any CMS)
                  </p>
                </div>

                {/* .skill-tags (Ordered as requested) */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  <span className="text-[11px] px-2.5 py-1 rounded bg-amber-500/20 border border-amber-400/40 text-amber-200 font-semibold">Beta Reading</span>
                  <span className="text-[11px] px-2.5 py-1 rounded bg-amber-500/20 border border-amber-400/40 text-amber-200">Reader Reports</span>
                  <span className="text-[11px] px-2.5 py-1 rounded bg-pink-500/20 border border-pink-400/40 text-pink-200 font-semibold">Social Media</span>
                  <span className="text-[11px] px-2.5 py-1 rounded bg-pink-500/20 border border-pink-400/40 text-pink-200">Brand Growth</span>
                  <span className="text-[11px] px-2.5 py-1 rounded bg-[#0166FE]/20 border border-[#0166FE]/40 text-sky-200 font-semibold">Any CMS</span>
                  <span className="text-[11px] px-2.5 py-1 rounded bg-white/10 border border-white/15 text-neutral-200">WordPress</span>
                  <span className="text-[11px] px-2.5 py-1 rounded bg-white/10 border border-white/15 text-neutral-200">Shopify</span>
                  <span className="text-[11px] px-2.5 py-1 rounded bg-white/10 border border-white/15 text-neutral-200">Webflow</span>
                </div>

                {/* .avail-badge */}
                <div className="pt-4 border-t border-white/15 flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs text-emerald-400 font-medium">
                    <span className="w-2 h-2 rounded-full bg-emerald-400" />
                    <span>Open to new projects</span>
                  </div>

                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-semibold text-sky-300 hover:text-white flex items-center gap-1 cursor-pointer"
                  >
                    <span>Chat on WhatsApp</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>

              </div>

              {/* Floating Bottom Badge fb-2 */}
              <div className="absolute -bottom-3 -right-3 z-20 flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-[#0a1f33]/95 backdrop-blur-md border border-amber-400/40 shadow-xl text-xs font-semibold text-white">
                <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                <span>5.0 Rating · 100% Satisfaction</span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
