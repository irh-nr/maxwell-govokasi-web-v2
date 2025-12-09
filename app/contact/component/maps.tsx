import { MapPin } from "lucide-react";

export default function Maps() {
  return (
    <section className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-8">
          <div className="h-[600px] w-[600px] bg-muted flex justify-center items-center rounded-2xl">
            Maps
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
