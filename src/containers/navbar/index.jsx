"use client"

import { Icons } from '@/icons'
import Link from 'next/link'
import React from 'react'
import { usePathname, useRouter } from 'next/navigation'

const Navbar = () => {
  const pathname = usePathname();
  const router = useRouter();

  // Check if the pathname starts with /login or /register
  if (pathname.startsWith('/login') || pathname.startsWith('/register')) {
    return null;
  }

  return (
    <nav className='py-[17px] border-b-[1px] border-borderColor border-solid px-[20px] min-w-[1218px] flex items-center'>
      {/* logo */}
      <Link href={'/'}>
        <div className='flex gap-[10px] items-center'>
          <Icons.logo />
        </div>
      </Link>

      <div className='flex items-center ml-[188px] laptop:ml-[288px] gap-[4px] flex-grow-[1]'>
        {
          pathname === '/inbox' &&
          <div 
            className='cursor-pointer flex items-center gap-[2px]'
            onClick={() => router.back()} // Navigate back to the previous page
          >
            <Icons.arrow className='rotate-180' fill='#000' width='16px' height='16px' />
            <p className='text-[black] text-[0.938rem] font-[500]'>Back</p>
          </div>
        }
      </div>

      {/* Notification */}
      <Link href={'/inbox'}>
        <Icons.inbox fill={pathname === '/inbox' ? "#7000ff" : "'#333333'"} className='mr-[150px]' />
      </Link>
    </nav>
  )
}

export default Navbar