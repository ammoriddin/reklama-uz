"use client"

import React, { useState } from 'react'
import ViewsCount from './views-count'
import CustomInput from '@/system-components/input'
import CustomButton from '@/system-components/button'
import { usePathname, useRouter } from 'next/navigation'
import RichTextEditor from '@/system-components/rich-text-editor'
import ChoseInterest from '../chose-intrerest'

const AddAdvertising = () => {
    const [country, setCountry] = useState()
    const [isMail, setIsMail] = useState(null)
    const router = useRouter()
    const pathname = usePathname()

  return (
    <section className='py-[30px] flex flex-col h-[90vh] overflow-auto'>
        <h3 className={`text-[black] text-[2rem] font-[500] leading-[33px] ${pathname === '/create-advertising' ? 'mb-[43px]' : "mb-2"}`}>Upload your advertisement content</h3>
        
        {
            pathname === '/create-advertising' &&
            <section className='flex-grow-[1]'>
                <div className='w-[292px] mb-[20px]'>
                    <p className='text-[black] text-[1.125rem] font-[400]'>Выберите сколько зрителей будут смотреть</p>
                </div>

                <ViewsCount />

                <h4 className='text-[black] mb-[39px] text-[1.125rem] font-[400]'>Ведите подробные сведения о пользователях </h4>

                <form className='max-w-[287px]'>
                    <div className='flex flex-col gap-[20px] w-full mb-[40px]'>
                        <CustomInput placeholder={'Select Country'} value={country} setValue={setCountry} />
                        <CustomInput placeholder={'Soha yo’nalishi'} value={country} setValue={setCountry} />
                        <CustomInput placeholder={'Ichki yo’nalish'} value={country} setValue={setCountry} />
                    </div>

                    {/* Gender */}
                    <div className='flex mb-[90px] items-center justify-evenly w-full'>
                        <p onClick={() => setIsMail(true)} className={`${isMail === true ? "text-purple" : "text-black"} cursor-pointer text-[1rem] font-[500]`}>Erkak</p>
                        <span className='h-[24px] w-[2px] bg-hrColor'></span>
                        <p onClick={() => setIsMail(false)} className={`${isMail === false ? "text-purple" : "text-black"} cursor-pointer text-[1rem] font-[500]`}>Ayol</p>
                    </div>
                </form>
            </section>
        }

        {
            pathname === '/create-advertising/step-3' &&
            <p className='text-black/30 text-[1rem] font-[400] mb-[68px]'>Reference site about giving information on its origins</p>
        }

        {
            pathname === '/create-advertising/step-2' &&
            <section className='flex-grow-[1]'>
                <div className='mb-[30px]'>
                    <RichTextEditor />
                </div>
                <div className='w-[576px]'>
                    <ChoseInterest />
                </div>
            </section>
        }

        <div className='flex gap-[11px] items-stretch'>
            <CustomButton text={'отмена'} padding={'px-[60px] py-[11px]'} style={{color: '#322c39', backgroundColor: '#F5F5F5'}} />
            <CustomButton onClickFunction={() => pathname === '/create-advertising/step-2' ? router.push('/create-advertising/step-3') : router.push('/create-advertising/step-2')} text={'продолжить'} padding={'px-[44px] py-[12px]'} />
        </div>
    </section>
  )
}

export default AddAdvertising