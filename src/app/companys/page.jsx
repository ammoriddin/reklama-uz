import ManagerSidebar from '@/containers/manager-sidebar'
import React from 'react'
import CompanyCard from '../../components/company-card'

const Companys = () => {
  const data = [
    {
      image: '/companys/uzummarket.png',
      companyName: 'Uzum Market',
      companyPosition: 'Internet Magazin',
      videos: 64,
      link: 'www.uzummarket.uz'
    },
    {
      image: '/companys/bmw.png',
      companyName: 'BMW',
      companyPosition: 'Mashina Ishlab Chiqarish',
      videos: 22,
      link: 'www.bmw.com'
    },
    {
      image: '/companys/pepsi.png',
      companyName: 'Pepsi',
      companyPosition: 'Ichimlik Fabrikasi',
      videos: 12,
      link: 'www.pepsi.com'
    },
  ]

  return (
    <section className='flex gap-[30px] w-full px-[50px] laptop:px-[150px]'>
        {/* Sidebar */}
        <ManagerSidebar />

        {/* Main content */}
        <section className='pt-[20px] flex-grow-[1]'>
            <p className='text-[#000] text-[0.75rem] font-[400] mb-[8px]'>Предприятия</p>
            <div className='w-[820px] flex flex-col gap-[8px]'>
                {
                  data.map((item,index) => {
                    return (
                      <CompanyCard key={index} videos={item.videos} link={item.link} img={item.image} companyName={item.companyName} companyPosition={item.companyPosition} />
                    )
                  })
                }
            </div>
        </section>
    </section>
  )
}

export default Companys