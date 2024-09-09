"use client"
import ShoeCard from '@/components/ShoeCard';
import { useSession } from 'next-auth/react';
import React, { useEffect, useState } from 'react';

const AllShoe = () => {
    const {data: session } = useSession();
    console.log(session)
    const [shoes, setShoes] = useState<Shoe[]>([]);

    const loadShoes = async()=>{
        const res =await fetch('http://localhost:3000/AllShoe/api/get-all')
        const data = await res.json();
        console.log(data)
        setShoes(data)
    }
    useEffect(()=>{
        // if(session?.user?.email){
            loadShoes()
        // }
    },[session])
    return (
        <div className='mt-20 px-10'>
            <h1 className='text-3xl text-center font-semibold py-10'>Discover the Latest Trends in Shoes</h1>
           <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5'>
            {
                shoes?.map((shoe, index) => (<ShoeCard key={index} shoe={shoe}/>))
            }
           </div>
        </div>
    );
};

export default AllShoe;