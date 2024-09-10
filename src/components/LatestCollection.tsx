'use client';
import Image from 'next/image';
import collectionImg from '../../public/assets/lc.jpg';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { BiPlus } from 'react-icons/bi';
import { FaInstagram, FaLinkedin } from 'react-icons/fa';
import { FaFacebook } from 'react-icons/fa6';
import { Autoplay } from 'swiper/modules';

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
    name: 'Classic Leather 2400',
    image: 'https://res.cloudinary.com/ahad-ali/image/upload/v1723868834/rebook_2_x7desy.webp',
    price: 290,
  },
  {
    id: 5,
    name: 'Classic Leather 2400',
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
        <div className='ps-1'>
          <Swiper
            slidesPerView={2}
            speed={1200}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            loop={true}
            spaceBetween={20}
            modules={[Autoplay]}
            className='mySwiper'
          >
            {products?.map((product) => (
              <SwiperSlide key={product.id}>
                <div className='mt-10 border border-black'>
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={304}
                    height={320}
                    className='border-b border-gray-700'
                  />
                  <div className='flex items-center justify-between p-4'>
                    <div>
                      <h3 className='text-lg font-medium'>{product.name}</h3>
                      <p className='mt-2 text-lg font-bold text-red-500'>
                        ${product.price} <del className='font-light text-gray-500'>$999</del>
                      </p>
                    </div>
                    <div>
                      <div className='group relative'>
                        <div className='absolute bottom-12 z-10 mb-0 flex flex-col gap-0 opacity-0 duration-500 group-hover:mb-3 group-hover:gap-3 group-hover:opacity-100'>
                          <button className='btn btn-square rounded-none bg-white text-black hover:bg-transparent'>
                            <FaLinkedin className='text-xl' />
                          </button>
                          <button className='btn btn-square rounded-none bg-white text-black hover:bg-transparent'>
                            <FaInstagram className='text-xl' />
                          </button>
                          <button className='btn btn-square rounded-none bg-white text-black hover:bg-transparent'>
                            <FaFacebook className='text-xl' />
                          </button>
                        </div>
                        <button className='btn btn-square rounded-none border-none bg-gray-500'>
                          <BiPlus className='p-0 text-4xl text-white duration-500 group-hover:rotate-45' />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}

export default LatestCollection;
