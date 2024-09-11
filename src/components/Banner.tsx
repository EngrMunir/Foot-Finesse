function Banner() {
  return (
    <div className='lg:relative lg:min-h-screen'>
      <video className='h-full w-full object-cover' autoPlay loop muted>
        <source
          src='https://res.cloudinary.com/ahad-ali/video/upload/v1725796675/bg-video2_t3g0kl.mp4'
          type='video/mp4'
        />
      </video>
      <div className='bottom-40 w-full text-center lg:absolute lg:left-1/2 lg:z-20 lg:-translate-x-1/2'>
        <h1 className='text-3xl font-medium italic leading-none text-white lg:text-[120px]'>
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
