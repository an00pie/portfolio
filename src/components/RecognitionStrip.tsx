import React from 'react';
import { Trophy, Star } from 'lucide-react';
import { content } from '../data/content';

export const RecognitionStrip: React.FC = () => {
  // Duplicate array for seamless infinite marquee loop
  const marqueeItems = [...content.recognition, ...content.recognition];

  return (
    <section className="py-12 border-y border-light-border dark:border-dark-border bg-black/[0.02] dark:bg-white/[0.02] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-4">
        <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-[0.2em] text-neutral-500">
          <Star className="w-3.5 h-3.5 text-accent" />
          <span>HONORS, ROLES &amp; RECOGNITION</span>
        </div>
      </div>

      <div className="relative w-full overflow-hidden marquee-container">
        {/* Left and right gradient fade masks */}
        <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-r from-light-base dark:from-dark-base to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-l from-light-base dark:from-dark-base to-transparent z-10 pointer-events-none" />

        <div className="flex w-max animate-marquee marquee-content items-center gap-8 sm:gap-12 py-3 select-none">
          {marqueeItems.map((item, idx) => (
            <div
              key={idx}
              className="flex items-center gap-3 text-neutral-700 dark:text-neutral-300 font-semibold text-sm sm:text-base tracking-tight whitespace-nowrap hover:text-accent transition-colors cursor-default"
            >
              <Trophy className="w-4 h-4 text-accent/80 flex-shrink-0" />
              <span>{item}</span>
              <span className="w-1.5 h-1.5 rounded-full bg-accent/40 mx-2" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
