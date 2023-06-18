import Button from '../components/Button';
import Input from '../components/Input';

const ContactUsForm = () => {
  return (
    <div className="flex justify-center p-5">
      <form className="flex w-full max-w-4xl flex-col items-stretch">
        <Input id="fullName" label="Full Name" required />

        <Input id="email" label="Email Address" required />

        <Input id="message" label="Message" required isTextarea />

        <Button className="mt-4 bg-orange-400 px-8 py-4 text-lg font-medium text-white/90">
          Submit
        </Button>
      </form>
    </div>
  );
};

export default ContactUsForm;
