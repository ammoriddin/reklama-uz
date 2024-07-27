"use client"

import React, { useEffect, useRef, useState } from 'react';
import DateInput from '@/system-components/date-input';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import RichTextEditor from '@/system-components/rich-text-editor';
import CustomButton from '@/system-components/button';
import { useRouter } from 'next/navigation'
import { toast } from 'react-toastify';

const GiveAwaySection = () => {
    const [date, setDate] = useState();
    const [duration, setDuration] = useState(1); // default duration value
    const hourRef = useRef();
    const [isStart, setIsStart] = useState(false)
    const router = useRouter()

    const handleDurationChange = (value) => {
        setDuration(value);
    };

    useEffect(() => {
        if (date && duration) {
            setIsStart(true)
        } else {
            setIsStart(false)
        }
    }, [date, duration])


    // useEffect(() => {
    //     const handleSliderChange = () => {
    //         const sliderHandle = document.querySelector(".rc-slider-handle");
    //         if (sliderHandle && hourRef.current) {
    //             const left = sliderHandle.style.left;
    //             hourRef.current.style.left = left;
    //             // Update class based on left position
    //             hourRef.current.classList.add(`left-[${left}]`);
    //         }
    //     };

    //     if (typeof document !== 'undefined') {
    //         // Observe changes to the slider handle
    //         const observer = new MutationObserver(handleSliderChange);
    //         const sliderHandle = document.querySelector(".rc-slider-handle");
    //         if (sliderHandle) {
    //             observer.observe(sliderHandle, { attributes: true, attributeFilter: ['style'] });
    //         }

    //         return () => {
    //             // Clean up observer on component unmount
    //             if (sliderHandle) {
    //                 observer.disconnect();
    //             }
    //         };
    //     }
    // }, []);

    return (
        <div>
            <div className='max-w-[373px]'>
                <h4 className='text-[#000] text-[2rem] font-[500] leading-[33px] mb-[8px]'>
                    Give away ma’lumotlarini yarating
                </h4>
            </div>
            <p className='text-[black]/30 text-[1rem] font-[400] mb-[46px]'>
                Reference site about giving information on its origins
            </p>

            <h5 className='text-[#000] text-[0.875rem] font-[500] mb-[43px]'>
                Sanani biriktiring
            </h5>
            <div className='max-w-[287px] mb-[36px]'>
                <DateInput value={date} setValue={setDate} placeholder={'Boshlanish sanasini tanlang'} />
            </div>

            <h5 className='text-[#000] text-[0.875rem] font-[500] mb-[80px]'>
                Give away davomiyligini tanglang
            </h5>
            <div className='slider-container relative mb-[45px] ml-[15px]'>
                <div ref={hourRef} className='bg-white absolute bottom-[32px] user-dropdown-drop-shadow w-[101px] py-[16px] flex justify-center items-center text-[#000] text-[0.875rem] font-[500]'>
                    {duration} soat
                    <div className='absolute bottom-[-11px] date-triangular left-0 rotate-[90deg]'></div>
                </div>
                <Slider
                    min={1}
                    max={24}
                    value={duration}
                    onChange={handleDurationChange}
                    trackStyle={{ backgroundColor: '#7c3aed', height: '6px' }}
                    handleStyle={{ borderColor: '#7c3aed', width: '20px', height: "20px", top: '18%', backgroundColor: '#fff', opacity: 1 }}
                    railStyle={{ backgroundColor: '#e5e5e5', height: '6px' }}
                />
            </div>
            <h4 className='text-[black] text-[1.25rem] font-[500] mb-[24px]'>Shartlarni biriktiring</h4>

            <div className='mb-[15px]'>
                <RichTextEditor />
            </div>

            <CustomButton onClickFunction={() => {
                if (isStart) {
                    router.push("/create-give-away/step-2")
                } else {
                    toast.warning("Birinchi navbatda Shartlarni to'ldiring")
                }
            }} text={'Start'} padding={'px-[60px] py-[11px]'} style={{ color: '#322c39', backgroundColor: '#F5F5F5' }} />
        </div>
    );
};

export default GiveAwaySection;