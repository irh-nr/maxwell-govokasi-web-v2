"use client";
import { Users, Briefcase, Crown } from "lucide-react";

const aboutCards = [
  {
    icon: Users,
    title: "Entry-Level OJT",
    description:
      "Foundation-building program for fresh graduates and junior professionals. Develop core competencies in real-world environments with mentorship from industry leaders.",
  },
  {
    icon: Briefcase,
    title: "Management Trainee",
    description:
      "Strategic program for mid-level professionals transitioning into management. Master leadership principles and operational excellence while building your executive network.",
  },
  {
    icon: Crown,
    title: "C-Suite Development",
    description:
      "Executive-level program for senior leaders and board aspirants. Refine visionary thinking, strategic decision-making, and enterprise leadership capabilities.",
  },
];

export default function Programs() {
  return (
    <section id="programs" className="py-24 md:px-12 bg-background">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-x-24 gap-y-10">
          {/* Title - starts at column 1 */}
          <div className="min-w-[120px]">
            <h2 className="text-[14px] font-bold uppercase tracking-[0.2em] leading-tight text-foreground">
              Program <br />
              Pathways
            </h2>
            <div className="mt-2 h-1 w-16 bg-gradient-to-r from-purple-700 via-purple-400 to-transparent rounded-full" />
          </div>

          {/* Cards Grid */}
          <div className="space-y-12">
            {/* Subtitle - starts at column 4, spans to column 12 */}
            <div className="col-span-12 lg:col-span-9 lg:col-start-4 -mt-1">
              <h1 className="text-[30px] font-bold leading-tight text-balance">
                A structured series of programs to <br />
                support career growth.
              </h1>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {aboutCards.map((card, idx) => {
                const Icon = card.icon;
                return (
                  <div
                    key={idx}
                    className="group p-8 bg-white rounded-[20px] border border-border/30 hover:border-primary/50 shadow-sm transition-all card-depth-v2"
                  >
                    {/* Icon */}
                    <div className="mb-6 inline-flex p-4 bg-primary/10 rounded-xl group-hover:bg-primary/20 transition-colors">
                      <Icon className="w-8 h-8 text-primary" />
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl font-bold text-foreground mb-4">
                      {card.title}
                    </h3>

                    {/* Description */}
                    <p className="text-foreground/70 leading-relaxed">
                      {card.description}
                    </p>

                    {/* Accent Line */}
                    <div className="mt-6 w-24 h-1 bg-gradient-to-r from-primary to-primary/0 rounded-full" />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
