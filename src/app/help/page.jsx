import CompanySidebar from '@/company-ui/containers/sidebar'
import HelpSection from '@/components/help-section'
import UserProfileSidebar from '@/components/user-profile'
import ManagerSidebar from '@/containers/manager-sidebar'
import FilterUserRols from '@/filter-rols/useUserRole/useUserRole'
import React from 'react'

const Help = () => {
  return (
    <section className='flex gap-[30px] px-[50px] laptop:px-[150px]'>

      {/* Sidebar */}
      <FilterUserRols firstComponent={<UserProfileSidebar />} secondComponent={<ManagerSidebar />} thirdComponent={<CompanySidebar />} />

      {/* Main Contnet */}
      <section className='pt-[20px] h-[93vh] overflow-auto flex-grow-[1]'>
        <HelpSection />
      </section>
  </section>
  )
}

export default Help