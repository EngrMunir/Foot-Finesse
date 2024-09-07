import React from "react";
import { MdEmail } from "react-icons/md";
import { MdLocalPhone } from "react-icons/md";
import { TfiWorld } from "react-icons/tfi";
import { BiSupport } from "react-icons/bi";
import { PiHandshakeFill } from "react-icons/pi";
import Image from "next/image";

function page() {
  return (
    <>
      <div className="container mx-auto">
        <div className="relative rounded-3xl">
          <Image
            className="rounded-3xl"
            src={"https://i.ibb.co.com/N3DtB5T/Untitled-design-4.png"}
            layout="responsive"
            width={1280}
            height={280}
            alt="Shoe"
          />
          <p className="text-6xl font-bold absolute top-[38%] left-[15%]">
            Contact Us
          </p>
        </div>

        <div className="flex items-center  justify-between mt-28">
          {/*contact info section */}
          <div>
            <p className="text-4xl text-secondary font-medium">
              We&apos;re Here to Help
            </p>
            <div className="space-y-7 mt-10">
              {/* email */}
              <div>
                <div className="inline-flex items-center gap-2 text-secondary">
                  <MdEmail size={22} />
                  <span className="text-xl">Email</span>
                </div>
                <p className="tracking-wide">foot.finesse789@gmail.com</p>
              </div>
              {/* phone */}
              <div>
                <div className="inline-flex items-center gap-2 text-secondary">
                  <MdLocalPhone size={22} />
                  <span className="text-xl">Phone No</span>
                </div>
                <p className="tracking-wide">+880 16760-00000</p>
              </div>
              {/* address */}
              <div>
                <div className="inline-flex items-center gap-2 text-secondary">
                  <TfiWorld size={22} />
                  <span className="text-xl">Address</span>
                </div>
                <p className="tracking-wide">
                  722/3 West kazipara, Mirpur, Dhaka 1200
                </p>
              </div>
              {/* Partnership Inquiries */}
              <div>
                <div className="inline-flex items-center gap-2 text-secondary">
                  <PiHandshakeFill size={22} />
                  <span className="text-xl">Partnership Inquiries</span>
                </div>
                <p className="tracking-wide">
                  Interested in partnering with us? Reach out at <br />{" "}
                  <span className="text-secondary font-bold">
                    partnerships@footfinesse.com
                  </span>
                </p>
              </div>
              {/* customer support */}
              <div>
                <div className="inline-flex items-center gap-2 text-secondary">
                  <BiSupport size={22} />
                  <span className="text-xl">24/7 Customer Support</span>
                </div>
                <p className="tracking-wide">
                  Our customer support team is here to assist you! If you have
                  any <br /> questions, concerns, or need help.
                </p>
              </div>
            </div>
          </div>

          {/* form section */}
          <div className="w-1/2 p-10 rounded-lg border-[1px] border-secondary">
            <p className="text-4xl font-medium mb-8 text-center text-secondary">
              Get In Touch
            </p>
            <form action="" className="space-y-3">
              <div className="w-full">
                <label className="text-secondary block mb-2">Name</label>
                <input
                  className="px-3 w-full py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary"
                  name="name"
                  type="text"
                />
              </div>
              <div className="w-full">
                <label className="text-secondary block mb-2">Email</label>
                <input
                  className="px-3 w-full py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary"
                  name="email"
                  type="email"
                />
              </div>
              <div className="w-full">
                <label className="text-secondary block mb-2">Message</label>
                <textarea
                  name="Message"
                  rows={5}
                  className="px-3 w-full py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary"
                ></textarea>
              </div>
              {/* submit btn */}
              <div className="text-center">
                <button className="border border-secondary px-5 py-2 mt-5 rounded-md text-secondary transition-colors duration-300 hover:border-white hover:text-white">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Our Shop Location section */}
        <div className="mt-20">
          <p className="text-4xl text-secondary font-medium text-center">
            Our Shop Location
          </p>
          <div className="mt-10">
            <iframe
              className="w-full h-80 border-0"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2876.94482134523!2d-91.24535472346089!3d43.856972339227134!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87f955c3859907eb%3A0x4dbbd461a78825a8!2sFoot%20Finesse!5e0!3m2!1sen!2sbd!4v1725743190631!5m2!1sen!2sbd"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
}

export default page;
