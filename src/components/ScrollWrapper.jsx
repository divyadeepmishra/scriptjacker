'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export default function ScrollWrapper({ children, className = "", delay = 0 }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
