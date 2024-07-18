import MyManagers from '@/components/managers'
import RecomendedManager from '@/components/recomended-manager'
import UserData from '@/components/user-data'
import UserProfileSidebar from '@/components/user-profile'
import { Icons } from '@/icons'
import React from 'react'

const UserProfile = () => {
  return (
    <section className='flex gap-[30px] px-[150px]'>

      {/* Sidebar */}
      <UserProfileSidebar />

      {/* Main Contnet */}
      <section className='pt-[20px] flex-grow-[1] '>

        {/* User Profile Data */}
        <div className='mb-[35px]'>
          <UserData />
        </div>

        {/* Search User */}
        <div className='flex items-center gap-[11px] mb-[18px]'>
          <Icons.searchIcon width='32px' height='32px' />
          <p className='text-black/30 text-[1rem] font-[500] '>@username</p>
        </div>

        {/* MY SMM Managers */}
        <div className='mb-[35px]'>
          <MyManagers />
        </div>
        <RecomendedManager />
      </section>
    </section>
  )
}

export default UserProfile