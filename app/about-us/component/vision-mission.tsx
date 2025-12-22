import React from "react";
import { cn } from "@/lib/utils";
import { Lightbulb, Target } from "lucide-react";
import Image from "next/image";

export default function VisionMissionSection() {
  const missionItems = [
    "To equip young talents and professionals with practical leadership skills through experiential learning and real-world exposure.",
    "To integrate global leadership principles from Maxwell Leadership with local talent development through GOVOKASi.",
    "To bridge education and industry by preparing future leaders who lead with integrity, influence, and impact.",
    "To create a scalable ecosystem that accelerates leadership growth across Indonesia.",
  ];
  return (
    <div className="relative w-full h-fit">
      {/* Background */}

      <div
        className={cn("absolute inset-0 transition-all duration-1000 ease-out")}
      />
      <Image
        src={"/photos/vision-mission-bg.jpeg"}
        alt=""
        fill
        className="object-cover"
      />

      <section id="ldp" className="relative z-10 py-24 md:px-12 my-auto">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex flex-col gap-y-20">
            {/* OUR VISION */}
            <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-8 items-start text-white">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-full border border-white/20 bg-white/10 shadow-lg">
                  <Lightbulb className="w-8 h-8 " />
                </div>
                <h2 className="text-sm font-bold uppercase tracking-widest leading-tight text-shadow-lg">
                  Our <br /> Vision
                </h2>
              </div>
              <div>
                <p className="text-lg md:text-xl leading-relaxed font-medium max-w-4xl">
                  To build a strong and sustainable leadership pipeline that
                  develops transformational leaders for Indonesia, from campus
                  to corporate.
                </p>
              </div>
            </div>

            {/* OUR MISSION */}
            <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-8 items-start text-white">
              <div className="flex items-center gap-4 ">
                <div className="p-3 rounded-full border border-white/20 bg-white/10 shadow-lg">
                  <Target className="w-8 h-8 text-white " />
                </div>
                <h2 className="text-sm font-bold uppercase tracking-widest leading-tight text-shadow-lg">
                  Our <br /> Mission
                </h2>
              </div>
              <div>
                <ul className="space-y-4 max-w-4xl">
                  {missionItems.map((item, idx) => (
                    <li
                      key={idx}
                      className="flex gap-3 text-base md:text-lg opacity-90 leading-tight"
                    >
                      <span className="mt-2.5 w-1.5 h-1.5 rounded-full bg-white shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
