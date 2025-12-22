import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";

const testimonials = [
  {
    name: "Jonathan Farellius Chandra",
    position: "Social Media Officer",
    company: "Provaliant",
    logo: "PRV",
    quote:
      "Through mentorship and real corporate simulation, I landed my first corporate role faster than I imagined.",
    image: "/success-stories/jonathan.svg",
  },
  {
    name: "Sianne Tania",
    position: "Service Quality Staff",
    company: "PT Bank Central Asia",
    logo: "BCA",
    quote:
      "The leadership mindset I gained changed the direction of my life and career.",
    image: "/success-stories/sianne.svg",
  },
  {
    name: "Afsya Nabilla",
    position: "Business Development Representative",
    company: "Mekari Jurnal",
    logo: "MKR",
    quote:
      "The mentorship program accelerated my growth beyond what I thought possible.",
    image: "/success-stories/afsya.svg",
  },
  {
    name: "Intan Annur",
    position: "Content Creator",
    company: "Elshe Skin",
    logo: "ELS",
    quote:
      "Maxwell Leadership helped transform my confidence and sharpen my communication as a future leader.",
    image: "/success-stories/intan.svg",
  },
];

export function SuccessStories() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(1);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024)
        setItemsPerPage(2); // Show 2 cards as per image
      else setItemsPerPage(1);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const maxIndex = Math.max(0, testimonials.length - itemsPerPage);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  return (
    <section id="success-stories" className="py-24 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row mb-12 gap-x-24 gap-y-10">
          {/* Left Label */}
          <div className="min-w-[120px]">
            <h2 className="text-[14px] font-bold uppercase tracking-[0.2em] leading-tight text-foreground">
              Success <br />
              Stories
            </h2>
            <div className="mt-2 h-1 w-16 bg-gradient-to-r from-purple-700 via-purple-400 to-transparent rounded-full" />
          </div>

          <div className="w-full">
            {/* Header Title and Nav */}
            <div className="flex justify-between items-center gap-4">
              <h1 className="text-[30px] md:text-[36px] font-bold leading-tight">
                What Our Talents Are Saying
              </h1>

              <div className="flex gap-3">
                <button
                  onClick={handlePrev}
                  className="p-2 md:p-3 rounded-full border border-gray-300 hover:bg-gray-50 transition-colors"
                >
                  <ChevronLeft size={20} />
                </button>
                <button
                  onClick={handleNext}
                  className="p-2 md:p-3 rounded-full bg-black text-white hover:bg-black/80 transition-colors"
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
                {testimonials.map((item, index) => (
                  <div
                    key={index}
                    className="w-full lg:w-1/2 shrink-0 px-3 p-4"
                  >
                    {/* Testimonial Card */}
                    <div className="h-full border border-gray-200 rounded-[2rem] p-8 md:p-10 flex flex-col justify-between bg-white border border-border/30 hover:border-primary/50 shadow-sm transition-all">
                      {/* Italicized Quote */}
                      <p className="text-[17px] md:text-[18px] italic text-gray-700 leading-relaxed mb-10">
                        “{item.quote}”
                      </p>

                      {/* Footer: Image + Name + Position/Company */}
                      <div className="flex items-center gap-4">
                        <div className="w-16 h-16 shrink-0 rounded-xl overflow-hidden bg-gray-100">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="flex flex-col">
                          <h4 className="text-[18px] font-bold text-gray-900 leading-snug">
                            {item.name}
                          </h4>
                          <p className="text-[13px] text-gray-500 font-medium">
                            {item.position} at {item.company}
                          </p>
                        </div>
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
