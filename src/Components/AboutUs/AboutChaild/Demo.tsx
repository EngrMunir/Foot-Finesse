import Image from "next/image";

import image4 from "../../../../public/AboutUs/Image/pic2 -4.jpg";
import image5 from "../../../../public/AboutUs/Image/pic3 -5.jpg";



const Demo = () => {
    return (
        <div>

            <section className="p-4 lg:p-8 ">
                <div className="container mx-auto space-y-12">

                    {/* Part 1 */}
                    <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row">
                        <Image src={image4} alt="" className="h-full dark:bg-gray-500 aspect-video" />
                        <div className="flex flex-col justify-center flex-1 p-6 dark:bg-gray-50">
                            <span className="text-xs uppercase dark:text-gray-600">
                                Our View</span>
                            <h3 className="text-3xl font-bold">Browse Our Extensive Range of Shoes</h3>
                            <p className="my-6 dark:text-gray-600">We are on a mission to redefine fashion blending style, quality, & into a into every garment we offer. believe what you wear is an of your It a long fact looking at its layout. unique personality, and it and aspirations.</p>
                            {/* Button  */}
                            <div className="justify-center items-center text-center grid">
                                <a
                                    className="group relative inline-block  overflow-hidden border border-indigo-600 px-8 py-3 focus:outline-none focus:ring "
                                    href="#"
                                >
                                    <span
                                        className="absolute inset-y-0 left-0 w-[2px] bg-indigo-600 transition-all group-hover:w-full group-active:bg-indigo-500"
                                    ></span>

                                    <span
                                        className="relative text-sm font-medium text-indigo-600 transition-colors group-hover:text-white"
                                    >
                                        Read More
                                    </span>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Part 2 */}
                    <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row-reverse">
                        <Image src={image5} alt="" className="h-full dark:bg-gray-500 aspect-video" />
                        <div className="flex flex-col justify-center flex-1 p-6 dark:bg-gray-50">
                            <span className="text-xs uppercase dark:text-gray-600">
                                Our View</span>
                            <h3 className="text-3xl font-bold">Browse Our Extensive Range of Shoes</h3>
                            <p className="my-6 dark:text-gray-600">We are on a mission to redefine fashion blending style, quality, & into a into every garment we offer. believe what you wear is an of your It a long fact looking at its layout. unique personality, and it and aspirations.</p>
                            {/* Button  */}
                            <div className="justify-center items-center text-center grid">
                                <a
                                    className="group relative inline-block  overflow-hidden border border-indigo-600 px-8 py-3 focus:outline-none focus:ring "
                                    href="#"
                                >
                                    <span
                                        className="absolute inset-y-0 left-0 w-[2px] bg-indigo-600 transition-all group-hover:w-full group-active:bg-indigo-500"
                                    ></span>

                                    <span
                                        className="relative text-sm font-medium text-indigo-600 transition-colors group-hover:text-white"
                                    >
                                        Read More
                                    </span>
                                </a>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </div>
    );
};

export default Demo;