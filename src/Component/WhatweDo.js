import React from 'react'

const WhatweDo = () => {
    const item = [
        {
            src: '/Image/image 3.png',
            title: 'Modular Kitchen',
        },
        {
            src: '/Image/image 4.png',
            title: 'Bedroom',
        },
        {
            src: '/Image/image 8.png',
            title: 'Living Room',
        },
        {
            src: '/Image/image 9.png',
            title: 'Home Office',
        }
    ]
    return (
        <div>
            <p className='text-2xl text-center mt-20 font-semibold'>
                What we do?
            </p>
            <div className='flex flex-wrap justify-around mt-10'>
                {
                    item.map((item, index) => (
                        <div key={index}>
                            <img className='w-60 h-30 flex' src={item.src} />
                            <p className='text-center text-purple-900 mt-4 text-2xl font-semibold'>{item.title}</p>
                        </div>
                    ))
                }
            </div>
            <div className='text-center mt-7'>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna</p>
            </div>

        </div>
    )
}

export default WhatweDo
