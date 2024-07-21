"use client"

import { Icons } from '@/icons'
import CustomButton from '@/system-components/button'
import CustomInput from '@/system-components/input'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'

const Card = ({tab, setTab}) => {
  const [logout, setlogout ] = useState(false)
  const [sum, setSum] = useState()

  useEffect(() => {
    if (logout === true) {
      window.localStorage.removeItem("token")
    }
  }, [logout])

  return (
    <>
      <div className='w-full relative rounded-[8px] p-[24px] overflow-hidden mb-[30px]'>
        <Image src={'/card/cardbg.jpg'} width={0} height={0} className='w-full -z-[11] h-full absolute top-0 left-0 object-cover object-left-top' />
        <div className='w-full flex justify-end gap-[24px] mb-[99px]'>
          <button onClick={() => setTab('my-statistics')} className='flex items-center gap-[4px]'>
            <Icons.statsIcon stroke="#ffffff80" />
            <span className='text-white/70 text-[0.813rem] leading-[15.51px] font-[400]'>My statistics</span>
          </button>

          <button onClick={() => setTab('profile-edit')} className='flex items-center gap-[4px]'>
            <Icons.edit stroke="#ffffff80" />
            <span className='text-white/70 text-[0.813rem] leading-[15.51px] font-[400]'>Profile edit</span>
          </button>

          <button onClick={() => setTab('card')} className='flex items-center gap-[4px]'>
            <Icons.card fill='#fff' />
            <span className={`text-white text-[0.813rem] leading-[15.51px] font-[400]`}>Card</span>
          </button>

          <button onClick={() => setlogout(true)} className='flex items-center gap-[4px]'>
            <Icons.logout fill="#ffffff80" />
            <span className='text-white/70 text-[0.813rem] leading-[15.51px] font-[400]'>Log out</span>
          </button>
        </div>

        <div className='flex items-center justify-between mb-[26px]'>
          <h4 className='text-white font-[500] text-[2.25rem] leading-[43px]'>8600 0575 **** ****</h4>
          <div className='flex items-center gap-[12px]'>
            <button className='cursor-pointer flex items-center justify-center p-[10px] border-[white]/40 border-[1px] border-solid rounded-[50%] w-[36px] h-[36px]'>
              <Icons.arrow fill='white' />
            </button>
            <button className='cursor-pointer flex items-center justify-center p-[10px] border-[white]/40 border-[1px] border-solid rounded-[50%] w-[36px] h-[36px]'>
              <Icons.home fill='white' />
            </button>
          </div>
        </div>

        <div className='flex justify-between items-center'>
          <div className='flex items-start gap-[120px] '>

            <div>
              <p className='text-white/40 text-[0.875rem] font-[400] leading-[16.5px] mb-[3px]'>Cardholder:</p>
              <h4 className='text-white text-[1rem] font-[400] leading-[19px]'>Shaxriyor Oripov</h4>
            </div>

            <div>
              <p className='text-white/40 text-[0.875rem] font-[400] leading-[16.5px] mb-[3px]'>month/year</p>
              <h4 className='text-white text-[1rem] font-[400] leading-[19px]'>24/54</h4>
            </div>
          </div>

          <Image src={'/click.png'} width={58} height={58} className='flex-shrink-0' />
        </div>
      </div>
      <div className='mb-[24px]'>
        <p className='text-[black]/30 font-[500] text-[0.75rem] leading-[14px] mb-[11px]'>Enter the sume:</p>
        <CustomInput type='number' value={sum} setValue={setSum} />
      </div>
      <div className='flex gap-[11px] items-stretch'>
        <CustomButton text={'Discard'} padding={'px-[60px] py-[11px]'} style={{color: '#322c39', backgroundColor: '#F5F5F5'}} />
        <CustomButton text={'перевести в карту'} padding={'px-[44px] py-[12px]'} />
      </div>
    </>
  )
}

export default Card