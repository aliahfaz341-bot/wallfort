import React from 'react'
import Button from './Button'

const OurInterior = () => {
    return (
        <div>
            <p className='text-2xl text-center mt-20 font-semibold'>Our Interior Design Products</p>
            <div className='flex gap-3 flex-wrap justify-center mt-10'>
                <div className='flex gap-3'>
                    <div className='flex flex-col w-48 gap-3'>
                        <img src='/Image/image 24 (1).png' />
                        <img src='/Image/image 25.png' />
                    </div>
                    <img className='w-64' src='/Image/image 23.png' />
                </div>
                <div className='gap-3 flex flex-col'>
                    < img className='w-48' src='/Image/image 26.png' />
                    < img className='w-48' src='/Image/image 27.png' />
                </div>
                < img className='w-64' src='/Image/image 28.png' />
            </div>
            <div className='text-center mt-5'>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,</p>
                <p>purus sit amet luctus venenatis, lectus magna fringilla urna,</p>
                <p> porttitor rhoncus dolor purus non enim</p>
            </div>
            <div className='text-center mt-6'>
                <Button text={'View all'} />
            </div>
        </div >
    )
}

export default OurInterior
