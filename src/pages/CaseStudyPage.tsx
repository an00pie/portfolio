import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, ArrowUpRight, Github, ExternalLink, Trophy, Users, Calendar, Layers, CheckCircle2 } from 'lucide-react';
import { content } from '../data/content';

export const CaseStudyPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [slug]);

  const currentIndex = content.featuredProjects.findIndex((p) => p.slug === slug);
  const project = content.featuredProjects[currentIndex];

  if (!project) {
    return (
      <main className="min-h-[80vh] flex flex-col items-center justify-center px-4 text-center">
        <h1 className="text-4xl font-bold text-neutral-900 dark:text-neutral-100">Project Not Found</h1>
        <p className="mt-3 text-neutral-500">The requested case study does not exist or has been moved.</p>
        <Link
          to="/work"
          className="mt-6 inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold bg-accent text-black"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Return to Work Index</span>
        </Link>
      </main>
    );
  }

  // Prev / Next project links
  const prevProject =
    currentIndex > 0 ? content.featuredProjects[currentIndex - 1] : content.featuredProjects[content.featuredProjects.length - 1];
  const nextProject =
    currentIndex < content.featuredProjects.length - 1 ? content.featuredProjects[currentIndex + 1] : content.featuredProjects[0];

  return (
    <article className="pt-28 pb-24 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto min-h-screen">
      {/* Top Nav / Breadcrumbs */}
      <div className="flex items-center justify-between pb-8">
        <Link
          to="/work"
          className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-neutral-500 hover:text-accent transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Projects</span>
        </Link>

        <span className="text-xs font-mono text-neutral-500 uppercase tracking-widest">
          CASE STUDY // 0{currentIndex + 1} OF 0{content.featuredProjects.length}
        </span>
      </div>

      {/* Hero Header */}
      <header className="space-y-6 pb-12 border-b border-light-border dark:border-dark-border">
        {project.award && (
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-accent/15 border border-accent/30 text-accent">
            <Trophy className="w-4 h-4" />
            <span>{project.award}</span>
          </div>
        )}

        <div className="space-y-2">
          <span className="block text-xs font-mono uppercase tracking-[0.25em] text-neutral-400">
            {project.category}
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-neutral-900 dark:text-neutral-50">
            {project.title}
          </h1>
        </div>

        <p className="text-lg sm:text-xl text-neutral-600 dark:text-neutral-300 leading-relaxed max-w-3xl">
          {project.summary}
        </p>

        {/* Metadata Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 text-xs sm:text-sm">
          <div className="p-4 rounded-xl bg-black/5 dark:bg-white/5 border border-light-border dark:border-dark-border">
            <p className="text-neutral-500 font-mono text-xs uppercase flex items-center gap-1.5 mb-1">
              <Calendar className="w-3.5 h-3.5 text-accent" /> Year
            </p>
            <p className="font-semibold text-neutral-900 dark:text-neutral-100">{project.year}</p>
          </div>

          <div className="p-4 rounded-xl bg-black/5 dark:bg-white/5 border border-light-border dark:border-dark-border">
            <p className="text-neutral-500 font-mono text-xs uppercase flex items-center gap-1.5 mb-1">
              <Layers className="w-3.5 h-3.5 text-accent" /> My Role
            </p>
            <p className="font-semibold text-neutral-900 dark:text-neutral-100 truncate">{project.role}</p>
          </div>

          <div className="p-4 rounded-xl bg-black/5 dark:bg-white/5 border border-light-border dark:border-dark-border col-span-2 sm:col-span-2">
            <p className="text-neutral-500 font-mono text-xs uppercase flex items-center gap-1.5 mb-1">
              <Users className="w-3.5 h-3.5 text-accent" /> Team Collaborators
            </p>
            <p className="font-semibold text-neutral-900 dark:text-neutral-100">
              {project.teammates && project.teammates.length > 0
                ? project.teammates.join(', ')
                : 'Solo Full-Stack Project'}
            </p>
          </div>
        </div>

        {/* Links action bar */}
        <div className="flex flex-wrap items-center gap-3 pt-2">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-neutral-900 text-white dark:bg-white dark:text-neutral-950 hover:bg-accent hover:text-black dark:hover:bg-accent dark:hover:text-black transition-colors"
            >
              <Github className="w-4 h-4" />
              <span>Source Repository</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          )}

          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider border border-light-border dark:border-dark-border bg-light-surface dark:bg-dark-surface hover:border-accent hover:text-accent transition-colors"
            >
              <ExternalLink className="w-4 h-4" />
              <span>Live Application</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          )}
        </div>
      </header>

      {/* Main Image / Architecture Display */}
      <section className="my-12">
        <div className="aspect-[16/10] rounded-3xl overflow-hidden border border-light-border dark:border-dark-border shadow-2xl bg-neutral-950">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      {/* Narrative: The Challenge & The Solution */}
      <section className="space-y-12 py-6 border-b border-light-border dark:border-dark-border">
        {/* Problem */}
        <div className="space-y-4">
          <span className="text-xs font-mono uppercase tracking-[0.2em] text-accent font-semibold">
            01 // CONTEXT &amp; PROBLEM
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900 dark:text-neutral-100">
            The Challenge
          </h2>
          <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-300 leading-relaxed">
            {project.problem}
          </p>
        </div>

        {/* Solution */}
        <div className="space-y-4">
          <span className="text-xs font-mono uppercase tracking-[0.2em] text-accent font-semibold">
            02 // ARCHITECTURAL SOLUTION
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900 dark:text-neutral-100">
            How It Was Built
          </h2>
          <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-300 leading-relaxed">
            {project.solution}
          </p>
        </div>

        {/* Key Highlights Checklist */}
        <div className="space-y-4">
          <span className="text-xs font-mono uppercase tracking-[0.2em] text-accent font-semibold">
            03 // TECHNICAL HIGHLIGHTS
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900 dark:text-neutral-100">
            Key Engineering Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
            {project.highlights.map((highlight, idx) => (
              <div
                key={idx}
                className="p-4 rounded-2xl border border-light-border dark:border-dark-border bg-light-surface dark:bg-dark-surface flex items-start gap-3"
              >
                <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <span className="text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed">
                  {highlight}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Tech Stack Pills */}
        <div className="space-y-4 pt-4">
          <span className="text-xs font-mono uppercase tracking-[0.2em] text-accent font-semibold">
            04 // TECH STACK &amp; HARDWARE
          </span>
          <div className="flex flex-wrap gap-2">
            {project.stack.map((tech) => (
              <span
                key={tech}
                className="px-3.5 py-1.5 rounded-full text-xs font-mono bg-black/5 dark:bg-white/5 border border-light-border dark:border-dark-border text-neutral-800 dark:text-neutral-200"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Prev / Next Case Study Navigation */}
      <nav className="mt-16 pt-8 grid grid-cols-1 sm:grid-cols-2 gap-6" aria-label="Adjacent Projects">
        <Link
          to={`/work/${prevProject.slug}`}
          className="p-6 rounded-2xl border border-light-border dark:border-dark-border bg-light-surface dark:bg-dark-surface hover:border-accent/40 transition-colors group flex flex-col justify-between"
        >
          <div className="flex items-center gap-2 text-xs font-mono text-neutral-500 mb-2">
            <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
            <span>PREVIOUS PROJECT</span>
          </div>
          <p className="text-lg font-bold text-neutral-900 dark:text-neutral-100 group-hover:text-accent transition-colors">
            {prevProject.title}
          </p>
          <p className="text-xs text-neutral-500 mt-1">{prevProject.category}</p>
        </Link>

        <Link
          to={`/work/${nextProject.slug}`}
          className="p-6 rounded-2xl border border-light-border dark:border-dark-border bg-light-surface dark:bg-dark-surface hover:border-accent/40 transition-colors group flex flex-col justify-between text-right"
        >
          <div className="flex items-center justify-end gap-2 text-xs font-mono text-neutral-500 mb-2">
            <span>NEXT PROJECT</span>
            <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </div>
          <p className="text-lg font-bold text-neutral-900 dark:text-neutral-100 group-hover:text-accent transition-colors">
            {nextProject.title}
          </p>
          <p className="text-xs text-neutral-500 mt-1">{nextProject.category}</p>
        </Link>
      </nav>
    </article>
  );
};
