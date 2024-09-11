import Image from 'next/image';
import React from 'react';
import { GoPlus } from 'react-icons/go';
import { PiMinusLight } from 'react-icons/pi';

interface shoe {
  _id: string;
  id: number;
  image: string;
  discountPrice: number;
  shoeName: string;
  quantity: number;
}

interface CartProps {
  shoe: shoe;
  idx: number;
  length: number;
}

const Cart = ({ shoe, idx, length }: CartProps) => {
  const { image, id, discountPrice, shoeName } = shoe;

  const deleteCart = (id: number) => {};
  const updateQuantityOfProduct = (id: number, value: boolean) => {};
  console.log(shoe);

  return (
    <div>
      <div className='flex justify-between gap-4'>
        <div className='flex gap-5'>
          <div className='flex flex-col items-center gap-3 md:flex-row'>
            <div className='flex items-center gap-1 rounded-lg border px-2 py-3'>
              <button onClick={() => updateQuantityOfProduct(id, false)}>
                <PiMinusLight className='ml-auto cursor-pointer text-3xl text-[#939393]' />
              </button>
              <h5 className='text-xl font-semibold text-black'>{'4'}</h5>
              <button onClick={() => updateQuantityOfProduct(id, true)}>
                <GoPlus className='ml-auto cursor-pointer text-3xl text-[#939393]' />
              </button>
            </div>
            <div className='relative h-32 w-32 bg-cover'>
              <Image
                className='w-full rounded-md border bg-[#EAEAEA] p-1'
                src={image}
                alt='asdf'
                layout='fill'
                objectFit='cover'
              />
            </div>
          </div>
          <h3 className='items-start justify-start text-base font-bold text-[#434343]'>
            {shoeName}
          </h3>
        </div>
        <div className='flex flex-col justify-between'>
          <GoPlus
            onClick={() => deleteCart(_id)}
            className='ml-auto rotate-45 cursor-pointer text-3xl text-[#939393]'
          />
          <p className='text-xl font-semibold text-black'>€{discountPrice}</p>
        </div>
      </div>

      {idx + 1 === length ? '' : <div className='divider my-5 border-none border-[#F4F4F4]'></div>}
    </div>
  );
};

export default Cart;
