import React, { useState, useEffect } from 'react';
import { content } from '../data/content';

export const Footer: React.FC = () => {
  const [timeStr, setTimeStr] = useState<string>('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const formatted = new Intl.DateTimeFormat('en-US', {
        timeZone: 'Asia/Kolkata',
        hour: 'numeric',
        minute: '2-digit',
        hour12: true,
      }).format(now);
      setTimeStr(formatted);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="w-full border-t border-neutral-200 mt-20 sm:mt-24 py-6 sm:py-8 px-6 sm:px-8 bg-white">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-800 font-medium">
        {/* Left: Copyright */}
        <div>
          <span>© {new Date().getFullYear()} {content.hero.name}</span>
        </div>

        {/* Center: Live Time in Asia/Kolkata */}
        <div className="font-mono text-neutral-700">
          <span>{timeStr || '10:55 PM'}</span>
        </div>

        {/* Right: Available for Work with Green Pulsing Dot */}
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#3CFF00] inline-block shadow-[0_0_8px_rgba(60,255,0,0.6)] animate-pulse" />
          <span>Available for Work</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
