'use client';

import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import Button from '../components/Button';
import CheckoutForm from './CheckoutForm';

const CheckoutClient = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit: SubmitHandler<FieldValues> = (data) => {};

  return (
    <div className="relative bg-orange-200">
      <div className="mx-auto mb-0 max-w-sm px-3 pb-5 sm:max-w-xl lg:max-w-3xl">
        <CheckoutForm register={register} errors={errors} />

        <Button
          className="mt-4 w-full bg-orange-400 px-8 py-4 text-lg font-medium text-white"
          onClick={handleSubmit(onSubmit)}
        >
          Pay Now
        </Button>
      </div>
    </div>
  );
};

export default CheckoutClient;
