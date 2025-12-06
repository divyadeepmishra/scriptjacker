'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

export default function ServiceModal({ isOpen, onClose, title, description, icon: Icon }) {
  const [mounted, setMounted] = useState(false);
  const [showCaseStudy, setShowCaseStudy] = useState(false);

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  // Reset case study view when modal opens/closes
  useEffect(() => {
    if (!isOpen) setShowCaseStudy(false);
  }, [isOpen]);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!mounted) return null;

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-md z-[9998] flex items-center justify-center p-4"
          />

          {/* Modal Content */}
          <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 pointer-events-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="w-full max-w-lg bg-dark border border-white/10 rounded-3xl shadow-2xl pointer-events-auto relative max-h-[85vh] overflow-y-auto"
            >
              {/* Header Gradient (Fixed) */}
              <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-br from-neon-teal/20 to-neon-purple/20 pointer-events-none" />

              <div className="relative p-6 md:p-8">
                <button
                  onClick={onClose}
                  className="sticky top-0 float-right ml-auto p-2 rounded-full bg-black/50 hover:bg-white/10 text-white backdrop-blur-md border border-white/10 transition-colors z-50 mb-4"
                >
                  <X size={20} />
                </button>

                <div className="flex flex-col items-center text-center">
                  {Icon && (
                    <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 flex items-center justify-center shadow-[0_0_30px_-5px_var(--color-neon-teal)] mb-6">
                      <Icon className="w-10 h-10 text-neon-teal" />
                    </div>
                  )}

                  <h2 className="text-3xl font-bold text-white mb-4">{showCaseStudy ? "Case Study: " + title : title}</h2>
                <div className="h-1 w-16 bg-gradient-to-r from-neon-teal to-neon-purple rounded-full mb-6" />

                {!showCaseStudy ? (
                  <>
                    <p className="text-gray-300 leading-relaxed mb-8">
                      {description}
                    </p>

                    <p className="text-sm text-gray-400 italic mb-8">
                      "We craft security solutions as unique as your business challenges."
                    </p>

                     <button
                        onClick={() => setShowCaseStudy(true)}
                        className="px-8 py-3 rounded-full bg-white/5 text-neon-teal font-bold hover:bg-neon-teal hover:text-white transition-all border border-neon-teal/30 uppercase tracking-wide text-sm"
                      >
                        Read full story
                      </button>
                  </>
                ) : (
                   <div className="w-full text-left space-y-6 bg-white/5 p-6 rounded-2xl border border-white/10">
                      <div>
                        <h4 className="text-neon-teal font-bold uppercase text-xs tracking-wider mb-2">The Challenge</h4>
                        <p className="text-gray-300 text-sm">
                           A high-growth enterprise faced recurring threats to their infrastructure, risking sensitive customer data and regulatory compliance.
                        </p>
                      </div>
                      <div>
                        <h4 className="text-neon-purple font-bold uppercase text-xs tracking-wider mb-2">Our Solution</h4>
                        <p className="text-gray-300 text-sm">
                           ScriptJacker deployed a targeted {title} campaign. We identified critical vulnerabilities that automated tools missed and provided a remediation roadmap.
                        </p>
                      </div>
                      <div>
                        <h4 className="text-white font-bold uppercase text-xs tracking-wider mb-2">The Result</h4>
                        <p className="text-gray-300 text-sm">
                           Zero critical vulnerabilities post-remediation. The client achieved SOC2 compliance 30% faster than projected.
                        </p>
                      </div>

                      <div className="pt-4 text-center">
                         <button
                            onClick={() => setShowCaseStudy(false)}
                            className="text-gray-500 hover:text-white text-sm underline transition-colors"
                          >
                            Back to Overview
                          </button>
                      </div>
                   </div>
                )}


                </div>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>,
    document.body
  );
}
