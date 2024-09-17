import { Fragment } from 'react';
import { Dialog, Transition, TransitionChild, DialogPanel } from '@headlessui/react';
import Image from 'next/image';
import { AiTwotoneMail } from 'react-icons/ai';
import comImagee from "../../public/AboutUs/Image/adv-2.png"


const TakeSubscriptionModal = ({ setIsOpen, isOpen }) => {
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as='div' className='relative z-50' onClose={() => setIsOpen(false)}>
        <TransitionChild
          as={Fragment}
          enter='ease-out duration-300'
          enterFrom='opacity-0'
          enterTo='opacity-100'
          leave='ease-in duration-200'
          leaveFrom='opacity-100'
          leaveTo='opacity-0'
        >
          <div className='fixed inset-0 bg-black bg-opacity-25' />
        </TransitionChild>

        <div className='fixed inset-0 overflow-y-auto'>
          <div className='flex min-h-full z-50 items-center justify-center p-4 text-center'>
            <TransitionChild
              as={Fragment}
              enter='ease-out duration-300'
              enterFrom='opacity-0 scale-95'
              enterTo='opacity-100 scale-100'
              leave='ease-in duration-200'
              leaveFrom='opacity-100 scale-100'
              leaveTo='opacity-0 scale-95'
            >
              <DialogPanel className='relative z-50 h-2/6 w-full max-w-4xl transform overflow-hidden rounded-2xl border bg-gradient-to-t from-[#040404]/10 to-[#040404]/0 p-6 text-left align-middle text-white shadow-xl backdrop-blur-xl transition-all'>
                <div>
                  <div>
                    <div className='z-50'>
                      <div className='grid z-50 grid-cols-1 lg:grid-cols-2 items-center justify-center p-8 text-center'>
                        <div className=''>
                          {/* Button */}
                          <button onClick={() => setIsOpen(false)} className='btn btn-circle btn-outline'>
                            <svg
                              xmlns='http://www.w3.org/2000/svg'
                              className='h-6 w-6'
                              fill='none'
                              viewBox='0 0 24 24'
                              stroke='currentColor'
                            >
                              <path
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                strokeWidth='2'
                                d='M6 18L18 6M6 6l12 12'
                              />
                            </svg>
                          </button>

                          {/* Inpute section */}
                          <div className='p-6'>
                            <div className='mx-auto max-w-screen-xl'>
                              <div className='text-center'>
                                <h2 className='text-2xl font-extrabold text-white sm:text-3xl'>
                                  Off 50% Discount Shipped To Your Order
                                </h2>

                                <p className='mx-auto mt-4 max-w-sm text-gray-300'>
                                  Subscribe to our newsletter to receive updates
                                </p>
                              </div>
                            </div>
                          </div>

                          <form action='#' className='space-y-4 rounded-lg sm:p-6 lg:p-8'>
                            <div>
                              <div className='relative'>
                                <input
                                  type='email'
                                  className='w-full rounded-lg text-black border border-black p-4 pe-12 text-sm shadow-sm'
                                  placeholder='Inpute your Email'
                                />

                                <label className='absolute inset-y-0 end-0 grid place-content-center p-2 px-4'>
                                  <AiTwotoneMail />
                                </label>
                              </div>
                            </div>

                            {/* Check Box */}
                            <div className='form-control'>
                              <label className='label cursor-pointer justify-center gap-6'>
                                <input
                                  type='checkbox'
                                  defaultChecked
                                  className='checkbox-error checkbox'
                                />
                                <span className='text-gray-300'>Do Not Show This Pop Up Again</span>
                              </label>
                            </div>

                            {/* Subscibe button */}
                            <div className='grid items-center justify-center text-center'>
                              <a
                                className='group relative inline-block overflow-hidden border border-black px-8 py-3 focus:outline-none focus:ring'
                                href='#'
                              >
                                <span className='absolute inset-y-0 left-0 w-[2px] bg-black transition-all group-hover:w-full group-active:bg-indigo-500'></span>

                                <span className='relative text-sm font-medium text-black transition-colors group-hover:text-white'>
                                  Subscribe
                                </span>
                              </a>
                            </div>
                          </form>
                        </div>

                        {/* Image Section */}
                        <div className='hidden lg:block  rounded-lg p-4 shadow-sm shadow-indigo-100 '>
                          <div className='w-full h-96 bg-cover relative rounded-lg'>
                            <Image
                              layout="fill"  objectFit="cover" className="w-full rounded-lg"
                              alt=''
                              src={comImagee}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default TakeSubscriptionModal;
