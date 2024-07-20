"use client"

import { Icons } from '@/icons'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

const UserData = () => {
  const [logout, setlogout ] = useState(false)

  useEffect(() => {
    if (logout === true) {
      window.localStorage.removeItem("token")
    }
  }, [logout])
  

  return (
    <div className='px-[32px] w-full py-[24px] border-[1px] h-auto border-solid border-borderColor rounded-[3px]'>
      <div className='flex items-start justify-between'>

        {/* Profile Avatar & User Name, Position */}
        <div className='flex gap-[12px] items-center mt-[8px]'>
          <div className='bg-navbarBackground p-[12px] w-[95px] h-[95px] rounded-[50%] flex items-center justify-center'>
            <Icons.user width='32px' height='32px' />
          </div>

          <div>
            <p className='text-black text-[2.25rem] font-[500]'>Shaxiryor274</p>
            <span className='text-black/30 font-[500] text-[1rem]'>Ux Ui designer</span>
          </div>
        </div>

        {/* Functions */}
        <div className='flex items-center gap-[24px]'>
          
          {/* statistics */}
          <div className='flex gap-[4px] items-center'>
            <Icons.statsIcon />
            <Link href={'/my-statistics'} className='text-black font-[400 text-[0.813rem]'>My statistics</Link>
          </div>

          {/* edit profile */}
          <div className='flex gap-[4px] items-center'>
            <Icons.edit />
            <Link href={'/profile-edit'} className='text-black font-[400 text-[0.813rem]'>Profile edit</Link>
          </div>

          {/* card */}
          <div className='flex gap-[4px] items-center'>
            <Icons.card />
            <Link href={'/card'} className='text-black font-[400 text-[0.813rem]'>Card</Link>
          </div>

          {/* log out */}
          <div className='flex gap-[4px] items-center'>
            <Icons.logout />
            <button onClick={() => setlogout(true)} className='font-[400 text-[0.813rem] text-red'>Log out</button>
          </div>
        </div>
      </div>

      {/* user tags */}
      <div className='pl-[110px] flex flex-wrap gap-[28px] w-[700px]'>
        <p className='text-[0.875rem] font-[400] text-black'># ingliz tili</p>
        <p className='text-[0.875rem] font-[400] text-black'>#  ✒️ dizayn</p>
        <p className='text-[0.875rem] font-[400] text-black'># 👕 futbolkalar</p>
        <p className='text-[0.875rem] font-[400] text-black'># 👕 futbolkalar</p>
        <p className='text-[0.875rem] font-[400] text-black'># 👖 shim</p>
        <p className='text-[0.875rem] font-[400] text-black'># 👕 futbolkalar</p>
        <p className='text-[0.875rem] font-[400] text-black'># 👕 ayti</p>
        <p className='text-[0.875rem] font-[400] text-black'># 👖 shim</p>
      </div>
    </div>
  )
}

export default UserData