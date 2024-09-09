import Image from 'next/image';
import collectionImg from '../../public/assets/lc.jpg';

const products: { id: number; name: string; image: string; price: number }[] = [
  {
    id: 1,
    name: 'Nano Gym Shoes',
    image: 'https://res.cloudinary.com/ahad-ali/image/upload/v1723818839/rebook_1_qhcfvz.webp',
    price: 240,
  },
  {
    id: 2,
    name: 'Nano X4 Training Shoes',
    image: 'https://res.cloudinary.com/ahad-ali/image/upload/v1723868834/rebook_4_mtfsfi.webp',
    price: 248,
  },
  {
    id: 3,
    name: 'FloatZig 1 Shoes',
    image: 'https://res.cloudinary.com/ahad-ali/image/upload/v1723868834/rebook_3_rqjuud.webp',
    price: 343,
  },
  {
    id: 4,
    name: 'Classic Leather 2400 Shoes',
    image: 'https://res.cloudinary.com/ahad-ali/image/upload/v1723868834/rebook_2_x7desy.webp',
    price: 290,
  },
  {
    id: 5,
    name: 'Classic Leather 2400 Shoes',
    image: 'https://res.cloudinary.com/ahad-ali/image/upload/v1723868834/rebook_5_wcfjsj.webp',
    price: 223,
  },
];

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
        <div></div>
      </div>
    </section>
  );
}

export default LatestCollection;
