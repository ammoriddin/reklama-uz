import Image from 'next/image'
import React from 'react'

const RightSidebar = () => {
  return (
    <div className='block mr-auto px-[20px] border-l-[1px] border-borderColor border-solid sticky top-0 h-[92vh] overflow-auto'>
        <div className='py-[40px]'>
            <div className='flex items-center gap-[8px] mb-[28px]'>

                {/* SMM Manager Photo */}
                <div className='w-[50px] h-[50px]'>
                    <Image src={'/companys/uzummarket.png'} width={50} height={50} />
                </div>

                {/* Manager Name */}
                <div>
                    <h2 className='text-black font-[400] text-[1.125rem] leading-[21.48px]'>Uzum market</h2>
                    <p className='text-black/30 text-[0.85rem] leading-[14.5px]'>Uzum market</p>
                </div>
            </div>

            {/* Tags */}
            <div className='flex flex-wrap gap-[17px] mb-[16px]'>
                <p className='text-[0.75rem] leading-[14.5px] font-[500] text-[#3C00FF]'>#marketing</p>
                <p className='text-[0.75rem] leading-[14.5px] font-[500] text-[#3C00FF]'>#ingliz tili</p>
                <p className='text-[0.75rem] leading-[14.5px] font-[500] text-[#3C00FF]'>#tennis</p>
                <p className='text-[0.75rem] leading-[14.5px] font-[500] text-[#3C00FF]'>#video</p>
                <p className='text-[0.75rem] leading-[14.5px] font-[500] text-[#3C00FF]'>#shim</p>
            </div>

            {/* Message */}
            <div className='w-[269px]'>
                <h4 className='text-black font-[700] text-[0.813rem] leading-[20px]'>Shartlar:</h4>
                <div className='flex flex-col gap-[20px]'>
                    <p className='text-black font-[400] leading-[20px] text-[0.813rem]'>
                        Reference site about Lorem Ipsum, giving information on its origins, as well as a random Lipsum generator. Reference site about Lorem Ipsum, giving information on its origins, as well as a random Lipsum generator.Reference site about Lorem Ipsum, giving information on its origins, as well as a random Lipsum generator.
                    </p>
                    <p className='text-black font-[400] leading-[20px] text-[0.813rem]'>
                        Reference site about Lorem Ipsum, giving information on its origins, as well as a random Lipsum generator. Reference site about Lorem Ipsum, giving information on its origins, as well as a random Lipsum generator.
                    </p>
                    <p className='text-black font-[400] leading-[20px] text-[0.813rem]'>
                        Reference site about Lorem Ipsum, giving information on its origins, as well as a random Lipsum generator. Reference site about Lorem Ipsum, giving information on its origins, as well as a random Lipsum generator.
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default RightSidebar