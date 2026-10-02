import React from 'react';
import { Quote, MessageSquareHeart } from 'lucide-react';
import { SITE_CONFIG } from '../config/siteConfig';

export const TestimonialsSection: React.FC = () => {
  const { testimonials } = SITE_CONFIG;

  // If the owner hasn't published authentic testimonials yet, hide from public view as instructed in Section 9
  if (!testimonials.showSectionOnSite) {
    return null;
  }

  const publishedReviews = testimonials.items.filter((item) => item.published);

  if (publishedReviews.length === 0) {
    return null;
  }

  return (
    <section className="py-20 bg-[#FAF9F5] text-[#1E232A] border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs uppercase tracking-widest text-[#967417] font-semibold block mb-2">
            Author Reflections
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-medium text-[#0B101B]">
            Client Experiences & Literary Partnerships
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {publishedReviews.map((item) => (
            <div
              key={item.id}
              className="p-8 rounded-2xl bg-white border border-neutral-200/80 shadow-sm flex flex-col justify-between"
            >
              <Quote className="w-8 h-8 text-[#D4AF37] mb-4 opacity-75" />
              <p className="text-sm text-neutral-700 italic leading-relaxed mb-6 font-light">
                “{item.quote}”
              </p>
              <div className="pt-4 border-t border-neutral-100">
                <h4 className="font-serif text-base font-semibold text-[#0B101B]">{item.clientName}</h4>
                <p className="text-xs text-neutral-500">{item.roleOrBookTitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
