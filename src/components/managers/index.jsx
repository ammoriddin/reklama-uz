import React from 'react'
import UserCard from '../user-card'

const MyManagers = () => {
  return (
    <section>
        <p className='text-black text-[0.75rem] font-[400] mb-[30px]'>Мои СММ менеджера</p>
    
        <div className='flex flex-col gap-[30px] w-full'>
            <UserCard newStory={true} />
            <UserCard newStory={false} />
            <UserCard newStory={false} />
            <UserCard newStory={true} />
            <UserCard newStory={true} />
            <UserCard newStory={false} />
        </div>
    </section>
  )
}

export default MyManagers