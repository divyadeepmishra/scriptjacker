'use client';

import ApproachCycle from '@/components/ApproachCycle';
import CraftingTrust from '@/components/CraftingTrust';
import Hero from '@/components/Hero';
import ScrollWrapper from '@/components/ScrollWrapper';
import ServiceCard from '@/components/ServiceCard';
import TestimonialCarousel from '@/components/TestimonialCarousel';
import { CreditCard, FileCheck, FileJson, FileSignature, Globe, Handshake, MailWarning, Network, Puzzle, Smartphone, Sparkles, Star, Users, Workflow, ZoomIn } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col gap-20 pb-20">
      <Hero />

      {/* Services Section */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8">
         <ScrollWrapper>
           <div className="text-center max-w-4xl mx-auto mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Services we <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-teal to-neon-purple">provide</span></h2>
              <p className="text-gray-400 text-lg leading-relaxed">
                At Scriptjacker, we go deeper than automated scans. We uncover hidden vulnerabilities across your web, API, mobile, and network systems. With flexible engagement models—project, contract, retainer, or subscription—we provide tailored, actionable insights that transform your security posture. Discover real protection, Where vulnerabilities die, and security thrives.
              </p>
           </div>
         </ScrollWrapper>

         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard
              title="Web Application Pentesting"
              description="We simulate real-world attacks on your websites to uncover hidden vulnerabilities, ensuring your online presence remains robust and secure."
              icon={Globe}
              delay={0.1}
            />
            <ServiceCard
               title="API Security Testing"
               description="Our experts rigorously test your APIs to safeguard data integrity and prevent unauthorized access, keeping your integrations bulletproof."
               icon={Sparkles}
               delay={0.15}
            />
            <ServiceCard
               title="Mobile Application Security"
               description="We evaluate your mobile apps for vulnerabilities and compliance issues, ensuring a secure and seamless user experience."
               icon={Smartphone}
               delay={0.2}
            />
            <ServiceCard
               title="Network Pentesting"
               description="We simulate real-world attacks on your network to identify vulnerabilities in firewalls, routers, and internal systems. Our actionable recommendations help you strengthen defenses."
               icon={Network}
               delay={0.25}
            />
             <ServiceCard
               title="Phishing Simulation"
               description="We conduct controlled phishing tests to evaluate your team's ability to spot suspicious emails. The results guide targeted training, reducing the risk of successful phishing attacks."
               icon={MailWarning}
               delay={0.3}
            />
             <ServiceCard
               title="Custom Needs"
               description="Have unique needs? We tailor our security services to fit your specific requirements. By combining elements from our standard offerings, we craft a personalized strategy."
               icon={Puzzle}
               delay={0.35}
            />
         </div>
      </section>

      {/* Engagement Models Section */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollWrapper>
             <div className="text-center max-w-4xl mx-auto mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Our Engagement <span className="text-white">Models</span></h2>
                <div className="h-1 w-24 bg-neon-teal mx-auto mb-8 rounded-full" />
                <p className="text-gray-400 text-lg leading-relaxed">
                  We understand that every business has different security needs. That's why we offer flexible engagement models tailored to your requirements. Whether you need a one-time assessment or ongoing protection, we provide the right approach to keep your digital assets secure.
                </p>
             </div>
          </ScrollWrapper>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Project-Based */}
              <ScrollWrapper delay={0.1}>
                 <div className="group p-8 rounded-[2.5rem] bg-surface/30 border border-white/5 shadow-lg hover:shadow-neon-teal/20 hover:border-neon-teal/30 hover:bg-surface/50 transition-all duration-300">
                    <div className="w-14 h-14 rounded-2xl bg-neon-teal/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                       <Workflow className="w-8 h-8 text-neon-teal" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">Project-Based</h3>
                    <p className="text-gray-400 mb-6 leading-relaxed">
                       You are having lots of projects? We'll assess your web apps, APIs, mobile apps, or network for vulnerabilities, provide a detailed report, and guide you on fixing the issues. Best for businesses that want to test specific assets before launching or after major updates.
                    </p>
                    <Link href="/contact" className="inline-flex items-center px-6 py-2 rounded-full bg-neon-teal/10 text-neon-teal font-bold hover:bg-neon-teal hover:text-white transition-all text-sm uppercase tracking-wide">
                       Know More
                    </Link>
                 </div>
              </ScrollWrapper>

              {/* Contract-Based */}
              <ScrollWrapper delay={0.2}>
                 <div className="group p-8 rounded-[2.5rem] bg-surface/30 border border-white/5 shadow-lg hover:shadow-neon-teal/20 hover:border-neon-teal/30 hover:bg-surface/50 transition-all duration-300">
                    <div className="w-14 h-14 rounded-2xl bg-neon-purple/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                       <FileSignature className="w-8 h-8 text-neon-purple" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">Contract-Based</h3>
                    <p className="text-gray-400 mb-6 leading-relaxed">
                       Want long-term security? We provide scheduled pentests and continuous security evaluation over a fixed period. Ideal for businesses that need security as part of their long-term strategy.
                    </p>
                    <Link href="/contact" className="inline-flex items-center px-6 py-2 rounded-full bg-neon-purple/10 text-neon-purple font-bold hover:bg-neon-purple hover:text-white transition-all text-sm uppercase tracking-wide">
                       Know More
                    </Link>
                 </div>
              </ScrollWrapper>

              {/* Retainer Model */}
              <ScrollWrapper delay={0.3}>
                 <div className="group p-8 rounded-[2.5rem] bg-surface/30 border border-white/5 shadow-lg hover:shadow-neon-teal/20 hover:border-neon-teal/30 hover:bg-surface/50 transition-all duration-300">
                    <div className="w-14 h-14 rounded-2xl bg-neon-teal/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                       <Handshake className="w-8 h-8 text-neon-teal" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">Retainer Model</h3>
                    <p className="text-gray-400 mb-6 leading-relaxed">
                       Need ongoing security support? We act as your security partner, performing regular vulnerability assessments, quick response to threats, and on-demand testing whenever required. Perfect for businesses looking for continuous protection.
                    </p>
                    <Link href="/contact" className="inline-flex items-center px-6 py-2 rounded-full bg-neon-teal/10 text-neon-teal font-bold hover:bg-neon-teal hover:text-white transition-all text-sm uppercase tracking-wide">
                       Know More
                    </Link>
                 </div>
              </ScrollWrapper>

              {/* Subscription-Based */}
              <ScrollWrapper delay={0.4}>
                 <div className="group p-8 rounded-[2.5rem] bg-surface/30 border border-white/5 shadow-lg hover:shadow-neon-teal/20 hover:border-neon-teal/30 hover:bg-surface/50 transition-all duration-300">
                    <div className="w-14 h-14 rounded-2xl bg-neon-purple/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                       <CreditCard className="w-8 h-8 text-neon-purple" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">Subscription-Based</h3>
                    <p className="text-gray-400 mb-6 leading-relaxed">
                       Prefer predictable costs with ongoing security? We offer frequent security assessments, vulnerability management, and compliance checks at a fixed price. A great choice for businesses that want regular security coverage without surprises.
                    </p>
                     <Link href="/contact" className="inline-flex items-center px-6 py-2 rounded-full bg-neon-purple/10 text-neon-purple font-bold hover:bg-neon-purple hover:text-white transition-all text-sm uppercase tracking-wide">
                       Know More
                    </Link>
                 </div>
              </ScrollWrapper>
          </div>
      </section>

      {/* Testimonials */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-10 bg-white/0">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white">Trusted by <span className="text-neon-purple">Industry Leaders</span></h2>
          </div>
          <TestimonialCarousel />
      </section>

      {/* Our Approach Section */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollWrapper>
          <div className="text-center max-w-4xl mx-auto mb-16">
             <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-teal to-neon-purple">Approach</span></h2>
             <p className="text-gray-400 text-lg leading-relaxed">
               Security isn't guesswork. We follow a rigorous, proven methodology to ensure no stone is left unturned.
             </p>
          </div>
        </ScrollWrapper>
        <ApproachCycle />
      </section>

      {/* What You Get Section */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollWrapper>
           <div className="text-center max-w-4xl mx-auto mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">What You <span className="text-white">Get?</span></h2>
              <div className="h-1 w-24 bg-neon-purple mx-auto mb-8 rounded-full" />
              <p className="text-gray-400 text-lg leading-relaxed">
                After our assessment, we provide a comprehensive results package that tells you exactly what we found and what steps to take next.
              </p>
           </div>
        </ScrollWrapper>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
           {[
             { title: "Desired Report Format", icon: FileJson },
             { title: "Follow-Up Consultation", icon: Users },
             { title: "Exclusive Summary", icon: Star },
             { title: "Detailed Findings", icon: ZoomIn },
             { title: "Professional Format Report", icon: FileCheck },
             { title: "Manual Report", icon: FileSignature }
           ].map((item, i) => (
              <ScrollWrapper key={i} delay={i * 0.1}>
                 <div className="flex items-center p-6 rounded-[2.5rem] bg-surface/30 border border-white/5 shadow-lg hover:shadow-neon-teal/20 hover:border-neon-teal/30 hover:bg-surface/50 transition-all duration-300">
                    <div className="w-12 h-12 rounded-full bg-neon-teal/10 flex items-center justify-center mr-4">
                       <item.icon className="w-6 h-6 text-neon-teal" />
                    </div>
                    <span className="text-lg font-semibold text-white">{item.title}</span>
                 </div>
              </ScrollWrapper>
           ))}
        </div>
      </section>


      {/* Crafting Trust Section */}
      <CraftingTrust />

      {/* CTA Section */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 mb-20">
         <div className="relative rounded-[3rem] overflow-hidden bg-white/5 border border-white/10 p-16 text-center group hover:border-neon-teal/30 transition-all duration-500">
            <div className="absolute inset-0 bg-dark/50 backdrop-blur-sm -z-10" />
            <div className="absolute -top-24 -left-24 w-64 h-64 bg-neon-teal/20 rounded-full blur-[100px]" />
            <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-neon-purple/20 rounded-full blur-[100px]" />

            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Is Your Business Secure Enough?</h2>
            <p className="text-gray-300 max-w-3xl mx-auto mb-10 text-lg leading-relaxed">
               Security isn't a one-time task. When was the last time you tested yours? From in-depth pentests to ongoing security partnerships, we help you stay ahead of threats. Let's discuss your needs today!
            </p>
            <Link
               href="/contact"
               className="inline-block px-12 py-5 rounded-full bg-neon-teal text-white font-bold text-lg hover:scale-105 hover:bg-white hover:text-black transition-all duration-300 shadow-[0_0_40px_-10px_var(--color-neon-teal)] uppercase tracking-wide"
            >
               Order Now
            </Link>
         </div>
      </section>

    </div>
  );
}
