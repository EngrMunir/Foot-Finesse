'use client';
import axios from 'axios';
import { useSession } from 'next-auth/react';
import Image from 'next/image';
import { redirect } from 'next/navigation';
import React, { useEffect, useState } from 'react';

interface CustomUser {
  name?: string;
  phoneNumber?: string;
  zip?: string;
  street?: string;
  city?: string;
  country?: string;
  email?: string;
}

const page = () => {
  const session = useSession();
    const [fullName,setFullName]=useState<string>('')
    const [zip,setZip]=useState<string>('')
    const [city,setCity]=useState<string>('')
    const [country,setCountry]=useState<string>('')
    const [street,setStreet]=useState<string>('')
    const [phoneNumber,setPhoneNumber]=useState<string>('')
    const [email,setEmail]=useState<string>('')
    useEffect(() => {
      const user = session?.data?.user as CustomUser;
      if (user?.name) {
        setFullName(user.name);
        setPhoneNumber(user.phoneNumber || "");
        setZip(user.zip || '');
        setStreet(user.street || '');
        setCity(user.city || '');
        setCountry(user.country || '');
        setEmail(user.email || '');
      }
    }, [session]);
    const handleEditInfo =async(e:any)=>{
     e.preventDefault()
     const form = e.target
     const name = form.name.value
     const zip = form.zip.value
     const city = form.city.value
     const country = form.country.value
     const street = form.street.value
     const phoneNumber = form.phoneNumber.value
     const userData={name,zip,city,country,street,phoneNumber}
     console.log(userData)
     const res =await axios.post('http://localhost:3000/api/editProfile',userData)
     console.log(res.data)
    }
    const imageHostingKey = process.env.NEXT_PUBLIC_IMAGE_API
    const imageHostingApi =`https://api.imgbb.com/1/upload?key=${imageHostingKey}`
 
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
    if(res.data.success === true){
      console.log(res.data.data.image.url)
      const image= res.data.data.image.url
      const result = await axios.post('http://localhost:3000/api/editPhoto',{image})
      console.log(result.data)
      window.location.reload()
    }

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
     <div className="flex flex-col mx-auto mt-10 max-w-4xl md:flex-row gap-6">
     <div className=''>
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
      <form
            onSubmit={handleEditInfo}
            action=""
            className="flex-1"
          >
            <div className="form-control">
              <input
                type="text"
                placeholder="First and Last name"
                name="name"
                value={fullName}
                className="input input-bordered max-w-sm"
                onChange={(e) => setFullName(e.target.value)}
                required
              />
            </div>
            <div className="form-control">
              <input
                type="text"
                placeholder=""
                name="name"
                value={email}
                className="input input-bordered mt-2 bg-slate-300 max-w-sm"
                readOnly
                required
              />
            </div>
            <div className="form-control">
              <input
                type="text"
                placeholder="Your phone Number"
                name="phoneNumber"
                value={phoneNumber}
                className="input input-bordered mt-2 max-w-sm"
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
            </div>
            <div className="form-control">
              <input
                type="text"
                placeholder="Street"
                name="street"
                value={street}
                className="input input-bordered mt-2 max-w-sm"
                onChange={(e) => setStreet(e.target.value)}
              />
            </div>
            <div className="flex flex-col"> 
            <div className="form-control ">
              <input
                type="number"
                placeholder="zip"
                name="zip"
                value={zip}
                className="input input-bordered mt-2 max-w-sm"
                onChange={(e) => setZip(e.target.value)}
              />
            </div>
            <div className="form-control">
              <input
                type="text"
                placeholder="city"
                name="city"
                value={city}
                className="input input-bordered mt-2 max-w-sm"
                onChange={(e) => setCity(e.target.value)}
              />
            </div>
            </div>
            <div className="form-control">
              <input
                type="text"
                placeholder="country"
                name="country"
                value={country}
                className="input input-bordered mt-2 max-w-sm"
                onChange={(e) => setCountry(e.target.value)}
              />
            </div>
            <div className="form-control mt-2">
              <button className="btn bg-primary text-white max-w-sm">Save</button>
            </div>
          </form>
     </div>
    </div>
  );
};

export default page;