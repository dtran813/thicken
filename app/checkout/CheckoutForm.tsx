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
      <p>Shipping Address</p>
      <div className="flex flex-col">
        <div className="flex flex-col sm:flex-row sm:gap-5">
          <Input
            id="firstName"
            label="First Name *"
            register={register}
            errors={errors}
          />
          <Input
            id="lastName"
            label="Last Name *"
            register={register}
            errors={errors}
          />
        </div>

        <Input
          id="address"
          label="Street Address *"
          register={register}
          errors={errors}
        />
        <Input
          id="apartment"
          label="Apartment/Suite #"
          register={register}
          errors={errors}
        />
        <Input id="city" label="City *" register={register} errors={errors} />

        <div className="flex flex-col sm:flex-row sm:gap-5">
          <Input
            id="state"
            label="State *"
            register={register}
            errors={errors}
          />
          <Input
            id="zipCode"
            label="Zip Code *"
            register={register}
            errors={errors}
          />
        </div>

        <Input id="phone" label="Phone *" register={register} errors={errors} />
      </div>

      <p>Payment Info</p>
      <div className="flex flex-col">
        <Input
          id="cardNumber"
          label="Credit Card Number"
          register={register}
          errors={errors}
        />
        <div className="flex flex-col sm:flex-row sm:gap-5">
          <Input
            id="expDate"
            label="MM/YY"
            register={register}
            errors={errors}
          />
          <Input id="cvv" label="CVC/CVV" register={register} errors={errors} />
        </div>
      </div>
    </form>
  );
};

export default CheckoutForm;
