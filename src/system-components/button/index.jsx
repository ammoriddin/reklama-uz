"use client"
import React from 'react'

const CustomButton = ({text, margin, padding, widht, onClickFunction, type, ...props}) => {
  return (
    <button 
      disabled={type === "disabled"}
      className={`text-center ${margin} ${padding ? padding : 'py-[12px]'} ${widht} ${type === "disabled" ? "text-black/40 bg-navbarBackground cursor-not-allowed" : "text-purple bg-lightPurple"} text-[0.813rem] font-[400] rounded-[2px] leading-normal`} 
      onClick={onClickFunction}
      {...props}
    >
        {text}
    </button>
  )
}

export default CustomButton