import { User, Target, Briefcase, Zap, Award } from "lucide-react";

const timelineSteps = [
  {
    step: 1,
    title: "Register & Consultation",
    description:
      "Sign up and meet with our career advisors to understand your goals",
    icon: User,
    color: "bg-blue-100 text-blue-600",
  },
  {
    step: 2,
    title: "Assessment",
    description:
      "Comprehensive evaluation of your skills, interests, and potential",
    icon: Target,
    color: "bg-purple-100 text-purple-600",
  },
  {
    step: 3,
    title: "Coaching & Mentoring",
    description: "Personalized coaching sessions with industry experts",
    icon: Zap,
    color: "bg-orange-100 text-orange-600",
  },
  {
    step: 4,
    title: "Project Simulation",
    description: "Real-world corporate simulation projects with live feedback",
    icon: Briefcase,
    color: "bg-green-100 text-green-600",
  },
  {
    step: 5,
    title: "Placement & Networking",
    description: "Job placement support and corporate networking opportunities",
    icon: Award,
    color: "bg-red-100 text-red-600",
  },
];

export function TimelineSection() {
  return (
    <section
      id="journey"
      className="py-20 px-4 bg-gradient-to-b from-white to-muted"
    >
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Your Journey
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Follow our proven pathway to career acceleration and corporate
            success
          </p>
        </div>

        {/* Steps */}
        <div className="flex flex-wrap justify-center items-center">
          {timelineSteps.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="flex-1 min-w-[300px] max-w-[350px] p-4 "
              >
                {/* Content */}
                <div className="h-full">
                  <div className="animate-slide-up bg-white p-6 rounded-xl border border-border hover:border-primary/30 transition-all h-full flex flex-col">
                    <div className="flex flex-col items-center gap-4 text-center">
                      <div
                        className={`w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 ${item.color}`}
                      >
                        <Icon size={20} />
                      </div>
                      <div className="flex flex-col items-center justify-center">
                        <div className="flex items-center gap-3 mb-2">
                          <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-bold rounded-full">
                            Step {item.step}
                          </span>
                        </div>
                        <h3 className="text-xl font-bold text-foreground mb-1">
                          {item.title}
                        </h3>
                        <p className="text-muted-foreground text-sm">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
