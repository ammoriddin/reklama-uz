import { Icons } from '@/icons'
import React from 'react'
import Categorie from '../categories'

const ChoseInterest = () => {
  return (
    <>
        <div className='mb-[8px]'>
            <p className='mb-[16px] text-secondary text-[1rem] font-[500]'>Choose your interest</p>
            <div className='p-[20px] bg-white w-full rounded-[2px] border-[1px] border-solid border-borderColor'>
                <div className='flex items-center mb-[40px]'>
                    <div className='flex gap-[4px] items-center mr-[61px]'>
                        <Icons.searchIcon width='20px' height='20px' />
                        <p className='text-black text-[1rem] font-[500]'>Спорт |</p>
                    </div>
                    <div className='flex'>
                        <Icons.arrow className='mr-[17px]' />
                        <input type="text" />
                    </div>
                </div>

                {/* Categories */}
                <div className='flex flex-wrap gap-[6px] h-[100px] items-center categories_wrapper overflow-auto'>
                    <Categorie categorie_name="👕 futbolkalar" />
                    <Categorie categorie_name="👕 futbolkalar" />
                    <Categorie categorie_name="👕 futbolkalar" />
                    <Categorie categorie_name="👕 futbolkalar" />
                    <Categorie categorie_name="👕 futbolkalar" />
                    <Categorie categorie_name="👕 futbolkalar" />
                    <Categorie categorie_name="👕 futbolkalar" />
                    <Categorie categorie_name="👕 futbolkalar" />
                    <Categorie categorie_name="👕 futbolkalar" />
                    <Categorie categorie_name="👕 futbolkalar" />
                    <Categorie categorie_name="👕 futbolkalar" />
                </div>
            </div>
        </div>
        <div className='flex items-center gap-[4px] mb-[50px]'>
            <Icons.warning />
            <p className='text-[#322C394D] text-[0.75rem] font-[500]'>You can choose up to 8 interests</p>
        </div>
    </>
  )
}

export default ChoseInterest