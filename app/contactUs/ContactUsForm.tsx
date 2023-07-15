'use client';

import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import Button from '../components/Button';
import Input from '../components/inputs/Input';

const ContactUsForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>();

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    console.log({ data });
  };

  return (
    <div className="flex justify-center p-5">
      <form
        className="flex w-full max-w-4xl flex-col items-stretch"
        onSubmit={handleSubmit(onSubmit)}
      >
        <Input
          id="fullName"
          label="Full Name"
          register={register}
          errors={errors}
          required
        />

        <Input
          id="email"
          label="Email Address"
          type="email"
          register={register}
          errors={errors}
          required
        />

        <Input
          id="message"
          label="Message"
          register={register}
          errors={errors}
          required
          isTextarea
        />

        <Button className="mt-4 bg-orange-400 px-8 py-4 text-lg font-medium text-white/90">
          Submit
        </Button>
      </form>
    </div>
  );
};

export default ContactUsForm;
