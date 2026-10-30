import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, MoveHorizontal, Pause, Play } from 'lucide-react';
import { useReducedMotion } from 'framer-motion';
import { content } from '../data/content';
import { galleryItems } from '../data/gallery';

const collection = [
  {
    image: '/images/projects/zoltraak.webp',
    title: 'Zoltraak',
    detail: 'AIBhoomi · EV routing & charging',
    to: '/work/zoltraak',
    ratio: 'landscape',
  },
  {
    image: galleryItems[0].image,
    title: galleryItems[0].title,
    detail: 'Poster · Campus & events',
    to: '/personal-gallery#kinetic-art',
    ratio: 'portrait',
  },
  {
    image: '/images/projects/bus-sahayi.webp',
    title: 'Bus Sahayi',
    detail: 'Annavandi · Public transit, rethought',
    to: '/work/bus-sahayi',
    ratio: 'landscape',
  },
  {
    image: galleryItems[1].image,
    title: galleryItems[1].title,
    detail: 'Poster · Celebrations',
    to: '/personal-gallery#ramadan-kareem',
    ratio: 'portrait',
  },
  {
    image: '/images/projects/delta.webp',
    title: 'DELTA',
    detail: 'The association, online',
    to: '/work/delta',
    ratio: 'landscape',
  },
  {
    image: '/images/projects/chargeahead.webp',
    title: 'ChargeAhead',
    detail: 'Zephyrus · Charging confidence',
    to: '/work/zephyrus',
    ratio: 'landscape',
  },
  {
    image: '/images/projects/retail-customer-intelligence.webp',
    title: 'INSIGHT.arc',
    detail: 'Semester project · Retail intelligence',
    to: '/work/retail-customer-intelligence',
    ratio: 'landscape',
  },
  {
    image: galleryItems[5].image,
    title: galleryItems[5].title,
    detail: 'Poster · Awareness',
    to: '/personal-gallery#environment-day',
    ratio: 'portrait',
  },
];

