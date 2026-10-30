import React, { useLayoutEffect } from 'react';
import { Routes, Route, useLocation, Navigate } from 'react-router-dom';
import { motion, MotionConfig, useReducedMotion } from 'framer-motion';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { WorkPage } from './pages/WorkPage';
import { CaseStudyPage } from './pages/CaseStudyPage';
import { GalleryPage } from './pages/GalleryPage';
import { AboutPage } from './pages/AboutPage';
import { Contact } from './components/Contact';
import { NotFoundPage } from './pages/NotFoundPage';

export const App: React.FC = () => {
  const location = useLocation();
  const reducedMotion = useReducedMotion();
  const isHome = location.pathname === '/';

  useLayoutEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
    const titles: Record<string, string> = {
      '/': 'Anoop Danimon — AI, code & creative work',
      '/work': 'The Work — Anoop Danimon',
      '/personal-gallery': 'The Collection — Anoop Danimon',
      '/about': 'About — Anoop Danimon',
      '/contact': 'Contact — Anoop Danimon',
    };
    document.title = titles[location.pathname] || 'Case Study — Anoop Danimon';
    if (location.hash) {
      const timer = window.setTimeout(
        () =>
          document
            .getElementById(location.hash.slice(1))
            ?.scrollIntoView({ behavior: reducedMotion ? 'instant' : 'smooth' }),
        650,
      );
      return () => window.clearTimeout(timer);
    }
  }, [location.pathname, location.hash, reducedMotion]);

  return (
    <MotionConfig reducedMotion="user" transition={{ ease: [0.22, 1, 0.36, 1] }}>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <Navbar />
      <div className={isHome ? 'site-shell site-shell--home' : 'site-shell'}>
        <motion.div
          key={location.pathname}
          initial={reducedMotion ? false : { opacity: 0.6, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: reducedMotion ? 0 : 0.2 }}
        >
          <Routes location={location}>
            <Route path="/" element={<HomePage />} />
            <Route path="/work" element={<WorkPage />} />
            <Route path="/work/:slug" element={<CaseStudyPage />} />
            <Route path="/personal-gallery" element={<GalleryPage />} />
            <Route path="/gallery" element={<Navigate to="/personal-gallery" replace />} />
            <Route path="/about" element={<AboutPage />} />
            <Route
              path="/contact"
              element={
                <main id="main-content" className="editorial-page contact-page">
                  <Contact />
                </main>
              }
            />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </motion.div>
        {!isHome && <Footer />}
      </div>
      {!reducedMotion && (
        <motion.div
          key={`curtain-${location.pathname}`}
          className="page-curtain"
          initial={{ scaleY: 1 }}
          animate={{ scaleY: 0 }}
          transition={{ duration: 0.85, delay: 0.12, ease: [0.76, 0, 0.24, 1] }}
          aria-hidden="true"
        >
          <span className="signature">Anoop</span>
        </motion.div>
      )}
    </MotionConfig>
  );
};

export default App;
