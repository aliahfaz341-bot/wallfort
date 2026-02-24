import React from 'react'
import Button from './Button'

const HomeBlogs = () => {
    const item = [
        {
            src: '/Image/ModernInterior.png',
            title: 'Modern Interior',
            para: 'Lorem ipsum dolor sit amet consectetur adipiscing elit utaliquam',
        },
        {
            src: '/Image/ExteriorProject.png',
            title: 'Exterior Project',
            para: 'Lorem ipsum dolor sit amet consectetur adipiscing elit utaliquam',
        },
        {
            src: '/Image/GreyBeauty.png',
            title: 'Grey Beauty',
            para: 'Lorem ipsum dolor sit amet consectetur adipiscing elit utaliquam',
        },
        {
            src: '/Image/Plaantation.png',
            title: 'Plantation interior',
            para: 'Lorem ipsum dolor sit amet consectetur adipiscing elit utaliquam',
        },
        {
            src: '/Image/Furniture.png',
            title: 'Role of furnitures',
            para: 'Lorem ipsum dolor sit amet consectetur adipiscing elit utaliquam',
        },
    ]
    return (
        <div>
            <p className='text-2xl mt-10 font-semibold ml-8'>Blogs</p>
            <div className='flex flex-wrap justify-around'>
                {
                    item.map((item, index) => (
                        <div key={index}>
                            <img className='w-48 h-30 mt-10' src={item.src} />
                            <p className='mt-2 font-semibold'>{item.title}</p>
                            <p className='w-40'>{item.para}</p>
                        </div>
                    ))
                }
            </div>
            <div className='text-center'>
                <Button text={'View all'} />
            </div>

        </div>
    )
}

export default HomeBlogs
