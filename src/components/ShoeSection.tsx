'use client';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { Button, Modal } from 'antd';
import ShoeCard from './ShoeCard';

const ShoeSection = () => {
  
  const [shoes, setShoes] = useState([]);
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
      {shoes?.map((shoe,index) => <ShoeCard shoe={shoe} key={index}/>)}
    </div>
  );
};

export default ShoeSection;
