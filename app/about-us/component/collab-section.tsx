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
        <p className="text-muted-foreground leading-relaxed mb-12">
          Penjelasan mengenai Maxwell dan GOVOKASi kenapa bisa collab. Lorem ipsum 
          dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo 
          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse 
          cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat 
          non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>

        {/* IMAGE */}
        <div className="w-full h-72 md:h-96 rounded-2xl overflow-hidden shadow-lg">
          <Image
            src="/photos/Maxwell-GOVOKASi.jpg"
            alt="Maxwell x Govokasi collaboration"
            width={1600}
            height={900}
            className="object-cover w-full h-full"
          />
        </div>

      </div>
    </section>
  );
}
