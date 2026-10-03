import React from 'react';
import { ExternalLink, ArrowRight, MessageCircle } from 'lucide-react';
import { SITE_CONFIG } from '../config/siteConfig';

export const SocialSection: React.FC = () => {
  const whatsappUrl = `https://wa.me/+2349014111435?text=${encodeURIComponent(SITE_CONFIG.whatsappDefaultMessage)}`;

  const socialChannels = [
    {
      name: 'Facebook',
      handle: '@Dreamchaserwrites',
      url: SITE_CONFIG.socialLinks.facebook,
      description: 'Author community announcements, manuscript tips, and behind-the-scenes literary thoughts.',
      previewImage: '/images/social_creative_studio.jpg',
      accentColor: 'hover:border-blue-400 hover:bg-[#1e4f7e]/30'
    },
    {
      name: 'Instagram',
      handle: '@dream_chase_write',
      url: SITE_CONFIG.socialLinks.instagram,
      description: 'Book aesthetics, typesetting previews, writing desk inspiration, and creative author prompts.',
      previewImage: '/images/social_skincare_feed.jpg',
      accentColor: 'hover:border-pink-400 hover:bg-pink-950/30'
    },
    {
      name: 'TikTok',
      handle: '@dreamchaserwrites',
      url: SITE_CONFIG.socialLinks.tiktok,
      description: 'Quick writing guidance, publishing truths, editing break-downs, and writer motivation.',
      previewImage: '/images/social_author_booktok.jpg',
      accentColor: 'hover:border-cyan-400 hover:bg-cyan-950/30'
    }
  ];

  return (
    <section className="py-20 bg-[#0a1c2e] text-[#FAF9F5] border-t border-white/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header matching reference site */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs uppercase tracking-widest text-[#6BA5FF] font-bold block mb-2">
            Social Profiles & Direct Chat
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-3">
            Connect Across Channels
          </h2>
          <p className="text-sm text-neutral-300 font-light leading-relaxed">
            Follow the official DREAM CHASER WRITES profiles or chat directly with me on WhatsApp.
          </p>
        </div>

        {/* 3 Social Cards Grid with distinct image previews */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          {socialChannels.map((channel) => (
            <a
              key={channel.name}
              href={channel.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`p-6 rounded-2xl bg-[#173E63]/80 border border-white/10 transition-all duration-300 flex flex-col justify-between group cursor-pointer ${channel.accentColor}`}
              aria-label={`Visit Dream Chaser Writes on ${channel.name}`}
            >
              <div>
                {/* Visual Thumbnail */}
                <div className="rounded-xl overflow-hidden aspect-[16/10] mb-4 bg-black/40 border border-white/10">
                  <img
                    src={channel.previewImage}
                    alt={`${channel.name} preview`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs uppercase tracking-widest text-sky-300 font-bold">
                    {channel.name}
                  </span>
                  <ExternalLink className="w-4 h-4 text-neutral-400 group-hover:text-white transition-colors" />
                </div>
                <h3 className="font-serif text-xl font-bold text-white mb-2">
                  {channel.handle}
                </h3>
                <p className="text-xs text-neutral-300 font-light leading-relaxed">
                  {channel.description}
                </p>
              </div>

              <div className="pt-5 mt-5 border-t border-white/10 flex items-center gap-1.5 text-xs font-semibold text-sky-300 group-hover:text-white transition-colors">
                <span>Visit Profile</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </a>
          ))}
        </div>

        {/* WhatsApp Banner */}
        <div className="mt-10 p-6 rounded-2xl bg-[#25D366]/15 border border-[#25D366]/40 flex flex-col sm:flex-row items-center justify-between gap-4 text-left">
          <div className="flex items-center gap-3.5">
            <div className="w-12 h-12 rounded-xl bg-[#25D366] text-white flex items-center justify-center shrink-0 shadow-md">
              <MessageCircle className="w-6 h-6 fill-white" />
            </div>
            <div>
              <p className="font-serif text-lg font-bold text-white">Prefer instant messaging?</p>
              <p className="text-xs text-neutral-200">Chat with me directly on WhatsApp at +2349014111435.</p>
            </div>
          </div>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-lg bg-[#25D366] hover:bg-[#20ba5a] text-white text-xs font-bold uppercase tracking-wider transition-colors whitespace-nowrap shadow-md"
          >
            Open WhatsApp (+2349014111435)
          </a>
        </div>

      </div>
    </section>
  );
};
