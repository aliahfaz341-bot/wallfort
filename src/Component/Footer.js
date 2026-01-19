import React from 'react'

const Footer = () => {
    return (
        <div className='bg-slate-100'>
            <div className='mt-20 flex flex-wrap justify-around'>
                <div>
                    <img src='/Image/logo (2).png' />
                    <p className='w-80'>We introduce our selves as  LAND Interior and
                        Architectural Design Consultancy – one of the best
                        interior designers in Chennai. Chennai Luxury Interior and Architectural Design
                        Consultancy has challenged the conventional way of interior designing and given
                        new dimensions to the art of interior designing.</p>
                </div>

                {/* middle */}
                <div className='mt-10'>
                    <p className='font-semibold'>WHAT WE DO</p>
                    <div className='mt-12'>
                        <p>Interior Design</p>
                        <p>Kitchen</p>
                        <p>Ceiling</p>
                        <p>Bedroom</p>
                        <p>Smart Home</p>
                    </div>
                </div>

                {/* last */}
                <div>
                    <p className='font-semibold mt-10'>Get in touch</p>
                    <div className='mt-12'>
                        <p>landinteriors@gmail.com</p>
                        <p>+91 98987 65656</p>
                    </div>
                </div>
            </div>
            <div className='flex justify-end gap-6 font-semibold'>
                <p>About</p>
                <p>Projects</p>
                <p>Studio</p>
                <p>Blog</p>
                <p>Contact</p>
            </div>
        </div>

    )
}

export default Footer