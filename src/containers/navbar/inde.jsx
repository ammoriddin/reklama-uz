"use client"

import useUserRegister from '@/hooks/useUserRegister/useUserRegister'
import { Icons } from '@/icons'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const Navbar = () => {
  const pathname = usePathname()
  useUserRegister()

  return (
    <>
      {
        pathname !== "/login" || "/register" && 
        <nav className='py-[17px] border-b-[1px] border-borderColor border-solid px-[20px] min-w-[1218px] flex justify-between '>
          {/* logo */}
          <Link href={'/'} className='flex gap-[10px] items-center'>
            <Icons.logo className="w-[32px] h-[32px]" />
            <h1 className='text-black text-[1.5rem] font-[800] leading-normal font-onest'>onest</h1>
          </Link>
        </nav>
      }
    </>
  )
}

export default Navbar