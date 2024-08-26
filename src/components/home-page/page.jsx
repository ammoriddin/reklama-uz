"use client"

import React, { useState } from 'react'
import UserProfileSidebar from '../user-profile'
import ReelsSection from '../reels'
import RightSidebar from './right-sidebar'
import FilterUserRols from '@/filter-rols/useUserRole/useUserRole'
import ManagerSidebar from '@/containers/manager-sidebar'
import CompanySidebar from '@/company-ui/containers/sidebar'

const HomePage = () => {
  const [currentReel, setCurrentReel] = useState(null);

  const reels = [
    {
      "id": 2,
      "type": "video",
      "url": "/reklama/reklama.mp4",
      "views": 256,
      "comments": 52,
      "shares": 67,
      "tags": ['#futboll','#maishi texnikalar','#ichimliklar','#televizorlar'],
      "description": 'Reference site about Lorem Ipsum, giving information on its origins, as well as a random Lipsum generator. Reference site about Lorem Ipm Ipsum, giving information on its origins, as well as a random Lipsum generator. Reference site about Lorem Ipsum, giving information on its origins, as well as a random Lipsum generator. Reference site about Lorem Ipsum, giving information on its origins, as well as a random Lipsum generator.'
    },
    {
      "id": 4,
      "type": "video",
      "url": "/reklama/reklama2.mp4",
      "views": 402,
      "comments": 89,
      "shares": 112,
      "tags": ['#tennis','#ufc','#box','#kurash','#sport','#yengil atletika'],
      "description": 'Reference site about Lorem Ipsum, giving information on its origins, as well as a random Lipsum generator. Reference site about Lorem Ipsum, giving information on its origins, as well as a random Lipsum generator.Reference site about Lorem Ipsum, giving information on its origins, as well as a random Lipsum generator. Reference site about Lorem Ipsum, giving information on its origins, as well as a random Lipsum generator. Reference site about Lorem Ipsum, giving information on its origins, as well as a random Lipsum generator. Reference site about Lorem Ipsum, giving information on its origins, as well as a random Lipsum generator. Reference site about Lorem Ipsum, giving information on its origins, as well as a random Lipsum generator.'
    },
    {
      "id": 1,
      "type": "image",
      "url": "/posts/uzum-market-post.webp",
      "views": 139,
      "comments": 34,
      "shares": 47,
      "tags": ['#marketing','#ingiliz tili','#dasturlash','#ichimliklar','#kiyimkechak'],
      "description": 'Refipsum generator.Reference site about Lorem Ipsum, giving information on its origins, as well as a random Lipsum generator. Reference site about Lorem Ipsum, giving information on its origins, as well as a random Lipsum generator. Reference site about Lorem Ipsum, giving information on its origins, as well as a random Lipsum generator. Reference site about Lorem Ipsum, giving information onerator.'
    },
    {
      "id": 1,
      "type": "image",
      "url": "/posts/uzum-market-post.webp",
      "views": 139,
      "comments": 34,
      "shares": 47,
      "tags": ['#marketing','#ingiliz tili','#dasturlash','#ichimliklar','#kiyimkechak'],
      "description": 'Reference site about Lorem Ipsum, giving information on its origins, as well as a random Lipsum generator. ence site about Lorem Ipsum, giving information on its origins, as well as a random Lipsum generator. Reference site about Lorem Ipsum, giving information on its origins, as well as a random Lipsum generator. Reference site about Lorem Ipsum, giving information on its origins, as well as a random Lipsum generator. Reference site about Lorem Ipsum, giving information on its origins, as well as a random Lipsum generator.'
    },
    {
      "id": 2,
      "type": "video",
      "url": "/reklama/reklama4.mp4",
      "views": 256,
      "comments": 52,
      "shares": 67,
      "tags": ['#mersedez benz','#mashinalar','#career','#retro'],
      "description": 'Reference site about Lorem Ipsum, giving information on its origins, as well as a random Lipsum generator. Reference site about Lorem Ipsum, giving information on its origins, as well as a random Lipr.'
    },
    {
      "id": 3,
      "type": "video",
      "url": "/reklama/reklama5.mp4",
      "views": 98,
      "comments": 14,
      "shares": 23,
      "tags": ['#marketing','#vayn','#pepsi','#ichimliklar','#hazil'],
      "description": 'Reference site about Lorem Ipsum, giving information on its origins, as well as a random Lipsum generator. Reference site about Lorem Ipsum, giving information on its origins, as well as a random Lipsum generator.Reference site about Lorem Ipsum, giving information on its origins, as well as a random Lipsum generator. Reference site about Lorem Ipsum, givingpsum generator. Reference site about Lorem Ipsum, giving information on its origins, as well as a random Lipsum generator. Reference site about Lorem Ipsum, giving information on its origins, as well as a random Lipsum generator.'
    },
    {
      "id": 4,
      "type": "video",
      "url": "/reklama/reklama3.mp4",
      "views": 402,
      "comments": 89,
      "shares": 112,
      "tags": ['#marketing','#ingiliz tili','#dasturlash','#ichimliklar','#kiyimkechak'],
      "description": 'Reference site about iving information on its origins, as well as a random Lipsum generator.Reference site about Lorem Ipsum, giving information on its origins, as well as a random Lipsum generator. Reference site about Lorem Ipsum, giving information on its origins, as well as a random Lipsum generator. Reference site about Lorem Ipsum, giving information on its origins, as well as a random Lipsum generator. Reference site about Lorem Ipsum, giving information on its origins, as well as a random Lipsum generator. Reference site about Lorem Ipsum, giving information on its origins, as well as a random Lipsum generator.'
    }
  ]

  return (
    <section className='flex gap-[30px] px-[50px] laptop:px-[150px]'>

      {/* Sidebar */}
      <FilterUserRols firstComponent={<UserProfileSidebar />} secondComponent={<ManagerSidebar />} thirdComponent={<CompanySidebar />} />

      {/* Main Content */}
      <section className='pt-[20px] pb-[30px] h-[93vh] flex-grow-[1]'>
        <ReelsSection reels={reels} setCurrentReel={setCurrentReel} />
      </section>

      {/* Right Sidebar */}
      <RightSidebar initialData={currentReel} />
    </section>
  )
}

export default HomePage
