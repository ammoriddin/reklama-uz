import Image from 'next/image'
import React from 'react'

const MessageCard = ({image, name, isSubscribe}) => {
  return (
    <div className='flex items-center'>
        <Image src={image} width={54} height={54} className='mr-[10px] w-[54px] h-[54px] rounded-[50%] object-contain object-center' />
        <div className='flex w-full justify-between items-center border-borderColor pb-[10px] mb-[-10px] border-solid border-b-[1px]'>
            <div>
                <h4 className='text-black text-[1.125rem] font-[400]'>{name}</h4>

                <p className='text-black/40 text-[0.75rem] font-[400]'>Запрос на сотрудничество к компании OOO “Uzum” в роль SMM менеджера</p>
            </div>

            <button className={`${isSubscribe ? "border-[#04a554] text-[#04a554]" : "border-purple text-purple"} border-solid border-[1px] px-[8px] py-[2px] text-[0.75rem] rounded-[42px]`}>{isSubscribe ? "Приглашение принято" : "+ Принять приглашение"}</button>
        </div>
    </div>
  )
}

export default MessageCard