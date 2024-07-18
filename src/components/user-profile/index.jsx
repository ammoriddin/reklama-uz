"use client"

import { Icons } from '@/icons'
import CustomButton from '@/system-components/button'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
import { sidebarLink } from './(sidebar-link-data)'

const UserProfileSidebar = () => {
    const router = usePathname()

    return (
        <div className='pr-[90px] sticky top-0 py-[50px] h-[100vh] overflow-auto flex flex-col border-r-[1px] border-solid border-borderColor'>
            <div className='flex-grow-[1]'>

                {/* User Profile Data */}
                <div className='flex gap-[12px] items-center mb-[20px]'>
                    <div className='bg-navbarBackground p-[12px] w-[40px] h-[40px] rounded-[50%] flex items-center justify-center'>
                        <Icons.user />
                    </div>

                    <div>
                        <div className='flex items-center gap-[4px]'>
                            <p className='text-black text-[1.125rem] font-[400]'>Shaxriyor Oripov</p>
                            <Icons.arrow className='rotate-90' />
                        </div>
                        <p className='text-[black]/40 text-[0.75rem] font-[400]'>Balance: 12 034.00 so’m</p>
                    </div>

                </div>

                <div className='mb-[30px]'>
                    <CustomButton widht={'w-full'} text={"Снять с баланса"} />
                </div>

                <ul className='pl-[12px] flex flex-col gap-[13px]'>
                    {
                        sidebarLink.map((item, index) => (
                            <li key={index} className='flex items-center gap-[6px]'>
                                <item.icon fill={router === item.pathname ? "#7000ff" : "black"} />
                                <Link href={item.pathname} className={`${router === item.pathname ? "text-purple" : "text-black"} text-[0.938rem] font-[500]`}>
                                    {item.name}
                                </Link>
                            </li>
                        ))
                    }
                </ul>
            </div>

            <div>
                <div className='flex gap-[20px] mb-[14px]'>
                    <Link href={'/help'} className='text-primary text-[0.813rem] font-[400] leading-normal'>
                        Help
                    </Link>
                    <Link href={'/setting'} className='text-primary text-[0.813rem] font-[400] leading-normal'>
                        Setting
                    </Link>
                    <Link href={'/support'} className='text-primary text-[0.813rem] font-[400] leading-normal'>
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

export default UserProfileSidebar