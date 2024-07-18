import React from 'react'
import UserCard from '../user-card'

const RecomendedManager = () => {
  return (
    <section>
        <p className='text-black text-[0.75rem] font-[400] mb-[30px]'>Реккомендуемые СММ Менеджера</p>
    
        <div className='flex flex-col gap-[30px]'>
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

export default RecomendedManager