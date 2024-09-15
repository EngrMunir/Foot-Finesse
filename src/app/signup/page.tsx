'use client';
import { signIn } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';
import React, { FormEvent } from 'react';
import { IoIosLock } from 'react-icons/io';
import { IoPersonCircleSharp } from 'react-icons/io5';
import { MdEmail } from 'react-icons/md';
import { TbShoe } from 'react-icons/tb';

const page = () => {
  const handleRegister = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    const form = e.currentTarget;
    const nameInput = form.elements.namedItem('name') as HTMLInputElement;
    const emailInput = form.elements.namedItem('email') as HTMLInputElement;
    const passwordInput = form.elements.namedItem('password') as HTMLInputElement;
    const name = nameInput.value;
    const email = emailInput.value;
    const password = passwordInput.value;
    const userData = {
      name,
      email,
      password,
    };
    const res = await fetch('http://localhost:3000/signup/api', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(userData),
    });
    const result = await res.json();
    console.log(result);
  };
  const handleSocialLogin = async (handler: string) => {
    const res = await signIn(handler);
    console.log(res);
  };
  return (
    <div className='flex h-screen flex-col md:flex-row'>
      <div className='relative flex-1'>
        <div className='relative h-[75%] w-full md:h-screen'>
          <Image
            src={'https://i.ibb.co.com/VJZvGn1/dbe7d1e0-4e42-4325-9d76-c38d558a3c06.jpg'}
            layout='fill'
            alt='shoe.png'
          />
        </div>
        <Link href={'login'}>
          <button className='absolute right-0 top-[35%] rounded-l-full px-8 py-4 text-2xl font-semibold text-white'>
            LOGIN
          </button>
        </Link>
        <Link href={'signup'}>
          <button className='absolute right-0 top-[50%] rounded-l-full animate-pulse bg-gray-400 px-5 py-4 text-2xl font-semibold text-blue-950'>
            SIGN UP
          </button>
        </Link>
      </div>
      <div className='mx-auto flex flex-1 flex-col items-center justify-center'>
        <div>
          <div className='text-3xl'>
            <Link href={'/'} className='flex items-center'>
              {' '}
              <TbShoe className='me-3 text-5xl animate-bounce' />
              <p className='font-medium'>
                <span className='font-light lg:text-slate-400'>FOOT</span>
                FINESSE
              </p>{' '}
            </Link>{' '}
          </div>
        </div>
        <form onSubmit={handleRegister} className='mt-12' action=''>
          <div className='mb-8 flex items-center gap-1 border-b-2 border-secondary pb-1 pr-12'>
            <IoPersonCircleSharp className='text-2xl text-gray-700' />
            <input
              type='text'
              name='name'
              placeholder='Your Name'
              required
              className='focus:border-none focus:bg-none focus:outline-none'
            />
          </div>
          <div className='mb-8 flex items-center gap-1 border-b-2 border-secondary pb-1 pr-12'>
            <MdEmail className='text-2xl text-gray-700' />
            <input
              type='email'
              name='email'
              placeholder='Email'
              required
              className='focus:border-none focus:outline-none'
            />
          </div>
          <div className='mb-8 flex items-center gap-1 border-b-2 border-secondary pb-1 pr-12'>
            <IoIosLock className='text-2xl text-gray-700' />
            <input
              name='password'
              type='password'
              placeholder='Password'
              required
              className='focus:border-none focus:outline-none'
            />
          </div>
          <div className='flex justify-end'>
            <input
              type='submit'
              className='rounded-full bg-primary px-6 py-1 text-sm text-white'
              value='SIGN UP'
            />
          </div>
        </form>
        <div className='divider text-xs font-medium text-secondary md:mx-36'>OR LOGIN WITH</div>
        <div className='flex items-center justify-between gap-2'>
          <button
            onClick={() => handleSocialLogin('google')}
            className='rounded-full bg-primary px-6 py-1 text-sm font-medium text-white'
          >
            Google
          </button>
          <button
            onClick={() => handleSocialLogin('facebook')}
            className='rounded-full bg-primary px-6 py-1 text-sm font-medium text-white'
          >
            Facebook
          </button>
        </div>
      </div>
    </div>
  );
};

export default page;
