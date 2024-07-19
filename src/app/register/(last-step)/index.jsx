"use client"

import Categorie from '@/components/categories';
import { Icons } from '@/icons';
import CustomSelect from '@/system-components/slelect-input';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';


const LastStep = () => {
    const [jobs, setJobs] = useState();
    const [state, setState] = useState();
    const [registerFinish, setRegisterFinish] = useState(false)

    
    useEffect(() => {
        localStorage.setItem('token', 'dasdasd')
    }, [])

    return (
        <div className='pr-[50px] w-full flex-grow-[1]'>
            <div className='flex flex-col gap-[22px] mb-[12px]'>
                <CustomSelect width={'w-[287px]'} value={jobs} setValue={setJobs} placeholder={"Soha yo’nalishi"} />
                <CustomSelect width={'w-[287px]'} value={state} setValue={setState} placeholder={"Ichki yo’nalish"} />
            </div>

            <div className='flex items-center gap-[5px] mb-[70px]'>
                <input type="checkbox" />
                <p className='text-black/30 text-[0.875rem] font-[400]'>Vaqtincha ishsiz</p>
            </div>

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

            <Link className='py-[12px] px-[100px] text-center text-purple bg-lightPurple text-[0.813rem] font-[400] leading-normal' href={'/user-profile'} onClick={() => setRegisterFinish(true)}>
                Finish register
            </Link>

        </div>
    );
};

export default LastStep;