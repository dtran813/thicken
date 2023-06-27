'use client';

import Button from '@/app/components/Button';
import Input from '@/app/components/inputs/Input';
import { signIn } from 'next-auth/react';
import Link from 'next/link';
import { FcGoogle } from 'react-icons/fc';
import { IoLogoFacebook } from 'react-icons/io';

const Login = () => {
  return (
    <div className="relative bg-orange-200">
      <div className="mx-auto max-w-screen-xl pb-10">
        <div className="mx-auto flex max-w-md flex-col p-5">
          <h2 className="text-2xl font-bold uppercase">Log In</h2>
          <form className="mb-8 flex w-full flex-col items-stretch">
            <Input id="email" label="Email" required />

            <Input id="password" label="Password" type="password" required />

            <Button className="mt-4 w-full bg-orange-400 px-8 py-4 text-lg font-medium text-white">
              Log In
            </Button>
          </form>
          <hr className="border-gray-500" />
          <Button
            className="relative mt-4 w-full border-2 border-black bg-white px-8 py-4 text-lg font-medium text-black"
            onClick={() => signIn('google')}
          >
            <FcGoogle size={24} className="absolute left-4" />
            Continue with Google
          </Button>
          <Button
            className="relative mt-4 w-full border-2 border-black bg-white px-8 py-4 text-lg font-medium text-black"
            onClick={() => signIn('facebook')}
          >
            <IoLogoFacebook
              size={24}
              color="#1b74e4"
              className="absolute left-4"
            />
            Continue with Facebook
          </Button>

          <div className="mt-4 text-center font-semibold ">
            <div className="flex flex-row items-center justify-center gap-2">
              <p>Don&apos;t have an account?</p>
              <Link
                href="/account/signUp"
                className="cursor-pointer text-black underline"
              >
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
