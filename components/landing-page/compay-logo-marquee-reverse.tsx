import Marquee from "react-fast-marquee";
import Image from "next/image";

export default function CompanyMarqueeReverse() {
  const basePath = "/company-logo";
  const companyFiles = [
    "mursmedic.jpeg",
    "nph.jpeg",
    "Outsystems.png",
    "Petra Penida.png",
    "Provaliant.png",
    "Prudential.png",
    "PTWirataraPrima.png",
    "Sagensie.png",
  ];

  const companyLogos = companyFiles.map((file) => `${basePath}/${file}`);

  return (
    <section className="px-4">
      <div className="mx-auto max-w-7xl">
        <div className="w-full py-2">
          <Marquee gradient={true} speed={50} direction="right">
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
