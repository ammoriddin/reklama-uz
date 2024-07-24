import { Icons } from '@/icons'
import React from 'react'

const UploadPhoto = () => {
  return (
    <div className='px-[44px] py-[36px] border-[#221c2b1a] border-dashed border-[1px] rounded-[3px] bg-navbarBackground flex flex-col items-center'>
        <div className='flex mb-[16px] justify-center items-center w-[100px] h-[100px] bg-white rounded-[50%]'>
            <Icons.upload stroke='#7000FF' />
        </div>
        <h3 className='text-black text-[1rem] font-[500] mb-[12px]'>Upload photo or video</h3>
        <p className='text-black/30 text-[0.75rem] font-[500] mb-[6px]'>Video should consist of 15 seconds</p>
        <p className='text-black/30 text-[0.75rem] font-[500] mb-[85px]'>You can upload up to 3 images</p>
    
        <div className='relative w-full'>
            <input type="file" className='z-20 absolute h-full w-full top-0 left-0 opacity-0 cursor-pointer' />
            <button className='w-full rounded-[2px] overflow-hidden py-[11.5px] px-[57.5] border-dashed border-[1px] border-[#221C2B1A]'>
                <span className='text-black text-[0.875rem] font-[500]'>Upload</span>
            </button>
        </div>
    </div>
  )
}

export default UploadPhoto