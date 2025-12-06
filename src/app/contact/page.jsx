'use client';

import ContactForm from '@/components/ContactForm';
import ScrollWrapper from '@/components/ScrollWrapper';
import TypewriterText from '@/components/TypewriterText';
import { Mail, MapPin, Phone } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-24 min-h-screen flex flex-col md:flex-row gap-12 items-center md:items-start">
       <div className="md:w-1/2">
          <ScrollWrapper>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-8">Let's Secure Your Project</h1>
            <p className="text-xl text-gray-400 mb-12 max-w-lg">
               Ready to get started? Fill out the form or reach out directly. We usually respond within 24 hours via encrypted channels if requested.
            </p>

            <div className="space-y-6">
              <div className="flex items-center space-x-4 text-gray-300">
                   <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-neon-teal">
                   <Mail />
                 </div>
                 <div>
                   <h4 className="text-sm font-bold text-gray-500 uppercase">Email</h4>
                   <p className="text-lg text-white">support@scriptjacker.in</p>
                 </div>
              </div>

              <div className="flex items-center space-x-4 text-gray-300">
                 <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-neon-purple">
                   <MapPin />
                 </div>
                 <div>
                   <h4 className="text-sm font-bold text-gray-500 uppercase">Location</h4>
                   <p className="text-lg text-white">Distributed / Worldwide</p>
                 </div>
              </div>

               <div className="flex items-center space-x-4 text-gray-300">
                 <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-neon-teal">
                   <Phone />
                 </div>
                 <div>
                   <h4 className="text-sm font-bold text-gray-500 uppercase">Phone</h4>
                   <p className="text-lg text-white">+91 7497054662</p>
                 </div>
              </div>
            </div>
          </ScrollWrapper>
       </div>

       <div className="md:w-1/2 w-full flex flex-col gap-12">
          <ScrollWrapper delay={0.2}>
             <ContactForm />
          </ScrollWrapper>

          <ScrollWrapper delay={0.3}>
             <div className="bg-surface/30 backdrop-blur-md border border-white/10 p-10 rounded-[2rem] shadow-2xl relative overflow-hidden group hover:border-neon-teal/30 transition-all duration-500">
                {/* Background Glow */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-neon-teal/5 rounded-full blur-[100px] -z-10 pointer-events-none" />

                <h3 className="text-2xl font-bold text-neon-teal mb-6">What Happens Next?</h3>

                <div className="space-y-6 text-gray-300 leading-relaxed">
                   <p>
                      <TypewriterText
                        text="Fill out the form above, and one of our team members will get back to you as soon as possible. We value your privacy and confidentiality—your information is secure with us."
                        delay={0.5}
                        speed={20}
                      />
                   </p>
                   <p>
                      <TypewriterText
                        text="If you're interested in a tailored security solution or want to explore collaboration opportunities, let us know in the message section, and we'll work with you to create a plan that fits your unique requirements."
                        delay={3.5}
                        speed={20}
                      />
                   </p>
                   <p className="font-semibold text-white">
                      <TypewriterText
                        text="Let's work together to protect your digital future. We look forward to hearing from you!"
                        delay={8}
                        speed={30}
                      />
                   </p>
                </div>
             </div>
          </ScrollWrapper>
       </div>
    </div>
  );
}
