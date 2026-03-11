"use client";

import Link from "next/link";
import { Sparkles, ArrowLeft, Mail, MapPin, Phone, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // In a real app, this would send an API request
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

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

      <main className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 mt-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 text-foreground">
            Get in <span className="text-gradient-primary">Touch</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Have questions about integrations, security protocols, or enterprise pricing? Our team is ready to help you optimize your autonomous workflow.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">
          {/* Contact Form */}
          <div className="glass-card p-8 md:p-10 rounded-2xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
              <MessageSquare className="w-64 h-64 text-primary" />
            </div>
            
            <h2 className="text-3xl font-bold mb-8 relative z-10">Send a Message</h2>
            
            {submitted ? (
              <div className="flex flex-col items-center justify-center p-8 space-y-4 bg-primary/10 border border-primary/20 rounded-xl relative z-10">
                <div className="h-16 w-16 bg-primary rounded-full flex items-center justify-center text-primary-foreground shadow-[0_0_30px_rgba(214,40,40,0.5)]">
                  <Sparkles className="h-8 w-8 animate-pulse" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">Message Sent!</h3>
                <p className="text-muted-foreground text-center">
                  Our team will review your inquiry and respond within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-muted-foreground">
                    Full Name
                  </label>
                  <input
                    id="name"
                    required
                    type="text"
                    className="w-full bg-background/50 border border-border/50 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all text-foreground placeholder:text-muted-foreground/50"
                    placeholder="Jane Doe"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-muted-foreground">
                    Work Email
                  </label>
                  <input
                    id="email"
                    required
                    type="email"
                    className="w-full bg-background/50 border border-border/50 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all text-foreground placeholder:text-muted-foreground/50"
                    placeholder="jane@company.com"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium text-muted-foreground">
                    Subject
                  </label>
                  <select
                    id="subject"
                    className="w-full bg-background/50 border border-border/50 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all text-foreground appearance-none"
                  >
                    <option value="general">General Inquiry</option>
                    <option value="support">Technical Support</option>
                    <option value="security">Security & Privacy</option>
                    <option value="enterprise">Enterprise Plan</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-muted-foreground">
                    Message
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    className="w-full bg-background/50 border border-border/50 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all resize-none text-foreground placeholder:text-muted-foreground/50"
                    placeholder="How can we help you?"
                  ></textarea>
                </div>

                <Button type="submit" size="lg" className="w-full h-14 text-lg rounded-xl premium-glow-btn text-primary-foreground mt-4">
                  Send Message
                </Button>
              </form>
            )}
          </div>

          {/* Contact Information */}
          <div className="space-y-8 lg:space-y-12 lg:pt-12">
            <div>
              <h2 className="text-3xl font-bold mb-4">Contact Information</h2>
              <p className="text-muted-foreground text-lg mb-8">
                Reach out to us directly through any of the channels below. We take pride in our rapid response times.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-white/5 transition-colors border border-transparent hover:border-border/50 cursor-pointer group">
                <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center ring-1 ring-primary/30 group-hover:scale-110 transition-transform">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-foreground">Email Support</h3>
                  <p className="text-muted-foreground">hello@flowai.com</p>
                  <p className="text-xs text-muted-foreground/70 mt-1">For urgent security matters, email security@flowai.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-white/5 transition-colors border border-transparent hover:border-border/50 cursor-pointer group">
                <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center ring-1 ring-primary/30 group-hover:scale-110 transition-transform">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-foreground">Phone</h3>
                  <p className="text-muted-foreground">+1 (555) 123-4567</p>
                  <p className="text-xs text-muted-foreground/70 mt-1">Mon-Fri, 9am-6pm EST</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-white/5 transition-colors border border-transparent hover:border-border/50 cursor-pointer group">
                <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center ring-1 ring-primary/30 group-hover:scale-110 transition-transform">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-foreground">Headquarters</h3>
                  <p className="text-muted-foreground">100 Innovation Way, Suite 400</p>
                  <p className="text-muted-foreground">San Francisco, CA 94105</p>
                </div>
              </div>
            </div>
            
            {/* Embedded maps or graphic could go here, for now a nice callout */}
            <div className="glass-card mt-8 p-6 rounded-xl border border-primary/20 bg-primary/5 relative overflow-hidden">
               <div className="absolute -right-4 -top-4 w-24 h-24 bg-primary/20 blur-2xl rounded-full mix-blend-screen" />
               <div className="relative z-10 flex gap-4 items-center">
                 <div className="h-2 w-2 bg-primary rounded-full animate-pulse" />
                 <p className="text-sm font-medium text-primary">Systems currently fully operational.</p>
               </div>
            </div>
          </div>
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
