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
            Maxwell x GOVOKASi was established to contribute to the intellectual
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
            <h3 className="text-2xl font-bold mb-4">
              About Maxwell Leadership
            </h3>
            <p className="leading-relaxed">
              Maxwell Leadership helps individuals and organizations grow as
              effective leaders. Based on the leadership principles of John C.
              Maxwell, Maxwell Leadership deliver practical and impactful
              leadership training tailored to the Indonesian context. Our
              mission is to develop leaders who lead with integrity, influence
              others positively, and create lasting impact. Through training
              programs, coaching, certifications, and events, we are committed
              to supporting the growth of strong leaders for Indonesia’s future.
            </p>
          </div>
        </div>

        {/* GOVOKASi SECTION */}
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="order-2 md:order-1">
            <h3 className="text-2xl font-bold mb-4">About GOVOKASi</h3>
            <p className="leading-relaxed">
              GOVOKASi is a career development platform that helps young talent
              prepare for the world of work. We provide training, mentorship,
              and internship programs that connect students and fresh graduates
              with companies across Indonesia. By bridging education and
              industry, GOVOKASi supports individuals in building their careers
              and helps organizations access ready-to-work talent.
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
