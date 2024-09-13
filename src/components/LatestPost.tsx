import Image from 'next/image';
import React from 'react';
import { MdKeyboardArrowRight } from 'react-icons/md';
const LatestPost = () => {
  return (
    <div className='mx-auto max-w-7xl px-3'>
      <div className='flex flex-col justify-between md:flex-row'>
        <div className=''>
          <h2 className='mb-3 text-3xl font-medium lg:mb-6 lg:text-6xl'>Latest Post</h2>
          <p className='text-xl text-gray-500 lg:text-2xl'>
            Discover the most trending products in Foot Finesse.
          </p>
        </div>
        <div className=''>
          <button className='group btn relative mt-3 rounded-none border-black bg-white text-black hover:bg-transparent lg:mt-6'>
            <p className='z-10 text-xl duration-500 group-hover:text-white'>View all</p>
            <span className='absolute inset-0 w-0 bg-black duration-500 group-hover:w-full'></span>
          </button>
        </div>
      </div>
      <div className='mt-6 grid grid-cols-1 gap-6 md:grid-cols-8 lg:mt-12'>
        <div className='md:col-span-3'>
          <div className='relative h-[400px] w-[450/16rem] lg:h-[566px]'>
            <Image
              src={'https://i.ibb.co.com/YBFvhcv/pic1.jpg'}
              className='relative rounded-md'
              layout='fill'
              alt='blog.png'
            />
            <p className='absolute bottom-4 left-4 rounded-md bg-black p-1 text-sm uppercase text-white'>
              07 Sept 2024
            </p>
          </div>
          <div className=''>
            <h2 className='w-[450/16rem] text-center text-xl font-bold lg:text-2xl'>
              Trendsetter Chronicles: Unveiling <br /> the Latest in Fashion
            </h2>
            <p className='flex items-center justify-center text-center text-gray-500'>
              Read more <MdKeyboardArrowRight className='text-xl' />
            </p>
          </div>
        </div>
        <div className='md:col-span-5'>
          <div className='flex flex-col gap-4 rounded-3xl border bg-base-300 lg:flex-row'>
            <div className='relative h-72 w-full lg:w-80'>
              <Image
                src={'https://i.ibb.co.com/FVGGsQ4/pic2.jpg'}
                className='relative w-full rounded-tl-3xl rounded-tr-3xl lg:rounded-bl-3xl lg:rounded-tr-none'
                layout='fill'
                alt='blog.png'
              />
            </div>
            <div className='flex-between mt-3 flex flex-col px-2 lg:mt-6'>
              <div>
                <p className='w-24 rounded-md bg-black p-1 text-sm uppercase text-white'>
                  07 Sept 2024
                </p>
                <p className='text-xl font-bold lg:text-2xl'>
                  Dress to Impress: Elevate Your Everyday Style
                </p>
              </div>
              <div>
                <p className='my-5 flex items-center text-gray-500 lg:mt-32'>
                  Read more <MdKeyboardArrowRight className='text-xl' />{' '}
                </p>
              </div>
            </div>
          </div>
          <div className='mt-6 flex flex-col gap-4 rounded-3xl border bg-base-300 lg:flex-row'>
            <div className='relative h-72 w-full lg:w-80'>
              <Image
                src={'https://i.ibb.co.com/JytxtNY/pic3.jpg'}
                className='relative w-full rounded-tl-3xl rounded-tr-3xl lg:rounded-bl-3xl lg:rounded-tr-none'
                layout='fill'
                alt='blog.png'
              />
            </div>
            <div className='flex-between mt-3 flex flex-col px-2 lg:mt-6'>
              <div>
                <p className='w-24 rounded-md bg-black p-1 text-sm uppercase text-white'>
                  07 Sept 2024
                </p>
                <p className='text-xl font-bold lg:text-2xl'>
                  Dress to Impress: Elevate Your Everyday Style
                </p>
              </div>
              <div>
                <p className='my-5 flex items-center text-gray-500 lg:mt-32'>
                  Read more <MdKeyboardArrowRight className='text-xl' />{' '}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LatestPost;
