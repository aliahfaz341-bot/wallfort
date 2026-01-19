import React from 'react'

const Button = ({ text }) => {
    return (
        <div>
            <button className='bg-purple-900 p-2 text-white'>{text}</button>
        </div>
    )
}

export default Button
