"use client"

import UploadPhoto from '@/system-components/upload-photo'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React from 'react'

const AdverTising = () => {
  const router = useRouter()

  return (
    <section className='pr-[50px] py-[20px] flex flex-col h-[93vh] overflow-auto min-w-[270px]'>
      <div className='flex-grow-[1]'>
        <UploadPhoto />
      </div>
      <div>
          <div className='flex gap-[20px] mb-[14px]'>
              <Link href={'/help'} className={`${router === "/help" ? "text-purple" : "text-[#221C2B]/40"} text-[0.813rem] font-[500] leading-normal`}>
                  Help
              </Link>
              <Link href={'/settings'} className={`${router === "/settings" ? "text-purple" : "text-[#221C2B]/40"} text-[0.813rem] font-[500] leading-normal`}>
                  Settings
              </Link>
              <Link href={'/support'} className={`${router === "/support" ? "text-purple" : "text-[#221C2B]/40"} text-[0.813rem] font-[500] leading-normal`}>
                  Support
              </Link>
          </div>

          <div className='flex gap-[24px]'>
              <p className='text-black/60 text-[0.813rem] font-[400] leading-normal'>Privacy & Policy</p>
              <p className='text-black/60 text-[0.813rem] font-[400] leading-normal'>Copyright 2023</p>
          </div>
      </div>
    </section>
  )
}

export default AdverTising