import Image from 'next/image';
import React from 'react';

const Footer = () => {
    return (
        <footer className="footer bg-base-400 text-base-content p-10">
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
    );
};

export default Footer;