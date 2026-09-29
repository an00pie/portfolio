import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, X } from 'lucide-react';
import { content } from '../data/content';

export const Services: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleService = (idx: number) => {
    setOpenIndex((prev) => (prev === idx ? null : idx));
  };

  return (
    <section id="services" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-2xl mx-auto">
      {/* Section Label matching copy.mp4 Frame 08 */}
      <div className="mb-4">
        <h2 className="text-xs sm:text-sm font-semibold text-neutral-400">
          Services
        </h2>
      </div>

      {/* Stacked Accordion List matching copy.mp4 Frames 08, 09, 10 */}
      <div className="space-y-2.5">
        {content.services.map((service, idx) => {
          const isOpen = openIndex === idx;

          return (
            <motion.div
              key={service.title}
              onClick={() => toggleService(idx)}
              className={`rounded-lg cursor-pointer transition-colors duration-200 select-none overflow-hidden ${
                isOpen ? 'bg-[#E80000] text-white' : 'bg-black text-white hover:bg-neutral-900'
              }`}
            >
              {/* Header Bar */}
              <div className="px-5 sm:px-6 py-4 flex items-center justify-between">
                <span className="text-xs sm:text-sm font-medium tracking-tight">
                  {service.title}
                </span>

                <div className="text-white flex items-center justify-center flex-shrink-0">
                  {isOpen ? (
                    <X className="w-4 h-4 stroke-[2.2]" />
                  ) : (
                    <Plus className="w-4 h-4 stroke-[2.2]" />
                  )}
                </div>
              </div>

              {/* Expandable Description */}
              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                    className="px-5 sm:px-6 pb-5 pt-1 text-xs sm:text-sm leading-relaxed text-white/95"
                  >
                    <p>{service.description}</p>
                    
                    {service.tags && (
                      <div className="mt-3 flex flex-wrap gap-1.5 pt-2 border-t border-white/20">
                        {service.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-[10px] font-mono px-2 py-0.5 rounded bg-black/25 text-white"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default Services;
