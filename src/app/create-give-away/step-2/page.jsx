import GiveAwayStep2 from '@/components/give-away-section/step-2'
import UserProfileSidebar from '@/components/user-profile'
import React from 'react'

const GiveAway = () => {
  return (
    <section className='flex gap-[30px] px-[150px]'>

      {/* Sidebar */}
      <UserProfileSidebar />

      {/* Main Contnet */}
      <section className='pt-[20px] h-[93vh] overflow-auto flex-grow-[1]'>
        <GiveAwayStep2 />
      </section>

      {/* Right Sidebar */}
  </section>
  )
}

export default GiveAway