import Link from "next/link";
import { Sparkles, ArrowLeft, Gavel, FileText, AlertTriangle, ShieldAlert, CreditCard, Scale, Lightbulb } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function TermsPage() {
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
            Terms of Service
          </h1>
          <p className="text-xl text-muted-foreground">
            Effective Date: {new Date().toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
          </p>
        </div>

        <div className="glass-card p-8 md:p-12 rounded-2xl space-y-12 prose prose-gray dark:prose-invert max-w-none prose-h2:text-primary prose-a:text-primary hover:prose-a:text-primary/80">
          <section>
            <h2 className="text-2xl font-bold flex items-center gap-3 border-b border-border/30 pb-4">
              <Gavel className="h-6 w-6 text-primary" /> 1. Agreement, Eligibility, and Service Overview
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              By accessing and using FlowAi (the &quot;Service&quot;), you agree to abide by these Terms of Service. FlowAi provides autonomous AI-driven executive assistance, including email drafting, task extraction, and calendar management. This includes the ability to draft and, where you have explicitly enabled it, send communications autonomously on your behalf.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed font-medium">
              <strong>Age Requirement:</strong> You must be at least 18 years old (or the legal age of majority in your jurisdiction) to use the Service. By using FlowAi, you represent and warrant that you meet this requirement.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold flex items-center gap-3 border-b border-border/30 pb-4">
              <ShieldAlert className="h-6 w-6 text-primary" /> 2. Acceptable Use and Security Responsibilities
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Our AI strictly prohibits use cases that violate security standards or legal regulations. As a user, you agree that you will NOT:
            </p>
            <ul className="list-disc pl-6 mt-4 text-muted-foreground space-y-2">
              <li><strong>Phishing/Spam:</strong> Utilize FlowAi to automate the sending of unsolicited messages, spear-phishing campaigns, or any malicious communications.</li>
              <li><strong>Harmful Data Processing:</strong> Instruct the AI to process or generate illegal, harassing, or dangerous material.</li>
              <li><strong>Bypassing Security:</strong> Attempt to reverse-engineer, override system prompts, exploit rate limits, or execute prompt-injection attacks against our AI models.</li>
              <li><strong>Unauthorized API Abuse:</strong> Utilize undocumented endpoints or automate the dashboard interface outside of provided integrations.</li>
            </ul>
            <p className="mt-4 text-sm bg-destructive/10 text-destructive border border-destructive/20 p-4 rounded-lg">
              Any violation of these security constraints will result in immediate, permanent account termination and potential reporting to law enforcement where required by law.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold flex items-center gap-3 border-b border-border/30 pb-4">
              <FileText className="h-6 w-6 text-primary" /> 3. Data Processing and AI Autonomy
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              FlowAi executes tasks on your behalf based on your explicit configurations and the contextual data you provide.
            </p>
            <ul className="list-disc pl-6 mt-4 text-muted-foreground space-y-2">
              <li><strong>User Authorization:</strong> By connecting your accounts, you explicitly grant FlowAi permission to read, process, and draft content within the authorized scopes (e.g., Gmail, Outlook).</li>
              <li><strong>Review Requirement and Hallucinations:</strong> While FlowAi strives for high accuracy, the AI may occasionally produce unpredictable, inappropriate, or incorrect outputs (&quot;hallucinations&quot;). Operations default to requiring your explicit approval before sending. If you enable fully autonomous sending, <strong>you are solely responsible for all communications dispatched on your behalf.</strong></li>
              <li><strong>No Professional Advice:</strong> The AI is not certified to provide, and must not be used to issue, professional legal, financial, or medical advice.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold flex items-center gap-3 border-b border-border/30 pb-4">
              <Lightbulb className="h-6 w-6 text-primary" /> 4. Intellectual Property
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              You retain all rights, titles, and interests to the content generated by the AI on your behalf using your provided data. FlowAi claims no ownership over AI-generated outputs, emails drafted, or your proprietary communications.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold flex items-center gap-3 border-b border-border/30 pb-4">
              <AlertTriangle className="h-6 w-6 text-primary" /> 5. Liability, Disclaimers, and AI Warranties
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
               The Service is provided on an &quot;AS IS&quot; and &quot;AS AVAILABLE&quot; basis. We heavily prioritize security and accuracy, but acknowledge technical limitations:
            </p>
            <ul className="list-disc pl-6 mt-4 text-muted-foreground space-y-2">
              <li><strong>Content Warranty Disclaimer:</strong> We do not warrant the accuracy, completeness, tone, or appropriateness of AI-generated content. You are entirely responsible for verifying drafted messages.</li>
              <li><strong>Service Interruptions:</strong> We are not liable for downtime caused by upstream LLM providers or API rate limiting by your email/calendar provider.</li>
              <li><strong>Force Majeure:</strong> FlowAi is not liable for failures caused by circumstances beyond our reasonable control, including third-party API outages, internet infrastructure failures, or acts of God.</li>
              <li><strong>Indemnification:</strong> You are responsible for reviewing and approving AI-drafted communications before sending them. FlowAi is not liable for communications you chose to send (or permitted to be sent autonomously) without review. You agree to indemnify and hold FlowAi harmless against any claims or legal actions arising from your use of the Service.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold flex items-center gap-3 border-b border-border/30 pb-4">
              <CreditCard className="h-6 w-6 text-primary" /> 6. Subscription, Refunds, and Termination
            </h2>
             <ul className="list-disc pl-6 mt-4 text-muted-foreground space-y-2">
              <li><strong>Billing & Refunds:</strong> Subscriptions are billed securely via Stripe. While you may cancel at any time, refunds are not provided for partial billing periods. <br/><span className="text-primary font-medium">EU Customers:</span> Under EU consumer law, you may exercise your right of withdrawal within 14 days of purchase unless the service has already commenced with your explicit consent.</li>
              <li><strong>Termination by Us:</strong> We reserve the right to suspend or terminate accounts that perform security testing without prior written consent, breach these Terms, or engage in abusive behavior.</li>
              <li><strong>Termination Notice & Data:</strong> Upon deciding to terminate a service without cause, we will provide you with 30 days written notice and guarantee a 30-day window to export your data. In cases of critical security violations, termination will be immediate.</li>
             </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold flex items-center gap-3 border-b border-border/30 pb-4">
              <Scale className="h-6 w-6 text-primary" /> 7. Dispute Resolution and Governing Law
            </h2>
            <ul className="list-disc pl-6 mt-4 text-muted-foreground space-y-2">
              <li><strong>Informal Negotiation:</strong> Before initiating any formal legal action, both parties agree to attempt to resolve the dispute through good-faith informal negotiation for a period of at least 30 days.</li>
              <li><strong>Governing Law:</strong> These Terms shall be governed by and construed in accordance with the laws of the State of Delaware, United States, without regard to its conflict of law principles.</li>
              <li><strong>Jurisdiction:</strong> Any legal disputes that cannot be resolved informally shall be exclusively resolved in the state or federal courts located in Delaware. Nothing in this clause limits the rights of consumers in the European Union to bring claims before their local courts under applicable consumer protection law.</li>
              <li><strong>Class Action Waiver:</strong> You agree that any dispute resolution proceedings will be conducted only on an individual basis and not in a class, consolidated, or representative action.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold border-b border-border/30 pb-4 mt-12">
               8. Changes to these Terms
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              We may update these terms to reflect new security standards, LLM feature updates, or regulatory changes. Significant changes will be explicitly communicated via email at least 30 days prior to taking effect.
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
