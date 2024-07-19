import { Icons } from '@/icons'
import Image from 'next/image'
import React from 'react'

const RecomendedUser = ({ isSubscribed}) => {
  return (
    <div className='w-full flex justify-between items-center'>
      <div className='flex gap-[10px] items-center relative w-full'>
        <div className={`bg-white w-[54px] h-[54px]`}>
            <Image width={54} height={54} src={'/user-photo.png'} />
        </div>

        <div className='border-b-[1px] border-solid border-borderColor w-full pb-[10px] flex items-center'>
          <div className='flex-grow-[1]'>
            <p className='text-black text-[1.125rem] font-[400]'>Лолита Пушкина <span className='text-purple font-[500]'>©</span></p>
            <p className='text-black/40 text-[0.75rem] font-[400]'>Marketolog, SMM.m</p>
          </div>

          <div className='flex gap-[-20px] mr-[20px]'>
            <div className='border-[4px] border-solid border-white w-[30px] rounded-[50%] mr-[-10px] h-[30px]'>
              <Image width={30} height={30} className='w-full h-full rounded-[50%]' src={'/companys/pepsi.png'} />
            </div>
            <div className='border-[4px] border-solid border-white w-[30px] rounded-[50%] mr-[-10px] h-[30px]'>
              <Image width={30} height={30} className='w-full h-full rounded-[50%]' src={'/companys/bmw.png'} />
            </div>
            <div className='border-[4px] border-solid border-white w-[30px] rounded-[50%] mr-[-10px] h-[30px]'>
              <Image width={30} height={30} className='w-full h-full rounded-[50%]' src={'/companys/uzummarket.png'} />
            </div>
            <div className='border-[4px] border-solid border-white w-[30px] rounded-[50%] h-[30px]'>
              <Image width={30} height={30} className='w-full h-full rounded-[50%]' src={'/companys/onest.png'} />
            </div>
          </div>

          <button className='py-[4px] px-[14px] border-solid border-purple text-purple text-[0.813rem] font-[400] rounded-[42px] border-[1px]'>
            + Подписаться
          </button>
        </div>
      </div>

    </div>
  )
}

export default RecomendedUser