import React from 'react'

const TextArea = ({placeholder, rows, cols}) => {
  return (
    <textarea placeholder={placeholder} rows={rows} cols={cols} className='rounded-[6px] resize-none border-[1px] border-borderColor border-solid p-[14.5px] placeholder:text-[black]/30 text-[1rem] leading-[19px] font-[400]'></textarea>
  )
}

export default TextArea