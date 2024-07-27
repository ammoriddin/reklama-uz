import { Icons } from '@/icons'
import React from 'react'

const SearchInput = ({placeholder, value, setValue, ...props}) => {
  return (
    <div className='flex border-[1px] border-solid border-borderColor w-full rounded-[2px] gap-[10px] items-center pl-[16px]'>
        <Icons.searchIcon />
        <input placeholder={placeholder} {...props} value={value} onChange={(e) => setValue(e.target.value)} type="text" className='py-[15px] pr-[16.5] flex-grow-[1] text-[1rem] text=[#000] font-[500]' />
    </div>
  )
}

export default SearchInput