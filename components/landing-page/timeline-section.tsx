import {
  Search,
  Bolt,
  TrendingUp,
  ChevronDown,
  ArrowRight,
} from "lucide-react";
import React from "react";
import { Button } from "../ui/button";
import { AspectRatio } from "../ui/aspect-ratio";
import Link from "next/link";
import Image from "next/image";

const timelineSteps = [
  {
    title: "Identification",
    description:
      "We identify high-potential talents and organizational needs through rigorous assessment and analysis.",
    icon: Search,
  },
  {
    title: "Development",
    description:
      "Structured curriculum, mentorship, and real-world projects accelerate professional and leadership growth.",
    icon: Bolt,
  },
  {
    title: "Promotion",
    description:
      "Strategic placement and promotion within organizations, ensuring long-term success and retention.",
    icon: TrendingUp,
  },
];

export function TimelineSection() {
  return (
    <section
      id="how-it-works"
      className="py-24 px-4 bg-linear-to-b from-white to-muted"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-6 justify-between">
          <div className="flex flex-col">
            <div className="text-center md:text-start mb-6 p-2">
              <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
                How It Works
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl">
                A proven methodology for transforming potential into excellence.
              </p>
            </div>
            {/* Steps */}
            <div className="flex flex-col items-center">
              {timelineSteps.map((item, index) => {
                const Icon = item.icon;
                const isLast = index === timelineSteps.length - 1;

                return (
                  <React.Fragment key={index}>
                    <div className="flex-1 min-w-[300px] max-w-[600px] p-2">
                      {/* Content */}
                      <div className="h-full">
                        <div className="animate-slide-up bg-white p-6 rounded-xl border border-border hover:border-primary/30 transition-all h-full flex flex-col">
                          <div className="flex gap-4">
                            <div
                              className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 bg-primary/10 text-primary`}
                            >
                              <Icon size={15} />
                            </div>
                            <div className="flex flex-col">
                              <h3 className="text-2xl font-bold text-foreground">
                                {item.title}
                              </h3>
                              <p className="text-sm mt-1">
                                {item.description}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {!isLast && (
                      <ChevronDown
                        className="hidden lg:block text-muted-foreground/50 mx-auto"
                        size={32}
                      />
                    )}
                  </React.Fragment>
                );
              })}
            </div>
          </div>

          {/* Photos */}
          <div className="w-xl hidden md:flex">
            <AspectRatio ratio={10 / 11}>
              <Image
                src={"/photos/2151957110.jpg"}
                alt=""
                fill
                className="h-full w-full object-cover rounded-2xl"
              />
            </AspectRatio>
          </div>
        </div>
        <div className="text-center border-t border-border/50 mt-12 pt-12">
          <p className="text-lg text-foreground font-medium mb-4">
            Explore further more.
          </p>
          <Button
            size={"lg"}
            className="border-primary px-8! py-6! border-2 bg-transparent hover:bg-primary/90 text-primary hover:text-white group hover:shadow-2xl hover:-translate-y-0.5 transition-all rounded-full"
            asChild
          >
            <Link href={"/talent"}>
              Learn More{" "}
              <ArrowRight
                size={18}
                className="group-hover:translate-x-1 transition-transform"
              />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
