import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { content } from '../data/content';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('/#')) {
      const targetId = href.replace('/#', '');
      if (location.pathname !== '/') {
        // Will navigate naturally to /#targetId
        return;
      }
      e.preventDefault();
      const elem = document.getElementById(targetId);
      if (elem) {
        elem.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/90 backdrop-blur-md border-b border-black/5 py-4'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="w-full max-w-5xl mx-auto px-6 sm:px-8 flex items-center justify-between text-xs sm:text-sm font-medium tracking-normal text-black">
        {/* Left Nav: Home & About */}
        <div className="flex items-center gap-6 sm:gap-8 flex-1">
          <Link
            to="/"
            onClick={(e) => {
              if (location.pathname === '/') {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }
            }}
            className="hover:text-neutral-500 transition-colors"
          >
            Home
          </Link>
          <a
            href="/#about"
            onClick={(e) => handleNavClick(e, '/#about')}
            className="hover:text-neutral-500 transition-colors"
          >
            About
          </a>
        </div>

        {/* Center: Brand Wordmark */}
        <div className="flex items-center justify-center">
          <Link
            to="/"
            onClick={(e) => {
              if (location.pathname === '/') {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }
            }}
            className="font-bold text-sm sm:text-base uppercase tracking-wider text-black hover:opacity-80 transition-opacity"
            aria-label="Anoop Danimon Home"
          >
            {content.hero.wordmark}
          </Link>
        </div>

        {/* Right Nav: Work & Contact */}
        <div className="flex items-center justify-end gap-6 sm:gap-8 flex-1">
          <Link
            to="/work"
            className={`hover:text-neutral-500 transition-colors ${
              location.pathname.startsWith('/work') ? 'text-black font-semibold' : ''
            }`}
          >
            Work
          </Link>
          <a
            href="/#contact"
            onClick={(e) => handleNavClick(e, '/#contact')}
            className="hover:text-neutral-500 transition-colors"
          >
            Contact
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
