import React from 'react'

const ToggleSwitchButton = () => {
  return (
    <label class="relative inline-flex items-center cursor-pointer">
        <input type="checkbox" value="" class="sr-only peer" />
        <div class="group peer ring-0 bg-borderColor  rounded-full outline-none duration-300 after:duration-300 w-[42px] h-[26px]  shadow-md peer-checked:bg-[#6900ff]  peer-focus:outline-none after:rounded-full after:absolute after:bg-white after:outline-none after:h-[20px] after:w-[20px] after:top-[3px] after:left-1 after:flex after:justify-center after:items-center peer-checked:after:translate-x-[15px] ">
        </div>
    </label>
  )
}

export default ToggleSwitchButton