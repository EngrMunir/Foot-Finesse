import Image from 'next/image';
import collectionImg from '../../public/assets/lc.jpg';

function LatestCollection() {
  return (
    <section className='mx-auto grid max-w-7xl grid-cols-2 items-center gap-5 py-20'>
      <div className='flex'>
        <div className='group relative'>
          <div className='absolute inset-0 h-[544px] w-[520px] rounded-t-[235px] border border-black duration-700 group-hover:mr-8 group-hover:mt-8'></div>
          <div className='relative z-10 duration-700 group-hover:mb-8 group-hover:ml-8'>
            <Image
              src={collectionImg}
              alt='shoe collection'
              height={520}
              width={520}
              className='rounded-t-[235px]'
            />
          </div>
        </div>
      </div>
      <div>
        <h2 className='text-6xl font-semibold'>Discover Our Latest Collection</h2>
      </div>
    </section>
  );
}

export default LatestCollection;
