import { Banner } from "@/components/banner";

export default function TalentForm() {
  return (
    <main className="min-h-screen">
      <Banner title="Start Your Career Journey" />
      <section className="py-24 px-4">
        <div className="flex flex-col justify-center items-center">
          <p className="max-w-2xl text-lg text-center">
            Fill out this form to connect with mentors, job opportunities, and
            suitable career paths.
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
