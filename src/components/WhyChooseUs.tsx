import React from 'react';
import { Users, Search, Target, MessageCircle, ShieldCheck, Check } from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const points = [
    {
      icon: <Users className="w-6 h-6 text-[#D4AF37]" />,
      title: "Creative Collaboration",
      description: "We work as your dedicated creative partners, honoring your authentic voice while elevating story structure, rhythm, and clarity."
    },
    {
      icon: <Search className="w-6 h-6 text-[#D4AF37]" />,
      title: "Attention to Detail",
      description: "Every sentence cadence, line break, interior margin, and cover typography placement is treated with meticulous editorial precision."
    },
    {
      icon: <Target className="w-6 h-6 text-[#D4AF37]" />,
      title: "Personalized Approach",
      description: "We adapt to where you currently stand in your book journey, crafting customized milestone roadmaps instead of rigid formulas."
    },
    {
      icon: <MessageCircle className="w-6 h-6 text-[#D4AF37]" />,
      title: "Clear Communication",
      description: "Expect honest, transparent feedback, realistic timelines, and consistent milestone updates throughout every phase of work."
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-[#D4AF37]" />,
      title: "Agreed Scope Commitment",
      description: "Dedicated focus and direct author assistance across every deliverable outlined in your project agreement."
    }
  ];

  return (
    <section className="py-20 bg-[#0E1524] text-[#FAF9F5] border-t border-b border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-16 text-left">
          <div className="flex items-center gap-3 text-xs tracking-widest uppercase text-[#D4AF37] font-semibold mb-3">
            <span className="w-6 h-[1px] bg-[#D4AF37]" />
            <span>The Dream Chaser Difference</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-white mb-4">
            Why Partner With Dream Chaser Writes?
          </h2>
          <p className="text-base sm:text-lg text-neutral-300 font-light leading-relaxed">
            Writing a book is a significant creative journey. Here is the foundation of trust and professional care you can expect when collaborating with our studio.
          </p>
        </div>

        {/* 5 Column / Asymmetric Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {points.map((pt, idx) => (
            <div
              key={idx}
              className="p-7 rounded-2xl bg-[#131B2D] border border-white/10 hover:border-[#D4AF37]/50 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#0B101B] border border-[#D4AF37]/30 flex items-center justify-center mb-5">
                  {pt.icon}
                </div>
                <h3 className="font-serif text-xl font-medium text-white mb-2.5">
                  {pt.title}
                </h3>
                <p className="text-xs sm:text-sm text-neutral-300 font-light leading-relaxed">
                  {pt.description}
                </p>
              </div>
            </div>
          ))}

          {/* Guarantee / Standards Card */}
          <div className="p-7 rounded-2xl bg-gradient-to-br from-[#1A253B] to-[#0E1524] border border-[#D4AF37]/40 flex flex-col justify-between">
            <div>
              <div className="text-xs uppercase tracking-widest text-[#D4AF37] font-semibold mb-2 flex items-center gap-1.5">
                <Check className="w-4 h-4" />
                <span>Our Quality Standard</span>
              </div>
              <h3 className="font-serif text-xl font-medium text-white mb-2.5">
                Publication-Ready Integrity
              </h3>
              <p className="text-xs sm:text-sm text-neutral-300 font-light leading-relaxed">
                We never rush manuscripts or output generic layouts. Every project receives dedicated literary attention to ensure you are proud to see your name on the cover.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-white/10 text-[11px] text-neutral-400">
              Personalized Consultations & Scope Clarity
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
