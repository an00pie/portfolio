import React from 'react';
import { motion } from 'framer-motion';
import { FileText, GraduationCap, Award, Users, CheckCircle2 } from 'lucide-react';
import { content } from '../data/content';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="pb-12 border-b border-light-border dark:border-dark-border">
        <span className="text-xs font-mono uppercase tracking-[0.25em] text-accent font-semibold">
          {content.about.eyebrow}
        </span>
        <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-neutral-900 dark:text-neutral-50">
          {content.about.heading}
        </h2>
      </div>

      <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Column: Bio Narrative & Resume Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "300px 0px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="lg:col-span-7 space-y-6"
        >
          <p className="text-xl sm:text-2xl font-medium text-neutral-900 dark:text-neutral-100 leading-snug">
            {content.about.summary}
          </p>

          <div className="space-y-4 text-neutral-600 dark:text-neutral-400 text-base sm:text-lg leading-relaxed pt-2">
            {content.about.bioParagraphs.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>

          {/* Education Card */}
          <div className="p-6 rounded-2xl border border-light-border dark:border-dark-border bg-light-surface dark:bg-dark-surface shadow-sm space-y-3">
            <div className="flex items-center gap-2 text-accent font-semibold text-xs tracking-wider uppercase">
              <GraduationCap className="w-4 h-4" />
              <span>Current Degree Program</span>
            </div>
            <h3 className="text-lg font-bold text-neutral-900 dark:text-neutral-50">
              {content.about.education.degree}
            </h3>
            <p className="text-sm text-neutral-600 dark:text-neutral-400">
              {content.about.education.institution} • {content.about.education.specialization}
            </p>
            <div className="flex items-center justify-between text-xs text-neutral-500 pt-2 border-t border-light-border dark:border-dark-border">
              <span>{content.about.education.location}</span>
              <span className="font-mono text-accent font-semibold">{content.about.education.years}</span>
            </div>
          </div>

          {/* Resume CTA */}
          <div className="pt-4 flex items-center gap-4">
            <a
              href={content.about.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider bg-neutral-900 text-white dark:bg-white dark:text-neutral-950 hover:bg-accent hover:text-black dark:hover:bg-accent dark:hover:text-black transition-all duration-300 shadow-md group"
            >
              <FileText className="w-4 h-4" />
              <span>View Résumé (PDF)</span>
            </a>
            <span className="text-xs text-neutral-500 font-mono">Updated 2026</span>
          </div>
        </motion.div>

        {/* Right Column: Roles, Positions of Responsibility & Community Leadership */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "300px 0px" }}
          transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="lg:col-span-5 space-y-4"
        >
          <div className="p-6 sm:p-7 rounded-3xl border border-light-border dark:border-dark-border bg-light-surface dark:bg-dark-surface shadow-xl space-y-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-accent font-semibold text-xs tracking-wider uppercase">
                <Users className="w-4 h-4" />
                <span>Leadership &amp; Roles</span>
              </div>
              <span className="text-xs font-mono text-neutral-500">6 Key Roles</span>
            </div>

            <div className="divide-y divide-light-border dark:divide-dark-border">
              {content.about.roles.map((role, idx) => (
                <div key={idx} className="py-3.5 first:pt-0 last:pb-0 space-y-1">
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-sm font-bold text-neutral-900 dark:text-neutral-100">
                        {role.title}
                      </h4>
                      <p className="text-xs text-accent font-medium">
                        {role.organization}
                      </p>
                      {role.description && (
                        <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-1 leading-relaxed">
                          {role.description}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
