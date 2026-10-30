import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { content } from '../data/content';

export const LocalTime: React.FC<{ seconds?: boolean }> = ({ seconds = false }) => {
  const [time, setTime] = useState('');
  useEffect(() => {
    const update = () =>
      setTime(
        new Intl.DateTimeFormat('en-US', {
          timeZone: content.hero.timeZone,
          hour: '2-digit',
          minute: '2-digit',
          ...(seconds ? { second: '2-digit' as const } : {}),
          hour12: true,
        }).format(new Date()),
      );
    update();
    const interval = setInterval(update, seconds ? 1000 : 30000);
    return () => clearInterval(interval);
  }, [seconds]);
  return <time suppressHydrationWarning>{time || 'India · IST'}</time>;
};

export const Footer: React.FC = () => (
  <footer className="site-footer">
    <span>
      © {new Date().getFullYear()} {content.hero.name}
    </span>
    <span>
      Kerala, India <LocalTime />
    </span>
    <Link to="/contact" className="availability">
      <i />
      {content.hero.statusText}
    </Link>
  </footer>
);
export default Footer;
