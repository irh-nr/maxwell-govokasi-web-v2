import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

export default function BannerFull() {
  return (
    <section
      id="banner-full"
      className="py-24 px-4 relative w-full h-screen bg-primary "
    >
      {/*BG */}
      <div>
        <Image src={"/photos/25060.jpg"} alt="" fill className="object-cover" />
        <div className="bg-gradient-to-br from-secondary via-primary/70 to-primary absolute w-full h-full inset-0" />
      </div>

      {/*Content*/}
      <div className="mx-auto animate-fade-in relative text-center h-full flex flex-col items-center justify-center z-10">
        <h1 className="max-w-6xl text-5xl lg:text-6xl text-white font-bold mb-6 leading-tight mx-auto">
          Recruitment & Talent Development Solutions{" "}
          <span className="text-brand-accent">Ready to Contribute</span>
        </h1>
        <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-5xl mx-auto">
          We help companies find talent that fits their culture, is eager to
          learn, and is competent in real projects.
        </p>
        <Button
          size={"lg"}
          className="border-white px-8! py-6! border-2 bg-white/10 hover:bg-white/20 backdrop-blur-lg text-white hover:shadow-2xl transition-all rounded-full"
          asChild
        >
          <Link href={"/form/companies"}>Partner With Us</Link>
        </Button>
        <Link
          href={"#main-section"}
          className="text-white flex items-center justify-center absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce z-100"
        >
          <ChevronDown size={50} />
        </Link>
      </div>
    </section>
  );
}
