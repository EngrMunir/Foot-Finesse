/* eslint-disable react-hooks/rules-of-hooks */
'use client';
import { useSession } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

interface Blog {
  _id: string;
  id: number;
  blogImage: string;
  category: string;
  title: string;
  author: {
    name: string;
    img: string;
  };
  description: string;
}

function page() {
  const { data: session } = useSession();
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  // const [category, setCategory] = useState('');

  const loadBlogs = async () => {
    const res = await fetch(`http://localhost:3000/blog/api/get-blog?name=${searchQuery}`);
    const data = await res.json();
    console.log(data);
    setBlogs(data);
  };
  useEffect(() => {
    loadBlogs();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [session, searchQuery]);

  return (
    <>
      <div className='container mx-auto'>
        <div className='relative rounded-3xl'>
          <Image
            className='rounded-3xl'
            src={'https://i.ibb.co.com/N3DtB5T/Untitled-design-4.png'}
            layout='responsive'
            width={1280}
            height={280}
            alt='Shoe'
          />
          <p className='absolute left-[15%] top-[38%] text-6xl font-bold text-white'>Blogs</p>
        </div>

        {/* blog card and sidebar holder */}
        <div className='mt-10 flex gap-10'>
          {/* siderbar */}
          <div className='w-[30%]'>
            {/* search box */}
            <div>
              <p className='mb-5 text-2xl font-medium'>Search</p>
              <div className='relative'>
                <input
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  type='text'
                  className='w-full rounded-lg border border-secondary bg-inherit px-4 py-3 pr-12 focus:border-secondary focus:outline-none'
                  placeholder='Search...'
                />

                <button className='absolute inset-y-0 right-0 flex items-center pr-4'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    strokeWidth={2}
                    stroke='currentColor'
                    className='h-6 w-6 text-gray-500 hover:text-gray-700'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M21 21l-4.35-4.35m0 0A7.5 7.5 0 1114.5 3a7.5 7.5 0 012.15 14.15z'
                    />
                  </svg>
                </button>
              </div>
            </div>
            {/*  category */}
            <div className='mt-5'>
              <p className='text-2xl font-medium'>Popular Category</p>
              <div className='divider mb-5 mt-3 h-[2px] bg-secondary'></div>
              <div className='grid'>
                <div className='flex items-center justify-between py-3'>
                  <p className='hover:text-[#d72424]'>Nike</p>
                  <p className=''>1500</p>
                </div>
                <div className='divider mt-0 h-[1px]'></div>
                <div className='flex items-center justify-between py-3'>
                  <p className='hover:text-[#d72424]'>Woodland</p>
                  <p className=''>250</p>
                </div>
                <div className='divider mt-0 h-[1px]'></div>
                <div className='flex items-center justify-between py-3'>
                  <p className='hover:text-[#d72424]'>Adidas</p>
                  <p className=''>1900</p>
                </div>
                <div className='divider mt-0 h-[1px]'></div>
                <div className='flex items-center justify-between py-3'>
                  <p className='hover:text-[#d72424]'>Red chip</p>
                  <p className=''>450</p>
                </div>
                <div className='divider mt-0 h-[1px]'></div>
                <div className='flex items-center justify-between py-3'>
                  <p className='hover:text-[#d72424]'>Puma</p>
                  <p className=''>600</p>
                </div>
                <div className='divider mt-0 h-[1px]'></div>
                <div className='flex items-center justify-between py-3'>
                  <p className='hover:text-[#d72424]'>Reebok</p>
                  <p className=''>150</p>
                </div>
              </div>
              <div className='divider my-5 h-[2px] bg-secondary'></div>

              {/* img */}
              <Image
                className='mt-10 rounded-2xl'
                src={'https://i.ibb.co.com/g9RDRB0/shoe.jpg'}
                width={450}
                height={555}
                alt='shoe'
                layout='responsive'
              />
              {/* tags */}
              <div className='mt-5'>
                <p className='text-2xl font-medium'>Tags</p>
                <div className='divider mb-5 mt-3 h-[2px] bg-secondary'></div>
                <div className='grid grid-cols-2 gap-4'>
                  <button className='rounded-lg border border-secondary px-4 py-1 text-xl duration-300 hover:bg-primary hover:text-white'>
                    Shoes
                  </button>
                  <button className='rounded-lg border border-secondary px-4 py-1 text-xl duration-300 hover:bg-primary hover:text-white'>
                    Fotwear
                  </button>
                  <button className='rounded-lg border border-secondary px-4 py-1 text-xl duration-300 hover:bg-primary hover:text-white'>
                    Shoetrends
                  </button>
                  <button className='rounded-lg border border-secondary px-4 py-1 text-xl duration-300 hover:bg-primary hover:text-white'>
                    FashionShoes
                  </button>
                  <button className='rounded-lg border border-secondary px-4 py-1 text-xl duration-300 hover:bg-primary hover:text-white'>
                    Sandals
                  </button>
                  <button className='rounded-lg border border-secondary px-4 py-1 text-xl duration-300 hover:bg-primary hover:text-white'>
                    Boots
                  </button>
                  <button className='rounded-lg border border-secondary px-4 py-1 text-xl duration-300 hover:bg-primary hover:text-white'>
                    SportsShoes
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* blog cards holder */}
          <div className='w-[70%]'>
            <div className='grid grid-cols-2 gap-2'>
              {/* single blog card */}
              {blogs.map((blog) => (
                <div key={blog.id} className='rounded-lg border border-secondary p-5'>
                  <Image
                    src={blog.blogImage}
                    alt='shoe'
                    width={400}
                    height={300}
                    layout='responsive'
                  />
                  <p className='mt-3 text-xl text-secondary'>{blog.category}</p>
                  <p className='text-3xl font-semibold'>{blog.title}</p>
                  <div className='my-3 flex items-center gap-3'>
                    <Image
                      src={blog.author.img}
                      alt='avatar'
                      width={40}
                      height={40}
                      className='rounded-full'
                    />
                    <p>By {blog.author.name}</p>
                  </div>
                  <p>{blog.description}</p>
                  <button className='mt-5 rounded-md border border-secondary bg-primary px-5 py-2 text-white transition-colors duration-300 hover:border-white hover:text-white'>
                    <Link href={`/blog/${blog._id}`}>See More</Link>
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default page;
