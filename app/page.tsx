"use client";

import {
  PricingTable,
  Show,
  SignInButton,
  SignUpButton,
  UserButton,
} from "@clerk/nextjs";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useState, useRef, useEffect } from "react";
import { Mail, ListTodo, Calendar, Sparkles } from "lucide-react";

// Interactive Spotlight Card Component
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const GlassCard = ({ feature }: { feature: any }) => {
  const divRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!divRef.current) return;
    const div = divRef.current;
    const rect = div.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      className="glass-card p-6 rounded-xl group relative overflow-hidden"
    >
      {/* 
        This is the interactive spotlight ring that follows the mouse.
        Uses pure CSS group-hover for opacity transitions.
      */}
      <div
        className="pointer-events-none absolute -inset-px opacity-0 transition-opacity duration-300 rounded-xl z-0 group-hover:opacity-100"
        style={{
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(214, 40, 40, 0.15), transparent 40%)`,
        }}
      />
      
      {/* 
        This is a second, brighter subtle white ring for the absolute center of the cursor 
      */}
      <div
        className="pointer-events-none absolute -inset-px opacity-0 transition-opacity duration-300 rounded-xl z-0 group-hover:opacity-100 mix-blend-overlay"
        style={{
          background: `radial-gradient(200px circle at ${position.x}px ${position.y}px, rgba(255, 255, 255, 0.1), transparent 40%)`,
        }}
      />
      
      <CardHeader className="relative z-10 p-0 mb-4">
        <div className="h-12 w-12 rounded-lg bg-primary/20 flex items-center justify-center mb-6 ring-1 ring-primary/30 group-hover:scale-110 transition-transform duration-300">
          <feature.icon className="h-6 w-6 text-primary" />
        </div>
        <CardTitle className="text-2xl text-foreground font-bold">
          {feature.title}
        </CardTitle>
        <CardDescription className="text-base leading-relaxed text-card-foreground mt-4 pt-2 border-t border-border/30">
          {feature.description}
        </CardDescription>
      </CardHeader>
    </div>
  );
};

export default function Home() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 0);
    return () => clearTimeout(timer);
  }, []);

  if (!mounted) return null;

  return (
    <div className="landing-wrapper relative min-h-screen">
      {/* Aurora Background Orbs */}
      <div className="aurora-bg">
        <div className="aurora-blob aurora-blob-1" />
        <div className="aurora-blob aurora-blob-2" />
        <div className="aurora-blob aurora-blob-3" />
      </div>

      <header className="landing-header">
        <div className="landing-header-inner relative z-10">
          <div className="logo-container">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="h-8 w-8 bg-primary/20 rounded-md flex items-center justify-center ring-1 ring-primary/50 group-hover:bg-primary transition-colors">
                 <Sparkles className="h-4 w-4 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <span className="logo-text">FlowAi</span>
            </Link>
            <Show when="signed-in">
              <div className="nav-actions">
                <Link href="/dashboard">
                  <Button variant="ghost" className="hover:bg-primary/20">Dashboard</Button>
                </Link>
                <div className="ring-2 ring-primary/20 rounded-full p-0.5">
                  <UserButton />
                </div>
              </div>
            </Show>
            <Show when="signed-out">
              <div className="nav-actions">
                <SignInButton>
                  <Button variant="ghost" className="hover:bg-primary/20">Sign In</Button>
                </SignInButton>
                <SignUpButton>
                  <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">Get Started</Button>
                </SignUpButton>
              </div>
            </Show>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="section-heading relative z-10 pt-32 pb-24">
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 ring-1 ring-accent/30 mb-8 backdrop-blur-sm">
            <span className="h-2 w-2 rounded-full bg-accent animate-pulse" />
            <span className="text-sm font-medium text-accent uppercase tracking-wider">
              The AI that actually does things
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8">
            <span className="text-foreground">Your </span>
            <span className="text-gradient-primary">Autonomous <br className="hidden md:block"/> Executive</span>
            <span className="text-foreground"> Assistant</span>
          </h1>

          <p className="hero-description text-xl md:text-2xl text-card-foreground/90 font-medium max-w-2xl mx-auto">
            Clears your inbox, sends emails, manages your calendar. All running magically in the background.
          </p>
          
          <div className="hero-buttons mt-12 flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Show when="signed-out">
              <Link href="/sign-up">
                <Button size="lg" className="h-14 px-8 text-lg rounded-full shadow-[0_0_30px_rgba(214,40,40,0.3)] hover:shadow-[0_0_40px_rgba(214,40,40,0.5)] transition-all bg-primary text-primary-foreground hover:scale-105">
                  Start Free Trial
                </Button>
              </Link>
            </Show>
            <Show when="signed-in">
              <Link href="/dashboard">
                <Button size="lg" className="h-14 px-8 text-lg rounded-full premium-glow-btn text-primary-foreground hover:scale-105">
                  Go to Dashboard
                </Button>
              </Link>
            </Show>
            <Button size="lg" variant="outline" className="h-14 px-8 text-lg rounded-full border-2 border-border/50 bg-background/50 backdrop-blur-sm hover:bg-card/80 hover:text-primary transition-all">
              See How It Works
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-heading relative z-10 py-24">
        <h2 className="text-4xl">Intelligence At Work</h2>
        <div className="features-grid">
          {[
            {
              key: "email-management",
              icon: Mail,
              title: "Inbox Zero Autopilot",
              description:
                "Our AI engine processes your emails every 15 minutes, categorizes the noise, and drafts human-like replies for your approval.",
            },
            {
              key: "task-extraction",
              icon: ListTodo,
              title: "Smart Extraction",
              description:
                "Automatically parses action items from long threads and calendar invites. Your to-do list builds itself while you sleep.",
            },
            {
              key: "calendar-intelligence",
              icon: Calendar,
              title: "Time Bending",
              description:
                "Analyzes your deep work habits to suggest optimal meeting times, auto-resolve conflicts, and ruthlessly defend your schedule.",
            },
          ].map((feature) => (
            <GlassCard key={feature.key} feature={feature} />
          ))}
        </div>
      </section>

      <section className="section-heading relative py-24" id="pricing" style={{ zIndex: 10 }}>
        <h2 className="text-4xl text-gradient-primary inline-block text-center w-full">Simple, Transparent Pricing</h2>
        <PricingTable />
      </section>
      <footer className="border-t border-border/40 bg-card/60 backdrop-blur-md relative z-10">
            <div className="mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
              <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="flex flex-col items-center md:items-start">
                  <span className="text-xl font-bold text-gradient-primary">
                    Flow AI
                  </span>
                  <p className="text-sm text-muted-foreground mt-2 text-center md:text-left">
                    Your Autonomous Executive Assistant
                  </p>
                </div>
                
                <div className="flex gap-6 text-sm text-muted-foreground font-medium">
                  <Link href="/privacy" className="hover:text-primary transition-colors">Privacy</Link>
                  <Link href="/terms" className="hover:text-primary transition-colors">Terms</Link>
                  <Link href="/contact" className="hover:text-primary transition-colors">Contact</Link>
                </div>
              </div>
              
              <div className="relative mt-8 flex items-center justify-center">
                <div className="absolute inset-0 border-t border-border/30"></div>
                <div className="relative bg-transparent px-4">
                  <p className="text-xs text-muted-foreground/80">
                    &copy; {new Date().getFullYear()} Flow AI. All rights reserved.
                  </p>
                </div>
              </div>
            </div>
          </footer>
    </div>
  );
}
