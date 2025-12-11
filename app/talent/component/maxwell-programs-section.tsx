"use client";

import React from "react";

interface ProgramCardProps {
  title: string;
  color: string;
  content: React.ReactNode;
}

const programs: ProgramCardProps[] = [
  {
    title: "Identification Phase",
    color: "bg-amber-200",
    content: (
      <>
        <p>
          Identifying top talent through the initial Maxwell leadership module (Certified).
        </p>

        <p className="font-semibold mt-4">Learning Module (1 month):</p>
        <ul className="list-disc ml-5 mt-2">
          <li>Maxwell Leadership Training.</li>
          <li>Kompas/Gramedia (5W + 1H)</li>
          <li>Case study for company assessment.</li>
        </ul>

        <p className="font-semibold mt-4">USP:</p>
        <p>Maxwell & Kompas Training + Real-case assessment from companies.</p>
      </>
    ),
  },
  {
    title: "Development Phase (6 – 12 months)",
    color: "bg-violet-200",
    content: (
      <>
        <p>
          Providing the chance for talents to engage on real-life company issues as per case studies they have presented. If deemed worthy, they can be promoted.
        </p>

        <p className="font-semibold mt-4">Learning Module:</p>
        <p>
          Will be adjusted towards each of their field of focus (Ex: Finance, BD, HRGA, Operations).
        </p>

        <p className="font-semibold mt-4">How to Train The Talents:</p>
        <ul className="list-disc ml-5 mt-2">
          <li>
            Company will assign the task that they will need to address in accordance to their industry focus.
          </li>
          <li>
            The development phase will last for 6-12 months.
          </li>
        </ul>

        <p className="font-semibold mt-4">Payment:</p>
        <ul className="list-disc ml-5 mt-2">
          <li>Company can pay the IDR 35 Mio for the talents (if they prove themselves).</li>
          <li>Employees can convert the IDR 35 Mio into installment (not recommended).</li>
        </ul>
      </>
    ),
  },
  {
    title: "Management Trainee Program",
    color: "bg-rose-200",
    content: (
      <>
        <p>
          Top identified talents with experience will be allocated to the MT program.
        </p>

        <p className="font-semibold mt-4">Payment to Maxwell x Govokasi:</p>
        <ul className="list-disc ml-5 mt-2">
          <li>All certified training modules based on their field of focus.</li>
          <li>Maxwell Advanced Leadership Training.</li>
        </ul>

        <p className="font-semibold mt-4">Payment Technicals:</p>
        <ul className="list-disc ml-5 mt-2">
          <li>Company to pay GV on a retainer basis.</li>
          <li>Company appoints GV as their HR solution partner for MT Learning & Development.</li>
        </ul>
      </>
    ),
  },
  {
    title: "Promotion Phase",
    color: "bg-purple-200",
    content: (
      <>
        <p>
          If candidate performs well in OJT, they will be promoted into a full-time employee.
        </p>

        <p className="font-semibold mt-4">Payment to Maxwell x Govokasi:</p>
        <ul className="list-disc ml-5 mt-2">
          <li>The company will need to pay GV equivalent to the employee’s 1x salary</li>
        </ul>

        <p className="font-semibold mt-4">Unique Selling Point:</p>
        <p>
          Even if candidate did not receive any job offer, the candidate will be assisted by GV x MXW team to get a new job.
        </p>
      </>
    ),
  },
];

const ProgramCard: React.FC<ProgramCardProps> = ({ title, color, content }) => {
  return (
    <div className="bg-white rounded-2xl shadow p-8 flex flex-col h-full">
      <span className={`px-4 py-1 rounded-md text-sm font-semibold ${color}`}>
        {title}
      </span>

      <div className="mt-4 text-sm leading-relaxed flex-grow">
        {content}
      </div>
    </div>
  );
};

const MaxwellProgramsSection: React.FC = () => {
  return (
    <section id="maxwell-programs-section" className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Maxwell Ascend Leadership Program
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            How the program work and provide benefits for each stakeholder.
          </p>
        </div>

        {/* Grid 2x2 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-stretch">
          {programs.map((item, index) => (
            <ProgramCard key={index} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MaxwellProgramsSection;
