import { Banner } from "../../components/banner";
import ContactForm from "./component/contact-form";
import Maps from "./component/maps";

export default function Contact() {
  return (
    <main className="min-h-screen bg-background">
      <Banner title="Contact Us" />
      <ContactForm />
      <Maps />
    </main>
  );
}
