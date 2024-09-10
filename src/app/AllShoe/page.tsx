"use client"
import ShoeCard from '@/components/ShoeCard';
import { useSession } from 'next-auth/react';
import React, { useEffect, useState } from 'react';

const AllShoe = () => {
    const {data: session } = useSession();
    const [shoes, setShoes] = useState([]);
    const [filteredShoe, setFilteredShoe] = useState([]);
    const [count, setCount]=useState(0);
    const [shoePerPage, setShoePerPage] = useState(10);
    const numberOfPages =Math.ceil(count/shoePerPage);
    const pages =[];
    for(let i =0; i<numberOfPages;i++){
        pages.push(i)
    }
        
    console.log(pages)
    const loadShoes = async()=>{
        const res =await fetch('http://localhost:3000/AllShoe/api/get-all')
        const data = await res.json();
        console.log(data)
        setShoes(data)
        setFilteredShoe(data)
    }

    const loadCount = async()=>{
        const res =await fetch('http://localhost:3000/AllShoe/api/get-total')
        const data = await res.json();
        setCount(data.count)
    }
    useEffect(()=>{
            loadCount()
            loadShoes()
    },[session])

    const handleInputChange=(e)=>{
        const searchText = e.target.value;
        const filtered = shoes.filter(shoe =>shoe.shoeName.toLowerCase().includes(searchText.toLowerCase()));
        console.log(filtered)
        setFilteredShoe(filtered);
    }

    const handleShoePerPage=(e: React.ChangeEvent<HTMLSelectElement>)=>{
        console.log(e.target.value)
        setShoePerPage(parseInt(e.target.value))
    }

    return (
        <div className='mt-20 px-10'>
            <h1 className='text-3xl text-center font-semibold py-10'>Discover the Latest Trends in Shoes</h1>
            <div className='text-center mb-3'>
                <input onChange={handleInputChange} className='border-2 w-25 py-2 px-2' type="text" placeholder='Search...'/>
            </div>
           <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5'>
            {
                filteredShoe?.map((shoe, index) => (<ShoeCard key={index} shoe={shoe}/>))
            }
           </div>
           <div className="text-center mb-40">
            {
                pages.map(page => <button key={page} className='px-3 py-2 mr-10'>{page}</button>)
            }
            <select value={shoePerPage} onChange={handleShoePerPage} name="" id="">
                <option value="5">5</option>
                <option value="10">10</option>
                <option value="20">20</option>
                <option value="50">50</option>
            </select>
           </div>
        </div>
    );
};

export default AllShoe;