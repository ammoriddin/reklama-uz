import { Icons } from '@/icons'
import React from 'react'

const Video = () => {
  return (
    <div className='w-[500px] bg-white'>
        
        {/* video */}
        <div className='bg-navbarBackground h-[75vh] relative'>
          <p className='absolute top-[15px] left-[50%] translate-x-[-50%] text-black font-[500] text-[1.5rem]'>00:00:00</p>
          <div className='absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
            <p className='text-black/40 font-[500] text-[1rem] leading-[19px]'>Прямой эфир заверщен</p>
          </div>
        </div>

        {/* Functions */}
        <div className='py-[15px] px-[20px] bg-white w-full shadow-md'>
          
          {/* Views */}
          <div className='flex items-center gap-[6px] mb-[20px]'>
            <Icons.eye fill="#7000FF" />
            <p className='text-[#7000FF] text-[0.75rem] font-[400] leading-[14.32px]'>348 045</p>
          </div>

          {/* likes & shares */}
          <div className='flex items-center gap-[24px]'>

            {/* Like */}
            <div className='flex items-center gap-[4px]'>
              <Icons.heart fill='#322C39' />
              <p className='text-black/30 text-[0.875rem] font-[500] leading-[17px]'>123 000</p>
            </div>

            {/* Share */}
            <div className='flex items-center gap-[4px]'>
              <Icons.share fill='#322C39' />
              <p className='text-black/30 text-[0.875rem] font-[500] leading-[17px]'>34 000</p>
            </div>
          </div>          
        </div>
    </div>
  )
}

export default Video