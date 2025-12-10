import { CheckCircle2 } from "lucide-react";

export default function ValueSection() {
  const value = [
    {
      id: 1,
      title: "Faster & More Efficient Hiring",
      description:
        "We shorten your recruitment cycle with pre-screened, assessment-verified talent.",
    },
    {
      id: 2,
      title: "Lower Drop-Off & Higher Quality Pipeline",
      description:
        "Our structured process keeps candidates engaged from start to finish.",
    },
    {
      id: 3,
      title: "Job-Ready Talent From Day One",
      description:
        "Our training programs ensure new hires are prepared before they join your team.",
    },
    {
      id: 4,
      title: "Performance Consistency",
      description:
        "Talent skillsets are aligned with your standards and expectations.",
    },
    {
      id: 5,
      title: "Smart Candidate Filtering",
      description:
        "Our technology and assessments help you identify top performers in minutes.",
    },
    {
      id: 6,
      title: "Reduced HR Workload",
      description:
        "We handle the screening, processing, and preparation — so your team can focus on growth.",
    },
  ];
  return (
    <section className="py-24 px-4">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl mb-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            How Maxwell x GOVOKASi Solves These Problems
          </h2>
          <p className="text-md">
            We don’t just supply candidates — we deliver{" "}
            <span className="font-semibold">
              prepared, pre-trained, and performance-aligned talent
            </span>{" "}
            ready to help your business grow.
          </p>
        </div>

        <div className="group p-8 bg-white rounded-[20px] border border-border/30 hover:border-primary/50 shadow-sm transition-all card-depth">
          <ul className="grid grid-cols-2 gap-6">
            {value.map((value) => (
              <li key={value.id}>
                <div className="flex gap-2">
                  <CheckCircle2 className="text-primary" />
                  <div className="grid">
                    <span className="font-semibold">{value.title}</span>
                    <span className="hidden md:flex">{value.description}</span>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
