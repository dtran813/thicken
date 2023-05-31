import ContactUsForm from './ContactUsForm';

const ContactUs = () => {
  return (
    <section
      id="contactUs"
      className="mt-20 border-t-2 border-dashed border-orange-600 pt-10"
    >
      <h2 className="mb-3 text-center text-6xl font-semibold">Contact Us</h2>

      <ContactUsForm />
    </section>
  );
};

export default ContactUs;
