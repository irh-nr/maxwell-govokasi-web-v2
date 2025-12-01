import {
  CheckCircle,
  Target,
  ArrowRight,
  Briefcase,
  Award,
} from "lucide-react";
import { cn } from "@/lib/utils";

const programs = [
  {
    title: "Basic Foundation",
    level: "Beginner",
    duration: "7 Months",
    format: "Hybrid",
    icon: Award,
    description: "Essential program for entry-level professionals",
    packages: ["-", "-", "-", "-", "-"],
    price: "7M",
  },
  {
    title: "Advanced Executive",
    level: "Intermediate",
    duration: "42 Months",
    format: "Hybrid",
    icon: Briefcase,
    description: "Comprehensive program for ambitious leaders",
    packages: ["-", "-", "-", "-", "-"],
    price: "42M",
  },
];

export function PackagesSection() {
  return (
    <section id="pricing" className="py-24 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Pricing
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive packages designed to accelerate your career journey
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-12 p-6">
          {programs.map((program, index) => {
            const Icon = program.icon;
            return (
              <div
                key={index}
                className="flex flex-col card-depth group p-6 bg-linear-to-br from-muted justify-between to-white rounded-xl border border-border hover:border-accent/50 transition-all"
              >
                <div>
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4 gap-6">
                    <div className="flex-1">
                      <h2 className="text-3xl font-bold text-foreground mb-2">
                        {program.title}
                      </h2>
                      <p className="text-sm text-muted-foreground mb-4">
                        {program.description}
                      </p>
                    </div>
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                      <Icon size={20} className="text-primary" />
                    </div>
                  </div>

                  {/* Meta */}
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-2 text-4xl lg:text-5xl">
                      <span className="text-primary font-bold">
                        {program.price}
                      </span>
                      <span className="text-muted-foreground text-sm">
                        / {program.duration}
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

                  {/*Pricing*/}
                  <div className="py-4">
                    <ul className="text-secondary">
                      {program.packages.map((pkg, index) => (
                        <li key={index} className="flex py-1.5 gap-2">
                          <CheckCircle className="text-primary" />
                          {pkg}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* CTA */}
                <div className="pt-6 border-t mt-6">
                  <button className="w-full px-4 py-2 bg-primary/10 text-primary font-semibold rounded-lg hover:bg-primary/20 transition-all flex items-center justify-center gap-2 group">
                    Apply Now
                    <ArrowRight
                      size={16}
                      className="group-hover:translate-x-1 transition-transform"
                    />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
