import { Icons } from '@/icons';
import React, { useState, useRef, useEffect } from 'react';

const Reklama = ({ reel }) => {
  const [coment, setComent] = useState(false);
  const mainVideoRef = useRef(null);
  const backgroundVideoRef = useRef(null);

  useEffect(() => {
    if (reel.type === 'video' && mainVideoRef.current) {
      mainVideoRef.current.play();  // Auto-play the main video when the component mounts
      if (backgroundVideoRef.current) {
        backgroundVideoRef.current.play(); // Auto-play the background video as well
      }
    }
  }, [reel]);

  const handleVideoClick = () => {
    if (mainVideoRef.current.paused) {
      mainVideoRef.current.play();
      if (backgroundVideoRef.current) {
        backgroundVideoRef.current.play();
      }
    } else {
      mainVideoRef.current.pause();
      if (backgroundVideoRef.current) {
        backgroundVideoRef.current.pause();
      }
    }
  };

  return (
    <div className={`w-[500px] h-[88vh] bg-navbarBackground reels-shadow`}>
      <div className='w-full h-[90%] relative overflow-hidden'>
        {!coment && reel.type === 'image' && (
          <img src={reel.url} alt='Reel' className='w-full h-full relative z-[2] object-contain object-center' />
        )}
        {!coment && reel.type === 'video' && (
          <video 
            ref={mainVideoRef} 
            src={reel.url} 
            className='w-full h-full relative cursor-pointer z-[2] object-contain object-center' 
            onClick={handleVideoClick} 
            loop 
            muted 
            playsInline
            autoPlay 
          />
        )}

        {!coment && reel.type === 'image' && (
          <img src={reel.url} alt='Reel' className='w-full absolute top-0 blur-sm left-0 z-[1] h-full object-cover object-center' />
        )}
        {!coment && reel.type === 'video' && (
          <video 
            ref={backgroundVideoRef} 
            src={reel.url} 
            className='w-full absolute top-0 blur-sm cursor-pointer left-0 h-full object-cover z-[1] object-center' 
            loop 
            muted 
            playsInline
            autoPlay 
          />
        )}

        {coment && (
          <div className='w-[auto] h-[95%] bg-white overflow-auto p-[24px] relative'>
            <p className='text-[0.938rem] font-[500] mb-[23px]'>Comments 12</p>
            <div className='flex flex-col gap-[20px] h-[88%] overflow-auto mb-[20px]'>
              {/* Render user comments here */}
            </div>
            <div className='sticky border-b-[1px] border-solid border-borderColor flex items-center bottom-0 bg-white'>
              <input type='text' placeholder='type here' className='px-[5px] py-[11px] text-black flex-grow-[1] text-[1rem] font-[500] placeholder:text-black/30' />
              <div className='flex items-center gap-[8px]'>
                {/* Replace these with your appropriate Icons */}
                <Icons.smile className='cursor-pointer' width='20px' height='20px' fill='#322C39' />
                <Icons.send className='cursor-pointer' stroke='#7000FF' width='24px' height='24px' />
              </div>
            </div>
          </div>
        )}
      </div>

      <div className='bg-white flex px-[25px] items-center justify-between w-[450px] h-[10%]'>
        <div className='flex items-center gap-[24px]'>
          <div className='flex items-center gap-[4px]'>
            <Icons.heart className='cursor-pointer' />
            <span className='text-black/30 text-[0.875rem] font-[500] leading-[normal]'>{reel.views}</span>
          </div>
          <div className='flex items-center gap-[4px]'>
            <Icons.coment onClick={() => setComent(!coment)} className='cursor-pointer' width='21px' height='21px' fill='#322C39' />
            <span className='text-black/30 text-[0.875rem] font-[500] leading-[normal]'>{reel.comments}</span>
          </div>
          <div className='flex items-center gap-[4px]'>
            <Icons.share className='cursor-pointer' width='21px' height='21px' fill='#322C39' />
            <span className='text-black/30 text-[0.875rem] font-[500] leading-[normal]'>{reel.shares}</span>
          </div>
        </div>
        <div className='flex flex-col gap-[16px]'>
          <div className='flex items-center gap-[4px]'>
            <Icons.grayEye width='15px' height='15px' fill='#322C3980' />
            <span className='text-black/40 text-[0.813rem] font-[400]'>{reel.views}</span>
          </div>
          <Icons.save fill='#322C39' className='block ml-auto cursor-pointer' />
        </div>
      </div>
    </div>
  );
};

export default Reklama;