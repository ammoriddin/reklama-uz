'use client'

import Image from 'next/image'
import React, { useState } from 'react'

const MostGetMoney = ({ data }) => {
  const visibleUsers = data.slice(0, 6);
  const remainingUsersCount = data.length - visibleUsers.length;
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div>
      <h4 className='text-black text-[0.938rem] leading-[17px] font-[500] mb-[12px]'>Eng ko’p pul ishlaganlar</h4>
      <div className='flex items-center'>
        {
          visibleUsers.map((item, index) => (
            <div
              key={index}
              className='w-[42px] h-[42px] p-[3px] bg-white rounded-[50%] mr-[-15px] shadow-sm relative'
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <Image src={item.image} width={42} height={42} className='w-full h-full object-cover object-center rounded-[50%]' />
              {
                hoveredIndex === index &&
                <div className='absolute bottom-[0] left-[13px] user-dropdown-drop-shadow'>
                  <div className='absolute top-[-10px] left-0 three-corner-element'></div>
                  <div className='bg-white rounded-b-[6px] py-[12px] z-[12] px-[18px] absolute'>
                    <h4 className='text-black/20 text-[0.75rem] font-[400] leading-[14px] mb-[2px]'>
                        Abubakir
                    </h4>
                    <p className='text-black text-[0.875rem] leading-[17px] font-[500] min-w-[150px]'>12 000 000 so'm</p>
                  </div>
                </div>
              }
            </div>
          ))
        }
        {remainingUsersCount > 0 && (
          <div className='w-[42px] cursor-pointer relative rounded-[50%] border-[3px] border-solid border-[white] shadow-sm h-[42px] bg-navbarBackground flex items-center justify-center'>
            +{remainingUsersCount}
          </div>
        )}
      </div>
    </div>
  )
}

export default MostGetMoney