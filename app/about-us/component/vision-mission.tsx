import Image from "next/image";

export default function VisionMissionSection() {
  return (
    <section id="vision-mission" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 relative">
          {/* Vertical Divider */}
          <div className="hidden md:block absolute left-1/2 top-0 h-full w-px bg-gray-300"></div>

          {/* Vision */}
          <div className="flex flex-col items-center text-center px-6">
            {/* PURPLE RECTANGLE */}
            <div className="bg-[#31006F] p-4 rounded-xl mb-6 flex items-center justify-center">
              <Image
                src="/photos/Innovation.png"
                alt="Vision Icon"
                width={40}
                height={40}
                className="invert brightness-0"
              />
            </div>

            <h3 className="text-2xl font-bold mb-4">Vision</h3>

            <p className="text-muted-foreground leading-relaxed max-w-sm">
              Menempatkan karir Lorem ipsum dolor sit amet, consectetur
              adipisicing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat.
            </p>
          </div>

          {/* Mission */}
          <div className="flex flex-col items-center text-center px-6">
            {/* PURPLE RECTANGLE */}
            <div className="bg-[#31006F] p-4 rounded-xl mb-6 flex items-center justify-center">
              <Image
                src="/photos/Goal.png"
                alt="Mission Icon"
                width={40}
                height={40}
                className="invert brightness-0"
              />
            </div>

            <h3 className="text-2xl font-bold mb-4">Mission</h3>

            <p className="text-muted-foreground leading-relaxed max-w-sm">
              Menempatkan karir Lorem ipsum dolor sit amet, consectetur
              adipisicing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
