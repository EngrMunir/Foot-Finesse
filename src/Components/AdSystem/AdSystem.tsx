import Image from "next/image";

import comImagee from "../../../public/AboutUs/Image/adv-2.png"
// import { AiTwotoneMail } from "react-icons/ai";



const AdSystem = () => {
    return (
        <div className="mt-28">

            <div className="grid grid-cols-2 p-8 justify-center items-center text-center">

                <div>
                    {/* Button */}
                    <button className="btn btn-circle btn-outline">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>

                    {/* Inpute section */}
                    <div className="bg-white p-6">
                        <div className="mx-auto max-w-screen-xl px-4 pb-8 pt-16 sm:px-6 lg:px-8 lg:pt-24">
                            <div className="text-center">
                                <h2 className="text-3xl font-extrabold text-gray-900 sm:text-5xl">Off 50% Discount Shipped To Your Order</h2>

                                <p className="mx-auto mt-4 max-w-sm text-gray-500">
                                    Subscribe to our newsletter to receive updates
                                </p>

                            </div>

                        </div>
                    </div>

                    <form action="#" className=" space-y-4 rounded-lg  shadow-lg sm:p-6 lg:p-8">
                        <div>
                            <div className="relative">
                                <input
                                    type="email"
                                    className="w-full border rounded-lg border-black p-4 pe-12 text-sm shadow-sm"
                                    placeholder="Inpute your Email"
                                />

                                {/* <label className="absolute inset-y-0 end-0 grid place-content-center px-4">
                                    <AiTwotoneMail />
                                </label> */}
                            </div>
                        </div>

                        {/* Check Box */}
                        <div className="form-control">
                            <label className="cursor-pointer label justify-center gap-6">

                                <input type="checkbox" defaultChecked className="checkbox checkbox-error" />
                                <span className="label-text">Do Not Show This Pop Pp Again</span>
                            </label>
                        </div>

                        {/* Subscibe button */}
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
                                    Subscribe
                                </span>
                            </a>
                        </div>


                    </form>

                </div>

                {/* Image Section */}
                <div>
                    <div className="block rounded-lg p-4 shadow-sm shadow-indigo-100">
                        <Image
                            width={500}
                            height={1000}
                            alt=""
                            src={comImagee}
                            className=" w-56l rounded-md object-cover"
                        />
                    </div>
                </div>

            </div>

        </div>
    );
};

export default AdSystem;