'use client';

import ScrollWrapper from './ScrollWrapper';

export default function ServiceCard({ title, description, icon: Icon, delay = 0, onLearnMore }) {
  return (
    <ScrollWrapper delay={delay}>
      <div
        className="group relative h-full rounded-[2.5rem] bg-surface/50 border border-white/5 transition-all duration-500 overflow-hidden shadow-lg hover:shadow-neon-teal/20 hover:border-neon-teal/30 flex flex-col"
      >
        {/* Hover Glow Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-neon-teal/20 to-neon-purple/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0" />

        {/* Stronger External Glow */}
        <div className="absolute inset-0 rounded-[2.5rem] shadow-[0_0_0_0_transparent] group-hover:shadow-[0_0_40px_-5px_var(--color-neon-teal)] transition-shadow duration-500 z-0 pointer-events-none" />

        <div className="relative z-10 flex flex-col items-start h-full p-6 md:p-8 flex-grow">
           {/* Header with Icon */}
           <div className="w-full flex justify-between items-start mb-6">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500 shadow-[0_0_20px_-5px_rgba(255,255,255,0.2)]">
                {Icon && <Icon className="w-8 h-8 text-white group-hover:text-neon-teal transition-colors" />}
              </div>
           </div>

           <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-neon-teal transition-colors">{title}</h3>

           <div className="mb-8 flex-grow">
             <p className="text-gray-400 group-hover:text-gray-200 transition-colors leading-relaxed">
               {description}
             </p>
           </div>

           <button
              onClick={onLearnMore}
              className="inline-flex items-center text-sm font-bold text-white hover:text-neon-teal transition-colors uppercase tracking-wider mt-auto"
           >
              Learn more
           </button>
        </div>
      </div>
    </ScrollWrapper>
  );
}
