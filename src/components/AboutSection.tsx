import React from 'react';
import { BookOpen, Compass, CheckCircle2, Feather, HeartHandshake } from 'lucide-react';
import { SITE_CONFIG } from '../config/siteConfig';

interface AboutSectionProps {
  onStartJourney: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onStartJourney }) => {
  const { about } = SITE_CONFIG;

  return (
    <section id="about" className="py-24 bg-[#FAF9F5] text-[#1E232A] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-3 text-xs tracking-widest uppercase text-[#967417] font-semibold mb-3">
            <span className="w-6 h-[1.5px] bg-[#967417]" />
            <span>Our Literary Mission</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-[#0B101B] mb-6">
            {about.headline}
          </h2>
          <p className="text-lg text-neutral-700 leading-relaxed font-light">
            {about.mission}
          </p>
        </div>

        {/* Studio Story & Image Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-20">
          
          {/* Editorial Image of Studio */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-xl border border-neutral-200 group">
              <img
                src="/src/assets/images/about_literary_studio_1790937170143.jpg"
                alt="Dream Chaser Writes boutique publishing studio and book library"
                className="w-full aspect-[4/3] object-cover group-hover:scale-102 transition-transform duration-700 ease-out"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-70" />
              <div className="absolute bottom-5 left-5 right-5 text-white">
                <span className="text-xs uppercase tracking-wider text-[#E8C86A] block font-medium mb-1">
                  Literary Sanctuary
                </span>
                <p className="text-sm font-serif italic text-neutral-100">
                  Where creative sparks are cultivated into published works of art.
                </p>
              </div>
            </div>
          </div>

          {/* Vision & Brand Philosophy */}
          <div className="lg:col-span-6 space-y-6 text-left">
            <div className="border-l-2 border-[#D4AF37] pl-4 py-1">
              <span className="text-xs font-semibold tracking-wider uppercase text-neutral-500 block mb-1">Our Core Vision</span>
              <p className="text-base text-neutral-800 leading-relaxed font-light">
                {about.vision}
              </p>
            </div>

            <div className="space-y-4 text-sm text-neutral-600 leading-relaxed">
              <p>
                Writing a book can feel solitary, but you do not have to walk the journey alone. At <strong className="text-neutral-900 font-medium">DREAM CHASER WRITES</strong>, we serve as your dedicated literary companion—providing constructive feedback, artistic precision, and professional publishing guidance.
              </p>
              <p>
                Whether your dream is a page-turning fiction novel, a life-changing memoir, or an authoritative non-fiction guidebook, our studio treats your manuscript with the respect, patience, and professional rigor it demands.
              </p>
            </div>

            {/* Founder note (Authentic placeholder, clearly labeled without fake years of experience) */}
            <div className="p-5 rounded-xl bg-white border border-neutral-200/80 shadow-sm">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-full bg-[#0B101B] text-[#D4AF37] flex items-center justify-center font-serif text-sm font-medium">
                  DCW
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-[#0B101B]">{about.founder.name}</h4>
                  <span className="text-xs text-neutral-500">{about.founder.role}</span>
                </div>
              </div>
              <p className="text-xs text-neutral-600 italic leading-relaxed">
                “{about.founder.bioPlaceholder}”
              </p>
            </div>
          </div>

        </div>

        {/* 5 Core Values Cards */}
        <div>
          <div className="text-center max-w-xl mx-auto mb-12">
            <span className="text-xs uppercase tracking-widest font-semibold text-[#967417] block mb-2">
              Our Commitments
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-medium text-[#0B101B]">
              The Principles That Guide Every Book
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {about.coreValues.map((val, idx) => (
              <div
                key={idx}
                className="p-6 rounded-xl bg-white border border-neutral-200 hover:border-[#D4AF37]/60 shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div className="text-xs font-mono text-[#967417] font-semibold mb-2">
                  0{idx + 1}.
                </div>
                <h4 className="font-serif text-lg font-medium text-[#0B101B] mb-2">
                  {val.title}
                </h4>
                <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed font-light">
                  {val.description}
                </p>
              </div>
            ))}

            {/* Final CTA Card */}
            <div className="p-6 rounded-xl bg-[#0B101B] text-white border border-[#D4AF37]/30 shadow-md flex flex-col justify-between">
              <div>
                <span className="text-xs uppercase tracking-wider text-[#D4AF37] block font-medium mb-2">
                  Take The First Step
                </span>
                <h4 className="font-serif text-lg font-medium text-white mb-2">
                  Ready to Discuss Your Manuscript?
                </h4>
                <p className="text-xs text-neutral-300 font-light leading-relaxed">
                  Let us review where your project currently stands and suggest the most impactful next milestone.
                </p>
              </div>
              <button
                onClick={onStartJourney}
                className="mt-4 inline-flex items-center justify-center px-4 py-2.5 text-xs font-semibold uppercase tracking-wider text-[#0B101B] bg-[#D4AF37] hover:bg-[#E5C769] rounded-lg transition-colors cursor-pointer"
              >
                Schedule A Discussion
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
