"use client";

import { useState } from "react";
import { DollarSign, TrendingUp, Users, PieChart } from "lucide-react";

const categories = [
  {
    name: "Finance",
    icon: DollarSign,
    competencies: [
      "Financial Analysis & Modeling",
      "Budget Planning & Management",
      "ROI & Performance Metrics",
      "Risk Management",
      "Strategic Investment",
      "P&L Optimization",
    ],
  },
  {
    name: "Business Development",
    icon: TrendingUp,
    competencies: [
      "Market Analysis & Strategy",
      "Business Model Innovation",
      "Growth Acceleration",
      "Partnership Development",
      "Competitive Advantage",
      "Scaling Operations",
    ],
  },
  {
    name: "Marketing",
    icon: Users,
    competencies: [
      "Brand Strategy & Positioning",
      "Digital Marketing Excellence",
      "Customer Experience Design",
      "Data-Driven Campaigns",
      "Market Segmentation",
      "Revenue Growth Tactics",
    ],
  },
  {
    name: "HR & Talent",
    icon: PieChart,
    competencies: [
      "Talent Acquisition Strategy",
      "Organization Development",
      "Change Management",
      "Employee Engagement",
      "Leadership Development",
      "Compensation Strategy",
    ],
  },
];

export default function CurriculumOverview() {
  const [selectedCategory, setSelectedCategory] = useState(0);

  return (
    <section
      id="curriculum"
      className="py-24 px-4 bg-gradient-to-b from-background to-primary/3"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Curriculum Mastery
          </h2>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
            Comprehensive skill development across core business functions
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((cat, idx) => {
            const Icon = cat.icon;
            return (
              <button
                key={idx}
                onClick={() => setSelectedCategory(idx)}
                className={`group flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  selectedCategory === idx
                    ? "bg-primary text-white shadow-lg"
                    : "bg-white border-2 border-border/30 text-foreground hover:border-primary/50"
                }`}
              >
                <Icon size={20} />
                <span>{cat.name}</span>
              </button>
            );
          })}
        </div>

        {/* Competencies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fadeIn">
          {categories[selectedCategory].competencies.map((competency, idx) => (
            <div
              key={idx}
              className="p-6 bg-white rounded-xl border border-border/30 hover:border-primary/50 shadow-sm hover:shadow-lg transition-all duration-300 hover:translate-y-[-2px]"
            >
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                <p className="text-lg font-semibold text-foreground leading-relaxed">
                  {competency}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
