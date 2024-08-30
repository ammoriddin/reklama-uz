"use client"

import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import Image from 'next/image' // Ensure to import Image from 'next/image'
import { Icons } from '@/icons'

const FilterUserRols = ({ firstComponent, secondComponent, thirdComponent }) => {
    const router = useRouter()
    const [role, setRole] = useState(null)

    useEffect(() => {
        const userRole = window.localStorage.getItem("role")
        if (userRole) {
            setRole(parseInt(userRole, 10))
        } else {
            // router.push('/login')
            router.push('/')
        }
    }, [router])

    if (role === null) {
        return (
            <div className='h-[92vh animate-pulse'>
                <div className='pr-[35px] pb-[16px] relative pt-[50px] h-[92vh] overflow-auto flex flex-col border-r-[1px] border-solid border-borderColor'>
                    <div className='flex-grow-[1]'>

                        {/* User Profile Data */}
                        <div className='flex gap-[12px] items-center mb-[20px]'>
                            <div className='bg-navbarBackground p-[12px] w-[40px] h-[40px] rounded-[50%] flex items-center justify-center'>
                            </div>

                            <div>
                                <div className='flex items-center gap-[4px]'>
                                    <p className='text-black text-[1.125rem] font-[400] w-[150px] h-[8px] bg-navbarBackground rounded-[40px]'></p>
                                    <Icons.arrow className='rotate-90' />
                                </div>
                                <p className='text-[black]/40 text-[0.75rem] font-[400] h-[7px] bg-navbarBackground w-[100px] rounded-[40px]'></p>
                            </div>

                        </div>

                        <ul className='pl-[12px] flex flex-col gap-[13px] mb-[31px]'>
                            <li className='flex items-center gap-[6px]'>
                                <button className={`text-black h-[7px] w-[90px] rounded-[40px] bg-navbarBackground text-[0.938rem] font-[500]`}>
                                    
                                </button>
                            </li>

                            <li className='flex items-center gap-[6px]'>
                                <button className={`text-black h-[7px] w-[120px] rounded-[40px] bg-navbarBackground text-[0.938rem] font-[500]`}>
                                    
                                </button>
                            </li>

                            <li className='flex items-center gap-[6px]'>
                                <button className={`text-black h-[7px] w-[150px] rounded-[40px] bg-navbarBackground text-[0.938rem] font-[500]`}>
                                    
                                </button>
                            </li>

                        </ul>

                        {/* home page section */}
                        <div className='border-t-[1px] border-solid border-borderColor mt-[40px] pt-[40px] mb-[15px]'>
                            <h4 className='text-black text-[0.938rem] leading-[17px] font-[500] mb-[8px] h-[7px] w-[90px] bg-navbarBackground rounded-[40px]'></h4>
                            <div className='flex w-[250px] flex-wrap gap-[4px] mb-[40px]'>
                                <div className='flex gap-[10px] py-[6px] px-[16px] rounded-[100px] bg-navbarBackground'>
                                    <p className='text-black font-[500] h-[20px] w-[60px]'></p>
                                </div>
                                <div className='flex gap-[10px] py-[6px] px-[16px] rounded-[100px] bg-navbarBackground'>
                                    <p className='text-black font-[500] h-[20px] w-[60px]'></p>
                                </div>
                                <div className='flex gap-[10px] py-[6px] px-[16px] rounded-[100px] bg-navbarBackground'>
                                    <p className='text-black font-[500] h-[20px] w-[90px]'></p>
                                </div>
                                <div className='flex gap-[10px] py-[6px] px-[16px] rounded-[100px] bg-navbarBackground'>
                                    <p className='text-black font-[500] h-[20px] w-[40px]'></p>
                                </div>
                                <div className='flex gap-[10px] py-[6px] px-[16px] rounded-[100px] bg-navbarBackground'>
                                    <p className='text-black font-[500] h-[20px] w-[70px]'></p>
                                </div>
                                <div className='flex gap-[10px] py-[6px] px-[16px] rounded-[100px] bg-navbarBackground'>
                                    <p className='text-black font-[500] h-[20px] w-[60px]'></p>
                                </div>
                                <div className='flex gap-[10px] py-[6px] px-[16px] rounded-[100px] bg-navbarBackground'>
                                    <p className='text-black font-[500] h-[20px] w-[60px]'></p>
                                </div>
                                <div className='flex gap-[10px] py-[6px] px-[16px] rounded-[100px] bg-navbarBackground'>
                                    <p className='text-black font-[500] h-[20px] w-[50px]'></p>
                                </div>
                            </div>

                            {/* Who made the most money */}
                            <div>
                                <h4 className='text-black text-[0.938rem] leading-[17px] font-[500] mb-[12px] h-[7px] w-[120px] rounded-[40px] bg-navbarBackground'></h4>
                                <div className='flex items-center'>
                                    <div
                                        className='w-[42px] h-[42px] p-[1px] bg-navbarBackground rounded-[50%] mr-[-10px] shadow-sm relative'
                                    >
                                    </div>
                                    <div
                                        className='w-[42px] h-[42px] p-[1px] bg-navbarBackground rounded-[50%] mr-[-10px] shadow-sm relative'
                                    >
                                    </div>
                                    <div
                                        className='w-[42px] h-[42px] p-[1px] bg-navbarBackground rounded-[50%] mr-[-10px] shadow-sm relative'
                                    >
                                    </div>
                                    <div
                                        className='w-[42px] h-[42px] p-[1px] bg-navbarBackground rounded-[50%] mr-[-10px] shadow-sm relative'
                                    >
                                    </div>
                                </div>
                                </div>
                            </div>

                    </div>

                    <div className='flex px-[10px] gap-[8px] items-center'>
                        
                        {/* App store */}
                        <a className='flex px-[16px] py-[14px] bg-white rounded-[4px] primary-shadow items-center gap-[8px]'>
                            <Icons.apple fill="#121212" />
                            <div>
                                <p className='text-secondary/30 text-[0.75rem] leading-[13px] font-[400] '>Доступно в</p>
                                <h4 className='text-secondary text-[0.875rem] font-[500] leading-[17px]'>App Store</h4>
                            </div>
                        </a>

                        {/* Play Market */}
                        <a className='flex px-[16px] py-[14px] bg-white rounded-[4px] primary-shadow items-center gap-[8px]'>
                            <Icons.playMarket fill="#1F1714" />
                            <div>
                                <p className='text-secondary/30 text-[0.75rem] leading-[13px] font-[400] '>Скачайте в</p>
                                <h4 className='text-secondary text-[0.875rem] font-[500] leading-[17px]'>Google Play</h4>
                            </div>
                        </a>
                    </div>

                    <div className=''>
                        <Image alt='iphone photo' className='absolute bottom-0 left-[-15px] -z-[20]' width={243} height={268} src={'/elements/iphone-12.png'} />
                        <Image alt='iphone photo' className='absolute bottom-0 right-[20px] -z-[20]' width={243} height={268} src={'/elements/second-phone.png'} />
                    </div>
                </div>
            </div>
        )
    }

    switch (role) {
        case 1:
            return firstComponent
        case 2:
            return secondComponent
        case 3:
            return thirdComponent
        default:
            router.push('/not-found')
            return null
    }
}

export default FilterUserRols