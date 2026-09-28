import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowUpRight, Github, ExternalLink, Trophy, Filter, ArrowLeft } from 'lucide-react';
import { content } from '../data/content';

export const WorkPage: React.FC = () => {
  const [filter, setFilter] = useState<string>('all');

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'featured', label: 'Featured Case Studies' },
    { id: 'ai-data', label: 'AI & Data Science' },
    { id: 'fullstack', label: 'Web & Systems' },
    { id: 'design', label: 'Creative & Event' },
  ];

  // Map category IDs
  const matchFilter = (cat: string, isFeatured: boolean) => {
    if (filter === 'all') return true;
    if (filter === 'featured') return isFeatured;
    if (filter === 'ai-data') return cat.includes('AI') || cat.includes('Data') || cat.includes('Neuro');
    if (filter === 'fullstack') return cat.includes('Web') || cat.includes('Full-Stack') || cat.includes('Systems') || cat.includes('Transport') || cat.includes('Platform');
    if (filter === 'design') return cat.includes('Design') || cat.includes('Motion') || cat.includes('Brand');
    return true;
  };

  const filteredFeatured = content.featuredProjects.filter((p) =>
    matchFilter(p.category, true)
  );

  const filteredSecondary = content.allProjects.filter((p) =>
    filter === 'featured' ? false : matchFilter(p.category, false)
  );

  return (
    <main className="pt-28 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto min-h-screen">
      {/* Top Breadcrumb & Return Link */}
      <div className="mb-8">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-neutral-500 hover:text-accent transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Return Home</span>
        </Link>
      </div>

      {/* Header */}
      <div className="space-y-4 pb-12 border-b border-light-border dark:border-dark-border">
        <span className="text-xs font-mono uppercase tracking-[0.25em] text-accent font-semibold">
          INDEX // ALL WORKS
        </span>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-neutral-900 dark:text-neutral-50">
          Selected Works &amp; Engineering Archives
        </h1>
        <p className="text-neutral-600 dark:text-neutral-400 text-base sm:text-lg max-w-3xl leading-relaxed">
          Comprehensive catalog of hardware prototypes, edge AI telemetry, machine learning pipelines, full-stack web applications, and event design work.
        </p>

        {/* Filter Pills */}
        <div className="pt-6 flex flex-wrap items-center gap-2">
          <div className="flex items-center gap-1.5 text-xs text-neutral-400 mr-2 font-mono">
            <Filter className="w-3.5 h-3.5 text-accent" />
            <span>FILTER:</span>
          </div>
          {categories.map((c) => (
            <button
              key={c.id}
              onClick={() => setFilter(c.id)}
              className={`px-4 py-2 rounded-full text-xs font-medium transition-all duration-200 ${
                filter === c.id
                  ? 'bg-neutral-900 text-white dark:bg-white dark:text-black font-semibold shadow-sm'
                  : 'bg-light-surface dark:bg-dark-surface text-neutral-600 dark:text-neutral-400 border border-light-border dark:border-dark-border hover:border-accent hover:text-accent'
              }`}
            >
              {c.label}
            </button>
          ))}
        </div>
      </div>

      {/* Section 1: Featured In-Depth Case Studies */}
      {filteredFeatured.length > 0 && (
        <section className="mt-14 space-y-8">
          <div className="flex items-center justify-between">
            <h2 className="text-xs font-mono uppercase tracking-[0.2em] text-neutral-500 font-semibold">
              FLAGSHIP CASE STUDIES ({filteredFeatured.length})
            </h2>
            <span className="text-xs text-neutral-400 font-mono">Detailed Case Study Pages</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredFeatured.map((project, idx) => (
              <motion.article
                key={project.slug}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="group flex flex-col rounded-3xl overflow-hidden border border-light-border dark:border-dark-border bg-light-surface dark:bg-dark-surface shadow-xl hover:border-accent/40 transition-all duration-300"
              >
                <Link
                  to={`/work/${project.slug}`}
                  className="relative aspect-[16/10] overflow-hidden bg-neutral-900 block"
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  {project.award && (
                    <div className="absolute top-4 left-4 max-w-[85%] flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-black/70 backdrop-blur-md border border-accent/40 text-accent">
                      <Trophy className="w-3.5 h-3.5 flex-shrink-0" />
                      <span className="truncate">{project.award}</span>
                    </div>
                  )}
                  <div className="absolute bottom-4 right-4 p-3 rounded-full bg-black/80 backdrop-blur-md border border-white/20 text-white group-hover:bg-accent group-hover:text-black transition-colors">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </Link>

                <div className="p-6 sm:p-7 flex flex-col flex-grow justify-between space-y-5">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-xs font-mono text-neutral-500">
                      <span className="text-accent">{project.category}</span>
                      <span>{project.year}</span>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-neutral-900 dark:text-neutral-50 group-hover:text-accent transition-colors">
                      <Link to={`/work/${project.slug}`}>
                        {project.title}
                      </Link>
                    </h3>

                    <p className="text-neutral-600 dark:text-neutral-400 text-sm leading-relaxed">
                      {project.summary}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-light-border dark:border-dark-border flex flex-wrap items-center justify-between gap-3">
                    <div className="flex flex-wrap gap-1.5">
                      {project.stack.slice(0, 3).map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-black/5 dark:bg-white/5 text-neutral-700 dark:text-neutral-300 border border-light-border dark:border-dark-border"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <Link
                      to={`/work/${project.slug}`}
                      className="inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-wider text-accent hover:underline"
                    >
                      <span>Read Case Study</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </section>
      )}

      {/* Section 2: Secondary Projects & Repositories Archive */}
      {filteredSecondary.length > 0 && (
        <section className="mt-20 space-y-8">
          <div className="flex items-center justify-between pb-4 border-b border-light-border dark:border-dark-border">
            <h2 className="text-xs font-mono uppercase tracking-[0.2em] text-neutral-500 font-semibold">
              ENGINEERING &amp; DESIGN ARCHIVE ({filteredSecondary.length})
            </h2>
            <span className="text-xs text-neutral-400 font-mono">Open Source &amp; Media</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredSecondary.map((proj, idx) => (
              <motion.div
                key={proj.title}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: idx * 0.04 }}
                className="p-6 rounded-2xl border border-light-border dark:border-dark-border bg-light-surface dark:bg-dark-surface shadow-md hover:border-accent/40 hover:shadow-lg transition-all duration-300 flex flex-col justify-between group"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs font-mono text-neutral-500">
                    <span className="text-accent">{proj.category}</span>
                    <span>{proj.year}</span>
                  </div>

                  <h3 className="text-lg font-bold text-neutral-900 dark:text-neutral-100 group-hover:text-accent transition-colors flex items-center justify-between">
                    <span>{proj.title}</span>
                    {proj.github && (
                      <a
                        href={proj.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-neutral-500 hover:text-accent p-1"
                        aria-label={`${proj.title} GitHub repository`}
                      >
                        <Github className="w-4 h-4" />
                      </a>
                    )}
                  </h3>

                  <p className="text-neutral-600 dark:text-neutral-400 text-xs sm:text-sm leading-relaxed">
                    {proj.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-light-border dark:border-dark-border flex items-center justify-between">
                  <div className="flex flex-wrap gap-1.5">
                    {proj.stack.map((s) => (
                      <span
                        key={s}
                        className="px-2 py-0.5 rounded text-[10px] font-mono bg-black/5 dark:bg-white/5 text-neutral-600 dark:text-neutral-400"
                      >
                        {s}
                      </span>
                    ))}
                  </div>

                  {proj.github && (
                    <a
                      href={proj.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-[11px] font-semibold font-mono text-neutral-500 hover:text-accent transition-colors ml-2"
                    >
                      <span>repo</span>
                      <ArrowUpRight className="w-3 h-3" />
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      )}
    </main>
  );
};
