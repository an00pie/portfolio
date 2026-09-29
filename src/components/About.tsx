import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, FileText } from 'lucide-react';
import { content } from '../data/content';

export const About: React.FC = () => {
  const [showRoles, setShowRoles] = useState(false);

  return (
    <section id="about" className="py-20 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
      {/* Centered Editorial Intro Pitch matching copy.mp4 Frame 08 */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="text-center max-w-2xl mx-auto"
      >
        <p className="text-xl sm:text-2xl md:text-[1.75rem] font-medium text-black leading-snug tracking-tight">
          {content.about.summary}
        </p>
      </motion.div>

      {/* Centered Portrait with "View Résumé" Button in bottom-right */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        className="mt-10 flex justify-center"
      >
        <div className="relative w-64 sm:w-72 aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl bg-neutral-950 border border-black/5 group">
          <img
            src={content.about.portrait}
            alt={content.hero.name}
            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-102"
            loading="lazy"
          />

          {/* "View Résumé" button attached to bottom right of photo */}
          <a
            href={content.about.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute bottom-3 right-3 bg-black/85 hover:bg-black text-white text-[11px] sm:text-xs font-medium px-3.5 py-1.5 rounded-md backdrop-blur-md transition-all shadow-md flex items-center gap-1.5"
            aria-label="View Resume PDF"
          >
            <span>View Résumé</span>
          </a>
        </div>
      </motion.div>

      {/* Expandable Technical Leadership & Community Roles Accordion */}
      <div className="mt-8 max-w-md mx-auto text-center">
        <button
          onClick={() => setShowRoles(!showRoles)}
          className="inline-flex items-center gap-1.5 text-xs text-neutral-400 hover:text-black font-medium transition-colors"
        >
          <span>{showRoles ? 'Hide Leadership Roles & Education' : 'View Leadership Roles & Education'}</span>
          <ChevronDown
            className={`w-3.5 h-3.5 transition-transform duration-200 ${
              showRoles ? 'rotate-180' : ''
            }`}
          />
        </button>

        <AnimatePresence>
          {showRoles && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden mt-6 text-left border-t border-neutral-100 pt-6 space-y-4"
            >
              <div className="bg-neutral-50 rounded-xl p-4 border border-black/5">
                <p className="text-xs font-bold text-black uppercase tracking-wider">
                  {content.about.education.degree}
                </p>
                <p className="text-xs text-neutral-600 mt-0.5">
                  {content.about.education.institution} • {content.about.education.specialization} ({content.about.education.years})
                </p>
              </div>

              <div className="divide-y divide-neutral-100">
                {content.about.roles.map((role, idx) => (
                  <div key={idx} className="py-2.5 first:pt-0 last:pb-0">
                    <p className="text-xs font-semibold text-black">{role.title}</p>
                    <p className="text-[11px] text-neutral-500">{role.organization}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default About;
