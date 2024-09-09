


const AbBanner = () => {
    return (
        <div>
            <section
                className="relative bg-[url(https://footflare.dexignzone.com/xhtml/images/shop/large/product2.jpg)] bg-cover bg-center bg-no-repea h-full w-full"
            >
                <div
                    className="absolute inset-0 bg-white/75 sm:bg-transparent sm:from-white/95 sm:to-white/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"
                ></div>

                <div
                    className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8"
                >
                    <div className=" text-center ltr:sm:text-left rtl:sm:text-right">
                        <h1 className="text-xl font-extrabold sm:text-5xl">
                            Casual Sport Shoes

                            <strong className="block mt-2 font-extrabold text-blue-700"> 2024  <br /> Reebok <br /> The Best <br /> Classical </strong>
                        </h1>

                        

                        <div className="mt-8  flex-wrap gap-4  justify-center items-center text-center grid">
                            {/* Button  */}
                            <div className="">
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
                                        Shop Now
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

export default AbBanner;