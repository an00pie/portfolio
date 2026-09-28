import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Hero } from '../components/Hero';
import { SelectedWork } from '../components/SelectedWork';
import { About } from '../components/About';
import { Services } from '../components/Services';
import { RecognitionStrip } from '../components/RecognitionStrip';
import { Contact } from '../components/Contact';

export const HomePage: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location]);

  return (
    <main className="space-y-4">
      <Hero />
      <SelectedWork />
      <About />
      <Services />
      <RecognitionStrip />
      <Contact />
    </main>
  );
};
