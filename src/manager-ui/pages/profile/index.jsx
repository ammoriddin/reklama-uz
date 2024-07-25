"use client"

import ManagerSidebar from '@/containers/manager-sidebar'
import UserData from '@/manager-ui/components/user-data'
import React from 'react'
import ProfileContent from './profile-content'
import { useTab } from '@/hooks/useTab'

const ManagerProfile = () => {
  const [value ,setValue] = useTab()

  return (
    <section className='flex gap-[30px] w-full'>
        {/* Sidebar */}
        <ManagerSidebar />

        {/* Main content */}
        <section className='pt-[20px] flex-grow-[1]'>
            <div style={{width: '820px'}}>
                <UserData setTab={setValue} />
                
                <ProfileContent tab={value} />
            </div>
        </section>
    </section>
  )
}

export default ManagerProfile