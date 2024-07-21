import React from 'react'
import SettingCard from './setting-card'
import { Icons } from '@/icons'

const SettingsSection = () => {
  return (
    <div className='pr-[100px] mr-auto block'>
        <h3 className='text-black text-[1.5rem] font-[500] leading-[28px] mb-[16px]'>Website settings</h3>
        <div className='flex flex-col gap-[8px]'>
            <SettingCard icon={<Icons.settings fill='#322C39' width='24px' height='24px' />} text={"Notifications"} desc={"turn on or off the notifications in the website"} />
            <SettingCard icon={<Icons.settings fill='#322C39' width='24px' height='24px' />} text={"Notifications"} desc={"turn on or off the notifications in the website"} />
            <SettingCard icon={<Icons.settings fill='#322C39' width='24px' height='24px' />} text={"Notifications"} desc={"turn on or off the notifications in the website"} />
        </div>
    </div>
  )
}

export default SettingsSection