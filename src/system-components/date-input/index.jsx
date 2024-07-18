import { Icons } from '@/icons'
import React from 'react'

const DateInput = ({placeholder, value, setValue}) => {
  return (
    <div className='border-b-[1px] border-solid border-borderColor flex justify-between items-center'>
      <input className='px-[6px] py-[10px] flex-grow-[1] text-[black] text-[1rem] font-[400] leading-normal placeholder:text-[black]/30' type='number' placeholder={placeholder} value={value} onChange={(e) => setValue(e.target.value)} />
      <Icons.dateIcon width='20px' height='20px' />
    </div>
  )
}

export default DateInput