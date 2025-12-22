import Image from "next/image";

export default function CollabSection() {
  return (
    <section id="collab-section" className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        {/* TITLE */}
        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
          Maxwell x GOVOKASi collaboration
        </h2>

        {/* DESCRIPTION */}
        <p className="leading-relaxed mb-12">
          <b>
            {" "}
            Indonesia Maxwell Leadership Indonesia has officially acquired
            GOVOKASi Indonesia
          </b>
          , with strategic support from MD Co, to build an integrated leadership
          pipeline for Indonesia—from campus to corporate. This collaboration
          brings together experiential young talent development, the global
          leadership ecosystem of Maxwell Leadership, and a shared mission to
          develop transformational Indonesian leaders. More than an expansion,
          this acquisition represents a commitment to creating broader national
          impact by strengthening leadership development across every stage of
          the talent journey.
        </p>

        {/* IMAGE */}
        <div className="w-full h-72 md:h-full rounded-2xl overflow-hidden shadow-lg">
          <Image
            src="/photos/collab-banner.jpeg"
            alt="Maxwell x Govokasi collaboration"
            width={1400}
            height={900}
            className="object-cover w-full h-full"
          />
        </div>
      </div>
    </section>
  );
}
