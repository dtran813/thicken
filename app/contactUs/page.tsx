import SocialLinks from '../components/SocialLinks';
import ContactUsForm from './ContactUsForm';

const ContactUsPage = () => {
  return (
    <section
      id="contactUs"
      className="mt-20 border-t-2 border-dashed border-orange-600 pt-10"
    >
      <h2 className="mb-3 text-center text-6xl font-semibold">Contact Us</h2>

      <div className="mt-6 flex justify-center">
        <SocialLinks />
      </div>

      <ContactUsForm />
    </section>
  );
};

export default ContactUsPage;
