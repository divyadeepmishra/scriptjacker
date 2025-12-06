'use client';

import { cn } from '@/lib/utils';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, Shield, X } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

const navItems = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Contact', href: '/contact' },
  { name: 'Team', href: '/team' },
  { name: 'Blogs', href: 'https://blogs.scriptjacker.in' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none">
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 2, ease: "easeInOut" }}
        className={cn(
          'pointer-events-auto relative flex items-center justify-between px-2 py-2 pr-3 transition-all duration-[4000ms] ease-[cubic-bezier(0.22,1,0.36,1)]',
          isScrolled
            ? 'w-auto mx-auto bg-dark/60 backdrop-blur-2xl border border-white/10 rounded-full shadow-[0_8px_32px_0_rgba(0,0,0,0.5)]'
            : 'w-full max-w-7xl bg-transparent border-transparent'
        )}
      >
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2 group shrink-0 mr-8 pl-4">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-neon-teal to-neon-purple p-[1px] shadow-[0_0_15px_-3px_var(--color-neon-teal)] group-hover:shadow-[0_0_25px_-5px_var(--color-neon-teal)] transition-all duration-500">
               <div className="w-full h-full bg-black rounded-full flex items-center justify-center group-hover:bg-opacity-80 transition-all">
                  <Shield className="w-5 h-5 text-white" />
               </div>
            </div>
            <span className={cn(
                "text-lg font-bold tracking-tight transition-all duration-300",
                isScrolled ? "text-white" : "text-white"
            )}>
              ScriptJacker LLP
            </span>
        </Link>

        {/* Desktop Nav */}
        <div className={cn("hidden md:flex items-center space-x-1 p-1 rounded-full", isScrolled ? "bg-white/5 border border-white/5" : "")}>
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              const isExternal = item.href.startsWith('http');
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  target={isExternal ? "_blank" : undefined}
                  rel={isExternal ? "noopener noreferrer" : undefined}
                  className={cn(
                    "relative px-5 py-2.5 text-sm font-medium transition-all rounded-full hover:shadow-[0_0_20px_-5px_rgba(255,255,255,0.2)]",
                    isActive
                      ? "text-neon-teal bg-white/10 shadow-[0_0_15px_-5px_var(--color-neon-teal)]"
                      : "text-gray-300 hover:text-white hover:bg-white/10"
                  )}
                >
                  {item.name}
                </Link>
              );
            })}
        </div>

        {/* CTA */}
        <div className="hidden md:flex shrink-0 ml-4">
             <Link
              href="/contact"
              className="px-6 py-2.5 rounded-full bg-neon-teal text-white text-sm font-bold shadow-[0_0_20px_-5px_var(--color-neon-teal)] hover:shadow-[0_0_30px_-5px_var(--color-neon-teal)] hover:scale-105 transition-all duration-300 uppercase tracking-wide"
            >
              Request Quote
            </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white p-2"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="pointer-events-auto absolute top-20 left-4 right-4 p-6 rounded-3xl bg-dark/95 backdrop-blur-xl border border-white/10 shadow-2xl md:hidden"
          >
             <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="text-lg font-medium text-gray-300 hover:text-neon-teal"
                >
                  {item.name}
                </Link>
              ))}
              <Link
                href="/contact"
                onClick={() => setIsOpen(false)}
                className="w-full text-center mt-4 px-6 py-3 rounded-xl bg-gradient-to-r from-neon-teal to-neon-purple font-bold text-white"
              >
                Get Secure
              </Link>
             </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
