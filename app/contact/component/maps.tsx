import { MapPin } from "lucide-react";

export default function Maps() {
  return (
    <section className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-8">
          <div className=" flex justify-center items-center rounded-2xl overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1983.125937948489!2d106.8202523052007!3d-6.230488555412214!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f3004157d5ed%3A0x1cf138234dbe7e94!2sCentennial%20Tower!5e0!3m2!1sen!2sid!4v1765340622368!5m2!1sen!2sid"
              width="600"
              height="600"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className="space-y-4 max-w-xl">
            <h2 className="text-5xl font-bold">Let’s Meet at Our Office!</h2>
            <p className="max-w-xl">
              We’re here to help! Whatever you have a questions about our
              services, need assistance with your account, or want to provide
              feedback, our team is ready to assist you.
            </p>
            <div className="flex gap-2 items-center">
              <MapPin size={40} />
              <p className="font-semibold">
                Centennial Tower, Kuningan, Karet Semanggi, Setiabudi, South
                Jakarta City
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
