import ToggleSwitchButton from '@/system-components/toggle-button'
import React from 'react'

const SettingCard = ({text, desc, icon}) => {
  return (
    <div className='border-[1px] border-borderColor border-solid rounded-[2px] py-[16px] px-[30px] flex items-center justify-between'>
        <div className='flex items-center gap-[20px]'>
            {icon}
            <div>
                <h4 className='text-black text-[1.125rem] font-[400] leading-[21px]'>{text}</h4>
                <p className='text-black/40 font-[400] text-[0.75rem]'>{desc}</p>
            </div>
        </div>
        <ToggleSwitchButton />
    </div>
  )
}

export default SettingCard