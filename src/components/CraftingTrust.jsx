'use client';

import ScrollWrapper from '@/components/ScrollWrapper';
import { AnimatePresence, motion } from 'framer-motion';
import { Minus, Plus } from 'lucide-react';
import { useState } from 'react';

const items = [
  {
    id: 1,
    title: "Personalized Attention",
    content: "We don't treat you like just another ticket number. You get dedicated security experts who understand your specific business logic and risks."
  },
  {
    id: 2,
    title: "Flexible Engagement Models",
    content: "Whether you need a one-time audit, a retainer for ongoing support, or a subscription for continuous monitoring, we have a model that fits your needs."
  },
  {
    id: 3,
    title: "Real-World Manual Testing",
    content: "Automated scanners miss complex logic flaws. We use human intelligence and creativity to simulate real-world attacks that tools can't find."
  },
  {
    id: 4,
    title: "Detailed & Actionable Reporting",
    content: "We provide clear, reproducible steps for every vulnerability, along with remediation advice that your developers can actually use."
  },
  {
    id: 5,
    title: "Follow-Up & Retesting",
    content: "We don't just drop a report and leave. We retest fixes to ensure they effectively mitigate the risks without introducing new ones."
  },
  {
    id: 6,
    title: "Cost-Effective Solutions",
    content: "High-quality security shouldn't break the bank. Our tailored scope ensures you pay for what you actually need, maximizing your ROI."
  },
  {
    id: 7,
    title: "Rapid Response",
    content: "Security incidents require speed. Our team is agile and responsive, helping you address critical vulnerabilities before they are exploited."
  },
  {
    id: 8,
    title: "Quality Over Quantity",
    content: "We focus on finding high-impact vulnerabilities that matter to your business, rather than inflating reports with low-risk noise."
  }
];

const AccordionItem = ({ item, expanded, setExpanded }) => {
  const isOpen = expanded === item.id;

  return (
    <motion.div
      initial={false}
      onClick={() => setExpanded(isOpen ? false : item.id)}
      className={`cursor-pointer mb-4 rounded-full overflow-hidden border transition-all duration-300 ${
        isOpen
          ? 'bg-neon-teal/20 border-neon-teal shadow-[0_0_20px_-5px_var(--color-neon-teal)]'
          : 'bg-surface/40 border-white/5 shadow-lg hover:shadow-neon-teal/20 hover:border-neon-teal/30 hover:bg-surface/50'
      }`}
    >
      <div className="flex items-center justify-between px-6 py-4 md:px-8 md:py-5">
         <span className={`text-lg font-medium transition-colors ${isOpen ? 'text-white' : 'text-gray-300'}`}>
            {item.title}
         </span>
         <div className={`p-1 rounded-full ${isOpen ? 'bg-neon-teal text-black' : 'bg-white/10 text-white'}`}>
            {isOpen ? <Minus size={16} /> : <Plus size={16} />}
         </div>
      </div>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="px-6 pb-6 md:px-8 md:pb-8 text-gray-300 text-base leading-relaxed border-t border-white/5 pt-2">
               {item.content}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default function CraftingTrust() {
  const [expanded, setExpanded] = useState(false);

  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 bg-gradient-to-b from-transparent via-neon-teal/5 to-transparent">
        <ScrollWrapper>
           <div className="text-center max-w-4xl mx-auto mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Crafting Security, <br/><span className="text-neon-teal">Creating Trust</span></h2>
              <p className="text-gray-400 text-lg leading-relaxed max-w-2xl mx-auto">
                Ever wonder if your current security measures are really enough? Discover how ScriptJacker's hands-on, personalized approach uncovers every hidden vulnerability to keep your business truly safe.
              </p>
           </div>
        </ScrollWrapper>

        <div className="max-w-3xl mx-auto">
           {items.map((item, index) => (
              <ScrollWrapper key={item.id} delay={index * 0.05}>
                 <AccordionItem item={item} expanded={expanded} setExpanded={setExpanded} />
              </ScrollWrapper>
           ))}
        </div>
    </section>
  );
}
