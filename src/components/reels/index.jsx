"use client"

import React, { useEffect, useRef, useState } from 'react'
import Reklama from '../reklama'

const ReelsSection = ({ reels = [], setCurrentReel }) => {
  const [sliceStart, setSliceStart] = useState([0, 3])
  const [animate, setAnimate] = useState(false)
  const [rearrange, setRearrange] = useState(false)
  const sectionRef = useRef(null)
  const [circularReels, setCircularReels] = useState(reels)

  useEffect(() => {
    // Boshlang'ich qiymatni o'rnatish
    if (circularReels.length > 0) {
      setCurrentReel(circularReels[0]);  // Dastlabki reelni o'rnatish
    }
  }, [circularReels, setCurrentReel]);

  const handleScroll = (event) => {
    if (event.deltaY > 0 && !animate && !rearrange) {
      setAnimate(true)
    }
  }

  useEffect(() => {
    const sectionElement = sectionRef.current;
    
    if (sectionElement) {
      sectionElement.addEventListener('wheel', handleScroll);
    }

    return () => {
      if (sectionElement) {
        sectionElement.removeEventListener('wheel', handleScroll);
      }
    };
  }, []);

  useEffect(() => {
    if (animate) {
      // First animate the top reel upward
      const animateTimeout = setTimeout(() => {
        setRearrange(true)
        setAnimate(false)
      }, 500) // Duration of the upward animation
      
      return () => clearTimeout(animateTimeout)
    }
  }, [animate]);

  useEffect(() => {
    if (rearrange) {
      const rearrangeTimeout = setTimeout(() => {
        setCircularReels((prevReels) => {
          const firstReel = prevReels[0];
          const newReels = [...prevReels.slice(1), firstReel];
          setCurrentReel(newReels[0]);  // Update the current reel
          return newReels;
        });
        setRearrange(false)
      }, 500) // Duration of the downward animation and rearrange

      return () => clearTimeout(rearrangeTimeout)
    }
  }, [rearrange]);

  return (
    <section ref={sectionRef} className='relative z-[99] w-full items-center flex flex-col'>
      {
        circularReels.slice(sliceStart[0], sliceStart[1]).map((reel, index) => (
          <div 
            key={index}
            className={`absolute transition-all ease-in-out duration-${index === 0 ? '500' : '500'}`}
            style={{
              zIndex: 999 - index,
              transform: `${index === 0 && animate ? 'translateY(-20px)' : rearrange && index === 0 ? 'translateY(80px)' : `scale(${0.97 - index * 0.03})`}`,
              top: `${rearrange && index > 0 ? `${(index - 1) * 1.5}rem` : `${index * 1.5}rem`}`,
              transition: 'all 0.5s ease',
            }}
          >
            <Reklama reel={reel} />
          </div>
        ))
      }
      <div className='absolute top-[10rem] z-[2]'>
        Reelslar tugadi
      </div>
    </section>
  )
}

export default ReelsSection