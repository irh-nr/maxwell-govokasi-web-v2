import BannerFull from "./component/banner-full";
import { CtaBanner } from "./component/cta-banner";
import GovokasiProgramsSection from "./component/govokasi-programs-section";
import MaxwellProgramsSection from "./component/maxwell-programs-section";

export default function Talent() {
  return (
    <main className="min-h-screen bg-background">
      <BannerFull />
      <GovokasiProgramsSection />
      <MaxwellProgramsSection />
      <CtaBanner />
    </main>
  );
}
