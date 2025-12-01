import { Search, Bolt, TrendingUp, ChevronRight } from "lucide-react";
import React from "react";

const timelineSteps = [
  {
    title: "Identification",
    description:
      "We identify high-potential talents and organizational needs through rigorous assessment and analysis.",
    icon: Search,
    color: "bg-blue-100 text-blue-600",
  },
  {
    title: "Development",
    description:
      "Structured curriculum, mentorship, and real-world projects accelerate professional and leadership growth.",
    icon: Bolt,
    color: "bg-purple-100 text-purple-600",
  },
  {
    title: "Promotion",
    description:
      "Strategic placement and promotion within organizations, ensuring long-term success and retention.",
    icon: TrendingUp,
    color: "bg-orange-100 text-orange-600",
  },
];

export function TimelineSection() {
  return (
    <section
      id="how-it-works"
      className="py-24 px-4 bg-linear-to-b from-white to-muted"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            How It Works
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A proven methodology for transforming potential into excellence
          </p>
        </div>

        {/* Steps */}
        <div className="flex flex-wrap justify-center items-center">
          {timelineSteps.map((item, index) => {
            const Icon = item.icon;
            const isLast = index === timelineSteps.length - 1;

            return (
              <React.Fragment key={index}>
                <div className="flex-1 min-w-[300px] max-w-[350px] p-4 ">
                  {/* Content */}
                  <div className="h-full">
                    <div className="animate-slide-up bg-white p-6 rounded-xl border border-border hover:border-primary/30 transition-all h-full flex flex-col">
                      <div className="flex flex-col items-center gap-4 text-center">
                        <div
                          className={`w-16 h-16 rounded-full flex items-center justify-center shrink-0 ${item.color}`}
                        >
                          <Icon size={30} />
                        </div>
                        <div className="flex flex-col items-center justify-center">
                          <h3 className="text-2xl font-bold text-foreground">
                            {item.title}
                          </h3>
                          <p className="text-muted-foreground text-sm mt-1">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {!isLast && (
                  <ChevronRight
                    className="hidden lg:block text-muted-foreground/50"
                    size={32}
                  />
                )}
              </React.Fragment>
            );
          })}
        </div>
      </div>
    </section>
  );
}
