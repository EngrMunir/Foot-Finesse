"use client"
import Image from 'next/image';
import Link from 'next/link';
import React, { FormEvent } from 'react';
import { IoIosLock } from 'react-icons/io';
import { IoPersonCircleSharp } from 'react-icons/io5';
import { MdEmail } from "react-icons/md";

const page = () => {
    const handleRegister =async(e :FormEvent<HTMLFormElement>): Promise<void>=>{
        e.preventDefault()
        const form =e.currentTarget
        const nameInput = form.elements.namedItem('name') as HTMLInputElement;
        const emailInput = form.elements.namedItem('email') as HTMLInputElement;
        const passwordInput = form.elements.namedItem('password') as HTMLInputElement;
        const name = nameInput.value;
        const email = emailInput.value;
        const password = passwordInput.value;
        const userData = {
            name,email,password
        }
        const res =await fetch('http://localhost:3000/signup/api',{
            method: "POST",
            headers:{
                "content-type": "application/json"
            },
            body: JSON.stringify(userData)
        })
        const result = await res.json();
        console.log(result)
    }
    return (
        <div className='flex flex-col h-screen md:flex-row '>
        <div className='relative flex-1'>
            <div className='relative w-full h-screen'>
            <Image src={'https://i.ibb.co.com/VJZvGn1/dbe7d1e0-4e42-4325-9d76-c38d558a3c06.jpg'} layout='fill' alt='shoe.png'/>
            </div>
        <Link href={'login'}><button className='absolute top-96 right-0 rounded-l-full text-2xl font-semibold px-8 py-4  text-white '>LOGIN</button></Link>
        <Link href={'signup'}><button className='absolute top-[31rem] right-0 rounded-l-full text-2xl font-semibold px-5 py-4 bg-gray-400 text-blue-950'>SIGN UP</button></Link>
        </div>
        <div className='flex flex-col flex-1 items-center justify-center mx-auto'>
            <Image src={'https://i.ibb.co.com/VJV2GRy/images.png'} height={100} width={150} alt='logo.png'/>
            <form onSubmit={handleRegister} className='mt-12' action="">
                <div className='flex gap-1 items-center border-b-2 pb-1 mb-8 pr-12 border-secondary'>   
                        <IoPersonCircleSharp className='text-2xl text-gray-700'/>
                       <input type="text" name='name' placeholder='Your Name' className='focus:outline-none focus:bg-none focus:border-none'/>
                </div>
                <div className='flex gap-1 items-center border-b-2 pb-1 mb-8 pr-12 border-secondary'>   
                        <MdEmail className='text-2xl text-gray-700'/>
                       <input type="email" name='email' placeholder='Email' className='focus:outline-none focus:border-none'/>
                </div>
                <div className='flex pb-1 gap-1 items-center border-b-2 pr-12 mb-8 border-secondary'>   
                        <IoIosLock className='text-2xl text-gray-700'/>
                       <input name='password' type="password" placeholder='Password' className='focus:outline-none focus:border-none'/>
                </div>
               <div className='flex justify-end'>
               <input type="submit" className='bg-primary text-white px-6 text-sm  py-1 rounded-full' value="SIGN UP"  />
               </div>
            </form>
            <div className="divider text-xs font-medium text-secondary md:mx-36">OR LOGIN WITH</div>
            <div className='flex items-center justify-between gap-2'>
                <div className='bg-primary text-white px-6 text-sm font-medium py-1 rounded-full'>Google</div>
                <div className='bg-primary text-white px-6 text-sm font-medium py-1 rounded-full'>Facebook</div>
            </div>
        </div>
    </div>
    );
};

export default page;