import Link from "next/link";
import { Sparkles, ArrowLeft, Shield, Lock, Eye, Database, Cookie, Scale, Globe, Bell, UserX, Clock, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function PrivacyPage() {
  return (
    <div className="landing-wrapper relative min-h-screen pb-24">
      {/* Aurora Background Orbs */}
      <div className="aurora-bg">
        <div className="aurora-blob aurora-blob-1" />
        <div className="aurora-blob aurora-blob-2" />
        <div className="aurora-blob aurora-blob-3" />
      </div>

      <header className="landing-header relative z-10 border-b border-border/30">
        <div className="landing-header-inner mx-auto w-full max-w-7xl px-4 py-4 flex justify-between items-center sm:px-6 lg:px-8">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="h-8 w-8 bg-primary/20 rounded-md flex items-center justify-center ring-1 ring-primary/50 group-hover:bg-primary transition-colors">
              <Sparkles className="h-4 w-4 text-primary group-hover:text-primary-foreground transition-colors" />
            </div>
            <span className="logo-text">FlowAi</span>
          </Link>
          <Link href="/">
            <Button variant="ghost" className="hover:bg-primary/20 gap-2">
              <ArrowLeft className="h-4 w-4" /> Back to Home
            </Button>
          </Link>
        </div>
      </header>

      <main className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 mt-8">
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4 text-foreground">
            Privacy Policy
          </h1>
          <p className="text-xl text-muted-foreground">
            Last updated: {new Date().toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
          </p>
        </div>

        <div className="glass-card p-8 md:p-12 rounded-2xl space-y-12 prose prose-gray dark:prose-invert max-w-none prose-h2:text-primary prose-a:text-primary hover:prose-a:text-primary/80">
          <section>
            <h2 className="text-2xl font-bold flex items-center gap-3 border-b border-border/30 pb-4">
              <Shield className="h-6 w-6 text-primary" /> 1. Overview and Security First Approach
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              At FlowAi, security and confidentiality are our highest priorities. As an autonomous AI executive assistant that manages your emails, calendar, and critical tasks, we recognize the exceptional sensitivity of the data we process. This Privacy Policy outlines our strict adherence to data protection standards, ensuring your information remains secure, private, and under your control. We implement zero-trust architecture principles and encrypt all sensitive data at rest and in transit.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold flex items-center gap-3 border-b border-border/30 pb-4">
              <Database className="h-6 w-6 text-primary" /> 2. Data We Collect and Lawful Basis
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
               Under GDPR Article 6, we process your data based on the following legal grounds and purposes:
            </p>
            <ul className="list-disc pl-6 mt-4 text-muted-foreground space-y-2">
              <li><strong>Account Information:</strong> Name, email address, authentication credentials (managed via secure SSO/Clerk). <br/><span className="text-sm font-medium text-primary">Lawful Basis: Contract Performance.</span></li>
              <li><strong>Integration Data:</strong> Emails, calendar events, and task data retrieved from your connected accounts (e.g., Google Workspace, Microsoft 365) using minimum-required OAuth scopes. <br/><span className="text-sm font-medium text-primary">Lawful Basis: Contract Performance.</span></li>
              <li><strong>AI Processing Logs:</strong> Pseudonymized event logs and model processing metadata used strictly to improve service reliability and debug autonomous actions. <br/><span className="text-sm font-medium text-primary">Lawful Basis: Legitimate Interests.</span></li>
              <li><strong>Device and Usage Data:</strong> IP addresses, browser types, and session activity strictly monitored to prevent unauthorized access and ensure service integrity. <br/><span className="text-sm font-medium text-primary">Lawful Basis: Legitimate Interests.</span></li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold flex items-center gap-3 border-b border-border/30 pb-4">
              <Clock className="h-6 w-6 text-primary" /> 3. Data Retention Periods
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              We strictly adhere to the following retention schedule to ensure data is not held longer than legally or functionally necessary:
            </p>
            <div className="overflow-x-auto mt-6">
              <table className="min-w-full divide-y divide-border/50 border border-border/50 rounded-lg overflow-hidden">
                <thead className="bg-primary/5">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-foreground uppercase tracking-wider">Data Type</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-foreground uppercase tracking-wider">Retention Period</th>
                  </tr>
                </thead>
                <tbody className="bg-background/20 divide-y divide-border/50">
                  <tr className="hover:bg-primary/5 transition-colors">
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-foreground font-medium">Processed emails & drafts</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-muted-foreground">Deleted after task completion</td>
                  </tr>
                  <tr className="hover:bg-primary/5 transition-colors">
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-foreground font-medium">Account data (Profile, Settings)</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-muted-foreground">Duration of account + 30 days after deletion</td>
                  </tr>
                  <tr className="hover:bg-primary/5 transition-colors">
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-foreground font-medium">Security & access logs</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-muted-foreground">90 days</td>
                  </tr>
                  <tr className="hover:bg-primary/5 transition-colors">
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-foreground font-medium">Billing records</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-muted-foreground">7 years (Financial legal obligation)</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold flex items-center gap-3 border-b border-border/30 pb-4">
              <Lock className="h-6 w-6 text-primary" /> 4. How We Protect Your Data
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              We employ enterprise-grade security measures designed to mitigate risks associated with sensitive data handling and autonomous AI operations:
            </p>
            <ul className="list-disc pl-6 mt-4 text-muted-foreground space-y-2">
              <li><strong>Encryption:</strong> All data is encrypted in transit using TLS 1.3 and at rest using AES-256 encryption.</li>
              <li><strong>AI Sandbox Processing:</strong> Action items (emails, drafts, tasks) are processed in isolated, ephemeral environments. We DO NOT use your personal data to train public foundation models.</li>
              <li><strong>Least Privilege Access:</strong> Internal access to user data is strictly isolated and managed via Role-Based Access Control (RBAC). No human reviews your emails without explicit, case-by-case authorization for support.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold flex items-center gap-3 border-b border-border/30 pb-4">
              <Eye className="h-6 w-6 text-primary" /> 5. Third-Party Subprocessors
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
               FlowAi integrations require data exchange with established, compliant third-party processors. We only share the exact data payload necessary to execute your requested AI tasks:
            </p>
            <ul className="list-disc pl-6 mt-4 text-muted-foreground space-y-2">
              <li><strong>LLM Providers:</strong> Content is sent to language models (e.g., OpenAI, Anthropic). We configure our LLM API usage to opt out of data retention where available, and strictly ensure your data is not stored by these providers for model training.</li>
              <li><strong>Authentication:</strong> Identity management is securely provided by Clerk.</li>
              <li><strong>Cloud Infrastructure:</strong> Core application processing is securely hosted on AWS (Amazon Web Services).</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold flex items-center gap-3 border-b border-border/30 pb-4">
              <Globe className="h-6 w-6 text-primary" /> 6. International Data Transfers
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              FlowAi utilizes SOC2 and ISO 27001 certified data centers. For users located in the European Economic Area (EEA), UK, or Switzerland, your data may be transferred to and processed in the United States. We ensure these transfers are safeguarded by implementing Standard Contractual Clauses (SCCs) and robust supplementary technical measures, in compliance with GDPR Chapter V constraints.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold flex items-center gap-3 border-b border-border/30 pb-4">
              <Cookie className="h-6 w-6 text-primary" /> 7. Cookies and Tracking Mechanisms
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              We use essential session cookies (such as those provided by Clerk for secure authentication) necessary to deliver the Service. We also utilize minimal, privacy-respecting cookieless analytics (such as Vercel Analytics) to monitor service performance and understand usage patterns. We do not use cross-site tracking cookies for advertising purposes.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold flex items-center gap-3 border-b border-border/30 pb-4">
              <Scale className="h-6 w-6 text-primary" /> 8. Your Rights and Controls
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
               Under GDPR, CCPA, and global privacy standards, you maintain meaningful control over your data.
            </p>
            <ul className="list-disc pl-6 mt-4 text-muted-foreground space-y-2">
              <li><strong>Revocation:</strong> You can disconnect your email and calendar integrations instantly from the dashboard, fully revoking our access tokens.</li>
              <li><strong>Right to Erasure:</strong> You may request the permanent deletion of your account and associated functional data directly from within the application settings, subject to our retention schedules for legal compliance. For example, billing records are retained for 7 years per financial regulations, but all personal and integration data is deleted immediately upon request.</li>
              <li><strong>Data Portability:</strong> Export your task history and agent-generated data at any time.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold flex items-center gap-3 border-b border-border/30 pb-4">
              <Bell className="h-6 w-6 text-primary" /> 9. Data Breach Notification
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              In the unlikely event of a security breach that compromises your personal data, FlowAi commits to notifying all affected users and relevant supervisory authorities within 72 hours of becoming aware of the incident, outlining the nature of the breach and the immediate remediation measures taken.
            </p>
          </section>

           <section>
            <h2 className="text-2xl font-bold flex items-center gap-3 border-b border-border/30 pb-4">
              <UserX className="h-6 w-6 text-primary" /> 10. Children&apos;s Data
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Our Service is designed exclusively for professionals and businesses. The Service is not directed at or appropriately intended for children under the age of 16. We do not knowingly collect personal information from individuals in this age group.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold flex items-center gap-3 border-b border-border/30 pb-4">
              <FileText className="h-6 w-6 text-primary" /> 11. Policy Updates
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              We may periodically update this policy to reflect new technical measures or regulatory requirements. We will notify users of material changes via email at least 30 days before they take effect.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold border-b border-border/30 pb-4">
               12. Contact Our Security Team
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              If you have discovered a vulnerability, have concerns about data processing, or wish to exercise your data rights, please contact our dedicated security team immediately at <strong>security@flowai.com</strong> or via our <Link href="/contact" className="text-primary hover:underline">Contact page</Link>.
            </p>
          </section>
        </div>
      </main>

      {/* Footer minimal */}
      <footer className="mt-24 border-t border-border/40 bg-card/60 backdrop-blur-md relative z-10">
        <div className="mx-auto w-full max-w-7xl px-4 py-8 flex flex-col items-center">
            <p className="text-xs text-muted-foreground">
              &copy; {new Date().getFullYear()} FlowAi. All rights reserved.
            </p>
        </div>
      </footer>
    </div>
  );
}
