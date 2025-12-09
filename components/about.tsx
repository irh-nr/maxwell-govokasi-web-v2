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

export default function About() {
  return (
    <section id="about" className="py-24 px-4 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Program Pathways
          </h2>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
            A structured series of programs to support career growth 
            and competency development.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {aboutCards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <div
                key={idx}
                className="group p-8 bg-white rounded-[20px] border border-border/30 hover:border-primary/50 shadow-sm hover:shadow-xl transition-all duration-300 hover:translate-y-[-20px]"
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
    </section>
  );
}
