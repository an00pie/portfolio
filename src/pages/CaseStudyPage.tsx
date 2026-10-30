import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, ArrowRight, ArrowUpRight } from 'lucide-react';
import { content } from '../data/content';

export const CaseStudyPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const index = content.featuredProjects.findIndex((project) => project.slug === slug);
  const project = content.featuredProjects[index];
  if (!project)
    return (
      <main id="main-content" className="editorial-page not-found">
        <h1>Not in the collection.</h1>
        <p>This project could not be found.</p>
        <Link className="text-link" to="/work">
          <ArrowLeft size={15} />
          Back to work
        </Link>
      </main>
    );
  const next = content.featuredProjects[(index + 1) % content.featuredProjects.length];
  return (
    <main id="main-content" className="editorial-page case-page">
      <Link to="/work" className="case-back">
        <ArrowLeft size={13} />
        The work
      </Link>
      <header className="page-heading">
        <h1>
          {project.title === 'ZEPHYRUS 8.0 HACKATHON'
            ? 'Zephyrus 8.0'
            : project.title === 'PHARMASYSTEM'
              ? 'PharmaSystem'
              : project.title === 'THUZHAYAN'
                ? 'Thuzhayan'
                : project.slug === 'bus-sahayi' ? 'Bus Sahayi' : project.title}
        </h1>
        <p>{project.category}</p>
      </header>
      <figure className="case-cover">
        <img src={project.image} alt={project.imageCaption || `${project.title} illustrative interface concept`} />
        <figcaption>{project.imageCaption || 'Illustrative project interface concept'}</figcaption>
      </figure>
      <div className="case-body">
        <p className="case-summary">{project.summary}</p>
        <dl className="case-metadata">
          <div>
            <dt>Role</dt>
            <dd>{project.role}</dd>
          </div>
          <div>
            <dt>Year</dt>
            <dd>{project.year}</dd>
          </div>
          {project.teammates && project.teammates.length > 0 && (
            <div>
              <dt>Alongside</dt>
              <dd>{project.teammates.join(', ')}</dd>
            </div>
          )}
          {project.award && (
            <div>
              <dt>Recognition</dt>
              <dd>{project.award}</dd>
            </div>
          )}
        </dl>
        <div className="case-links">
          {project.github && (
            <a href={project.github} target="_blank" rel="noopener noreferrer">
              Source repository <ArrowUpRight size={14} />
            </a>
          )}
          {project.live && (
            <a href={project.live} target="_blank" rel="noopener noreferrer">
              Live project <ArrowUpRight size={14} />
            </a>
          )}
        </div>
        <section>
          <h2>The challenge.</h2>
          <p>
            {project.problem.startsWith('[Project details')
              ? 'This case study is being documented. The project was conceived, built, and pitched by Team S5 CSDS at Zephyrus 8.0.'
              : project.problem}
          </p>
        </section>
        <section>
          <h2>From idea to reality.</h2>
          <p>{project.solution}</p>
        </section>
        <section>
          <h2>The details that matter.</h2>
          <ul className="case-highlights">
            {project.highlights
              .filter((highlight) => !highlight.startsWith('[Placeholder'))
              .map((highlight) => (
                <li key={highlight}>{highlight}</li>
              ))}
          </ul>
        </section>
        <section>
          <h2>Built with.</h2>
          <p className="case-stack">{project.stack.join(' / ')}</p>
        </section>
        <Link to={`/work/${next.slug}`} className="editorial-next">
          Next in the collection
          <span>
            {next.title} <ArrowRight size={18} />
          </span>
        </Link>
      </div>
    </main>
  );
};
export default CaseStudyPage;
