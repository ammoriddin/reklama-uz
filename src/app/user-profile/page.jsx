"use client"

import MyManagers from '@/components/managers'
import RecomendedManager from '@/components/recomended-manager'
import StatsLikesComent from '@/components/stats'
import UserData from '@/components/user-data'
import UserProfileSidebar from '@/components/user-profile'
import { useTab } from '@/hooks/useTab'
import { Icons } from '@/icons'
import CustomSelect from '@/system-components/slelect-input'
import React from 'react'

const UserProfile = () => {
  const [value, setValue] = useTab()

  return (
    <section className='flex gap-[30px] px-[150px]'>

      {/* Sidebar */}
      <UserProfileSidebar />

      {/* Main Contnet */}
      <section className='pt-[20px] flex-grow-[1]'>

        {/* User Profile Data */}
        <div className='mb-[35px]'>
          <UserData tab={value} setTab={setValue} />
        </div>

        {/* Search User */}
        {
          value === "default" && 
          <div className='flex items-center gap-[11px] mb-[18px]'>
            <Icons.searchIcon width='32px' height='32px' />
            <input className='placeholder:text-black/30 text-[1rem] font-[500]' placeholder='@username'/>
          </div>
        }

        {
          value === "my-statistics" && 
          <>
            <div className='mb-[28px]'>
              <CustomSelect placeholder={'Select the date'} width={"w-[287px]"} />
            </div>

            <StatsLikesComent />
          </>
        }

        <section className='h-[60vh] overflow-auto'>
          {
            value === "default" && 
            <>
              {/* MY SMM Managers */}
                <div className='mb-[35px]'>
                <MyManagers />
              </div>
              <RecomendedManager />
            </>
          }
        </section>
      </section>
    </section>
  )
}

export default UserProfile