"use client";

import { useState } from "react";
import { Navigation } from "@/components/navigation-v2";
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
  const [userType, setUserType] = useState<"talent" | "company">("talent");

  return (
    <main className="min-h-screen bg-background">
      <Navigation userType={userType} setUserType={setUserType} />
      <HeroSection userType={userType} />
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
