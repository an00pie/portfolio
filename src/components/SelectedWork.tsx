import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { content } from '../data/content';

export const SelectedWork: React.FC = () => {
  return (
    <section id="work" className="py-20 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
      {/* Centered Section Header matching Ethan Clark reference */}
      <div className="text-center space-y-3 max-w-lg mx-auto">
        <p className="text-xs sm:text-sm text-neutral-500 font-medium leading-relaxed">
          A selection of physical AI systems, full-stack platforms, and hackathon prototypes built from ground zero.
        </p>

        <div className="pt-1">
          <Link
            to="/work"
            className="inline-block bg-black text-white px-4 py-1.5 rounded-full text-xs font-medium hover:bg-neutral-800 transition-colors shadow-sm"
          >
            View All
          </Link>
        </div>
      </div>

      {/* 2x2 Grid of Featured Project Cards */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
        {content.featuredProjects.map((project, idx) => (
          <motion.div
            key={project.slug}
            initial={{ opacity: 0, y: 40, borderRadius: '9999px', scale: 0.92 }}
            whileInView={{ opacity: 1, y: 0, borderRadius: '16px', scale: 1 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{
              duration: 0.7,
              delay: (idx % 2) * 0.1,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="group cursor-pointer flex flex-col"
          >
            <Link to={`/work/${project.slug}`} className="block">
              {/* Preview Image with Morph and Hover Scale */}
              <div className="relative aspect-[16/11] rounded-2xl overflow-hidden bg-neutral-100 shadow-sm border border-black/5">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  loading="lazy"
                />
              </div>

              {/* Bottom Info Row */}
              <div className="flex items-start justify-between mt-3 px-0.5">
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-black uppercase tracking-tight">
                    {project.title}
                  </h3>
                  <p className="text-xs text-neutral-500 font-medium mt-0.5">
                    {project.category}
                  </p>
                </div>

                {/* Arrow Square Button that turns Crimson on hover */}
                <div className="w-7 h-7 rounded-md bg-black text-white flex items-center justify-center transition-colors duration-200 group-hover:bg-[#E80000] flex-shrink-0 mt-0.5">
                  <ArrowUpRight className="w-4 h-4 stroke-[2.2]" />
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default SelectedWork;
