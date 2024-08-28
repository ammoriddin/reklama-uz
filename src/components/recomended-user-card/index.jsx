"use client"

import Image from 'next/image'
import React, { useState } from 'react'

const RecomendedUser = ({ image, name, position, isSubscribed, companys }) => {
  const [subscribe, setSubscribe] = useState(isSubscribed)

  return (
    <div className='w-full flex justify-between items-center'>
      <div className='flex gap-[10px] items-center relative w-full'>
        <div className={`bg-white w-[54px] h-[54px]`}>
            <Image alt='image' className='w-full h-full object-cover object-center rounded-[50%]' width={54} height={54} src={image} />
        </div>

        <div className='border-b-[1px] border-solid border-borderColor w-full pb-[10px] flex items-center'>
          <div className='flex-grow-[1]'>
            <p className='text-black text-[1.125rem] font-[400]'>{name} <span className='text-purple font-[500]'>©</span></p>
            <p className='text-black/40 text-[0.75rem] font-[400]'>{position}</p>
          </div>

          <div className='flex gap-[-20px] mr-[20px]'>
            {
              companys.map((item, index) => (
                <div key={index} className='border-[4px] border-solid border-white w-[30px] rounded-[50%] mr-[-10px] h-[30px]'>
                  <Image alt='image' width={30} height={30} className='w-full h-full rounded-[50%]' src={item.image} />
                </div>
              ))
            }
          </div>

          <button onClick={() => setSubscribe(true)} className={`py-[4px] px-[14px] border-solid ${subscribe ? "border-[#04A553] text-[#04A553]" : "border-purple text-purple"} text-[0.813rem] font-[400] rounded-[42px] border-[1px]`}>
            {subscribe ? "Приглашение принято" : "+ Подписаться"}
          </button>
        </div>
      </div>

    </div>
  )
}

export default RecomendedUser