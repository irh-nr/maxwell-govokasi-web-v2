import Marquee from "react-fast-marquee";
import Image from "next/image";

export default function CompanyMarqueeT() {
  const basePath = "/company-logo";
  const companyFiles = [
    "AHA.png",
    "AkuPintar.png",
    "AlcorPrime.png",
    "Binus.png",
    "dni.jpeg",
    "elshe.jpeg",
    "Goodworks.png",
    "UPH.png",
  ];

  const companyLogos = companyFiles.map((file) => `${basePath}/${file}`);

  return (
    <section className="py-2 px-4 mt-12">
      <div className="mx-auto max-w-7xl">
        <div className="w-full py-2">
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
