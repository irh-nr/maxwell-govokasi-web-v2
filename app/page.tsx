"use client";

import { HeroSection } from "@/components/hero-section";
import { DualCustomerFlow } from "@/components/dual-customer-flow";
import { CoachesSection } from "@/components/coaches-section";
import { ProgramsSection } from "@/components/programs-section";
import { TimelineSection } from "@/components/timeline-section";
import { LeadershipJourneys } from "@/components/leadership-journeys";
import { TestimonialsSection } from "@/components/testimonials-section";
import { CtaBanner } from "@/components/cta-banner";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <HeroSection />
      <DualCustomerFlow />
      <LeadershipJourneys />
      <ProgramsSection />
      <CoachesSection />
      <TimelineSection />
      <TestimonialsSection />
      <CtaBanner />
      <Footer />
    </main>
  );
}
