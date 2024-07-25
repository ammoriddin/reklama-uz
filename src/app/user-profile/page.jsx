"use client"

import React from 'react'
import FirstRoleProfile from './(user)'
import ManagerProfile from '@/manager-ui/pages/profile'
import CompanyIsProfile from '@/company-ui/pages/profile'
import FilterUserRols from '@/filter-rols/useUserRole/useUserRole'

const UserProfile = () => {

  return (
    <section className='flex gap-[30px] px-[50px] laptop:px-[150px]'>
      <FilterUserRols firstComponent={<FirstRoleProfile />} secondComponent={<ManagerProfile />} thirdComponent={<CompanyIsProfile />}  />
    </section>
  )
}

export default UserProfile