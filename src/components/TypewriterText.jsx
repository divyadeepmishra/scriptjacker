'use client';

import { useEffect, useState } from 'react';

export default function TypewriterText({ text, speed = 30, delay = 0, className = "" }) {
  const [displayedText, setDisplayedText] = useState('');
  const [isStarted, setIsStarted] = useState(false);
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    const startTimeout = setTimeout(() => {
      setIsStarted(true);
    }, delay * 1000);

    return () => clearTimeout(startTimeout);
  }, [delay]);

  useEffect(() => {
    if (!isStarted) return;

    let index = 0;

    const typeNextChar = () => {
      setDisplayedText(text.slice(0, index + 1));
      index++;

      if (index < text.length) {
         // Add slight randomness for realism
         const randomSpeed = speed + (Math.random() * 10 - 5);
         setTimeout(typeNextChar, randomSpeed);
      } else {
         setIsFinished(true);
      }
    };

    typeNextChar();

    return () => {}; // Cleanup not strictly needed for this logic but good practice
  }, [text, speed, isStarted]);

  return (
    <span className={`${className} font-mono`}>
      {displayedText}
      {!isFinished && (
        <span className="animate-pulse inline-block w-[2px] h-[1em] bg-neon-teal ml-1 align-middle" />
      )}
    </span>
  );
}
