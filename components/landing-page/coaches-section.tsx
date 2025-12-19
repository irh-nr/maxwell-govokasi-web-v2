import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";

const coaches = [
  {
    name: "David Tjokrorahardjo",
    position: "President",
    image: "coaches/DT.jpg", // Replace with actual image paths
  },
  {
    name: "Merry Riana",
    position: "Maxwell Thought Leader",
    image: "coaches/MR.jpg",
  },
  {
    name: "Stephen Sebastian",
    position: "Maxwell Thought Leader",
    image: "coaches/ST.jpg",
  },
  {
    name: "Sarah Mitchell",
    position: "VP of Talent",
    image: "/professional-woman-tech.jpg",
  },
];

export function CoachesSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(1);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setItemsPerPage(3);
      else if (window.innerWidth >= 768) setItemsPerPage(2);
      else setItemsPerPage(1);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const maxIndex = Math.max(0, coaches.length - itemsPerPage);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  return (
    <section id="coaches" className="py-24 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row mb-12 gap-x-24 gap-y-10">
          {/* Title - starts at column 1 */}
          <div className="min-w-[120px]">
            <h2 className="text-[14px] font-bold uppercase tracking-[0.2em] leading-tight text-foreground">
              Our <br />
              Coaches
            </h2>
            <div className="mt-2 h-1 w-16 bg-gradient-to-r from-purple-700 via-purple-400 to-transparent rounded-full" />
          </div>

          <div className="w-full">
            <div className="flex justify-between items-center gap-2">
              {/* Subtitle - starts at column 4, spans to column 12 */}
              <div className="col-span-12 lg:col-span-9 lg:col-start-4 -mt-1">
                <h1 className="text-[30px] font-bold leading-tight text-balance">
                  Meet Our Elite Coaches
                </h1>
              </div>
              {/* Navigation Buttons Top Right */}
              <div className="flex gap-3">
                <button
                  onClick={handlePrev}
                  className="p-2 rounded-full border border-gray-300 hover:bg-gray-50 transition-colors"
                >
                  <ChevronLeft size={20} />
                </button>
                <button
                  onClick={handleNext}
                  className="p-2 rounded-full bg-black text-white hover:bg-black/80 transition-colors"
                >
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>

            {/* Carousel Container */}
            <div className="relative overflow-hidden mt-12">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{
                  transform: `translateX(-${
                    currentIndex * (100 / itemsPerPage)
                  }%)`,
                }}
              >
                {coaches.map((coach, index) => (
                  <div
                    key={index}
                    className="w-full md:w-1/2 lg:w-1/3 shrink-0 px-3"
                  >
                    {/* The Card */}
                    <div className="relative aspect-[1/1] rounded-[2rem] overflow-hidden group bg-gray-200">
                      {/* Image Background */}
                      <img
                        src={coach.image}
                        alt={coach.name}
                        className="absolute inset-0 w-full h-full object-cover"
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
