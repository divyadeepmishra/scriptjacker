'use client';

import ScrollWrapper from '@/components/ScrollWrapper';
import ServiceCard from '@/components/ServiceCard';
import ServiceModal from '@/components/ServiceModal';
import TestimonialCarousel from '@/components/TestimonialCarousel';
import { CloudLightning, Code, FileCheck, Fingerprint, Server, Shield, Wifi } from 'lucide-react';
import { useState } from 'react';

export default function ServicesPage() {
  const [selectedService, setSelectedService] = useState(null);

  const services = [
    {
      title: "Penetration Testing",
      description: "Comprehensive testing of web, mobile, and API interfaces.",
      detailedDescription: "We don't just run automated scanners. Our experts simulate real-world attacks on your web applications, mobile apps, and APIs. We uncover business logic flaws, injection vulnerabilities, and authentication bypasses that machines miss. You get a prioritized remediation plan to fix holes before hackers find them.",
      icon: Shield
    },
    {
      title: "Compliance Testing",
      description: "Line-by-line analysis of EVM and Rust smart contracts.",
      detailedDescription: "In the blockchain world, code is law—and bugs are expensive. We conduct rigorous, line-by-line manual reviews of your Solidity or Rust contracts. We check for reentrancy attacks, gas optimization issues, and logic errors to ensure your DeFi protocol or NFT project is secure before launch.",
      icon: Fingerprint
    },
    {
      title: "Red Teaming",
      description: "Simulating APTs to test your physical and digital defenses.",
      detailedDescription: "Pentesting tests your shields; Red Teaming tests your reaction. We launch a full-scope, stealthy attack simulation mimicking Advanced Persistent Threats (APTs). From social engineering employees to breaching physical offices and pivoting through networks, we test how well your SOC detects and responds to a sophisticated adversary.",
      icon: Server
    },
    {
      title: "Source Code Review",
      description: "Identifying security flaws in your codebase before deployment.",
      detailedDescription: "Catch bugs before they build. We analyze your source code for insecure coding patterns, hardcoded secrets, and architectural flaws. Supporting languages like Python, Go, Java, JavaScript, and C++, we help you shift security left in your CI/CD pipeline.",
      icon: Code
    },
    {
      title: "Cloud Security",
      description: "AWS/Azure/GCP infrastructure hardening and IAM review.",
      detailedDescription: "Misconfigured cloud buckets are the #1 cause of data leaks. We review your AWS, Azure, or GCP environment against CIS benchmarks. We inspect IAM roles, security groups, public storage, and Kubernetes clusters to ensure your cloud infrastructure is hardened against compromise.",
      icon: CloudLightning
    },
    {
      title: "IoT Security",
      description: "Firmware analysis and hardware hacking for connected devices.",
      detailedDescription: "Connecting the physical to the digital introduces new risks. We reverse engineer firmware, dump flash memory, and analyze communication protocols (BLE, Zigbee, MQTT) to find vulnerabilities in your connected devices, ensuring your hardware doesn't become a gateway for attackers.",
      icon: Wifi
    },
    {
      title: "Compliance Testing",
      description: "Gap analysis and readiness assessments for SOC2, ISO 27001, and GDPR.",
      detailedDescription: "Regulatory compliance isn't just a checkbox; it's a security baseline. We help you navigate the complex landscape of SOC2, ISO 27001, HIPAA, and GDPR. We conduct gap analyses, readiness assessments, and technical audits to ensure your infrastructure and policies meet strict global standards.",
      icon: FileCheck
    },
  ];

  return (
    <div className="container mx-auto px-4 py-24">
      {selectedService && (
        <ServiceModal
          isOpen={true}
          onClose={() => setSelectedService(null)}
          title={selectedService.title}
          description={selectedService.detailedDescription}
          icon={selectedService.icon}
        />
      )}
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
          <ServiceCard
             key={s.title}
             {...s}
             delay={i * 0.1}
             onLearnMore={() => setSelectedService(s)}
          />
        ))}
      </div>

      <ScrollWrapper>
        <div id="custom-solutions" className="w-full bg-surface/30 border border-white/5 rounded-[2.5rem] p-10 mb-20 scroll-mt-24">
           <div className="flex flex-col md:flex-row justify-between items-center gap-10">
              <div className="max-w-2xl">
                 <h2 className="text-3xl font-bold text-white mb-4">Custom Solutions</h2>
                 <p className="text-gray-300 leading-relaxed mb-6">
                   Every organization has unique security challenges. If our standard packages don't fit your needs, we can build a tailored security strategy just for you. From hybrid assessments to specialized consulting, we've got you covered.
                 </p>
              </div>
              <a href="/contact" className="shrink-0 px-8 py-4 bg-neon-teal text-white font-bold rounded-full hover:bg-white hover:text-black hover:scale-105 transition-all">
                 Contact Us
              </a>
           </div>
        </div>
      </ScrollWrapper>

      <ScrollWrapper>
        <div id="opportunities" className="w-full bg-surface/30 border border-white/5 rounded-[2.5rem] p-10 mb-20 scroll-mt-24">
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
              <a href="mailto:careers@scriptjacker.in" className="shrink-0 px-8 py-4 bg-neon-teal text-white font-bold rounded-full hover:bg-white hover:text-black hover:scale-105 transition-all">
                 Apply Now
              </a>
           </div>
        </div>
      </ScrollWrapper>

       <ScrollWrapper>
           <div id="testimonials" className="text-center mb-12 scroll-mt-24">
              <h2 className="text-3xl font-bold text-white">What Our Clients Say</h2>
           </div>
          <TestimonialCarousel />
       </ScrollWrapper>
    </div>
  );
}
