"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Check } from "lucide-react";

const heroSlides = [
  {
    headline: "Competence changes everything.",
    highlight: {
      word: "Competence",
      className: "text-brand-accent",
    },
    subheadline: "We don’t train skills. We build competence.",
    paragraph:
      "Through real work, real coaching, and real accountability. We turn raw potential into industry-ready performers.",
    backgroundClass:
      "bg-gradient-to-br from-primary via-primary/80 to-secondary",
    href: "/#cta",
    href2: "/talent",
    cta: "Join Us Now",
    photos: "/photos/25060.jpg",
  },
  {
    headline: "Build your corporate future on competence.",
    highlight: {
      word: "competence",
      className: "text-brand-accent",
    },
    subheadline: "Deploy talent who can perform from day one.",
    backgroundClass:
      "bg-gradient-to-br from-secondary via-primary/70 to-primary",
    href: "/form/companies",
    href2: "/companies",
    cta: "Find Top Talent",
    photos: "/photos/13391.jpg",
    list: [
      "Hits time-to-productivity",
      "Hits competence readiness",
      "Strong Logos (logic)",
      "Clear & trust-building",
    ],
  },
  {
    headline: "Accelerate Growth Through Mentorship & Placement",
    subheadline: "Real projects, real coaching, real opportunities await",
    backgroundClass:
      "bg-gradient-to-t from-secondary via-primary/70 to-primary",
    href: "/#about",
    href2: "/talent",
    cta: "Explore Programs",
    photos: "/photos/main-hero-3.jpeg",
  },
  {
    headline: "Empowering Talent, Empowering Companies",
    subheadline: "Together we create meaningful career transformations",
    backgroundClass:
      "bg-gradient-to-br from-secondary/85 via-primary to-secondary",
    href: "/#cta",
    href2: "/#about",
    cta: "Get Started",
    photos: "/photos/13391.jpg",
  },
];

type HighlightConfig =
  | {
      word: string;
      className: string;
    }
  | null
  | undefined;

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
  // Fungsi untuk render headline dengan highlight kata tertentu
  const renderHeadline = (text: string, highlight: HighlightConfig) => {
    if (!highlight || !highlight.word) return text;

    const parts = text.split(new RegExp(`(${highlight.word})`, "gi"));

    return parts.map((part, idx) =>
      part.toLowerCase() === highlight.word.toLowerCase() ? (
        <span key={idx} className={highlight.className}>
          {part}
        </span>
      ) : (
        <span key={idx}>{part}</span>
      )
    );
  };

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
        <Image
          src={slide.photos}
          alt=""
          fill
          className="object-cover ease-in-out"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 text-center">
        <div className="max-w-5xl mx-auto animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
            {renderHeadline(slide.headline, slide.highlight)}
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mt-6 max-w-2xl mx-auto">
            {slide.subheadline}
          </p>
          <p className="text-lg md:text-xl text-white/80 mt-4 max-w-2xl mx-auto leading-tight">
            {slide.paragraph}
          </p>

          {/* OPSIONAL LIST */}
          {slide.list && (
            <div className="flex justify-center">
              <ul className="text-white/90 text-lg space-y-2 text-left">
                {slide.list.map((item, i) => (
                  <li key={i} className="flex gap-2">
                    <Check />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          )}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6">
            <button className="px-8 py-4 bg-white text-primary font-bold rounded-lg hover:bg-opacity-90 transition-all transform hover:scale-105">
              <Link href={slide.href}>{slide.cta}</Link>
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
