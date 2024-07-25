import Image from 'next/image'
import React from 'react'

const CompanyCard = () => {
  return (
    <div className='p-[16px] flex justify-between items-start w-full rounded-[2px] border-[1px] border-solid border-borderColor'>
        <div className='flex gap-[10px] items-center'>

            <div className='w-[50px] h-[50px]'>
                <Image width={50} height={50} src={'/companys/uzummarket.png'} />
            </div>

            <div>
                <h4 className='text-[black] text-[1.125rem] font-[400]'>OOO “Uzum market”</h4>
                <p className='text-[black]/40 text-[0.75rem] font-[400]'>Internet magazin</p>
            </div>
        </div>

        <div className='flex items-center gap-[20px]'>
            <p className='text-[#221C2B] text-[0.75rem] font-[400] leading-[20px]'>☎ +998 123-4‍45-67</p>
            <a href='https://www.youtube.com' target='_blank' className='text-purple text-[0.75rem] font-[400] leading-[20px]'>www.uzum market.uz</a>
            <p className='text-[#221C2B] text-[0.75rem] font-[400] leading-[20px]'>34 videos</p>
        </div>
    </div>
  )
}

export default CompanyCard