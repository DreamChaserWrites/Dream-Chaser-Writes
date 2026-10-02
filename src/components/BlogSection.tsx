import React, { useState } from 'react';
import { ArrowRight, BookOpen, Clock, Calendar, BookmarkCheck } from 'lucide-react';
import { SITE_CONFIG, ArticleItem } from '../config/siteConfig';
import { ArticleModal } from './ArticleModal';

interface BlogSectionProps {
  onInquire: (serviceTitle?: string) => void;
}

export const BlogSection: React.FC<BlogSectionProps> = ({ onInquire }) => {
  const [selectedArticle, setSelectedArticle] = useState<ArticleItem | null>(null);
  const [categoryFilter, setCategoryFilter] = useState<string>('all');

  const categories = [
    'all',
    'Editing and Manuscript Preparation',
    'Self-Publishing Resources',
    'Author Branding'
  ];

  const filteredArticles = SITE_CONFIG.articles.filter((art) => {
    if (categoryFilter === 'all') return true;
    return art.category === categoryFilter;
  });

  return (
    <section id="blog" className="py-24 bg-[#0B101B] text-[#FAF9F5] border-t border-b border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl text-left">
            <div className="flex items-center gap-3 text-xs tracking-widest uppercase text-[#D4AF37] font-semibold mb-3">
              <span className="w-6 h-[1px] bg-[#D4AF37]" />
              <span>The Writer's Corner</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-white mb-3">
              Insights, Craft & Publishing Wisdom
            </h2>
            <p className="text-base text-neutral-300 font-light leading-relaxed">
              Thoughtful articles, manuscript preparation guides, and publishing advice to support your author journey.
            </p>
          </div>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-white/5 border border-white/10 rounded-xl self-start md:self-auto">
            <button
              onClick={() => setCategoryFilter('all')}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-all cursor-pointer ${
                categoryFilter === 'all'
                  ? 'bg-[#D4AF37] text-[#0B101B] font-semibold shadow-sm'
                  : 'text-neutral-300 hover:text-white'
              }`}
            >
              All Articles
            </button>
            <button
              onClick={() => setCategoryFilter('Editing and Manuscript Preparation')}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-all cursor-pointer ${
                categoryFilter === 'Editing and Manuscript Preparation'
                  ? 'bg-[#D4AF37] text-[#0B101B] font-semibold shadow-sm'
                  : 'text-neutral-300 hover:text-white'
              }`}
            >
              Editing & Prep
            </button>
            <button
              onClick={() => setCategoryFilter('Self-Publishing Resources')}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-all cursor-pointer ${
                categoryFilter === 'Self-Publishing Resources'
                  ? 'bg-[#D4AF37] text-[#0B101B] font-semibold shadow-sm'
                  : 'text-neutral-300 hover:text-white'
              }`}
            >
              Self-Publishing
            </button>
          </div>
        </div>

        {/* Article Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredArticles.map((article) => (
            <article
              key={article.id}
              onClick={() => setSelectedArticle(article)}
              className="group cursor-pointer p-7 rounded-2xl bg-[#131B2D] border border-white/10 hover:border-[#D4AF37]/50 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Quiet unboxed metadata with separators */}
                <div className="flex items-center gap-2 text-xs text-[#D4AF37] font-medium mb-3">
                  <span>{article.category}</span>
                  <span aria-hidden="true">·</span>
                  <span>{article.readTime}</span>
                </div>

                {/* Title */}
                <h3 className="font-serif text-xl font-medium text-white mb-3 group-hover:text-[#D4AF37] transition-colors leading-snug">
                  {article.title}
                </h3>

                {/* Excerpt */}
                <p className="text-xs sm:text-sm text-neutral-300 font-light leading-relaxed mb-6">
                  {article.excerpt}
                </p>
              </div>

              {/* Bottom footer */}
              <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs">
                <span className="text-neutral-400">{article.publishedDate}</span>
                <span className="inline-flex items-center gap-1 text-[#D4AF37] font-medium group-hover:translate-x-1 transition-transform">
                  <span>Read Article</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </article>
          ))}
        </div>

        {/* SEO Topical Keywords Quiet Bar (Natural, human, not stuffed) */}
        <div className="mt-14 pt-8 border-t border-white/10 text-center">
          <p className="text-xs text-neutral-400 font-light max-w-3xl mx-auto leading-relaxed">
            Topics explored in The Writer's Corner include manuscript evaluations, developmental editing, book formatting and interior layout, ebook formatting, back cover copy, author branding, and independent self-publishing best practices.
          </p>
        </div>

      </div>

      {/* Reader Modal */}
      <ArticleModal
        article={selectedArticle}
        onClose={() => setSelectedArticle(null)}
        onInquire={onInquire}
      />
    </section>
  );
};
