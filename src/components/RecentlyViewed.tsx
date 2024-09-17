'use client';
import { useSession } from 'next-auth/react';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';

interface Product {
  _id: string;
  name: string;
  discountPrice: number;
  image: string;
  price: number;
  shortDescription: string;
}

const RecentlyViewed: React.FC = () => {
  const { data: session } = useSession();
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchRecentlyViewedProducts = async () => {
      const email = session?.user?.email;
      if (email) {
        const res = await fetch(`/api/recentlyViewed?email=${encodeURIComponent(email)}`);
        const data = await res.json();
        setProducts(data);
      }
    };

    if (session?.user?.email) {
      fetchRecentlyViewedProducts();
    }
  }, [session]);

  return (
    <div className='container mx-auto max-w-7xl'>
      <h2 className='mb-10 text-3xl font-medium lg:text-6xl'>Recently Viewed Products</h2>
      <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
        {products.map((product) => (
          <div key={product._id} className='rounded-md border p-4'>
            <div className='relative h-48 w-full'>
              <Image
                src={product.image}
                alt={product.name}
                layout='fill'
                objectFit='cover'
                className='rounded-md'
              />
            </div>
            <h3 className='mt-2 text-lg font-semibold'>{product.name}</h3>
            <p className='mt-1 text-sm'>{product.shortDescription}</p>
            <div className='mt-2'>
              <p className='text-xl font-bold text-[#DF2626]'>${product.discountPrice}</p>
              <p className='text-base font-bold line-through'>${product.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentlyViewed;
