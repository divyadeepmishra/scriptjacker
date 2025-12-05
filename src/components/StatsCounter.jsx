'use client';

import ScrollWrapper from '@/components/ScrollWrapper';

const stats = [
  { label: "Satisfied Clients", value: "150+" },
  { label: "Bugs Resolved", value: "2K+" },
  { label: "Accolades Earned", value: "200+" },
  { label: "Testing Hours", value: "3K+" },
];

export default function StatsCounter() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-10">
      {stats.map((stat, index) => (
        <ScrollWrapper key={index} delay={index * 0.1}>
          <div className="text-center group">
            <h3 className="text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-neon-teal to-neon-purple mb-2 group-hover:scale-110 transition-transform duration-300">
              {stat.value}
            </h3>
            <p className="text-gray-400 font-bold uppercase tracking-wider text-sm">{stat.label}</p>
          </div>
        </ScrollWrapper>
      ))}
    </div>
  );
}
