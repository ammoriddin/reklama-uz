"use client"

import { Icons } from '@/icons'
import CustomButton from '@/system-components/button'
import PhoneNumberInput from '@/system-components/phone-number'
import VerificationCodePlace from '@/system-components/verification-code-place'
import React, { useState } from 'react'

const Verification = ({setStep}) => {
  const [phoneNumber, setPhoneNumber] = useState()

  return (
    <div className='flex-grow-[1] w-[287px]'>
      
      {/* Enter Phone Number Section */}
      <div className='mb-[40px]'>
        <PhoneNumberInput value={phoneNumber} setValue={setPhoneNumber}  />
      </div>

      {/* Enter SMS Code Section */}
      <p className='text-[black] text-[1rem] font-[500] mb-[12px]'>Enter a sms code</p>

      {/* Verification Code Place */}
      <div className='mb-[24px]'>
        <VerificationCodePlace />
      </div>

      <div className='flex gap-[6px] items-center cursor-pointer mb-[35px]'>
        <Icons.replay width='20px' height='20px' stroke="#eee" />
        <p className='text-black/20'>Resent code</p>
      </div>

      <CustomButton onClickFunction={() => setStep(prev => prev + 1)} text={"Continue"} widht={'w-full'} />
    </div>
  )
}

export default Verification