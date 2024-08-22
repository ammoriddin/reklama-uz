"use client"

import React, { useEffect, useRef, useState } from 'react'
import Reklama from '../reklama'

const ReelsSection = ({ reels = [
  {
    "id": 1,
    "type": "image",
    "url": "/posts/uzum-market-post.webp",
    "views": 139,
    "comments": 34,
    "shares": 47
  },
  {
    "id": 2,
    "type": "video",
    "url": "/reklama/reklama.mp4",
    "views": 256,
    "comments": 52,
    "shares": 67
  },
  {
    "id": 4,
    "type": "video",
    "url": "/reklama/reklama2.mp4",
    "views": 402,
    "comments": 89,
    "shares": 112
  },
  {
    "id": 1,
    "type": "image",
    "url": "/posts/uzum-market-post.webp",
    "views": 139,
    "comments": 34,
    "shares": 47
  },
  {
    "id": 2,
    "type": "video",
    "url": "/reklama/reklama4.mp4",
    "views": 256,
    "comments": 52,
    "shares": 67
  },
  {
    "id": 3,
    "type": "video",
    "url": "/reklama/reklama5.mp4",
    "views": 98,
    "comments": 14,
    "shares": 23
  },
  {
    "id": 4,
    "type": "video",
    "url": "/reklama/reklama3.mp4",
    "views": 402,
    "comments": 89,
    "shares": 112
  }
] }) => {
  const [sliceStart, setSliceStart] = useState([0, 3])
  const [animate, setAnimate] = useState(false)
  const [rearrange, setRearrange] = useState(false)
  const sectionRef = useRef(null)
  const [circularReels, setCircularReels] = useState(reels)

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