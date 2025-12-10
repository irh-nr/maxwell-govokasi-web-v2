import { Banner } from "@/components/banner";

export default function TalentForm() {
  return (
    <main className="min-h-screen">
      <Banner title="Start Your Partnership Journey" />
      <section className="py-24 px-4">
        <div className="flex flex-col justify-center items-center">
          <p className="max-w-2xl text-lg text-center">
            Fill out this form to collaborate with Maxwell x Govokasi and access
            ready-to-contribute talent.
          </p>
          <div className="w-5xl h-[1000px] bg-muted shadow-2xl mt-16 rounded-2xl flex items-center justify-center">
            {" "}
            Forms{" "}
          </div>
        </div>
      </section>
    </main>
  );
}
