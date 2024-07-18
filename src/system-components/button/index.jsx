import React from 'react'

const CustomButton = ({text, margin, padding, widht, onClickFunction}) => {
  return (
    <button className={`text-center ${margin} ${padding ? padding : 'py-[12px]'} ${widht} text-purple bg-lightPurple text-[0.813rem] font-[400] leading-normal`} onClick={onClickFunction}>
        {text}
    </button>
  )
}

export default CustomButton