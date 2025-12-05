'use client';

// Hypnotic Cyber Background
// Features: Interactive Hexagon Grid + Ether Fog Layers + "Breathing" Motion
// pure Framer Motion implementation

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const HexagonGrid = () => {
  // Creating a grid of hexagons
  // This is a simplified SVG pattern that scales well
  return (
    <div className="absolute inset-0 z-0 overflow-hidden opacity-[0.3]">
      <svg className="w-full h-full" width="100%" height="100%">
        <pattern
          id="hex-grid"
          width="100"
          height="100"
          patternUnits="userSpaceOnUse"
          patternTransform="scale(3)"
        >
           <motion.path
             d="M50 0L93.3 25V75L50 100L6.7 75V25L50 0Z"
             fill="none"
             stroke="url(#hex-gradient)"
             strokeWidth="1"
             initial={{ pathLength: 0, opacity: 0.3 }}
             animate={{ pathLength: 1, opacity: 1 }}
             transition={{ duration: 4, ease: "easeInOut", repeat: Infinity, repeatType: "reverse" }}
           />
        </pattern>
        <defs>
          <linearGradient id="hex-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00b8ff" />
            <stop offset="100%" stopColor="#bf00ff" />
          </linearGradient>
        </defs>
        <rect width="100%" height="100%" fill="url(#hex-grid)" />
      </svg>
    </div>
  );
};

const EtherLayer = ({ delay = 0, color = "#00b8ff", opacity = 0.2, duration = 20 }) => {
  return (
    <motion.div
      className="absolute inset-0 rounded-full blur-[100px] mix-blend-screen pointer-events-none will-change-transform"
      style={{ background: color, opacity: opacity }}
      animate={{
        scale: [1, 1.1, 0.95, 1.05, 1],
        x: [0, 30, -30, 15, 0],
        y: [0, -20, 25, -15, 0],
      }}
      transition={{
        duration: duration,
        repeat: Infinity,
        ease: "easeInOut",
        delay: delay
      }}
    />
  );
};

export default function CyberBackground() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    let ticking = false;
    const handleMove = (e) => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
           setMousePos({ x: e.clientX, y: e.clientY });
           ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('mousemove', handleMove);
    return () => window.removeEventListener('mousemove', handleMove);
  }, []);

  return (
    <div className="fixed inset-0 bg-black z-[-1] overflow-hidden">
       {/* 1. Deepest Space Base */}
       <div className="absolute inset-0 bg-black" />

       {/* 2. Hexagonal Grid Mesh */}
       <HexagonGrid />

       {/* 3. Ether Fog Layers - "Breathing" atmosphere */}
       {/* Blue Ether - Stronger */}
       <motion.div
         className="absolute top-[-20%] left-[-10%] w-[70vw] h-[70vw] mix-blend-screen"
       >
         <EtherLayer color="#00b8ff" opacity={0.12} duration={25} />
       </motion.div>

       {/* Purple Ether - Stronger */}
       <motion.div
         className="absolute bottom-[-20%] right-[-10%] w-[80vw] h-[80vw] mix-blend-screen"
       >
         <EtherLayer color="#bf00ff" opacity={0.10} delay={5} duration={30} />
       </motion.div>

       {/* New Center Ether - Pulse */}
       <motion.div
         className="absolute top-[20%] left-[20%] w-[60vw] h-[60vw] mix-blend-overlay"
       >
         <EtherLayer color="#ffffff" opacity={0.03} delay={2} duration={15} />
       </motion.div>

       {/* 4. Mouse Follower "Torch" - Interactive Light */}
       <motion.div
         className="absolute w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(0,184,255,0.06)_0%,transparent_70%)] pointer-events-none mix-blend-plus-lighter will-change-transform"
         animate={{
           x: mousePos.x - 300,
           y: mousePos.y - 300
         }}
         transition={{ type: "spring", damping: 40, stiffness: 150, mass: 0.5 }}
       />

       {/* 5. Noise Grain for "Film" look */}
       <div className="absolute inset-0 opacity-[0.05] pointer-events-none"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='1'/%3E%3C/svg%3E")`
            }}
       />
    </div>
  );
}
