import CompanySidebar from '@/company-ui/containers/sidebar'
import RecomendedManager from '@/components/recomended-manager'
import UserProfileSidebar from '@/components/user-profile'
import ManagerSidebar from '@/containers/manager-sidebar'
import FilterUserRols from '@/filter-rols/useUserRole/useUserRole'
import React from 'react'

const MyManagers = () => {
  return (
    <section className='flex gap-[30px] px-[50px] laptop:px-[150px]'>
        {/* Sidebar */}
        <FilterUserRols firstComponent={<UserProfileSidebar />} secondComponent={<ManagerSidebar />} thirdComponent={<CompanySidebar />} />

        {/* Main Contnet */}
        <section className='pt-[20px] overflow-auto pb-[40px] h-[93vh] flex-grow-[1]'>
          <RecomendedManager />
        </section>
    </section>
  )
}

export default MyManagers