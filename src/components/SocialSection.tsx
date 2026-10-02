import React from 'react';
import { ExternalLink, ArrowRight } from 'lucide-react';
import { SITE_CONFIG } from '../config/siteConfig';

export const SocialSection: React.FC = () => {
  const socialChannels = [
    {
      name: 'Facebook',
      handle: '@Dreamchaserwrites',
      url: SITE_CONFIG.socialLinks.facebook,
      description: 'Author community announcements, manuscript tips, and behind-the-scenes literary thoughts.',
      accentColor: 'hover:border-blue-500/50 hover:bg-blue-950/20'
    },
    {
      name: 'Instagram',
      handle: '@dream_chase_write',
      url: SITE_CONFIG.socialLinks.instagram,
      description: 'Book aesthetics, typesetting previews, writing desk inspiration, and creative author prompts.',
      accentColor: 'hover:border-pink-500/50 hover:bg-pink-950/20'
    },
    {
      name: 'TikTok',
      handle: '@dreamchaserwrites',
      url: SITE_CONFIG.socialLinks.tiktok,
      description: 'Quick writing guidance, publishing truths, editing break-downs, and writer motivation.',
      accentColor: 'hover:border-cyan-500/50 hover:bg-cyan-950/20'
    }
  ];

  return (
    <section className="py-20 bg-[#0B101B] text-[#FAF9F5] border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 text-xs tracking-widest uppercase text-[#D4AF37] font-semibold mb-3">
            <span>Connect & Grow</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-medium tracking-tight text-white mb-3">
            Follow Our Journey
          </h2>
          <p className="text-sm sm:text-base text-neutral-300 font-light leading-relaxed">
            Join the official DREAM CHASER WRITES community across our social channels for daily writing inspiration, craft breakdowns, and publishing insights.
          </p>
        </div>

        {/* 3 Social Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {socialChannels.map((channel) => (
            <a
              key={channel.name}
              href={channel.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`p-7 rounded-2xl bg-[#131B2D] border border-white/10 transition-all duration-300 flex flex-col justify-between group cursor-pointer ${channel.accentColor}`}
              aria-label={`Visit Dream Chaser Writes on ${channel.name}`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs uppercase tracking-widest text-[#D4AF37] font-semibold">
                    {channel.name}
                  </span>
                  <ExternalLink className="w-4 h-4 text-neutral-400 group-hover:text-white transition-colors" />
                </div>
                <h3 className="font-serif text-xl font-medium text-white mb-1 group-hover:text-[#D4AF37] transition-colors">
                  {channel.handle}
                </h3>
                <p className="text-xs sm:text-sm text-neutral-300 font-light leading-relaxed mt-3">
                  {channel.description}
                </p>
              </div>

              <div className="pt-5 mt-6 border-t border-white/10 flex items-center justify-between text-xs text-neutral-400 group-hover:text-white">
                <span>Join on {channel.name}</span>
                <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
};
