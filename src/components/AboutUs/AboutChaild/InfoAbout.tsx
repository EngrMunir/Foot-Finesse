


const InfoAbout = () => {
    return (
        <div>
            <div className="">
                <div className="container mx-auto space-y-16 px-4 py-16 ">
                    <div className="text-center">
                        <h2 className="mb-4 text-4xl  font-black ">
                            Browse Our Extensive Range of Shoes
                        </h2>
                        <h3 className="mx-auto text-xl font-medium leading-relaxed text-gray-700 lg:w-2/3 ">
                            We are on a mission to redefine fashion blend style, quality, & into a into every garment we offer. believe what you wear is an of your It a long fact looking at its layout. unique personality, & it and aspirations.
                        </h3>
                    </div>

                    {/* Button  */}
                    <div className="justify-center items-center text-center grid">
                        <a
                            className="group relative inline-block  overflow-hidden border border-primary px-8 py-3 focus:outline-none focus:ring "
                            href="#"
                        >
                            <span
                                className="absolute inset-y-0 left-0 w-[2px] bg-primary transition-all group-hover:w-full group-active:bg-primary"
                            ></span>

                            <span
                                className="relative text-sm font-medium text-primary transition-colors group-hover:text-white"
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

export default InfoAbout;