import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowUpRight, ArrowRight } from 'lucide-react';
import { content } from '../data/content';

const categories = [
  { id: 'all', label: 'All' },
  { id: 'ai', label: 'AI & data' },
  { id: 'web', label: 'Web & systems' },
  { id: 'creative', label: 'Creative' },
];
const projectCategories: Record<string, string[]> = {
  delta: ['web'],
  'retail-customer-intelligence': ['ai', 'web'],
  zoltraak: ['web'],
  thuzhayan: ['ai', 'web'],
  'bus-sahayi': ['web'],
  pharmasystem: ['web'],
  zephyrus: ['ai', 'web'],
  'Fly Connectome Simulator': ['ai'],
  'Sales & Marketing Predictive Analytics': ['ai'],
  meme_nokal: ['ai', 'web'],
  ThreadMatrix: ['web'],
  Class_Web: ['web'],
  'DELTA Launch Video': ['creative'],
  'Beachhack Season 7 Design Work': ['creative'],
};

export const WorkPage: React.FC = () => {
  const [filter, setFilter] = useState('all');
  const matches = (key: string) => filter === 'all' || projectCategories[key]?.includes(filter);
  const projects = content.featuredProjects.filter((project) => matches(project.slug));
  const archive = content.allProjects.filter((project) => matches(project.title));
  return (
    <main id="main-content" className="editorial-page work-page">
      <header className="page-heading">
        <h1>The Work</h1>
        <p>
          A selection of things I’ve built.
          <br />
          Physical AI, useful systems & considered interfaces.
        </p>
      </header>
      <div className="work-column">
        <nav className="work-filters" aria-label="Filter projects">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setFilter(category.id)}
              aria-pressed={filter === category.id}
              className={filter === category.id ? 'is-active' : ''}
            >
              {category.label}
            </button>
          ))}
        </nav>
        <motion.div layout className="work-projects">
          <AnimatePresence initial={false} mode="popLayout">
            {projects.map((project) => (
              <motion.article
                layout
                key={project.slug}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.97 }}
                transition={{ duration: 0.4 }}
              >
                <Link className="work-image" to={`/work/${project.slug}`}>
                  <img
                    src={project.image}
                    alt={project.imageCaption || `${project.title} — illustrative interface concept`}
                  />
                  <span className="work-image-action">
                    <span>Explore project</span>
                    <ArrowUpRight size={22} strokeWidth={1.3} />
                  </span>
                </Link>
                <div className="work-project-caption">
                  <div>
                    <Link to={`/work/${project.slug}`}>{project.title}</Link>
                    <p>{project.category}</p>
                  </div>
                  <span>{project.year}</span>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
        {archive.length > 0 && (
          <section className="project-archive">
            <h2>{filter === 'creative' ? 'Creative work' : 'Also on my desk'}</h2>
            <p className="archive-intro">Experiments, repositories, and other creative work.</p>
            {archive.map((project) => (
              <article className="archive-row" key={project.title}>
                <div>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <span className="archive-stack">{project.stack.join(' / ')}</span>
                </div>
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Explore ${project.title} on GitHub`}
                  >
                    <ArrowUpRight size={18} />
                  </a>
                )}
              </article>
            ))}
          </section>
        )}
        <Link to="/personal-gallery" className="editorial-next">
          A different way to look.
          <span>
            The collection <ArrowRight size={18} />
          </span>
        </Link>
      </div>
    </main>
  );
};
export default WorkPage;
