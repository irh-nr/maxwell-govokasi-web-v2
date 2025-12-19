"use client";

import React, { useRef, useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";

type MetricItemType = {
  title: string;
  number: number;
};

const metricsCards: MetricItemType[] = [
  { title: "Talent Pools", number: 33000 },
  { title: "Company Partners", number: 300 },
  { title: "Major Cities", number: 10 },
  { title: "Industries", number: 10 },
  { title: "Active Leader", number: 60000 },
  { title: "Across Country", number: 160 },
  { title: "Leaders Trained", number: 5000000 },
];

export default function MetricsCard() {
  return (
    <div className="relative w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/photos/global-maps.png"
          alt="Background Map"
          fill
          className="object-cover opacity-50" // Adjusted opacity to ensure text is readable
          priority
        />
        {/* Dark overlay for readability if needed */}
        <div className="absolute inset-0 bg-background/40" />
      </div>

      <section id="about" className="relative z-10 py-24 px-4">
        <div className="max-w-7xl mx-auto">
          {/* 
              Flex-wrap with justify-center handles the "4 top, 3 bottom" logic.
              On large screens, each item takes ~22% (roughly 4 per row).
              The remaining 3 items will automatically center on the next row.
          */}
          <div className="flex flex-wrap justify-center gap-x-4 gap-y-12 md:gap-x-8">
            {metricsCards.map((card, idx) => (
              <div
                key={idx}
                className="w-full sm:w-[45%] lg:w-[22%] min-w-[200px]"
              >
                <MetricItem title={card.title} target={card.number} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

/* ------------------ Counter Item Component ------------------ */

type MetricItemProps = {
  title: string;
  target: number;
};

function MetricItem({ title, target }: MetricItemProps) {
  const [count, setCount] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated.current) {
          startCounting();
          hasAnimated.current = true;
        }
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, [target]);

  const startCounting = () => {
    let start = 0;
    const duration = 1500; // 1.5 seconds
    const startTime = performance.now();

    const animate = (now: number) => {
      const progress = Math.min((now - startTime) / duration, 1);
      // Use easeOutQuad for smoother finish
      const easeProgress = 1 - (1 - progress) * (1 - progress);
      const current = Math.floor(easeProgress * target);

      setCount(current);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  };

  const formatNumber = (val: number): string => {
    return val.toLocaleString("id-ID") + "+";
  };

  return (
    <div ref={containerRef} className="flex flex-col items-center text-center">
      <span className="text-primary text-4xl md:text-5xl font-extrabold tracking-tight mb-2">
        {formatNumber(count)}
      </span>
      <span className="text-sm md:text-base font-semibold uppercase tracking-widest text-muted-foreground">
        {title}
      </span>
    </div>
  );
}
