import React from 'react';
import { ArrowRight, MessageCircle, BookOpen, Globe, Share2, Star } from 'lucide-react';
import { SITE_CONFIG } from '../config/siteConfig';
import aboutStudioImg from '../assets/images/about_literary_studio_1790937170143.jpg';
import betaShowcaseImg from '../assets/images/beta_reading_showcase_1791030913829.jpg';
import webShowcaseImg from '../assets/images/web_design_showcase_1791030888542.jpg';

interface AboutSectionProps {
  onExploreServices: () => void;
  onStartJourney: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onExploreServices, onStartJourney }) => {
  const whatsappUrl = `https://wa.me/+2349014111435?text=${encodeURIComponent(SITE_CONFIG.whatsappDefaultMessage)}`;

  return (
    <section id="about" className="py-24 bg-white text-[#111827] relative border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Visual Column (matching reference site .about-visual) */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Main Studio / Work Image with bottom gradient and name overlay */}
            <div className="relative rounded-2xl overflow-hidden shadow-xl border border-neutral-200 group bg-[#0f2a45]">
              <img
                src={aboutStudioImg}
                alt="Dream Chaser Writes studio desk and manuscript workspace"
                className="w-full h-[320px] object-cover group-hover:scale-102 transition-transform duration-500"
                onError={(e) => { e.currentTarget.src = '/images/about_literary_studio.jpg'; }}
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#0f2a45] via-[#0f2a45]/80 to-transparent p-5 text-left">
                <div className="font-serif text-xl font-bold text-white leading-tight">
                  {SITE_CONFIG.brandName}
                </div>
                <div className="text-xs text-sky-300 font-medium tracking-wide mt-0.5">
                  Beta Reader · Web Designer (Any CMS) · Social Media
                </div>
              </div>
            </div>

            {/* 2 Sub-Photos Grid (matching reference site 2 training photos) */}
            <div className="grid grid-cols-2 gap-2.5">
              <div className="rounded-xl overflow-hidden h-[120px] border border-neutral-200 shadow-sm relative">
                <img
                  src={betaShowcaseImg}
                  alt="Beta reading manuscript annotations"
                  className="w-full h-full object-cover"
                  onError={(e) => { e.currentTarget.src = '/images/beta_reading_showcase.jpg'; }}
                />
                <span className="absolute bottom-1.5 left-1.5 bg-black/75 px-2 py-0.5 rounded text-[10px] text-amber-300 font-semibold">
                  Beta Reading
                </span>
              </div>
              <div className="rounded-xl overflow-hidden h-[120px] border border-neutral-200 shadow-sm relative">
                <img
                  src={webShowcaseImg}
                  alt="Website design on multiple CMS platforms"
                  className="w-full h-full object-cover"
                  onError={(e) => { e.currentTarget.src = '/images/web_design_showcase.jpg'; }}
                />
                <span className="absolute bottom-1.5 left-1.5 bg-black/75 px-2 py-0.5 rounded text-[10px] text-sky-300 font-semibold">
                  Multi-CMS Web
                </span>
              </div>
            </div>

            {/* 4 Experience Badges (matching reference site .about-exp-badges) */}
            <div className="grid grid-cols-4 gap-2 pt-2 text-center">
              <div className="p-3 rounded-xl bg-[#f8f9fa] border border-neutral-200/90 shadow-sm">
                <span className="font-serif text-lg sm:text-xl font-bold text-[#173E63] block">50+</span>
                <span className="text-[10px] text-neutral-600 block">Projects Done</span>
              </div>
              <div className="p-3 rounded-xl bg-[#f8f9fa] border border-neutral-200/90 shadow-sm">
                <span className="font-serif text-lg sm:text-xl font-bold text-[#173E63] block">Any CMS</span>
                <span className="text-[10px] text-neutral-600 block">Platforms</span>
              </div>
              <div className="p-3 rounded-xl bg-[#f8f9fa] border border-neutral-200/90 shadow-sm">
                <span className="font-serif text-lg sm:text-xl font-bold text-[#173E63] block">100%</span>
                <span className="text-[10px] text-neutral-600 block">Satisfaction</span>
              </div>
              <div className="p-3 rounded-xl bg-[#f8f9fa] border border-neutral-200/90 shadow-sm">
                <span className="font-serif text-lg sm:text-xl font-bold text-[#173E63] block">24h</span>
                <span className="text-[10px] text-neutral-600 block">Response</span>
              </div>
            </div>

          </div>

          {/* Right Text Content (matching reference site rv-r) */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <div>
              <span className="text-xs uppercase tracking-widest text-[#0166FE] font-bold block mb-1.5">
                About Me
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#0f2a45] leading-tight">
                I Deliver Constructive Book Feedback & <br />
                <span className="text-[#0166FE]">Websites That Work for Your Brand</span>
              </h2>
              <div className="w-12 h-1 bg-[#0166FE] rounded mt-3 mb-5" />
            </div>

            <div className="space-y-4 text-sm sm:text-base text-neutral-600 leading-relaxed font-normal">
              <p>
                I'm <strong className="text-neutral-900 font-semibold">{SITE_CONFIG.brandName}</strong> — an experienced beta reader, multi-platform website designer, and social media manager working with clients and authors worldwide.
              </p>
              
              <div className="space-y-3 pt-1">
                {/* 1. Beta Reading First */}
                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-[#f8f9fa] border border-neutral-200/90">
                  <div className="p-2 rounded-lg bg-amber-100 text-amber-800 shrink-0">
                    <BookOpen className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-neutral-900">1. BETA READING & BOOK SERVICE</h4>
                    <p className="text-xs text-neutral-600 mt-0.5">
                      Honest, chapter-by-chapter reader diagnostic reports across 15+ genres, pacing & plot evaluations, character consistency, and self-publishing launch readiness.
                    </p>
                  </div>
                </div>

                {/* 2. Social Media Management & Brand Growth */}
                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-[#f8f9fa] border border-neutral-200/90">
                  <div className="p-2 rounded-lg bg-pink-100 text-pink-700 shrink-0">
                    <Share2 className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-neutral-900">2. SOCIAL MEDIA MANAGEMENT & BRAND GROWTH</h4>
                    <p className="text-xs text-neutral-600 mt-0.5">
                      Aesthetic 9-grid feed curation, scheduled content calendars, captivating copywriting, and community engagement across Instagram, TikTok, and Facebook.
                    </p>
                  </div>
                </div>

                {/* 3. Website Design on Any CMS Platform */}
                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-[#f8f9fa] border border-neutral-200/90">
                  <div className="p-2 rounded-lg bg-blue-100 text-[#0166FE] shrink-0">
                    <Globe className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-neutral-900">3. WEBSITE DESIGN ON ANY CMS PLATFORM</h4>
                    <p className="text-xs text-neutral-600 mt-0.5">
                      Tailor-made websites for Personal Brands, Businesses, Events, Authors, Nonprofits, Blogs, and E-Commerce Stores on WordPress, Shopify, Webflow, Squarespace, Wix, or custom frameworks.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons (matching reference site: My Services + Chat on WhatsApp) */}
            <div className="pt-3 flex flex-wrap items-center gap-4">
              <button
                onClick={onExploreServices}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#0f2a45] hover:bg-[#173E63] text-white text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer shadow-md"
              >
                <span>My Services</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#25D366] hover:bg-[#20ba5a] text-white text-xs font-semibold uppercase tracking-wider transition-colors shadow-md"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
