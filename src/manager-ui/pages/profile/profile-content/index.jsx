import ProfileEditSection from '@/components/profile-section'
import UserCard from '@/components/user-card'
import React from 'react'

const ProfileContent = ({tab}) => {
  return (
    <div>
        <p className='text-black text-[0.75rem] font-[400] mb-[30px]'>349 obunachilar</p>

        {
          tab === 'default' &&
          <div className='flex flex-col gap-[30px]' style={{height: '61vh', paddingBottom: '20px', overflow: 'auto'}}>
            <UserCard />
            <UserCard />
            <UserCard />
            <UserCard />
            <UserCard />
            <UserCard />
            <UserCard />
          </div>
        }

        {
          tab === 'profile-edit' &&
          <ProfileEditSection />
        }
    </div>
  )
}

export default ProfileContent