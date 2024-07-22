import { Icons } from '@/icons'
import Image from 'next/image'
import React from 'react'

const Reklama = () => {
  return (
    <div className='w-[500px] h-[88vh] bg-navbarBackground'>
      <div className='w-full h-[90%] relative'>
        <Image src='/posts/uzum-market-post.webp' width={500} height={0} className='w-full h-full object-contain object-center' />
      </div>

      <div className='bg-white flex px-[25px] py-[12px] items-center justify-between w-full h-[10%] reels-shadow'>
        <div className='flex items-center gap-[24px]'>

          {/* Like */}
          <div className='flex items-center gap-[4px]'>
            <Icons.heart className='cursor-pointer' />
            <span className='text-black/30 text-[0.875rem] font-[500] leading-[normal]'>139</span>
          </div>

          {/* Coment */}
          <div className='flex items-center gap-[4px]'>
            <Icons.coment className='cursor-pointer' width='21px' height='21px' fill='#322C39' />
            <span className='text-black/30 text-[0.875rem] font-[500] leading-[normal]'>34</span>
          </div>

          {/* Share */}
          <div className='flex items-center gap-[4px]'>
            <Icons.share className='cursor-pointer' width='21px' height='21px' fill='#322C39' />
            <span className='text-black/30 text-[0.875rem] font-[500] leading-[normal]'>47</span>
          </div>
        </div>

        {/* View and Save */}
        <div className='flex flex-col gap-[16px]'>
          <div className='flex items-center gap-[4px]'>
            <Icons.grayEye width='15px' height='15px' fill='#322C3980' />
            <span className='text-black/40 text-[0.813rem] font-[400]'>123948</span>
          </div>

          <Icons.save fill='#322C39' className='block ml-auto cursor-pointer' />
        </div>
      </div>
    </div>
  )
}

export default Reklama