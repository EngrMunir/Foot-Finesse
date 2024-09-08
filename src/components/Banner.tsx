function Banner() {
  return (
    <div className='relative min-h-screen'>
      <video className='w-full h-full' autoPlay muted>
        <source
          src='https://res.cloudinary.com/ahad-ali/video/upload/v1725796675/bg-video2_t3g0kl.mp4'
          type='video/mp4'
        />
      </video>
      <div className='absolute w-full text-center bottom-6 left-1/2 -translate-x-1/2'>
        <h1 className='text-[120px] leading-none italic font-bold text-white'>
          Bays cant start with out perfect shoes.
        </h1>
        <button className='group mt-2 text-white border-white hover:bg-transparent btn btn-outline relative rounded-none'>
          <p className='z-10 text-xl'> View All Collection</p>
          <span className='absolute inset-0 duration-500 bg-white w-0 group-hover:w-full'></span>
        </button>
      </div>
    </div>
  );
}

export default Banner;
