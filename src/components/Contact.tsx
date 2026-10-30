import React, { useState } from 'react';
import { ArrowUpRight, Github, Instagram, Linkedin, Loader2, Check, Copy } from 'lucide-react';
import { content } from '../data/content';

export const Contact: React.FC = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error' | 'email'>('idle');
  const [error, setError] = useState('');
  const [copied, setCopied] = useState(false);
  const endpoint = import.meta.env.VITE_FORMSPREE_ENDPOINT;
  const configured = endpoint && !endpoint.includes('YOUR_FORM_ID');
  const emailDraft = `mailto:${content.contact.email}?subject=${encodeURIComponent(`Portfolio enquiry from ${form.name}`)}&body=${encodeURIComponent(`Hi Anoop,\n\n${form.message}\n\n${form.name}\n${form.email}`)}`;

  const submit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setError('Please fill in your name, email, and message.');
      setStatus('error');
      return;
    }
    if (!configured) {
      setStatus('email');
      window.location.href = emailDraft;
      return;
    }
    setStatus('loading');
    setError('');
    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(form),
        signal: AbortSignal.timeout(15000),
      });
      if (!response.ok)
        throw new Error('Your message couldn’t be sent. Please try again or email me directly.');
      setStatus('success');
      setForm({ name: '', email: '', message: '' });
    } catch (reason) {
      setStatus('error');
      setError(
        reason instanceof Error && reason.name === 'TimeoutError'
          ? 'The request took too long. Please try again or email me directly.'
          : 'Your message couldn’t be sent. Please try again or email me directly.',
      );
    }
  };
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(content.contact.email);
      setCopied(true);
    } catch {
      setCopied(false);
    }
  };
  return (
    <section id="contact" className="contact-content">
      <header className="page-heading">
        <h1>
          Let’s make
          <br />
          something good.
        </h1>
        <p>{content.contact.subheading}</p>
      </header>
      <div className="contact-details">
        <a href={`mailto:${content.contact.email}`}>
          {content.contact.email}
          <ArrowUpRight size={14} />
        </a>
        <button aria-label={copied ? 'Email address copied' : 'Copy email address'} onClick={copy}>
          {copied ? <Check size={14} /> : <Copy size={14} />}
        </button>
      </div>
      <div className="contact-socials">
        {[
          { href: content.contact.socials.github, label: 'GitHub', Icon: Github },
          { href: content.contact.socials.linkedin, label: 'LinkedIn', Icon: Linkedin },
          { href: content.contact.socials.instagram, label: 'Instagram', Icon: Instagram },
        ].map(({ href, label, Icon }) => (
          <a href={href} key={label} target="_blank" rel="noopener noreferrer" aria-label={label}>
            <Icon size={15} strokeWidth={1.5} />
          </a>
        ))}
      </div>
      <form className="contact-form" onSubmit={submit}>
        <p className="form-note">A good conversation is a good place to start.</p>
        <label htmlFor="name">
          Your name
          <input
            autoComplete="name"
            id="name"
            name="name"
            value={form.name}
            onChange={(event) => setForm({ ...form, name: event.target.value })}
            required
            maxLength={120}
            placeholder="How should I call you?"
          />
        </label>
        <label htmlFor="email">
          Email address
          <input
            autoComplete="email"
            id="email"
            name="email"
            type="email"
            value={form.email}
            onChange={(event) => setForm({ ...form, email: event.target.value })}
            required
            maxLength={254}
            placeholder="you@example.com"
          />
        </label>
        <label htmlFor="message">
          What’s on your mind?
          <textarea
            id="message"
            name="message"
            value={form.message}
            onChange={(event) => setForm({ ...form, message: event.target.value })}
            required
            maxLength={5000}
            rows={4}
            placeholder="A project, a collaboration, or just a hello…"
          />
        </label>
        <div className="form-status" aria-live="polite" aria-atomic="true">
          {status === 'success' && <p>Thank you. Your message has been sent!</p>}
          {status === 'error' && (
            <p role="alert">
              {error} <a href={`mailto:${content.contact.email}`}>Email Anoop</a>
            </p>
          )}
          {status === 'email' && (
            <p>
              Your email draft is ready. Send it from your email app.{' '}
              <a href={emailDraft}>Open draft again</a>
            </p>
          )}
        </div>
        <button className="send-button" type="submit" disabled={status === 'loading'}>
          {status === 'loading' ? (
            <>
              <Loader2 size={14} className="loading-spinner" />
              Sending
            </>
          ) : (
            <>
              {configured ? 'Send message' : 'Compose email'}
              <ArrowUpRight size={15} />
            </>
          )}
        </button>
        {!configured && (
          <p className="email-disclosure">
            Opens your email app with your message. Prefer another app? Copy the address above.
          </p>
        )}
      </form>
    </section>
  );
};
export default Contact;
