'use client';
import axios from 'axios';
import { useSession } from 'next-auth/react';
import Image from 'next/image';
import { redirect } from 'next/navigation';
import React from 'react';

const page = () => {
    const imageHostingKey = process.env.NEXT_PUBLIC_IMAGE_API
    const imageHostingApi =`https://api.imgbb.com/1/upload?key=${imageHostingKey}`
  const session = useSession();
  if (session?.status === 'unauthenticated') {
    redirect('/');
  }
  const handleImage =async(e:any)=>{
    const imageFile =e.target.files[0]
    const image = {image: imageFile}
    const res = await axios.post(imageHostingApi,image,{
      headers:{
        "content-type": "multipart/form-data"
      }
    })
    console.log(res.data)
  }
  return (
    <div className='container mx-auto'>
      <div className='relative rounded-3xl'>
        <Image
          className='rounded-3xl'
          src={'https://i.ibb.co.com/N3DtB5T/Untitled-design-4.png'}
          layout='responsive'
          width={1280}
          height={280}
          alt='Shoe'
        />
        <p className='absolute left-[15%] top-[38%] text-6xl font-bold text-white'>Profile</p>
      </div>
      <div className='mx-auto mt-10 max-w-4xl'>
          <div className='relative h-36 w-36'>
            {session?.data?.user?.image ? (
              <Image
                src={session?.data?.user?.image}
                className='relative'
                layout='fill'
                alt='Profile image'
              />
            ) : (
              <Image
                src='/default-profile.png'
                className='relative'
                layout='fill'
                alt='Default profile image'
              />
            )}
          </div>
          <button className='rounded-2xl border px-4 py-2 font-bold'>
            <label>
              <input type='file' name='' id='' className='hidden' onChange={handleImage} />
              <span>Change Image</span>
            </label>
          </button>
      </div>
    </div>
  );
};

export default page;
