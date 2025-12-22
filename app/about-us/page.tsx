import React from "react";
import { Banner } from "../../components/banner";
import MainSection from "./component/main-section";
import CollabSection from "./component/collab-section";
import VisionMissionSection from "./component/vision-mission";
import { CoachesSection } from "./component/coaches-section";

export default function AboutUs() {
  return (
    <main className="min-h-screen bg-background">
      <Banner title="About Us" />
      <MainSection />
      <CollabSection />
      <VisionMissionSection />
      <CoachesSection />
    </main>
  );
}
