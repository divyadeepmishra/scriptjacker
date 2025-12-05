'use client';

import ScrollWrapper from '@/components/ScrollWrapper';
import { FileSearch, RefreshCw, ScanSearch, ShieldCheck } from 'lucide-react';

const steps = [
  {
    id: 1,
    title: "Preparation & Discovery",
    description: "We identify key systems and gather necessary details to ensure targeted testing.",
    icon: ScanSearch
  },
  {
    id: 2,
    title: "Penetration Testing",
    description: "We simulate real cyberattacks to find weak spots in your web, mobile, and networks.",
    icon: ShieldCheck
  },
  {
    id: 3,
    title: "Reporting & Documentation",
    description: "We prepare a detailed, easy-to-understand report with actionable fixes.",
    icon: FileSearch
  },
  {
    id: 4,
    title: "Follow Up & Retesting",
    description: "We verify that fixes work as expected and ensure long-term security.",
    icon: RefreshCw
  }
];

export default function ApproachCycle() {
  return (
    <div className="relative py-20">
       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
             <ScrollWrapper key={step.id} delay={index * 0.1}>
                <div className="group relative p-8 rounded-[2.5rem] bg-surface/30 border border-white/5 hover:bg-surface/50 transition-all duration-300 h-full flex flex-col items-center text-center">
                   {/* Number Watermark */}
                   <div className="absolute top-4 right-8 text-8xl font-bold text-white/5 group-hover:text-neon-teal/10 transition-colors pointer-events-none">
                      0{step.id}
                   </div>

                   <div className="w-20 h-20 rounded-full bg-gradient-to-br from-neon-teal/10 to-neon-purple/10 border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-[0_0_30px_-10px_var(--color-neon-teal)]">
                      <step.icon className="w-10 h-10 text-white group-hover:text-neon-teal transition-colors" />
                   </div>

                   <h3 className="text-xl font-bold text-white mb-4 relative z-10">{step.title}</h3>
                   <p className="text-gray-400 leading-relaxed text-sm relative z-10">
                      {step.description}
                   </p>

                   {/* Connector Line (Desktop) */}
                   {index < steps.length - 1 && (
                      <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-[2px] bg-gradient-to-r from-neon-teal/50 to-transparent z-0" />
                   )}
                </div>
             </ScrollWrapper>
          ))}
       </div>
    </div>
  );
}
