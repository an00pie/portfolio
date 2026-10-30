import React, { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { Columns3, Grid2X2, X, ArrowLeft, ArrowRight, ArrowUpRight } from 'lucide-react';
import { galleryItems } from '../data/gallery';

export const GalleryPage: React.FC = () => {
  const [layout, setLayout] = useState<'masonry' | 'grid'>('masonry');
  const [selected, setSelected] = useState<number | null>(null);
  const dialog = useRef<HTMLDialogElement>(null);
  const opener = useRef<HTMLButtonElement | null>(null);
  const location = useLocation();
  const item = selected === null ? null : galleryItems[selected];
  const move = (direction: number) =>
    setSelected((index) =>
      index === null ? null : (index + direction + galleryItems.length) % galleryItems.length,
    );

  useEffect(() => {
    const id = location.hash.slice(1);
    const index = galleryItems.findIndex((entry) => entry.id === id);
    if (index >= 0) {
      opener.current = document.getElementById(`view-${id}`) as HTMLButtonElement | null;
      setSelected(index);
    }
  }, [location.hash]);

  useEffect(() => {
    const modal = dialog.current;
    if (selected === null || !modal) return;
    if (!modal.open) modal.showModal();
    const previous = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = previous;
    };
  }, [selected]);
  const close = () => {
    dialog.current?.close();
    setSelected(null);
    opener.current?.focus();
  };

  return (
    <main id="main-content" className="editorial-page gallery-page">
      <header className="page-heading poster-heading">
        <h1>
          My poster
          <br />
          collection.
        </h1>
        <div className="poster-intro">
          <p>A different side of my work. Posters for campus events, celebrations, and the things worth drawing attention to.</p>
          <Link className="text-link" to="/work">Back to the code <ArrowUpRight size={13} /></Link>
        </div>
      </header>
      <div className="collection-toolbar">
        <p>{galleryItems.length} posters <span>· Select to view in full</span></p>
        <div className="gallery-layout-controls" aria-label="Gallery layout">
        <button
          aria-label="Poster wall layout"
          aria-pressed={layout === 'masonry'}
          onClick={() => setLayout('masonry')}
        >
          <Columns3 size={15} />
        </button>
        <button
          aria-label="Compact grid layout"
          aria-pressed={layout === 'grid'}
          onClick={() => setLayout('grid')}
        >
          <Grid2X2 size={15} />
        </button>
        </div>
      </div>
      <div className={`collection-grid collection-grid--${layout}`}>
        {galleryItems.map((entry, index) => (
          <motion.figure
            key={entry.id}
            id={entry.id}
            className={`collection-item collection-item--${entry.type}`}
            transition={{ duration: 0.5 }}
          >
            <button
              id={`view-${entry.id}`}
              onClick={(event) => {
                opener.current = event.currentTarget;
                setSelected(index);
              }}
              aria-label={`View ${entry.title}`}
            >
              <img src={entry.image} alt={`${entry.title} poster`} width={entry.width} height={entry.height} loading={index > 2 ? 'lazy' : 'eager'} />
              <span className="collection-view">
                <ArrowUpRight size={20} />
              </span>
            </button>
            <figcaption>
              <span>{entry.title}</span>
              <small>{entry.series}</small>
            </figcaption>
          </motion.figure>
        ))}
      </div>
      <p className="collection-note">
        Made to catch the eye. Collected here to take a closer look.
      </p>
      <dialog
        ref={dialog}
        className="image-dialog"
        onCancel={(event) => {
          event.preventDefault();
          close();
        }}
        onClose={() => {
          setSelected(null);
          opener.current?.focus();
        }}
        onClick={(event) => {
          if (event.target === event.currentTarget) close();
        }}
        onKeyDown={(event) => {
          if (event.key === 'ArrowLeft') {
            event.preventDefault();
            move(-1);
          }
          if (event.key === 'ArrowRight') {
            event.preventDefault();
            move(1);
          }
        }}
        aria-labelledby="image-title"
      >
        {item && (
          <div className="image-dialog-inner">
            <button className="image-dialog-close" aria-label="Close image" onClick={close}>
              <X size={22} />
            </button>
            <div className="image-dialog-art">
              <AnimatePresence mode="wait">
                <motion.img
                  key={item.id}
                  src={item.image}
                  alt={item.title}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.18 }}
                />
              </AnimatePresence>
            </div>
            <div className="image-dialog-caption">
              <div>
                <h2 id="image-title">{item.title}</h2>
                <p>{item.caption}</p>
              </div>
              <div className="image-dialog-controls">
                <button onClick={() => move(-1)} aria-label="Previous image">
                  <ArrowLeft size={18} />
                </button>
                <span>
                  {(selected ?? 0) + 1} / {galleryItems.length}
                </span>
                <button onClick={() => move(1)} aria-label="Next image">
                  <ArrowRight size={18} />
                </button>
              </div>
            </div>
          </div>
        )}
      </dialog>
    </main>
  );
};
