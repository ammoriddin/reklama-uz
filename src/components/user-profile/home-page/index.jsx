import MostGetMoney from '@/components/most-get-money'
import Categorie from '@/components/categories'
import React from 'react'

const HomePageSidebar = () => {
    const mostGetMoneyUsers = [
        {
            image: 'https://img.freepik.com/free-photo/young-woman-casual-peach-sweater-isolated-green-olive-color-wall_343596-5252.jpg?size=626&ext=jpg&ga=GA1.1.2082370165.1717027200&semt=ais_user'
        },
        {
            image: 'https://cdn.pixabay.com/photo/2022/03/11/06/14/indian-man-7061278_960_720.jpg'
        },
        {
            image: 'https://img.freepik.com/free-photo/beautiful-young-woman-white-dress-holding-shopping-bags_23-2148898729.jpg?size=626&ext=jpg&ga=GA1.1.2082370165.1717027200&semt=ais_user'
        },
        {
            image: 'https://img.freepik.com/free-photo/cheerful-young-woman-posing-with-peace-sign_23-2148873306.jpg?size=626&ext=jpg&ga=GA1.1.2082370165.1717027200&semt=ais_user'
        },
        {
            image: 'https://img.freepik.com/free-photo/smiling-happy-man-showing-heart-shape-fingers_23-2148883403.jpg?size=626&ext=jpg&ga=GA1.1.2082370165.1717027200&semt=ais_user'
        },
        {
            image: 'https://img.freepik.com/free-photo/happy-young-woman-wearing-sunglasses_23-2148799658.jpg?size=626&ext=jpg&ga=GA1.1.2082370165.1717027200&semt=ais_user'
        },
        {
            image: 'https://img.freepik.com/free-photo/portrait-smiling-african-american-girl-outdoors_23-2148744533.jpg?size=626&ext=jpg&ga=GA1.1.2082370165.1717027200&semt=ais_user'
        },
        {
            image: 'https://img.freepik.com/free-photo/smiling-girl-dressed-casual-peach-sweater-posing-isolated_23-2149015888.jpg?size=626&ext=jpg&ga=GA1.1.2082370165.1717027200&semt=ais_user'
        },
        {
            image: 'https://img.freepik.com/free-photo/young-woman-studio-holding-cup-coffee_23-2148744565.jpg?size=626&ext=jpg&ga=GA1.1.2082370165.1717027200&semt=ais_user'
        }
    ];
    

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