import { Icons } from '@/icons'
import Image from 'next/image'
import React from 'react'

const UserCard = ({newStory}) => {
  return (
    <div className='flex gap-[10px] items-center relative w-full ml-[5px] flex-grow-[1]'>
        <div className={`bg-transparent relative ${newStory ? "w-[52px] h-[52px]" : "w-[54px] h-[54px]"} flex-shrink-0`}>
            {newStory && <Icons.gradient_line width='60px' height='60px' className='absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]' />}
            <Image className='w-full h-full object-cover object-center' alt='user photo' width={54} height={54} src={'/user-photo.png'} />
        </div>

        <div className='border-b-[1px] border-solid border-borderColor w-full pb-[10px]'>
            <p className='text-black text-[1.125rem] font-[400]'>Лолита Пушкина <span className='text-purple font-[500]'>©</span></p>
            <p className='text-black/40 text-[0.75rem] font-[400]'>Marketolog, SMM.m</p>
        </div>
    </div>
  )
}

export default UserCard