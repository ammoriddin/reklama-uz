"use client"

import { Icons } from '@/icons'
import React, { useEffect, useState } from 'react'
import StatsChart from '../stats-chart'

const UserData = ({tab, setTab}) => {
  const [logout, setlogout ] = useState(false)

  useEffect(() => {
    if (logout === true) {
      window.localStorage.removeItem("token")
    }
  }, [logout])

  const firstChartData = {
    labels: ["", "", "", "", "", "", "","", "", "", "", "", "", "",],
    datasets: [
      {
        data: [18, 20, 25, 16, 29, 30, 25,8, 20, 25, 16, 29, 30, 25,],
        backgroundColor: 'transparent',
        borderColor: '#7000FF',
        pointBorderColor: 'transparent',
        pointBorderWidth: 4,
        tension: 0.4,
        fill: false,
      },
    ],
  }

  const secondChartData = {
    labels: ["", "", "", "", "", "", "","", "", "", "", "", "", "",],
    datasets: [
      {
        data: [30, 20, 22, 15, 25, 28, 22, 12, 14, 25, 15, 25, 28, 32,],
        backgroundColor: 'transparent',
        borderColor: '#FF0000',
        pointBorderColor: 'transparent',
        pointBorderWidth: 4,
        tension: 0.4,
        fill: false,
      },
    ],
  }

  return (
    <div className='px-[32px] w-full py-[24px] border-[1px] h-auto border-solid border-borderColor rounded-[3px]'>
      <div className='flex items-start justify-between'>

        {
          tab === "default" &&
          <div className='flex gap-[12px] items-center mt-[8px]'>
            <div className='bg-navbarBackground p-[12px] w-[95px] h-[95px] rounded-[50%] flex items-center justify-center'>
              <Icons.user width='32px' height='32px' />
            </div>

            <div>
              <p className='text-black text-[2.25rem] font-[500]'>Shaxiryor274</p>
              <span className='text-black/30 font-[500] text-[1rem]'>Ux Ui designer</span>
            </div>
          </div>
        }

        {
          tab === "my-statistics" &&
          <div className='mt-[8px] relative h-[200px]'>
            <div className='absolute top-[40px]'>
              <StatsChart data={firstChartData} />
            </div>
            <div className='absolute top-[-2px]'>
              <StatsChart data={secondChartData} />
            </div>
          </div>
        }

        {
          tab === "profile-edit" &&
          <div className='mt-[8px]'>
            profile-edit
          </div>
        }

        {/* Functions */}
        <div className='flex items-center gap-[24px]'>
          
          {/* statistics */}
          <div onClick={() => setTab('my-statistics')} className='flex gap-[4px] items-center cursor-pointer'>
            <Icons.statsIcon stroke={tab === "my-statistics" ? "#7000ff" : "#322c39"} />
            <button className={`${tab === 'my-statistics' ? "text-purple" : "text-black"} font-[400 text-[0.813rem]`}>My statistics</button>
          </div>

          {/* edit profile */}
          <div onClick={() => setTab('profile-edit')} className='flex gap-[4px] items-center cursor-pointer'>
            <Icons.edit stroke={tab === "profile-edit" ? "#7000ff" : "#322c39"} />
            <button className={`${tab === 'profile-edit' ? "text-purple" : "text-black"} font-[400 text-[0.813rem]`}>Profile edit</button>
          </div>

          {/* card */}
          <div onClick={() => setTab('card')} className='flex gap-[4px] items-center cursor-pointer'>
            <Icons.card fill={tab === "card" ? "#7000ff" : "#322c39"} />
            <button className={`${tab === 'card' ? "text-purple" : "text-black"} font-[400 text-[0.813rem]`}>Card</button>
          </div>

          {/* log out */}
          <div className='flex gap-[4px] items-center cursor-pointer'>
            <Icons.logout />
            <button onClick={() => setlogout(true)} className='font-[400 text-[0.813rem] text-red'>Log out</button>
          </div>
        </div>
      </div>

      {
        tab === "default" &&
        <div className='pl-[110px] flex flex-wrap gap-[28px] w-[700px]'>
          <p className='text-[0.875rem] font-[400] text-black'># ingliz tili</p>
          <p className='text-[0.875rem] font-[400] text-black'>#  ✒️ dizayn</p>
          <p className='text-[0.875rem] font-[400] text-black'># 👕 futbolkalar</p>
          <p className='text-[0.875rem] font-[400] text-black'># 👕 futbolkalar</p>
          <p className='text-[0.875rem] font-[400] text-black'># 👖 shim</p>
          <p className='text-[0.875rem] font-[400] text-black'># 👕 futbolkalar</p>
          <p className='text-[0.875rem] font-[400] text-black'># 👕 ayti</p>
          <p className='text-[0.875rem] font-[400] text-black'># 👖 shim</p>
        </div>
      }
    </div>
  )
}

export default UserData