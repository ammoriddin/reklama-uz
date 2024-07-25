import ManagerSidebar from '@/containers/manager-sidebar'
import UserData from '@/manager-ui/components/user-data'
import React from 'react'
import ProfileContent from './profile-content'

const ManagerProfile = () => {
  return (
    <section className='flex gap-[30px] w-full'>
        {/* Sidebar */}
        <ManagerSidebar />

        {/* Main content */}
        <section className='pt-[20px] flex-grow-[1]'>
            <div style={{width: '820px'}}>
                <UserData />
                
                <ProfileContent />
            </div>
        </section>
    </section>
  )
}

export default ManagerProfile