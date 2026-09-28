import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, MapPin, Sparkles } from 'lucide-react';
import { content } from '../data/content';

export const Hero: React.FC = () => {
  const scrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    const elem = document.getElementById('contact');
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-[92vh] flex flex-col justify-between pt-24 sm:pt-28 md:pt-32 pb-8 sm:pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden"
    >
      {/* Top Meta Details Row */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-light-border dark:border-dark-border text-xs sm:text-sm text-neutral-500 dark:text-neutral-400 font-medium"
      >
        <div className="flex items-center gap-2">
          <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-accent/10 border border-accent/25 text-accent font-semibold text-xs">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{content.hero.role}</span>
          </span>
        </div>

        <div className="flex items-center gap-2 font-mono text-xs">
          <MapPin className="w-3.5 h-3.5 text-accent" />
          <span>{content.hero.location}</span>
        </div>
      </motion.div>

      {/* Main Hero Content Area */}
      <div className="my-auto py-8 sm:py-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        
        {/* Left Column: Portrait Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="lg:col-span-5 order-2 lg:order-1 flex justify-center"
        >
          <div className="relative group w-full max-w-sm sm:max-w-md aspect-[4/5] rounded-3xl overflow-hidden border border-light-border dark:border-dark-border shadow-2xl bg-light-surface dark:bg-dark-surface transition-all duration-500 hover:border-accent/40 hover:shadow-accent/5">
            <img
              src={content.hero.portrait}
              alt={content.hero.name}
              className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              loading="eager"
            />
            {/* Subtle overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent pointer-events-none" />
            
            {/* Overlay badge */}
            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between p-3.5 rounded-2xl backdrop-blur-md bg-black/50 border border-white/10 text-white">
              <div>
                <p className="text-[11px] uppercase tracking-widest text-neutral-400 font-semibold font-mono">Profile // 2026</p>
                <p className="text-sm font-bold text-white">{content.hero.name}</p>
              </div>
              <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-accent/20 border border-accent/40 text-accent text-xs font-semibold">
                <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                <span>{content.hero.statusText}</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Column: Editorial Intro Pitch & CTA */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="lg:col-span-7 order-1 lg:order-2 flex flex-col justify-center space-y-6 sm:space-y-8"
        >
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.25em] text-accent font-semibold">
              <span className="w-2 h-2 rounded-full bg-accent animate-ping" />
              <span>HELLO / NAMASKARAM</span>
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-black tracking-tight text-neutral-900 dark:text-white leading-[1.12]">
              {content.hero.intro}
            </h1>
          </div>

          <p className="text-neutral-600 dark:text-neutral-300 text-base sm:text-lg leading-relaxed max-w-2xl font-normal">
            Currently in my 3rd year pursuing B.Tech in Computer Science &amp; Engineering (Data Science) at Christ College of Engineering. 
            Google Student Ambassador, hackathon podium builder, and creator of physical AI telemetry systems.
          </p>

          <div className="pt-2 flex flex-wrap items-center gap-4">
            <a
              href="#contact"
              onClick={scrollToContact}
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider bg-neutral-900 text-white dark:bg-white dark:text-neutral-950 hover:bg-accent hover:text-black dark:hover:bg-accent dark:hover:text-black transition-all duration-300 shadow-md group"
            >
              <span>{content.hero.cta}</span>
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>

            <a
              href="/work"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-xs sm:text-sm font-semibold text-neutral-700 dark:text-neutral-300 border border-light-border dark:border-dark-border bg-light-surface dark:bg-dark-surface hover:border-accent hover:text-accent transition-all duration-200"
            >
              <span>Explore Projects ({content.featuredProjects.length + content.allProjects.length})</span>
            </a>
          </div>
        </motion.div>
      </div>

      {/* Massive Full-Width Display Wordmark ("ANOOP") */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
        className="w-full select-none pointer-events-none pt-4 pb-2"
        aria-hidden="true"
      >
        <div className="text-[18vw] leading-[0.8] font-black tracking-[-0.07em] text-neutral-200/90 dark:text-white/[0.07] text-center uppercase whitespace-nowrap overflow-hidden transition-colors">
          {content.hero.wordmark}
        </div>
      </motion.div>
    </section>
  );
};
