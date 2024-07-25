import ManagerSidebar from '@/containers/manager-sidebar'
import React from 'react'
import CompanyCard from '../../components/company-card'

const Companys = () => {
  return (
    <section className='flex gap-[30px] w-full px-[50px] laptop:px-[150px]'>
        {/* Sidebar */}
        <ManagerSidebar />

        {/* Main content */}
        <section className='pt-[20px] flex-grow-[1]'>
            <p className='text-[#000] text-[0.75rem] font-[400] mb-[8px]'>Предприятия</p>
            <div className='w-[820px] flex flex-col gap-[8px]'>
                <CompanyCard />
                <CompanyCard />
                <CompanyCard />
            </div>
        </section>
    </section>
  )
}

export default Companys