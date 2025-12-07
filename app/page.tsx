"use client";

import { HeroSection } from "@/components/hero-section";
import { ValueProposition } from "@/components/value-proposition";
import { CoachesSection } from "@/components/coaches-section";
import { TimelineSection } from "@/components/timeline-section";
import { SuccessStories } from "@/components/success-stories";
import { CtaBanner } from "@/components/cta-banner";
import { Footer } from "@/components/footer";
import About from "@/components/about";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <HeroSection />
      <About />
      <TimelineSection />
      <ValueProposition />
      <SuccessStories />
      <CoachesSection />
      <CtaBanner />
      <Footer />
    </main>
  );
}
