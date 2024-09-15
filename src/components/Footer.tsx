'use client';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';
import { TbShoe } from 'react-icons/tb';

const Footer = () => {
   const pathName = usePathname();

  // if (pathName.includes('login') || pathName.includes('signup')) {
  //     return null;
  // }
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
    <div className=''>
      <footer className='footer bg-primary p-10 text-white'>
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
          <h6 className='footer-title'>Services</h6>
          <a className='link-hover link'>Branding</a>
          <a className='link-hover link'>Design</a>
          <a className='link-hover link'>Marketing</a>
        </nav>
        <nav>
          <h6 className='footer-title'>Company</h6>
          <a className='link-hover link'>About us</a>
          <a className='link-hover link'>Contact</a>
          <a className='link-hover link'>Jobs</a>
        </nav>
        <nav>
          <h6 className='footer-title'>Legal</h6>
          <a className='link-hover link'>Terms of use</a>
          <a className='link-hover link'>Privacy policy</a>
          <a className='link-hover link'>Cookie policy</a>
        </nav>
      </footer>
      <footer>
        <div className=''>
          <p className='text-center text-xs/relaxed bg-gray-900 p-4 text-white'>
            © FOOTFINESSE 2024. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
