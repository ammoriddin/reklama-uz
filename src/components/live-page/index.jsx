"use client"

import useUserRegister from '@/hooks/useUserRegister/useUserRegister'
import React from 'react'
import UserProfileSidebar from '../user-profile'
import LiveSection from '../live-section'
import RightSidebar from './(right-sidebar)'

const LivePage = () => {

    useUserRegister()

    return (
        <section className='flex gap-[30px] px-[150px]'>

            {/* Sidebar */}
            <UserProfileSidebar />
    
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