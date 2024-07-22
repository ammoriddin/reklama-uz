import MostGetMoney from '@/components/most-get-money'
import Categorie from '@/components/categories'
import React from 'react'

const HomePageSidebar = () => {
    const mostGetMoneyUsers = [
        {
            image: '/companys/pepsi.png'
        },
        {
            image: '/companys/pepsi.png'
        },
        {
            image: '/companys/pepsi.png'
        },
        {
            image: '/companys/pepsi.png'
        },
        {
            image: '/companys/pepsi.png'
        },
        {
            image: '/companys/pepsi.png'
        },
        {
            image: '/companys/pepsi.png'
        },
        {
            image: '/companys/pepsi.png'
        },
        {
            image: '/companys/pepsi.png'
        }
    ]

    return (
        <div className='border-t-[1px] border-solid border-borderColor mt-[40px] pt-[40px] mb-[15px]'>
            <h4 className='text-black text-[0.938rem] leading-[17px] font-[500] mb-[8px]'>Qiziqishlar</h4>
            <div className='flex w-[250px] flex-wrap gap-[4px] mb-[40px]'>
                <Categorie close={false} categorie_name={'ingiliz tili'}  />
                <Categorie close={false} categorie_name={'dizayn'}  />
                <Categorie close={false} categorie_name={'marketing'}  />
                <Categorie close={false} categorie_name={'futolkalar'}  />
                <Categorie close={false} categorie_name={'shim'}  />
                <Categorie close={false} categorie_name={'futbolkalar'}  />
            </div>

            {/* Who made the most money */}
            <MostGetMoney data={mostGetMoneyUsers} />
        </div>
    )
}

export default HomePageSidebar