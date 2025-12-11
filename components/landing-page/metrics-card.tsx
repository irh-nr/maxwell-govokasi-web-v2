import React from "react";
const metricsCards = [
  { title: "Talent Pools", number: "33.000+" },
  { title: "Company Partners", number: "300+" },
  { title: "Major Cities", number: "10+" },
  { title: "Industries", number: "10+" },
];

export default function MetricsCard() {
  return (
    <section id="about" className="py-24 px-4 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {metricsCards.map((card, idx) => {
            return (
              <div
                key={idx}
                className="group p-2 py-8 bg-primary rounded-[20px] border border-border/30 hover:border-primary/50 shadow-sm transition-all card-depth-v2 text-center grid"
              >
                {/* Number */}
                <span className="text-white text-3xl font-bold leading-relaxed">
                  {card.number}
                </span>
                {/* Title */}
                <span className="text-xl text-white">{card.title}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
