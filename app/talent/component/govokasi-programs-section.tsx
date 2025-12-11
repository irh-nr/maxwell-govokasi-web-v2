export default function GovokasiProgramsSection() {
  const programs = [
    {
      title: "OJT (1 month)",
      description:
        "OJT is a short-term introductory training period where candidates learn basic knowledge, processes, and tools needed for the role while being observed for potential.",
      purpose: [
        "To assess whether candidates can adapt to the company environment.",
        "To evaluate basic competence and work ethic.",
        "To provide essential orientation and task exposure.",
      ],
      image: "/photos/OJT.jpg",
    },
    {
      title: "Internship (3–6 months)",
      description:
        "Internship is a temporary working period where individuals perform supervised tasks to gain hands-on experience while contributing to real company projects.",
      purpose: [
        "To develop practical skills aligned with the company's needs.",
        "To evaluate performance over an extended period.",
        "To observe reliability, consistency, and capability in real tasks.",
      ],
      image: "/photos/Internship.jpg",
    },
    {
      title: "Probation (3 months, if needed)",
      description:
        "Probation is a trial employment period to evaluate whether the employee meets performance standards, behavior expectations, and long-term potential.",
      purpose: [
        "To validate job performance in real conditions.",
        "To evaluate cultural fit, discipline, and teamwork.",
        "To determine whether to offer a full-time contract.",
      ],
      image: "/photos/Probation.jpg",
    },
    {
      title: "Full-time employment (based on offer)",
      description:
        "Full-time employment is a permanent working relationship where the employee is officially hired with long-term responsibilities and benefits.",
      purpose: [
        "To integrate the employee as a long-term contributor.",
        "To provide stability, benefits, and career development.",
        "To ensure commitment to organizational goals.",
      ],
      image: "/photos/Fulltime-Employment.jpg",
    },
  ];

  return (
    <section id="main-section" className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Candidates Journey
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A structured series of programs to support career growth and
            competency development.
          </p>
        </div>

        <div className="space-y-16">
          {programs.map((item, index) => (
            <div key={index} className="grid md:grid-cols-2 gap-8 items-center">
              <img
                src={item.image}
                alt={item.title}
                className="rounded-xl shadow-md object-cover h-64 w-72 mx-auto"
              />

              <div>
                <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                <p className="mb-4">{item.description}</p>

                <h4 className="font-semibold mb-2">Purpose:</h4>
                <ul className="list-disc list-inside space-y-1">
                  {item.purpose.map((point, idx) => (
                    <li key={idx}>{point}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
