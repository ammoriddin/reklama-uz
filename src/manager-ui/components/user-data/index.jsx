"use client"

import { Icons } from '@/icons'
import Image from 'next/image'
import React from 'react'

const UserData = () => {
  
    return (
        <div className='p-[24px] bg-white border-[1px] border-solid border-borderColor w-full mb-[24px] rounded-[3px]'>
            <div className='flex w-full gap-[24px] justify-end items-center'>
                <div className='flex items-center gap-[4px]'>
                    <Icons.stream fill={"#322C39"} />
                    <p className='text-black text-[0.813rem] font-[400]'>live stream</p>
                </div>
                <div className='flex items-center gap-[4px]'>
                    <Icons.edit stroke={"#322C39"} />
                    <p className='text-black text-[0.813rem] font-[400]'>Profile edit</p>
                </div>
                <div className='flex items-center gap-[4px]'>
                    <Icons.logout fill="#F00" />
                    <p className='text-black text-[0.813rem] font-[400]'>Log out</p>
                </div>
            </div>

            <div className='flex gap-[12px] items-center mb-[8px]'>

                {/* Profile Photo */}
                <div className='w-[95px] h-[95px]'>
                    <Image src={'/manager.png'} width={95} height={95} alt='user photo' className='rounded-[50%] w-full h-full object-cover object-center' />
                </div>

                {/* Name & Position */}
                <div>
                    <h3 className='text-black text-[2.25rem] font-[500]'>Teacher Azam</h3>
                    <p className='text-black/30 text-[1rem] font-[500]'>Smm meneger</p>
                </div>
            </div>

            {/* Stats */}
            <div className='flex items-center justify-evenly flex-grow-[1]'>

                <div className='flex items-center gap-[8px]'>
                    <Icons.companys fill="#322C39" />
                    <p className='text-black text-[0.875rem] font-[500]'>239 <span className='text-black/30'>companiyalar</span></p>
                </div>

                <div className='flex items-center gap-[8px]'>
                    <Icons.addUser fill="#333333" />
                    <p className='text-black text-[0.875rem] font-[500]'>349 <span className='text-black/30'>obunachilar</span></p>
                </div>

                <div className='flex items-center gap-[8px]'>
                    <Icons.companys fill="#322C39" />
                    <p className='text-black text-[0.875rem] font-[500]'>29 <span className='text-black/30'>obunalar</span></p>
                </div>
            </div>
        </div>
    )
}

export default UserData