"use client"

import { Icons } from '@/icons'
import React, { useState } from 'react'

const GiveAwayStep2 = () => {
    const [user, setUser] = useState([
        {
            id: 1,
        },
        {
            id: 2,
        },
        {
            id: 3,
        }
    ])

    const addUser = () => {
        const newUser = { id: user.length + 1 };
        setUser([...user, newUser]);
    };

    return (
        <div>
            <div className='w-[373px]'>
                <h1 className='text-[#000] text-[2rem] font-[500] leading-[33px] mb-[8px]'>
                    Give away shartlarini biriktiring
                </h1>
            </div>
            <p className='text-[black]/30 text-[1rem] font-[]400] mb-[36px]'>Reference site about giving information on its origins</p>
            <div>
                <h2 className='text-[1.25rem] font-[500] mb-[24px] text-[black]'>Orinlarni biriktiring</h2>

                <div className='flex flex-col gap-[22px]'>
                    {
                        user.map((item, index) => (
                            <div className='flex items-center gap-[11px]' key={index}>
                                <p className='text-[black] text-[1rem] font-[400]'>{item.id}</p>
                                <div className='flex items-center bg-navbarBackground rounded-[50%] justify-center w-[40px] h-[40px]'>
                                    <Icons.user />
                                </div>
                                <div className='flex flex-col justify-center'>
                                    <p className='text-black text-[0.813rem] font-[400]'>User</p>
                                    <input placeholder='Enter the sum prize' type="text" className='pb-[10px] w-full mb-[-10px] border-b-[1px] border-borderColor border-solid text-black text-[0.75rem] font-[400] placeholder:text-black/40' />
                                </div>
                            </div>
                        ))
                    }
                    <button onClick={addUser} className='flex items-center gap-[6px]'>
                        <Icons.plus fill='#7000FF' />
                        <span className='text-purple text-[0.938rem] font-[500]'>Add a winner</span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default GiveAwayStep2