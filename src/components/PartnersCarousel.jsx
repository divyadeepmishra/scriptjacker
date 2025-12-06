'use client';

import { motion, useAnimate } from 'framer-motion';
import Image from 'next/image';
import { useEffect, useState } from 'react';

const PAUSE_DURATION = 3000; // 3 seconds pause
const SCROLL_DURATION = 0.8; // Slide animation time

export default function PartnersCarousel({ logos = [] }) {
  const [scope, animate] = useAnimate();
  const [currentIndex, setCurrentIndex] = useState(0);

  // If no logos provided, rely on parent or show nothing
  if (!logos || logos.length === 0) return null;

  // We need enough copies to ensure seamless loop.
  // We duplicate the list once. When we reach the end of the first set, we jump back to 0.
  const repeatedLogos = [...logos, ...logos];
  const totalItems = logos.length;

  // Dimensions
  const itemWidth = 160;
  const gap = 64; // gap-16 (4rem)
  const effectiveWidth = itemWidth + gap;

  useEffect(() => {
    const sequence = async () => {
      // 1. Pause
      await new Promise(resolve => setTimeout(resolve, PAUSE_DURATION));

      // 2. Animate to next item
      const nextIndex = currentIndex + 1;

      // Calculate target X position
      // We are moving LEFT, so x is negative.
      const targetX = -(nextIndex * effectiveWidth);

      await animate(scope.current, { x: targetX }, { duration: SCROLL_DURATION, ease: "easeInOut" });

      // 3. Check for seamless reset
      // If we have scrolled past all original items (i.e., we are now viewing the start of the duplicate set)
      // we can instantly jump back to index 0 (0px) because it looks identical.
      if (nextIndex >= totalItems) {
         setCurrentIndex(0);
         // Instant jump (duration 0)
         await animate(scope.current, { x: 0 }, { duration: 0 });
      } else {
         setCurrentIndex(nextIndex);
      }
    };

    // Run the sequence
    // Note: This needs to be a loop. A simple way is to use a recursive timeout or just useEffect dependency.
    // However, useEffect dependency on 'currentIndex' is simplest.
    sequence();

  }, [currentIndex, totalItems, effectiveWidth, animate, scope]);

  return (
    <div className="w-full overflow-hidden bg-surface/30 border-y border-white/5 py-12 relative">
       {/* Gradient Masks for Fade Effect */}
       <div className="absolute top-0 left-0 h-full w-24 md:w-48 bg-gradient-to-r from-dark to-transparent z-10 pointer-events-none" />
       <div className="absolute top-0 right-0 h-full w-24 md:w-48 bg-gradient-to-l from-dark to-transparent z-10 pointer-events-none" />

       <div className="flex">
         <motion.div
            ref={scope}
            className="flex gap-16 items-center px-8"
            // Note: 'x' is controlled by useAnimate now, not prop
         >
                {repeatedLogos.map((logo, i) => (
                  <div
                    key={i}
                    className="group relative w-40 h-24 flex-shrink-0 rounded-xl p-4 shadow-lg bg-white/5 hover:bg-white/10 transition-all duration-300"
                  >
                      <div className="relative w-full h-full grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300">
                        <Image
                            src={logo}
                            alt={`Partner Logo ${i}`}
                            fill
                            className="object-contain"
                        />
                      </div>
                  </div>
                ))}
         </motion.div>
       </div>
    </div>
  );
}
