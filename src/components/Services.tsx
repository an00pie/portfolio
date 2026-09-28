import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Terminal, Cpu, Palette } from 'lucide-react';
import { content } from '../data/content';

export const Services: React.FC = () => {
  const getIcon = (idx: number) => {
    switch (idx) {
      case 0:
        return <Sparkles className="w-5 h-5 text-accent" />;
      case 1:
        return <Terminal className="w-5 h-5 text-accent" />;
      case 2:
        return <Cpu className="w-5 h-5 text-accent" />;
      case 3:
        return <Palette className="w-5 h-5 text-accent" />;
      default:
        return <Sparkles className="w-5 h-5 text-accent" />;
    }
  };

  return (
    <section id="services" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="pb-12 border-b border-light-border dark:border-dark-border">
        <span className="text-xs font-mono uppercase tracking-[0.25em] text-accent font-semibold">
          CAPABILITIES // WHAT I DO
        </span>
        <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-neutral-900 dark:text-neutral-50">
          Services &amp; Specializations
        </h2>
        <p className="mt-3 text-neutral-600 dark:text-neutral-400 text-sm sm:text-base leading-relaxed max-w-2xl">
          From edge intelligence and machine learning pipelines to high-craft front-end interfaces and brand design.
        </p>
      </div>

      {/* 4 Items Editorial Grid / List */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
        {content.services.map((service, idx) => (
          <motion.div
            key={service.number}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "300px 0px" }}
            transition={{ duration: 0.5, delay: idx * 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="p-8 rounded-3xl border border-light-border dark:border-dark-border bg-light-surface dark:bg-dark-surface shadow-lg hover:border-accent/40 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs font-bold text-accent px-2.5 py-1 rounded-md bg-accent/10 border border-accent/20">
                  {service.number}
                </span>
                <div className="p-2.5 rounded-2xl bg-black/5 dark:bg-white/5 border border-light-border dark:border-dark-border group-hover:border-accent/40 group-hover:scale-110 transition-all duration-300">
                  {getIcon(idx)}
                </div>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-neutral-900 dark:text-neutral-50 group-hover:text-accent transition-colors">
                {service.title}
              </h3>

              <p className="text-neutral-600 dark:text-neutral-400 text-sm sm:text-base leading-relaxed">
                {service.description}
              </p>
            </div>

            {/* Service Tags */}
            <div className="mt-6 pt-4 border-t border-light-border dark:border-dark-border flex flex-wrap gap-2">
              {service.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2.5 py-1 rounded-full text-xs font-mono bg-black/5 dark:bg-white/5 text-neutral-600 dark:text-neutral-300"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
