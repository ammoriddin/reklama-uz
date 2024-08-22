"use client"

import Image from 'next/image'
import React from 'react'
import Form from '../../components/login-form'
import Link from 'next/link'
import { Icons } from '@/icons'
import { useRouter } from 'next/navigation'

const Page = () => {
  const router = useRouter()

  const handleRoleSelection = (role) => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('role', role);
      localStorage.setItem('token', 'asdfadfadsf');
      router.push("/")
    }
  };

  return (
    <section className='flex justify-between'>

        {/* Left Section */}
        <section className='flex flex-col px-[150px] justify-between pb-[30px] w-[55%]'>
            <Link href={'/'} className='flex gap-[10px] mt-[15px] items-center'>
              <Icons.logo />
            </Link>

            <div>
                <h1 className='text-black text-[2.625rem] font-[500] leading-normal mb-[12px]'>Login page</h1>
                <p className='text-black/30 text-[1rem] font-[400] leading-normal mb-[43px]'>Don't have an account? <Link href={'/register'} className='text-purple'>Register</Link></p>
                <Form />
            </div>

            <div>
              <button
                onClick={() => handleRoleSelection(2)}
                className='text-primary block cursor-pointer text-[0.813rem] font-[400] leading-normal hover:underline transition-all hover:text-purple mb-[8px]'
              >
                Для SMM-менеджеров
              </button>
              <button
                onClick={() => handleRoleSelection(3)}
                className='text-primary cursor-pointer text-[0.813rem] font-[400] leading-normal mb-[22px]'
              >
                Для предприятия
              </button>

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
        </section>

        {/* Right Section */}
        <section className='w-[45%] overflow-y-hidden h-[100vh] sticky top-0'>
          <div className='absolute flex top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%]'>
            <Icons.logov2 />
          </div>
          <Image width={0} height={0} className='w-full h-full object-container object-top' src={'/login-images/first-photo.jpg'} />
        </section>
    </section>
  )
}

export default Page