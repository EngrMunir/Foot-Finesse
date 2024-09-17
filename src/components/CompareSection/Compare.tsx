"use client"
import Image from "next/image";
import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'

import { useContext } from "react";
import { CartContext } from "@/providers/CartProvider";



const Compare = () => {
    const {getComparedShoes, removeShoe}:any =useContext(CartContext)
    const shoes =getComparedShoes()
    console.log(shoes)
    return (
        <div>
            {
                shoes.length>0 ? <div className="mt-28 justify-center grid">
                <div className="overflow-x-auto">
                    <table className="min-w-full divide-y-2  text-sm">
                        <thead className="ltr:text-left rtl:text-right">
                            <tr>
                                <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900"></th>
                                <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Product 1</th>
                                {shoes.length>1 ?<th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Product 2</th> :<></>}

                            </tr>
                        </thead>

                        <tbody className="divide-y divide-gray-200">

                            <tr className="odd:bg-gray-50">
                                <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900"></td>
                                {
                                    shoes?.map((shoe:any)=><td key={shoe.id} className="whitespace-nowrap px-4 py-2 text-gray-700">
                                    <a href="#" className="block rounded-lg p-4 shadow-sm shadow-indigo-100">
                                        <Image
                                            width={400}
                                            height={400}
                                            alt=""
                                            src={shoe.image}
                                            className="h-56 w-56l rounded-md object-cover"
                                        />
                                    </a>
                                </td>)
                                }   
                             
                            </tr>

                            <tr className="odd:bg-gray-50">
                                <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Show Name</td>
                                {
                                    shoes.map((shoe:any)=>  <td key={shoe.id} className="whitespace-nowrap px-4 py-2 text-gray-700">
                                    {shoe.shoeName}
                                </td>)
                                }
                               
                            </tr>
                            <tr className="odd:bg-gray-50">
                                <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">category</td>
                                {
                                    shoes.map((shoe:any)=>  <td key={shoe.id} className="whitespace-nowrap px-4 py-2 text-gray-700">
                                    {shoe.category}
                                </td>)
                                } 
                            </tr>

                            <tr className="odd:bg-gray-50">
                                <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Price</td>
                                {shoes.map((shoe:any)=>  <td key={shoe.id} className="whitespace-nowrap px-4 py-2 text-gray-700">
                                    {shoe.price} $
                                </td>)}
                              
                            </tr>
                            <tr className="odd:bg-gray-50">
                                <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Discount Price</td>
                                {
                                    shoes.map((shoe:any)=> <td key={shoe.id} className="whitespace-nowrap px-4 py-2 text-gray-700">
                                    {shoe.discountPrice} $
                                </td>)
                                }

                            </tr>
                            <tr className="odd:bg-gray-50">
                                <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Rating</td>
                                {
                                    shoes.map((shoe:any)=>
                                        <td key={shoe.id} className="whitespace-nowrap px-4 py-2 text-gray-700">
                                       <Rating style={{ maxWidth: 100 }} value={shoe.rating} readOnly />
                                    </td>
                                    )
                                }
                            </tr>

                            <tr className="odd:bg-gray-50">
                                <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Description</td>
                              {
                                shoes.map((shoe:any)=>  <td key={shoe.id} className="whitespace-nowrap px-4 py-2 text-gray-700">
                                {shoe.shortDescription}
                            </td>)
                              }
                                
                            </tr>
                            <tr className="odd:bg-gray-50">
                                <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Size</td>
                                {
                                    shoes.map((shoe:any)=>
                                        <td key={shoe.id} className="whitespace-nowrap px-4 py-2 text-gray-700">
                                        All size avelable
                                    </td>
                                    )
                                }
                               
                            </tr>
                                
                            <tr className="odd:bg-gray-50">
                                <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Stock</td>
                                {
                                    shoes.map((shoe:any)=> <td key={shoe.id} className="whitespace-nowrap px-4 py-2 text-gray-700">
                                    Available
                                </td>)
                                }
                               
                            </tr>
                            <tr className="odd:bg-gray-50">
                                <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900"></td>
                                {
                                    shoes.map((shoe:any)=><td key={shoe.id} className="whitespace-nowrap px-4 py-2 text-gray-700">
                                    {/* Button  */}
                                    <div className="justify-between items-center text-center flex">
                                        <button
                                            className="group relative inline-block  overflow-hidden border border-primary px-8 py-3 focus:outline-none focus:ring "
                                            
                                        >
                                            <span
                                                className="absolute inset-y-0 left-0 w-[2px] bg-primary transition-all group-hover:w-full group-active:bg-indigo-500"
                                            ></span>

                                            <span
                                                className="relative text-sm font-medium text-primary transition-colors group-hover:text-white"
                                            >
                                                Add to Cart
                                            </span>
                                        </button>
                                        <button onClick={()=>removeShoe(shoe.id)} className="group relative inline-block  overflow-hidden border border-primary px-8 py-3 focus:outline-none focus:ring ">  <span
                                                className="absolute inset-y-0 left-0 w-[2px] bg-primary transition-all group-hover:w-full group-active:bg-indigo-500"
                                            ></span>

                                            <span
                                                className="relative text-sm font-medium text-primary transition-colors group-hover:text-white"
                                            >
                                                Delete
                                            </span></button>
                                    </div>
                                </td>)
                                }
                               
                            </tr>

                        </tbody>
                    </table>
                </div>
            </div> : <div className="min-h-screen mt-32"><h2 className="text-center text-5xl">No shoes are found</h2></div>
            } 
        </div>
    );
};

export default Compare;