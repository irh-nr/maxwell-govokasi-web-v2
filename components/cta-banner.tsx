export function CtaBanner() {
  return (
    <section
      id="cta"
      className="py-20 px-4 bg-linear-to-r from-primary via-primary/80 to-secondary"
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
          Start Your Corporate Future Today
        </h2>
        <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-2xl mx-auto">
          Transform your potential into real opportunity with Maxwell x Govokasi
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="px-10 py-4 bg-white text-primary font-bold rounded-lg hover:bg-opacity-90 transition-all transform hover:scale-105">
            Apply Now
          </button>
          <button className="px-10 py-4 border-2 border-white text-white font-bold rounded-lg hover:bg-white/10 transition-all">
            Schedule Demo
          </button>
        </div>
      </div>
    </section>
  );
}
