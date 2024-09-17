// import showNowBg from '../../public/assets/shopnow-bg.jpg';

import Link from "next/link";

function ShopNow() {
  return (
    <section
      className={`my-20 min-h-[240px] bg-[url('../../public/assets/shopnow-bg.jpg')] bg-cover bg-center lg:min-h-[700px]`}
    >
      <div className='mx-auto max-w-7xl px-3'>
        <div className='max-w-80 pt-8 lg:pt-16'>
          <h4 className='text-2xl font-light lg:text-3xl'>Casual Sport Shoes</h4>
          <h2 className='mt-6 text-3xl font-medium leading-none lg:text-[90px]'>
            2024 Reebok The Best Classical
          </h2>
        </div>
        <div>
          <button className='group btn relative mt-6 rounded-none border-black bg-black text-white hover:bg-transparent'>
           <Link href={"/AllShoe"}> <p className='z-10 text-xl duration-500 group-hover:text-black'>Shop Now</p></Link>
            <span className='absolute inset-0 w-0 bg-white duration-500 group-hover:w-full'></span>
          </button>
        </div>
      </div>
    </section>
  );
}

export default ShopNow;
