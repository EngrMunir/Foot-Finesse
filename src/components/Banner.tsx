function Banner() {
  return (
    <div className='relative lg:min-h-screen'>
      <video className='h-full w-full' autoPlay loop muted>
        <source
          src='https://res.cloudinary.com/ahad-ali/video/upload/v1725796675/bg-video2_t3g0kl.mp4'
          type='video/mp4'
        />
      </video>
      <div className='absolute bottom-[1.5rem] left-1/2 z-20 w-full -translate-x-1/2 text-center lg:bottom-40'>
        <h1 className='text-2xl font-medium italic leading-none text-white lg:text-[120px]'>
          Bays cant start with out perfect shoes.
        </h1>
        <button className='group btn btn-outline relative mt-3 rounded-none border-white text-white hover:bg-transparent lg:mt-6'>
          <p className='z-10 font-light group-hover:text-black lg:text-xl'> View All Collection</p>
          <span className='absolute inset-0 w-0 bg-white duration-500 group-hover:w-full'></span>
        </button>
      </div>
      <span className='absolute inset-0 hidden h-full w-full bg-black opacity-20 lg:flex'></span>
    </div>
  );
}

export default Banner;
