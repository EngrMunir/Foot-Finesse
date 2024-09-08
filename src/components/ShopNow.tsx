// import showNowBg from '../../public/assets/shopnow-bg.jpg';

function ShopNow() {
  return (
    <section className={`my-20 min-h-[700px] bg-[url('../../public/assets/shopnow-bg.jpg')]`}>
      <div className='mx-auto max-w-7xl px-2'>
        <div className='max-w-80 pt-16'>
          <h4 className='text-3xl font-light'>Casual Sport Shoes</h4>
          <h2 className='mt-6 text-[90px] font-medium leading-none'>
            2024 Reebok The Best Classical
          </h2>
        </div>
        <div>
          <button className='group btn relative mt-6 rounded-none bg-black border-black text-white hover:bg-transparent'>
            <p className='z-10 text-xl duration-500 group-hover:text-black'>Shop Now</p>
            <span className='absolute inset-0 w-0 bg-white  duration-500 group-hover:w-full'></span>
          </button>
        </div>
      </div>
    </section>
  );
}

export default ShopNow;
