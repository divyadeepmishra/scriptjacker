import CyberBackground from '@/components/CyberBackground';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata = {
  title: 'ScriptJacker LLP',
  description: 'Advanced cybersecurity solutions. Penetration testing, red teaming, and smart contract audits. We break it before they do.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} bg-dark text-foreground antialiased selection:bg-neon-teal/30 selection:text-white overflow-x-hidden`}>
        <CyberBackground />
        <Navbar />
        <main className="relative z-10 min-h-screen flex flex-col">
           {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
