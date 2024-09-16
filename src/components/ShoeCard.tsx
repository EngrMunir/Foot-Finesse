import { useSession } from 'next-auth/react';
import Image from 'next/image';
import React, { useState } from 'react';
import { Button, Modal } from 'antd';
import { SiSouthwestairlines } from 'react-icons/si';

interface ShoeCardProps {
  shoe: {
    id: number;
    name: string;
    discountPrice: number;
    image: string;
    price: number;
    category: string;
    shortDescription: string;
    shoeName: string;
  };
}

const ShoeCard: React.FC<ShoeCardProps> = ({ shoe }) => {
  const session = useSession();
  const { id, image, price, discountPrice, shortDescription, category, shoeName } = shoe;
  const [modal2Open, setModal2Open] = useState(false);
  const [size, setSize] = useState<number | null>(null);
  const [loading, setLoading] = useState(false);
  const sizes = [4, 4.5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5];

  const addToRecentlyViewed = async (id: number) => {
    if (session.status === 'authenticated') {
      const email = session.data?.user?.email;

      if (email) {
        setLoading(true);
        try {
          const res = await fetch('/api/recentlyViewed', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, productId: id }),
          });

          if (!res.ok) {
            throw new Error('Failed to add to recently viewed');
          }

          const data = await res.json();
          console.log(data);
        } catch (error) {
          console.error('Error adding recently viewed:', error);
        } finally {
          setLoading(false);
        }
      }
    }
  };

  return (
    <div>
      <div className='group'>
        <div className='relative h-60 w-full rounded-md bg-cover'>
          <div className='absolute bottom-5 left-7 z-10 mt-5 flex scale-y-0 items-center font-medium opacity-0 transition-all duration-500 ease-out group-hover:scale-y-100 group-hover:opacity-100'>
            <Button
              className='mr-2 w-fit rounded-[4px] border bg-white px-7 py-5 text-sm uppercase leading-4 text-black shadow-2xl duration-500 hover:border-[#DF2626]'
              onClick={() => {
                setModal2Open(true);
                addToRecentlyViewed(id);
              }}
              loading={loading}
            >
              Quick View
            </Button>
            <Modal centered open={modal2Open} onCancel={() => setModal2Open(false)}>
              <div className='flex gap-8'>
                <div className='relative flex-1'>
                  <Image
                    src={image}
                    alt={shoeName}
                    layout='fill'
                    objectFit='cover'
                    className='z-0 h-full w-full rounded-md'
                  />
                </div>
                <div className='flex-1'>
                  <h4 className='text-base font-semibold uppercase text-gray-500'>{category}</h4>
                  <h1 className='text-2xl font-semibold uppercase italic text-black'>{shoeName}</h1>
                  <p className='mt-2 text-base font-semibold text-gray-500'>{shortDescription}</p>
                  <h5 className='text-2xl font-medium uppercase text-black'>${price}</h5>
                  <p className='mb-4 mt-6 text-sm font-semibold uppercase text-gray-600'>SIZE</p>
                  <div className='flex flex-wrap gap-2'>
                    {sizes.map((s) => (
                      <button
                        key={s}
                        onClick={() => setSize(s)}
                        className={`cursor-pointer rounded-md border border-gray-300 px-4 py-2 hover:border-black ${
                          s === size ? 'bg-black text-white' : 'hover:border-black'
                        }`}
                      >
                        {s}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </Modal>
            <button className='w-fit rounded-[4px] border bg-white px-3 py-3 text-sm uppercase leading-4 text-black shadow-2xl duration-500 hover:border-[#DF2626] active:bg-[#DF2626]'>
              <SiSouthwestairlines />
            </button>
          </div>
          <Image
            src={image}
            alt={shoeName}
            layout='fill'
            objectFit='cover'
            className='z-0 h-full w-full'
          />
        </div>
        <div className='mt-6'>
          <h3 className='z-50 w-fit cursor-pointer text-lg font-semibold duration-300 hover:text-[#DF2626]'>
            {shoeName}
          </h3>
          <div className='mt-2 flex items-end gap-1'>
            <p className='text-xl font-bold text-[#DF2626]'>${discountPrice}</p>
            <p className='text-base font-bold italic line-through'>${price}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShoeCard;
