"use client"

import React from 'react'
import { useTab } from '@/hooks/useTab'
import CompanySidebar from '@/company-ui/containers/sidebar'
import ProfileContent from '@/company-ui/components/profile-content'
import UserData from '@/company-ui/components/user-data'

const ManagerProfile = () => {
  const [value ,setValue] = useTab()

  return (
    <section className='flex gap-[30px] w-full'>
        {/* Sidebar */}
        <CompanySidebar />

        {/* Main content */}
        <section className='pt-[20px] flex-grow-[1]'>
            <div style={{width: '820px'}}>
                <UserData setTab={setValue} tab={value} />

                <ProfileContent tab={value} />
            </div>
        </section>
    </section>
  )
}

export default ManagerProfile