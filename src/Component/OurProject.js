import React from 'react'
import Button from './Button'

const OurProject = () => {
    return (
        <div className='flex flex-wrap justify-center gap-10'>
            {/* Images */}
            <div className='sm:justify-center'>
                <div className='w-[40%] mt-20'>
                    <div className='flex justify-around gap-3' >
                        <img className='w-60 h-38' src='/Image/image 11.png' />
                        <img className='w-60 h-28' src='/Image/image 18.png' />
                    </div>

                    <div className='flex justify-around gap-3'>
                        <img className='w-60 h-28 mt-3' src='/Image/image 19.png' />
                        <img className='w-60 h-30 mt-[-36%]' src='/Image/image 17.png' />
                    </div>
                </div>
            </div>


            {/* RightSide */}
            <div className='w-[50%] flex flex-col justify-center leading-6'>
                <p className='text-2xl text-center font-semibold'>Our Projects</p>
                <p className='mt-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel fringilla est ullamcorper eget nulla</p>
                <div className='text-center mt-6'>
                    <Button text={'View all'} />
                </div>
            </div>

        </div>

    )
}

export default OurProject
