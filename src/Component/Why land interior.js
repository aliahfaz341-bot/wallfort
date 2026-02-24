
const Landinterior = () => {
    const item = [
        {
            src: '/Image/Pay in rent.png',
            heading: '50 days or we',
            para: 'pay you rent'
        },
        {
            src: '/Image/Home (2).png',
            heading: '1500+happy',
            para: 'customers'
        },
        {
            src: '/Image/certificate.png',
            heading: '300+ design',
            para: 'experties'
        }
    ]

    return (
        <div>
            <p className='text-2xl text-center mt-20 font-semibold'>
                Why LAND Interiors
            </p>

            {/* Flex parent here */}
            <div className='flex flex-wrap justify-around mt-10 '>
                {
                    item.map((item, index) => (
                        <div key={index} className='text-center'>
                            <img src={item.src} className='w-22 h-22' />
                            <p className='mt-2 font-semibold'>{item.heading}</p>
                            <p className='font-medium'>{item.para}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Landinterior
