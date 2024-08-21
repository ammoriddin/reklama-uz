"use client"

import React, { Suspense } from 'react'
import UserProfileSidebar from '../user-profile'
import ReelsSection from '../reels'
import RightSidebar from './right-sidebar'
import FilterUserRols from '@/filter-rols/useUserRole/useUserRole'
import ManagerSidebar from '@/containers/manager-sidebar'
import CompanySidebar from '@/company-ui/containers/sidebar'

const HomePage = () => {

  return (
    <section className='flex gap-[30px] px-[50px] laptop:px-[150px]'>

      {/* Sidebar */}
      <FilterUserRols firstComponent={<UserProfileSidebar />} secondComponent={<ManagerSidebar />} thirdComponent={<CompanySidebar />} />

      {/* Main Contnet */}
      <section className='pt-[20px] pb-[30px] h-[93vh] flex-grow-[1]'>
        <ReelsSection />
      </section>

      {/* Right Sidebar */}
      <RightSidebar />
  </section>
  )
}

export default HomePage