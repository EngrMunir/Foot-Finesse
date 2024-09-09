// 'use client';
// import axios from 'axios';
// import React, { useEffect, useState } from 'react';
// import { HiOutlineInformationCircle } from 'react-icons/hi';
// interface Shoe {
//   _id: string;
//   id: number;
//   category: string;
//   shoeName: string;
//   price: number;
//   discountPrice: number;
//   shortDescription: string;
//   rating: number;
//   image: string;
// }

// const CartPage = () => {
//   const grandTotal = 2314;
//   const [shoes, setShoes] = useState<Shoe[]>([]);

//   const getShoes = async () => {
//     const res = await axios.get('http://localhost:3000/api/shoeCard');
//     setShoes(res.data);
//   };

//   useEffect(() => {
//     getShoes();
//   }, []);

//   return (
//     <div className='mb-24 mt-5 border-t'>
//       <div className='mx-auto max-w-[1440px] pt-9'>
//         <div className='lg:flow-row mx-auto flex w-[90%] flex-col gap-20 lg:w-[85%] lg:flex-row'>
//           {/* cards */}
//           <div className='flex-1'>
//             <h3 className='text-2xl font-semibold'>An overview of your order</h3>

//             {/* single cards */}
//             <div className='gap mt-9 flex flex-col rounded-xl bg-[#FAFAFA] p-6'>
//               {shoes?.map((shoe) => <div key={shoe._id}>{shoe.shoeName}</div>)}
//             </div>
//           </div>

//           {/* order details part */}
//           <div>
//             <h3 className='text-2xl font-semibold'>Oder details</h3>
//             <div className=''>
//               <div className='mb-4 mt-9 w-full rounded-xl border bg-[#FAFAFA] p-5 text-lg font-semibold *:w-full md:w-80'>
//                 <div className='flex justify-between text-lg font-normal text-[#656565]'>
//                   <h5>Subtotal</h5>
//                   <p>€ {grandTotal.toFixed(2)}</p>
//                 </div>
//                 <div className='mt-2 flex justify-between text-lg font-normal text-[#656565]'>
//                   <h5>Shipping</h5>
//                   <p>Free</p>
//                 </div>
//                 <div className='mt-2 flex justify-between border-b pb-4 text-lg font-normal text-[#656565]'>
//                   <h5 className='flex items-center gap-2'>
//                     Estimated Tax <HiOutlineInformationCircle className='text-xl' />
//                   </h5>
//                   <p>€ 0</p>
//                 </div>
//                 <div>
//                   <div className='mt-1 flex justify-between pt-4 text-xl font-semibold text-[#656565]'>
//                     <h5 className='flex items-center gap-2 text-[#656565]'>Total</h5>
//                     <p className='text-black'>€ {grandTotal.toFixed(2)}</p>
//                   </div>
//                 </div>
//               </div>
//               <button className='w-full bg-black text-base font-medium text-white shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100'>
//                 <span className='-mb-1'>Go to Checkout</span>
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CartPage;
