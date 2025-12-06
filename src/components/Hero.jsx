'use client';

import ScrollWrapper from '@/components/ScrollWrapper';
import { useScrollScale } from '@/hooks/useScrollScale';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { lazy } from 'react';

// Lazy load Spline to avoid blocking main thread
const Spline = lazy(() => import('@splinetool/react-spline'));

// TODO: Replace with your actual Spline scene URL.
// Ensure the scene is optimized (under 2MB recommended) and has "Play" disabled if not interactive.
const SPLINE_SCENE_URL = "https://prod.spline.design/6Wq1Q7YGyM-iab9i/scene.splinecode";

export default function Hero() {
  const { scale, opacity } = useScrollScale();

  return (
    <section className="relative w-full min-h-screen pt-24 md:pt-32 flex items-center overflow-hidden bg-dark">
      {/* Background Gradients */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
         <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-neon-purple/20 blur-[150px] rounded-full animate-float" />
         <div className="absolute bottom-[10%] right-[-5%] w-[30%] h-[30%] bg-neon-teal/20 blur-[120px] rounded-full animate-float delay-1000" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 grid lg:grid-cols-2 gap-12 items-center h-full">

        {/* Text Content */}
        <motion.div
            style={{ opacity, transform: `scale(${scale})` }}
            className="max-w-2xl text-center lg:text-left mx-auto lg:mx-0"
        >
          <ScrollWrapper>
            <h1 className="text-lg md:text-2xl font-bold text-white mb-4 tracking-wide">
              We do actual pentests – not just scans.
            </h1>
          </ScrollWrapper>

          <ScrollWrapper delay={0.1}>
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold tracking-tight text-white mb-8 leading-tight">
              Vulnerabilities <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-teal to-neon-purple animate-gradient-text">Die Here.</span>
            </h1>
          </ScrollWrapper>

          <ScrollWrapper delay={0.2}>
            <p className="text-base md:text-lg text-gray-300 mb-8 leading-relaxed max-w-lg mx-auto lg:mx-0">
              Cyber threats don't wait. Neither should you. At <strong className="text-white">ScriptJacker LLP</strong>, we go beyond automated scans, performing <strong className="text-white">deep manual penetration testing</strong> to identify and eliminate real-world vulnerabilities before attackers do.
            </p>

            <ul className="space-y-3 mb-10 text-left max-w-md mx-auto lg:mx-0">
               {[
                 "One Client at a Time – 100% Focus",
                 "Quality Over Quantity – No Rushed Reports",
                 "Web, API, Mobile & Network Security Testing"
               ].map((item, i) => (
                 <li key={i} className="flex items-center text-gray-300 text-sm md:text-base">
                    <div className="w-5 h-5 rounded-full bg-neon-teal flex items-center justify-center mr-3 mt-0.5 shadow-[0_0_10px_-2px_var(--color-neon-teal)] shrink-0">
                       <svg className="w-3 h-3 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                       </svg>
                    </div>
                    {item}
                 </li>
               ))}
            </ul>
          </ScrollWrapper>

          <ScrollWrapper delay={0.3}>
            <div className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start">
              <Link href="/contact">
                <button className="group relative px-8 py-4 md:px-10 md:py-5 bg-neon-teal text-white font-bold text-base md:text-lg rounded-full overflow-hidden hover:scale-105 transition-all duration-300 shadow-[0_0_40px_-10px_var(--color-neon-teal)] hover:shadow-[0_0_60px_-10px_var(--color-neon-teal)] uppercase tracking-wider w-full sm:w-auto">
                  <span className="relative z-10 flex items-center justify-center">
                    Request a Quote <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </button>
              </Link>
            </div>
          </ScrollWrapper>
        </motion.div>

        {/* Spline Scene Wrapper - Animates the container to simulate 3D motion */}
        <motion.div
           initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
           animate={{ opacity: 1, scale: 1, rotate: 0 }}
           transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
           className="hidden md:flex relative h-[350px] md:h-[500px] w-full items-center justify-center perspective-1000 mt-10 lg:mt-0"
        >
           <style jsx global>{`
             .preserve-3d { transform-style: preserve-3d; }
             .perspective-1000 { perspective: 1000px; }
           `}</style>

           {/* Dancing Cube Container */}
           <motion.div
              animate={{ y: [-30, 30, -30] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
           >
              <div className="relative w-[300px] h-[300px]">
                 <motion.div
                    className="w-full h-full preserve-3d"
                    animate={{ rotateX: [10, 30, 10], rotateY: [0, 360], rotateZ: [5, -5, 5] }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                 >
                     {/* Faces */}
                     {/* Front */}
                     <div className="absolute inset-0 rounded-[3rem] border border-neon-teal/40 bg-neon-purple/10 backdrop-blur-md shadow-[0_0_30px_-5px_var(--color-neon-purple)]" style={{ transform: 'rotateY(0deg) translateZ(150px)' }} />
                     {/* Back */}
                     <div className="absolute inset-0 rounded-[3rem] border border-neon-purple/40 bg-neon-teal/10 backdrop-blur-md shadow-[0_0_30px_-5px_var(--color-neon-teal)]" style={{ transform: 'rotateY(180deg) translateZ(150px)' }} />
                     {/* Right */}
                     <div className="absolute inset-0 rounded-[3rem] border border-white/20 bg-dark/20 backdrop-blur-md" style={{ transform: 'rotateY(90deg) translateZ(150px)' }} />
                     {/* Left */}
                     <div className="absolute inset-0 rounded-[3rem] border border-white/20 bg-dark/20 backdrop-blur-md" style={{ transform: 'rotateY(-90deg) translateZ(150px)' }} />
                     {/* Top */}
                     <div className="absolute inset-0 rounded-[3rem] border border-neon-teal/30 bg-neon-teal/5 backdrop-blur-md" style={{ transform: 'rotateX(90deg) translateZ(150px)' }} />
                     {/* Bottom */}
                     <div className="absolute inset-0 rounded-[3rem] border border-neon-purple/30 bg-neon-purple/5 backdrop-blur-md" style={{ transform: 'rotateX(-90deg) translateZ(150px)' }} />
                 </motion.div>

                 {/* Internal Glow */}
                 <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-neon-teal rounded-full blur-[80px] opacity-40 animate-pulse" />
              </div>
           </motion.div>
        </motion.div>

      </div>
    </section>
  );
}
