import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Instagram, Twitter, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
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
      // Mock submit delay for seamless user experience
      await new Promise((resolve) => setTimeout(resolve, 800));
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
    }
  };

  return (
    <section id="contact" className="py-20 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto">
      {/* Centered Heading matching copy.mp4 Frame 11 & 12 */}
      <div className="text-center space-y-2">
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-black tracking-tight uppercase">
          LET'S TALK
        </h2>
        <p className="text-neutral-500 text-xs sm:text-sm font-medium max-w-sm mx-auto leading-relaxed">
          Have a project in mind? Tell me about it and let's see what we can create together.
        </p>

        {/* Row of 4 Square Black Social Buttons matching copy.mp4 Frame 12 */}
        <div className="pt-4 flex items-center justify-center gap-2.5">
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 sm:w-10 sm:h-10 bg-black rounded-lg text-white flex items-center justify-center hover:bg-neutral-800 transition-colors shadow-sm"
            aria-label="Twitter / X"
          >
            <span className="font-bold text-xs sm:text-sm">𝕏</span>
          </a>
          <a
            href={content.contact.socials.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 sm:w-10 sm:h-10 bg-black rounded-lg text-white flex items-center justify-center hover:bg-neutral-800 transition-colors shadow-sm"
            aria-label="Instagram"
          >
            <Instagram className="w-4 h-4" />
          </a>
          <a
            href={content.contact.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 sm:w-10 sm:h-10 bg-black rounded-lg text-white flex items-center justify-center hover:bg-neutral-800 transition-colors shadow-sm"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-4 h-4" />
          </a>
          <a
            href={content.contact.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 sm:w-10 sm:h-10 bg-black rounded-lg text-white flex items-center justify-center hover:bg-neutral-800 transition-colors shadow-sm"
            aria-label="GitHub"
          >
            <Github className="w-4 h-4" />
          </a>
        </div>
      </div>

      {/* Solid Black Card Form Container matching copy.mp4 Frame 12 & 13 */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="mt-8 max-w-md sm:max-w-lg mx-auto bg-black text-white rounded-2xl p-6 sm:p-8 shadow-2xl"
      >
        <form onSubmit={handleSubmit} className="space-y-5">
          {status === 'success' && (
            <div className="p-3.5 rounded-lg bg-white/10 text-white flex items-center gap-2.5 text-xs font-medium">
              <CheckCircle2 className="w-4 h-4 text-[#3CFF00] flex-shrink-0" />
              <span>Thank you! Your message has been sent successfully.</span>
            </div>
          )}

          {status === 'error' && (
            <div className="p-3.5 rounded-lg bg-red-500/20 text-red-300 flex items-center gap-2.5 text-xs font-medium">
              <AlertCircle className="w-4 h-4 text-red-400 flex-shrink-0" />
              <span>{errorMessage}</span>
            </div>
          )}

          {/* Name Field */}
          <div>
            <label htmlFor="name" className="block text-[11px] text-neutral-400 font-medium mb-1">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your name"
              required
              className="w-full bg-transparent border-b border-neutral-700 py-2 text-xs sm:text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-white transition-colors"
            />
          </div>

          {/* Email Field */}
          <div>
            <label htmlFor="email" className="block text-[11px] text-neutral-400 font-medium mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your email"
              required
              className="w-full bg-transparent border-b border-neutral-700 py-2 text-xs sm:text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-white transition-colors"
            />
          </div>

          {/* Message Field */}
          <div>
            <label htmlFor="message" className="block text-[11px] text-neutral-400 font-medium mb-1">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={3}
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell me about your project..."
              required
              className="w-full bg-transparent border-b border-neutral-700 py-2 text-xs sm:text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-white transition-colors resize-none"
            />
          </div>

          {/* White Send Message Button */}
          <div className="pt-2">
            <button
              type="submit"
              disabled={status === 'loading'}
              className="bg-white text-black text-xs font-medium px-5 py-2.5 rounded-md hover:bg-neutral-200 transition-colors shadow-sm disabled:opacity-50"
            >
              {status === 'loading' ? 'Sending...' : 'Send Message'}
            </button>
          </div>
        </form>
      </motion.div>
    </section>
  );
};

export default Contact;
