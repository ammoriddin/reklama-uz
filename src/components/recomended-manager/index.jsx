import React from 'react'
import RecomendedUser from '../recomended-user-card'

const RecomendedManager = () => {
  return (
    <section>
        <p className='text-black text-[0.75rem] font-[400] mb-[30px]'>Реккомендуемые СММ Менеджера</p>
    
        <div className='flex flex-col gap-[30px]'>
            <RecomendedUser />
            <RecomendedUser />
            <RecomendedUser />
        </div>
    </section>
  )
}

export default RecomendedManager