

const NewsLetter = () => {
    return (
        <div className="mt-28 grid justify-center items-center">

            <div className=" ">
                {/* Inpute section */}
                <div className="bg-white p-6">
                    <div className="mx-auto max-w-screen-xl px-4 pb-8 pt-16 sm:px-6 lg:px-8 lg:pt-24">
                        <div className="text-center">
                            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-5xl">Subscribe Newsletter & Get <br />
                             Shoes News   </h2>

                        </div>

                    </div>
                    <form action="#" className=" space-y-4 rounded-lg  shadow-lg sm:p-6 lg:p-8">
                        <div>
                            <div className="relative">
                                <input
                                    type="email"
                                    className="w-full  border rounded-lg border-black p-4 pe-12 text-sm shadow-sm"
                                    placeholder="Inpute your Email"
                                />


                                <label className="absolute inset-y-0 end-0 grid place-content-center px-4 p-2">
                                    <a
                                        className="inline-block rounded bg-indigo-600 px-8 py-3 text-sm font-medium text-white transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring active:bg-indigo-500"
                                        href="#"
                                    >
                                        Subscribe Now
                                    </a>
                                </label>
                            </div>
                        </div>

                        {/* Subscibe button */}



                    </form>
                </div>





            </div>

        </div>
    );
};

export default NewsLetter;