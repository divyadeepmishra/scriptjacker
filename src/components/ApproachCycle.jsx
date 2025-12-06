'use client';

import { motion } from 'framer-motion';
import { FileSearch, RefreshCw, ScanSearch, ShieldCheck } from 'lucide-react';
import Image from 'next/image';

const steps = [
  {
    id: 1,
    title: "Preparation & Discovery",
    description: "Identify key systems and gather details.",
    icon: ScanSearch,
    position: "top-0 left-1/2 -translate-x-1/2", // Top
    deg: 270
  },
  {
    id: 2,
    title: "Penetration Testing",
    description: "Simulate real cyberattacks to find spots.",
    icon: ShieldCheck,
    position: "top-1/2 right-0 -translate-y-1/2", // Right
    deg: 0
  },
  {
    id: 3,
    title: "Reporting & Documentation",
    description: "Detailed report with actionable fixes.",
    icon: FileSearch,
    position: "bottom-0 left-1/2 -translate-x-1/2", // Bottom
    deg: 90
  },
  {
    id: 4,
    title: "Follow Up & Retesting",
    description: "Verify fixes work as expected.",
    icon: RefreshCw,
    position: "top-1/2 left-0 -translate-y-1/2", // Left
    deg: 180
  }
];

export default function ApproachCycle() {
  return (
    <div className="relative py-10 lg:py-32 min-h-[500px] flex items-center justify-center overflow-visible">
      {/* --- DESKTOP CIRCULAR VIEW (lg+) --- */}
      {/* Increased container size to 800px to give more breathing room */}
      <div className="hidden lg:block relative w-[600px] h-[600px] xl:w-[800px] xl:h-[800px]">
        {/* Central Core */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
             <div className="relative w-28 h-28 xl:w-32 xl:h-32 flex items-center justify-center">
                 {/* Glowing Orbits */}
                 <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-0 rounded-full border border-dashed border-neon-teal/30"
                 />
                 <motion.div
                    animate={{ rotate: -360 }}
                    transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-4 rounded-full border border-dashed border-neon-purple/30"
                 />

                 <div className="relative w-20 h-20 xl:w-24 xl:h-24 bg-black rounded-full flex items-center justify-center border border-white/10 shadow-[0_0_50px_-10px_var(--color-neon-teal)] z-10">
                    <Image
                      src="/logo.png"
                      alt="Core"
                      width={50}
                      height={60}
                      className="object-contain p-2"
                      priority
                    />
                 </div>
             </div>
        </div>

        {/* Circular Connector Line */}
        {/* Adjusted radius to match the Icon Orbit (28% of 800px = ~224px, matches visually) */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none z-0 rotate-45">
          <circle
            cx="50%" cy="50%" r="28%"
            fill="none"
            stroke="url(#gradient-line)"
            strokeWidth="2"
            strokeDasharray="10 10"
            className="opacity-30"
          />
          <defs>
            <linearGradient id="gradient-line" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#38EF7D" />
              <stop offset="100%" stopColor="#b429f9" />
            </linearGradient>
          </defs>
        </svg>

        {/* --- ORBITAL LAYOUT SYSTEM --- */}
        {/* We use two defined radii (as percentages of container size 800px) */}
        {/* ICON_RADIUS = 28% (approx 224px) */}
        {/* TEXT_RADIUS = 55% (approx 440px) - Pushes text completely clear of icons */}

        {steps.map((step, index) => {
             const rad = (step.deg * Math.PI) / 180;

             // 1. Position Icon
             // - Steps 2 & 3: Reduced to ~23% (Closer to center)
             // - Steps 1 & 4: Pushed to ~33% (Outside circle)
             let iconRadius = 23;
             if (step.id === 1 || step.id === 4) iconRadius = 33;

             const iconX = 50 + iconRadius * Math.cos(rad);
             const iconY = 50 + iconRadius * Math.sin(rad);

             // 2. Position Text at Outer Radius
             // Variable Radius Principle:
             // - Step 1: ~52% (Gap ~19% from icon) - "Little bit space"
             // - Steps 2 & 3: ~41% (Gap ~15% from icon) - Consistent gap
             // - Step 4: ~75% (Gap ~42% from icon) - Maximized gap
             let textRadius = 41;
             if (step.id === 1) textRadius = 52;
             if (step.id === 4) textRadius = 75;

             const textX = 50 + textRadius * Math.cos(rad);
             const textY = 50 + textRadius * Math.sin(rad);

             return (
               <div key={step.id}>
                 {/* --- ICON NODE --- */}
                 <motion.div
                   initial={{ opacity: 0, scale: 0 }}
                   whileInView={{ opacity: 1, scale: 1 }}
                   transition={{ delay: index * 0.1, duration: 0.5 }}
                   className="absolute z-20"
                   style={{
                      left: `${iconX}%`,
                      top: `${iconY}%`,
                      transform: 'translate(-50%, -50%)'
                   }}
                 >
                    <div className="relative group cursor-pointer">
                        <div className="w-16 h-16 xl:w-20 xl:h-20 rounded-full bg-dark border border-white/10 flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:border-neon-teal transition-all duration-300 relative bg-black/80 backdrop-blur-sm z-10">
                           <step.icon className="w-6 h-6 xl:w-8 xl:h-8 text-white group-hover:text-neon-teal transition-colors" />
                        </div>
                        {/* Pulse */}
                        <div className="absolute inset-0 rounded-full bg-neon-teal/20 animate-ping opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                 </motion.div>

                 {/* --- TEXT NODE --- */}
                 <motion.div
                   initial={{ opacity: 0, y: 10 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   transition={{ delay: index * 0.1 + 0.2, duration: 0.5 }}
                   className={`absolute z-10 w-60 xl:w-72 flex flex-col justify-center ${
                      step.id === 2 ? "items-start text-left" :
                      step.id === 4 ? "items-end text-right" :
                      "items-center text-center"
                   }`}
                   style={{
                      left: `${textX}%`,
                      top: `${textY}%`,
                      transform: 'translate(-50%, -50%)'
                   }}
                 >
                    <div className="bg-black/90 backdrop-blur-xl p-5 rounded-2xl border border-white/10 shadow-2xl w-full transition-all duration-300 hover:border-neon-teal/50 hover:shadow-neon-teal/10">
                        <div className="text-xs font-bold text-neon-teal mb-1 tracking-wider">STEP 0{step.id}</div>
                        <h3 className="text-white font-bold text-lg mb-2">{step.title}</h3>
                        <p className="text-xs text-gray-400 leading-relaxed">{step.description}</p>
                    </div>
                 </motion.div>

               </div>
             );
        })}
      </div>

      {/* --- MOBILE VERTICAL VIEW (<lg) --- */}
      <div className="lg:hidden flex flex-col space-y-12 relative w-full max-w-md px-4">
          {/* Vertical Line */}
          <div className="absolute left-8 top-0 bottom-0 w-[2px] bg-gradient-to-b from-neon-teal via-neon-purple to-neon-teal opacity-30" />

          {steps.map((step, index) => (
             <motion.div
                key={step.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="relative pl-14 md:pl-20"
             >
                {/* Connector Dot */}
                <div className="absolute left-5 top-0 w-6 h-6 -ml-[13px] rounded-full bg-dark border-2 border-neon-teal z-10 flex items-center justify-center">
                    <div className="w-2 h-2 bg-neon-teal rounded-full" />
                </div>

                <div className="p-6 rounded-3xl bg-surface/30 border border-white/5 relative group hover:bg-surface/50 transition-colors">
                   <div className="absolute -top-6 left-6 w-12 h-12 rounded-xl bg-neon-teal/10 flex items-center justify-center border border-white/5 mb-4 group-hover:scale-110 transition-transform">
                      <step.icon className="w-6 h-6 text-neon-teal" />
                   </div>

                   <div className="pt-8">
                       <h3 className="text-lg font-bold text-white mb-2">{step.title}</h3>
                       <p className="text-gray-400 text-sm leading-relaxed">{step.description}</p>
                   </div>

                   <div className="absolute top-4 right-4 text-4xl font-bold text-white/5 pointer-events-none">
                     0{step.id}
                   </div>
                </div>
             </motion.div>
          ))}
      </div>
    </div>
  );
}
