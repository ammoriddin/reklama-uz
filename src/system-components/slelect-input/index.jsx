import { Icons } from '@/icons'
import React from 'react'

const CustomSelect = ({width, placeholder, value, setValue}) => {
  return (
    <div className={`${width} flex items-center border-b-[1px] border-solid border-borderColor justify-between`}>
        <input value={value} onChange={(e) => setValue(e.target.value)} className='px-[6px] py-[10px]' type="text" placeholder={placeholder} />
        <Icons.arrow />
    </div>
  )
}

export default CustomSelect