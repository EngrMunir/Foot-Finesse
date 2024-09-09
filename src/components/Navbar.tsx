'use client';
import Link from 'next/link';
import { signOut, useSession } from 'next-auth/react';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { BiCart, BiLogIn } from 'react-icons/bi';
import { TbShoe } from 'react-icons/tb';

const Navbar = () => {
  const session = useSession();
  // console.log(session);
  const pathName = usePathname();
  const [navMoved, setNavMoved] = useState(false);
  console.log(pathName);

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
  return (
    <div
      id='nav'
      className={`navbar ${navMoved || pathName !== '/' ? 'fixed top-4 bg-white text-black shadow-2xl' : 'absolute top-0 bg-transparent text-white'} left-1/2 z-50 mx-auto max-w-7xl -translate-x-1/2 rounded-full duration-500`}
    >
      <div className='navbar-start'>
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
            <span className='font-light text-slate-400'>FOOT</span>
            FINESSE
          </p>
        </Link>
      </div>
      <div className='navbar-end'>
        <button className='btn btn-circle btn-ghost'>
          <BiCart className='text-2xl' />
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
            <button className='btn btn-primary px-8' onClick={() => signOut()}>
              Logout
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
    </div>
  );
};

export default Navbar;
