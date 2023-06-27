import Button from '@/app/components/Button';
import Input from '@/app/components/inputs/Input';
import Link from 'next/link';
import { FcGoogle } from 'react-icons/fc';
import { IoLogoFacebook } from 'react-icons/io';

const SignUp = () => {
  return (
    <div className="relative bg-orange-200">
      <div className="mx-auto max-w-screen-xl pb-10">
        <div className="mx-auto flex max-w-md flex-col p-5">
          <h2 className="text-2xl font-bold uppercase">Create An Account</h2>
          <form className="mb-8 flex w-full flex-col items-stretch">
            <Input id="firstName" label="First Name" required />
            <Input id="lastName" label="Last Name" required />

            <Input id="email" label="Email" type="email" required />
            <Input
              id="confirmEmail"
              label="Confirm Email"
              type="email"
              required
            />

            <div>
              <Input id="password" label="Password" type="password" required />
              <p className="text-sm">
                Password must be a minimum of 8 alphanumeric characters, at
                least one uppercase letter, at least one lowercase letter, at
                least one number, at least one special character.
              </p>
            </div>

            <Input
              id="confirmPassword"
              label="Confirm Password"
              type="password"
              required
            />

            <Button className="mt-4 w-full bg-orange-400 px-8 py-4 text-lg font-medium text-white">
              Sign Up
            </Button>
          </form>
          <hr className="border-gray-500" />
          <Button className="relative mt-4 w-full border-2 border-black bg-white px-8 py-4 text-lg font-medium text-black">
            <FcGoogle size={24} className="absolute left-4" />
            Sign up with Google
          </Button>
          <Button className="relative mt-4 w-full border-2 border-black bg-white px-8 py-4 text-lg font-medium text-black">
            <IoLogoFacebook
              size={24}
              color="#1b74e4"
              className="absolute left-4"
            />
            Sign up with Facebook
          </Button>

          <div className="mt-4 text-center font-semibold ">
            <div className="flex flex-row items-center justify-center gap-2">
              <p>Already have an account?</p>
              <Link
                href="/account/login"
                className="cursor-pointer text-black underline"
              >
                Log In
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
