import React, { useState } from 'react'
import SendButton from './SendButton'

const LetTalk = () => {
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    return (
        <div className='ml-10 mt-40'>
            <p className='font-semibold mt-10'>Let Talk about Your Dream Home</p>
            <div className='flex flex-wrap mt-8 gap-10'>
                <input
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-80 border-b-2 border-gray-300 focus:outline-none"
                />
                <input
                    type="text"
                    placeholder="Phone/Email"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-80 border-b-2 border-gray-300 focus:outline-none"
                />
                <SendButton name={name} phone={phone} />
            </div>
        </div>
    )
}

export default LetTalk