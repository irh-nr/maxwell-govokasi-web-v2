"use client";

import React, { useRef } from "react";

type MetricItemType = {
  title: string;
  number: number;
};

const metricsCards: MetricItemType[] = [
  { title: "Talent Pools", number: 33000 },
  { title: "Company Partners", number: 300 },
  { title: "Major Cities", number: 10 },
  { title: "Industries", number: 10 },
];

export default function MetricsCard() {
  return (
    <section id="about" className="py-24 px-4 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {metricsCards.map((card, idx) => (
            <MetricItem key={idx} title={card.title} target={card.number} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------ Counter Item Component ------------------ */

type MetricItemProps = {
  title: string;
  target: number;
};

function MetricItem({ title, target }: MetricItemProps) {
  const numberRef = useRef<HTMLSpanElement | null>(null);
  const hasAnimated = useRef(false);

  function handleRef(el: HTMLSpanElement | null) {
    if (!el || hasAnimated.current) return;

    numberRef.current = el;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          startCounting(target);
          hasAnimated.current = true;
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );

    observer.observe(el);
  }

  function startCounting(maxValue: number) {
    let start = 0;
    const duration = 1200;
    const startTime = performance.now();

    const format = (val: number): string => {
      if (maxValue > 1000) return val.toLocaleString("id-ID") + "+";
      return val + "+";
    };

    function animate(now: number) {
      const progress = Math.min((now - startTime) / duration, 1);
      const current = Math.floor(progress * maxValue);

      if (numberRef.current) {
        numberRef.current.textContent = format(current);
      }

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    }

    requestAnimationFrame(animate);
  }

  return (
    <div className="group p-2 py-8 bg-primary rounded-[20px] border border-border/30 hover:border-white/50 shadow-sm transition-all card-depth-v2 text-center grid">
      <span
        ref={handleRef}
        className="text-white text-3xl font-bold leading-relaxed"
      >
        0+
      </span>

      <span className="text-xl text-white">{title}</span>
    </div>
  );
}
