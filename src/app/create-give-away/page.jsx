import GiveAwaySection from '@/components/give-away-section'
import ManagerSidebar from '@/containers/manager-sidebar'
import React from 'react'

const GiveAway = () => {
  return (
    <section className='flex gap-[30px] px-[50px] laptop:px-[150px]'>

      {/* Sidebar */}
      <ManagerSidebar />

      {/* Main Contnet */}
      <section className='pt-[20px] h-[93vh] overflow-auto flex-grow-[1]'>
        <GiveAwaySection />
      </section>

      {/* Right Sidebar */}
  </section>
  )
}

export default GiveAway