'use client';

import ScrollWrapper from '@/components/ScrollWrapper';
import ServiceCard from '@/components/ServiceCard';
import TestimonialCarousel from '@/components/TestimonialCarousel';
import { CloudLightning, Code, Fingerprint, Server, Shield, Wifi } from 'lucide-react';

export default function ServicesPage() {
  const services = [
    { title: "Penetration Testing", description: "Comprehensive testing of web, mobile, and API interfaces.", icon: Shield },
    { title: "Smart Contract Audits", description: "Line-by-line analysis of EVM and Rust smart contracts.", icon: Fingerprint },
    { title: "Red Teaming", description: "Simulating APTs to test your physical and digital defenses.", icon: Server },
    { title: "Source Code Review", description: "Identifying security flaws in your codebase before deployment.", icon: Code },
    { title: "Cloud Security", description: "AWS/Azure/GCP infrastructure hardening and IAM review.", icon: CloudLightning },
    { title: "IoT Security", description: "Firmware analysis and hardware hacking for connected devices.", icon: Wifi },
  ];

  return (
    <div className="container mx-auto px-4 py-24">
      <ScrollWrapper>
        <div className="max-w-3xl mb-16">
           <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Our Services</h1>
           <p className="text-xl text-gray-400">
             We provide deep-dive security assessments that go beyond automated scanners.
             Handcrafted exploits, business logic analysis, and zero-false-positive reporting.
           </p>
        </div>
      </ScrollWrapper>


      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
        {services.map((s, i) => (
          <ServiceCard key={s.title} {...s} delay={i * 0.1} />
        ))}
      </div>

      <ScrollWrapper>
        <div className="w-full bg-surface/30 border border-white/5 rounded-[2.5rem] p-10 mb-20">
           <div className="flex flex-col md:flex-row justify-between items-center gap-10">
              <div className="max-w-2xl">
                 <h2 className="text-3xl font-bold text-white mb-4">Opportunities</h2>
                 <p className="text-gray-300 leading-relaxed mb-6">
                   We are always looking for talented individuals to join our red team. Whether you are a student looking for an internship or a professional seeking part-time engagements, we have a spot for you.
                 </p>
                 <div className="flex flex-wrap gap-4">
                    <span className="px-4 py-2 rounded-full bg-neon-teal/10 text-neon-teal text-sm font-bold border border-neon-teal/20">Part-Time Pentester</span>
                    <span className="px-4 py-2 rounded-full bg-neon-purple/10 text-neon-purple text-sm font-bold border border-neon-purple/20">Security Intern</span>
                    <span className="px-4 py-2 rounded-full bg-white/10 text-white text-sm font-bold border border-white/20">Research Analyst</span>
                 </div>
              </div>
              <a href="mailto:careers@scriptjacker.in" className="shrink-0 px-8 py-4 bg-white text-black font-bold rounded-full hover:scale-105 transition-transform">
                 Apply Now
              </a>
           </div>
        </div>
      </ScrollWrapper>

       <ScrollWrapper>
          <div className="text-center mb-12">
             <h2 className="text-3xl font-bold text-white">What Our Clients Say</h2>
          </div>
          <TestimonialCarousel />
       </ScrollWrapper>
    </div>
  );
}
