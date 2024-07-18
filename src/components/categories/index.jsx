import { Icons } from '@/icons'
import React from 'react'

const Categorie = ({categorie_name}) => {
  return (
    <div className='flex gap-[10px] border-[1px] border-solid border-borderColor py-[6px] px-[16px] rounded-[100px] bg-white'>
        <p className='text-black font-[500]'>{categorie_name}</p>
        <Icons.close_icon className='cursor-pointer' />
    </div>
  )
}

export default Categorie