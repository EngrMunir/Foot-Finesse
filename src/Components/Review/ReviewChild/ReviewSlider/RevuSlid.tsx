import Image from "next/image";

import img from "../../../../../public/AboutUs/Image/pic1.jpg"


const RevuSlid = () => {
    return (
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-10 p-10">

            <section className="py-10 bg-white sm:py-16 lg:py-24 border border-blue-500 rounded-lg ">
                <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="text-center">
                        <Image
                            className="object-cover  mx-auto rounded-full"
                            width={100}
                            height={100}
                            src={img}
                            alt="Mark Tanker"
                        />
                        
                        <p className="mt-6 text-lg font-semibold text-black">
                            This is the best product in <span className="font-normal text-blue-600"> World</span>
                        </p>
                        <blockquote className="max-w-xl mx-auto mt-7">
                            <p className="text-xl leading-relaxed text-black">
                                “Amet minim mollit non deserunt ullam co est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat.”
                            </p>
                        </blockquote>
                    </div>
                </div>
            </section>

            <section className="py-10 bg-white sm:py-16 lg:py-24 border border-blue-500 rounded-lg ">
                <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="text-center">
                        <Image
                            className="object-cover  mx-auto rounded-full"
                            width={100}
                            height={100}
                            src={img}
                            alt="Mark Tanker"
                        />
                        <p className="mt-6 text-lg font-semibold text-black">
                            Mark Tanker, <span className="font-normal text-gray-600">California</span>
                        </p>
                        <blockquote className="max-w-xl mx-auto mt-7">
                            <p className="text-xl leading-relaxed text-black">
                                “Amet minim mollit non deserunt ullam co est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat.”
                            </p>
                        </blockquote>
                    </div>
                </div>
            </section>
            <section className="py-10 bg-white sm:py-16 lg:py-24 border border-blue-500 rounded-lg ">
                <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="text-center">
                        <Image
                            className="object-cover  mx-auto rounded-full"
                            width={100}
                            height={100}
                            src={img}
                            alt="Mark Tanker"
                        />

                        

                        <p className="mt-6 text-lg font-semibold text-black">
                            Mark Tanker, <span className="font-normal text-gray-600">California</span>
                        </p>
                        <blockquote className="max-w-xl mx-auto mt-7">
                            <p className="text-xl leading-relaxed text-black">
                                “Amet minim mollit non deserunt ullam co est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat.”
                            </p>
                        </blockquote>
                    </div>
                </div>
            </section>

            
        </div>
    );
};

export default RevuSlid;