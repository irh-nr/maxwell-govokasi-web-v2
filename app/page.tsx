"use client";

import { HeroSection } from "@/components/landing-page/hero-section";
import { ValueProposition } from "@/components/landing-page/value-proposition";
import { CoachesSection } from "@/components/landing-page/coaches-section";
import { TimelineSection } from "@/components/landing-page/timeline-section";
import { SuccessStories } from "@/components/landing-page/success-stories";
import { CtaBanner } from "@/components/landing-page/cta-banner";
import MetricsCard from "@/components/landing-page/metrics-card";
import CompanyMarqueeB from "@/components/landing-page/compay-logo-marquee-b";
import CompanyMarqueeT from "@/components/landing-page/compay-logo-marquee-t";
import CompanyMarqueeReverse from "@/components/landing-page/compay-logo-marquee-reverse";
import LDPSection from "@/components/landing-page/ldp-section";

import Programs from "@/components/landing-page/programs";
import { FaqSection } from "@/components/landing-page/faq-section";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <HeroSection />
      <MetricsCard />
      <CompanyMarqueeT />
      <CompanyMarqueeReverse />
      <CompanyMarqueeB />
      <LDPSection />
      <Programs />
      <CoachesSection />
      <SuccessStories />
      <CtaBanner />
      <FaqSection />
    </main>
  );
}
