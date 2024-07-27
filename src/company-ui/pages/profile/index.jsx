"use client"

import React from 'react'
import { useTab } from '@/hooks/useTab'
import CompanySidebar from '@/company-ui/containers/sidebar'
import ProfileContent from '@/company-ui/components/profile-content'
import UserData from '@/company-ui/components/user-data'
import CompanyCard from './company-card'
import CustomInput from '@/system-components/input'
import CustomButton from '@/system-components/button'

const ManagerProfile = () => {
  const [value ,setValue] = useTab()
  const [sum ,setSum] = useTab()

  return (
    <section className='flex gap-[30px] w-full'>
        {/* Sidebar */}
        <CompanySidebar />

        {/* Main content */}
        <section className='pt-[20px] flex-grow-[1]'>
            <div style={{width: '820px'}}>
                {
                  value !== 'card' &&
                  <UserData setTab={setValue} tab={value} />
                }

                {
                  value === 'card' &&
                  <>
                    <div className='mb-[30px]'>
                      <CompanyCard setTab={setValue} tab={value} />
                    </div>

                    <div className='flex items-center gap-[21px] mb-[30px]'>
                      <p className='text-purple text-[1rem] font-[500]'>+пополнить баланс</p>
                      <div className='w-[2px] h-[24px] bg-borderColor'></div>
                      <p className='text-black text-[1rem] font-[500]'>Снять с баланса</p>
                    </div>

                    <div className='flex flex-col w-[374px] mb-[24px]'>
                      <label htmlFor="sum" className='text-[black]/30 text-[0.75rem] font-[500]'>Enter the sume:</label>
                      <CustomInput type='text' value={sum} setValue={setSum} placeholder={"100 000 000"} />
                    </div>

                    <div className='flex gap-[11px] items-stretch mb-[37px]'>
                      <CustomButton text={'Discard'} padding={'px-[60px] py-[11px]'} style={{color: '#322c39', backgroundColor: '#F5F5F5'}} />
                      <CustomButton text={'перевести в карту'} padding={'px-[44px] py-[12px]'} />
                    </div>

                    <hr className='mb-[28px]' />

                    <div>
                      <p className='text-[black] text-[0.75rem] font-[400] mb-[24px]'>Транзакции</p>

                      <div className='bg-navbarBackground px-[19px] py-[17px] max-w-[204px]'>
                        <h3 className='text-black text-[1.125rem] font-[400] mb-[4px]'>-200 000.00 so’m</h3>
                        <p className='text-black/40 text-[0.75rem] font-[400]'>12.05.2023</p>
                      </div>
                    </div>
                  </>
                }

                <ProfileContent tab={value} />
            </div>
        </section>
    </section>
  )
}

export default ManagerProfile