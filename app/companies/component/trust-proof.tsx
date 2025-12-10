import Marquee from "react-fast-marquee";

export default function TrustProof() {
  const companies = [
    "Pertamina",
    "Indosat",
    "BNI",
    "BCA",
    "FWD",
    "AIA",
    "Prudential",
  ];
  return (
    <section className="py-24 px-4">
      <div className="mx-auto max-w-6xl">
        <div className="flex justify-end">
          <div className="mb-6 text-end">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Trusted by Leading Companies Partners
            </h2>
          </div>
        </div>
        <div className="w-full py-8">
          <Marquee gradient={true} speed={50}>
            {companies.map((company, index) => (
              <div
                key={index}
                className="mx-5 w-32 h-32 bg-gray-100 rounded-lg flex items-center justify-center shadow-sm hover:shadow-md transition-shadow"
              >
                <span className="text-gray-700 font-semibold text-center px-4">
                  {company}
                </span>
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  );
}
