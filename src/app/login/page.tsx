'use client';
import Image from 'next/image';
import React from 'react';
import { IoIosLock } from 'react-icons/io';
import { MdEmail } from 'react-icons/md';
import Link from 'next/link';
import { signIn, useSession } from 'next-auth/react';
import { TbShoe } from 'react-icons/tb';
import { redirect, useRouter } from 'next/navigation';
import toast from 'react-hot-toast';
const page = () => {
    const router = useRouter()
    const session = useSession()
  const handleSignIn = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const email = form.email.value;
    const password = form.password.value;
    const res = await signIn('credentials', {
      email,
      password,
      redirect: false,
    });
    //console.log(res);
    if(res?.status===200){
        router.push('/')
        toast.success('you have successfully logged in!')
    }
    else{
        toast.error('Something Went Wrong!!!')
    }
  };
  const handleSocialLogin = async (handler: string) => {
    try {
      const res = await signIn(handler,{
        callbackUrl: '/', 
      });
    if(res?.ok){
        router.push('/')
        toast.success('you have successfully logged in!')
    }
    } catch (error) {
      console.log(error)
    }
    
  };
  return (
    <div className='flex h-screen flex-col md:flex-row'>
      <div className='relative flex-1'>
        <div className='h-screen w-full'>
          <Image
            src={'https://i.ibb.co.com/VJZvGn1/dbe7d1e0-4e42-4325-9d76-c38d558a3c06.jpg'}
            layout='fill'
            alt='shoe.png'
          />
        </div>
        <Link href={'login'}>
          <button className='absolute right-0 top-[35%] rounded-l-full animate-pulse bg-gray-400 px-8 py-4 text-2xl font-semibold text-blue-950'>
            LOGIN
          </button>
        </Link>
        <Link href={'signup'}>
          <button className='absolute right-0 top-2/4 rounded-l-full px-5 py-4 text-2xl font-semibold text-white'>
            SIGN UP
          </button>
        </Link>
      </div>
      <div className='mx-auto flex flex-1 flex-col items-center justify-center'>
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
        <form onSubmit={handleSignIn} className='mt-12' action=''>
          <div className='mb-8 flex items-center gap-1 border-b-2 border-secondary pb-1 pr-12'>
            <MdEmail className='text-2xl text-gray-700' />
            <input
              type='email'
              name='email'
              placeholder='Email'
              required
              className='focus:border-none focus:bg-none focus:outline-none'
            />
          </div>
          <div className='mb-8 flex items-center gap-1 border-b-2 border-secondary pb-1 pr-12'>
            <IoIosLock className='text-2xl text-gray-700' />
            <input
              type='password'
              name='password'
              placeholder='Password'
              required
              className='focus:border-none focus:outline-none'
            />
          </div>
          <div className='flex justify-end'>
            <input
              type='submit'
              className='rounded-full bg-primary px-6 py-1 text-sm text-white'
              value='LOGIN'
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
