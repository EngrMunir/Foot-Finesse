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
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
            {
                shoes?.map(shoe=><div key={shoe._id}>
                    <Image src={shoe.image} height={120} width={120} alt='shoe.png'/>
                </div>)
            }
        </div>
    );
};

export default ShoeSection;