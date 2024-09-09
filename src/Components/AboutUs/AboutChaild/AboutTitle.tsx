


const AboutTitle = () => {
    return (
        <div>
            <div className="bg-[#FAF9F6] dark:bg-gray-900 dark:text-gray-100">
                <div className="container mx-auto space-y-16 px-4 py-16 ">
                    <div className="text-center">
                        <h2 className="mb-4 text-4xl font-black text-black dark:text-white">
                            Browse Our Extensive Range of Shoes
                        </h2>
                        <h3 className="mx-auto text-xl font-medium leading-relaxed text-gray-700 lg:w-2/3 dark:text-gray-300">
                            We are on a mission to redefine fashion blend style, quality, & into a into every garment we offer. believe what you wear is an of your It a long fact looking at its layout. unique personality, & it and aspirations.
                        </h3>
                    </div>
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
    );
};

export default AboutTitle;