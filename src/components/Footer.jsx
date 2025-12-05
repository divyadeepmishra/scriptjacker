import { Github, Linkedin, Shield, Twitter } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-dark/80 border-t border-white/5 backdrop-blur-lg relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">

          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="flex items-center space-x-2 group mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-neon-teal to-neon-purple p-[1px]">
                  <div className="w-full h-full bg-black rounded-lg flex items-center justify-center">
                    <Shield className="w-5 h-5 text-white" />
                  </div>
              </div>
              <span className="text-xl font-bold text-white">ScriptJacker</span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              Advanced offensive security for the modern web. We secure the future by breaking it first.
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link href="/services#pentesting" className="hover:text-neon-teal transition-colors">Penetration Testing</Link></li>
              <li><Link href="/services#audits" className="hover:text-neon-teal transition-colors">Smart Contract Audits</Link></li>
              <li><Link href="/services#red-teaming" className="hover:text-neon-teal transition-colors">Red Teaming</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link href="/about" className="hover:text-neon-teal transition-colors">About Us</Link></li>
              <li><Link href="/team" className="hover:text-neon-teal transition-colors">Team</Link></li>
              <li><Link href="/case-studies" className="hover:text-neon-teal transition-colors">Case Studies</Link></li>
              <li><Link href="/contact" className="hover:text-neon-teal transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Connect</h3>
            <div className="flex space-x-4">
               <a href="#" className="text-gray-400 hover:text-white hover:scale-110 transition-all"><Twitter size={20} /></a>
               <a href="#" className="text-gray-400 hover:text-white hover:scale-110 transition-all"><Linkedin size={20} /></a>
               <a href="#" className="text-gray-400 hover:text-white hover:scale-110 transition-all"><Github size={20} /></a>
            </div>
            <div className="mt-4">
               <p className="text-xs text-gray-500">© {new Date().getFullYear()} ScriptJacker. All Rights Reserved. Powered by ScriptJacker.</p>
               <div className="flex space-x-2 mt-2 text-xs text-gray-500">
                 <Link href="/privacy" className="hover:text-gray-300">Privacy</Link>
                 <span>•</span>
                 <Link href="/terms" className="hover:text-gray-300">Terms</Link>
               </div>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
}
