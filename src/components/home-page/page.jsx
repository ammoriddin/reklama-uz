"use client"

import React from 'react'
import UserProfileSidebar from '../user-profile'
import ReelsSection from '../reels'
import RightSidebar from './right-sidebar'

const HomePage = () => {

  return (
    <section className='flex gap-[30px] px-[50px] laptop:px-[150px]'>

      {/* Sidebar */}
      <UserProfileSidebar />

      {/* Main Contnet */}
      <section className='pt-[20px] h-[93vh] flex-grow-[1]'>
        <ReelsSection />
      </section>

      {/* Right Sidebar */}
      <RightSidebar />
  </section>
  )
}

export default HomePage