export const Hero: React.FC = () => {
  const stage = useRef<HTMLDivElement>(null);
  const wake = useRef<() => void>(() => {});
  const planes = useRef<(HTMLAnchorElement | null)[]>([]);
  const motion = useRef({
    angle: 0,
    target: 0,
    pointerX: 0,
    pointerY: 0,
    x: 0,
    y: 0,
    dragStart: 0,
    dragStartY: 0,
    dragAngle: 0,
    pointerId: -1,
    captureElement: null as HTMLElement | null,
    lastInteraction: 0,
    hovering: false,
    dragging: false,
    moved: false,
  });
  const reducedMotion = useReducedMotion();
  const [paused, setPaused] = useState(false);
  const [dragging, setDragging] = useState(false);

  useEffect(() => {
    let frame = 0;
    let previous = performance.now();
    let visible = true;
    const render = (now: number) => {
      frame = 0;
      const dt = Math.min(now - previous, 50);
      previous = now;
      const state = motion.current;
      if (visible && stage.current) {
        const width = stage.current.clientWidth;
        const height = stage.current.clientHeight;
        const mobile = width < 700;
        if (!paused && !reducedMotion && !state.dragging && !state.hovering && now - state.lastInteraction > 1200)
          state.target += dt * 0.000018;
        const easing = 1 - Math.exp(-dt / (state.dragging ? 35 : 150));
        state.angle += (state.target - state.angle) * (reducedMotion ? 1 : easing);
        state.x += (state.pointerX - state.x) * (1 - Math.exp(-dt / 220));
        state.y += (state.pointerY - state.y) * (1 - Math.exp(-dt / 220));
        planes.current.forEach((plane, index) => {
          if (!plane) return;
          const angle = index * ((Math.PI * 2) / collection.length) + state.angle + 0.26;
          const x = Math.sin(angle) * width * (mobile ? 0.74 : 0.56) + state.x * (mobile ? 12 : 46);
          const y = (index % 2 === 0 ? -1 : 1) * height * (mobile ? 0.25 : 0.27) +
            Math.sin(angle * 2 + index) * height * 0.055 + state.y * 20;
          const z = Math.cos(angle) * (mobile ? 120 : 240) - 180;
          const rotation = Math.sin(angle) * -32;
          plane.style.transform = `translate3d(${x}px, ${y}px, ${z}px) rotateY(${rotation}deg) rotateX(${Math.sin(index * 1.7) * 7 - state.y * 3}deg) rotateZ(${Math.sin(angle + index) * 4}deg)`;
          plane.style.zIndex = String(Math.round(z + 500));
        });
      }
      const unsettled =
        Math.abs(state.target - state.angle) > 0.0001 ||
        Math.abs(state.pointerX - state.x) > 0.001 ||
        Math.abs(state.pointerY - state.y) > 0.001;
      if (visible && ((!paused && !reducedMotion) || state.dragging || unsettled))
        frame = requestAnimationFrame(render);
    };
    wake.current = () => {
      if (!frame && visible) frame = requestAnimationFrame(render);
    };
    wake.current();
    const observer = new ResizeObserver(() => wake.current());
    if (stage.current) observer.observe(stage.current);
    const visibility = () => {
      visible = !document.hidden;
      if (visible) wake.current();
      else {
        cancelAnimationFrame(frame);
        frame = 0;
      }
    };
    document.addEventListener('visibilitychange', visibility);
    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
      wake.current = () => {};
      document.removeEventListener('visibilitychange', visibility);
    };
  }, [paused, reducedMotion]);

  const finishDrag = (event: React.PointerEvent<HTMLDivElement>) => {
    const state = motion.current;
    if (event.pointerId !== state.pointerId) return;
    state.dragging = false;
    state.pointerId = -1;
    state.lastInteraction = performance.now();
    if (state.captureElement?.hasPointerCapture(event.pointerId))
      state.captureElement.releasePointerCapture(event.pointerId);
    state.captureElement = null;
    setDragging(false);
    wake.current();
  };

  return (
    <section
      className={`floating-room ${dragging ? 'is-dragging' : ''}`}
      aria-label="Anoop Danimon’s interactive project collection"
    >
      <h1 className="sr-only">
        {content.hero.name} — {content.hero.role}
      </h1>
      <div
        className="room-canvas"
        ref={stage}
        onPointerMove={(event) => {
          const state = motion.current;
          if (state.pointerId === event.pointerId) {
            const delta = event.clientX - state.dragStart;
            if (!state.dragging && Math.hypot(delta, event.clientY - state.dragStartY) > 7) {
              state.dragging = true;
              state.moved = true;
              state.hovering = false;
              state.captureElement?.setPointerCapture(event.pointerId);
              setDragging(true);
            }
            if (state.dragging) state.target = state.dragAngle + delta * 0.0035;
          }
          if (!reducedMotion && state.pointerId === -1 && event.pointerType === 'mouse') {
            state.pointerX = (event.clientX / window.innerWidth) * 2 - 1;
            state.pointerY = (event.clientY / window.innerHeight) * 2 - 1;
          }
          wake.current();
        }}
        onPointerDown={(event) => {
          if (event.button !== 0 || !event.isPrimary) return;
          const state = motion.current;
          state.pointerId = event.pointerId;
          state.captureElement = event.target instanceof Element
            ? event.target.closest<HTMLElement>('a') || event.currentTarget
            : event.currentTarget;
          state.dragging = false;
          state.moved = false;
          state.dragStart = event.clientX;
          state.dragStartY = event.clientY;
          state.dragAngle = state.angle;
          state.target = state.angle;
          state.lastInteraction = performance.now();
          wake.current();
        }}
        onPointerUp={finishDrag}
        onPointerCancel={finishDrag}
        onLostPointerCapture={finishDrag}
        onPointerLeave={() => {
          if (motion.current.dragging) return;
          motion.current.pointerId = -1;
          motion.current.hovering = false;
          motion.current.pointerX = 0;
          motion.current.pointerY = 0;
          setDragging(false);
          wake.current();
        }}
        onClickCapture={(event) => {
          if (event.detail !== 0 && motion.current.moved) {
            event.preventDefault();
            event.stopPropagation();
            motion.current.moved = false;
          }
        }}
        onWheel={(event) => {
          if (!reducedMotion) {
             motion.current.target += (event.deltaY + event.deltaX) * 0.0006;
            motion.current.lastInteraction = performance.now();
            wake.current();
          }
        }}
      >
        <div className="room-perspective">
          {collection.map((item, index) => (
            <Link
              ref={(element) => {
                planes.current[index] = element;
              }}
              key={item.title}
              to={item.to}
              className={`floating-plane floating-plane--${item.ratio}`}
              aria-label={`${item.title} — ${item.detail}`}
              draggable={false}
              onPointerEnter={() => { motion.current.hovering = true; }}
              onPointerLeave={() => { motion.current.hovering = false; }}
              onFocus={() => { motion.current.hovering = true; }}
              onBlur={() => { motion.current.hovering = false; wake.current(); }}
            >
              <img
                src={item.image}
                alt=""
                draggable={false}
                fetchPriority={index < 4 ? 'high' : 'auto'}
              />
              <span className="plane-caption">
                <span>
                  {item.title}
                  <small>{item.detail}</small>
                </span>
                <ArrowUpRight size={15} />
              </span>
            </Link>
          ))}
        </div>
      </div>
      <nav className="room-navigation" aria-label="Explore the portfolio">
        <Link to="/personal-gallery">
          Gallery <ArrowUpRight size={11} />
        </Link>
        <Link to="/work">
          Work <ArrowUpRight size={11} />
        </Link>
        <Link to="/about" className="signature" aria-label="About Anoop Danimon">
          Anoop
        </Link>
        <Link to="/about">
          About <ArrowUpRight size={11} />
        </Link>
        <Link to="/contact">
          Contact <ArrowUpRight size={11} />
        </Link>
      </nav>
      <div className="room-identity">
        <span>{content.hero.name}</span>
        <span>
          Data, code & a little curiosity.
          <br />
          {content.hero.location}
        </span>
      </div>
      <div className="room-controls">
        <span>
          <MoveHorizontal size={14} />
          Drag to explore
        </span>
        <button
          onClick={() => setPaused((value) => !value)}
          aria-label={paused ? 'Play gallery motion' : 'Pause gallery motion'}
          aria-pressed={paused}
        >
          {paused ? <Play size={12} /> : <Pause size={12} />}
        </button>
      </div>
      <Link className="room-work-link" to="/work">
        Explore selected work <ArrowUpRight size={13} />
      </Link>
    </section>
  );
};

export default Hero;
