"use client"

import Categorie from '@/components/categories';
import ChoseInterest from '@/components/chose-intrerest';
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
        localStorage.setItem('role', 1)
    }, [registerFinish])

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

            <ChoseInterest />

            <Link className='py-[12px] px-[100px] text-center text-purple bg-lightPurple text-[0.813rem] font-[400] leading-normal' href={'/user-profile'} onClick={() => setRegisterFinish(true)}>
                Finish register
            </Link>

        </div>
    );
};

export default LastStep;