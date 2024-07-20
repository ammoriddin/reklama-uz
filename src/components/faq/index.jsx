// FAQ.js
"use client"

import React, { useState } from 'react'
import Accardion from '../accardion'

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null)
  const accardionData = [
    {
      text: 'Спустя много лет, я умею и понимаю много вещей позволяют адаптироваться?',
      describe: 'Спустя много лет, я умею и понимаю много вещей позволяют адаптироваться? Спустя много лет, я умею и понимаю много вещей позволяют адаптироваться? Спустя много лет, я умею и понимаю много вещей',
    },
    {
      text: 'Спустя много лет, я умею и понимаю много вещей позволяют адаптироваться?',
      describe: 'Спустя много лет, я умею и понимаю много вещей позволяют адаптироваться? Спустя много лет, я умею и понимаю много вещей позволяют адаптироваться? Спустя много лет, я умею и понимаю много вещей',
      border: 'border-t-[0px]',
    },
    {
      text: 'Спустя много лет, я умею и понимаю много вещей позволяют адаптироваться?',
      describe: 'Спустя много лет, я умею и понимаю много вещей позволяют адаптироваться? Спустя много лет, я умею и понимаю много вещей позволяют адаптироваться? Спустя много лет, я умею и понимаю много вещей',
      border: 'border-t-[0px]',
    },
  ]

  const handleAccardionClick = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className='mb-[95px]'>
        <h3 className='text-[black] text-[1.5rem] leading-[28px] font-[500] mb-[16px]'>FAQ</h3>
        <div className='max-w-[690px]'>
          {
            accardionData.map((item, index) => (
              <Accardion
                key={index}
                text={item.text}
                describe={item.describe}
                border={item.border}
                isOpen={openIndex === index}
                onClick={() => handleAccardionClick(index)}
              />
            ))
          }
        </div>
    </div>
  )
}

export default FAQ