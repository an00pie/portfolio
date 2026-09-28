import React, { useState, useEffect } from 'react';
import { ArrowUp, Github, Linkedin, Instagram } from 'lucide-react';
import { content } from '../data/content';

export const Footer: React.FC = () => {
  const [timeStr, setTimeStr] = useState<string>('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const formatted = new Intl.DateTimeFormat('en-US', {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,
      }).format(now);
      setTimeStr(`${formatted} IST`);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full border-t border-light-border dark:border-dark-border py-8 px-4 sm:px-6 lg:px-8 bg-light-surface/40 dark:bg-dark-surface/40 backdrop-blur-md">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-xs sm:text-sm text-neutral-500 dark:text-neutral-400">
        
        {/* Left: Copyright & Location */}
        <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 sm:gap-4">
          <span className="font-medium text-neutral-800 dark:text-neutral-200">
            © {new Date().getFullYear()} {content.hero.name}
          </span>
          <span className="hidden sm:inline text-neutral-400 dark:text-neutral-600">•</span>
          <span>{content.hero.location}</span>
        </div>

        {/* Center: Live Asia/Kolkata Clock & Status Dot */}
        <div className="flex items-center gap-3 bg-black/5 dark:bg-white/5 px-4 py-1.5 rounded-full border border-light-border dark:border-dark-border">
          <div className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
            </span>
            <span className="text-neutral-800 dark:text-neutral-200 font-medium">
              {content.hero.statusText}
            </span>
          </div>
          <span className="text-neutral-400 dark:text-neutral-600">|</span>
          <span className="font-mono text-neutral-700 dark:text-neutral-300">
            {timeStr || 'Asia/Kolkata'}
          </span>
        </div>

        {/* Right: Socials & Back to Top */}
        <div className="flex items-center gap-4">
          <a
            href={content.contact.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-1.5 rounded-full hover:text-accent hover:bg-black/5 dark:hover:bg-white/5 transition-colors"
            aria-label="GitHub Profile"
          >
            <Github className="w-4 h-4" />
          </a>
          <a
            href={content.contact.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-1.5 rounded-full hover:text-accent hover:bg-black/5 dark:hover:bg-white/5 transition-colors"
            aria-label="LinkedIn Profile"
          >
            <Linkedin className="w-4 h-4" />
          </a>
          <a
            href={content.contact.socials.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="p-1.5 rounded-full hover:text-accent hover:bg-black/5 dark:hover:bg-white/5 transition-colors"
            aria-label="Instagram Profile"
          >
            <Instagram className="w-4 h-4" />
          </a>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1 pl-2 border-l border-light-border dark:border-dark-border text-xs uppercase tracking-wider font-semibold text-neutral-600 dark:text-neutral-400 hover:text-accent transition-colors"
            aria-label="Back to top"
          >
            <span>Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
