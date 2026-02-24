import React from 'react'

const HappyCustomer = () => {
    return (
        <div>
            <p className='text-2xl text-center mt-20 font-semibold'>Our Happy Customer</p>
            <div className='text-center mt-7'>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet</p>
                <p>luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim</p>
            </div>
            <div className='relative flex justify-center'>
                <div className='flex justify-center relative mt-10'>
                    <img className='w-100 h-60' src='/Image/image 22.png' />
                </div>
                <div className='absolute pl-10 pr-10 bg-white flex flex-col mt-52 justify-center text-center'>
                    <div className='flex justify-center mt-[-10%]'>
                        <img className='w-20' src='/Image/Ellipse 30.png' />
                    </div>
                    <p className='w-80'>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor</p>
                    <p className='font-bold'>-Jeo Stanlee</p>
                </div>
            </div>
        </div>
    )
}

export default HappyCustomer
