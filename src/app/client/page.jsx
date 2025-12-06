'use client';

import PartnersCarousel from '@/components/PartnersCarousel';
import { motion } from 'framer-motion';

const partnerLogos = [
  "/partners/cleartax.png",
  "/partners/commerzbank.jpg",
  "/partners/coinswitch.png",
  "/partners/bokadirekt.jpg",
  "/partners/boeing.png",
  "/partners/zepto.jpg",
  "/partners/zazzle.png",
  "/partners/whatfix.jpg",
  "/partners/tallinna_sadam.png",
  "/partners/shuttle.jpg",
  "/partners/nykaa.png",
  "/partners/jouwweb.png",
  "/partners/honda.png",
  "/partners/bling.png"
];

// Split into two rows for visual balance
const row1 = partnerLogos.slice(0, 7);
const row2 = partnerLogos.slice(7);

export default function ClientPage() {
  return (
    <div className="min-h-screen pt-24 pb-20">
      {/* Hero Section */}
      <section className="container mx-auto px-4 mb-12 text-center">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-neon-teal font-bold tracking-wider uppercase text-sm mb-4 block"
        >
          Our Partners
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-6xl font-bold text-white mb-6"
        >
          Trusted by Industry Leaders
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed"
        >
          We collaborate with forward-thinking companies to secure their infrastructure and build resilience against evolving threats.
        </motion.p>
      </section>

      {/* Infinite Carousel - Row 1 */}
      <section className="w-full mb-8">
         <PartnersCarousel logos={row1} />
      </section>

      {/* Infinite Carousel - Row 2 */}
      <section className="w-full mb-20">
         <PartnersCarousel logos={row2} />
      </section>

      {/* Optional: Keep Grid if User Wants Both (Currently Replacing completely for better aesthetics) */}
    </div>
  );
}
