'use client';

import ApproachCycle from '@/components/ApproachCycle';
import ScrollWrapper from '@/components/ScrollWrapper';
import StatsCounter from '@/components/StatsCounter';
import WhyChooseUs from '@/components/WhyChooseUs';

export default function AboutPage() {
  return (
    <div className="pb-20">

      {/* Hero Header */}
      <div className="relative pt-32 pb-20 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
         <ScrollWrapper>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">About Us</h1>
            <p className="text-xl md:text-2xl text-neon-teal font-semibold tracking-wider uppercase">Act today or risk tomorrow!</p>
         </ScrollWrapper>
      </div>

      {/* Intro Grid */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 mb-32">
         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ScrollWrapper delay={0.1}>
               <div className="bg-surface/30 p-10 rounded-[2.5rem] border border-white/5 h-full hover:border-neon-teal/30 transition-all duration-300">
                  <div className="h-1 w-12 bg-neon-teal mb-6 rounded-full" />
                  <h3 className="text-2xl font-bold text-white mb-4">Who Are We</h3>
                  <p className="text-gray-400 leading-relaxed">
                     ScriptJacker is a dedicated cybersecurity firm focused on authentic, hands-on penetration testing. We work exclusively with one client at a time to ensure personalized attention and real-world insights into your security posture.
                  </p>
               </div>
            </ScrollWrapper>

            <ScrollWrapper delay={0.2}>
               <div className="bg-surface/30 p-10 rounded-[2.5rem] border border-white/5 h-full hover:border-neon-purple/30 transition-all duration-300">
                  <div className="h-1 w-12 bg-neon-purple mb-6 rounded-full" />
                  <h3 className="text-2xl font-bold text-white mb-4">Our Mission</h3>
                  <p className="text-gray-400 leading-relaxed">
                     Our mission is simple: empower businesses to safeguard their digital assets. We aim to provide clear, actionable security solutions that protect your assets and give you the confidence to grow without fear.
                  </p>
               </div>
            </ScrollWrapper>

             <ScrollWrapper delay={0.3}>
               <div className="bg-surface/30 p-10 rounded-[2.5rem] border border-white/5 h-full hover:border-neon-teal/30 transition-all duration-300">
                  <div className="h-1 w-12 bg-neon-teal mb-6 rounded-full" />
                  <h3 className="text-2xl font-bold text-white mb-4">What We Do</h3>
                   <ul className="space-y-2 text-gray-400">
                      {['Web Pentesting', 'API Security', 'Mobile Testing', 'Network Testing', 'Phishing Simulation', 'Custom Solutions'].map((item, i) => (
                         <li key={i} className="flex items-center">
                            <span className="w-1.5 h-1.5 bg-neon-teal rounded-full mr-3" />
                            {item}
                         </li>
                      ))}
                   </ul>
               </div>
            </ScrollWrapper>
         </div>
      </section>

      {/* 4-D Process */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 mb-32 bg-white/0">
          <div className="text-center mb-10">
             <ScrollWrapper>
                <h2 className="text-4xl md:text-5xl font-bold text-white">Our 4-D Process</h2>
             </ScrollWrapper>
          </div>
          <ApproachCycle />
      </section>

      {/* Why Choose Us */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 mb-32">
         <WhyChooseUs />
      </section>

      {/* Stats */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8">
         <div className="bg-surface/20 border border-white/5 rounded-[2.5rem] px-6 md:px-12 backdrop-blur-sm">
            <div className="flex flex-col md:flex-row items-center justify-between py-12 gap-8">
               <div className="md:w-1/4">
                  <h3 className="text-2xl font-bold text-white mb-2">Some Numbers</h3>
                  <p className="text-gray-400 text-sm">Each secured client marks a step forward.</p>
               </div>
               <div className="md:w-3/4 w-full">
                  <StatsCounter />
               </div>
            </div>
         </div>
      </section>

    </div>
  );
}
