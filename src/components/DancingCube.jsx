'use client';

import { motion } from 'framer-motion';

export default function DancingCube() {
  return (
    <div className="relative w-64 h-64 md:w-96 md:h-96 perspective-1000">
      <motion.div
        className="relative w-full h-full preserve-3d"
        animate={{
          rotateX: [20, 40, 20],
          rotateY: [0, 360],
          rotateZ: [0, 10, -10, 0]
        }}
        transition={{
          duration: 12,
          ease: "linear",
          repeat: Infinity
        }}
      >
        {/* Cube Faces */}
        {/* Front */}
        <div className="absolute inset-0 w-full h-full bg-neon-purple/20 border-2 border-neon-teal/50 rounded-3xl backdrop-blur-md shadow-[0_0_50px_-10px_var(--color-neon-purple)] translate-z-[128px] md:translate-z-[192px]"
             style={{ transform: 'translateZ(96px)' }} /> {/* Approximate for visual size */}

        {/* Using a simpler visual approach for "Dancing Cube" that feels more cyber-organic than a rigid box */}
        <CubeFace rotateY={0} translateZ="translateZ(100px)" color="bg-neon-purple/10" border="border-neon-teal/30" />
        <CubeFace rotateY={90} translateZ="translateZ(100px)" color="bg-neon-teal/10" border="border-neon-purple/30" />
        <CubeFace rotateY={180} translateZ="translateZ(100px)" color="bg-neon-purple/10" border="border-neon-teal/30" />
        <CubeFace rotateY={270} translateZ="translateZ(100px)" color="bg-neon-teal/10" border="border-neon-purple/30" />
        <CubeFace rotateX={90} translateZ="translateZ(100px)" color="bg-white/5" border="border-white/20" />
        <CubeFace rotateX={-90} translateZ="translateZ(100px)" color="bg-white/5" border="border-white/20" />
      </motion.div>

      {/* Inner Glowing Core */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-neon-teal rounded-full blur-[60px]"
        animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}

// 3D CSS Helper
function CubeFace({ rotateX = 0, rotateY = 0, translateZ, color, border }) {
    // Dynamic sizing for responsive cube
    // We use a fixed size logic here for simplicity, relying on scale in parent
    return (
        <div
            className={`absolute inset-0 w-full h-full rounded-[2rem] ${color} ${border} border-[1px] backdrop-blur-sm shadow-[inset_0_0_40px_rgba(0,0,0,0.5)]`}
            style={{
                transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg) ${translateZ}`,
                backfaceVisibility: 'visible'
            }}
        >
             <div className="w-full h-full bg-gradient-to-br from-white/10 to-transparent rounded-[2rem]" />
        </div>
    );
}
