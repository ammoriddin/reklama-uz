"use client"

import { Icons } from '@/icons'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useEffect, useState } from 'react'

const RightSidebar = ({ initialData }) => {
  const [data, setData] = useState(null); // Boshlang'ich qiymat `null` bo'lsa skeleton chiqadi
  const router = usePathname();

  useEffect(() => {
    setData(initialData);
  }, [initialData]);

  if (!data) {
    // Show loading skeleton
    return (
      <div className='flex w-[300px] flex-col pb-[30px] mr-auto px-[20px] border-l-[1px] border-borderColor border-solid sticky top-0 h-[92vh] overflow-auto'>
        <div className='py-[40px] flex-grow-[1]'>
          <div className='w-[50px] h-[50px] bg-gray-200 animate-pulse mb-[28px] rounded-full'></div>
          <div className='w-[150px] h-[20px] bg-gray-200 animate-pulse mb-[16px]'></div>
          <div className='flex flex-wrap gap-[17px] mb-[16px]'>
            {[...Array(5)].map((_, i) => (
              <div key={i} className='w-[60px] h-[20px] bg-gray-200 animate-pulse'></div>
            ))}
          </div>
          <div className='w-[269px]'>
            <div className='flex flex-col gap-[20px] h-[35vh] overflow-auto'>
              {[...Array(3)].map((_, i) => (
                <div key={i} className='h-[20px] bg-gray-200 animate-pulse w-full'></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className='flex flex-col w-[300px] pb-[30px] mr-auto px-[20px] border-l-[1px] border-borderColor border-solid sticky top-0 h-[92vh] overflow-auto'>
      <div className='py-[40px] flex-grow-[1]'>
        <div className='flex items-center gap-[8px] mb-[28px]'>

          {/* SMM Manager Photo */}
          <div className='w-[50px] h-[50px]'>
            <Image src={'/companys/uzummarket.png'} width={50} height={50} alt='Uzum market logo' />
          </div>

          {/* Manager Name */}
          <div>
            <h2 className='text-black font-[400] text-[1.125rem] leading-[21.48px]'>Uzum market</h2>
            <p className='text-black/30 text-[0.85rem] leading-[14.5px]'>Uzum market</p>
          </div>
        </div>

        {/* Tags */}
        <div className='flex flex-wrap gap-[17px] mb-[16px]'>
          {data.tags.map((tag, index) => (
            <p key={index} className='text-[0.75rem] leading-[14.5px] font-[500] text-[#3C00FF]'>{tag}</p>
          ))}
        </div>

        {/* Message */}
        <div className='w-[269px]'>
          <div className='flex flex-col gap-[20px] h-[35vh] overflow-auto'>
            <p className='text-black font-[400] leading-[20px] text-[0.813rem]'>
              {data.description}
            </p>
          </div>
        </div>
      </div>

      <div className='flex-grow-[1]'>
        <a target='_blank' className='flex items-center mb-[15px] gap-[8px]' href="https://uzum.uz/ru" rel='noopener noreferrer'>
          <p className='text-black text-[0.813rem] font-[500]'>www.uzummarket.uz</p>
          <Icons.arrow fill='#322C39' width='14px' height='14px' />
        </a>
        <hr className='w-[200px] mb-[15px]' />
        <Link className='flex items-center mb-[15px] gap-[8px]' href="/order/214213o95">
          <p className='text-purple text-[0.813rem] font-[500]'>Buyurtma berish</p>
          <Icons.arrow fill='#7000ff' width='14px' height='14px' />
        </Link>
      </div>

      <div>
        <div className='flex gap-[20px] mb-[14px]'>
          <Link href={'/help'} className={`${router === "/help" ? "text-purple" : "text-primary"} text-[0.813rem] font-[400] leading-normal`}>
            Help
          </Link>
          <Link href={'/settings'} className={`${router === "/settings" ? "text-purple" : "text-primary"} text-[0.813rem] font-[400] leading-normal`}>
            Settings
          </Link>
          <Link href={'/support'} className={`${router === "/support" ? "text-purple" : "text-primary"} text-[0.813rem] font-[400] leading-normal`}>
            Support
          </Link>
        </div>

        <div className='flex gap-[24px]'>
          <p className='text-black/60 text-[0.813rem] font-[400] leading-normal'>Privacy & Policy</p>
          <p className='text-black/60 text-[0.813rem] font-[400] leading-normal'>Copyright 2023</p>
        </div>
      </div>
    </div>
  )
}

export default RightSidebar