import { Icons } from '@/icons'
import Image from 'next/image'
import React from 'react'

const CompanyCard = ({tab, setTab}) => {
  return (
    <div className='w-full p-[24px] border-[1px] border-solid border-borderColor rounded-[3px]'>
        <div className='flex items-center justify-between'>
            <div className='flex items-center gap-[1px]'>
                <Icons.hamkorBandLogo fill="#121212" />

                <h4 className='text-[1rem] font-[600]'>Hamkor bank</h4>
            </div>

            <div className='flex gap-[24px] justify-end items-center'>
                <div className='flex items-center gap-[4px]'>
                    <Icons.statsIcon stroke={tab === "statistics" ? "#7000ff " : "#322C39"} />
                    <button onClick={() => setTab('statistics')} className={`${tab === 'statistics' ? "text-purple" : "text-black"} text-[0.813rem] font-[400]`}>My Statistics</button>
                </div>
                <div className='flex items-center gap-[4px]'>
                    <Icons.edit stroke={tab === "profile-edit" ? "#7000ff " : "#322C39"} />
                    <button onClick={() => setTab('profile-edit')} className={`${tab === 'profile-edit' ? "text-purple" : "text-black"} text-[0.813rem] font-[400]`}>Profile edit</button>
                </div>
                <div className='flex items-center gap-[4px]'>
                    <Icons.card fill={tab === "card" ? "#7000ff " : "#322C39"} />
                    <button onClick={() => setTab('card')} className={`${tab === 'card' ? "text-purple" : "text-black"} text-[0.813rem] font-[400]`}>Card</button>
                </div>
                <div className='flex items-center gap-[4px]'>
                    <Icons.logout fill="#F00" />
                <p style={{color: '#F00'}} className='text-[0.813rem] cursor-pointer font-[400]'>Log out</p>
                </div>
            </div>
        </div>

        <div className='mb-[35px]'>
            <h2 className='mb-[8px] text-[2.25rem] font-[500]'>8600 0575 **** ****</h2>
            <p className='text-black/30 text-[1rem] font-[500]'>month/year: 24/54</p>
        </div>

        <div className='flex items-center justify-between'>
            <h4 className='text-black text-[1.5rem] font-[500]'>Shaxriyor Oripov</h4>
            <Image alt='uzcard-photo' src={'/uzcard.png'} className='w-[64px] h-[64px]' width={64} height={64} />
        </div>

    </div>
  )
}

export default CompanyCard