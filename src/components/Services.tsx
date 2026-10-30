import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import { content } from '../data/content';

export const Services: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  return (
    <section className="about-section services-section">
      <h2>
        What I bring
        <br />
        to the table.
      </h2>
      <div className="services-list">
        {content.services.map((service, index) => (
          <div
            className={`service-row ${openIndex === index ? 'is-open' : ''}`}
            key={service.title}
          >
            <h3>
              <button
                aria-expanded={openIndex === index}
                aria-controls={`service-${index}`}
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                {service.title}
                {openIndex === index ? <Minus size={16} /> : <Plus size={16} />}
              </button>
            </h3>
            <AnimatePresence initial={false}>
              {openIndex === index && (
                <motion.div
                  id={`service-${index}`}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="service-description"
                >
                  <p>{service.description}</p>
                  <p className="service-tags">{service.tags.join(' / ')}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  );
};
export default Services;
