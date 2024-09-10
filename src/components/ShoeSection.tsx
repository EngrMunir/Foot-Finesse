"use client"
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
interface Shoe {
    _id: string; 
    id: number;
    category: string;
    shoeName: string;
    price: number;
    discountPrice: number;
    shortDescription: string;
    rating: number;
    image: string;
  }
const ShoeSection = () => {
    const [shoes,setShoes]=useState<Shoe[]>([])
    const getShoes =async()=>{
        const res =await fetch('http://localhost:3000/api/shoeCard')
        const data = await res.json()
        console.log(data)
        setShoes(data)
    }
    console.log(shoes)
    useEffect(()=>{
        getShoes()
    },[])
    return (
        <div className="grid grid-cols-1 mt-10 md:grid-cols-2 max-w-[1440px] mx-auto lg:grid-cols-3 gap-9">
        {
            shoes?.map((shoe) => (
                <div key={shoe._id} className=" group relative cursor-zoom-in">
                    <div className="z-0 border opacity-0 group-hover:opacity-100 border-black group-hover:scale-110 scale-100 transition-all duration-1000 w-full h-full absolute"></div>
                    <div className="z-10">       
                        <div className="w-full h-64 bg-cover relative">
                            <Image src={shoe.image} alt={shoe.shoeName} layout="fill"  objectFit="cover" className="w-full"/>
                        </div>
                        <h3 className="text-sm  z-10 mt-5 duration-300 hover:text-[#DF2626]">{shoe.category}</h3>
                        <h3 className="cursor-pointer z-50 text-base font-semibold duration-300 w-fit hover:text-[#DF2626]">{shoe.shoeName}</h3>
                        <div className="flex mt-2 gap-1 items-end">
                            <p className="text-xl text-[#DF2626] font-bold">${shoe.discountPrice}</p>
                            <p className="text-base font-bold line-through italic">${shoe.price}</p>
                        </div>
                        <div className="font-medium flex items-center mt-5 scale-y-0 group-hover:scale-y-100 transition-all duration-500 ease-out opacity-0 group-hover:opacity-100">
                            <button className="border-black shadow-2xl z-10 border rounded-[4px] mr-2 leading-4 hover:border-[#DF2626] duration-500 px-6 py-2 hover:bg-[#DF2626] text-black hover:text-white">ADD TO  <span className="block">CARD</span></button>
                            <button className="bg-black z-10 shadow-2xl  text-white hover:bg-[#DF2626] hover:text-white duration-500 px-6 py-2 rounded-[4px] hover:shadow-lg">Add to Wishlist</button>
                        </div>
                    </div>
                </div>
            ))
        }
    </div>
    );
};

export default ShoeSection;