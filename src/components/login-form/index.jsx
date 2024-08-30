"use client"

import React, { useState } from 'react'
import CustomInput from '@/system-components/input'
import CustomButton from '@/system-components/button'
import Image from 'next/image'

const Form = () => {
  const [phoneNumber, setPhoneNumber] = useState()
  const [password, setPassword] = useState()

    return (
        <form className='flex flex-col items-start max-w-[287px]'>

            {/* Inputs Wrapperpy */}
            <div className='flex flex-col gap-[12px] w-full mb-[35px]'>
                <CustomInput placeholder={'Phone number'} value={phoneNumber} setValue={setPhoneNumber} />
                <CustomInput placeholder={'Enter your password'} value={password} setValue={setPassword} />
            </div>

            {/* Login Button */}
            <CustomButton margin={'mb-[35px]'} widht={'w-full'} text={"Login"} />

            {/* Login With Other Accounts */}
            <div className='flex flex-col gap-[12px] w-full pr-[20px]'>
                <button className='flex p-[15px] w-[auto] items-center gap-[11px] border-[1px] border-solid border-borderColor rounded-[100px]'>
                    <Image src="/social-medias/facebook.svg" alt='facebook icon' width={20} height={20} />
                    <span className='text-[black] text-[0.875rem] font-[500] leading-normal'>Continue with facebook</span>
                </button>

                <button className='flex p-[15px] w-[auto] items-center gap-[11px] border-[1px] border-solid border-borderColor rounded-[100px]'>
                    <Image src="/social-medias/google.svg" alt='google icon' width={20} height={20} />
                    <span className='text-[black] text-[0.875rem] font-[500] leading-normal'>Continue with google</span>
                </button>

                <button className='flex p-[15px] w-[auto] items-center gap-[11px] border-[1px] border-solid border-borderColor rounded-[100px]'>
                    <Image src="/social-medias/wk.svg" alt='wk icon' width={20} height={20} />
                    <span className='text-[black] text-[0.875rem] font-[500] leading-normal'>Continue with vk</span>
                </button>
            </div>
        </form>
    )
}

export default Form