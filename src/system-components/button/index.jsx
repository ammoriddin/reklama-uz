import React from 'react'

const CustomButton = ({text, margin, padding, widht, onClickFunction, type}) => {
  return (
    <button 
      disabled={type === "disabled"}
      className={`text-center ${margin} ${padding ? padding : 'py-[12px]'} ${widht} ${type === "disabled" ? "text-black/40 bg-navbarBackground" : "text-purple bg-lightPurple"} text-[0.813rem] font-[400] leading-normal`} 
      onClick={onClickFunction}
    >
        {text}
    </button>
  )
}

export default CustomButton