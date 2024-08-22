import { Icons } from '@/icons'
import React, { useState } from 'react'

const DateInput = ({ placeholder }) => {
  const [value, setValue] = useState('');
  const [isDateSelected, setIsDateSelected] = useState(false);
  const [focused, setFocused] = useState(false);

  const handleDateChange = (e) => {
    setValue(e.target.value);
    setIsDateSelected(true);
  };

  const handleFocus = () => {
    setFocused(true);
  };

  const handleBlur = () => {
    if (!value) {
      setFocused(false);
    }
  };

  return (
    <div className='relative border-b-[1px] border-solid border-borderColor flex items-center'>
      <input
        id='dateInput' // Ensure this ID is unique if multiple date inputs are used on the same page
        className='px-[6px] py-[10px] z-[9] bg-transparent cursor-pointer flex-grow-[1] text-[black] text-[1rem] font-[400] leading-normal'
        type='date'
        value={value}
        onChange={handleDateChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        style={{ color: 'black' }} // Always black color
      />
      {!focused && !isDateSelected && 
        <label
          className='absolute text-[1rem] text-black/30 font-[400] left-[6px] bg-white z-[99]'
          onClick={() => document.getElementById('dateInput').focus()}
        >
          {placeholder}
        </label>
      }
      <Icons.dateIcon
        width='20px'
        height='20px'
        style={{ cursor: 'pointer' }}
        className='absolute top-[50%] translate-y-[-50%] right-[10px]'
        onClick={() => document.getElementById('dateInput').focus()}
      />
    </div>
  )
}

export default DateInput;
