import Image from 'next/image'
import React from 'react'

function page() {
  return (
    <>
    <div className="container mx-auto">
    <div className="relative rounded-3xl">
          <Image
            className="rounded-3xl"
            src={"https://i.ibb.co.com/N3DtB5T/Untitled-design-4.png"}
            layout="responsive"
            width={1280}
            height={280}
            alt="Shoe"
          />
          <p className="text-6xl font-bold absolute top-[38%] left-[15%] text-white">
            Blogs
          </p>
        </div>

        {/* blog card and sidebar holder */}
        <div className='flex gap-10 mt-10'>
            {/* siderbar */}

            <div className='w-[30%]'>
                {/* search box */}
                <div>
                    <p className='text-2xl mb-5 font-medium'>Search</p>
                    <div className="relative">
                    <input
                        type="text"
                        className="border border-secondary focus:outline-none focus:border-secondary rounded-lg w-full py-3 px-4 pr-12 bg-inherit"
                        placeholder="Search..."
                    />
                    
                    <button className="absolute inset-y-0 right-0 flex items-center pr-4">
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        className="w-6 h-6 text-gray-500 hover:text-gray-700"
                        >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1114.5 3a7.5 7.5 0 012.15 14.15z"
                        />
                        </svg>
                    </button>
                    </div>
                </div>
                {/*  category */}
                <div className='mt-5'>
                <p className='text-2xl font-medium'>Categories</p>
                <div className="divider h-[2px] mt-3 mb-5 bg-secondary"></div>
                <div className='grid  gap-4'>
                    <button className='text-xl px-4 py-1 hover:bg-primary hover:text-white duration-300 rounded-lg border border-secondary'>Nike</button>
                    <button className='text-xl px-4 py-1 hover:bg-primary rounded-lg border  hover:text-white duration-300 border-secondary'>Woodland</button>
                    <button className='text-xl px-4 py-1 hover:bg-primary rounded-lg border  hover:text-white duration-300 border-secondary'>adidas</button>
                    <button className='text-xl px-4 py-1 hover:bg-primary rounded-lg border  hover:text-white duration-300 border-secondary'>Red chip</button>
                    <button className='text-xl px-4 py-1 hover:bg-primary rounded-lg border  hover:text-white duration-300 border-secondary'>Puma</button>
                    <button className='text-xl px-4 py-1 hover:bg-primary rounded-lg border  hover:text-white duration-300 border-secondary'>Reebok</button>
                    <button className='text-xl px-4 py-1 hover:bg-primary rounded-lg border  hover:text-white duration-300 border-secondary'>Skechers</button>                
                </div>
                <div className="divider h-[2px] my-5 bg-secondary"></div>

                {/* img */}
                <Image className='rounded-2xl mt-10' src={"https://i.ibb.co.com/g9RDRB0/shoe.jpg"} width={450} height={555} alt='shoe' layout="responsive"/>
                {/* tags */}
                <div className='mt-5'>
                <p className='text-2xl font-medium'>Tags</p>
                <div className="divider h-[2px] mt-3 mb-5 bg-secondary"></div>
                <div className='grid grid-cols-2 gap-4'>
                <button className='text-xl px-4 py-1 hover:bg-primary rounded-lg border  hover:text-white duration-300 border-secondary'>Shoes</button>  
                <button className='text-xl px-4 py-1 hover:bg-primary rounded-lg border  hover:text-white duration-300 border-secondary'>Fotwear</button>  
                <button className='text-xl px-4 py-1 hover:bg-primary rounded-lg border  hover:text-white duration-300 border-secondary'>Shoetrends</button>  
                <button className='text-xl px-4 py-1 hover:bg-primary rounded-lg border  hover:text-white duration-300 border-secondary'>FashionShoes</button>  
                <button className='text-xl px-4 py-1 hover:bg-primary rounded-lg border  hover:text-white duration-300 border-secondary'>Sandals</button>  
                <button className='text-xl px-4 py-1 hover:bg-primary rounded-lg border  hover:text-white duration-300 border-secondary'>Boots</button>  
                <button className='text-xl px-4 py-1 hover:bg-primary rounded-lg border  hover:text-white duration-300 border-secondary'>SportsShoes</button>  
    </div>
                </div>
                </div>
            </div>

            {/* blog cards golder */}
            <div className='w-[70%]'>
            <div className='grid grid-cols-2 gap-2'>
                {/* single blog card */}
                <div className='p-5 border border-secondary rounded-lg'>
                    <Image src={"https://i.ibb.co.com/GvfMFQC/pic2.jpg"} alt='shoe' width={400} height={300} layout='responsive'/>
                    <p className='text-secondary text-xl mt-3'>Step Into Style</p>
                    <p className='text-3xl font-semibold'>The latest shoe trends for</p>
                    <div className='my-3 flex items-center gap-3'>
                    <Image src={"https://i.ibb.co.com/GvfMFQC/pic2.jpg"} alt='avatar' width={40} height={40}  className='rounded-full'/>
                    <p>By Tahid</p>
                    </div>
                    <p>It is a long established fact that reader will be distracted by that looking fact readable content of a page looking at its layout. web page editors now english.</p>
                    <button className="border border-secondary px-5 py-2 mt-5 rounded-md bg-primary text-white transition-colors duration-300 hover:border-white hover:text-white">
                  Read More
                </button>
                </div>
            </div>
            </div>
            
        </div>
    </div>
    </>
  )
}

export default page