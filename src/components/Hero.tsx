import React, { useState, useRef, useCallback } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { content } from '../data/content';

export const Hero: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [cursorOffset, setCursorOffset] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  const scrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    const elem = document.getElementById('contact');
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Cursor tracking for magnetic floating parallax
  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    // Normalized offset relative to container center
    const offsetX = (e.clientX - centerX) / 8;
    const offsetY = (e.clientY - centerY) / 8;
    setCursorOffset({ x: offsetX, y: offsetY });
  }, []);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setCursorOffset({ x: 0, y: 0 });
  };

  // Interactive project preview cards fanning out around the name on cursor hover
  const floatingCards = [
    {
      id: 'card-1',
      title: 'THUZHAYAN',
      tag: 'Edge AI / Vision',
      slug: 'thuzhayan',
      image: '/images/card-delane.jpg',
      base: { x: 220, y: -70, rotate: 7, scale: 1 },
      width: 'w-48 sm:w-60',
      zIndex: 15,
      factor: 1.3,
    },
    {
      id: 'card-2',
      title: 'BUS SAHAYI',
      tag: 'KSRTC Transit',
      slug: 'bus-sahayi',
      image: '/images/card-wedding.webp',
      base: { x: -230, y: -50, rotate: -8, scale: 0.98 },
      width: 'w-44 sm:w-56',
      zIndex: 14,
      factor: 1.1,
    },
    {
      id: 'card-3',
      title: 'PHARMASYSTEM',
      tag: 'Healthcare ML',
      slug: 'pharmasystem',
      image: '/images/card-arch.jpg',
      base: { x: 230, y: 60, rotate: 11, scale: 0.95 },
      width: 'w-44 sm:w-56',
      zIndex: 13,
      factor: 1.5,
    },
    {
      id: 'card-4',
      title: 'ZEPHYRUS 8.0',
      tag: 'National Hackathon',
      slug: 'zephyrus',
      image: '/images/card-noiri.jpg',
      base: { x: -100, y: -110, rotate: -4, scale: 0.92 },
      width: 'w-40 sm:w-52',
      zIndex: 12,
      factor: 0.8,
    },
  ];

  return (
    <section
      id="home"
      className="relative flex flex-col items-center justify-center pt-28 sm:pt-32 pb-16 px-4 sm:px-6 max-w-5xl mx-auto overflow-visible select-none bg-white text-black"
    >
      {/* Top subtle category identifier */}
      <div className="mb-4 text-[11px] sm:text-xs font-mono tracking-[0.25em] uppercase text-neutral-400 font-semibold">
        // AI &amp; Full-Stack Systems Developer
      </div>

      {/* Center Interactive Name Container (replaces image card with name as text + cursor hover animation) */}
      <div
        ref={containerRef}
        className="relative my-4 sm:my-8 flex items-center justify-center cursor-pointer group px-6 sm:px-12 py-8 sm:py-10"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onMouseMove={handleMouseMove}
        onClick={() => setIsHovered((prev) => !prev)}
      >
        {/* Floating Cards that Fan Out & Dynamically Track Cursor */}
        {floatingCards.map((card) => {
          // Responsive offset scaling for mobile screens
          const isMobile = typeof window !== 'undefined' && window.innerWidth < 640;
          const scaleMultiplier = isMobile ? 0.5 : 1;
          const targetX = isHovered ? (card.base.x * scaleMultiplier) + cursorOffset.x * card.factor : 0;
          const targetY = isHovered ? (card.base.y * scaleMultiplier) + cursorOffset.y * card.factor : 0;
          const targetRotate = isHovered ? card.base.rotate + cursorOffset.x * 0.04 : 0;
          const targetScale = isHovered ? (isMobile ? card.base.scale * 0.75 : card.base.scale) : 0.75;
          const targetOpacity = isHovered ? 1 : 0;

          return (
            <motion.div
              key={card.id}
              initial={false}
              animate={{
                x: targetX,
                y: targetY,
                rotate: targetRotate,
                scale: targetScale,
                opacity: targetOpacity,
              }}
              transition={{
                type: 'spring',
                stiffness: 240,
                damping: 24,
                mass: 0.7,
              }}
              className={`absolute rounded-xl overflow-hidden shadow-2xl border border-black/10 bg-neutral-900 pointer-events-auto transition-transform hover:scale-105 hover:shadow-[0_25px_50px_rgba(0,0,0,0.35)] ${card.width}`}
              style={{ zIndex: card.zIndex }}
            >
              <Link to={`/work/${card.slug}`} className="block relative aspect-[16/11] overflow-hidden">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-2.5 left-3 right-3 flex items-center justify-between text-white text-[11px] sm:text-xs font-semibold">
                  <span className="truncate">{card.title}</span>
                  <span className="opacity-75 font-mono text-[10px] sm:text-[11px] ml-2 shrink-0">{card.tag}</span>
                </div>
              </Link>
            </motion.div>
          );
        })}

        {/* The User's Name Rendered Prominently as Bold Editorial Text */}
        <div className="relative z-20 flex flex-col items-center justify-center text-center">
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight text-black uppercase leading-tight transition-transform duration-300 group-hover:scale-[1.01] whitespace-normal sm:whitespace-nowrap">
            ANOOP DANIMON
          </h1>
        </div>
      </div>

      {/* Editorial Pitch Statement */}
      <div className="text-center max-w-xl mx-auto mt-2 px-4 space-y-5">
        <p className="text-sm sm:text-base md:text-lg text-neutral-600 font-normal leading-relaxed">
          {content.hero.intro}
        </p>

        {/* Minimal Black Pill Button "Let's Talk" */}
        <div className="flex justify-center">
          <a
            href="#contact"
            onClick={scrollToContact}
            className="inline-block bg-black text-white text-xs sm:text-sm font-medium px-6 py-2.5 rounded-full hover:bg-neutral-800 transition-colors shadow-sm"
          >
            {content.hero.cta}
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
