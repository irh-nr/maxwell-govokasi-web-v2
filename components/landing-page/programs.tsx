"use client";
import { Users, Briefcase, ChevronRight } from "lucide-react";

const PROGRAM_DATA = [
  {
    id: "ojt",
    icon: Users,
    title: "On-the-Job Training (OJT) Program",
    description: [
      <>
        The OJT Program is designed to build your professional foundation
        through real execution and guided development.
      </>,
      <>
        Participants will develop <b>leadership soft skills</b>, including
        communication, accountability, teamwork, and professional work ethics,
        while actively contributing to <b>real projects</b> within Internal and
        its partner ecosystem.
      </>,
      <>
        You will receive structured internal hard skills development aligned
        with your chosen Department (Creative, Business Development, Technology,
        or Human Resources). Ensuring your learning is directly connected to
        real role expectations and industry needs.
      </>,
      <>
        This program prepares you to become a capable, work-ready professional
        who understands how to contribute, collaborate, and execute from day
        one.
      </>,
    ],
    features: [
      "Leadership soft skills development",
      "Real project experience in live work environments",
      "Internal hard skills development",
    ],
  },
  {
    id: "maxwell",
    icon: Briefcase,
    title: "Maxwell Leadership Development Program",
    description: [
      <>
        The Maxwell Leadership Development Program is designed to prepare you
        for leadership responsibility, not just execution.
      </>,
      <>
        Beyond leadership soft skills and real project exposure, participants
        engage in the <b>Maxwell Mentorship Program</b>, where leadership is
        developed through guided mentorship sessions, leadership discussions,
        and direct exposure to Maxwell Leadership perspectives.
      </>,
      <>
        You will strengthen your professional capability through{" "}
        <b>internal hard skills development</b>, while also gaining{" "}
        <b>
          external hard skills development guided by Maxwell Leadership Coaches
        </b>
        , ensuring your growth aligns with global leadership standards.
      </>,
      <>
        This program prepares you to become a capable, work-ready professional
        who understands how to contribute, collaborate, and execute from day
        one.
      </>,
    ],
    features: [
      "Maxwell Mentorship Program (leadership-focused mentorship events)",
      "Leadership soft skills development",
      "Real project experience",
      "Internal hard skills development",
      "External hard skills development by Maxwell Leadership Coaches",
    ],
  },
];

export default function Programs() {
  return (
    <section id="programs" className="py-24 md:px-12 bg-background">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-x-24 gap-y-10">
          {/* Left Sidebar: Title */}
          <div className="min-w-[120px] mt-2">
            <div className="sticky top-32">
              <h2 className="text-[14px] font-bold uppercase tracking-[0.2em] leading-tight text-foreground">
                Program <br /> Pathways
              </h2>
              <div className="mt-3 h-1 w-16 bg-gradient-to-r from-purple-700 via-purple-400 to-transparent rounded-full" />
            </div>
          </div>

          {/* Right Content */}
          <div className="lg:w-3/4 space-y-16">
            <h1 className="text-[30px] font-bold leading-tight max-w-2xl text-balance">
              A structured series of programs to support career growth.
            </h1>

            <div className="grid grid-cols-1 gap-12">
              {PROGRAM_DATA.map((program) => (
                <div
                  key={program.id}
                  className="group p-8 md:p-10 bg-white rounded-[24px] border border-border/30 hover:border-primary/40 shadow-sm transition-all duration-300 card-depth-v2"
                >
                  {/* Icon & Title */}
                  <div className="mb-6 inline-flex p-4 bg-primary/10 rounded-xl group-hover:bg-primary/20 transition-colors">
                    <program.icon className="w-8 h-8 text-primary" />
                  </div>

                  <h3 className="text-2xl font-bold text-foreground mb-6">
                    {program.title}
                  </h3>

                  {/* Body Text: Managed spacing (The MS Word Fix) */}
                  <div className="flex flex-col gap-4 leading-normal text-foreground/80">
                    {program.description.map((paragraph, i) => (
                      <p key={i}>{paragraph}</p>
                    ))}
                  </div>

                  {/* Accent Line - Restored exactly as you had it */}
                  <div className="mt-6 w-24 h-1 bg-gradient-to-r from-primary to-primary/0 rounded-full" />

                  {/* Features List */}
                  <div className="mt-8">
                    <span className="font-bold text-foreground">
                      What you will get :
                    </span>
                    <ul className="mt-4 space-y-3">
                      {program.features.map((feature, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2 text-sm text-foreground/80"
                        >
                          <ChevronRight className="w-4 h-4 mt-0.5 text-primary shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
