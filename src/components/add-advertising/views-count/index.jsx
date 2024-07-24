"use client"
import React, { useState } from 'react'

const ViewsCount = () => {
    const [viewCount, setViewCount] = useState([
        {
            from: 0,
            to: 14,
            isChoosed: false,
        },
        {
            from: 14,
            to: 18,
            isChoosed: false,
        },
        {
            from: 18,
            to: 22,
            isChoosed: false,
        },
        {
            from: 22,
            to: 28,
            isChoosed: false,
        },
        {
            from: 28,
            to: 36,
            isChoosed: false,
        },
        {
            from: 36,
            to: 40,
            isChoosed: false,
        },
        {
            from: 40,
            to: 44,
            isChoosed: false,
        },
        {
            from: 44,
            to: 48,
            isChoosed: false,
        },
        {
            from: 48,
            to: 52,
            isChoosed: false,
        },
        {
            from: 52,
            to: 56,
            isChoosed: false,
        },
        {
            from: 56,
            to: 100,
            isChoosed: false,
        }
    ])
    const [selectedOption, setSelectedOption] = useState(null);
  
    return (
    <div className='flex w-[392px] flex-wrap items-center gap-[28px] mb-[52px]'>
        
        {
            viewCount.map((item, index) => {
                const isChoosed = selectedOption === index;

                return (
                    <div className='flex items-center gap-[6px]' key={index}>
                        <input 
                            name='radio' 
                            id={index} 
                            type="radio" 
                            checked={isChoosed}
                            onChange={() => setSelectedOption(index)}
                        />
                        <label 
                            onClick={() => setSelectedOption(index)} 
                            className={`${isChoosed ? 'text-purple' : 'text-black'} font-[400] text-[0.875rem]`} 
                            htmlFor={index}
                        >
                            {item.to}-{item.from}
                        </label>
                    </div>
                )
            })
        }
    </div>
  )
}

export default ViewsCount