"use client"

import { Icons } from '@/icons'
import CustomButton from '@/system-components/button'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import React from 'react'
import { sidebarLink } from './sidebarLink'
import HomePageSidebar from '@/components/user-profile/home-page'
import Image from 'next/image'  

const CompanySidebar = () => {
    const pathname = usePathname()
    const router = useRouter()
    
    return (
        <div className='pr-[35px] pb-[16px] relative pt-[50px] h-[86.5vh] overflow-auto flex flex-col border-r-[1px] border-solid border-borderColor'>
            <div className='flex-grow-[1]'>

                {/* User Profile Data */}
                <div className='flex gap-[12px] items-center mb-[20px]'>
                    <div className='bg-navbarBackground p-[12px] w-[36px] h-[36px] rounded-[50%] flex items-center justify-center'>
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
                    <CustomButton onClickFunction={() => router.push("/create-advertising")} widht={'w-full'} text={"Загрузить мою рекламу"} />
                </div>

                <ul className='pl-[12px] flex flex-col gap-[13px] mb-[31px]'>
                    {
                        sidebarLink.map((item, index) => (
                            <li key={index} className='flex items-center gap-[6px]'>
                                <item.icon fill={pathname === item.pathname ? "#7000ff" : "black"} />
                                <Link href={item.pathname} className={`${pathname === item.pathname ? "text-purple" : "text-black"} text-[0.938rem] font-[500]`}>
                                    {item.name}
                                </Link>
                            </li>
                        ))
                    }
                </ul>

                {/* Members */}
                {
                    pathname === "/live" &&
                    <div className='pt-[16px] px-[16px] rounded-[3px] border-[1px] border-solid border-borderColor w-[270px] mb-[20px]'>
                        <p className='text-[black] text-[0.75rem] leading-[14.32px] mb-[25px]'>12 994 участников</p>
                        
                        <div className='flex flex-col gap-[20px] h-[350px] overflow-auto'>
                            <div className='flex gap-[5px] items-center'>

                                {/* profile photo */}
                                <div className='w-[36px] h-[36px] flex-shrink-0'>
                                    <Image alt='company photo' className='w-full h-full object-cover rounded-[50%]' src={'/companys/pepsi.png'} width={36} height={36} />
                                </div>

                                <div>
                                    <h3 className='text-[0.813rem] text-black/40 leading-[15.5px]'>Leonele Messi</h3>
                                    <p className='text-black text-[0.75rem] leading-[14px]'>Man xali 1chi orin olaman, xammeni mazeni qochiraman, ishonurlaring</p>
                                </div>
                            </div>

                            <div className='flex gap-[5px] items-center'>

                                {/* profile photo */}
                                <div className='w-[36px] h-[36px] flex-shrink-0'>
                                    <Image alt='company photo' className='w-full h-full object-cover rounded-[50%]' src={'/companys/pepsi.png'} width={36} height={36} />
                                </div>

                                <div>
                                    <h3 className='text-[0.813rem] text-black/40 leading-[15.5px]'>Leonele Messi</h3>
                                    <p className='text-black text-[0.75rem] leading-[14px]'>Man xali 1chi orin olaman, xammeni mazeni qochiraman, ishonurlaring</p>
                                </div>
                            </div>

                            <div className='flex gap-[5px] items-center'>

                                {/* profile photo */}
                                <div className='w-[36px] h-[36px] flex-shrink-0'>
                                    <Image alt='company photo' className='w-full h-full object-cover rounded-[50%]' src={'/companys/pepsi.png'} width={36} height={36} />
                                </div>

                                <div>
                                    <h3 className='text-[0.813rem] text-black/40 leading-[15.5px]'>Leonele Messi</h3>
                                    <p className='text-black text-[0.75rem] leading-[14px]'>Man xali 1chi orin olaman, xammeni mazeni qochiraman, ishonurlaring</p>
                                </div>
                            </div>

                            <div className='flex gap-[5px] items-center'>

                                {/* profile photo */}
                                <div className='w-[36px] h-[36px] flex-shrink-0'>
                                    <Image alt='company photo' className='w-full h-full object-cover rounded-[50%]' src={'/companys/pepsi.png'} width={36} height={36} />
                                </div>

                                <div>
                                    <h3 className='text-[0.813rem] text-black/40 leading-[15.5px]'>Leonele Messi</h3>
                                    <p className='text-black text-[0.75rem] leading-[14px]'>Man xali 1chi orin olaman, xammeni mazeni qochiraman, ishonurlaring</p>
                                </div>
                            </div>

                            <div className='flex gap-[5px] items-center'>

                                {/* profile photo */}
                                <div className='w-[36px] h-[36px] flex-shrink-0'>
                                    <Image alt='company photo' className='w-full h-full object-cover rounded-[50%]' src={'/companys/pepsi.png'} width={36} height={36} />
                                </div>

                                <div>
                                    <h3 className='text-[0.813rem] text-black/40 leading-[15.5px]'>Leonele Messi</h3>
                                    <p className='text-black text-[0.75rem] leading-[14px]'>Man xali 1chi orin olaman, xammeni mazeni qochiraman, ishonurlaring</p>
                                </div>
                            </div>

                            <div className='flex gap-[5px] items-center'>

                                {/* profile photo */}
                                <div className='w-[36px] h-[36px] flex-shrink-0'>
                                    <Image alt='company photo' className='w-full h-full object-cover rounded-[50%]' src={'/companys/pepsi.png'} width={36} height={36} />
                                </div>

                                <div>
                                    <h3 className='text-[0.813rem] text-black/40 leading-[15.5px]'>Leonele Messi</h3>
                                    <p className='text-black text-[0.75rem] leading-[14px]'>Man xali 1chi orin olaman, xammeni mazeni qochiraman, ishonurlaring</p>
                                </div>
                            </div>

                            <div className='flex gap-[5px] items-center mb-[16px]'>

                                {/* profile photo */}
                                <div className='w-[36px] h-[36px] flex-shrink-0'>
                                    <Image alt='company photo' className='w-full h-full object-cover rounded-[50%]' src={'/companys/pepsi.png'} width={36} height={36} />
                                </div>

                                <div>
                                    <h3 className='text-[0.813rem] text-black/40 leading-[15.5px]'>Leonele Messi</h3>
                                    <p className='text-black text-[0.75rem] leading-[14px]'>Man xali 1chi orin olaman, xammeni mazeni qochiraman, ishonurlaring</p>
                                </div>
                            </div>
                        </div>
                    </div>
                }

                {/* home page section */}
                {
                    pathname === '/' &&
                    <HomePageSidebar />
                }

            </div>

            {
                pathname === '/' &&
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
            }

            {
                pathname !== '/' &&
                <div>
                    <div className='flex gap-[20px] mb-[14px]'>
                        <Link href={'/help'} className={`${pathname === "/help" ? "text-purple" : "text-primary"} text-[0.813rem] font-[400] leading-normal`}>
                            Help
                        </Link>
                        <Link href={'/settings'} className={`${pathname === "/settings" ? "text-purple" : "text-primary"} text-[0.813rem] font-[400] leading-normal`}>
                            Settings
                        </Link>
                        <Link href={'/support'} className={`${pathname === "/support" ? "text-purple" : "text-primary"} text-[0.813rem] font-[400] leading-normal`}>
                            Support
                        </Link>
                    </div>

                    <div className='flex gap-[24px]'>
                        <p className='text-black/60 text-[0.813rem] font-[400] leading-normal'>Privacy & Policy</p>
                        <p className='text-black/60 text-[0.813rem] font-[400] leading-normal'>Copyright 2023</p>
                    </div>
                </div>
            }

            {
                pathname === '/' &&
                <div className=''>
                    <Image alt='iphone photo' className='absolute bottom-0 left-[-15px] -z-[20]' width={243} height={268} src={'/elements/iphone-12.png'} />
                    <Image alt='iphone photo' className='absolute bottom-0 right-[20px] -z-[20]' width={243} height={268} src={'/elements/second-phone.png'} />
                </div>
            }
        </div>
    )
}

export default CompanySidebar