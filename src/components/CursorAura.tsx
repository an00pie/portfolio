import React, { useEffect, useState } from 'react';

export const CursorAura: React.FC = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const finePointer = window.matchMedia('(pointer: fine)');
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (!finePointer.matches || reducedMotion.matches) return;

    const move = (event: PointerEvent) => {
      setPosition({ x: event.clientX, y: event.clientY });
      setIsVisible(true);
    };
    const leave = () => setIsVisible(false);

    window.addEventListener('pointermove', move, { passive: true });
    document.documentElement.addEventListener('mouseleave', leave);
    return () => {
      window.removeEventListener('pointermove', move);
      document.documentElement.removeEventListener('mouseleave', leave);
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      className={`cursor-aura ${isVisible ? 'cursor-aura--visible' : ''}`}
      style={{ transform: `translate3d(${position.x}px, ${position.y}px, 0)` }}
    >
      <span />
    </div>
  );
};

export default CursorAura;
