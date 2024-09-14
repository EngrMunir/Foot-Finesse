"use client"
import Image from 'next/image';
import React from 'react';
import { IoIosLock } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import Link from 'next/link';
import { signIn } from 'next-auth/react';
const page = () => {

    const handleSignIn=async(e:React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault()
        const form = e.currentTarget
        const email =form.email.value
        const password =form.password.value
        const res =await signIn("credentials",{
            email,
            password,
            redirect:false
        })
        console.log(res)
    }
    const handleSocialLogin=async(handler:string)=>{
        const res =await signIn(handler)
        console.log(res)
    }
    return (
        <div className='flex flex-col h-screen md:flex-row '>
            <div className='relative flex-1'>
            <div className=' w-full h-screen'>
            <Image src={'https://i.ibb.co.com/VJZvGn1/dbe7d1e0-4e42-4325-9d76-c38d558a3c06.jpg'} layout='fill' alt='shoe.png'/>
            </div>
            <Link href={'login'}><button className='absolute top-[35%] right-0 rounded-l-full text-2xl font-semibold px-8 py-4 bg-gray-400 text-blue-950'>LOGIN</button></Link>
            <Link href={'signup'}><button className='absolute top-2/4 right-0 rounded-l-full text-2xl font-semibold px-5 py-4  text-white'>SIGN UP</button></Link>
            </div>
            <div className='flex flex-col flex-1 items-center justify-center mx-auto'>
                <Image src={'https://i.ibb.co.com/VJV2GRy/images.png'} height={100} width={150} alt='logo.png'/>
                <form onSubmit={handleSignIn} className='mt-12' action="">
                    <div className='flex gap-1 items-center border-b-2 pb-1 mb-8 pr-12 border-secondary'>   
                            <MdEmail className='text-2xl text-gray-700'/>
                           <input type="email" name='email' placeholder='Email' required className='focus:outline-none focus:bg-none focus:border-none'/>
                    </div>
                    <div className='flex pb-1 gap-1 items-center border-b-2 pr-12 mb-8 border-secondary'>   
                            <IoIosLock className='text-2xl text-gray-700'/>
                           <input type="password" name='password' placeholder='Password' required className='focus:outline-none focus:border-none'/>
                    </div>
                   <div className='flex justify-end'>
                   <input type="submit" className='bg-primary text-white px-6 text-sm  py-1 rounded-full' value="LOGIN"  />
                   </div>
                </form>
                <div className="divider text-xs font-medium text-secondary md:mx-36">OR LOGIN WITH</div>
                <div className='flex items-center justify-between gap-2'>
                    <button onClick={()=>handleSocialLogin('google')} className='bg-primary text-white px-6 text-sm font-medium py-1 rounded-full'>Google</button>
                    <button onClick={()=>handleSocialLogin('facebook')} className='bg-primary text-white px-6 text-sm font-medium py-1 rounded-full'>Facebook</button>
                </div>
            </div>
        </div>
    );
};

export default page;