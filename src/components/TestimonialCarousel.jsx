'use client';

import ScrollWrapper from '@/components/ScrollWrapper';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    quote: "We've recently received several security reports from Parth Narula, founder of ScriptJacker. The reports were accurate, and the discussions were constructive and fair. We're completely satisfied with the service and happy to have our security improved as a result.",
    author: "Aleksandr Tischenko",
    role: "CEO",
    company: "LAMANTINE SOFTWARE A.S."
  },
  {
    id: 2,
    quote: "ScriptJacker has been a really nice from the start! They reached out to us kindly asking to pentest our platform, and to our surprise, came back very shortly after our confirmation with different and detailed reports. Our platform and users are safer, thanks to ScriptJacker!",
    author: "Sutty",
    role: "Team",
    company: "SUTTY LABOR COOPERATIVE LTD."
  },
  {
    id: 3,
    quote: "We had a great experience working together. Communication was quick and thorough, with all of the information we needed to triage and get to fixing the bugs as soon as possible.",
    author: "Clement Picquet",
    role: "Co-Founder",
    company: "DLX MEDIA LLC & SCTR SERVICES LLC"
  },
  {
    id: 4,
    quote: "Parth proactively identified security concerns and provided a thorough, well-documented report. His insights helped us address vulnerabilities efficiently. Great work!",
    author: "Dave Lowe",
    role: "Founder & CEO",
    company: "ISIFEDERAL"
  }
];

export default function TestimonialCarousel() {
  // Triple the list for smoother seamless looping
  const duplicatedTestimonials = [...testimonials, ...testimonials, ...testimonials];

  return (
    <ScrollWrapper>
      <div className="w-full overflow-hidden py-20 relative bg-black/20 backdrop-blur-sm rounded-[2rem]">
         {/* Fade masks */}
         <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-dark to-transparent z-10 pointer-events-none" />
         <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-dark to-transparent z-10 pointer-events-none" />

         <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
            {duplicatedTestimonials.map((t, i) => (
              <div
                 key={`${t.id}-${i}`}
                 className="w-[400px] md:w-[500px] mx-6 p-10 rounded-[3.5rem] bg-surface/40 border border-white/5 relative flex flex-col justify-between hover:bg-surface/60 hover:border-neon-teal/50 hover:shadow-[0_0_60px_-15px_var(--color-neon-teal)] transition-all duration-500 select-none group backdrop-blur-md"
              >
                 <Quote className="absolute top-8 right-8 text-white/5 w-12 h-12 group-hover:text-neon-teal/20 transition-colors duration-500" />

                 <p className="text-xl text-gray-200 mb-8 italic leading-relaxed font-light">"{t.quote}"</p>

                 <div className="flex items-center space-x-5">
                   <div className="w-12 h-12 rounded-full bg-gradient-to-br from-gray-800 to-gray-950 border border-white/10 flex items-center justify-center text-sm font-bold text-white shadow-inner">
                     {t.author.charAt(0)}
                   </div>
                   <div>
                     <h4 className="text-white font-bold text-base">{t.author}</h4>
                     <p className="text-neon-teal/80 text-xs font-semibold tracking-wider uppercase">{t.role}, {t.company}</p>
                   </div>
                 </div>
              </div>
            ))}
         </div>
      </div>
    </ScrollWrapper>
  );
}
