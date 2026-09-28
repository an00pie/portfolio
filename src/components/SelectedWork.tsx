import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowUpRight, Github, ExternalLink, Trophy } from 'lucide-react';
import { content } from '../data/content';

export const SelectedWork: React.FC = () => {
  return (
    <section id="work" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-light-border dark:border-dark-border">
        <div className="space-y-3 max-w-2xl">
          <span className="text-xs font-mono uppercase tracking-[0.25em] text-accent font-semibold">
            PORTFOLIO // SELECTED WORK
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-neutral-900 dark:text-neutral-50">
            Engineered with Purpose &amp; Clarity
          </h2>
          <p className="text-neutral-600 dark:text-neutral-400 text-sm sm:text-base leading-relaxed">
            A selection of physical AI systems, full-stack platforms, and hackathon prototypes built from ground zero.
          </p>
        </div>

        <div>
          <Link
            to="/work"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold border border-light-border dark:border-dark-border bg-light-surface dark:bg-dark-surface hover:border-accent hover:text-accent transition-all duration-200 group"
          >
            <span>View All Projects ({content.allProjects.length + content.featuredProjects.length})</span>
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>
      </div>

      {/* 2x2 Grid of Featured Project Cards */}
      <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
        {content.featuredProjects.map((project, idx) => (
          <motion.article
            key={project.slug}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "300px 0px" }}
            transition={{ duration: 0.6, delay: idx * 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="group flex flex-col rounded-3xl overflow-hidden border border-light-border dark:border-dark-border bg-light-surface dark:bg-dark-surface shadow-xl hover:border-accent/40 hover:shadow-2xl transition-all duration-300"
          >
            {/* Card Preview Image with Hover Zoom */}
            <Link
              to={`/work/${project.slug}`}
              className="relative aspect-[16/10] overflow-hidden bg-neutral-900 block"
              aria-label={`View ${project.title} case study`}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                loading="lazy"
              />
              
              {/* Award Badge overlay */}
              {project.award && (
                <div className="absolute top-4 left-4 max-w-[85%] flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-black/70 backdrop-blur-md border border-accent/40 text-accent shadow-md">
                  <Trophy className="w-3.5 h-3.5 flex-shrink-0" />
                  <span className="truncate">{project.award}</span>
                </div>
              )}

              {/* Hover Action Circle */}
              <div className="absolute bottom-4 right-4 p-3 rounded-full bg-neutral-950/80 backdrop-blur-md border border-white/20 text-white group-hover:bg-accent group-hover:text-black group-hover:border-accent transition-all duration-300 shadow-lg">
                <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
            </Link>

            {/* Project Details */}
            <div className="p-6 sm:p-8 flex flex-col flex-grow justify-between space-y-6">
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs font-medium text-neutral-500 dark:text-neutral-400">
                  <span className="uppercase tracking-wider font-mono text-accent">
                    {project.category}
                  </span>
                  <span>{project.year}</span>
                </div>

                <h3 className="text-2xl font-bold tracking-tight text-neutral-900 dark:text-neutral-50 group-hover:text-accent transition-colors">
                  <Link to={`/work/${project.slug}`}>
                    {project.title}
                  </Link>
                </h3>

                <p className="text-neutral-600 dark:text-neutral-400 text-sm leading-relaxed">
                  {project.summary}
                </p>
              </div>

              {/* Tech Stack Pills & Direct Links */}
              <div className="pt-4 border-t border-light-border dark:border-dark-border flex flex-wrap items-center justify-between gap-3">
                <div className="flex flex-wrap gap-1.5">
                  {project.stack.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-black/5 dark:bg-white/5 text-neutral-700 dark:text-neutral-300 border border-light-border dark:border-dark-border"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.stack.length > 4 && (
                    <span className="px-2 py-1 text-[11px] font-mono text-neutral-500">
                      +{project.stack.length - 4}
                    </span>
                  )}
                </div>

                <div className="flex items-center gap-2">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-full border border-light-border dark:border-dark-border text-neutral-600 dark:text-neutral-400 hover:text-accent hover:border-accent/40 transition-colors"
                      aria-label={`${project.title} GitHub repository`}
                    >
                      <Github className="w-4 h-4" />
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-full border border-light-border dark:border-dark-border text-neutral-600 dark:text-neutral-400 hover:text-accent hover:border-accent/40 transition-colors"
                      aria-label={`${project.title} live demo`}
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                  <Link
                    to={`/work/${project.slug}`}
                    className="inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-wider text-neutral-800 dark:text-neutral-200 hover:text-accent transition-colors pl-2"
                  >
                    <span>Details</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
};
