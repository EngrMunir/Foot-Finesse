'use client';
import Link from 'next/link';
import { signOut, useSession } from 'next-auth/react';
import { useContext, useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { BiCart, BiLogIn } from 'react-icons/bi';
import { TbShoe } from 'react-icons/tb';
import { FaHeartCirclePlus } from 'react-icons/fa6';
import { CartContext } from '@/providers/CartProvider';
const Navbar = () => {
  const session = useSession();
  console.log(session);
  const pathName = usePathname();
  const [navMoved, setNavMoved] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false); 
  const {cart} = useContext(CartContext)

  useEffect(() => {
    const navStateHandler = () => {
      if (window.scrollY > 100) {
        setNavMoved(true);
      } else {
        setNavMoved(false);
      }
    };

    window.addEventListener('scroll', navStateHandler);

    return () => window.removeEventListener('scroll', navStateHandler);
  }, []);

  const navItems: { title: string; path: string }[] = [
    {
      title: 'Home',
      path: '/',
    },
    {
      title: 'About',
      path: '/about',
    },
    {
      title: 'All Shoe',
      path: '/AllShoe',
    },
    {
      title: 'Services',
      path: '/services',
    },
    {
      title: 'Contacts',
      path: '/contact-us',
    },
  ];
  if (pathName.includes('login') || pathName.includes('signup')) {
    return null;
  }
  console.log(session);

  return (
    <div
      id='nav'
      className={`navbar ${navMoved || pathName !== '/' ? 'fixed top-0 bg-white text-black shadow-2xl lg:top-4' : 'absolute top-0 bg-transparent text-white'} left-1/2 z-50 mx-auto -translate-x-1/2 duration-500 lg:max-w-7xl lg:rounded-full`}
    >
      <div className='navbar-start hidden lg:flex'>
        {/* Mobile Menu --------*/}
        {/* <div className='dropdown'>
            <div tabIndex={0} role='button' className='btn btn-ghost btn-circle'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-5 w-5'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M4 6h16M4 12h16M4 18h7'
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className='menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow'
            >
              <li>
                <a>Homepage</a>
              </li>
              <li>
                <a>Portfolio</a>
              </li>
              <li>
                <a>About</a>
              </li>
            </ul>
          </div> */}
        <ul className='menu menu-horizontal gap-3 px-1'>
          {navItems?.map((navItem) => (
            <li key={navItem.path}>
              <Link
                className='rounded-full text-base font-medium duration-500 hover:bg-orange-200 hover:text-black'
                href={navItem.path}
              >
                {navItem.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className='navbar-center'>
        <Link href={'/'} className='flex items-center'>
          <TbShoe className='me-3 text-3xl' />
          <p className='font-medium'>
            <span className='font-light lg:text-slate-400'>FOOT</span>
            FINESSE
          </p>
        </Link>
      </div>
      <div className='navbar-end hidden lg:flex'>
        {session?.status === 'authenticated' ? (
          <p>
            <Link href='profile'>{session?.data?.user?.name}</Link>
          </p>
        ) : (
          <></>
        )}
        <button className='btn btn-circle btn-ghost'>
          <Link href={'/carts'}>
            <div className='relative'>
              <BiCart className='text-2xl' />
              <p className='absolute bottom-2 right-0 text-xs font-semibold text-red-600 bg-white p-[2px] rounded-full'>
                {cart.length}
              </p>
            </div>
          </Link>
        </button>
        <button className='btn btn-circle btn-ghost mr-2'>
          <Link href={'/wishlist'}>
            {' '}
            <FaHeartCirclePlus className='text-2xl' />
          </Link>
        </button>
        <div>
          {session?.status === 'loading' ? (
            <h6>Loading-----</h6>
          ) : session?.status === 'unauthenticated' ? (
            <div className='flex items-center gap-2'>
              <Link href='/login'>
                <button className='btn btn-sm rounded-2xl border-black bg-black text-white hover:text-black'>
                  Login <BiLogIn />
                </button>
              </Link>
              <Link href='/signup'>
                <button className='btn btn-sm rounded-2xl border-transparent bg-white text-black hover:text-white'>
                  Register <BiLogIn />
                </button>
              </Link>
            </div>
          ) : (
            <button
              className='btn btn-sm rounded-2xl border-black bg-black text-white hover:text-black'
              onClick={() => signOut()}
            >
              Logout <BiLogIn />
            </button>
          )}
          {/* Buggy code need to remove------- */}
          {/* {session?.status === 'loading' && <h6>Loading-----</h6>}
          {session.status === 'unauthenticated' && (
            <Link href='/login'>
              <button className='btn btn-sm rounded-2xl text-white'>
                Login <BiLogIn />
              </button>
            </Link>
          )}
          {session.status === 'authenticated' && (
            <button className='btn btn-primary px-8' onClick={() => signOut()}>
              Logout
            </button>
          )} */}
        </div>
      </div>

      {/* Mobile Hamburger Menu */}
      <div className='fixed right-6 top-1 z-[100] lg:hidden'>
        <button
          className='btn btn-circle btn-ghost z-[100] bg-black text-white'
          onClick={() => setIsDrawerOpen(!isDrawerOpen)}
        >
          {isDrawerOpen ? (
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
          ) : (
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
                d='M4 6h16M4 12h16m-7 6h7'
              />
            </svg>
          )}
        </button>
      </div>

      {/* Sidebar Drawer */}
      <div
        className={`fixed inset-0 z-50 h-screen w-full bg-white shadow-lg transition-transform duration-300 lg:hidden ${
          isDrawerOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {/* <button
          className='z-60 btn btn-circle btn-ghost absolute right-2 top-2 bg-black text-white'
          onClick={() => setIsDrawerOpen(false)}
        >
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
        </button> */}
        <ul className='w-full p-4 text-left text-xl font-bold text-black'>
          {navItems.map((navItem) => (
            <li key={navItem.path} className='border-b border-gray-300'>
              <Link
                className='block px-4 py-2 hover:bg-orange-200'
                href={navItem.path}
                onClick={() => setIsDrawerOpen(false)}
              >
                {navItem.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Backdrop */}
      {isDrawerOpen && (
        <div
          className='fixed inset-0 z-40 bg-black opacity-50'
          onClick={() => setIsDrawerOpen(false)}
        />
      )}
    </div>
  );
};

export default Navbar;
