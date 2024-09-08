"use client"
<<<<<<< HEAD
import React, { useState } from 'react';
=======
import { useSession } from 'next-auth/react';
import React, { useEffect, useState } from 'react';
>>>>>>> f4a4f497a1a2ae6c0747d6ce08aa7f3b5822f5d3

const AllShoe = () => {
    const {data: session } = useSession();
    console.log(session)
    const [shoes, setShoes] = useState([]);

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
        <div className='bg-green-500 mt-20'>
            <h1>All Shoe:{shoes?.length}</h1>
        </div>
    );
};

export default AllShoe;