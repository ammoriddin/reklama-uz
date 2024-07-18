import React from 'react'

const PhoneNumberInput = ({value, setValue}) => {
  return (
    <div className='flex gap-[8px] border-b-[1px] border-borderColor border-solid py-[10px] px-[6px]'>
        <span className='text-[black] text-[1rem] font-[500]'>+998</span>
        <span className='h-[19px] w-[1px] bg-hrColor'></span>
        <input value={value} onChange={(e) => setValue(e.target.value)} type="number" className='text-[black] text-[1rem] font-[500]' />
    </div>
  )
}

export default PhoneNumberInput