"use client";

import CustomInput from '@/system-components/input';
import CustomLabel from '@/system-components/label';
import PhoneNumberInput from '@/system-components/phone-number';
import React, { useState } from 'react';
import ChoseInterest from '../chose-intrerest';
import CustomButton from '@/system-components/button';

const ProfileEditSection = () => {
    const [data, setData] = useState({
        name: 'Shaxriyor Oripov',
        phoneNumber: 900024172,
        age: 15,
        password: '249883858',
        location: 'Uzbekistan, Tashkent, Yunusobod',
        newPassword: '249883858', // corrected from newPasword
        job: 'Qurilish',
        internalDirections: 'Architektura'
    });

    const handleChangeData = (key, value) => {
        setData((prevData) => ({
            ...prevData,
            [key]: value,
        }));
    };

    return (
        <div className='h-[61.5vh] overflow-auto w-[576px]'>
            {/* Profile Edit */}
            <form className='flex flex-col gap-[16px]'>
                <div className='flex gap-[16px] w-full'>
                    <div className='w-[50%] flex flex-col'>
                        <CustomLabel text={'Name'} htmlFor={'name'} padding={'px-[6px]'} />
                        <CustomInput
                            className='w-full'
                            type='text'
                            id="name"
                            value={data.name}
                            setValue={(value) => handleChangeData('name', value)}
                        />
                    </div>
                    <div className='w-[50%] flex flex-col'>
                        <CustomLabel htmlFor={'phone-number'} padding={'px-[6px]'} text={'Phone number:'} />
                        <PhoneNumberInput
                            value={data.phoneNumber}
                            setValue={(value) => handleChangeData('phoneNumber', value)}
                        />
                    </div>
                </div>
                <div className='flex gap-[16px] w-full'>
                    <div className='w-[50%] flex flex-col'>
                        <CustomLabel text={'Age'} htmlFor={'age'} padding={'px-[6px]'} />
                        <CustomInput
                            className='w-full'
                            type='number'
                            id="age"
                            value={data.age}
                            setValue={(value) => handleChangeData('age', value)}
                        />
                    </div>
                    <div className='w-[50%] flex flex-col'>
                        <CustomLabel htmlFor={'password'} padding={'px-[6px]'} text={'Password:'} />
                        <CustomInput
                            className='w-full'
                            type='password'
                            id="password"
                            value={data.password}
                            setValue={(value) => handleChangeData('password', value)}
                        />
                    </div>
                </div>
                <div className='flex gap-[16px] w-full'>
                    <div className='w-[50%] flex flex-col'>
                        <CustomLabel text={'Location:'} htmlFor={'location'} padding={'px-[6px]'} />
                        <CustomInput
                            className='w-full'
                            type='text'
                            id="location"
                            value={data.location}
                            setValue={(value) => handleChangeData('localtion', value)}
                        />
                    </div>
                    <div className='w-[50%] flex flex-col'>
                        <CustomLabel htmlFor={'new-password'} padding={'px-[6px]'} text={'New Password:'} />
                        <CustomInput
                            className='w-full'
                            type='text'
                            id="new-password"
                            value={data.password}
                            setValue={(value) => handleChangeData('newPassword', value)}
                        />
                    </div>
                </div>
                <div className='flex gap-[16px] w-full'>
                    <div className='w-[50%] flex flex-col'>
                        <CustomLabel text={'Soha:'} htmlFor={'job'} padding={'px-[6px]'} />
                        <CustomInput
                            className='w-full'
                            type='text'
                            id="job"
                            value={data.job}
                            setValue={(value) => handleChangeData('job', value)}
                        />
                    </div>
                    <div className='w-[50%] flex flex-col'>
                        <CustomLabel htmlFor={'internal-directions'} padding={'px-[6px]'} text={"Ichki Yo'nalishlar:"} />
                        <CustomInput
                            className='w-full'
                            type='text'
                            id="internal-directions"
                            value={data.internalDirections}
                            setValue={(value) => handleChangeData('internalDirections', value)}
                        />
                    </div>
                </div>
                
                <p className='px-[6px] text-yellow text-[0.75rem] font-[400] mb-[29px]'>Xurmatli foydalanuvchi akkaunt ma’lumitlariga kiritilgan o’zgartirishlar 24 soat ichida tasdiqlanadi.</p>
                
                <ChoseInterest />

                <div className='flex gap-[11px] items-stretch mb-[20px]'>
                    <CustomButton text={'Отменить'} padding={'px-[60px] py-[11px]'} style={{color: '#322c39', backgroundColor: '#F5F5F5'}} />
                    <CustomButton text={'Отправить на подтверждение'} padding={'px-[44px] py-[12px]'} />
                </div>

            </form>
        </div>
    );
};

export default ProfileEditSection;