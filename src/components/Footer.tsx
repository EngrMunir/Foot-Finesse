"use client"
import Image from 'next/image';
// import { usePathname } from 'next/navigation';
import React from 'react';

const Footer = () => {

    // const pathName = usePathname();

    // if (pathName.includes('login') || pathName.includes('signup')) {
    //     return null;
    // }

    return (
        <div className="">
            <footer className="footer  text-base-content p-10">
                <aside>
                    <Image src="/assets/logo.jpg" alt='' width={50} height={50} />
                    <p>
                        <span className='font-bold'>Foot Finesse.</span>
                        <br />
                        <span className='text-xl font-semibold'>Fashion for Your Feet</span>
                    </p>
                </aside>
                <nav>
                    <h6 className="footer-title">Services</h6>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Company</h6>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Legal</h6>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </nav>
            </footer>
            <footer>
                <div className=" p-4 ">
                    <p className="text-center text-xs/relaxed text-gray-500">
                        © FOOTFINESSE 2024. All rights reserved.
                    </p>
                </div>
            </footer>

        </div>
    );
};

export default Footer;