import { AspectRatio } from "@/components/ui/aspect-ratio";
import Image from "next/image";

export default function MainSection() {
  const painPoint = [
    {
      id: 1,
      title: "High Drop-Off Rates",
      description:
        "Candidates disappear mid-process, slowing your momentum and wasting resources.",
    },
    {
      id: 2,
      title: "Long Time-to-Hire",
      description:
        "Vacant roles stay open for weeks or months, delaying business growth.",
    },
    {
      id: 3,
      title: "Heavy Training Burden",
      description:
        "Your team spends too much time coaching new hires instead of focusing on core work.",
    },
    {
      id: 4,
      title: "Inconsistent Talent Performance",
      description:
        "New hires aren’t always job-ready, leading to uneven productivity.",
    },
    {
      id: 5,
      title: "Difficult Candidate Filtering",
      description:
        "Sorting hundreds of applicants manually drains time and energy.",
    },
    {
      id: 6,
      title: "High Administrative Workload",
      description:
        "Scheduling, screening, and document handling often overwhelm HR teams.",
    },
  ];

  return (
    <section id="main-section" className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            We Understand Your Challenges
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We recognize the obstacles in finding the right talent and help you
            overcome them effectively
          </p>
        </div>
        <div className="flex flex-col lg:flex-row justify-between items-center gap-4">
          <div className="max-w-xl">
            <ol className="space-y-6">
              {painPoint.map((p) => (
                <li key={p.id}>
                  <div className="flex gap-4">
                    <span className="w-8 h-8 flex items-center justify-center rounded-full bg-primary text-white">
                      {p.id}
                    </span>{" "}
                    <div className="flex-1 gap-1">
                      <span className="text-2xl font-bold">{p.title}</span>
                      <p className="">{p.description}</p>
                    </div>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          <div className="relative w-xl aspect-auto rounded-2xl overflow-hidden self-stretch">
            <Image
              src={"/photos/13391.jpg"}
              alt=""
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
