"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { cn } from "@/lib/utils";

const heroSlides = [
  {
    headline: "Transform Your Career With World-Class Coaching",
    subheadline:
      "Learn from corporate mentors and accelerate your professional growth",
    backgroundClass:
      "bg-gradient-to-br from-primary via-primary/80 to-secondary",
    cta: "Start Your Journey",
    photos: "/photos/25060.jpg",
  },
  {
    headline: "Build the Corporate Future With Proven Talent",
    subheadline:
      "Connect with exceptional young professionals ready for impact",
    backgroundClass:
      "bg-gradient-to-br from-secondary via-primary/70 to-primary",
    cta: "Find Top Talent",
    photos: "/photos/13391.jpg",
  },
  {
    headline: "Accelerate Growth Through Mentorship & Placement",
    subheadline: "Real projects, real coaching, real opportunities await",
    backgroundClass:
      "bg-gradient-to-br from-primary/70 via-secondary to-primary",
    cta: "Explore Programs",
    photos: "/photos/3067.jpg",
  },
  {
    headline: "Empowering Talent, Empowering Companies",
    subheadline: "Together we create meaningful career transformations",
    backgroundClass:
      "bg-gradient-to-br from-secondary/85 via-primary to-secondary",
    cta: "Get Started",
    photos: "/photos/13391.jpg",
  },
];

export function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);

  useEffect(() => {
    if (!autoPlay) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [autoPlay]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    setAutoPlay(false);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + heroSlides.length) % heroSlides.length
    );
    setAutoPlay(false);
  };

  const slide = heroSlides[currentSlide];

  return (
    <section className="relative w-full h-screen pt-20 overflow-hidden">
      {/* Background */}
      <div>
        <div
          className={cn(
            "absolute inset-0 transition-all duration-1000 ease-out z-10",
            slide.backgroundClass
          )}
        />
        <Image src={slide.photos} alt="" fill className="object-cover" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 text-center">
        <div className="max-w-4xl mx-auto animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            {slide.headline}
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-2xl mx-auto">
            {slide.subheadline}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-white text-primary font-bold rounded-lg hover:bg-opacity-90 transition-all transform hover:scale-105">
              {slide.cta}
            </button>
            <button className="px-8 py-4 border-2 border-white text-white font-bold rounded-lg hover:bg-white/10 transition-all">
              Learn More
            </button>
          </div>
        </div>
      </div>

      {/* Navigation Controls */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex items-center gap-4">
        <button
          onClick={prevSlide}
          className="p-2 rounded-full bg-white/20 hover:bg-white/30 text-white transition-all"
          aria-label="Previous slide"
        >
          <ChevronLeft size={24} />
        </button>
        <div className="flex gap-2">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setCurrentSlide(index);
                setAutoPlay(false);
              }}
              className={cn(
                "h-2 rounded-full transition-all",
                currentSlide === index ? "bg-white w-8" : "bg-white/40 w-2"
              )}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
        <button
          onClick={nextSlide}
          className="p-2 rounded-full bg-white/20 hover:bg-white/30 text-white transition-all"
          aria-label="Next slide"
        >
          <ChevronRight size={24} />
        </button>
      </div>
    </section>
  );
}
