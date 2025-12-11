"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import Link from "next/link";

const heroSlides = [
  {
    headline: "Competence Changes Everything",
    highlight: {
      word: "Competence",
      className: "text-brand-accent",
    },
    subheadline: "We don’t train skills. We build competence.",
    paragraph:
      "Through real work, real coaching, and real accountability. We turn raw potential into industry-ready performers.",
    boldWords: ["Competence", "industry-ready performers."],
    backgroundClass:
      "bg-gradient-to-br from-primary via-primary/80 to-secondary",
    href: "/#cta",
    cta: "Join Us Now",
    photos: "/photos/main-hero-3.jpeg",
  },
  {
    headline: "Leaders Create Leaders",
    highlight: {
      word: "Leaders",
      className: "text-brand-accent",
    },
    subheadline: "We deliver talent trained to lead with real competence",
    boldWords: ["Competence"],
    backgroundClass:
      "bg-gradient-to-br from-primary via-primary/80 to-secondary",
    href: "/companies",
    cta: "Find Top Talent",
    photos: "/photos/main-hero-2.jpeg",
  },
  {
    headline: "Accelerate Growth Through Mentorship & Placement",
    highlight: {
      word: "Accelerate Growth",
      className: "text-brand-accent",
    },
    subheadline: "Real projects, real coaching, real opportunities await",
    backgroundClass:
      "bg-gradient-to-t from-secondary via-primary/70 to-primary",
    href: "/talent",
    cta: "Explore Programs",
    photos: "/photos/25060.jpg",
  },
];

{
  /*{ unused slide
    headline: "Empowering Talent, Empowering Companies",
    subheadline: "Together we create meaningful career transformations",
    backgroundClass:
      "bg-gradient-to-br from-secondary/85 via-primary to-secondary",
    href: "/#cta",
    cta: "Get Started",
    photos: "/photos/13391.jpg",
  }*/
}

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
            {boldWords(slide.subheadline, slide.boldWords ?? [])}
          </p>
          <p className="text-lg md:text-xl text-white/85 mt-4 max-w-4xl mx-auto leading-tight">
            {boldWords(slide.paragraph ?? "", slide.boldWords ?? [])}
          </p>

          {/* OPSIONAL LIST */}
          {/*{slide.list && (
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
          )}*/}
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

function boldWords(text: string, words: string[]) {
  if (!text || !words?.length) return text;

  let result: React.ReactNode[] = [text];

  words.forEach((word) => {
    result = result.flatMap((segment) => {
      if (typeof segment !== "string") return segment;

      const parts = segment.split(new RegExp(`(${word})`, "gi"));

      return parts.map((p, i) =>
        p.toLowerCase() === word.toLowerCase() ? (
          <strong key={i} className="font-bold">
            {p}
          </strong>
        ) : (
          p
        )
      );
    });
  });

  return result;
}
