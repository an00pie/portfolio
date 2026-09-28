import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Send, Github, Linkedin, Instagram, MapPin, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';
import { content } from '../data/content';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus('error');
      setErrorMessage('Please fill in all fields before sending.');
      return;
    }

    setStatus('loading');
    setErrorMessage('');

    const endpoint = import.meta.env.VITE_FORMSPREE_ENDPOINT;

    // Check if real Formspree endpoint is configured
    if (endpoint && !endpoint.includes('YOUR_FORM_ID')) {
      try {
        const res = await fetch(endpoint, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
          body: JSON.stringify(formData),
        });

        if (res.ok) {
          setStatus('success');
          setFormData({ name: '', email: '', message: '' });
        } else {
          const data = await res.json().catch(() => ({}));
          throw new Error(data.error || 'Failed to submit form.');
        }
      } catch (err: any) {
        setStatus('error');
        setErrorMessage(err.message || 'Something went wrong. Please email me directly.');
      }
    } else {
      // Graceful local simulation / mock for development
      await new Promise((resolve) => setTimeout(resolve, 800));
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
    }
  };

  return (
    <section id="contact" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="pb-12 border-b border-light-border dark:border-dark-border">
        <span className="text-xs font-mono uppercase tracking-[0.25em] text-accent font-semibold">
          GET IN TOUCH // COLLABORATE
        </span>
        <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-neutral-900 dark:text-neutral-50">
          {content.contact.heading}
        </h2>
        <p className="mt-3 text-neutral-600 dark:text-neutral-400 text-base sm:text-lg leading-relaxed max-w-2xl">
          {content.contact.subheading}
        </p>
      </div>

      <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Column: Direct Info & Social Channels */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "300px 0px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="lg:col-span-5 space-y-8"
        >
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-neutral-900 dark:text-neutral-100">
              Direct Contact
            </h3>
            <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
              Feel free to reach out directly via email or connect on LinkedIn and GitHub for open source collaborations, hackathon builds, and data science projects.
            </p>
          </div>

          <div className="space-y-3">
            <a
              href={`mailto:${content.contact.email}`}
              className="flex items-center gap-3 p-4 rounded-2xl border border-light-border dark:border-dark-border bg-light-surface dark:bg-dark-surface hover:border-accent/40 hover:text-accent transition-all duration-200 group"
            >
              <div className="p-2.5 rounded-xl bg-accent/10 text-accent group-hover:scale-110 transition-transform">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs text-neutral-500 font-mono">Email Address</p>
                <p className="text-sm sm:text-base font-semibold text-neutral-900 dark:text-neutral-100 group-hover:text-accent">
                  {content.contact.email}
                </p>
              </div>
            </a>

            <div className="flex items-center gap-3 p-4 rounded-2xl border border-light-border dark:border-dark-border bg-light-surface dark:bg-dark-surface">
              <div className="p-2.5 rounded-xl bg-black/5 dark:bg-white/5 text-neutral-500">
                <MapPin className="w-5 h-5 text-accent" />
              </div>
              <div>
                <p className="text-xs text-neutral-500 font-mono">Location</p>
                <p className="text-sm sm:text-base font-semibold text-neutral-900 dark:text-neutral-100">
                  {content.contact.location}
                </p>
              </div>
            </div>
          </div>

          {/* Social Profiles */}
          <div className="space-y-3 pt-2">
            <h4 className="text-xs font-mono uppercase tracking-wider text-neutral-500">
              Social Profiles &amp; Code
            </h4>
            <div className="flex flex-wrap gap-3">
              <a
                href={content.contact.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl border border-light-border dark:border-dark-border bg-light-surface dark:bg-dark-surface text-neutral-800 dark:text-neutral-200 hover:text-accent hover:border-accent/40 transition-colors text-sm font-medium"
              >
                <Github className="w-4 h-4" />
                <span>GitHub</span>
              </a>

              <a
                href={content.contact.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl border border-light-border dark:border-dark-border bg-light-surface dark:bg-dark-surface text-neutral-800 dark:text-neutral-200 hover:text-accent hover:border-accent/40 transition-colors text-sm font-medium"
              >
                <Linkedin className="w-4 h-4" />
                <span>LinkedIn</span>
              </a>

              <a
                href={content.contact.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl border border-light-border dark:border-dark-border bg-light-surface dark:bg-dark-surface text-neutral-800 dark:text-neutral-200 hover:text-accent hover:border-accent/40 transition-colors text-sm font-medium"
              >
                <Instagram className="w-4 h-4" />
                <span>Instagram</span>
              </a>
            </div>
          </div>
        </motion.div>

        {/* Right Column: Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "300px 0px" }}
          transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="lg:col-span-7"
        >
          <form
            onSubmit={handleSubmit}
            className="p-6 sm:p-8 rounded-3xl border border-light-border dark:border-dark-border bg-light-surface dark:bg-dark-surface shadow-2xl space-y-6"
          >
            {status === 'success' && (
              <div className="p-4 rounded-2xl bg-accent/10 border border-accent/30 text-neutral-900 dark:text-neutral-100 flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <div className="text-sm">
                  <p className="font-bold text-accent">Message transmitted successfully!</p>
                  <p className="text-neutral-600 dark:text-neutral-300 mt-1">
                    Thank you for reaching out. I'll review your note and get back to you shortly.
                  </p>
                </div>
              </div>
            )}

            {status === 'error' && (
              <div className="p-4 rounded-2xl bg-red-500/10 border border-red-500/30 text-red-500 flex items-start gap-3">
                <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <p className="text-sm font-medium">{errorMessage}</p>
              </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Name */}
              <div className="space-y-2">
                <label htmlFor="name" className="block text-xs font-mono uppercase tracking-wider text-neutral-700 dark:text-neutral-300">
                  Your Name <span className="text-accent">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Anoop Dani"
                  className="w-full px-4 py-3 rounded-xl border border-light-border dark:border-dark-border bg-black/5 dark:bg-white/5 text-neutral-900 dark:text-white placeholder:text-neutral-500 focus:border-accent focus:bg-transparent transition-colors text-sm"
                />
              </div>

              {/* Email */}
              <div className="space-y-2">
                <label htmlFor="email" className="block text-xs font-mono uppercase tracking-wider text-neutral-700 dark:text-neutral-300">
                  Email Address <span className="text-accent">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="your.email@domain.com"
                  className="w-full px-4 py-3 rounded-xl border border-light-border dark:border-dark-border bg-black/5 dark:bg-white/5 text-neutral-900 dark:text-white placeholder:text-neutral-500 focus:border-accent focus:bg-transparent transition-colors text-sm"
                />
              </div>
            </div>

            {/* Message */}
            <div className="space-y-2">
              <label htmlFor="message" className="block text-xs font-mono uppercase tracking-wider text-neutral-700 dark:text-neutral-300">
                Project Details or Message <span className="text-accent">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="Tell me about your project, idea, or role..."
                className="w-full px-4 py-3 rounded-xl border border-light-border dark:border-dark-border bg-black/5 dark:bg-white/5 text-neutral-900 dark:text-white placeholder:text-neutral-500 focus:border-accent focus:bg-transparent transition-colors text-sm resize-none"
              />
            </div>

            {/* Submit CTA */}
            <button
              type="submit"
              disabled={status === 'loading'}
              className="w-full py-4 rounded-xl text-sm font-bold uppercase tracking-wider bg-neutral-900 text-white dark:bg-white dark:text-neutral-950 hover:bg-accent hover:text-black dark:hover:bg-accent dark:hover:text-black transition-all duration-300 shadow-md flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed group"
            >
              {status === 'loading' ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin text-accent" />
                  <span>Transmitting...</span>
                </>
              ) : (
                <>
                  <span>Send Message</span>
                  <Send className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </>
              )}
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};
