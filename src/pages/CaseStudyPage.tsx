import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ArrowUpRight, Github, ExternalLink, Trophy, Users, Calendar, Layers, CheckCircle2 } from 'lucide-react';
import { content } from '../data/content';

export const CaseStudyPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [slug]);

  const currentIndex = content.featuredProjects.findIndex((p) => p.slug === slug);
  const project = content.featuredProjects[currentIndex];

  if (!project) {
    return (
      <main className="min-h-[80vh] flex flex-col items-center justify-center px-4 text-center bg-white">
        <h1 className="text-3xl font-bold text-black">Project Not Found</h1>
        <p className="mt-2 text-neutral-500 text-sm">The requested case study does not exist or has been moved.</p>
        <Link
          to="/work"
          className="mt-6 inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold bg-black text-white"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Return to Work</span>
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
    <article className="pt-28 pb-24 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto min-h-screen bg-white">
      {/* Top Nav / Breadcrumbs */}
      <div className="flex items-center justify-between pb-8">
        <Link
          to="/work"
          className="inline-flex items-center gap-1.5 text-xs uppercase tracking-wider text-neutral-500 hover:text-black transition-colors font-medium"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Work</span>
        </Link>

        <span className="text-xs font-mono text-neutral-400 uppercase tracking-widest">
          {currentIndex + 1} OF {content.featuredProjects.length}
        </span>
      </div>

      {/* Hero Header */}
      <header className="space-y-5 pb-10 border-b border-neutral-200">
        {project.award && (
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-neutral-100 text-black border border-neutral-200">
            <Trophy className="w-3.5 h-3.5 text-[#E80000]" />
            <span>{project.award}</span>
          </div>
        )}

        <div className="space-y-1">
          <span className="block text-xs uppercase tracking-widest text-neutral-400 font-medium">
            {project.category}
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-black uppercase">
            {project.title}
          </h1>
        </div>

        <p className="text-base sm:text-lg text-neutral-600 leading-relaxed max-w-2xl">
          {project.summary}
        </p>

        {/* Metadata Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4 text-xs">
          <div className="p-3.5 rounded-xl bg-neutral-50 border border-neutral-200">
            <p className="text-neutral-400 uppercase text-[10px] font-mono mb-0.5">Year</p>
            <p className="font-semibold text-black">{project.year}</p>
          </div>

          <div className="p-3.5 rounded-xl bg-neutral-50 border border-neutral-200">
            <p className="text-neutral-400 uppercase text-[10px] font-mono mb-0.5">Role</p>
            <p className="font-semibold text-black truncate">{project.role}</p>
          </div>

          <div className="p-3.5 rounded-xl bg-neutral-50 border border-neutral-200 col-span-2">
            <p className="text-neutral-400 uppercase text-[10px] font-mono mb-0.5">Collaborators</p>
            <p className="font-semibold text-black">
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
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold bg-black text-white hover:bg-neutral-800 transition-colors shadow-sm"
            >
              <Github className="w-3.5 h-3.5" />
              <span>Source Repository</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          )}

          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold border border-neutral-200 bg-white hover:border-black transition-colors"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span>Live Application</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          )}
        </div>
      </header>

      {/* Main Image */}
      <section className="my-10">
        <div className="aspect-[16/10] rounded-2xl overflow-hidden border border-black/5 shadow-xl bg-neutral-100">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      {/* Narrative: The Challenge & The Solution */}
      <section className="space-y-10 py-6 border-b border-neutral-200">
        {/* Problem */}
        <div className="space-y-2">
          <h2 className="text-lg sm:text-xl font-bold text-black uppercase tracking-tight">
            The Challenge
          </h2>
          <p className="text-sm sm:text-base text-neutral-600 leading-relaxed">
            {project.problem}
          </p>
        </div>

        {/* Solution */}
        <div className="space-y-2">
          <h2 className="text-lg sm:text-xl font-bold text-black uppercase tracking-tight">
            How It Was Built
          </h2>
          <p className="text-sm sm:text-base text-neutral-600 leading-relaxed">
            {project.solution}
          </p>
        </div>

        {/* Key Highlights Checklist */}
        <div className="space-y-3">
          <h2 className="text-lg sm:text-xl font-bold text-black uppercase tracking-tight">
            Key Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-1">
            {project.highlights.map((highlight, idx) => (
              <div
                key={idx}
                className="p-3.5 rounded-xl border border-neutral-200 bg-neutral-50 flex items-start gap-2.5"
              >
                <CheckCircle2 className="w-4 h-4 text-[#E80000] flex-shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm text-neutral-700 leading-relaxed">
                  {highlight}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Tech Stack Pills */}
        <div className="space-y-2 pt-2">
          <h3 className="text-xs uppercase font-bold text-neutral-400">
            Technologies &amp; Hardware
          </h3>
          <div className="flex flex-wrap gap-1.5">
            {project.stack.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 rounded-md text-xs font-mono bg-neutral-100 text-neutral-700"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Prev / Next Case Study Navigation */}
      <nav className="mt-12 pt-6 grid grid-cols-1 sm:grid-cols-2 gap-4" aria-label="Adjacent Projects">
        <Link
          to={`/work/${prevProject.slug}`}
          className="p-5 rounded-xl border border-neutral-200 bg-white hover:border-black transition-colors group flex flex-col justify-between"
        >
          <div className="flex items-center gap-1.5 text-xs text-neutral-400 mb-1">
            <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
            <span>PREVIOUS</span>
          </div>
          <p className="text-base font-bold text-black group-hover:text-[#E80000] transition-colors">
            {prevProject.title}
          </p>
          <p className="text-xs text-neutral-500 mt-0.5">{prevProject.category}</p>
        </Link>

        <Link
          to={`/work/${nextProject.slug}`}
          className="p-5 rounded-xl border border-neutral-200 bg-white hover:border-black transition-colors group flex flex-col justify-between text-right"
        >
          <div className="flex items-center justify-end gap-1.5 text-xs text-neutral-400 mb-1">
            <span>NEXT</span>
            <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </div>
          <p className="text-base font-bold text-black group-hover:text-[#E80000] transition-colors">
            {nextProject.title}
          </p>
          <p className="text-xs text-neutral-500 mt-0.5">{nextProject.category}</p>
        </Link>
      </nav>
    </article>
  );
};

export default CaseStudyPage;
