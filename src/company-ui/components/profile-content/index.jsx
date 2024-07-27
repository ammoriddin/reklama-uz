"use client"

import ProfileEditSection from '@/components/profile-section'
import RecomendedManager from '@/components/recomended-manager'
import { Icons } from '@/icons'
import SearchInput from '@/system-components/search-input'
import React, { useState } from 'react'

const ProfileContent = ({tab}) => {
    const [inputState, setInputState] = useState()
  
    return (
        <div>
            {
            tab === 'default' &&
                <div>
                    <div className='mb-[24px]'>
                        <SearchInput value={inputState} setValue={setInputState} />
                    </div>
                    <p className='text-[0.75rem] text-[black] font-[400] mb-[24px]'>Рекомендованные</p>
                    
                    <div className='flex flex-col items-center gap-[10px] w-full mb-[24px]'>
                        <Icons.addUser width='36px' height='36px' fill='#625376' />
                        <p className='text-[#625376] text-[0.875rem] font-[400]'>у вас нету прикрепленных SMM менеджеров</p>
                    </div>

                    <p className='text-black text-[0.75rem] font-[400] mb-[30px]'>Реккомендуемые СММ Менеджера</p>

                    <div className='h-[42.5vh] pb-[20px] overflow-auto'>
                        <RecomendedManager />
                    </div>
                </div>
            }

            {
            tab === 'profile-edit' &&
            <ProfileEditSection />
            }
        </div>
    )
}

export default ProfileContent