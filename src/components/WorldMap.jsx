'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const dots = [
  { id: 1, cx: '28%', cy: '35%', city: 'New York' },
  { id: 2, cx: '49%', cy: '26%', city: 'London' },
  { id: 3, cx: '63%', cy: '44%', city: 'Dubai' },
  { id: 4, cx: '79%', cy: '56%', city: 'Singapore' },
  { id: 5, cx: '88%', cy: '38%', city: 'Tokyo' },
  { id: 6, cx: '92%', cy: '80%', city: 'Sydney' },
  { id: 7, cx: '15%', cy: '30%', city: 'San Francisco' },
  { id: 8, cx: '54%', cy: '32%', city: 'Berlin' },
];

export default function WorldMap() {
  return (
    <div className="w-full relative">
       <div className="relative w-full aspect-[1.8] rounded-[2.5rem] overflow-hidden border border-white/10 bg-white/5 shadow-2xl">
            {/*
              User provided a styled map image (Gray on White).
              To match the Dark/Neon theme:
              1. invert: Turns White bg -> Black, Gray map -> Light Gray/White
              2. opacity: Blends it into the site background
            */}
            <Image
              src="/world-map.jpg"
              alt="World Map"
              fill
              className="object-cover filter invert opacity-50 mix-blend-screen"
            />

            {/* Pulsing Dots */}
            {dots.map((dot) => (
               <div
                 key={dot.id}
                 className="absolute w-4 h-4 -ml-2 -mt-2 group cursor-pointer"
                 style={{ left: dot.cx, top: dot.cy }}
               >
                  <motion.div
                    animate={{ scale: [1, 2, 1], opacity: [0.7, 0, 0.7] }}
                    transition={{ duration: 2 + Math.random(), repeat: Infinity, ease: "easeInOut" }}
                    className="absolute inset-0 bg-neon-teal rounded-full opacity-50 blur-sm"
                  />
                  <div className="absolute inset-1 bg-neon-teal rounded-full shadow-[0_0_10px_var(--color-neon-teal)]" />

                  {/* Tooltip */}
                  <div className="absolute top-6 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-dark/90 border border-neon-teal/50 px-2 py-1 rounded text-xs text-neon-teal whitespace-nowrap pointer-events-none z-10">
                     {dot.city}
                  </div>
               </div>
            ))}
       </div>
       <div className="text-center mt-10">
          <p className="text-gray-400 text-sm">
             Providing <span className="text-neon-teal">advanced security services</span> across the globe.
          </p>
       </div>
    </div>
  );
}
