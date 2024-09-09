import Image from "next/image";

import image1 from "/public/AboutUs/Image/pic1.jpg";
import image2 from "/public/AboutUs/Image/pic2.jpg";
import image3 from "/public/AboutUs/Image/pic3.jpg";



const BannerImage = () => {

    return (
        <div>

            <div className="bg-white dark:bg-gray-900 dark:text-gray-100">
                <div className="container mx-auto px-4 py-16 l">
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">

                        {/* Image 1 */}
                        <a
                            href="#"
                            className="group relative block overflow-hidden transition ease-out active:opacity-75 sm:col-span-2 md:col-span-1"
                        >
                            <Image
                                src={image1}

                                // height={150} width={150}
                                alt="Catch"
                                className="transition rounded-tl-[96px] ease-out group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-black/25 transition ease-out group-hover:bg-black/0" />
                            
                        </a>

                        {/* Image 2 */}
                        <a
                            href="#"
                            className="group relative block overflow-hidden transition ease-out active:opacity-75 sm:col-span-2 md:col-span-1"
                        >
                            <Image
                                src={image2}

                                // height={150} width={150}
                                alt="Catch"
                                className="transition rounded-t-full ease-out group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-black/25 transition ease-out group-hover:bg-black/0" />
                            
                        </a>

                        {/* Image 3 */}
                        <a
                            href="#"
                            className="group relative block overflow-hidden transition ease-out active:opacity-75 sm:col-span-2 md:col-span-1"
                        >
                            <Image
                                src={image3}

                                // height={150} width={150}
                                alt="Catch"
                                className="transition rounded-tr-[96px] ease-out group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-black/25 transition ease-out group-hover:bg-black/0" />
                            
                        </a>

                    </div>
                </div>
            </div>

        </div>
    );
};



export default BannerImage;