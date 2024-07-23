import React from 'react'

const CustomLabel = ({htmlFor, text, padding, margin, props}) => {
  return (
    <label className={`${margin} ${padding} text-[black]/30 text-[0.75rem] font-[500]`} htmlFor={htmlFor} {...props}>{text}</label>
  )
}

export default CustomLabel