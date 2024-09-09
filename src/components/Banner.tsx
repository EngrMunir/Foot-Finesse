function Banner() {
  return (
    <div className='relative min-h-screen'>
      <video className='h-full w-full' autoPlay loop muted>
        <source
          src='https://res.cloudinary.com/ahad-ali/video/upload/v1725796675/bg-video2_t3g0kl.mp4'
          type='video/mp4'
        />
      </video>
      <div className='absolute bottom-40 left-1/2 z-20 w-full -translate-x-1/2 text-center'>
        <h1 className='text-[120px] font-medium italic leading-none text-white'>
          Bays cant start with out perfect shoes.
        </h1>
        <button className='group btn btn-outline relative mt-6 rounded-none border-white text-white hover:bg-transparent'>
          <p className='z-10 text-xl font-light group-hover:text-black'> View All Collection</p>
          <span className='absolute inset-0 w-0 bg-white duration-500 group-hover:w-full'></span>
        </button>
      </div>
      <span className='absolute inset-0 h-full w-full bg-black opacity-20'></span>
    </div>
  );
}

export default Banner;
