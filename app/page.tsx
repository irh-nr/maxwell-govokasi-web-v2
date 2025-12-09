"use client";

import { HeroSection } from "@/components/landing-page/hero-section";
import { ValueProposition } from "@/components/landing-page/value-proposition";
import { CoachesSection } from "@/components/landing-page/coaches-section";
import { TimelineSection } from "@/components/landing-page/timeline-section";
import { SuccessStories } from "@/components/landing-page/success-stories";
import { CtaBanner } from "@/components/landing-page/cta-banner";

import About from "@/components/landing-page/about";
import { FaqSection } from "@/components/landing-page/faq-section";

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
      <FaqSection />
    </main>
  );
}
