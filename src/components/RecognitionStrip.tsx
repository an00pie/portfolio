import React from 'react';
import { content } from '../data/content';

export const RecognitionStrip: React.FC = () => {
  // Client & Recognition Logos (downloaded from reference assets)
  const logos = [
    { src: '/images/logos/logo_1.png', alt: 'TinkerHub & Google for Developers' },
    { src: '/images/logos/logo_2.png', alt: 'Christ College of Engineering' },
    { src: '/images/logos/logo_3.png', alt: 'Google Student Ambassadors' },
    { src: '/images/logos/logo_4.png', alt: 'DELTA CCE' },
    { src: '/images/logos/logo_5.png', alt: 'DevOps Forum CCE' },
    { src: '/images/logos/logo_6.png', alt: 'Anavandi Hackathon JAIN' },
    { src: '/images/logos/logo_7.png', alt: 'Beachhack Season 7' },
    { src: '/images/logos/logo_8.png', alt: 'Zephyrus 8.0' },
    { src: '/images/logos/logo_9.png', alt: 'Partner' },
    { src: '/images/logos/logo_10.png', alt: 'Studio' },
  ];

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-2xl mx-auto">
      {/* Section Label matching copy.mp4 Frame 08 */}
      <div className="mb-4">
        <h2 className="text-xs sm:text-sm font-semibold text-neutral-400">
          Clients
        </h2>
      </div>

      {/* Row of Square Black Logo Cards matching copy.mp4 */}
      <div className="relative overflow-hidden w-full">
        <div className="flex items-center gap-2.5 overflow-x-auto pb-2 scrollbar-none no-scrollbar">
          {logos.map((logo, idx) => (
            <div
              key={idx}
              className="w-10 sm:w-11 h-10 sm:h-11 bg-black rounded-lg flex items-center justify-center p-2.5 flex-shrink-0 hover:bg-neutral-800 transition-colors shadow-sm"
              title={logo.alt}
            >
              <img
                src={logo.src}
                alt={logo.alt}
                className="w-full h-full object-contain filter invert opacity-90 hover:opacity-100 transition-opacity"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecognitionStrip;
