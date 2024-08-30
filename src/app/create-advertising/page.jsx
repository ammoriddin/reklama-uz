import React, { Suspense } from 'react'
import AddAdvertising from '@/components/add-advertising'
import AdverTising from '@/components/advertising-sidebar'

const Advertising = () => {
  return (
    <section className='flex gap-[30px] px-[100px] laptop:px-[150px]'>

      {/* Sidebar */}
      <Suspense fallback={<>Loading...</>}>
        <AdverTising />
      </Suspense>

      {/* Main Contnet */}
      <section className='pt-[20px] h-[93vh] overflow-auto flex-grow-[1]'>
        <Suspense fallback={<>Loading...</>}>
          <AddAdvertising />
        </Suspense>
      </section>

    </section>
  )
}

export default Advertising