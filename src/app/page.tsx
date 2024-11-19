import ContactForm from "./components/contactForm";


export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center py-5">
      <h2 className="font-bold mb-4 text-xl text-blue-500">Contact Form</h2>
      <ContactForm />
    </div>
  );
}
