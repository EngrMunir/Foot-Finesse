
import Image from "next/image";
import { FaStar } from "react-icons/fa";
import { FaStarHalfStroke } from "react-icons/fa6";
import comImage from "../../../public/AboutUs/Image/pic1.jpg"
import comImage2 from "../../../public/AboutUs/Image/pic2.jpg"

const Compare = () => {
    return (
        <div className="mt-28 justify-center grid">
            <div className="overflow-x-auto">
                <table className="min-w-full divide-y-2  text-sm">
                    <thead className="ltr:text-left rtl:text-right">
                        <tr>
                            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900"></th>
                            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Product 1</th>
                            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Product 2</th>

                        </tr>
                    </thead>

                    <tbody className="divide-y divide-gray-200">

                        <tr className="odd:bg-gray-50">
                            <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900"></td>
                            <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                                <a href="#" className="block rounded-lg p-4 shadow-sm shadow-indigo-100">
                                    <Image
                                        width={400}
                                        height={400}
                                        alt=""
                                        src={comImage}
                                        className="h-56 w-56l rounded-md object-cover"
                                    />
                                </a>
                            </td>
                            <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                                <a href="#" className="block rounded-lg p-4 shadow-sm shadow-indigo-100">
                                    <Image
                                        width={400}
                                        height={400}
                                        alt=""
                                        src={comImage2}
                                        className="h-56 w-56l rounded-md object-cover"
                                    />
                                </a>
                            </td>
                        </tr>

                        <tr className="odd:bg-gray-50">
                            <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Show Name</td>
                            <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                                Playground Runner
                            </td>
                            <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                                Tiny Trek Sneakers
                            </td>
                        </tr>
                        <tr className="odd:bg-gray-50">
                            <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">category</td>
                            <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                                Man Shoes
                            </td>
                            <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                                Man Shoes
                            </td>
                        </tr>

                        <tr className="odd:bg-gray-50">
                            <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Price</td>
                            <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                                29.99 $
                            </td>
                            <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                                30 $
                            </td>
                        </tr>
                        <tr className="odd:bg-gray-50">
                            <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Color</td>
                            <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                                White, Black
                            </td>
                            <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                                White, Black
                            </td>
                        </tr>
                        <tr className="odd:bg-gray-50">
                            <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Discount Price</td>
                            <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                                28 $
                            </td>
                            <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                                27 $
                            </td>

                        </tr>
                        <tr className="odd:bg-gray-50">
                            <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Rating</td>
                            <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                                4.5 <span className="flex gap-2">
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                    <FaStarHalfStroke />
                                </span>
                            </td>
                            <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                                4.6 <span className="flex gap-2">
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                    <FaStar />
                                    <FaStarHalfStroke />
                                </span>
                            </td>
                        </tr>

                        <tr className="odd:bg-gray-50">
                            <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Description</td>
                            <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                                Elegant leather loafers for formal occasions.
                            </td>
                            <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                                Durable shoes designed for everyday play
                            </td>
                        </tr>
                        <tr className="odd:bg-gray-50">
                            <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Size</td>
                            <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                                All size avelable
                            </td>
                            <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                                All size avelable
                            </td>
                        </tr>
                        <tr className="odd:bg-gray-50">
                            <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Company Name</td>
                            <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                                Lotto
                            </td>
                            <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                                Appex
                            </td>
                        </tr>
                        <tr className="odd:bg-gray-50">
                            <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Launch</td>
                            <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                                12/07/2024
                            </td>
                            <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                                18/07/2024
                            </td>
                        </tr>
                        <tr className="odd:bg-gray-50">
                            <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Stock</td>
                            <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                                Avalable
                            </td>
                            <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                                Avalable
                            </td>
                        </tr>
                        <tr className="odd:bg-gray-50">
                            <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900"></td>
                            <td className="whitespace-nowrap px-4 py-2 text-gray-700">
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
                                            Add to Card
                                        </span>
                                    </a>
                                </div>
                            </td>
                            <td className="whitespace-nowrap px-4 py-2 text-gray-700">
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
                                            Add to Card
                                        </span>
                                    </a>
                                </div>
                            </td>
                        </tr>

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Compare;