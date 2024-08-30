import React from 'react'
import MessageCard from './message-card'

const InboxSection = () => {
  const messages = [
    {
      name: 'Abubakir',
      isSubscribe: false,
      image: '/users/user1.jpg'
    },
    {
      name: 'Asadbek',
      isSubscribe: false,
      image: '/users/user2.jpg'
    },
    {
      name: 'Ismoil',
      isSubscribe: true,
      image: '/users/user3.jpg'
    },
  ]

  return (
    <section className='flex gap-[33px] pb-[35px] flex-col max-w-[800px]'>
      {
        messages.map((item, index) => (
          <MessageCard key={index} image={item.image} isSubscribe={item.isSubscribe} name={item.name} />
        ))
      }
    </section>
  )
}

export default InboxSection