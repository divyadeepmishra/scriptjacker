'use client';

import { useEffect, useState } from 'react';

export default function TypewriterText({ text, speed = 30, delay = 0, className = "" }) {
  const [displayedText, setDisplayedText] = useState('');
  const [isStarted, setIsStarted] = useState(false);

  useEffect(() => {
    const startTimeout = setTimeout(() => {
      setIsStarted(true);
    }, delay * 1000);

    return () => clearTimeout(startTimeout);
  }, [delay]);

  useEffect(() => {
    if (!isStarted) return;

    let index = 0;
    const intervalId = setInterval(() => {
      setDisplayedText((prev) => text.slice(0, index + 1));
      index++;

      if (index >= text.length) {
        clearInterval(intervalId);
      }
    }, speed);

    return () => clearInterval(intervalId);
  }, [text, speed, isStarted]);

  return (
    <span className={`${className} font-mono`}>
      {displayedText}
      <span className="animate-pulse inline-block w-[2px] h-[1em] bg-neon-teal ml-1 align-middle" />
    </span>
  );
}
