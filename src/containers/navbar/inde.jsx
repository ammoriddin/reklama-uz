"use client"

import { Icons } from '@/icons'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useEffect, useState } from 'react'

const Navbar = () => {
  const pathname = usePathname()
  const [showNavbar, setShowNavbar] = useState(true)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const handleRouteChange = (url) => {
        if (url.startsWith('/login')) {
          setShowNavbar(false)
        } else {
          setShowNavbar(true)
        }
      }

      // Initial check
      handleRouteChange(pathname)
    }
  }, [pathname])

  if (!showNavbar) {
    return null
  }

  return (
    <nav className='py-[17px] border-b-[1px] border-borderColor border-solid px-[20px] min-w-[1218px] flex justify-between '>
      {/* logo */}
      <Link href={'/'} className='flex gap-[10px] items-center'>
        <Icons.logo className="w-[32px] h-[32px]" />
        <h1 className='text-black text-[1.5rem] font-[800] leading-normal font-onest'>onest</h1>
      </Link>
    </nav>
  )
}

export default Navbar