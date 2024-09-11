'use client';
import React, { useEffect, useState } from 'react';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

function ComingSoon(): JSX.Element {
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

  return (
    <>
      <div className='container mx-auto mt-28'>
        <p className='mb-14 text-center text-[100px] font-bold italic'>Coming Soon</p>
        <div className='flex max-w-5xl items-center justify-center space-x-28 rounded-lg bg-gray-100 p-10 text-[100px] font-extrabold'>
          {/* Days */}
          <div className='flex flex-col items-center'>
            <span className='outline-text'>{timeLeft.days}</span>
            <span className='text-2xl'>Days</span>
          </div>

          {/* Hours */}
          <div className='flex flex-col items-center'>
            <span className='outline-text'>{timeLeft.hours}</span>
            <span className='text-2xl'>Hours</span>
          </div>

          {/* Minutes */}
          <div className='flex flex-col items-center'>
            <span className='outline-text'>{timeLeft.minutes}</span>
            <span className='text-2xl'>Minutes</span>
          </div>

          {/* Seconds */}
          <div className='flex flex-col items-center'>
            <span className='outline-text'>{timeLeft.seconds}</span>
            <span className='text-2xl'>Seconds</span>
          </div>
        </div>

        {/* last section */}
        <div className='mt-14'>
          <p className='text-5xl font-semibold italic'>Coming Soon to Shoe Paradise!</p>
          {/* subscribe now */}
          <div className='mt-10 flex w-full items-center gap-4'>
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
          </div>
          <p className='mt-5 text-gray-500'>
            Stay tuned for updates and be the first to explore our upcoming range of shoes designed
            to make a <br /> statement. Get ready to walk we have something for every shoe lover.
          </p>
        </div>
      </div>
    </>
  );
}

export default ComingSoon;
