

import Image from "next/image";

import localImage from "/public/AboutUs/AboutNav.png";

const AboutNav = () => {
    return (
        <div className="mt-1 mb-1">
            <header className="border-b border-gray-200 bg-gray-50">
                <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
                    <div className="flex flex-col items-start gap-4 md:flex-row md:items-center md:justify-between">

                        {/* Left Side  Section */}
                        <div>
                            <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">About US</h1>

                            {/* <p className="mt-1.5 text-sm text-gray-500">
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure, recusandae.
                            </p> */}
                        </div>

                        {/* Right Side Section */}
                        <div className="flex items-center gap-4">
                            <Image src={localImage} className="rounded-full" height={150} width={150} alt='shoe.png' />
                        </div>
                    </div>
                </div>
            </header>
        </div>
    );
};

export default AboutNav;
