import Image from "next/image";

export default function MainSection() {
  return (
    <section id="main-section" className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Background Maxwell x GOVOKASi
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Maxwell x Govokasi was established to contribute to the intellectual
            advancement of the nation by:
          </p>
        </div>
        {/* MAXWELL SECTION */}
        <div className="grid md:grid-cols-2 gap-10 mb-20 items-center">
          <div>
            <div className="w-full h-72 rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/photos/Crew-Maxwell.jpg"
                alt="Maxwell"
                width={1200}
                height={800}
                className="object-cover w-full h-full"
              />
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-4">Maxwell</h3>
            <p className="text-muted-foreground leading-relaxed">
              Penjelasan company profile terkait Maxwell. Lorem ipsum dolor sit
              amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim
              veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
              ex ea commodo consequat.
            </p>
          </div>
        </div>

        {/* GOVOKASi SECTION */}
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="order-2 md:order-1">
            <h3 className="text-2xl font-bold mb-4">GOVOKASi</h3>
            <p className="text-muted-foreground leading-relaxed">
              Penjelasan company profile terkait Govokasi. Lorem ipsum dolor sit
              amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim
              veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
              ex ea commodo consequat.
            </p>
          </div>

          <div className="order-1 md:order-2">
            <div className="w-full h-72 rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/photos/Crew-GOVOKASi.JPG"
                alt="Govokasi"
                width={1200}
                height={800}
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
