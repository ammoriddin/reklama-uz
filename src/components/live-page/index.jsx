"use client"

// import useUserRegister from '@/hooks/useUserRegister/useUserRegister'
import React from 'react'
import LiveSection from '../live-section'
import RightSidebar from './(right-sidebar)'
import CompanySidebar from '@/company-ui/containers/sidebar'
import UserProfileSidebar from '@/components/user-profile'
import ManagerSidebar from '@/containers/manager-sidebar'
import FilterUserRols from '@/filter-rols/useUserRole/useUserRole'


const LivePage = () => {

    // useUserRegister()

    return (
        <section className='flex gap-[30px] px-[50px] laptop:px-[150px]'>

            {/* Sidebar */}
            <FilterUserRols firstComponent={<UserProfileSidebar />} secondComponent={<ManagerSidebar />} thirdComponent={<CompanySidebar />} />

    
            {/* Main Contnet */}
            <section className='pt-[20px] h-[93vh] overflow-auto flex-grow-[1]'>
                <LiveSection />
            </section>

            {/* Right Sidebar */}
            <RightSidebar />
        </section>
    )
}

export default LivePage