'use client';
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
  const [shoes, setShoes] = useState<Shoe[]>([]);
  const getShoes = async () => {
    const res = await fetch('http://localhost:3000/api/shoeCard');
    const data = await res.json();
    console.log(data);
    setShoes(data);
  };
  console.log(shoes);
  useEffect(() => {
    getShoes();
  }, []);
  return (
    <div className='mx-auto mt-10 grid max-w-[1440px] grid-cols-1 gap-9 px-5 md:grid-cols-2 lg:grid-cols-3 lg:px-0'>
      {shoes?.map((shoe) => (
        <div key={shoe._id} className='group relative cursor-zoom-in'>
          <div className='absolute z-0 h-full w-full scale-100 border border-black opacity-0 transition-all duration-1000 group-hover:scale-110 group-hover:opacity-100'></div>
          <div className='z-10'>
            <div className='relative h-64 w-full bg-cover'>
              <Image
                src={shoe.image}
                alt={shoe.shoeName}
                layout='fill'
                objectFit='cover'
                className='w-full'
              />
            </div>
            <h3 className='z-10 mt-5 text-sm duration-300 hover:text-[#DF2626]'>{shoe.category}</h3>
            <h3 className='z-50 w-fit cursor-pointer text-base font-semibold duration-300 hover:text-[#DF2626]'>
              {shoe.shoeName}
            </h3>
            <div className='mt-2 flex items-end gap-1'>
              <p className='text-xl font-bold text-[#DF2626]'>${shoe.discountPrice}</p>
              <p className='text-base font-bold italic line-through'>${shoe.price}</p>
            </div>
            <div className='mt-5 flex scale-y-0 items-center font-medium opacity-0 transition-all duration-500 ease-out group-hover:scale-y-100 group-hover:opacity-100'>
              <button className='z-10 mr-2 rounded-[4px] border border-black px-6 py-2 leading-4 text-black shadow-2xl duration-500 hover:border-[#DF2626] hover:bg-[#DF2626] hover:text-white'>
                ADD TO <span className='block'>CARD</span>
              </button>
              <button className='z-10 rounded-[4px] bg-black px-6 py-2 uppercase leading-4 text-white shadow-2xl duration-500 hover:bg-[#DF2626] hover:text-white hover:shadow-lg'>
                Add to <br /> Wishlist
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ShoeSection;
