import React from 'react';
import { SITE_CONFIG } from '../config/siteConfig';

export const CapabilitiesTicker: React.FC = () => {
  const items = SITE_CONFIG.tickerItems;

  return (
    <div className="w-full bg-[#08121E] border-y border-blue-500/20 py-3.5 overflow-hidden select-none">
      <div className="flex w-max animate-ticker">
        {/* First set */}
        <div className="flex items-center gap-8 px-4 text-xs font-medium uppercase tracking-wider text-neutral-300">
          {items.map((item, idx) => (
            <div key={`ticker-1-${idx}`} className="flex items-center gap-8 whitespace-nowrap">
              <span className="hover:text-amber-300 transition-colors">{item}</span>
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500/60" aria-hidden="true" />
            </div>
          ))}
        </div>
        {/* Duplicate set for infinite seamless loop */}
        <div className="flex items-center gap-8 px-4 text-xs font-medium uppercase tracking-wider text-neutral-300" aria-hidden="true">
          {items.map((item, idx) => (
            <div key={`ticker-2-${idx}`} className="flex items-center gap-8 whitespace-nowrap">
              <span className="hover:text-amber-300 transition-colors">{item}</span>
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500/60" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
