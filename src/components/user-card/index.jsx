import { Icons } from '@/icons'
import Image from 'next/image'
import React from 'react'

const UserCard = ({newStory}) => {
  return (
    <div className='flex gap-[10px] items-center relative w-full flex-grow-[1]'>
        {newStory && <Icons.gradient_line className='' />}
        <div className={`${newStory === true ? "p-[4px]" : ""} bg-transparent ${newStory === true ? "ml-[-62px]" : ""} w-[54px] h-[54px]`}>
            <Image width={54} height={54} src={'/user-photo.png'} />
        </div>

        <div className='border-b-[1px] border-solid border-borderColor w-full pb-[10px]'>
            <p className='text-black text-[1.125rem] font-[400]'>Лолита Пушкина <span className='text-purple font-[500]'>©</span></p>
            <p className='text-black/40 text-[0.75rem] font-[400]'>Marketolog, SMM.m</p>
        </div>
    </div>
  )
}

export default UserCard