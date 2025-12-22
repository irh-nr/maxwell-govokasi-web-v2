import React from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";

export default function LDPSection() {
  return (
    <div className="relative w-full h-fit">
      {/* Background */}

      <div
        className={cn("absolute inset-0 transition-all duration-1000 ease-out")}
      />
      <Image
        src={"/photos/JohnMaxwellSection.png"}
        alt=""
        fill
        className="object-cover"
      />

      <section id="ldp" className="relative z-10 py-24 md:px-12 my-auto">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-x-20 gap-y-10">
            {/* Title - starts at column 1 */}
            <div className="min-w-[120px]">
              <h2 className="text-[14px] font-bold uppercase tracking-[0.2em] leading-tight text-white">
                Maxwell Leadership <br /> Development Program
              </h2>
              <div className="mt-2 h-1 w-16 bg-gradient-to-r from-white to-transparent rounded-full" />
            </div>

            {/*Content*/}
            <div className="space-y-12">
              <h1 className="text-white text-[30px] md:text-[36px] font-bold leading-tight">
                Leadership is more than what you achieve. It’s about who you
                become and the impact you create.
              </h1>
              <p className="text-white">
                Through the Maxwell Leadership Development Program, we help you
                build the clarity, confidence, and influence to lead yourself
                and others with purpose, creating growth that goes beyond your
                career and lasts beyond you.
              </p>
              <h2 className="text-white text-[28px] md:text-[32px] font-semibold leading-tight">
                Because when leadership grows, everything grows with it.
              </h2>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
