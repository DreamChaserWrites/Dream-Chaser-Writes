import React from 'react';
import { ArrowRight, CheckCircle2, FileText, Settings, MessageSquare, BookOpen } from 'lucide-react';
import { SITE_CONFIG } from '../config/siteConfig';

interface ProcessSectionProps {
  onStartProcess: () => void;
}

export const ProcessSection: React.FC<ProcessSectionProps> = ({ onStartProcess }) => {
  const steps = SITE_CONFIG.processSteps;

  const stepIcons = [
    <FileText key="1" className="w-5 h-5 text-[#D4AF37]" />,
    <Settings key="2" className="w-5 h-5 text-[#D4AF37]" />,
    <MessageSquare key="3" className="w-5 h-5 text-[#D4AF37]" />,
    <BookOpen key="4" className="w-5 h-5 text-[#D4AF37]" />
  ];

  return (
    <section id="process" className="py-24 bg-[#0B101B] text-[#FAF9F5] relative overflow-hidden border-t border-b border-white/5">
      {/* Ambient background glow */}
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 text-xs tracking-widest uppercase text-[#D4AF37] font-semibold mb-3">
            <span>The Author Pathway</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-white mb-4">
            How We Bring Your Book to Life
          </h2>
          <p className="text-base sm:text-lg text-neutral-300 font-light leading-relaxed">
            A transparent, collaborative four-step journey designed to provide clear milestones, thoughtful feedback, and publication-ready results.
          </p>
        </div>

        {/* Timeline Desktop (Horizontal) & Mobile (Vertical) */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
          
          {/* Connecting Line across desktop steps */}
          <div className="hidden md:block absolute top-12 left-12 right-12 h-[1px] bg-gradient-to-r from-[#D4AF37]/40 via-[#D4AF37]/20 to-[#D4AF37]/40 -z-0" />

          {steps.map((item, idx) => (
            <div
              key={item.step}
              className="relative z-10 flex flex-col items-start md:items-center text-left md:text-center p-6 rounded-2xl bg-[#131B2D]/80 border border-white/10 hover:border-[#D4AF37]/40 transition-all duration-300 group"
            >
              {/* Step Number & Icon Badge */}
              <div className="w-14 h-14 rounded-2xl bg-[#0B101B] border border-[#D4AF37]/40 flex items-center justify-center mb-5 shadow-lg group-hover:scale-105 group-hover:border-[#D4AF37] transition-all duration-300">
                {stepIcons[idx]}
              </div>

              {/* Step indicator */}
              <span className="text-xs font-mono font-semibold text-[#D4AF37] uppercase tracking-wider mb-2">
                Step {item.step}
              </span>

              {/* Step Title */}
              <h3 className="font-serif text-xl font-medium text-white mb-3">
                {item.title}
              </h3>

              {/* Summary */}
              <p className="text-xs sm:text-sm text-neutral-300 font-light leading-relaxed mb-4">
                {item.summary}
              </p>

              {/* Realistic Expectation Note */}
              <div className="mt-auto pt-3 border-t border-white/10 w-full text-left">
                <span className="text-[11px] text-neutral-400 block font-light leading-snug">
                  {item.details}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Callout */}
        <div className="mt-14 text-center">
          <p className="text-xs sm:text-sm text-neutral-400 mb-5">
            Ready to take Step 01? Share your ideas and let us review your goals together.
          </p>
          <button
            onClick={onStartProcess}
            className="inline-flex items-center gap-2 px-7 py-3 text-xs font-semibold tracking-wider uppercase text-[#0B101B] bg-gradient-to-r from-[#D4AF37] via-[#E4C569] to-[#D4AF37] hover:brightness-110 rounded-lg shadow-md transition-all cursor-pointer"
          >
            <span>Begin Step 1: Share Your Vision</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </section>
  );
};
