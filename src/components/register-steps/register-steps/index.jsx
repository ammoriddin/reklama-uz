import React from 'react'

const RegisterSteps = ({step_counts, stepin}) => {
  return (
    <div className='flex w-[360px] justify-between relative'>
      {
        step_counts.map((step, index) => (
          <div key={index} className={`w-[32px] font-[500] z-[20] flex items-center justify-center rounded-[50%] h-[32px] border-[2px] ${index === stepin ? "border-purple text-purple" : "border-borderColor text-black"} ${index < stepin ? "bg-purple border-purple text-white" : "bg-white"}`}>
            <span >
              {index + 1}
            </span>
          </div>
        ))
      }
      <span className='h-[2px] z-[10] w-full absolute top-[50%] translate-y-[-50%] left-0 bg-hrColor'></span>
      <span
        className={`h-[2px] z-[15] absolute top-[50%] translate-y-[-50%] left-0 bg-purple`}
        style={{ width: `${(stepin / (step_counts.length - 1)) * 100}%` }}
      ></span>
    </div>
  )
}

export default RegisterSteps