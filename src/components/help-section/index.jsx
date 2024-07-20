import CustomButton from '@/system-components/button'
import TextArea from '@/system-components/text-area'
import React from 'react'
import FAQ from '../faq'

const HelpSection = () => {
  return (
    <div className='py-[10px] h-[93vh] overflow-auto'>
        
        {/* Write Text Section */}
        <div className='mb-[30px]'>
            <p className='text-[black] text-[1.5rem] font-[500] leading-[28.5px] mb-[16px]'>Describe your problem</p>
            <div className='mb-[16px]'>
                <TextArea placeholder={"Describe your problem"} cols={50} rows={4} />
            </div>
            <CustomButton padding={'px-[67px] py-[12px]'} text={"отправить"} /> 
        </div>

        {/* FAQ */}
        <FAQ />

        {/* Contact */}
        <div className='mb-[32px]'>
          <div className='w-[375px]'>
            <h4 className='text-[black] text-[1.5rem] leading-[26px] font-[500] mb-[25px]'>Get in touch if you have any questions</h4>
          </div>
          <div className='flex gap-[48px]'>

            {/* Phone Number */}
            <div>
              <p className='text-[black]/30 text-[0.75rem] font-[400]'>Our number:</p>
              <a href='tel:+998900036446' className='text-[black] leading-[19px] text-[1rem] font-[500]'>+998 90 003 64 46</a>
            </div>

            {/* Our location: */}
            <div>
              <p className='text-[black]/30 text-[0.75rem] font-[400]'>Our location:</p>
              <a href='https://yandex.uz/maps/10335/tashkent/?ll=69.279737%2C41.311151&z=12' target='_blank' className='underline text-[black] leading-[19px] text-[1rem] font-[500]'>Parkentskkiy, Ориентир: EVOS</a>
            </div>
          </div>
        </div>

        {/* Social Media */}
    </div>
  )
}

export default HelpSection