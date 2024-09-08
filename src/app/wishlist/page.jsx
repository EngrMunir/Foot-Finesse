"use client"
import axios from 'axios';
import React, { useEffect } from 'react';

const loadData = async() => {
    const res = await axios.get('http://localhost:3000/AllShoe/api/get-all');
    console.log(res.data);
}

const wishlistPage = () => {

    useEffect(() => {
        loadData
    }, [])

    return (
        <div className=''>
            <div className='h-[64px] w-full bg-black'></div>
       <div className='mt-14'>
       <h3 className='text-3xl font-semibold text-center'>You Have 8 Items in Wishlist</h3>
       </div>
        </div>
    );
};

export default wishlistPage;