'use client';

import StatsCounter from '@/components/StatsCounter';

export default function HomeStats() {
  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-8">
       <div className="bg-surface/20 border border-white/5 rounded-[2.5rem] px-6 md:px-12 backdrop-blur-sm">
          <div className="flex flex-col md:flex-row items-center justify-between py-12 gap-8">
             <div className="md:w-1/4 text-center md:text-left">
                <h3 className="text-2xl font-bold text-white mb-2">Some Numbers</h3>
                <p className="text-gray-400 text-sm">Each secured client marks a step forward.</p>
             </div>
             <div className="md:w-3/4 w-full">
                <StatsCounter />
             </div>
          </div>
       </div>
    </section>
  );
}
