import Link from "next/link";
export function CtaBanner() {
  return (
    <section
      id="cta"
      className="py-24 px-4 bg-linear-to-r from-primary via-primary/80 to-secondary"
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
          Ready to Hire Better Talent, Faster?
        </h2>
        <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-2xl mx-auto">
          Partner with Maxwell x Govokasi and transform your recruitment process
          today.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="px-10 py-4 border-2 border-white text-white font-bold rounded-lg hover:bg-white/10 transition-all">
            <Link href={"/form/companies"}>Get In Touch With Us</Link>
          </button>
        </div>
      </div>
    </section>
  );
}
