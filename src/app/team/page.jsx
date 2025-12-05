import ScrollWrapper from '@/components/ScrollWrapper';
import { Linkedin, Mail, MapPin, Phone } from 'lucide-react';
import Link from 'next/link';

export default function TeamPage() {
  const team = [
    {
      name: "Parth Narula",
      role: "Founder · Penetration Tester",
      bio: "Leading the charge in offensive security. Expert in identifying critical vulnerabilities and securing digital assets.",
      image: "",
      address: "India",
      phone: "+91 7497054662",
      email: "support@scriptjacker.in",
      linkedin: "https://linkedin.com"
    },
    {
      name: "Sarah K.",
      role: "Smart Contract Lead",
      bio: "Ph.D. in Cryptography. Secured over $1B in TVL across major protocols.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop",
      address: "456 Crypto Blvd, New York, NY",
      phone: "+1 (555) 098-7654",
      email: "sarah@scriptjacker.io",
      linkedin: "https://linkedin.com"
    },
    {
      name: "Marcus",
      role: "Red Team Lead",
      bio: "OSCP, OSEE. Expert in physical intrusion and social engineering.",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=800&auto=format&fit=crop",
      address: "789 Stealth Road, London, UK",
      phone: "+44 20 7123 4567",
      email: "marcus@scriptjacker.io",
      linkedin: "https://linkedin.com"
    },
  ];

  return (
    <div className="container mx-auto px-4 py-24">
      <ScrollWrapper>
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-16 text-center">Meet the Squad</h1>
      </ScrollWrapper>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {team.map((member, i) => (
          <ScrollWrapper key={member.name} delay={i * 0.1}>
            <div className="group relative w-full bg-surface/30 rounded-[2.5rem] overflow-hidden border border-white/5 transition-all duration-500 hover:bg-surface/50 shadow-lg hover:shadow-neon-teal/20 hover:border-neon-teal/30 flex flex-col">

              {/* Image Section */}
              <div className="relative h-96 w-full overflow-hidden">
                 <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                    style={{ backgroundImage: `url(${member.image})` }}
                 />
                 <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90" />

                 <div className="absolute bottom-0 left-0 p-6">
                    <div className="w-12 h-1 bg-neon-teal mb-2 rounded-full" />
                    <h3 className="text-3xl font-bold text-white">{member.name}</h3>
                    <p className="text-gray-300 font-medium tracking-wide uppercase text-sm">{member.role}</p>
                 </div>
              </div>

              {/* Details Section */}
              <div className="p-6 md:p-8 flex-grow flex flex-col justify-between bg-black/40 backdrop-blur-sm">
                 <p className="text-gray-400 text-sm leading-relaxed mb-6 border-b border-white/10 pb-6">
                   {member.bio}
                 </p>

                 <div className="space-y-4">
                    <div className="flex items-start space-x-3 text-gray-400 group-hover:text-white transition-colors">
                       <MapPin className="w-5 h-5 text-neon-teal shrink-0" />
                       <span className="text-sm">{member.address}</span>
                    </div>
                    <div className="flex items-center space-x-3 text-gray-400 group-hover:text-white transition-colors">
                       <Phone className="w-5 h-5 text-neon-teal shrink-0" />
                       <span className="text-sm">{member.phone}</span>
                    </div>
                    <div className="flex items-center space-x-3 text-gray-400 group-hover:text-white transition-colors">
                       <Mail className="w-5 h-5 text-neon-teal shrink-0" />
                       <a href={`mailto:${member.email}`} className="text-sm hover:underline">{member.email}</a>
                    </div>
                    <div className="pt-4 mt-4 border-t border-white/10 flex gap-4">
                       <Link
                          href={member.linkedin}
                          target="_blank"
                          className="flex-1 flex items-center justify-center py-2 rounded-xl bg-white/5 hover:bg-[#0077b5] hover:text-white text-gray-400 transition-all duration-300 group/link"
                       >
                          <Linkedin className="w-5 h-5 mr-2" />
                          <span className="font-semibold text-sm">LinkedIn</span>
                       </Link>
                       <a
                          href={`mailto:${member.email}`}
                          className="flex-1 flex items-center justify-center py-2 rounded-xl bg-white/5 hover:bg-neon-teal hover:text-black text-gray-400 transition-all duration-300 group/link"
                       >
                          <Mail className="w-5 h-5 mr-2" />
                          <span className="font-semibold text-sm">Mail</span>
                       </a>
                    </div>
                 </div>
              </div>

            </div>
          </ScrollWrapper>
        ))}
      </div>
    </div>
  );
}
