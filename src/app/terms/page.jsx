import { AlertTriangle, Briefcase, CreditCard, FileCheck, Scale, Shield } from 'lucide-react';

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-dark">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-b from-surface via-dark to-dark border-b border-white/5">
        <div className="absolute inset-0 mesh-gradient opacity-30"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-neon-teal to-neon-purple p-[2px] mb-6">
              <div className="w-full h-full bg-dark rounded-2xl flex items-center justify-center">
                <Scale className="w-8 h-8 text-neon-teal" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Terms of Service
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Professional terms governing our security services and client engagements
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
                <FileCheck className="w-6 h-6 text-neon-teal" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white mb-3">Agreement to Terms</h2>
                <p className="text-gray-300 leading-relaxed mb-3">
                  These Terms of Service ("Terms") constitute a legally binding agreement between you ("Client") and ScriptJacker LLP ("ScriptJacker", "we", "us", or "our") governing your use of our website and cybersecurity services.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  By accessing our website or engaging our services, you acknowledge that you have read, understood, and agree to be bound by these Terms. If you do not agree to these Terms, please do not use our services.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Services Scope */}
        <section className="mb-12">
          <div className="glass-panel rounded-2xl p-8">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-neon-teal/20 to-neon-purple/20 flex items-center justify-center flex-shrink-0">
                <Briefcase className="w-6 h-6 text-neon-teal" />
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-white mb-4">Services Scope</h2>

                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold text-neon-teal mb-2">Professional Services</h3>
                    <p className="text-gray-300 mb-2">ScriptJacker provides the following cybersecurity services:</p>
                    <ul className="list-disc list-inside text-gray-400 space-y-1 ml-4">
                      <li>Web Application Penetration Testing</li>
                      <li>Mobile Application Security Assessments</li>
                      <li>Smart Contract Audits (Blockchain Security)</li>
                      <li>Red Team Operations and Adversary Simulation</li>
                      <li>Security Code Reviews</li>
                      <li>Vulnerability Assessments and Remediation Consulting</li>
                      <li>Security Training and Awareness Programs</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-neon-teal mb-2">Service Delivery</h3>
                    <p className="text-gray-300">
                      All services are delivered based on mutually agreed-upon Statements of Work (SOW) or service agreements. The scope, timeline, deliverables, and pricing will be clearly defined in writing before engagement commencement.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-neon-teal mb-2">Service Limitations</h3>
                    <p className="text-gray-300 mb-2">Our services are limited to:</p>
                    <ul className="list-disc list-inside text-gray-400 space-y-1 ml-4">
                      <li>Testing only systems and applications for which you have explicit authorization</li>
                      <li>Identifying vulnerabilities within the agreed scope and timeframe</li>
                      <li>Providing professional recommendations; implementation is the client's responsibility</li>
                      <li>We do not guarantee that all vulnerabilities will be discovered</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Client Responsibilities */}
        <section className="mb-12">
          <div className="glass-panel rounded-2xl p-8">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-neon-teal/20 to-neon-purple/20 flex items-center justify-center flex-shrink-0">
                <Shield className="w-6 h-6 text-neon-teal" />
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-white mb-4">Client Responsibilities & Authorization</h2>

                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Authorization Requirement</h3>
                    <p className="text-gray-300">
                      You represent and warrant that you have the legal authority to authorize ScriptJacker to perform security testing on the systems, applications, and infrastructure specified in the engagement. You agree to provide written authorization before any testing begins.
                    </p>
                  </div>

                  <div className="bg-surface/50 rounded-xl p-4 border-l-4 border-neon-purple">
                    <div className="flex items-start gap-3">
                      <AlertTriangle className="w-5 h-5 text-neon-purple mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="text-white font-semibold mb-1">Important Notice</h4>
                        <p className="text-gray-300 text-sm">
                          Unauthorized security testing is illegal. The Client assumes full legal responsibility for ensuring proper authorization is obtained for all systems tested.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Client Obligations</h3>
                    <p className="text-gray-300 mb-2">You agree to:</p>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-3">
                        <span className="text-neon-teal mt-1">•</span>
                        <span className="text-gray-300">Provide accurate and complete information about systems to be tested</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-neon-teal mt-1">•</span>
                        <span className="text-gray-300">Grant necessary access credentials and permissions in a timely manner</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-neon-teal mt-1">•</span>
                        <span className="text-gray-300">Notify relevant stakeholders about scheduled security testing</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-neon-teal mt-1">•</span>
                        <span className="text-gray-300">Maintain backups of critical systems before testing begins</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-neon-teal mt-1">•</span>
                        <span className="text-gray-300">Review and act upon security findings in a timely manner</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Confidentiality & NDA */}
        <section className="mb-12">
          <div className="glass-panel rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-white mb-4">Confidentiality & Non-Disclosure</h2>

            <div className="space-y-4">
              <p className="text-gray-300">
                Both parties agree to maintain strict confidentiality regarding all information exchanged during the engagement. This includes:
              </p>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-surface/50 rounded-xl p-4 border border-white/5">
                  <h4 className="text-white font-semibold mb-2">Protected Information</h4>
                  <ul className="text-gray-400 text-sm space-y-1">
                    <li>• Security findings and vulnerabilities</li>
                    <li>• System architecture and code</li>
                    <li>• Business processes and data</li>
                    <li>• Access credentials and keys</li>
                  </ul>
                </div>
                <div className="bg-surface/50 rounded-xl p-4 border border-white/5">
                  <h4 className="text-white font-semibold mb-2">Our Commitment</h4>
                  <ul className="text-gray-400 text-sm space-y-1">
                    <li>• Secure handling of all client data</li>
                    <li>• No disclosure to third parties</li>
                    <li>• Encrypted storage and transmission</li>
                    <li>• Secure deletion post-engagement</li>
                  </ul>
                </div>
              </div>

              <p className="text-gray-300 mt-4">
                A separate Non-Disclosure Agreement (NDA) will be executed before any engagement begins. Confidentiality obligations survive the termination of services.
              </p>
            </div>
          </div>
        </section>

        {/* Payment Terms */}
        <section className="mb-12">
          <div className="glass-panel rounded-2xl p-8">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-neon-teal/20 to-neon-purple/20 flex items-center justify-center flex-shrink-0">
                <CreditCard className="w-6 h-6 text-neon-teal" />
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-white mb-4">Payment Terms</h2>

                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Pricing & Invoicing</h3>
                    <p className="text-gray-300 mb-2">
                      Service fees are specified in the Statement of Work or service agreement. Payment terms include:
                    </p>
                    <ul className="text-gray-400 space-y-2 ml-4">
                      <li>• Standard payment terms: Net 30 days from invoice date</li>
                      <li>• Upfront deposit may be required for new clients (typically 50%)</li>
                      <li>• Final payment due upon delivery of final report</li>
                      <li>• Late payments may incur interest charges as per applicable law</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Cancellation & Refunds</h3>
                    <p className="text-gray-300">
                      Cancellations must be made in writing at least 7 business days before the scheduled engagement start date. Deposits are non-refundable for cancellations made within 7 days of the start date. Work completed prior to cancellation will be billed on a pro-rata basis.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Limitation of Liability */}
        <section className="mb-12">
          <div className="glass-panel rounded-2xl p-8 border-2 border-neon-purple/20">
            <h2 className="text-2xl font-bold text-white mb-4">Limitation of Liability</h2>

            <div className="space-y-4">
              <div className="bg-surface/50 rounded-xl p-4 border-l-4 border-neon-purple">
                <p className="text-gray-300 mb-3">
                  <strong className="text-white">IMPORTANT:</strong> Security testing may cause system disruptions, downtime, or data loss. While we take precautions to minimize risks, the Client acknowledges and accepts these inherent risks.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Liability Cap</h3>
                <p className="text-gray-300">
                  ScriptJacker's total liability for any claims arising from services provided shall not exceed the total fees paid by the Client for the specific engagement giving rise to the claim.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Exclusions</h3>
                <p className="text-gray-300 mb-2">
                  ScriptJacker shall not be liable for:
                </p>
                <ul className="text-gray-400 space-y-2 ml-4">
                  <li>• Indirect, incidental, consequential, or punitive damages</li>
                  <li>• Loss of profits, revenue, data, or business opportunities</li>
                  <li>• System downtime or disruptions during authorized testing</li>
                  <li>• Client's failure to implement recommended security measures</li>
                  <li>• Vulnerabilities not discovered during the engagement</li>
                  <li>• Third-party actions or security breaches post-engagement</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Indemnification</h3>
                <p className="text-gray-300">
                  Client agrees to indemnify and hold ScriptJacker harmless from any claims, damages, or expenses arising from: (a) Client's lack of proper authorization, (b) Client's misuse of our reports or findings, or (c) Client's failure to remediate identified vulnerabilities.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Intellectual Property */}
        <section className="mb-12">
          <div className="glass-panel rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-white mb-4">Intellectual Property Rights</h2>

            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Report Ownership</h3>
                <p className="text-gray-300">
                  Upon full payment, the Client receives a non-exclusive license to use the security assessment reports for internal purposes. ScriptJacker retains all intellectual property rights to methodologies, tools, and techniques used.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Restrictions</h3>
                <p className="text-gray-300 mb-2">
                  Client agrees not to:
                </p>
                <ul className="text-gray-400 space-y-1 ml-4">
                  <li>• Publicly disclose report contents without written consent</li>
                  <li>• Reverse-engineer our testing methodologies or tools</li>
                  <li>• Share reports with third parties (except as necessary for remediation)</li>
                  <li>• Use our name or logo without prior written approval</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Warranties & Disclaimers */}
        <section className="mb-12">
          <div className="glass-panel rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-white mb-4">Warranties & Disclaimers</h2>

            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Our Warranty</h3>
                <p className="text-gray-300">
                  We warrant that our services will be performed in a professional and workmanlike manner consistent with industry standards. We employ experienced security professionals and follow established testing methodologies.
                </p>
              </div>

              <div className="bg-surface/50 rounded-xl p-4 border border-white/5">
                <h3 className="text-white font-semibold mb-2">Disclaimer</h3>
                <p className="text-gray-300 text-sm">
                  EXCEPT AS EXPRESSLY STATED, ALL SERVICES ARE PROVIDED "AS IS" WITHOUT WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED. WE DO NOT WARRANT THAT ALL VULNERABILITIES WILL BE DISCOVERED OR THAT SYSTEMS WILL BE COMPLETELY SECURE AFTER REMEDIATION.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-white mb-2">No Guarantee of Security</h3>
                <p className="text-gray-300">
                  Cybersecurity is an ongoing process. Our assessments represent a point-in-time evaluation. New vulnerabilities may emerge, and determined attackers may find ways to compromise systems despite our best efforts.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Termination */}
        <section className="mb-12">
          <div className="glass-panel rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-white mb-4">Termination</h2>
            <p className="text-gray-300 mb-4">
              Either party may terminate an engagement with written notice if:
            </p>
            <ul className="text-gray-400 space-y-2 ml-4">
              <li>• The other party materially breaches these Terms and fails to cure within 15 days</li>
              <li>• The other party becomes insolvent or files for bankruptcy</li>
              <li>• Continuation of services becomes illegal or impossible</li>
            </ul>
            <p className="text-gray-300 mt-4">
              Upon termination, Client shall pay for all services rendered up to the termination date. Confidentiality obligations survive termination indefinitely.
            </p>
          </div>
        </section>

        {/* Governing Law */}
        <section className="mb-12">
          <div className="glass-panel rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-white mb-4">Governing Law & Dispute Resolution</h2>

            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Jurisdiction</h3>
                <p className="text-gray-300">
                  These Terms shall be governed by and construed in accordance with the laws of India, without regard to conflict of law principles. Any disputes shall be subject to the exclusive jurisdiction of courts in [Your City/State].
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Dispute Resolution</h3>
                <p className="text-gray-300">
                  In the event of any dispute, the parties agree to first attempt resolution through good-faith negotiation. If unresolved within 30 days, disputes may be submitted to binding arbitration or litigation as mutually agreed.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Miscellaneous */}
        <section className="mb-12">
          <div className="glass-panel rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-white mb-4">Miscellaneous Provisions</h2>

            <div className="space-y-3">
              <div>
                <h3 className="text-white font-semibold mb-1">Entire Agreement</h3>
                <p className="text-gray-400 text-sm">
                  These Terms, together with any SOW or service agreement, constitute the entire agreement between the parties.
                </p>
              </div>

              <div>
                <h3 className="text-white font-semibold mb-1">Amendments</h3>
                <p className="text-gray-400 text-sm">
                  We reserve the right to modify these Terms at any time. Material changes will be communicated to active clients.
                </p>
              </div>

              <div>
                <h3 className="text-white font-semibold mb-1">Severability</h3>
                <p className="text-gray-400 text-sm">
                  If any provision is found unenforceable, the remaining provisions shall remain in full effect.
                </p>
              </div>

              <div>
                <h3 className="text-white font-semibold mb-1">Waiver</h3>
                <p className="text-gray-400 text-sm">
                  Failure to enforce any provision does not constitute a waiver of that provision.
                </p>
              </div>

              <div>
                <h3 className="text-white font-semibold mb-1">Assignment</h3>
                <p className="text-gray-400 text-sm">
                  Client may not assign these Terms without our prior written consent.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section>
          <div className="glass-panel rounded-2xl p-8 border-2 border-neon-teal/20">
            <h2 className="text-2xl font-bold text-white mb-4">Questions About These Terms?</h2>
            <p className="text-gray-300 mb-4">
              If you have any questions or concerns about these Terms of Service, please contact us:
            </p>
            <div className="space-y-2 text-gray-300">
              <p><strong className="text-white">Email:</strong> <a href="mailto:support@scriptjacker.in" className="text-neon-teal hover:underline">support@scriptjacker.in</a></p>
              <p><strong className="text-white">Phone:</strong> <a href="tel:+917497054662" className="text-neon-teal hover:underline">+91 7497054662</a></p>
              <p><strong className="text-white">Company:</strong> ScriptJacker LLP</p>
            </div>
            <p className="text-gray-400 text-sm mt-6">
              By engaging our services, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service.
            </p>
          </div>
        </section>

      </div>
    </div>
  );
}
