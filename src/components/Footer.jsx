import { FileText, Github, Instagram, Linkedin, Shield, Twitter } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-dark/80 border-t border-white/5 backdrop-blur-lg relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-8">

          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center space-x-2 group mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-neon-teal to-neon-purple p-[1px]">
                  <div className="w-full h-full bg-black rounded-lg flex items-center justify-center">
                    <Shield className="w-5 h-5 text-white" />
                  </div>
              </div>
              <span className="text-xl font-bold text-white">ScriptJacker LLP</span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              Advanced offensive security for the modern web. We secure the future by breaking it first.
            </p>
            <div className="space-y-2 text-sm">
              <p className="text-gray-400">
                <span className="text-white font-semibold">Email:</span>{' '}
                <a href="mailto:support@scriptjacker.in" className="text-neon-teal hover:underline">
                  support@scriptjacker.in
                </a>
              </p>
              <p className="text-gray-400">
                <span className="text-white font-semibold">Phone:</span>{' '}
                <a href="tel:+917497054662" className="text-neon-teal hover:underline">
                  +91 7497054662
                </a>
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link href="/services#pentesting" className="hover:text-neon-teal transition-colors">Penetration Testing</Link></li>
              <li><Link href="/services#audits" className="hover:text-neon-teal transition-colors">Smart Contract Audits</Link></li>
              <li><Link href="/services#red-teaming" className="hover:text-neon-teal transition-colors">Red Teaming</Link></li>
              <li><Link href="/services#code-review" className="hover:text-neon-teal transition-colors">Security Code Review</Link></li>
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
            <h3 className="text-white font-semibold mb-4">Legal</h3>
            <ul className="space-y-2 text-sm text-gray-400 mb-6">
              <li>
                <Link href="/privacy" className="hover:text-neon-teal transition-colors flex items-center gap-2">
                  <Shield className="w-4 h-4" />
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-neon-teal transition-colors flex items-center gap-2">
                  <FileText className="w-4 h-4" />
                  Terms of Service
                </Link>
              </li>
            </ul>

            <h3 className="text-white font-semibold mb-4">Connect</h3>
            <div className="flex space-x-4">
               <a href="https://x.com/scriptjacker" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white hover:scale-110 transition-all" aria-label="Twitter"><Twitter size={20} /></a>
               <a href="https://www.instagram.com/scriptjacker" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white hover:scale-110 transition-all" aria-label="Instagram"><Instagram size={20} /></a>
               <a href="https://www.linkedin.com/company/scriptjacker/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white hover:scale-110 transition-all" aria-label="LinkedIn"><Linkedin size={20} /></a>
               <a href="https://github.com/scriptjacker/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white hover:scale-110 transition-all" aria-label="GitHub"><Github size={20} /></a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/5 pt-8">
            <p className="text-xs text-gray-500 text-center md:text-center">
              © {new Date().getFullYear()} ScriptJacker LLP. All Rights Reserved. | Powered by ScriptJacker LLP
            </p>
        </div>
      </div>
    </footer>
  );
}
