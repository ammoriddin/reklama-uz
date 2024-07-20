import React from 'react';

const PhoneNumberInput = ({ value, setValue }) => {
  const handleChange = (e) => {
    const inputValue = e.target.value;
    if (inputValue.length <= 9) {
      setValue(inputValue);
    }
  };

  return (
    <div className='flex gap-[8px] border-b-[1px] border-borderColor border-solid py-[10px] px-[6px]'>
      <span className='text-[black] text-[1rem] font-[500]'>+998</span>
      <span className='h-[19px] w-[1px] bg-hrColor'></span>
      <input
        value={value}
        onChange={handleChange}
        type='number'
        className='text-[black] text-[1rem] font-[500]'
      />
    </div>
  );
};

export default PhoneNumberInput;