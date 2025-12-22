"use client";

import { useState } from "react";

const coaches = [
  {
    name: "David Tjokrorahardjo",
    position: "Business Leadership Coach",
    image: "coaches/DT.jpg",
  },
  {
    name: "Merry Riana",
    position: "MD Principal Advisor",
    image: "coaches/MR.jpg",
  },
  {
    name: "Stephen Sebastian",
    position: "CEO x Founder of GOVOKASi",
    image: "coaches/SS.jpg",
  },
  {
    name: "Anjelica Reisa",
    position: "COO x Co-Founder of GOVOKASi",
    image: "coaches/AR.jpeg",
  },
  {
    name: "Sony Tan",
    position: "HR Director",
    image: "coaches/ST.jpeg",
  },
  {
    name: "Lisa Sanusi",
    position: "Founder of GOVOKASi",
    image: "coaches/LS.jpeg",
  },
  {
    name: "Ary M. Wibowo",
    position: "Leadership Coach",
    image: "coaches/AW.jpeg",
  },
];

export function CoachesSection() {
  // Show 3 coaches initially
  const [visibleCount, setVisibleCount] = useState(9);

  const showMore = () => {
    setVisibleCount((prev) => prev + 3);
  };

  return (
    <section id="coaches" className="py-24 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row mb-12 gap-x-24 gap-y-10">
          {/* Title Side */}
          <div className="min-w-[120px]">
            <h2 className="text-[14px] font-bold uppercase tracking-[0.2em] leading-tight text-foreground">
              Our <br />
              Coaches
            </h2>
            <div className="mt-2 h-1 w-16 bg-gradient-to-r from-purple-700 via-purple-400 to-transparent rounded-full" />
          </div>

          <div className="w-full">
            <div className="flex justify-between items-center mb-12">
              <h1 className="text-[30px] font-bold leading-tight text-balance">
                Meet Our Elite Coaches
              </h1>
            </div>

            {/* Coaches Grid List */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {coaches.slice(0, visibleCount).map((coach, index) => (
                <div key={index} className="w-full">
                  {/* The Card - EXACTLY as provided */}
                  <div className="relative aspect-[1/1] rounded-[2rem] overflow-hidden group bg-gray-200 hover:scale-95 transition-all duration-300">
                    {/* Image Background */}
                    <img
                      src={coach.image}
                      alt={coach.name}
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-all duration-300"
                    />

                    {/* Subtle Gradient for text readability */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                    {/* Text Overlay */}
                    <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                      <h3 className="text-xl font-bold mb-2 leading-tight">
                        {coach.name}
                      </h3>

                      {/* The Separator Line */}
                      <div className="w-full h-[1px] bg-white/40 mb-3" />

                      <p className="text-sm font-medium opacity-90">
                        {coach.position}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* See More Button */}
            {visibleCount < coaches.length && (
              <div className="mt-12 flex justify-center">
                <button
                  onClick={showMore}
                  className="px-8 py-3 bg-black text-white rounded-full font-bold hover:bg-black/80 transition-colors"
                >
                  See More
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
