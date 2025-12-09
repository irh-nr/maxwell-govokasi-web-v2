"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";

const testimonials = [
  {
    name: "Sianne Tania",
    position: "Service Quality Staff",
    company: "PT Bank Central Asia",
    logo: "BCA",
    quote:
      "The leadership mindset I gained changed the direction of my life and career.",
    image: "/success-stories/Sianne.jpeg",
  },
  {
    name: "Intan Annur",
    position: "Content Creator",
    company: "Elshe Skin",
    logo: "ELS",
    quote:
      "Maxwell Leadership helped transform my confidence and sharpen my communication as a future leader.",
    image: "/success-stories/Intan-Annur.jpeg",
  },
  {
    name: "Jonathan Farellius Chandra",
    position: "Social Media Officer",
    company: "Provaliant",
    logo: "PRV",
    quote:
      "Through mentorship and real corporate simulation, I landed my first corporate role faster than I imagined.",
    image: "/success-stories/Jonathan.jpeg",
  },
  {
    name: "Afsya Nabilla",
    position: "Business Development Representative",
    company: "Mekari Jurnal",
    logo: "MKR",
    quote:
      "The mentorship program accelerated my growth beyond what I thought possible.",
    image: "/success-stories/Afsya.jpeg",
  },
];

export function SuccessStories() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeCategory, setActiveCategory] = useState("All");
  const [filteredTestimonials, setFilteredTestimonials] =
    useState(testimonials);
  const [isAutoplay, setIsAutoplay] = useState(true);

  useEffect(() => {
    if (!isAutoplay || filteredTestimonials.length === 0) return;

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % filteredTestimonials.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [isAutoplay, filteredTestimonials.length]);

  const goToPrevious = () => {
    setIsAutoplay(false);
    setActiveIndex(
      (prev) =>
        (prev - 1 + filteredTestimonials.length) % filteredTestimonials.length
    );
  };

  const goToNext = () => {
    setIsAutoplay(false);
    setActiveIndex((prev) => (prev + 1) % filteredTestimonials.length);
  };

  const currentTestimonial = filteredTestimonials[activeIndex];

  return (
    <section
      id="success-stories"
      className="py-24 px-4 bg-linear-to-b from-white to-muted"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Real Impact
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Real transformations from alumni who completed the Maxwell
            Leadership program and are now leading impact across industries.
          </p>
        </div>

        <div>
          {/* Carousel */}
          {currentTestimonial && (
            <div className="relative">
              <div className="card-depth rounded-2xl overflow-hidden bg-white border border-border p-4">
                <div className="grid md:grid-cols-2 gap-0">
                  {/* Image Side */}
                  <div className="relative bg-linear-to-br from-primary/10 to-secondary/10 min-h-96 md:min-h-full flex items-center justify-center rounded-lg p-4">
                    <img
                      src={currentTestimonial.image || "/placeholder.svg"}
                      alt={currentTestimonial.name}
                      className="w-full h-full rounded-xl object-cover shadow-lg"
                    />
                  </div>

                  {/* Content Side */}
                  <div className="p-10 md:p-12 flex flex-col justify-between">
                    {/* Company Logo */}
                    <div className="w-16 h-16 bg-linear-to-br from-primary to-secondary rounded-lg flex items-center justify-center text-white font-bold text-lg mb-6 shadow-md">
                      {currentTestimonial.logo}
                    </div>

                    {/* Quote */}
                    <div className="mb-8">
                      <p className="text-2xl md:text-3xl text-foreground font-light leading-relaxed mb-6">
                        "{currentTestimonial.quote}"
                      </p>
                    </div>

                    {/* Author Info */}
                    <div>
                      <p className="text-xl font-bold text-foreground">
                        {currentTestimonial.name}
                      </p>
                      <p className="text-base text-muted-foreground mb-4">
                        {currentTestimonial.position} at{" "}
                        {currentTestimonial.company}
                      </p>

                      {/* Slide Indicators */}
                      <div className="flex gap-2 mt-6">
                        {filteredTestimonials.map((_, index) => (
                          <div
                            key={index}
                            className={cn(
                              "h-2 rounded-full transition-all",
                              index === activeIndex
                                ? "w-8 bg-primary"
                                : "w-2 bg-border"
                            )}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Navigation Arrows */}
              <button
                onClick={goToPrevious}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-3 shadow-lg hover:bg-primary hover:text-white transition-all md:-left-16"
                aria-label="Previous testimonial"
              >
                <ChevronLeft size={24} />
              </button>
              <button
                onClick={goToNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-3 shadow-lg hover:bg-primary hover:text-white transition-all md:-right-16"
                aria-label="Next testimonial"
              >
                <ChevronRight size={24} />
              </button>
            </div>
          )}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-6 pt-6 border-t border-border/50">
          <p className="text-lg text-foreground font-medium mb-4">
            Your journey starts today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-white rounded-full"
              asChild
            >
              <Link href={"/form/talent"}>Join Maxwell Leadership Program</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
