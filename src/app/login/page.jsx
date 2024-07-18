import Image from 'next/image'
import React from 'react'

const Page = () => {
  return (
    <section className='flex justify-between'>

        {/* Left Section */}
        <section className='flex flex-col px-[150px] justify-between pb-[30px] w-[55%]'>
            <div className='py-[125px] '>
                
            </div>

            <div className=''>

            </div>
        </section>

        {/* Right Section */}
        <section className='w-[45%] overflow-y-hidden h-[100vh]'>
            <Image width={0} height={0} className='w-full h-full object-container object-top' src={'/login-images/first-photo.jpg'} />
        </section>
    </section>
  )
}

export default Page