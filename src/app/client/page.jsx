'use client';

import { motion } from 'framer-motion';
import { Award, Briefcase, Building2, Cpu, Globe, Hexagon, ShieldCheck, Zap } from 'lucide-react';

// --- CLIENT DATA ---
// Update this array to change logos
// To use real images:
// 1. Upload images to /public/logos/
// 2. Add 'logo: "/logos/my-logo.png"' to the object
// 3. Uncomment the <Image> component below
const clients = [
  { id: 1, name: "TechCorp Global", icon: Building2 },
  { id: 2, name: "SecureNet Systems", icon: ShieldCheck },
  { id: 3, name: "Future Finance", icon: Hexagon },
  { id: 4, name: "Global Ventures", icon: Globe },
  { id: 5, name: "Innovate Labs", icon: Zap },
  { id: 6, name: "Quantum Computing", icon: Cpu },
  { id: 7, name: "Elite Security", icon: Award },
  { id: 8, name: "Enterprise Solutions", icon: Briefcase },
];

export default function ClientPage() {
  return (
    <div className="min-h-screen pt-24 pb-20">
      {/* Hero Section */}
      <section className="container mx-auto px-4 mb-20 text-center">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-neon-teal font-bold tracking-wider uppercase text-sm mb-4 block"
        >
          Our Partners
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-6xl font-bold text-white mb-6"
        >
          Trusted by Industry Leaders
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed"
        >
          We collaborate with forward-thinking companies to secure their infrastructure and build resilience against evolving threats.
        </motion.p>
      </section>

      {/* Logo Grid */}
      <section className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {clients.map((client, index) => (
            <motion.div
              key={client.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              className="group relative bg-surface/30 border border-white/5 rounded-2xl p-10 flex flex-col items-center justify-center hover:border-neon-teal/30 hover:bg-surface/50 transition-all duration-300 aspect-square"
            >
               {/* Placeholder Icon - Replace with <Image> when you have real logos */}
               <div className="w-16 h-16 mb-4 text-gray-600 group-hover:text-neon-teal transition-colors">
                  <client.icon className="w-full h-full" strokeWidth={1.5} />
               </div>

               <span className="text-gray-500 font-medium group-hover:text-white transition-colors text-center">
                 {client.name}
               </span>

               {/*
               // EXAMPLE FOR REAL IMAGE USAGE:
               /*
               <div className="relative w-full h-full">
                   <Image
                     src={client.logo}
                     alt={client.name}
                     fill
                     className="object-contain p-4 opacity-50 group-hover:opacity-100 transition-opacity grayscale group-hover:grayscale-0"
                   />
               </div>
               */
               }
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
