import Marquee from "react-fast-marquee";
import Image from "next/image";

export default function CompanyMarquee() {
  const basePath = "/company-logo";
  const companyFiles = [
    "dni.jpeg",
    "elshe.jpeg",
    "infia.jpeg",
    "mursmedic.jpeg",
    "nph.jpeg",
  ];

  const companyLogos = companyFiles.map((file) => `${basePath}/${file}`);

  return (
    <section className="py-12 px-4">
      <div className="mx-auto max-w-7xl">
        <div className="w-full py-8">
          <Marquee gradient={true} speed={50}>
            {companyLogos.map((logo, index) => (
              <div key={index} className="mx-8">
                <Image
                  src={logo}
                  alt={`company-${index}`}
                  width={150}
                  height={150}
                  className="object-contain"
                />
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  );
}
