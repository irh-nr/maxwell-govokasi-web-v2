import { Linkedin, ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";

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
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const [itemsPerPage, setItemsPerPage] = useState(1);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setItemsPerPage(3);
      else if (window.innerWidth >= 768) setItemsPerPage(2);
      else setItemsPerPage(1);
    };

    handleResize(); // Initial run
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const maxIndex = Math.max(0, coaches.length - itemsPerPage);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, maxIndex]);

  const handlePrev = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  const handleNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const goToSlide = (index: any) => {
    setIsAutoPlaying(false);
    setCurrentIndex(index);
  };

  return (
    <section
      id="coaches"
      className="py-24 px-4 bg-linear-to-b from-white to-muted"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Meet Our Elite Coaches
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Learn directly from industry leaders and executives who are shaping
            the future of business.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative px-8 py-0">
          {/* Navigation Buttons */}
          <button
            onClick={handlePrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 p-3 bg-white rounded-full shadow-lg hover:bg-primary/5 transition-all"
          >
            <ChevronLeft className="text-primary" size={24} />
          </button>

          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 p-3 bg-white rounded-full shadow-lg hover:bg-primary/5 transition-all"
          >
            <ChevronRight className="text-primary" size={24} />
          </button>

          {/* Carousel Track */}
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-out my-8 items-center"
              style={{
                transform: `translateX(-${
                  currentIndex * (100 / itemsPerPage)
                }%)`,
              }}
            >
              {coaches.map((coach, index) => (
                <div
                  key={index}
                  className="w-full md:w-1/2 lg:w-1/3 shrink-0 px-4"
                >
                  <div className="flex flex-col gap-4 card-depth-v2 hover:shadow-2xl group bg-white rounded-xl border border-border hover:border-primary/30 transition-all h-full">
                    {/* Picture */}
                    <div className="w-full h-60 bg-linear-to-br from-primary to-secondary rounded-lg flex items-center justify-center text-white font-bold text-xl">
                      {coach.name.charAt(0)}
                      {coach.name.split(" ")[1].charAt(0)}
                    </div>
                    <div className="p-4 text-center">
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
                      <div className="flex items-center justify-center pt-4 border-t">
                        <button className="px-2 py-1 hover:bg-primary/10 rounded-lg transition-all text-primary">
                          <div className="flex justify-center items-center gap-2">
                            <span className="pt-1">LinkedIn</span>
                            <Linkedin size={20} className="text-primary" />
                          </div>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {[...Array(maxIndex + 1)].map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`h-2 rounded-full transition-all ${
                  currentIndex === index
                    ? "w-8 bg-primary"
                    : "w-2 bg-muted-foreground/30 hover:bg-muted-foreground/50"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
