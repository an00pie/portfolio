import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export const NotFoundPage: React.FC = () => {
  return (
    <main className="min-h-[80vh] flex flex-col items-center justify-center px-4 text-center">
      <span className="font-mono text-xs uppercase tracking-widest text-accent font-semibold mb-3">
        ERROR // 404
      </span>
      <h1 className="text-4xl sm:text-5xl font-black text-neutral-900 dark:text-neutral-50 tracking-tight">
        Page Not Located
      </h1>
      <p className="mt-3 text-neutral-600 dark:text-neutral-400 max-w-md text-sm sm:text-base leading-relaxed">
        The route you are navigating to does not exist or has been shifted in the directory.
      </p>
      <Link
        to="/"
        className="mt-8 inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-semibold uppercase tracking-wider bg-neutral-900 text-white dark:bg-white dark:text-black hover:bg-accent hover:text-black dark:hover:bg-accent dark:hover:text-black transition-colors"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>Return to Portfolio</span>
      </Link>
    </main>
  );
};
