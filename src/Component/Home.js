import React from 'react'
import Button from './Button'
import Landinterior from './Why land interior'
import EasyStep from './3EasyStep'
import WhatweDo from './WhatweDo'
import OurProject from './OurProject'
import HomeBlogs from './HomeBlogs'
import OurInterior from './OurInterior'
import HappyCustomer from './HappyCustomer'
import LetTalk from './LetTalk'
import Navbar from './Navbar'

const Home = () => {
    const item = [
        {
            src: '/Image/image 15 (1).png',
            title: 'Get personalised home interior',
            subtitle: 'in just 50 days',
        }
    ]
    return (
        <div >
            {
                item.map((item => (
                    <div className='flex flex-wrap gap-10 mt-14'>
                        <img className='w-90 h-80' src={item.src} />
                        <div className='content-center text-center w-full sm:w-auto'>
                            <p className='font-poppins text-xl'>{item.title}</p>
                            <p className='font-semibold font-poppins text-2xl'>{item.subtitle}</p>
                            <div className='mt-4'>
                                <Button text={'SPEAK WITH A ONLINE CONSULTANT'} />
                            </div>
                        </div>
                    </div>
                )))
            }

            <Navbar />

            < Landinterior />

            <EasyStep />

            <WhatweDo />

            <OurProject />

            <HomeBlogs />

            <OurInterior />

            <HappyCustomer />

            <LetTalk />
        </div>
    )
}

export default Home