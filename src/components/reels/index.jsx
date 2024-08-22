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
  const slicedReels = reels.slice(sliceStart[0], sliceStart[1])
  const [animate, setAnimate] = useState(false)
  const sectionRef = useRef(null)

  const handleScroll = (event) => {
    if (event.deltaY > 0) {
      setAnimate(true)
    } else {
      return
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
      const timeout = setTimeout(() => {
        setSliceStart([sliceStart[0] + 1, sliceStart[1] + 1])
        setAnimate(false)
      }, 500) // This timeout should match the transition duration

      return () => clearTimeout(timeout)
    }
  }, [animate])

  return (
    <section ref={sectionRef} className='relative z-[99] w-full items-center flex flex-col'>
      {
        slicedReels.map((reel, index) => (
          <div 
            key={index}
            className={`absolute transition-all duration-500 ease-in-out ${index === 0 && animate ? 'translate-y-[-2rem] opacity-0' : ''}`}
            style={{
              zIndex: 999 - index,
              transform: `scale(${0.97 - index * 0.03})`,
              top: `${index * 1.5}rem`,
              transition: 'top 0.5s ease, opacity 0.5s ease',
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