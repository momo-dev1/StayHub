'use client';
import axios from 'axios';
import { useCallback, useState } from 'react';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { FcGoogle } from 'react-icons/fc';
import { FaGithub } from 'react-icons/fa';

import Input from '@/components/shared/inputs/Input';
import { toast } from 'react-hot-toast';

import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';

const Auth = () => {
  const [variant, setVariant] = useState('login');
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      name: '',
      email: '',
      password: '',
    },
  });

  const toggleVariant = useCallback(() => {
    setVariant((currentVariant) =>
      currentVariant === 'login' ? 'register' : 'login'
    );
  }, []);

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);
    if (variant === 'login') {
      signIn('credentials', {
        email: data.email,
        password: data.password,
        redirect: false,
      }).then((callback) => {
        setIsLoading(false);
        if (callback?.error) {
          toast.error(callback.error);
        } else if (callback?.ok) {
          toast.success('Logged in successfully!');
        }
      });
    } else {
      axios
        .post('/api/register', data)
        .then(() => {
          toast.success('Registered!');
        })
        .catch((error) => {
          toast.error(error);
        })
        .finally(() => {
          setIsLoading(false);
        });
    }
  };

  return (
    <div className='relative h-screen w-full bg-gradient-to-r from-teal-500 to-teal-100 bg-cover bg-fixed bg-center bg-no-repeat'>
      <div className=' flex h-full justify-center px-4 py-20'>
        <div className='mt-2 w-full self-center rounded-md border-2 bg-white/40 px-16 py-10 shadow-md backdrop-blur lg:w-2/5 lg:max-w-md'>
          <h2 className='mb-8 text-4xl font-semibold text-black'>
            {variant === 'login' ? 'Sign in' : 'Register'}
          </h2>
          <form className='flex flex-col gap-4'>
            {variant === 'register' && (
              <Input
                id='name'
                label='Username'
                disabled={isLoading}
                register={register}
                errors={errors}
                required
              />
            )}
            <Input
              id='email'
              label='Email'
              disabled={isLoading}
              register={register}
              errors={errors}
              required
            />
            <Input
              id='password'
              label='Password'
              type='password'
              disabled={isLoading}
              register={register}
              errors={errors}
              required
            />
          </form>
          <button
            onClick={handleSubmit(onSubmit)}
            className='mt-10 w-full rounded-md bg-teal-600 py-3 text-white transition hover:bg-teal-700'
          >
            {variant === 'login' ? 'Login' : 'Sign up'}
          </button>
          <div className='mt-8 flex flex-row items-center justify-center gap-4 md:flex-col'>
            <button
              onClick={() => signIn('google')}
              className='group h-12 w-full rounded-full border-2 border-white px-6 transition duration-300 hover:border-teal-600 focus:bg-teal-50 active:bg-teal-100'
            >
              <div className='relative flex items-center justify-center gap-4'>
                <div className='rounded-full bg-white p-0.5 md:absolute md:left-0'>
                  <FcGoogle size={32} />
                </div>
                <span className='hidden w-max text-sm font-semibold tracking-wide text-gray-700 transition duration-300 group-hover:text-teal-600 sm:text-base md:inline-block'>
                  Continue with Google
                </span>
              </div>
            </button>

            <button
              onClick={() => signIn('github')}
              className='group h-12 w-full rounded-full border-2 border-white px-6 text-xs transition duration-300 hover:border-teal-600 focus:bg-teal-50 active:bg-teal-100'
            >
              <div className='relative flex items-center justify-center gap-4'>
                <div className='rounded-full bg-black  p-0.5 md:absolute md:left-0 '>
                  <FaGithub size={32} />
                </div>
                <span className='hidden w-max text-sm font-semibold tracking-wide text-gray-700 transition duration-300 group-hover:text-teal-600 sm:text-base md:inline-block'>
                  Continue with GitHub
                </span>
              </div>
            </button>
          </div>
          <p className='mt-12 text-neutral-600'>
            {variant === 'login'
              ? 'First time using StayHub?'
              : 'Already have an account?'}
            <span
              onClick={toggleVariant}
              className='ml-1 cursor-pointer text-teal-600 hover:underline'
            >
              {variant === 'login' ? 'Create an account' : 'Login'}
            </span>
            .
          </p>
        </div>
      </div>
    </div>
  );
};

export default Auth;
