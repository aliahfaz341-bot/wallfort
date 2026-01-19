import React from 'react'

const EasyStep = () => {

    const steps = [
        {
            title: 'Explore',
            heading: 'Explore more than just modular design ideas with our experts.',
        },
        {
            title: 'Design',
            heading: 'Complete the designs with painting, flooring and other decor solutions',
        },
        {
            title: 'Move-in',
            heading: 'Move in with ease, with our hassle-free civil work and installation services.',
        },
    ]

    return (
        <div className="mt-20 relative w-full flex justify-center text-center">

            {/* Background Image */}
            <img
                className="w-[60%] rounded-lg shadow-lg"
                src="/Image/image 16.png"
            />

            {/* Overlay Box */}
            <div className="absolute top-10 left-20 bg-white/80 p-6 rounded-lg shadow-xl w-[36%]">
                {/* Title */}
                <p className="text-2xl font-semibold">Make your dream interior in</p>
                <p className="text-3xl font-bold mt-1">3 easy steps</p>

                {/* Steps list */}
                {steps.map((step, index) => (
                    <div key={index} className="mt-5 text-center ">
                        <p className="text-xl font-bold">{step.title}</p>
                        <p className="text-gray-700 ">{step.heading}</p>
                    </div>
                ))}

            </div>
        </div>
    )
}

export default EasyStep
