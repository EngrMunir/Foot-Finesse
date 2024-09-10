import Image from 'next/image';
import React from 'react';
import { MdKeyboardArrowRight } from 'react-icons/md';
const LatestPost = () => {
  return (
    <div className='mx-auto max-w-7xl'>
      <div className='flex flex-col justify-between md:flex-row'>
        <div className=''>
          <h2 className='mb-6 text-6xl font-medium'>Latest Post</h2>
          <p className='text text-2xl text-gray-500'>
            Discover the most trending products in Foot Finesse.
          </p>
        </div>
        <div className=''>
          <button className='group btn relative mt-6 rounded-none border-black bg-white text-black hover:bg-transparent'>
            <p className='z-10 text-xl duration-500 group-hover:text-white'>View all</p>
            <span className='absolute inset-0 w-0 bg-black duration-500 group-hover:w-full'></span>
          </button>
        </div>
      </div>
      <div className='mt-12 grid grid-cols-1 gap-6 md:grid-cols-8'>
        <div className='md:col-span-3'>
          <div className='relative h-[566px] w-[450/16rem]'>
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
            <h2 className='w-[450/16rem] text-center text-2xl font-bold'>
              Trendsetter Chronicles: Unveiling <br /> the Latest in Fashion
            </h2>
            <p className='flex items-center justify-center text-center text-gray-500'>
              Read more <MdKeyboardArrowRight className='text-xl' />
            </p>
          </div>
        </div>
        <div className='md:col-span-5'>
          <div className='flex border gap-4 bg-base-300 rounded-3xl'>
            <div className='relative h-72 w-[304px]'>
              <Image
                src={'https://i.ibb.co.com/JytxtNY/pic3.jpg'}
                className='relative rounded-tl-3xl rounded-bl-3xl'
                layout='fill'
                alt='blog.png'
              />
            </div>
            <div className='mt-6 flex flex-col flex-between '>
               <div>
               <p className='rounded-md bg-black p-1 text-sm uppercase w-24 text-white'>
                  07 Sept 2024
                </p>
                <p className='text-2xl font-bold'>Chic & Unique: Personalized Fashion Finds</p>
               </div>
                <div>
                <p className='flex items-center mt-32 text-gray-500'>
              Read more <MdKeyboardArrowRight className='text-xl' /> </p>
                </div>
                
              </div>
          </div>
          <div className='flex border mt-6 gap-4 bg-base-300 rounded-3xl'>
            <div className='relative h-72 w-80'>
              <Image
                src={'https://i.ibb.co.com/FVGGsQ4/pic2.jpg'}
                className='relative rounded-tl-3xl rounded-bl-3xl'
                layout='fill'
                alt='blog.png'
              />
            </div>
            <div className='mt-6 flex flex-col flex-between '>
               <div>
               <p className='rounded-md bg-black p-1 text-sm uppercase w-24 text-white'>
                  07 Sept 2024
                </p>
                <p className='text-2xl font-bold'>Dress to Impress: Elevate Your Everyday Style</p>
               </div>
                <div>
                <p className='flex items-center mt-32 text-gray-500'>
              Read more <MdKeyboardArrowRight className='text-xl' /> </p>
                </div>
                
              </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LatestPost;
