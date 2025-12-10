export default function ContactForm() {
  return (
    <section className="py-24 px-4 bg-linear-to-b from-white to-muted">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-8">
          <div className="space-y-4">
            <h2 className="text-5xl font-bold">Get In Touch With Us</h2>
            <p className="max-w-xl">
              We’re here to help! Whatever you have a questions about our
              services, need assistance with your account, or want to provide
              feedback, our team is ready to assist you.
            </p>
            <ul className="space-y-4">
              <li>
                <p>Email:</p>
                <p className="font-semibold">maxwell-govokasi@gmail.com</p>
              </li>
              <li>
                <p>Phone:</p>
                <p className="font-semibold">+62-813-1665-3083</p>
                <p>Available Monday to Friday, 9 AM - 6 PM GMT</p>
              </li>
            </ul>
          </div>

          <div className="bg-white h-[650px] w-xl rounded-2xl flex justify-center items-center">
            Forms
          </div>
        </div>
      </div>
    </section>
  );
}
