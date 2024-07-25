"use client"

import { Icons } from '@/icons'
import Link from 'next/link'
import React, { useState } from 'react'
import Form from '../../components/register-steps/register-form'
import Image from 'next/image'
import RegisterSteps from '../../components/register-steps/register-steps'
import Verification from '../../components/register-steps/verificaiton-section'
import LastStep from '../../components/register-steps/register-last-step'

const Register = () => {
  const [step, setStep] = useState(0)

  return (
    <section className='flex'>

        {/* Left Section */}
        <section className='flex flex-col px-[90px] laptop:px-[150px] pb-[30px] w-[55%]'>
            <Link href={'/'} className='flex gap-[10px] mb-[40px] mt-[15px] items-center'>
              <Icons.logo width='42px' height='42px' />
              <h1 className='text-black text-[1.5rem] font-[800] leading-normal font-onest'>onest</h1>
            </Link>

            {/* Register Steps */}
            <div className='mb-[65px]'>
              <RegisterSteps step_counts={[0, 1, 2]} stepin={step} />
            </div>

            {
              step === 0 &&
              <div className='flex-grow-[1]'>
                <h1 className='text-black text-[2.625rem] font-[500] leading-normal mb-[12px]'>Register page</h1>
                <p className='text-black/30 text-[1rem] font-[400] leading-normal mb-[33px]'>Alredy have an accaunt, <Link href={'/login'} className='text-purple'>login</Link></p>
                <Form setStep={setStep} />
              </div>
            }

            {
              step === 1 &&
              <Verification setStep={setStep} />
            }

            {
              step === 2 &&
              <LastStep />
            }
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
        </section>

        {/* Right Section */}
        <section className='w-[45%] overflow-y-hidden h-[100vh] sticky top-0'>
          <div className='absolute flex top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%]'>
            <Icons.logov2 width='90px' height='90px' className='mr-[11px]' />
            <h2 className='font-onest text-[4rem] font-[800] leading-[normal] text-white'>onest</h2>
          </div>
          <Image width={0} height={0} className='w-full h-full object-container object-top' src={'/login-images/first-photo.jpg'} />
        </section>
    </section>
  )
}

export default Register