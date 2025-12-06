'use client';

import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function CaseStudiesPage() {
  return (
    <div className="container mx-auto px-4 py-24">
      <h1 className="text-4xl md:text-6xl font-bold text-white mb-16">Case Studies</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="group relative rounded-3xl overflow-hidden bg-surface border border-white/5 hover:border-neon-teal/30 transition-all">
            <div className="aspect-video bg-gray-800 relative">
               <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
               <div className="absolute bottom-6 left-6 right-6">
                 <span className="text-xs font-bold text-neon-teal uppercase tracking-wider mb-2 block">Fintech Security</span>
                 <h3 className="text-2xl font-bold text-white mb-2">Securing a $500M DeFi Protocol</h3>
               </div>
            </div>
            <div className="p-8">
               <p className="text-gray-400 mb-6">
                   How we identified a critical reentrancy vulnerability that could have drained the entire liquidity pool.
               </p>
               <Link href="/case-study-demo" className="inline-flex items-center text-white font-semibold hover:text-neon-teal transition-colors">
                 Read Full Study <ArrowRight className="ml-2 w-4 h-4" />
               </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
