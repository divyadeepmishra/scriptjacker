'use client';

import { motion, useInView } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

export default function TypewriterText({ text, className = "", delay = 0, speed = 30 }) {
  const [displayedText, setDisplayedText] = useState('');
  const [started, setStarted] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  // Handle Initial Delay
  useEffect(() => {
    if (isInView && !started) {
      const timer = setTimeout(() => {
        setStarted(true);
      }, delay * 1000); // delay is in seconds
      return () => clearTimeout(timer);
    }
  }, [isInView, delay, started]);

  // Handle Typing Effect
  useEffect(() => {
    if (started && displayedText.length < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(text.slice(0, displayedText.length + 1));
      }, speed); // speed is in milliseconds (e.g., 30ms)
      return () => clearTimeout(timeout);
    }
  }, [started, displayedText, text, speed]);

  return (
    <span ref={ref} className={className}>
      {displayedText}
      {/* Cursor Animation */}
      {displayedText.length < text.length && (
        <motion.span
          animate={{ opacity: [0, 1, 0] }}
          transition={{ duration: 0.8, repeat: Infinity }}
          className="inline-block w-[2px] h-[1em] bg-neon-teal ml-1 align-middle"
        />
      )}
    </span>
  );
}
