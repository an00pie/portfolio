import React, { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import {
  House,
  BriefcaseBusiness,
  UserRound,
  MessageSquare,
  ArrowUpRight,
  Layers,
  GraduationCap,
  Infinity as InfinityIcon,
} from 'lucide-react';
import { content } from '../data/content';
import { LocalTime } from './Footer';

export const Navbar: React.FC = () => {
  const [panel, setPanel] = useState<'work' | 'about' | 'contact' | null>(null);
  const [homeDock, setHomeDock] = useState(false);
  const location = useLocation();
  const headerRef = useRef<HTMLElement>(null);
  const isHome = location.pathname === '/';
  const closeTimer = useRef<ReturnType<typeof setTimeout>>();

  useEffect(() => {
    setPanel(null);
    setHomeDock(false);
  }, [location.pathname]);
  useEffect(() => {
    const close = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setPanel(null);
        (headerRef.current?.querySelector('[aria-expanded="true"]') as HTMLElement)?.focus();
      }
    };
    const outside = (event: PointerEvent) => {
      if (!headerRef.current?.contains(event.target as Node)) setPanel(null);
    };
    window.addEventListener('keydown', close);
    window.addEventListener('pointerdown', outside);
    return () => {
      window.removeEventListener('keydown', close);
      window.removeEventListener('pointerdown', outside);
      clearTimeout(closeTimer.current);
    };
  }, []);

  const enter = (next: typeof panel) => {
    clearTimeout(closeTimer.current);
    setPanel(next);
  };
  const leave = () => {
    closeTimer.current = setTimeout(() => {
      setPanel(null);
      setHomeDock(false);
    }, 220);
  };

  return (
    <>
      {isHome && (
        <button
          className="home-menu-reveal"
          aria-label="Open navigation"
          onClick={() => setHomeDock(true)}
          onPointerEnter={() => setHomeDock(true)}
        >
          <span />
          <span />
        </button>
      )}
      <motion.header
        ref={headerRef}
        onFocusCapture={() => { if (isHome) setHomeDock(true); }}
        className={`navigation-dock ${isHome && !homeDock ? 'navigation-dock--hidden' : ''}`}
        onPointerEnter={() => clearTimeout(closeTimer.current)}
        onPointerLeave={leave}
        onBlur={(event) => {
          if (!event.currentTarget.contains(event.relatedTarget)) {
            setPanel(null);
            setHomeDock(false);
          }
        }}
        animate={{ height: panel ? (panel === 'contact' ? 240 : 216) : 54 }}
        transition={{ duration: 0.45 }}
      >
        <nav className="dock-icons" aria-label="Main navigation">
          <Link
            to="/"
            className={`dock-icon ${isHome ? 'is-current' : ''}`}
            aria-label="Home"
            onPointerEnter={() => enter(null)}
          >
            <House size={15} strokeWidth={1.6} />
          </Link>
          {[
            { id: 'work' as const, label: 'Work and collection', Icon: BriefcaseBusiness },
            { id: 'about' as const, label: 'About Anoop', Icon: UserRound },
            { id: 'contact' as const, label: 'Get in touch', Icon: MessageSquare },
          ].map(({ id, label, Icon }) => (
            <button
              key={id}
              className={`dock-icon ${panel === id || (panel === null && location.pathname.startsWith('/' + id)) ? 'is-current' : ''}`}
              aria-label={label}
              aria-expanded={panel === id}
              aria-controls={`nav-${id}`}
              onPointerEnter={(event) => {
                if (event.pointerType === 'mouse') enter(id);
              }}
              onClick={() => enter(id)}
            >
              <Icon size={15} strokeWidth={1.6} />
            </button>
          ))}
        </nav>
        <AnimatePresence mode="wait">
          {panel && (
            <motion.div
              key={panel}
              id={`nav-${panel}`}
              className="dock-panel"
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -5 }}
              transition={{ duration: 0.18 }}
            >
              {panel === 'work' && (
                <div className="dock-links">
                  <Link to="/work">
                    <span className="nav-thumbnail">
                      <img src="/images/thuzhayan.svg" alt="" />
                    </span>
                    <span>
                      Selected work <ArrowUpRight size={12} />
                    </span>
                  </Link>
                  <Link to="/personal-gallery">
                    <span className="nav-thumbnail nav-thumbnail--second">
                      <img src="/images/studies/field-notes.svg" alt="" />
                    </span>
                    <span>
                      Personal collection <ArrowUpRight size={12} />
                    </span>
                  </Link>
                </div>
              )}
              {panel === 'about' && (
                <div className="dock-links">
                  <Link to="/about">
                    <span className="nav-avatar">
                      <img src={content.about.portrait} alt="" />
                    </span>
                    <span>
                      About <ArrowUpRight size={12} />
                    </span>
                  </Link>
                  <Link to="/about#experience">
                    <GraduationCap size={16} />
                    <span>Experience</span>
                  </Link>
                  <Link to="/about#approach">
                    <InfinityIcon size={16} />
                    <span>My approach</span>
                  </Link>
                </div>
              )}
              {panel === 'contact' && (
                <div className="dock-contact">
                  <p>
                    Local time: <LocalTime seconds />
                  </p>
                  <p className="dock-status">
                    Based in Kerala.
                    <br />
                    Open to interesting collaborations.
                  </p>
                  <Link className="dock-contact-button" to="/contact">
                    Message me <ArrowUpRight size={13} />
                  </Link>
                  <a href={`mailto:${content.contact.email}`} className="dock-email">
                    {content.contact.email}
                  </a>
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  );
};

export default Navbar;
