'use client';

import ScrollWrapper from '@/components/ScrollWrapper';
import { BadgeCheck, Clock, FileText, Globe, Layers, ShieldCheck, UserCheck } from 'lucide-react';
import { useState } from 'react';

const reasons = [
  {
    title: "Actual Pentests, Not Just Scan",
    description: "At ScriptJacker, we deliver genuine penetration tests—not mere scans. Our hands-on, expert evaluations expose hidden vulnerabilities that automated tools often overlook, ensuring true security.",
    icon: UserCheck
  },
  {
    title: "Industry-Standard Methodologies",
    description: "We adhere to rigorous, globally recognized frameworks like OWASP and OSSTMM. This ensures our testing is comprehensive, consistent, and meets the highest professional standards.",
    icon: Globe
  },
  {
    title: "Detailed, Actionable, and Custom Reports",
    description: "Our reports go beyond generic data. We provide clear, customized insights with step-by-step remediation guides tailored to your specific tech stack and business logic.",
    icon: FileText
  },
  {
    title: "Fast Turnaround, Transparent Communication",
    description: "Security moves fast, and so do we. We offer rapid deployment and keep you in the loop at every stage, ensuring no surprises and quick remediation cycles.",
    icon: Clock
  },
  {
    title: "Confidential, Ethical, and Professional Approach",
    description: "Trust is paramount. We operate with strict confidentiality agreements and ethical guidelines, ensuring your data and reputation are protected throughout the engagement.",
    icon: ShieldCheck
  },
  {
    title: "Cost-Effective & Scalable",
    description: "Get enterprise-grade security without the overhead. Our flexible engagement models scale with your needs, maximizing ROI while minimizing risk.",
    icon: Layers
  },
  {
    title: "Swift Response, Faster Security",
    description: "When vulnerabilities are found, time is of the essence. Our team is ready to assist with rapid verification and guidance to close gaps before they can be exploited.",
    icon: BadgeCheck
  }
];

export default function WhyChooseUs() {
  const [expanded, setExpanded] = useState(0); // Default first one open

  return (
    <div className="flex flex-col md:flex-row gap-8 items-start">
       <div className="md:w-1/3">
          <ScrollWrapper>
             <h2 className="text-4xl font-bold text-white mb-6">Why Choose <br className="hidden md:block"/>Scriptjacker?</h2>
             <p className="text-gray-400 leading-relaxed mb-8">
               At ScriptJacker, we believe that quality and clarity set us apart. We don't just run automated scans; we deliver real, in-depth testing with actionable insights. With our one-client-at-a-time approach and flexible engagement models, you receive dedicated service that's tailored to your unique challenges. Trust us to protect what matters most.
             </p>
          </ScrollWrapper>
       </div>

       <div className="md:w-2/3 w-full">
         <div className="bg-surface/30 rounded-[2.5rem] p-6 border border-white/5 shadow-lg hover:shadow-neon-teal/20 hover:border-neon-teal/30 hover:bg-surface/50 transition-all duration-300">
            {reasons.map((item, index) => {
               const isOpen = expanded === index;
               return (
                  <ScrollWrapper key={index} delay={index * 0.05}>
                     <div
                        onClick={() => setExpanded(isOpen ? -1 : index)}
                        className={`mb-4 rounded-xl transition-all duration-300 cursor-pointer overflow-hidden ${
                           isOpen ? 'bg-white/5' : 'hover:bg-white/5'
                        }`}
                     >
                        <div className="flex items-center justify-between p-4">
                           <div className="flex items-center space-x-4">
                              <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors ${isOpen ? 'bg-neon-teal text-black' : 'bg-white/10 text-gray-400'}`}>
                                 {isOpen ? <item.icon size={16} /> : <div className="w-2 h-2 rounded-full bg-current" />}
                              </div>
                              <span className={`font-semibold text-lg ${isOpen ? 'text-neon-teal' : 'text-gray-300'}`}>{item.title}</span>
                           </div>
                           <div className={`transform transition-transform duration-300 ${isOpen ? 'rotate-180 text-neon-teal' : 'text-gray-500'}`}>
                              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9l6 6 6-6"/></svg>
                           </div>
                        </div>

                        <div className={`px-16 overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-60 pb-6 opacity-100' : 'max-h-0 opacity-0'}`}>
                           <p className="text-gray-400 leading-relaxed text-sm">
                              {item.description}
                           </p>
                        </div>
                     </div>
                  </ScrollWrapper>
               );
            })}
         </div>
       </div>
    </div>
  );
}
