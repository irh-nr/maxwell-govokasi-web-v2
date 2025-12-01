import { Star } from "lucide-react";
import Marquee from "react-fast-marquee";

const testimonials = [
  {
    quote:
      "Maxwell x Govokasi completely transformed my career trajectory. The mentorship was invaluable.",
    author: "Alexander Johnson",
    role: "Senior Analyst",
    company: "Goldman Sachs",
    avatar: "AJ",
  },
  {
    quote:
      "The program connected us with exactly the talent we needed. Exceptional candidates.",
    author: "Lisa Chen",
    role: "VP of Recruitment",
    company: "Microsoft",
    avatar: "LC",
  },
  {
    quote:
      "From interview preparation to placement, every step was perfectly guided.",
    author: "Marcus Williams",
    role: "Management Consultant",
    company: "McKinsey & Co",
    avatar: "MW",
  },
  {
    quote:
      "The corporate simulation projects gave me real experience before joining.",
    author: "Sophia Rodriguez",
    role: "Associate",
    company: "JPMorgan Chase",
    avatar: "SR",
  },
];

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-24 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Success Stories
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Hear from talents and companies who've experienced career
            transformation
          </p>
        </div>
      </div>
      <div className="lg:px-20 px-2">
        <Marquee className="h-80" gradient={true}>
          <div className="flex">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="card-depth p-8 m-4 bg-linear-to-brrom-muted to-white rounded-xl border border-border hover:border-accent/50 transition-all"
              >
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} fill="#C3A464" stroke="#C3A464" />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-lg text-foreground mb-6 leading-relaxed">
                  "{testimonial.quote}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-4 pt-6 border-t">
                  <div className="w-12 h-12 bg-linear-to-br from-primary to-secondary rounded-full flex items-center justify-center text-white font-bold">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <p className="font-bold text-foreground">
                      {testimonial.author}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.role} @ {testimonial.company}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Marquee>
      </div>
    </section>
  );
}
