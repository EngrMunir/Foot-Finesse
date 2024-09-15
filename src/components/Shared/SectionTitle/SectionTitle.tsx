import Image from "next/image";

import localImage from "../../../../public/AboutUs/AboutNav.png";
import { MdDoubleArrow } from "react-icons/md";
import Link from "next/link";

interface SectionTitleProps {
    heading: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ heading }) => {
    return (
        <div>
            <div className="mt-20">
                <header className=" border-gray-200 ">
                    <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
                        <div className="flex flex-col items-start gap-4 md:flex-row md:items-center md:justify-between">

                            {/* Left Side  Section */}
                            <div>
                                <h1 className="text-2xl flex items-center justify-center gap-4 font-bold text-gray-900 sm:text-3xl"> {heading} <span><MdDoubleArrow /></span> </h1>
                                <Link href="/"> <p className="mt-1.5 text-sm hover:text-blue-600 text-gray-500"> Back to Home </p> </Link>
                            </div>

                            {/* Right Side Section */}
                            <div className="flex items-center gap-4">
                                <Image src={localImage} className="rounded-t-full" height={150} width={150} alt='shoe.png' />
                            </div>
                        </div>
                    </div>
                </header>
            </div>
        </div>
    );
};

export default SectionTitle;