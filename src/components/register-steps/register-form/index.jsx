"use client"

import React, { useEffect, useState } from 'react'
import CustomInput from '@/system-components/input'
import CustomButton from '@/system-components/button'
import DateInput from '@/system-components/date-input'

const Form = ({setStep}) => {
  const [userName, setUserName] = useState()
  const [password, setPassword] = useState()
  const [date, setDate] = useState()
  const [country, setCountry] = useState()
  const [isMail, setIsMail] = useState(null)
  const [isRegister, setIsRegister] = useState(false)

  useEffect(() => {
    if (userName, date, country, password, isMail != null) {
        setIsRegister(true)
    } else {
        setIsRegister(false)
    }
  }, [userName, date, country, password, isMail])
  

    return (
        <form className='flex flex-col items-start max-w-[287px]'>

            {/* Inputs Wrapperpy */}
            <div className='flex flex-col gap-[12px] w-full mb-[40px]'>
                <CustomInput placeholder={'User Name'} value={userName} setValue={setUserName} />
                <DateInput placeholder={'Enter your age'} value={date} setValue={setDate} />
                <CustomInput placeholder={'Country'} value={country} setValue={setCountry} />
                <CustomInput type='password' placeholder={'Create your password'} value={password} setValue={setPassword} />
            </div>

            {/* Gender */}
            <div className='flex mb-[90px] items-center justify-evenly w-full'>
                <p onClick={() => setIsMail(true)} className={`${isMail === true ? "text-purple" : "text-black"} cursor-pointer text-[1rem] font-[500]`}>Erkak</p>
                <span className='h-[24px] w-[2px] bg-hrColor'></span>
                <p onClick={() => setIsMail(false)} className={`${isMail === false ? "text-purple" : "text-black"} cursor-pointer text-[1rem] font-[500]`}>Ayol</p>
            </div>

            {/* Agree */}
            <div className='flex gap-[6px] mb-[16px]'>
                <input type="checkbox" />
                <p className='text-black/60 text-[0.875rem] font-[400]'>I agree to the <span className='text-purple'>privacy policy</span></p>
            </div>

            {/* Register Button */}
            <CustomButton onClickFunction={() => setStep(prev => prev + 1)} margin={'mb-[35px]'} widht={'w-full'} text={"Register"} type={isRegister === true ? "" : "disabled"} />
        </form>
    )
}

export default Form