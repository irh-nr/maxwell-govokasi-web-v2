import { Star, Linkedin } from "lucide-react";

const coaches = [
  {
    name: "Sarah Mitchell",
    position: "VP of Talent",
    company: "Goldman Sachs",
    expertise: "Investment Banking",
    bio: "Specializes in career acceleration strategies",
  },
  {
    name: "James Chen",
    position: "Director of Operations",
    company: "Microsoft",
    expertise: "Technology Leadership",
    bio: "Focuses on innovation and product strategy",
  },
  {
    name: "Patricia Williams",
    position: "Senior Partner",
    company: "McKinsey & Co",
    expertise: "Consulting",
    bio: "Expert in business transformation",
  },
  {
    name: "Michael Anderson",
    position: "CEO",
    company: "Deloitte",
    expertise: "Enterprise Solutions",
    bio: "Mentors emerging leaders",
  },
  {
    name: "Emma Thompson",
    position: "Chief Creative Officer",
    company: "Accenture",
    expertise: "Digital Innovation",
    bio: "Guides creative problem-solving",
  },
  {
    name: "David Rodriguez",
    position: "Managing Director",
    company: "J.P. Morgan",
    expertise: "Finance",
    bio: "Specializes in financial markets",
  },
];

export function CoachesSection() {
  return (
    <section
      id="coaches"
      className="py-20 px-4 bg-gradient-to-b from-white to-muted"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Meet Our Elite Coaches
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Learn directly from industry leaders and executives who are shaping
            the future of business
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {coaches.map((coach, index) => (
            <div
              key={index}
              className="flex gap-4 card-depth group p-6 bg-white rounded-xl border border-border hover:border-primary/30 transition-all"
            >
              {/* Avatar */}
              <div className="w-40 h-full bg-gradient-to-br from-primary to-secondary rounded-lg mb-4 flex items-center justify-center text-white font-bold text-xl">
                {coach.name.charAt(0)}
                {coach.name.split(" ")[1].charAt(0)}
              </div>
              <div>
                {/* Info */}
                <h3 className="text-xl font-bold text-foreground mb-1">
                  {coach.name}
                </h3>
                <p className="text-primary font-semibold text-sm mb-1">
                  {coach.position}
                </p>
                <p className="text-muted-foreground text-sm mb-4">
                  {coach.company}
                </p>

                {/* Expertise Tag */}
                <div className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full mb-4">
                  {coach.expertise}
                </div>

                {/* Bio */}
                <p className="text-muted-foreground text-sm mb-6 line-clamp-2">
                  {coach.bio}
                </p>

                {/* Footer */}
                <div className="flex items-center justify-between pt-4 border-t">
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={14} fill="#31006f" stroke="#31006f" />
                    ))}
                  </div>
                  <button className="p-2 hover:bg-primary/10 rounded-lg transition-all">
                    <Linkedin size={16} className="text-primary" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="px-8 py-3 border-2 border-primary text-primary font-bold rounded-lg hover:bg-primary/5 transition-all">
            View All Coaches
          </button>
        </div>
      </div>
    </section>
  );
}
