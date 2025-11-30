import {
  Clock,
  Users,
  Target,
  ArrowRight,
  Briefcase,
  Award,
  Zap,
  BookOpen,
} from "lucide-react";
import { cn } from "@/lib/utils";

const programs = [
  {
    title: "Executive Mentorship",
    level: "Beginner",
    duration: "12 weeks",
    format: "Hybrid",
    icon: Users,
    description: "One-on-one coaching with C-suite executives",
  },
  {
    title: "Corporate Simulation Project",
    level: "Intermediate",
    duration: "8 weeks",
    format: "Online",
    icon: Briefcase,
    description: "Real-world project experience with live feedback",
  },
  {
    title: "Interview Mastery",
    level: "Beginner",
    duration: "4 weeks",
    format: "Online",
    icon: Target,
    description: "Technical and behavioral interview preparation",
  },
  {
    title: "Leadership Accelerator",
    level: "Advanced",
    duration: "16 weeks",
    format: "Hybrid",
    icon: Zap,
    description: "Advanced leadership skills and strategic thinking",
  },
  {
    title: "Placement Boot Camp",
    level: "Intermediate",
    duration: "6 weeks",
    format: "Online",
    icon: Award,
    description: "Intensive preparation for corporate placement",
  },
  {
    title: "Industry Specialization",
    level: "Advanced",
    duration: "20 weeks",
    format: "Hybrid",
    icon: BookOpen,
    description: "Deep dive into specific industry expertise",
  },
];

export function ProgramsSection() {
  return (
    <section id="programs" className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Our Programs
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive programs designed to accelerate your career journey
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {programs.map((program, index) => {
            const Icon = program.icon;
            return (
              <div
                key={index}
                className="card-depth group p-6 bg-linear-to-br from-muted to-white rounded-xl border border-border hover:border-accent/50 transition-all"
              >
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-foreground mb-2">
                      {program.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      {program.description}
                    </p>
                  </div>
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                    <Icon size={20} className="text-primary" />
                  </div>
                </div>

                {/* Meta */}
                <div className="space-y-2 mb-6 pb-6 border-b">
                  <div className="flex items-center gap-2 text-sm">
                    <Clock size={14} className="text-primary" />
                    <span className="text-muted-foreground">
                      {program.duration}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Target size={14} className="text-primary" />
                    <span
                      className={cn(
                        "px-2 py-1 rounded text-xs font-semibold",
                        program.level === "Beginner"
                          ? "bg-green-100 text-green-700"
                          : program.level === "Intermediate"
                          ? "bg-blue-100 text-blue-700"
                          : "bg-purple-100 text-purple-700"
                      )}
                    >
                      {program.level}
                    </span>
                    <span className="text-muted-foreground text-xs ml-auto">
                      {program.format}
                    </span>
                  </div>
                </div>

                {/* CTA */}
                <button className="w-full px-4 py-2 bg-primary/10 text-primary font-semibold rounded-lg hover:bg-primary/20 transition-all flex items-center justify-center gap-2 group">
                  See Details
                  <ArrowRight
                    size={16}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
