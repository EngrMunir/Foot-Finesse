import Image from 'next/image';
import React from 'react';

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
      <div className='grid grid-cols-8 mt-12 '>
        <div className='col-span-3'>
          <div className='relative h-[566px] w-96'>
            <Image
              src={'https://i.ibb.co.com/YBFvhcv/pic1.jpg'}
              className='relative'
              layout='fill'
              alt='blog.png'
            />
          </div>
          <div className=''>
            <h2 className='font-bold text-xl w-96 text-center '>Trendsetter Chronicles: Unveiling <br /> the Latest in Fashion</h2>
            <p></p>
          </div>
        </div>
        <div className='col-span-5'>
            <div>
                
            </div>
        </div>
      </div>
    </div>
  );
};

export default LatestPost;
