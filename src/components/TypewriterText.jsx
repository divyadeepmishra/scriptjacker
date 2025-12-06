'use client';

import { motion, useAnimation, useInView } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

export default function TypewriterText({ text, className = "", delay = 0, speed = 0.05, onComplete, available = true, showCursor = true }) {
  // Split text into characters
  const characters = Array.from(text);
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    if (isInView && available) {
      const startAnimation = async () => {
        // Initial delay
        if (delay > 0) await new Promise(resolve => setTimeout(resolve, delay * 1000));

        // Animate characters
        await controls.start(i => ({
          opacity: 1,
          display: "inline",
          transition: { delay: i * speed, duration: 0 }
        }));

        setIsFinished(true);
        if (onComplete) onComplete();
      };

      startAnimation();
    }
  }, [isInView, controls, delay, speed, onComplete, available]);

  return (
    <span ref={ref} className={className}>
      {characters.map((char, index) => (
        <motion.span
          key={`${char}-${index}`}
          custom={index}
          initial={{ opacity: 0, display: "none" }}
          animate={controls}
        >
          {char}
        </motion.span>
      ))}
      {showCursor && !isFinished && (
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 0] }}
          transition={{ duration: 0.8, repeat: Infinity }}
          className="inline-block w-[2px] h-[1em] bg-neon-teal ml-1 align-middle"
        />
      )}
    </span>
  );
}
