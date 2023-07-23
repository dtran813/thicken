import { FieldErrors, FieldValues, UseFormRegister } from 'react-hook-form';
import Input from '../components/inputs/Input';

interface CheckoutFormProps {
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors;
  className?: string;
}

const CheckoutForm: React.FC<CheckoutFormProps> = ({
  register,
  errors,
  className,
}) => {
  return (
    <form className={`flex flex-col ${className}`}>
      <div className="flex flex-col">
        <p className="mb-2 mt-4 text-2xl font-bold">Customer Info</p>
        <Input
          id="email"
          label="Email"
          register={register}
          errors={errors}
          required
        />
      </div>

      <div className="flex flex-col">
        <p className="mb-2 mt-4 text-2xl font-bold">Shipping Address</p>
        <div className="flex flex-col sm:flex-row sm:gap-5">
          <Input
            id="firstName"
            label="First Name"
            register={register}
            errors={errors}
            required
          />
          <Input
            id="lastName"
            label="Last Name"
            register={register}
            errors={errors}
            required
          />
        </div>

        <Input
          id="address"
          label="Street Address"
          register={register}
          errors={errors}
          required
        />
        <Input
          id="apartment"
          label="Apartment/Suite #"
          register={register}
          errors={errors}
        />
        <Input
          id="city"
          label="City"
          register={register}
          errors={errors}
          required
        />

        <div className="flex flex-col sm:flex-row sm:gap-5">
          <Input
            id="state"
            label="State"
            register={register}
            errors={errors}
            required
          />
          <Input
            id="zipCode"
            label="Zip Code"
            register={register}
            errors={errors}
            required
          />
        </div>

        <Input
          type="tel"
          id="phone"
          label="Phone"
          register={register}
          errors={errors}
          required
        />
      </div>

      <div className="flex flex-col">
        <p className="mb-2 mt-4 text-2xl font-bold">Payment Info</p>
        <Input
          id="cardNumber"
          label="Credit Card Number"
          register={register}
          errors={errors}
          required
        />
        <div className="flex flex-col sm:flex-row sm:gap-5">
          <Input
            id="expDate"
            label="MM/YYYY"
            register={register}
            errors={errors}
            required
          />
          <Input
            id="cvv"
            label="CVC/CVV"
            register={register}
            errors={errors}
            required
          />
        </div>
      </div>
    </form>
  );
};

export default CheckoutForm;
