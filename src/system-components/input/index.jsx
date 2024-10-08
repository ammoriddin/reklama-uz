import React from 'react'

const CustomInput = ({placeholder, type ='text', id, value, setValue, ...props}) => {
  return (
    <input type={type} id={id} {...props} className='border-b-[1px] border-solid border-borderColor px-[6px] py-[10px] text-[black] text-[1rem] font-[400] leading-normal placeholder:text-[black]/30'  placeholder={placeholder} value={value} onChange={(e) => setValue(e.target.value)} />
  )
}

export default CustomInput