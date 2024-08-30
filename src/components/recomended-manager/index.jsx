import React from 'react'
import RecomendedUser from '../recomended-user-card'

const RecomendedManager = () => {
  const managers = [
    {
      name: 'Abubakir',
      isSubscribe: false,
      image: '/users/user1.jpg',
      companys: [
        {
          image: '/companys/bmw.png'
        },
        {
          image: '/companys/pepsi.png'
        },
        {
          image: '/companys/onest.png'
        },
      ]
    },
    {
      name: 'Asadbek',
      isSubscribe: false,
      image: '/users/user2.jpg',
      companys: [
        {
          image: '/companys/pepsi.png'
        }
      ]
    },
    {
      name: 'Ismoil',
      isSubscribe: true,
      image: '/users/user3.jpg',
      companys: [
        {
          image: '/companys/pepsi.png'
        },
        {
          image: '/companys/uzummarket.png'
        },
      ]
    },
    {
      name: 'Usmon',
      isSubscribe: true,
      image: '/users/user4.jpg',
      companys: [
        {
          image: '/companys/bmw.png'
        },
        {
          image: '/companys/uzummarket.png'
        },
      ]
    },
    {
      name: 'Ammoriddin',
      isSubscribe: false,
      image: '/users/user5.jpg',
      companys: [
        {
          image: '/companys/pepsi.png'
        },
        {
          image: '/companys/bmw.png'
        },
        {
          image: '/companys/uzummarket.png'
        },
        {
          image: '/companys/onest.png'
        },
      ]
    },
    {
      name: 'Isfandiyor',
      isSubscribe: false,
      image: '/users/user6.jpg',
      companys: [
        {
          image: '/companys/uzummarket.png'
        }
      ]
    },
    {
      name: 'Abu bakir',
      isSubscribe: false,
      image: '/users/user7.jpg',
      companys: [
        {
          image: '/companys/pepsi.png'
        },
        {
          image: '/companys/onest.png'
        },
      ]
    },
    {
      name: 'Azizbek',
      isSubscribe: false,
      image: '/users/user8.jpg',
      companys: [
        {
          image: '/companys/bmw.png'
        },
        {
          image: '/companys/uzummarket.png'
        },
        {
          image: '/companys/onest.png'
        },
      ]
    },
    {
      name: "Go'libjon",
      isSubscribe: false,
      image: '/users/user9.jpg',
      companys: [
        {
          image: '/companys/onest.png'
        },
        {
          image: '/companys/uzummarket.png'
        },
      ]
    },
    {
      name: 'Shahbozbek',
      isSubscribe: true,
      image: '/users/user10.jpg',
      companys: [
        {
          image: '/companys/onest.png'
        }
      ]
    },
    {
      name: 'Abbos',
      isSubscribe: true,
      image: '/users/user11.jpg',
      companys: [
        {
          image: '/companys/uzummarket.png'
        }
      ]
    },
  ]

  return (
    <section className='h-[95vh] overflow-auto pb-[35px]'>
    
        <div className='flex flex-col gap-[30px]'>
          {
            managers.map((item,index) => (
              <RecomendedUser key={index} image={item.image} position={'SMM Manager'} name={item.name} isSubscribed={item.isSubscribe} companys={item.companys} />
            ))
          }
        </div>
    </section>
  )
}

export default RecomendedManager