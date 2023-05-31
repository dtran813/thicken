import Input from '../Input';

const ContactUsForm = () => {
  return (
    <div className="flex justify-center p-5">
      <form className="flex w-full max-w-4xl flex-col items-stretch">
        <Input id="fullName" label="Full Name" required />

        <Input id="email" label="Email Address" required />

        <Input id="message" label="Message" required isTextarea />

        <button>Submit</button>
      </form>
    </div>
  );
};

export default ContactUsForm;
