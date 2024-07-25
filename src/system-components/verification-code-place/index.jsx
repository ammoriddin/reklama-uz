import React, { useState } from 'react';

const VerificationCodeInput = ({ length = 4 }) => {
  const [code, setCode] = useState(Array(length).fill(''));

  const handleChange = (e, index) => {
    const { value } = e.target;
    if (isNaN(value) || value.length > 1) return;

    const newCode = [...code];
    newCode[index] = value;
    setCode(newCode);

    if (value && index < length - 1) {
      if (typeof document !== 'undefined') {
        document.getElementById(`code-input-${index + 1}`).focus();
      }
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === 'Backspace' && code[index] === '') {
      if (index > 0) {
        if (typeof document !== 'undefined') {
          document.getElementById(`code-input-${index - 1}`).focus();
        }
      }
    }
  };

  return (
    <div className="verification-code-input flex gap-[16px]">
      {code.map((digit, index) => (
        <input
          key={index}
          id={`code-input-${index}`}
          value={digit}
          onChange={(e) => handleChange(e, index)}
          onKeyDown={(e) => handleKeyDown(e, index)}
          className="placeholder:text-black/20 py-[10px] w-[60px] px-[26px] border-b-[1px] border-borderColor border-solid text-center"
          maxLength={1}
          type="text"
        />
      ))}
    </div>
  );
};

export default VerificationCodeInput;