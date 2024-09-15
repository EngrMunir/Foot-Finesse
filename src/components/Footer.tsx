"use client"
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';
import { TbShoe } from 'react-icons/tb';

const Footer = () => {
    const pathName = usePathname();
    if (
        pathName.includes('login') ||
        pathName.includes('signup') ||
        pathName.includes('admin') ||
        pathName.includes('allUser') ||
        pathName.includes('addShoe')
      ) {
        return null;
      }
    return (
        <footer className="footer bg-base-400 text-base-content p-10">
    <aside>
    <Link href={'/'} className='flex items-center'>
          <TbShoe className='me-3 text-3xl' />
          <p className='font-medium'>
            <span className='font-light lg:text-slate-400'>FOOT</span>
            FINESSE
          </p>
        </Link>
        <p>
        
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
    );
};

export default Footer;