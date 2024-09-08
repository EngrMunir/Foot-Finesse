"use client"
import Image from 'next/image';
import Link from 'next/link';
import { signOut, useSession } from 'next-auth/react';
import React from 'react';
import { IoCartOutline } from "react-icons/io5";
import { MdOutlineSearch } from "react-icons/md";

const Navbar = () => {
    const session = useSession();
    console.log(session)


    const navItems =[
        {
            title:"Home",
            path:"/"
        },
        {
            title:"About",
            path:"/about"
        },
        {
            title:"All Shoe",
            path:"/AllShoe"
        },
        {
            title:"Services",
            path:"/services"
        },
        {
            title:"Contacts",
            path:"/contact-us"
        }
    ]
    return (
       <div className=' bg-base-100 text-slate-900'>
         <div className="navbar container mx-auto">
            <div className="navbar-start">
                <Link href="/">
                    <Image alt='logo' src="/assets/logo.jpg" height={50} width={50}/>
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <div className='flex items-center space-x-6'>
                    {
                        navItems.map((item) => (
                            <Link className='font-semibold hover:text-primary duration-300' href={item.path} key={item.path}>{item.title}</Link>
                        ))
                    }
                </div>
            </div>
            <div className="navbar-end">
                <div className='flex space-x-3 items-center text-xl'>
                <IoCartOutline />
                <MdOutlineSearch />
                <a className="btn btn-outline btn-primary">Appointment</a>
                {/* <div>
                    <Image alt={session?.data?.user?.name} src={session?.data?.user?.image} height={50} width={50}></Image>
                </div> */}
                {
                    session?.status ==='loading' && 
                    <h6>Loading-----</h6>
                }
            {session.status ==='unauthenticated' &&
                <Link href="/login"> <button className='btn btn-primary mr-4'>Login</button></Link>    
                }
                { session.status === 'authenticated' &&
                    <button className='btn btn-primary px-8' onClick={()=> signOut()}>Logout</button>
                }
                </div>
            </div>
            </div>
       </div>
    );
};

export default Navbar;