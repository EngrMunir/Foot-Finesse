'use client';
import toast from 'react-hot-toast';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import bgCover from "../../../public/assets/foot.png"

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const NewsLetter = () => {
  const getInitialTime = (): TimeLeft => {
    const totalSeconds = 30 * 24 * 60 * 60; // 30 days in seconds
    const days = Math.floor(totalSeconds / (24 * 60 * 60));
    const hours = Math.floor((totalSeconds % (24 * 60 * 60)) / (60 * 60));
    const minutes = Math.floor((totalSeconds % (60 * 60)) / 60);
    const seconds = totalSeconds % 60;

    return { days, hours, minutes, seconds };
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(getInitialTime());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        const totalSeconds =
          prevTime.days * 24 * 60 * 60 +
          prevTime.hours * 60 * 60 +
          prevTime.minutes * 60 +
          prevTime.seconds;

        if (totalSeconds <= 0) {
          clearInterval(timer); // Stop timer when it reaches zero
          return prevTime;
        }

        const newTotalSeconds = totalSeconds - 1;
        const days = Math.floor(newTotalSeconds / (24 * 60 * 60));
        const hours = Math.floor((newTotalSeconds % (24 * 60 * 60)) / (60 * 60));
        const minutes = Math.floor((newTotalSeconds % (60 * 60)) / 60);
        const seconds = newTotalSeconds % 60;

        return { days, hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleNews = (e: any) => {
    e.preventDefault();
    toast.success('You have subscribed to News!!');
  };
  return (
    <div>
      <div className='mb-24 grid items-center justify-center'>
        <div className=' '>
          {/* Inpute section */}
          <div className='bg-white p-6'>
            <div className='mx-auto max-w-screen-xl px-4 pb-8 pt-16 sm:px-6 lg:px-8 lg:pt-24'>
              <div className='text-center'>
                <h2 className='text-3xl font-extrabold text-gray-900 sm:text-5xl'>
                  Comeing Soor & Get <br />
                  Shoes News{' '}
                </h2>
              </div>
            </div>
            <div className='container mx-auto mt-10 rounded-lg bg-gray-100 p-8'>
              <div className='relative'>
                <div className='absolute blur-xl h-64 w-full bg-cover'>
                  <Image
                    src={bgCover}
                    alt={""}
                    layout='fill'
                    objectFit='cover'
                    className='w-full'
                  />
                </div>
                <div className='flex   max-w-5xl items-center justify-center space-x-28 rounded-lg border border-white p-10 text-[100px] font-extrabold'>
                  {/* Days */}
                  <div className='flex flex-col items-center'>
                    <span className='text-gray-900 z-20'>{timeLeft.days}</span>
                    <span className='text-2xl blur-0'>Days</span>
                  </div>

                  {/* Hours */}
                  <div className='flex flex-col items-center'>
                    <span className='text-gray-900 z-20'>{timeLeft.hours}</span>
                    <span className='text-2xl blur-0'>Hours</span>
                  </div>

                  {/* Minutes */}
                  <div className='flex flex-col items-center'>
                    <span className='text-gray-900 z-20'>{timeLeft.minutes}</span>
                    <span className='text-2xl blur-0'>Minutes</span>
                  </div>

                  {/* Seconds */}
                  <div className='flex flex-col items-center'>
                    <span className='text-gray-900 z-20'>{timeLeft.seconds}</span>
                    <span className='text-2xl blur-0'>Seconds</span>
                  </div>
                </div>
              </div>

              {/* last section */}
              <div className='mt-14'>
                <p className='text-5xl font-semibold italic'>Coming Soon to Shoe Paradise!</p>
                {/* subscribe now */}
                <form onSubmit={handleNews} className='mt-10 flex w-full items-center gap-4'>
                  <input
                    className='w-[30%] rounded-lg border-[2px] border-primary px-4 py-4 focus:outline-none'
                    placeholder='Your Email Address'
                    type='email'
                    name=''
                    id=''
                  />
                  <button className='rounded-lg bg-primary px-4 py-4 text-xl font-medium text-white'>
                    Subscribe Now
                  </button>
                </form>
                <p className='mt-5 text-gray-500'>
                  Stay tuned for updates and be the first to explore our upcoming range of shoes
                  designed to make a <br /> statement. Get ready to walk we have something for every
                  shoe lover.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
