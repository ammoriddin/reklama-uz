"use client"

import { Icons } from '@/icons'
import Image from 'next/image'
import React from 'react'

const UserData = ({setTab, tab}) => {
  
    return (
        <div className='p-[24px] bg-white border-[1px] border-solid border-borderColor w-full mb-[24px] rounded-[3px]'>
            <div className='flex w-full gap-[24px] justify-end items-center'>
                <div className='flex items-center gap-[4px]'>
                    <Icons.statsIcon stroke={tab === "statistics" ? "#7000ff " : "#322C39"} />
                    <button onClick={() => setTab('statistics')} className={`${tab === 'statistics' ? "text-purple" : "text-black"} text-[0.813rem] font-[400]`}>My Statistics</button>
                </div>
                <div className='flex items-center gap-[4px]'>
                    <Icons.edit stroke={tab === "profile-edit" ? "#7000ff " : "#322C39"} />
                    <button onClick={() => setTab('profile-edit')} className={`${tab === 'profile-edit' ? "text-purple" : "text-black"} text-[0.813rem] font-[400]`}>Profile edit</button>
                </div>
                <div className='flex items-center gap-[4px]'>
                    <Icons.logout fill="#F00" />
                <p style={{color: '#F00'}} className='text-[0.813rem] cursor-pointer font-[400]'>Log out</p>
                </div>
            </div>

            <div className='flex gap-[12px] items-center mb-[8px]'>

                {/* Profile Photo */}
                <div className='w-[95px] h-[95px]'>
                    <Image src={'/companys/bmw.png'} width={95} height={95} alt='user photo' className='rounded-[50%] w-full h-full object-cover object-center' />
                </div>

                {/* Name & Position */}
                <div>
                    <h3 className='text-black text-[2.25rem] font-[500]'>BMW</h3>
                    <p className='text-[black] text-[1rem] font-[500]'>Internet do’kon</p>
                    <p className='text-black/30 text-[0.875rem] font-[500]'>Uzbekistan, Tashkent, Yunusabad</p>
                </div>
            </div>

            {/* Stats */}
            <div className='flex items-center' style={{paddingLeft: '108px', gap: '32px'}}>
                <p className='text-black/40 text-[0.875rem] font-[500]'><span className='text-[#100]'>123</span> followers</p>
                <p className='text-black/40 text-[0.875rem] font-[500]'><span className='text-[#100]'>2</span> biriktirilgan companiyalar</p>
            </div>
        </div>
    )
}

export default UserData