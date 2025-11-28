import {
  CheckCircle2,
  User,
  Target,
  Briefcase,
  Zap,
  Award,
} from "lucide-react";

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
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Your Journey
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Follow our proven pathway to career acceleration and corporate
            success
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary to-secondary" />

          {/* Steps */}
          <div className="space-y-12">
            {timelineSteps.map((item, index) => {
              const Icon = item.icon;
              const isEven = index % 2 === 0;

              return (
                <div key={index} className="relative">
                  {/* Timeline dot */}
                  <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 -translate-y-3 z-10">
                    <div className="w-12 h-12 rounded-full bg-white border-4 border-primary flex items-center justify-center">
                      <CheckCircle2 size={20} className="text-primary" />
                    </div>
                  </div>

                  {/* Content */}
                  <div
                    className={`md:w-1/2 ${
                      isEven ? "md:mr-auto md:pr-12" : "md:ml-auto md:pl-12"
                    }`}
                  >
                    <div className="animate-slide-up bg-white p-6 rounded-xl border border-border hover:border-primary/30 transition-all">
                      <div className="flex items-start gap-4">
                        <div
                          className={`w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 ${item.color}`}
                        >
                          <Icon size={20} />
                        </div>
                        <div>
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
      </div>
    </section>
  );
}
