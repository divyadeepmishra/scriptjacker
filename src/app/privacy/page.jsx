import { Database, Eye, FileText, Lock, Shield, Users } from 'lucide-react';

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-dark">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-b from-surface via-dark to-dark border-b border-white/5">
        <div className="absolute inset-0 mesh-gradient opacity-30"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-neon-teal to-neon-purple p-[2px] mb-6">
              <div className="w-full h-full bg-dark rounded-2xl flex items-center justify-center">
                <Shield className="w-8 h-8 text-neon-teal" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Privacy Policy
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Your privacy and security are our top priorities. Learn how we protect your data.
            </p>
            <p className="text-sm text-gray-500 mt-4">
              Last Updated: December 6, 2025
            </p>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

        {/* Introduction */}
        <section className="mb-12">
          <div className="glass-panel rounded-2xl p-8">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-neon-teal/20 to-neon-purple/20 flex items-center justify-center flex-shrink-0">
                <FileText className="w-6 h-6 text-neon-teal" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white mb-3">Introduction</h2>
                <p className="text-gray-300 leading-relaxed">
                  At ScriptJacker LLP, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your data when you visit our website or engage our services.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Information We Collect */}
        <section className="mb-12">
          <div className="glass-panel rounded-2xl p-8">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-neon-teal/20 to-neon-purple/20 flex items-center justify-center flex-shrink-0">
                <Database className="w-6 h-6 text-neon-teal" />
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-white mb-4">Information We Collect</h2>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold text-neon-teal mb-2">Personal Information</h3>
                    <p className="text-gray-300 mb-2">When you contact us or engage our services, we may collect:</p>
                    <ul className="list-disc list-inside text-gray-400 space-y-1 ml-4">
                      <li>Name and contact information (email, phone number)</li>
                      <li>Company name and business details</li>
                      <li>Project requirements and technical specifications</li>
                      <li>Payment and billing information</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-neon-teal mb-2">Technical Information</h3>
                    <p className="text-gray-300 mb-2">We automatically collect certain technical data:</p>
                    <ul className="list-disc list-inside text-gray-400 space-y-1 ml-4">
                      <li>IP address and browser type</li>
                      <li>Device information and operating system</li>
                      <li>Pages visited and time spent on our website</li>
                      <li>Referral source and navigation patterns</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-neon-teal mb-2">Client Engagement Data</h3>
                    <p className="text-gray-300 mb-2">During security assessments, we may access:</p>
                    <ul className="list-disc list-inside text-gray-400 space-y-1 ml-4">
                      <li>Application code and infrastructure details</li>
                      <li>Vulnerability findings and security reports</li>
                      <li>Test credentials and access logs (under strict NDA)</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How We Use Your Information */}
        <section className="mb-12">
          <div className="glass-panel rounded-2xl p-8">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-neon-teal/20 to-neon-purple/20 flex items-center justify-center flex-shrink-0">
                <Users className="w-6 h-6 text-neon-teal" />
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-white mb-4">How We Use Your Information</h2>
                <p className="text-gray-300 mb-4">We use the collected information for the following purposes:</p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="text-neon-teal mt-1">•</span>
                    <span className="text-gray-300"><strong className="text-white">Service Delivery:</strong> To provide penetration testing, security audits, and consulting services</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-neon-teal mt-1">•</span>
                    <span className="text-gray-300"><strong className="text-white">Communication:</strong> To respond to inquiries, send project updates, and provide customer support</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-neon-teal mt-1">•</span>
                    <span className="text-gray-300"><strong className="text-white">Improvement:</strong> To analyze website usage and enhance our services</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-neon-teal mt-1">•</span>
                    <span className="text-gray-300"><strong className="text-white">Legal Compliance:</strong> To comply with applicable laws and regulations</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-neon-teal mt-1">•</span>
                    <span className="text-gray-300"><strong className="text-white">Security:</strong> To protect against fraud, unauthorized access, and security threats</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Data Protection */}
        <section className="mb-12">
          <div className="glass-panel rounded-2xl p-8">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-neon-teal/20 to-neon-purple/20 flex items-center justify-center flex-shrink-0">
                <Lock className="w-6 h-6 text-neon-teal" />
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-white mb-4">Data Protection & Security</h2>
                <p className="text-gray-300 mb-4">
                  As a cybersecurity firm, we implement industry-leading security measures to protect your data:
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-surface/50 rounded-xl p-4 border border-white/5">
                    <h4 className="text-white font-semibold mb-2">Encryption</h4>
                    <p className="text-gray-400 text-sm">All data is encrypted at rest and in transit using AES-256 and TLS 1.3</p>
                  </div>
                  <div className="bg-surface/50 rounded-xl p-4 border border-white/5">
                    <h4 className="text-white font-semibold mb-2">Access Control</h4>
                    <p className="text-gray-400 text-sm">Strict role-based access controls and multi-factor authentication</p>
                  </div>
                  <div className="bg-surface/50 rounded-xl p-4 border border-white/5">
                    <h4 className="text-white font-semibold mb-2">NDA Protection</h4>
                    <p className="text-gray-400 text-sm">All client data is protected under strict non-disclosure agreements</p>
                  </div>
                  <div className="bg-surface/50 rounded-xl p-4 border border-white/5">
                    <h4 className="text-white font-semibold mb-2">Regular Audits</h4>
                    <p className="text-gray-400 text-sm">Continuous security monitoring and regular internal audits</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Privacy Practices */}
        <section className="mb-12">
          <div className="glass-panel rounded-2xl p-8">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-neon-teal/20 to-neon-purple/20 flex items-center justify-center flex-shrink-0">
                <Eye className="w-6 h-6 text-neon-teal" />
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-white mb-4">Our Privacy Practices</h2>

                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">No Invasive Tracking</h3>
                    <p className="text-gray-300">
                      We do not use invasive tracking cookies or third-party analytics that compromise your privacy. Any analytics we collect are privacy-preserving and aggregated.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Data Minimization</h3>
                    <p className="text-gray-300">
                      We only collect data that is necessary for providing our services and improving user experience. We do not sell or share your personal information with third parties for marketing purposes.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Data Retention</h3>
                    <p className="text-gray-300">
                      We retain personal data only for as long as necessary to fulfill the purposes outlined in this policy or as required by law. Client engagement data is securely deleted after project completion, unless retention is required for legal or contractual obligations.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Your Rights</h3>
                    <p className="text-gray-300 mb-2">You have the right to:</p>
                    <ul className="list-disc list-inside text-gray-400 space-y-1 ml-4">
                      <li>Access and review your personal data</li>
                      <li>Request corrections to inaccurate information</li>
                      <li>Request deletion of your data (subject to legal obligations)</li>
                      <li>Opt-out of marketing communications</li>
                      <li>Lodge a complaint with relevant data protection authorities</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Third-Party Services */}
        <section className="mb-12">
          <div className="glass-panel rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-white mb-4">Third-Party Services</h2>
            <p className="text-gray-300 mb-4">
              We may use trusted third-party service providers to facilitate our services, such as:
            </p>
            <ul className="text-gray-400 space-y-2 ml-4">
              <li>• Cloud hosting providers (with data encryption and compliance certifications)</li>
              <li>• Payment processors (PCI-DSS compliant)</li>
              <li>• Communication tools (email and project management platforms)</li>
            </ul>
            <p className="text-gray-300 mt-4">
              These third parties are contractually obligated to protect your data and use it only for the purposes we specify.
            </p>
          </div>
        </section>

        {/* International Data Transfers */}
        <section className="mb-12">
          <div className="glass-panel rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-white mb-4">International Data Transfers</h2>
            <p className="text-gray-300">
              Your data may be transferred to and processed in countries other than your country of residence. We ensure that such transfers comply with applicable data protection laws and implement appropriate safeguards, such as standard contractual clauses.
            </p>
          </div>
        </section>

        {/* Changes to Policy */}
        <section className="mb-12">
          <div className="glass-panel rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-white mb-4">Changes to This Policy</h2>
            <p className="text-gray-300">
              We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. We will notify you of any material changes by posting the updated policy on our website with a new "Last Updated" date.
            </p>
          </div>
        </section>

        {/* Contact */}
        <section>
          <div className="glass-panel rounded-2xl p-8 border-2 border-neon-teal/20">
            <h2 className="text-2xl font-bold text-white mb-4">Contact Us</h2>
            <p className="text-gray-300 mb-4">
              If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:
            </p>
            <div className="space-y-2 text-gray-300">
              <p><strong className="text-white">Email:</strong> <a href="mailto:support@scriptjacker.in" className="text-neon-teal hover:underline">support@scriptjacker.in</a></p>
              <p><strong className="text-white">Phone:</strong> <a href="tel:+917497054662" className="text-neon-teal hover:underline">+91 7497054662</a></p>
              <p><strong className="text-white">Company:</strong> ScriptJacker LLP</p>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
