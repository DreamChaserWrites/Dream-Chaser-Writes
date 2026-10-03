import React, { useState } from 'react';
import { ChevronDown, MessageCircle } from 'lucide-react';
import { SITE_CONFIG } from '../config/siteConfig';

export const FAQSection: React.FC = () => {
  const [openId, setOpenId] = useState<string>('faq-1');
  const faqs = SITE_CONFIG.faqs;

  const toggleFaq = (id: string) => {
    setOpenId((prev) => (prev === id ? '' : id));
  };

  const whatsappUrl = `https://wa.me/+2349014111435?text=${encodeURIComponent("Hi! I have a question about your beta reading and website services.")}`;

  return (
    <section id="faq" className="py-24 bg-white text-[#111827] border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Layout matching reference site .faq-layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start text-left">
          
          {/* Left Column (.rv-l) */}
          <div className="lg:col-span-5 space-y-4">
            <span className="text-xs uppercase tracking-widest text-[#0166FE] font-bold block mb-1">
              FAQ
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#0f2a45] leading-tight">
              Frequently Asked <br />
              <span className="text-[#0166FE]">Questions</span>
            </h2>
            <div className="w-12 h-1 bg-[#0166FE] rounded mb-3" />
            <p className="text-sm text-neutral-600 font-light leading-relaxed mb-6">
              Have a question about beta reading reports, website design platforms, or social media management? Feel free to reach out directly — I'm always happy to help.
            </p>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-lg bg-[#25D366] hover:bg-[#20ba5a] text-white text-xs sm:text-sm font-bold uppercase tracking-wider transition-colors shadow-md"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>Ask Me on WhatsApp (+2349014111435)</span>
            </a>
          </div>

          {/* Right Column (.faq-list .rv-r) */}
          <div className="lg:col-span-7 space-y-3">
            {faqs.map((f, idx) => {
              const isOpen = openId === f.id;
              return (
                <div
                  key={f.id}
                  className={`rounded-xl border transition-all duration-200 overflow-hidden ${
                    isOpen
                      ? 'bg-[#f8f9fa] border-[#0166FE]/50 shadow-sm'
                      : 'bg-white border-neutral-200 hover:border-neutral-300'
                  }`}
                >
                  <button
                    onClick={() => toggleFaq(f.id)}
                    className="w-full flex items-center justify-between p-5 text-left cursor-pointer focus:outline-none"
                  >
                    <span className="flex items-center gap-3 text-sm sm:text-base font-bold text-[#0f2a45] pr-4">
                      <span className="font-mono text-xs text-[#0166FE] font-bold shrink-0">
                        0{idx + 1} &nbsp;
                      </span>
                      <span>{f.question}</span>
                    </span>
                    <span className="font-mono text-base font-bold text-[#0166FE] shrink-0">
                      {isOpen ? '−' : '+'}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-neutral-600 font-normal leading-relaxed border-t border-neutral-200/60">
                      {f.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};
