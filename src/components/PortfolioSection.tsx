import React, { useState, useEffect } from 'react';
import { Eye, ExternalLink, BookOpen, Globe, Share2, ArrowRight, MessageCircle, Filter } from 'lucide-react';
import { SITE_CONFIG, WebProject, SocialProject, BookProject, ServicePillarId } from '../config/siteConfig';
import { ProjectPreviewModal } from './ProjectPreviewModal';

interface PortfolioSectionProps {
  onInquire: (serviceTitle?: string) => void;
  defaultPillar?: ServicePillarId;
}

export const PortfolioSection: React.FC<PortfolioSectionProps> = ({
  onInquire,
  defaultPillar = 'book-services' // Beta reading is FIRST as requested!
}) => {
  const [activeCategory, setActiveCategory] = useState<ServicePillarId>(defaultPillar);
  const [bookFilter, setBookFilter] = useState<string>('all');
  const [webFilter, setWebFilter] = useState<string>('all');
  const [socialFilter, setSocialFilter] = useState<string>('all');

  const [activeModalProject, setActiveModalProject] = useState<
    | { type: 'book'; data: BookProject }
    | { type: 'web'; data: WebProject }
    | { type: 'social'; data: SocialProject }
    | null
  >(null);

  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash;
      if (hash === '#portfolio-books') setActiveCategory('book-services');
      else if (hash === '#portfolio-web') setActiveCategory('web-design');
      else if (hash === '#portfolio-social') setActiveCategory('social-media');
    };
    handleHash();
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  const filteredBookProjects = SITE_CONFIG.bookProjects.filter((p) => {
    if (bookFilter === 'all') return true;
    return (
      p.serviceType.toLowerCase().includes(bookFilter.toLowerCase()) ||
      p.genre.toLowerCase().includes(bookFilter.toLowerCase()) ||
      (p.genreKey && p.genreKey.toLowerCase().includes(bookFilter.toLowerCase()))
    );
  });

  const filteredWebProjects = SITE_CONFIG.webProjects.filter((p) => {
    if (webFilter === 'all') return true;
    return p.clientType.toLowerCase().includes(webFilter.toLowerCase()) || p.cmsPlatform.toLowerCase().includes(webFilter.toLowerCase());
  });

  const filteredSocialProjects = SITE_CONFIG.socialProjects.filter((p) => {
    if (socialFilter === 'all') return true;
    return p.niche.toLowerCase().includes(socialFilter.toLowerCase());
  });

  const whatsappUrl = `https://wa.me/+2349014111435?text=${encodeURIComponent("Hi! I saw your recent projects and would like to inquire about similar work.")}`;

  return (
    <section id="portfolio" className="py-24 bg-[#f8f9fa] text-[#111827] relative border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header matching reference site .portfolio-section .wrap */}
        <div className="text-left mb-8">
          <span className="text-xs uppercase tracking-widest text-[#0B5ED7] font-bold block mb-1.5">
            My Work
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#0f2a45] mb-2">
            Recent Projects
          </h2>
          <div className="w-12 h-1 bg-[#0B5ED7] rounded mb-3" />
          <p className="text-sm text-neutral-600 font-light leading-relaxed max-w-2xl">
            A curated selection of beta reading reports, websites designed across various CMS platforms, and social media campaigns for clients worldwide.
          </p>
        </div>

        {/* 3 Main Segmented Category Tabs (BETA READING IS THE FIRST SEGMENT!) */}
        <div className="flex flex-wrap items-center gap-2 p-1.5 bg-white border border-neutral-200 rounded-2xl mb-8 shadow-sm">
          {/* Segment 1: BETA READING & BOOK SERVICE */}
          <button
            onClick={() => {
              setActiveCategory('book-services');
              window.location.hash = 'portfolio-books';
            }}
            className={`flex items-center gap-2 px-5 py-2.5 text-xs sm:text-sm font-bold rounded-xl transition-all cursor-pointer ${
              activeCategory === 'book-services'
                ? 'bg-amber-600 text-white shadow-md'
                : 'text-neutral-700 hover:text-neutral-900 hover:bg-neutral-100'
            }`}
          >
            <BookOpen className="w-4 h-4 text-amber-200" />
            <span>1. BETA READING & BOOK SERVICE</span>
          </button>

          {/* Segment 2: SOCIAL MEDIA MANAGEMENT & BRAND GROWTH */}
          <button
            onClick={() => {
              setActiveCategory('social-media');
              window.location.hash = 'portfolio-social';
            }}
            className={`flex items-center gap-2 px-5 py-2.5 text-xs sm:text-sm font-bold rounded-xl transition-all cursor-pointer ${
              activeCategory === 'social-media'
                ? 'bg-pink-600 text-white shadow-md'
                : 'text-neutral-700 hover:text-neutral-900 hover:bg-neutral-100'
            }`}
          >
            <Share2 className="w-4 h-4 text-pink-200" />
            <span>2. SOCIAL MEDIA MANAGEMENT & BRAND GROWTH</span>
          </button>

          {/* Segment 3: WEBSITE DESIGN ON ANY CMS PLATFORM */}
          <button
            onClick={() => {
              setActiveCategory('web-design');
              window.location.hash = 'portfolio-web';
            }}
            className={`flex items-center gap-2 px-5 py-2.5 text-xs sm:text-sm font-bold rounded-xl transition-all cursor-pointer ${
              activeCategory === 'web-design'
                ? 'bg-[#0166FE] text-white shadow-md'
                : 'text-neutral-700 hover:text-neutral-900 hover:bg-neutral-100'
            }`}
          >
            <Globe className="w-4 h-4 text-sky-200" />
            <span>3. WEBSITE DESIGN ON ANY CMS PLATFORM</span>
          </button>
        </div>

        {/* ── SEGMENTATION 1: BETA READING & BOOK SERVICES (FIRST SEGMENT) ── */}
        {activeCategory === 'book-services' && (
          <div className="space-y-6 animate-fadeIn">
            {/* Sub-Filters by Genre & Service */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs text-neutral-500 font-medium flex items-center gap-1 mr-2">
                <Filter className="w-3.5 h-3.5 text-amber-600" />
                <span>Filter by Genre / Service:</span>
              </span>
              {[
                { id: 'all', label: 'All Projects (15+ Genres)' },
                { id: 'romance', label: 'Romance & Romantasy' },
                { id: 'scifi', label: 'Sci-Fi & Speculative' },
                { id: 'ya', label: 'YA & Mystery' },
                { id: 'horror', label: 'Horror & Paranormal' },
                { id: 'historical', label: 'Historical & Crime' },
                { id: 'fiction-nonfiction', label: 'Nonfiction & Memoir' },
                { id: 'Beta', label: 'Full Beta Reports' },
                { id: 'Critique', label: 'Manuscript Critiques' },
              ].map((f) => (
                <button
                  key={f.id}
                  onClick={() => setBookFilter(f.id)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                    bookFilter === f.id
                      ? 'bg-amber-600 text-white'
                      : 'bg-white text-neutral-600 hover:text-neutral-900 border border-neutral-200'
                  }`}
                >
                  {f.label}
                </button>
              ))}
            </div>

            {/* Grid matching reference site .portfolio-grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {filteredBookProjects.map((p) => (
                <div
                  key={p.id}
                  className="group rounded-2xl bg-white border border-neutral-200 hover:border-amber-500 shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col justify-between text-left"
                >
                  {/* .port-thumb */}
                  <div className="relative aspect-[4/3] bg-[#0f2a45] overflow-hidden">
                    <img
                      src={p.imageUrl}
                      alt={p.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      onError={(e) => { e.currentTarget.src = '/images/beta_reading_showcase.jpg'; }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-60" />

                    <div className="absolute top-3 left-3 flex items-center gap-1.5">
                      <span className="text-[10px] uppercase font-bold px-2 py-0.5 rounded bg-amber-600 text-white shadow-sm">
                        {p.serviceType}
                      </span>
                      <span className="text-[10px] uppercase font-semibold px-2 py-0.5 rounded bg-black/75 text-amber-200">
                        {p.wordCount}
                      </span>
                    </div>

                    {/* .port-overlay with Preview & Visit Sample */}
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3 p-4">
                      <button
                        onClick={() => setActiveModalProject({ type: 'book', data: p })}
                        className="px-4 py-2 rounded-lg bg-amber-600 text-white text-xs font-bold flex items-center gap-1.5 hover:bg-amber-500 transition-colors shadow-lg cursor-pointer"
                      >
                        <Eye className="w-3.5 h-3.5" />
                        <span>Preview Report</span>
                      </button>
                    </div>
                  </div>

                  {/* .port-body */}
                  <div className="p-6 space-y-2.5">
                    <span className="text-xs text-amber-700 font-bold uppercase tracking-wider block">
                      {p.genre}
                    </span>

                    <h3 className="font-serif text-xl font-bold text-[#0f2a45]">
                      {p.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-neutral-600 font-light leading-relaxed">
                      {p.description}
                    </p>

                    <div className="p-2.5 rounded-lg bg-amber-50 border border-amber-200 text-xs text-amber-900 font-medium">
                      <strong>Author Outcome:</strong> {p.authorOutcome}
                    </div>
                  </div>

                  {/* Card bottom footer */}
                  <div className="px-6 py-4 border-t border-neutral-100 flex items-center justify-between text-xs bg-[#fafbfc]">
                    <button
                      onClick={() => setActiveModalProject({ type: 'book', data: p })}
                      className="text-amber-700 font-bold hover:underline flex items-center gap-1 cursor-pointer"
                    >
                      <span>Read Feedback Summary</span>
                      <ArrowRight className="w-3 h-3" />
                    </button>
                    <button
                      onClick={() => onInquire(`Beta Reading: ${p.title}`)}
                      className="text-neutral-500 hover:text-neutral-900 font-semibold cursor-pointer"
                    >
                      Book a Reading
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ── SEGMENTATION 2: SOCIAL MEDIA MANAGEMENT & BRAND GROWTH ── */}
        {activeCategory === 'social-media' && (
          <div className="space-y-6 animate-fadeIn">
            {/* Sub-Filters */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs text-neutral-500 font-medium flex items-center gap-1 mr-2">
                <Filter className="w-3.5 h-3.5 text-pink-600" />
                <span>Filter by Niche:</span>
              </span>
              {[
                { id: 'all', label: 'All Social Campaigns' },
                { id: 'Retail', label: 'E-commerce & Retail' },
                { id: 'Author', label: 'Author & Personal Brand' },
                { id: 'Creative', label: 'Creative Agency' },
                { id: 'Events', label: 'Events & Culture' },
              ].map((f) => (
                <button
                  key={f.id}
                  onClick={() => setSocialFilter(f.id)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                    socialFilter === f.id
                      ? 'bg-pink-600 text-white'
                      : 'bg-white text-neutral-600 hover:text-neutral-900 border border-neutral-200'
                  }`}
                >
                  {f.label}
                </button>
              ))}
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {filteredSocialProjects.map((p) => (
                <div
                  key={p.id}
                  className="group rounded-2xl bg-white border border-neutral-200 hover:border-pink-500 shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col justify-between text-left"
                >
                  <div className="relative aspect-[4/3] bg-[#0f2a45] overflow-hidden">
                    <img
                      src={p.imageUrl}
                      alt={p.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      onError={(e) => {
                        if (p.niche === 'E-commerce & Retail') e.currentTarget.src = '/images/social_skincare_feed.jpg';
                        else if (p.niche === 'Lifestyle & Author Brand') e.currentTarget.src = '/images/social_author_booktok.jpg';
                        else if (p.niche === 'Creative Agency') e.currentTarget.src = '/images/social_creative_studio.jpg';
                        else e.currentTarget.src = '/images/social_events_dining.jpg';
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-60" />

                    <div className="absolute top-3 left-3">
                      <span className="text-[10px] uppercase font-bold px-2 py-0.5 rounded bg-pink-600 text-white">
                        {p.niche}
                      </span>
                    </div>

                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4">
                      <button
                        onClick={() => setActiveModalProject({ type: 'social', data: p })}
                        className="px-4 py-2 rounded-lg bg-pink-600 text-white text-xs font-bold flex items-center gap-1.5 hover:bg-pink-500 transition-colors shadow-lg cursor-pointer"
                      >
                        <Eye className="w-3.5 h-3.5" />
                        <span>View Strategy & Grid</span>
                      </button>
                    </div>
                  </div>

                  <div className="p-6 space-y-2.5">
                    <div className="flex items-center gap-2 text-xs text-pink-700 font-bold uppercase tracking-wider">
                      <span>{p.platforms.join(' · ')}</span>
                    </div>

                    <h3 className="font-serif text-xl font-bold text-[#0f2a45]">
                      {p.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-neutral-600 font-light leading-relaxed">
                      {p.description}
                    </p>

                    <div className="p-2.5 rounded-lg bg-pink-50 border border-pink-200 text-xs text-pink-900 font-medium">
                      <strong>Impact:</strong> {p.featuredOutcome}
                    </div>

                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {p.tags.map((t, i) => (
                        <span key={i} className="text-[10px] px-2 py-0.5 rounded bg-neutral-100 text-neutral-600">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="px-6 py-4 border-t border-neutral-100 flex items-center justify-between text-xs bg-[#fafbfc]">
                    <button
                      onClick={() => setActiveModalProject({ type: 'social', data: p })}
                      className="text-pink-700 font-bold hover:underline flex items-center gap-1 cursor-pointer"
                    >
                      <span>Campaign View</span>
                      <ArrowRight className="w-3 h-3" />
                    </button>
                    <button
                      onClick={() => onInquire(`Social Media: ${p.title}`)}
                      className="text-neutral-500 hover:text-neutral-900 font-semibold cursor-pointer"
                    >
                      Hire for Social
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ── SEGMENTATION 3: WEBSITE DESIGN ON ANY CMS PLATFORM ── */}
        {activeCategory === 'web-design' && (
          <div className="space-y-6 animate-fadeIn">
            {/* Sub-Filters */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs text-neutral-500 font-medium flex items-center gap-1 mr-2">
                <Filter className="w-3.5 h-3.5 text-[#0166FE]" />
                <span>Filter by Type / CMS:</span>
              </span>
              {[
                { id: 'all', label: 'All Websites' },
                { id: 'Business', label: 'Business & Limo' },
                { id: 'Ecommerce', label: 'E-Commerce / Shopify' },
                { id: 'Author', label: 'Author & Personal' },
                { id: 'Nonprofit', label: 'Nonprofit & Foundation' },
                { id: 'Event', label: 'Event & Conference' },
                { id: 'Blog', label: 'Editorial & Blog' },
              ].map((f) => (
                <button
                  key={f.id}
                  onClick={() => setWebFilter(f.id)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                    webFilter === f.id
                      ? 'bg-[#0166FE] text-white'
                      : 'bg-white text-neutral-600 hover:text-neutral-900 border border-neutral-200'
                  }`}
                >
                  {f.label}
                </button>
              ))}
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {filteredWebProjects.map((p) => (
                <div
                  key={p.id}
                  className="group rounded-2xl bg-white border border-neutral-200 hover:border-[#0166FE] shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col justify-between text-left"
                >
                  <div className="relative aspect-[16/10] bg-[#0f2a45] overflow-hidden">
                    <img
                      src={p.imageUrl}
                      alt={p.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      onError={(e) => {
                        if (p.clientType === 'Ecommerce') e.currentTarget.src = '/images/web_ecommerce_store.jpg';
                        else if (p.clientType === 'Business') e.currentTarget.src = '/images/web_business_booking.jpg';
                        else if (p.clientType === 'Author & Personal') e.currentTarget.src = '/images/web_author_speaker.jpg';
                        else if (p.clientType === 'Nonprofit') e.currentTarget.src = '/images/web_nonprofit_portal.jpg';
                        else if (p.clientType === 'Blog') e.currentTarget.src = '/images/web_editorial_blog.jpg';
                        else e.currentTarget.src = '/images/web_event_summit.jpg';
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-60" />

                    <div className="absolute top-3 left-3 flex items-center gap-1.5">
                      <span className="text-[10px] uppercase font-bold px-2 py-0.5 rounded bg-[#0166FE] text-white">
                        {p.cmsPlatform}
                      </span>
                      <span className="text-[10px] uppercase font-semibold px-2 py-0.5 rounded bg-black/75 text-neutral-200">
                        {p.clientType}
                      </span>
                    </div>

                    {/* Preview + Visit Live buttons */}
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3 p-4">
                      <button
                        onClick={() => setActiveModalProject({ type: 'web', data: p })}
                        className="px-4 py-2 rounded-lg bg-[#0166FE] text-white text-xs font-bold flex items-center gap-1.5 hover:bg-blue-600 transition-colors shadow-lg cursor-pointer"
                      >
                        <Eye className="w-3.5 h-3.5" />
                        <span>Preview</span>
                      </button>

                      {p.liveUrl && p.liveUrl !== '#' && (
                        <a
                          href={p.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-4 py-2 rounded-lg bg-white/20 hover:bg-white/30 text-white text-xs font-bold flex items-center gap-1.5 transition-colors shadow-lg"
                        >
                          <ExternalLink className="w-3.5 h-3.5" />
                          <span>Visit Live</span>
                        </a>
                      )}
                    </div>
                  </div>

                  <div className="p-6 space-y-2.5">
                    <span className="text-xs text-[#0166FE] font-bold uppercase tracking-wider block">
                      {p.cmsPlatform} · {p.clientType}
                    </span>

                    <h3 className="font-serif text-xl font-bold text-[#0f2a45]">
                      {p.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-neutral-600 font-light leading-relaxed">
                      {p.description}
                    </p>

                    <div className="p-2.5 rounded-lg bg-blue-50 border border-blue-200 text-xs text-blue-900 font-medium">
                      <strong>Result:</strong> {p.featuredOutcome}
                    </div>

                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {p.tags.map((t, i) => (
                        <span key={i} className="text-[10px] px-2 py-0.5 rounded bg-neutral-100 text-neutral-600">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="px-6 py-4 border-t border-neutral-100 flex items-center justify-between text-xs bg-[#fafbfc]">
                    <button
                      onClick={() => setActiveModalProject({ type: 'web', data: p })}
                      className="text-[#0166FE] font-bold hover:underline flex items-center gap-1 cursor-pointer"
                    >
                      <span>Case Details</span>
                      <ArrowRight className="w-3 h-3" />
                    </button>
                    <button
                      onClick={() => onInquire(p.title)}
                      className="text-neutral-500 hover:text-neutral-900 font-semibold cursor-pointer"
                    >
                      Inquire Similar
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Bottom CTA Card linking to WhatsApp (+2349014111435) */}
        <div className="mt-16 p-8 sm:p-10 rounded-2xl bg-[#0f2a45] text-white text-center max-w-4xl mx-auto space-y-4 shadow-xl">
          <span className="text-xs uppercase tracking-widest text-amber-300 font-bold block">
            Have a Specific Project?
          </span>
          <h3 className="font-serif text-2xl sm:text-3xl font-extrabold text-white">
            Discuss Your Manuscript, Website or Social Media Directly
          </h3>
          <p className="text-xs sm:text-sm text-neutral-200 font-light max-w-lg mx-auto leading-relaxed">
            Message me directly on WhatsApp to get immediate answers, confirm turnaround time, and discuss pricing.
          </p>
          <div className="pt-2">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-8 py-3.5 text-xs sm:text-sm font-bold uppercase tracking-wider text-white bg-[#25D366] hover:bg-[#20ba5a] rounded-lg shadow-lg transition-all hover:scale-105"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>Message on WhatsApp (+2349014111435)</span>
            </a>
          </div>
        </div>

      </div>

      <ProjectPreviewModal
        project={activeModalProject}
        onClose={() => setActiveModalProject(null)}
        onInquire={onInquire}
      />
    </section>
  );
};
