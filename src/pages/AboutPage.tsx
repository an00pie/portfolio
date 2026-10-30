import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { content } from '../data/content';
import { Services } from '../components/Services';

export const AboutPage: React.FC = () => (
  <main id="main-content" className="editorial-page about-page">
    <header className="about-portrait">
      <img src={content.about.portrait} alt="Anoop’s illustrated GitHub profile image" />
      <span className="signature">Anoop</span>
      <p>
        Data science student.
        <br />
        Front-end developer.
        <br />
        Always curious.
      </p>
    </header>
    <div className="about-column">
      <section className="about-introduction">
        <h1>About</h1>
        <p className="about-lead">{content.hero.intro}</p>
        <p>{content.about.summary}</p>
        <a
          className="text-link"
          href={content.about.resumeUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          View résumé <ArrowUpRight size={14} />
        </a>
      </section>
      <section id="experience" className="about-section">
        <h2>
          Experience
          <br />& community
        </h2>
        <div className="experience-list">
          {content.about.roles.map((role) => (
            <article key={role.title}>
              <h3>{role.title}</h3>
              <p className="experience-organization">{role.organization}</p>
              <p>{role.description}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="about-section">
        <h2>A work in progress.</h2>
        <div className="education-detail">
          <h3>{content.about.education.degree}</h3>
          <p>{content.about.education.institution}</p>
          <p>
            {content.about.education.specialization}
            <br />
            {content.about.education.years} · {content.about.education.location}
          </p>
        </div>
      </section>
      <section id="approach" className="about-section">
        <h2>
          Clarity, purpose
          <br />& character.
        </h2>
        {content.about.bioParagraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </section>
      <Services />
      <section className="about-section recognition-list">
        <h2>A few milestones.</h2>
        {content.recognition.map((recognition) => (
          <p key={recognition}>{recognition}</p>
        ))}
      </section>
      <Link className="editorial-next" to="/contact">
        Have something in mind?
        <span>
          Let’s talk <ArrowUpRight size={18} />
        </span>
      </Link>
    </div>
  </main>
);
