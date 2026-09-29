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
    <main className="pt-28 pb-24 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto min-h-screen bg-white">
      {/* Top Breadcrumb & Return Link */}
      <div className="mb-8">
        <Link
          to="/"
          className="inline-flex items-center gap-1.5 text-xs uppercase tracking-wider text-neutral-500 hover:text-black transition-colors font-medium"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Home</span>
        </Link>
      </div>

      {/* Header */}
      <div className="space-y-3 pb-10 border-b border-neutral-200">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-black uppercase">
          Selected Works
        </h1>
        <p className="text-neutral-500 text-sm sm:text-base max-w-2xl leading-relaxed">
          Catalog of edge AI systems, hackathon prototypes, data science pipelines, and front-end builds.
        </p>

        {/* Filter Pills */}
        <div className="pt-4 flex flex-wrap items-center gap-2">
          {categories.map((c) => (
            <button
              key={c.id}
              onClick={() => setFilter(c.id)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ${
                filter === c.id
                  ? 'bg-black text-white shadow-sm'
                  : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200'
              }`}
            >
              {c.label}
            </button>
          ))}
        </div>
      </div>

      {/* Section 1: Featured In-Depth Case Studies */}
      {filteredFeatured.length > 0 && (
        <section className="mt-12 space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
            {filteredFeatured.map((project, idx) => (
              <motion.article
                key={project.slug}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="group flex flex-col cursor-pointer"
              >
                <Link
                  to={`/work/${project.slug}`}
                  className="block"
                >
                  <div className="relative aspect-[16/11] rounded-2xl overflow-hidden bg-neutral-100 shadow-sm border border-black/5">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                    {project.award && (
                      <div className="absolute top-3 left-3 max-w-[85%] flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] sm:text-xs font-medium bg-black/80 backdrop-blur-md text-white">
                        <Trophy className="w-3 h-3 text-[#E80000] flex-shrink-0" />
                        <span className="truncate">{project.award}</span>
                      </div>
                    )}
                  </div>

                  <div className="flex items-start justify-between mt-3 px-0.5">
                    <div>
                      <h3 className="text-base sm:text-lg font-bold text-black uppercase tracking-tight">
                        {project.title}
                      </h3>
                      <p className="text-xs text-neutral-500 font-medium mt-0.5">
                        {project.category}
                      </p>
                    </div>

                    <div className="w-7 h-7 rounded-md bg-black text-white flex items-center justify-center transition-colors duration-200 group-hover:bg-[#E80000] flex-shrink-0 mt-0.5">
                      <ArrowUpRight className="w-4 h-4 stroke-[2.2]" />
                    </div>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>
        </section>
      )}

      {/* Section 2: Secondary Projects & Repositories Archive */}
      {filteredSecondary.length > 0 && (
        <section className="mt-16 space-y-6">
          <div className="pb-3 border-b border-neutral-200">
            <h2 className="text-xs font-bold uppercase tracking-wider text-neutral-400">
              Additional Archive &amp; Repositories ({filteredSecondary.length})
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredSecondary.map((proj, idx) => (
              <motion.div
                key={proj.title}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: idx * 0.04 }}
                className="p-5 rounded-xl border border-neutral-200 bg-white hover:border-black/30 transition-all duration-200 flex flex-col justify-between group"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-xs text-neutral-400">
                    <span>{proj.category}</span>
                    <span className="font-mono">{proj.year}</span>
                  </div>

                  <h3 className="text-base font-bold text-black group-hover:text-[#E80000] transition-colors flex items-center justify-between">
                    <span>{proj.title}</span>
                    {proj.github && (
                      <a
                        href={proj.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-neutral-400 hover:text-black p-1"
                        aria-label={`${proj.title} GitHub repository`}
                      >
                        <Github className="w-4 h-4" />
                      </a>
                    )}
                  </h3>

                  <p className="text-neutral-600 text-xs sm:text-sm leading-relaxed">
                    {proj.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-neutral-100 flex items-center justify-between">
                  <div className="flex flex-wrap gap-1">
                    {proj.stack.map((s) => (
                      <span
                        key={s}
                        className="px-2 py-0.5 rounded text-[10px] font-mono bg-neutral-100 text-neutral-600"
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
                      className="inline-flex items-center gap-1 text-[11px] font-medium text-neutral-500 hover:text-black transition-colors ml-2"
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

export default WorkPage;
