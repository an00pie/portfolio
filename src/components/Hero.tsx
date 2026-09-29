import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { content } from '../data/content';

export const Hero: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);

  const scrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    const elem = document.getElementById('contact');
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Preview cards that fan out from behind the portrait on hover (matching copy.mp4)
  const floatingCards = [
    {
      id: 'card-1',
      title: 'THUZHAYAN',
      tag: '/26',
      image: '/images/card-delane.jpg',
      initial: { x: 0, y: 0, rotate: 0, opacity: 0, scale: 0.9 },
      hover: { x: 150, y: -65, rotate: 7, opacity: 1, scale: 1 },
      width: 'w-48 sm:w-56',
      zIndex: 10,
    },
    {
      id: 'card-2',
      title: 'BUS SAHAYI',
      tag: 'KSRTC',
      image: '/images/card-wedding.webp',
      initial: { x: 0, y: 0, rotate: 0, opacity: 0, scale: 0.9 },
      hover: { x: -155, y: -30, rotate: -9, opacity: 1, scale: 1 },
      width: 'w-44 sm:w-52',
      zIndex: 9,
    },
    {
      id: 'card-3',
      title: 'PHARMASYSTEM',
      tag: 'Healthcare',
      image: '/images/card-arch.jpg',
      initial: { x: 0, y: 0, rotate: 0, opacity: 0, scale: 0.9 },
      hover: { x: 165, y: 45, rotate: 13, opacity: 1, scale: 0.95 },
      width: 'w-44 sm:w-52',
      zIndex: 8,
    },
    {
      id: 'card-4',
      title: 'ZEPHYRUS 8.0',
      tag: 'Innovation',
      image: '/images/card-noiri.jpg',
      initial: { x: 0, y: 0, rotate: 0, opacity: 0, scale: 0.9 },
      hover: { x: -70, y: -95, rotate: -4, opacity: 0.9, scale: 0.9 },
      width: 'w-40 sm:w-48',
      zIndex: 7,
    },
  ];

  return (
    <section
      id="home"
      className="relative flex flex-col items-center justify-center pt-20 sm:pt-24 pb-12 px-4 sm:px-6 max-w-4xl mx-auto overflow-visible select-none"
    >
      {/* Center Hero Portrait with Fan-Out Cards Container */}
      <div
        className="relative flex items-center justify-center my-4 group"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={() => setIsHovered((prev) => !prev)}
      >
        {/* Fan-Out Floating Cards Behind the Portrait */}
        {floatingCards.map((card) => (
          <motion.div
            key={card.id}
            initial={card.initial}
            animate={isHovered ? card.hover : card.initial}
            transition={{
              type: 'spring',
              stiffness: 260,
              damping: 24,
              mass: 0.8,
            }}
            className={`absolute pointer-events-none rounded-xl overflow-hidden shadow-2xl border border-black/10 bg-neutral-900 ${card.width}`}
            style={{ zIndex: card.zIndex }}
          >
            <div className="relative aspect-[16/11] overflow-hidden">
              <img
                src={card.image}
                alt={card.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-2 left-3 right-3 flex items-center justify-between text-white text-[10px] sm:text-xs font-semibold">
                <span>{card.title}</span>
                <span className="opacity-70 font-mono">{card.tag}</span>
              </div>
            </div>
          </motion.div>
        ))}

        {/* Foreground Main Portrait Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="relative z-20 w-[220px] sm:w-[250px] md:w-[270px] aspect-[3.2/4] rounded-2xl overflow-hidden shadow-2xl bg-neutral-950 cursor-pointer border border-black/5"
        >
          <img
            src={content.hero.portrait}
            alt={content.hero.name}
            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-102"
            loading="eager"
          />
        </motion.div>
      </div>

      {/* Intro Pitch Statement */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        className="text-center max-w-lg mx-auto mt-6 px-4"
      >
        <h1 className="text-base sm:text-lg md:text-xl font-bold tracking-tight text-black leading-snug">
          {content.hero.intro}
        </h1>

        {/* Minimal Black Pill Button "Let's Talk" */}
        <div className="mt-5 flex justify-center">
          <a
            href="#contact"
            onClick={scrollToContact}
            className="inline-block bg-black text-white text-xs sm:text-sm font-medium px-5 py-2 rounded-md hover:bg-neutral-800 transition-colors shadow-sm"
          >
            {content.hero.cta}
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
