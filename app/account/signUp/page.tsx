'use client';

import Button from '@/app/components/Button';
import Input from '@/app/components/inputs/Input';
import axios from 'axios';
import Link from 'next/link';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { FiEye, FiEyeOff } from 'react-icons/fi';

const SignUp = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [displayPassword, setDisplayPassword] = useState(false);
  const [displayConfirmPassword, setDisplayConfirmPassword] = useState(false);
  const router = useRouter();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FieldValues>();

  const email = watch('email');
  const confirmEmail = watch('confirmEmail');

  const password = watch('password');
  const confirmPassword = watch('confirmPassword');

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    if (
      /([\d][a-z][A-Z][!@#$%^&*,.?])/.test(password) ||
      password.length < 8 ||
      password !== confirmPassword ||
      email !== confirmEmail
    ) {
      return;
    }

    setIsLoading(true);

    axios
      .post('/api/register', data)
      .then(() => {
        toast.success('New user created successfully!');
        router.push('/account/login');
      })
      .catch((error) => {
        toast.error(error.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <div className="relative bg-orange-200">
      <div className="mx-auto max-w-screen-xl pb-10">
        <div className="mx-auto flex max-w-md flex-col p-5">
          <h2 className="text-2xl font-bold uppercase">Create An Account</h2>
          <form
            className="mb-8 flex w-full flex-col items-stretch"
            onSubmit={(event) => {
              event.preventDefault();
            }}
          >
            <Input
              id="firstName"
              label="First Name"
              disabled={isLoading}
              register={register}
              errors={errors}
              required
            />
            <Input
              id="lastName"
              label="Last Name"
              disabled={isLoading}
              register={register}
              errors={errors}
              required
            />

            <Input
              id="email"
              label="Email"
              type="email"
              disabled={isLoading}
              register={register}
              errors={errors}
              required
            />
            <Input
              id="confirmEmail"
              label="Confirm Email"
              type="email"
              disabled={isLoading}
              register={register}
              errors={errors}
              required
            />
            {email !== confirmEmail && (
              <p className="text-sm">❌ Emails must be matched</p>
            )}

            <div className="relative">
              <Input
                id="password"
                label="Password"
                type={displayPassword ? 'text' : 'password'}
                disabled={isLoading}
                register={register}
                errors={errors}
                required
              />
              <button
                className="absolute right-5 top-9"
                onClick={() => setDisplayPassword(!displayPassword)}
              >
                {displayPassword ? <FiEye size={24} /> : <FiEyeOff size={24} />}
              </button>
            </div>

            <div className="relative">
              <Input
                id="confirmPassword"
                label="Confirm Password"
                type={displayConfirmPassword ? 'text' : 'password'}
                disabled={isLoading}
                register={register}
                errors={errors}
                required
              />
              <button
                className="absolute right-5 top-9"
                onClick={() =>
                  setDisplayConfirmPassword(!displayConfirmPassword)
                }
              >
                {displayConfirmPassword ? (
                  <FiEye size={24} />
                ) : (
                  <FiEyeOff size={24} />
                )}
              </button>
            </div>

            <div className="text-sm">
              <p>
                {/[a-zA-Z\d!@#$%^&*,.?]{8,}/.test(password || '') ? '✅' : '❌'}{' '}
                Minimum of 8 alphanumeric characters
              </p>
              <p>
                {/[A-Z]/.test(password || '') ? '✅' : '❌'} At least one
                uppercase letter
              </p>
              <p>
                {/[a-z]/.test(password || '') ? '✅' : '❌'} At least one
                lowercase letter
              </p>
              <p>
                {/\d/.test(password || '') ? '✅' : '❌'} At least one number
              </p>
              <p>
                {/[!@#$%^&*,.?]/.test(password || '') ? '✅' : '❌'} At least
                one special character: !, @, #, $, %, ^, &, *, ., ?
              </p>
              <p>
                {password === confirmPassword ? '✅' : '❌'} Passwords must be
                matched
              </p>
            </div>

            <Button
              className="mt-4 w-full bg-orange-400 px-8 py-4 text-lg font-medium text-white"
              onClick={handleSubmit(onSubmit)}
            >
              Sign Up
            </Button>
          </form>

          <div className="text-center font-semibold ">
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
