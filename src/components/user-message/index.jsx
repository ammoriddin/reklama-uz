import Image from 'next/image'
import React from 'react'

const UserMessage = () => {
  return (
    <div className='flex gap-[5px] items-center'>

        {/* profile photo */}
        <div className='w-[36px] h-[36px] flex-shrink-0'>
            <Image alt='pepsi logo' className='w-full h-full object-cover rounded-[50%]' src={'/companys/pepsi.png'} width={36} height={36} />
        </div>

        <div>
            <h3 className='text-[0.813rem] text-black/40 leading-[15.5px]'>Leonele Messi</h3>
            <p className='text-black text-[0.75rem] leading-[14px]'>Man xali 1chi orin olaman, xammeni mazeni qochiraman, ishonurlaring</p>
        </div>
    </div>
  )
}

export default UserMessage