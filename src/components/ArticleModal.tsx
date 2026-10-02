import React from 'react';
import { X, Calendar, Clock, User, ArrowRight, Share2, Bookmark } from 'lucide-react';
import { ArticleItem } from '../config/siteConfig';

interface ArticleModalProps {
  article: ArticleItem | null;
  onClose: () => void;
  onInquire: (serviceTitle?: string) => void;
}

export const ArticleModal: React.FC<ArticleModalProps> = ({
  article,
  onClose,
  onInquire
}) => {
  if (!article) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-fadeIn">
      <div
        className="relative bg-[#0E1524] text-[#FAF9F5] border border-[#D4AF37]/30 rounded-2xl max-w-3xl w-full p-6 sm:p-10 shadow-2xl max-h-[90vh] overflow-y-auto"
        role="dialog"
        aria-modal="true"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 text-neutral-400 hover:text-white rounded-lg hover:bg-white/10 transition-colors focus:outline-none"
          aria-label="Close article"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Category & Read Time (Clean unboxed metadata with separators) */}
        <div className="flex items-center gap-2 text-xs text-[#D4AF37] font-medium tracking-wide mb-3">
          <span>{article.category}</span>
          <span aria-hidden="true">·</span>
          <span>{article.publishedDate}</span>
          <span aria-hidden="true">·</span>
          <span>{article.readTime}</span>
        </div>

        {/* Title */}
        <h1 className="font-serif text-2xl sm:text-4xl font-medium text-white mb-6 leading-snug">
          {article.title}
        </h1>

        {/* Author / Byline */}
        <div className="flex items-center gap-3 pb-6 border-b border-white/10 text-xs text-neutral-400 mb-8">
          <div className="w-8 h-8 rounded-full bg-[#D4AF37]/20 border border-[#D4AF37]/40 flex items-center justify-center text-[#D4AF37] font-serif font-bold">
            DC
          </div>
          <div>
            <span className="font-medium text-neutral-200 block">{article.author}</span>
            <span>Literary Insights & Craft Advisory</span>
          </div>
        </div>

        {/* Article Body */}
        <div className="space-y-5 text-sm sm:text-base text-neutral-300 font-light leading-relaxed">
          {article.content.map((paragraph, idx) => (
            <p key={idx} className="leading-relaxed">
              {paragraph}
            </p>
          ))}
        </div>

        {/* Author Support Box at bottom of article */}
        <div className="mt-10 p-6 rounded-xl bg-white/5 border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#D4AF37] block mb-1">
              Need Professional Guidance for Your Book?
            </span>
            <p className="text-xs text-neutral-300 font-light">
              Explore our manuscript reviews, developmental editing, and publishing consultation services.
            </p>
          </div>
          <button
            onClick={() => {
              onClose();
              onInquire(article.category);
            }}
            className="shrink-0 px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-[#0B101B] bg-[#D4AF37] hover:bg-[#E5C769] rounded-lg transition-colors cursor-pointer"
          >
            Inquire About Services
          </button>
        </div>

        {/* Footer actions */}
        <div className="mt-8 pt-4 border-t border-white/10 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 text-xs font-medium text-neutral-400 hover:text-white transition-colors"
          >
            Back to The Writer's Corner
          </button>
        </div>
      </div>
    </div>
  );
};
