import HelpSection from '@/components/help-section'
import UserProfileSidebar from '@/components/user-profile'
import React from 'react'

const Help = () => {
  return (
    <section className='flex gap-[30px] px-[50px] laptop:px-[150px]'>

      {/* Sidebar */}
      <UserProfileSidebar />

      {/* Main Contnet */}
      <section className='pt-[20px] h-[93vh] overflow-auto flex-grow-[1]'>
        <HelpSection />
      </section>
  </section>
  )
}

export default Help