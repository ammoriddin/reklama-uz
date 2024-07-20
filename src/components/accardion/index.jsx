"use client"

import { Icons } from '@/icons'
import React, { useState } from 'react'

const Accardion = ({text, describe, border}) => {
    const [accardion, setAccardion] = useState(false)

    return (
        <div onClick={() => setAccardion(!accardion)} className={`py-[24px] accardion px-[22px] transition-all duration-300 ${border ? border : 'border-t-[1px]'} bg-white hover:bg-black text-black cursor-pointer hover:text-white w-full hover:border-black border-b-[1px] border-solid border-borderColor overflow-hidden`}>
            <div className='flex justify-between w-full items-center'>
                <h3 className='text-[0.875rem] font-[500] leading-[16px]'>{text}</h3>
                <Icons.arrow className='accardion-icon transition-[fill] fill-black' />
            </div>
            {
                accardion &&
                <p className='text-[0.813rem] mt-[10px]'>{describe}</p>
            }
        </div>
    )
}

export default Accardion