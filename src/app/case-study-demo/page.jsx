'use client';

import { ArrowLeft, CheckCircle2, ShieldAlert, TrendingUp } from 'lucide-react';
import Link from 'next/link';

export default function CaseStudyDemoPage() {
  return (
    <div className="min-h-screen pt-24 pb-20">
      {/* Hero Header */}
      <section className="container mx-auto px-4 mb-20">
        <Link href="/case-studies" className="inline-flex items-center text-gray-400 hover:text-white mb-8 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Case Studies
        </Link>

        <span className="text-neon-teal font-bold tracking-wider uppercase text-sm mb-4 block">Fintech Security</span>
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-8 max-w-4xl leading-tight">
          Securing a $500M DeFi Protocol from Critical Reentrancy Risks
        </h1>

        <div className="flex flex-wrap gap-4 text-sm text-gray-400 border-t border-white/10 pt-8">
           <div className="mr-8">
              <span className="block text-gray-500 mb-1">Client Industry</span>
              <span className="text-white font-semibold">Decentralized Finance (DeFi)</span>
           </div>
           <div className="mr-8">
              <span className="block text-gray-500 mb-1">Services Provided</span>
              <span className="text-white font-semibold">Smart Contract Audit, Penetration Testing</span>
           </div>
           <div>
              <span className="block text-gray-500 mb-1">Outcome</span>
              <span className="text-neon-teal font-bold">Zero Critical Vulnerabilities</span>
           </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-3 gap-16">
         <div className="lg:col-span-2 space-y-16">

            {/* The Challenge */}
            <div className="bg-surface/30 p-8 rounded-3xl border border-white/5">
                <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-full bg-red-500/10 flex items-center justify-center border border-red-500/20">
                        <ShieldAlert className="w-6 h-6 text-red-500" />
                    </div>
                    <h2 className="text-2xl font-bold text-white">The Challenge</h2>
                </div>
                <p className="text-gray-300 leading-relaxed text-lg">
                   The client, a rapidly growing DeFi lending protocol, was preparing for a major mainnet launch with over $500M in projected total value locked (TVL). They needed assurance that their smart contracts were resilient against complex attack vectors like flash loans and reentrancy attacks, which had recently plagued similar protocols.
                </p>
            </div>

            {/* The Solution */}
            <div className="bg-surface/30 p-8 rounded-3xl border border-white/5">
                <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-full bg-neon-purple/10 flex items-center justify-center border border-neon-purple/20">
                         <div className="w-6 h-6 text-neon-purple font-bold flex items-center justify-center text-xl">⚡</div>
                    </div>
                    <h2 className="text-2xl font-bold text-white">Our Solution</h2>
                </div>
                <p className="text-gray-300 leading-relaxed text-lg mb-6">
                   ScriptJacker deployed a team of senior blockchain security researchers to conduct a comprehensive audit. Our methodology included:
                </p>
                <ul className="space-y-4">
                    {[
                        "Manual Line-by-Line Code Review",
                        "Automated Fuzz Testing for Edge Cases",
                        "Formal Verification of Core Logic",
                        "Simulation of Mainnet Fork Attacks"
                    ].map((item, i) => (
                        <li key={i} className="flex items-start gap-3">
                            <CheckCircle2 className="w-5 h-5 text-neon-teal shrink-0 mt-1" />
                            <span className="text-gray-300">{item}</span>
                        </li>
                    ))}
                </ul>
            </div>

            {/* The Results */}
            <div className="bg-surface/30 p-8 rounded-3xl border border-white/5 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-neon-teal/5 rounded-full blur-3xl -z-10" />

                <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-full bg-neon-teal/10 flex items-center justify-center border border-neon-teal/20">
                        <TrendingUp className="w-6 h-6 text-neon-teal" />
                    </div>
                    <h2 className="text-2xl font-bold text-white">The Results</h2>
                </div>
                <p className="text-gray-300 leading-relaxed text-lg mb-6">
                   Our team identified <span className="text-white font-bold">3 Critical</span> and <span className="text-white font-bold">5 High-severity</span> vulnerabilities, including a subtle read-only reentrancy bug that could have allowed an attacker to manipulate price oracles.
                </p>
                <p className="text-gray-300 leading-relaxed text-lg">
                   The client remediation team patched all issues within 48 hours. The protocol launched successfully with zero security incidents to date.
                </p>
            </div>

         </div>

         {/* Sidebar / CTA */}
         <div className="lg:col-span-1">
             <div className="sticky top-24 bg-gradient-to-br from-surface to-black border border-white/10 p-8 rounded-3xl">
                 <h3 className="text-xl font-bold text-white mb-4">Ready to secure your project?</h3>
                 <p className="text-gray-400 mb-8">
                    Don't leave your security to chance. Get a comprehensive audit today.
                 </p>
                 <Link href="/contact" className="block w-full text-center py-4 rounded-xl bg-neon-teal text-white font-bold hover:bg-white hover:text-black transition-all uppercase tracking-wide shadow-lg shadow-neon-teal/20">
                    Request an Audit
                 </Link>
             </div>
         </div>
      </section>
    </div>
  );
}
