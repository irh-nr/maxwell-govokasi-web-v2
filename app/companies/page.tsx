import BannerFull from "./component/banner-full";
import MainSection from "./component/main-section";
import ValueSection from "./component/value-section";
import TrustProof from "./component/trust-proof";
import { CtaBanner } from "./component/cta-banner";
export default function Contact() {
  return (
    <main className="min-h-screen bg-background">
      <BannerFull />
      <MainSection />
      <ValueSection />
      <TrustProof />
      <CtaBanner />
    </main>
  );
}
