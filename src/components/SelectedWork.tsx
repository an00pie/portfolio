import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { content } from '../data/content';

export const SelectedWork: React.FC = () => (
  <section id="work" className="mx-auto max-w-7xl px-5 py-24 sm:px-9 sm:py-32">
    <div className="mb-12 grid gap-6 border-t border-white/15 pt-4 sm:grid-cols-2 sm:items-end">
      <p className="text-[10px] uppercase tracking-[.16em] text-[#d7ff53]">Selected projects · 2023—2024</p>
      <div className="sm:justify-self-end sm:text-right">
        <p className="max-w-sm text-sm leading-6 text-white/65">A selection of physical AI systems, full-stack platforms, and hackathon prototypes built from ground zero.</p>
        <Link to="/work" className="mt-4 inline-flex items-center gap-2 text-[10px] uppercase tracking-[.14em] text-white transition-colors hover:text-[#d7ff53]">All projects <ArrowUpRight size={14} /></Link>
      </div>
    </div>
    <div className="grid gap-x-6 gap-y-14 md:grid-cols-2">
      {content.featuredProjects.map((project, index) => (
        <motion.article key={project.slug} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .15 }} transition={{ duration: .65, delay: index * .08 }} className={index % 2 ? 'md:mt-20' : ''}>
          <Link to={`/work/${project.slug}`} className="group block">
            <div className="relative aspect-[16/10] overflow-hidden bg-[#171918]">
              <img src={project.image} alt={project.title} loading="lazy" className="h-full w-full object-cover opacity-80 transition duration-700 group-hover:scale-105 group-hover:opacity-100" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              <span className="absolute left-4 top-4 text-[10px] uppercase tracking-[.14em] text-white/70">0{index + 1}</span>
            </div>
            <div className="mt-4 flex items-start justify-between border-b border-white/15 pb-4">
              <div>
                <h3 className="text-2xl font-light tracking-[-.04em] text-white sm:text-3xl">{project.title}</h3>
                <p className="mt-1 text-[10px] uppercase tracking-[.12em] text-white/50">{project.category}</p>
              </div>
              <ArrowUpRight className="mt-1 text-[#d7ff53] transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" size={20} />
            </div>
          </Link>
        </motion.article>
      ))}
    </div>
  </section>
);

export default SelectedWork;
