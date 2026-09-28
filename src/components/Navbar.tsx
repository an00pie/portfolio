import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Sun, Moon, Menu, X, ArrowUpRight } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { content } from '../data/content';
import { motion, AnimatePresence } from 'framer-motion';

export const Navbar: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', href: '/#home', path: '/' },
    { name: 'Work', href: '/work', path: '/work' },
    { name: 'About', href: '/#about', path: '/#about' },
    { name: 'Services', href: '/#services', path: '/#services' },
    { name: 'Contact', href: '/#contact', path: '/#contact' },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    if (href.startsWith('/#')) {
      const targetId = href.replace('/#', '');
      if (location.pathname !== '/') {
        window.location.href = href;
      } else {
        const elem = document.getElementById(targetId);
        if (elem) {
          elem.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 sm:px-6 lg:px-8 py-3 sm:py-4">
      <div
        className={`max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 py-2.5 sm:py-3 rounded-full transition-all duration-300 ${
          isScrolled
            ? 'bg-light-surface/80 dark:bg-dark-surface/80 backdrop-blur-xl border border-light-border dark:border-dark-border shadow-lg shadow-black/5 dark:shadow-black/20'
            : 'bg-transparent border border-transparent'
        }`}
      >
        {/* Brand Wordmark */}
        <Link
          to="/"
          className="flex items-center gap-2 group text-neutral-900 dark:text-neutral-100 focus-visible:outline-none"
          aria-label="Anoop Danimon Home"
        >
          <span className="font-black text-lg tracking-tighter uppercase transition-colors group-hover:text-accent">
            {content.hero.wordmark}
          </span>
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 lg:gap-2" aria-label="Main Navigation">
          {navLinks.map((link) => {
            const isActive =
              link.path === '/work'
                ? location.pathname.startsWith('/work')
                : location.pathname === '/' && !location.hash;

            return (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  if (link.href.startsWith('/#')) {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }
                }}
                className={`px-3 py-1.5 rounded-full text-xs lg:text-sm font-medium transition-all duration-200 ${
                  isActive
                    ? 'text-neutral-950 dark:text-white bg-black/5 dark:bg-white/10'
                    : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-950 dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/5'
                }`}
              >
                {link.name}
              </a>
            );
          })}
        </nav>

        {/* Action Controls & CTA */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Status Badge (Desktop) */}
          <div className="hidden xl:flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium border border-light-border dark:border-dark-border bg-black/5 dark:bg-white/5 text-neutral-700 dark:text-neutral-300">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
            </span>
            <span>{content.hero.statusText}</span>
          </div>

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full border border-light-border dark:border-dark-border bg-light-surface dark:bg-dark-surface text-neutral-700 dark:text-neutral-300 hover:text-accent hover:border-accent/40 transition-colors focus-visible:outline-none"
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
          >
            {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>

          {/* Contact CTA Button */}
          <a
            href="/#contact"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('/#contact');
            }}
            className="hidden sm:inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-neutral-900 text-white dark:bg-white dark:text-neutral-950 hover:bg-accent hover:text-black dark:hover:bg-accent dark:hover:text-black transition-all duration-200 shadow-sm"
          >
            <span>Let's Talk</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>

          {/* Mobile Hamburger Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-full border border-light-border dark:border-dark-border bg-light-surface dark:bg-dark-surface text-neutral-800 dark:text-neutral-200 hover:text-accent"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.2 }}
            className="md:hidden mt-2 p-5 rounded-2xl bg-light-surface dark:bg-dark-surface border border-light-border dark:border-dark-border shadow-2xl backdrop-blur-2xl"
          >
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    if (link.href.startsWith('/#')) {
                      e.preventDefault();
                      handleNavClick(link.href);
                    } else {
                      setMobileMenuOpen(false);
                    }
                  }}
                  className="px-3 py-2 rounded-xl text-base font-medium text-neutral-800 dark:text-neutral-200 hover:bg-black/5 dark:hover:bg-white/5 hover:text-accent transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-3 border-t border-light-border dark:border-dark-border flex items-center justify-between">
                <span className="text-xs text-neutral-500 flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-accent"></span>
                  {content.hero.statusText}
                </span>
                <a
                  href="/#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick('/#contact');
                  }}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider bg-accent text-black"
                >
                  <span>Let's Talk</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
