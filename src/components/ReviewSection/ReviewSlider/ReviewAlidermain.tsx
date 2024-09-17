import Image from "next/image";

import img from "../../../../public/AboutUs/Image/pic1.jpg"


const ReviewAlidermain = () => {

    return (
        <div>
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

                            <div className="p-2">
                                <div className="rating">
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                    <input
                                        type="radio"
                                        name="rating-2"
                                        className="mask mask-star-2 bg-orange-400"
                                        defaultChecked />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                </div>
                            </div>

                            <p className=" text-lg font-semibold text-black">
                                This is the best product in <span className="font-normal text-blue-600"> World</span>
                            </p>
                            <blockquote className="max-w-xl mx-auto mt-1">
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

                            <div className="p-2">
                                <div className="rating">
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                    <input
                                        type="radio"
                                        name="rating-2"
                                        className="mask mask-star-2 bg-orange-400"
                                        defaultChecked />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                </div>
                            </div>

                            <p className=" text-lg font-semibold text-black">
                                This is the best product in <span className="font-normal text-blue-600"> World</span>
                            </p>
                            <blockquote className="max-w-xl mx-auto mt-1">
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

                            <div className="p-2">
                                <div className="rating">
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                    <input
                                        type="radio"
                                        name="rating-2"
                                        className="mask mask-star-2 bg-orange-400"
                                        defaultChecked />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                </div>
                            </div>

                            <p className=" text-lg font-semibold text-black">
                                This is the best product in <span className="font-normal text-blue-600"> World</span>
                            </p>
                            <blockquote className="max-w-xl mx-auto mt-1">
                                <p className="text-xl leading-relaxed text-black">
                                    “Amet minim mollit non deserunt ullam co est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat.”
                                </p>
                            </blockquote>
                        </div>
                    </div>
                </section>

            </div>
        </div>
    );
};

export default ReviewAlidermain;